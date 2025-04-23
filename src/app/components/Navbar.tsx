"use client";
import { IconButton, Stack } from '@mui/material'
import React from 'react'
import { ContactIcon, EditIcon, HomeIcon, ProjectIcon, ToolIcon } from './icons'
const Navbar = () => {
  return (
    <Stack
    direction='row'
    sx={{
      position: 'fixed',
      top:10,
      left: '50%',
      transform: 'translateX(-50%)',
      width:{sm:'250px', md:'300px', xl:'350px'},
      backgroundColor:'#292A2B',
      borderRadius: '12px',
      justifyContent: 'space-between',
      zIndex:1000
    }}>
      <IconButton><HomeIcon/></IconButton>
      <IconButton><ToolIcon/></IconButton>
      <IconButton><EditIcon/></IconButton>
      <IconButton><ProjectIcon/></IconButton>
      <IconButton><ContactIcon/></IconButton>
    </Stack>
  )
}

export default Navbar
