import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ExperienceCard from "./ExperienceCard";

interface Experience {
  id: number;
  title: string;
  company: string;
  timeline: string;
  description: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "SDE Intern",
    company: "Woovly Pvt Ltd.",
    timeline: "Dec 2024 - March 2025",
    description: `Built a full‑stack analytics solution—designing interactive charts with a Google Analytics–style date picker, implementing event tracking, and optimizing data delivery via modular Express.js and ClickHouse queries. Developed a Salesforce Commerce Cloud cartridge and data ingestion pipeline to integrate and manage shoppable video products at scal`,
  },
  {
    id: 2,
    title: "Freelance Developer",
    company: "Objective Learning.",
    timeline: "Oct 2024 - Nov 2024",
    description: "Built a full‑stack EdTech platform (Express.js/Prisma/PostgreSQL) with role‑based auth and key learning endpoints, plus a secure Next.js/TypeScript UI with Tailwind and Fuse.js fuzzy search.",
  },
  {
    id: 3,
    title: "FullStack Developer Intern",
    company: "Hari Solutions Pvt Ltd",
    timeline: "Sept 2023-Feb 2024",
    description: "Built the company’s initial website with a Node/Express OAuth backend; React/Material‑UI frontend optimized via memoization and lazy loading; integrated Google Analytics and SEO.",
  },
  {
    id: 4,
    title: "Frontend Developer Intern",
    company: "Forfurs Pvt Ltd",
    timeline: "Dec 2022-Feb 2023",
    description: " Developed a mobile‑first, responsive React UI with vanilla CSS; leveraged component‑based architecture, lazy loading, and code splitting for clean, optimized performance.",
  },
];

const ExperienceSection = () => {
    return (
        <Stack>
            <Typography variant="h3" sx={{
                 fontWeight:700,
                 lineHeight:'50px',
                 mb:'20px'
            }}>
                Developer{" "} <Typography variant='h3' component="span" sx={{ color: '#8D4AEA',fontWeight: 700,
          lineHeight: "50px", }}>Experience</Typography>
            </Typography>
        <Box sx={{ position: 'relative', paddingLeft: '36px' }}>
        <Box
          sx={{
            position: 'absolute',
            left: '7px',
            top: 0,
            bottom: 0,
            width: '10px',
            borderRadius:'12px',
            border:'3px solid #292A2B',
            zIndex: 1,
          }}
        />
        <Stack direction="column" gap={4}>
          {experiences.map((experience) => (
            <Box key={experience.id} sx={{ position: 'relative' }}>
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  backgroundColor: '#8D4AEA',
                  border: '4px solid #fff',
                  position: 'absolute',
                  left: '-36px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 2,
                }}
              />
              <ExperienceCard
                title={experience.title}
                company={experience.company}
                timeline={experience.timeline}
                experience={experience.description}
              />
            </Box>
          ))}
        </Stack>
      </Box>
        </Stack>
      
    );
  };
  
export default ExperienceSection;