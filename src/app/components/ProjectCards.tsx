import React from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { Redirect } from './icons';
import Link from 'next/link';

interface ProjectCardProps{
  webUrl: string
  imageSrc: string
  imageAlt: string
  title: string
  description: string
}
const ProjectCard: React.FC<ProjectCardProps> =({webUrl,imageSrc, imageAlt, title, description})=> {
  return (
    <Link href={webUrl} target='_blank'>
    <Stack
    direction={{xs:'column', md:'row'}}
    maxWidth="600px"
    sx={{
      backgroundColor: "#292A2B",
      borderRadius: "12px",
      height: "150px",
      alignItems: "center",
      p: 1,
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        transform: "translateY(-8px)",
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.4)",
      },
    }}
  >
    <Box
      sx={{
        borderRadius: "12px",
        overflow: "hidden",
        height: "110px",
      }}
    >
      <Image src={imageSrc} alt={imageAlt} height={110} width={220} />
    </Box>
    <Stack direction="column" p={1}>
      <Typography variant="h5">{title}</Typography>
      <Box>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </Box>
    </Stack>
    <IconButton sx={{ marginLeft: "auto" }}>
      <Redirect />
    </IconButton>
  </Stack>
  </Link>
  );
}
export default ProjectCard;