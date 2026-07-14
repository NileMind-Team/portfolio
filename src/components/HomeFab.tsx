import Link from 'next/link'

type Props = {
  label?: string
  side?: 'left' | 'right'
}

/**
 * Fixed floating button shown on all standalone SEO pages so visitors always
 * have a clear way back to the main homepage — even after scrolling.
 */
export default function HomeFab({ label = 'الصفحة الرئيسية', side = 'left' }: Props) {
  return (
    <Link
      href="/"
      aria-label={label}
      className={`fixed bottom-5 z-50 flex items-center gap-2 bg-[#1E6DB2] text-white px-5 py-3 rounded-full shadow-xl ring-2 ring-white/60 hover:bg-[#193F94] hover:scale-105 transition-all font-semibold text-sm ${
        side === 'left' ? 'left-5' : 'right-5'
      }`}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
      <span>{label}</span>
    </Link>
  )
}
