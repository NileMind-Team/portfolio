'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa6'

type SocialItem = {
  key: string
  label: string
  href: string
  icon: React.ReactNode
  bg: string
}

const items: SocialItem[] = [
  {
    key: 'whatsapp',
    label: 'واتساب',
    href: 'https://wa.me/201062485133',
    icon: <FaWhatsapp size={20} />,
    bg: 'bg-[#25D366] hover:bg-[#1fbd5a]',
  },
  {
    key: 'facebook',
    label: 'فيسبوك',
    href: 'https://www.facebook.com/Dogethertech',
    icon: <FaFacebookF size={18} />,
    bg: 'bg-[#1877F2] hover:bg-[#1568d6]',
  },
  {
    key: 'instagram',
    label: 'إنستجرام',
    href: 'https://www.instagram.com/dogethertech',
    icon: <FaInstagram size={20} />,
    bg: 'bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] hover:opacity-90',
  },
]

/**
 * Fixed floating contact widget, always pinned to the bottom-left corner of
 * the viewport regardless of scroll position. Tapping the main bubble reveals
 * quick links to WhatsApp, Facebook, and Instagram.
 */
export default function SocialFab() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col items-start gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            key="social-menu"
            className="flex flex-col gap-3"
            initial="closed"
            animate="open"
            exit="closed"
          >
            {items.map((item, index) => (
              <motion.a
                key={item.key}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                variants={{
                  closed: { opacity: 0, y: 12, scale: 0.6 },
                  open: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ delay: index * 0.06, type: 'spring', stiffness: 300, damping: 20 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full ${item.bg} text-white flex items-center justify-center shadow-lg ring-2 ring-white/70 transition-colors`}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'إغلاق قائمة التواصل' : 'تواصل معنا'}
        aria-expanded={open}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white flex items-center justify-center shadow-xl ring-2 ring-white/60"
      >
        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {open ? <X size={24} /> : <MessageCircle size={24} />}
        </motion.span>
      </motion.button>
    </div>
  )
}
