import React from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { Redirect } from './icons';
import Link from 'next/link';

interface ProjectCardProps {
  webUrl: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  webUrl,
  imageSrc,
  imageAlt,
  title,
  description,
}) => {
  return (
    <Link href={webUrl} target="_blank" style={{ textDecoration: 'none' }}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        maxWidth="600px"
        sx={{
          position: 'relative',
          backgroundColor: '#292A2B',
          borderRadius: '12px',
          height: { xs: '250px', md: '150px' },
          alignItems: 'center',
          p: 1,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
          },
        }}
      >
        <Box
          sx={{
            borderRadius: '12px',
            overflow: 'hidden',
            height: '110px',
            minWidth: '220px',
            mt:{xs:3, md:0}
          }}
        >
          <Image src={imageSrc} alt={imageAlt} height={110} width={220} />
        </Box>

        <Stack direction="column" p={1} flex="1">
          <Typography variant="h5">{title}</Typography>
          <Box>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              {description}
            </Typography>
          </Box>
        </Stack>

        <IconButton
          sx={{
            position: { xs: 'absolute', md: 'static' },
            top: { xs: 8, md: 'auto' },
            right: { xs: 8, md: 'auto' },
            marginLeft: { xs: 0, md: 'auto' },
          }}
        >
          <Redirect />
        </IconButton>
      </Stack>
    </Link>
  );
};

export default ProjectCard;
