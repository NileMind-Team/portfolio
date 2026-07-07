'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Clients from '@/components/Clients'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  const [lang, setLang] = useState<'en' | 'ar'>('ar')
  const [darkMode, setDarkMode] = useState<boolean>(true)

  // Read localStorage after hydration only — Arabic renders server-side first
  useEffect(() => {
    const savedLang = (localStorage.getItem('lang') as 'en' | 'ar') || 'ar'
    const savedDark = localStorage.getItem('darkMode')
    setLang(savedLang)
    if (savedDark !== null) setDarkMode(JSON.parse(savedDark))
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr')
    document.documentElement.setAttribute('lang', lang)
  }, [lang])

  return (
    <div className="min-h-screen bg-white dark:bg-dark transition-colors duration-300">
      <Navbar lang={lang} setLang={setLang} darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero lang={lang} />
        <Clients lang={lang} />
        <Services lang={lang} />
        <Portfolio lang={lang} />
        <Testimonials lang={lang} />
        <About lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  )
}
