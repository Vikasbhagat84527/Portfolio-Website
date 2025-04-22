import React from "react";
import { Stack, Typography } from "@mui/material";

interface ExperienceProp {
  company: string;
  title: string;
  timeline: string;
  experience: string;
}

const ExperienceCard: React.FC<ExperienceProp> = ({ company, title, timeline, experience }) => {

  return (
    <Stack
      sx={{
        width: "95%",
        backgroundColor: "#292A2B",
        borderRadius: "12px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        p: { xs: 2, sm: 3 },
        gap: 1,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.4)",
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          color: "#FFFFFF",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          color: "#B0B0B0",
        }}
      >
        {company}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: "#707070",
        }}
      >
        {timeline}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#E0E0E0",
          lineHeight: 1.5,
        }}
      >
        {experience}
      </Typography>
    </Stack>
  );
};

export default ExperienceCard;