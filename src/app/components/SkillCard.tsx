import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface SkillCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ imageSrc, title, description }) => {
  return (
    <Stack
      direction="row"
      sx={{
        backgroundColor: '#292A2B',
        borderRadius: '12px',
        p: 1.5,
        height: '100%',
        width:{xs:'350px', md:'300px', xl:'370px'},
        overflow:'hidden',
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.4)",
        },
      }}
    >
      <Stack
        sx={{
          backgroundColor: '#F9F9F9',
          borderRadius: '12px',
          height: '70px',
          width: '70px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          src={imageSrc}
          alt={`${title} Logo`}
          height={50}
          width={50}
        />
      </Stack>
      <Stack
        sx={{
          pl: 1,
        }}
      >
        <Typography variant="h4">{title}</Typography>
        <Typography color="#847A7A">{description}</Typography>
      </Stack>
    </Stack>
  );
};

export default SkillCard;