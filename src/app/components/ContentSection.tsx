import { Stack } from '@mui/material'
import React from 'react'
import HeroSection from './HeroSection'
import SkillsSection from './SkillsSection'
import ProjectSection from './ProjectSection'
import ExperienceSection from './ExperienceSection'
import ContactForm from './ContactForm'

const ContentSection = () => {
  return (
    <Stack
    spacing={10}
    sx={{
      flex:'1'
    }}>
      <HeroSection/>
      <SkillsSection/>
      <ProjectSection/>
      <ExperienceSection/>
      <ContactForm/>
    </Stack>
  )
}

export default ContentSection
