'use client'

import Script from 'next/script'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    clarity?: (...args: unknown[]) => void
  }
}

/**
 * Analytics — يحمّل Microsoft Clarity و Meta (Facebook) Pixel.
 *
 * الـ IDs مثبّتة مباشرة في الكود (مش من متغيرات بيئة) — عشان تشتغل
 * فورًا بعد أي build بدون إعداد إضافي على السيرفر. يُحمَّل بعد التفاعل
 * (afterInteractive/lazyOnload) حتى لا يؤثر على سرعة تحميل الصفحة (LCP).
 *
 * لتغيير أي منهم مستقبلاً: عدّل القيمة هنا مباشرة.
 */
const CLARITY_ID = 'xu94wcig0r'
const META_PIXEL_ID = '1025542786861278'

export default function Analytics() {
  const clarityId = CLARITY_ID
  const metaPixelId = META_PIXEL_ID
  const pathname = usePathname()

  // لا نسجل زيارات بيئة التطوير في Clarity أو Meta حتى لا تختلط بنتائج الموقع الحي.
  const isDevelopmentHost = typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')

  useEffect(() => {
    if (isDevelopmentHost || !pathname) return
    const pageType = pathname.startsWith('/gulf-software')
      ? 'gulf'
      : pathname.startsWith('/tourism-software')
        ? 'tourism'
        : pathname.startsWith('/software-company')
          ? 'local-service'
          : 'general'

    if (typeof window.clarity === 'function') {
      window.clarity('set', 'page_type', pageType)
      window.clarity('set', 'page_path', pathname)
    }
    if (typeof window.fbq === 'function') {
      window.fbq('trackCustom', 'ServicePageView', { page_type: pageType, page_path: pathname })
    }
  }, [pathname, isDevelopmentHost])

  // تتبّع التحويلات: أي ضغطة على واتساب / اتصال / إيميل في الموقع كله
  // تُرسَل كحدث Lead إلى Meta Pixel — بمستمع واحد عام يغطّي كل الصفحات
  // (بما فيها الصفحات المولّدة) دون تعديل كل زر على حدة.
  useEffect(() => {
    if (!metaPixelId || isDevelopmentHost) return
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      const link = target?.closest('a')
      if (!link) return
      const href = link.getAttribute('href') || ''
      let type: string | null = null
      if (href.includes('wa.me') || href.includes('api.whatsapp') || href.includes('whatsapp://')) type = 'whatsapp'
      else if (href.startsWith('tel:')) type = 'call'
      else if (href.startsWith('mailto:')) type = 'email'
      if (!type) return
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Lead', { content_name: type })
      }
    }
    document.addEventListener('click', handleClick, { capture: true })
    return () => document.removeEventListener('click', handleClick, { capture: true } as EventListenerOptions)
  }, [metaPixelId, isDevelopmentHost])

  return (
    <>
      {/* Microsoft Clarity — heatmaps + تسجيل جلسات (مجاني) */}
      {clarityId && !isDevelopmentHost && (
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityId}");`}
        </Script>
      )}

      {/* Meta (Facebook) Pixel — تتبّع التحويلات وبناء جمهور إعادة الاستهداف */}
      {metaPixelId && !isDevelopmentHost && (
        <>
          <Script id="meta-pixel" strategy="lazyOnload">
            {`!function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${metaPixelId}');
              fbq('track', 'PageView');`}
          </Script>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              alt=""
              src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
            />
          </noscript>
        </>
      )}
    </>
  )
}
