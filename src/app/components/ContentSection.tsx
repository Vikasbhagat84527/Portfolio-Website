import React from 'react'
import { Stack, Box } from '@mui/material'
import HeroSection from './HeroSection'
import SkillsSection from './SkillsSection'
import ProjectSection from './ProjectSection'
import ExperienceSection from './ExperienceSection'
import ContactForm from './ContactForm'

const ContentSection = () => {
  return (
    <Stack spacing={10} sx={{ flex: 1 }}>
      <Box id="home"><HeroSection /></Box>
      <Box id="skills"><SkillsSection /></Box>
      <Box id="experience"><ExperienceSection /></Box>
      <Box id="projects"><ProjectSection /></Box>
      <Box id="contact"><ContactForm /></Box>
    </Stack>
  )
}

export default ContentSection
