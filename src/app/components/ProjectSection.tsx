import React from "react";
import ProjectCard from "./ProjectCards";
import { Box, Stack, Typography } from "@mui/material";
interface projects {
  webUrl: string
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}
const projects: projects[] = [
  {
    webUrl: "https://carepulse-kappa-five.vercel.app/",
    imageSrc: "/images/carePulse.png",
    imageAlt: "Website interface",
    title: "CarePulse",
    description: "A healthCare management app",
  },
  {
    webUrl: "https://live-docs-virid.vercel.app/",
    imageSrc: "/images/liveDocs.png",
    imageAlt: "Website interface",
    title: "LiveDocs",
    description: "Realtime document editing webapp",
  },
  {
    webUrl: "https://hilink-app.netlify.app/",
    imageSrc: "/images/tulian.png",
    imageAlt: "Website interface",
    title: "Hilink",
    description: "A travel guide UI website"
  }
];

const ProjectSection = () => {
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          lineHeight: "50px",
          mb: "20px",
        }}
      >
        Bunch of{" "}
        <Typography variant="h2" component="span" sx={{ color: "#8D4AEA" ,fontWeight: 700,
          lineHeight: "50px",}}>
          Projects
        </Typography>
      </Typography>
      <Stack gap={2}>
      {projects.map((project: projects) => (
        <Box key={project.title} >
            <ProjectCard
            webUrl={project.webUrl}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
            title={project.title}
            description={project.description}
          />
        </Box>
      ))}
    </Stack>
    </Box>
  );
};
export default ProjectSection;
