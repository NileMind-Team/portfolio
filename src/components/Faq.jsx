'use client'

const Faq = ({ lang }) => {
  const content = {
    en: {
      heading: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about DoGether Tech',
      items: [
        {
          q: 'What is DoGether Tech?',
          a: 'DoGether Tech is a professional software company in Egypt specializing in web development, mobile apps, e-commerce stores, POS systems, and UI/UX design. Founded in 2025, we serve clients across Egypt and the Middle East.',
        },
        {
          q: 'Is DoGether a software company in Fayoum?',
          a: 'Yes. DoGether Tech is based in Fayoum, Egypt, and serves clients in Cairo, Alexandria, Port Said and all Egyptian governorates. Contact: +201062485133',
        },
        {
          q: 'What services does DoGether Tech offer?',
          a: 'Web development, e-commerce stores, mobile apps (Android & iOS), POS and cashier systems, UI/UX design, and DevOps & cloud hosting.',
        },
        {
          q: 'How much does a website cost in Egypt?',
          a: 'DoGether Tech builds professional websites at competitive prices starting from around 8,000 EGP depending on project requirements. Contact us for a free quote.',
        },
        {
          q: 'Do you work with clients remotely?',
          a: 'Yes, we work fully remotely with daily communication over WhatsApp and video calls, guaranteeing the same quality of follow-up — with in-person meetings when needed.',
        },
        {
          q: 'How do I contact DoGether Tech?',
          a: 'Phone/WhatsApp +201062485133 | Facebook: facebook.com/Dogethertech | Website: dogethertech.com',
        },
      ],
    },
    ar: {
      heading: 'الأسئلة الشائعة',
      subtitle: 'كل ما تحتاج معرفته عن DoGether Tech',
      items: [
        {
          q: 'ما هي DoGether Tech؟',
          a: 'DoGether Tech شركة برمجة محترفة في مصر متخصصة في تطوير مواقع الويب، تطبيقات الجوال، المتاجر الإلكترونية، أنظمة نقاط البيع POS، وتصميم UI/UX. تأسست عام 2025 وتخدم عملاء في مصر والشرق الأوسط.',
        },
        {
          q: 'هل DoGether شركة برمجة في الفيوم؟',
          a: 'نعم، DoGether Tech شركة برمجة مقرها الفيوم، مصر، وتخدم عملاء في القاهرة والإسكندرية وبورسعيد وجميع محافظات مصر. للتواصل: +201062485133',
        },
        {
          q: 'ما هي خدمات شركة البرمجة DoGether؟',
          a: 'تطوير مواقع الويب، إنشاء متاجر إلكترونية، تطوير تطبيقات جوال (Android & iOS)، أنظمة نقاط البيع POS والكاشير، تصميم UI/UX، وخدمات DevOps والاستضافة السحابية.',
        },
        {
          q: 'ما هو سعر تصميم موقع إلكتروني في مصر؟',
          a: 'تقدم DoGether Tech تصميم مواقع إلكترونية احترافية بأسعار تنافسية تبدأ من حوالي 8,000 جنيه مصري حسب متطلبات المشروع. تواصل للحصول على عرض سعر مجاني.',
        },
        {
          q: 'هل تعملون مع العملاء عن بُعد؟',
          a: 'نعم، نعمل عن بُعد بالكامل بتواصل يومي عبر واتساب والاجتماعات المرئية، ونضمن نفس جودة المتابعة — مع إمكانية لقاءات عند الحاجة.',
        },
        {
          q: 'كيف أتواصل مع شركة البرمجة DoGether Tech؟',
          a: 'هاتف/واتساب +201062485133 | فيسبوك: facebook.com/Dogethertech | الموقع: dogethertech.com',
        },
      ],
    },
  }

  const t = content[lang] || content.ar
  const isRTL = lang === 'ar'

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  }

  return (
    <section
      id="faq"
      dir={isRTL ? 'rtl' : 'ltr'}
      className="py-16 md:py-24 bg-gray-50 dark:bg-dark transition-colors duration-300"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
              {t.heading}
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
            {t.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {t.items.map((it, i) => (
            <details
              key={i}
              className="group bg-white dark:bg-dark-card rounded-xl sm:rounded-2xl border border-gray-100 dark:border-dark-light shadow-sm overflow-hidden"
            >
              <summary className="flex justify-between items-center gap-4 p-5 sm:p-6 cursor-pointer font-semibold text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-dark-light/40 transition-colors list-none">
                <span>{it.q}</span>
                <span className="text-primary-dark dark:text-primary-light text-2xl leading-none shrink-0 transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                {it.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq
