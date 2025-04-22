import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import SkillCard from './SkillCard'; // Adjust the import path as needed

interface Skill {
  imageSrc: string;
  title: string;
  description: string;
}

const skills: Skill[] = [
  {
    imageSrc: '/images/NextIcon.png',
    title: 'NextJS',
    description: 'A React Framework',
  },
  {
    imageSrc: '/images/MaterialUI.png',
    title: 'Material UI',
    description: 'Component Library',
  },
  {
    imageSrc: '/images/Typescript.png',
    title: 'Typescript',
    description: 'Programming Language',
  },
  {
    imageSrc: '/images/ShadCN.png',
    title: 'ShadCN',
    description: 'JavaScript Library',
  },
  {
    imageSrc: '/images/NodeJs.png',
    title: 'NodeJS',
    description: 'Runtime Environment',
  },
  {
    imageSrc: '/images/MongoDB.png',
    title: 'MongoDB',
    description: 'Query Language',
  },
  {
    imageSrc: '/images/Prisma.png',
    title: 'Prisma',
    description: 'Version Control',
  },
  {
    imageSrc: '/images/SQL.png',
    title: 'SQL',
    description: 'Testing Framework',
  },
];

const SkillsSection = () => {
  return (
    <Box>
        <Typography variant='h3' sx={{
            fontWeight:700,
            lineHeight:'50px',
            mb:'20px'
        }}>
          Top-Tier Libraries & Frameworks for Exceptional <Typography variant='h3' component="span" sx={{ color: '#8D4AEA',fontWeight: 700,
          lineHeight: "50px", }}>Results</Typography>
        </Typography>
    <Grid container rowGap={2} columnGap={12}>
      {skills.map((skill) => (
        <Grid size={{xs:12, sm:6, md:4}} key={skill.title}  columnSpacing={4}>
          <SkillCard
            imageSrc={skill.imageSrc}
            title={skill.title}
            description={skill.description}
          />
        </Grid>
      ))}
    </Grid>
    </Box>
   
  );
};

export default SkillsSection;