'use client'

import { useState, useEffect } from 'react'
import { Stack } from '@mui/material'
import ThemeWrapper from './theme/ThemeWrapper'
import Navbar from './components/Navbar'
import ProfileCard from './components/ProfileCard'
import ContentSection from './components/ContentSection'

const SECTION_IDS = ['home','skills','experience','projects','contact']

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      SECTION_IDS.forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer.unobserve(el)
      })
    }
  }, [])

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <ThemeWrapper>
      <Navbar
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />

      <Stack
        direction={{ sm: 'column', md: 'row' }}
        rowGap={5}
        spacing={12}
        sx={{
          ml: { xs: '1rem', sm: '4rem', md: '6rem' },
          mt: '2.5rem',
          mb: '2rem',
          mr: '1rem',
        }}
      >
        <ProfileCard />
        <ContentSection />
      </Stack>
    </ThemeWrapper>
  )
}
