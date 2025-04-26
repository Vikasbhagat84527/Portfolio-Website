import { Container, Typography } from "@mui/material";
import React from "react";

const HeroSection = () => {
  return (
    <Container maxWidth="md" sx={{ mt: { md: 8 }, minHeight: "360px" }}>
      <Typography
        sx={{
          fontWeight: 1000,
          fontSize: { xs: "3.5rem", sm: "6rem" },
          lineHeight: 1,
        }}
      >
        SOFTWARE
      </Typography>
      <Typography
        sx={{
          color: "#353334",
          fontWeight: 1000,
          fontSize: { xs: "3.5rem", sm: "6rem" },
          lineHeight: 1,
        }}
      >
        DEVELOPER
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          mt: 5,
        }}
      >
        Crafting pixel-perfect, user-centric web experiences that captivate,
        convert, and inspire. Leveraging deep expertise in modern frameworks
        like React and Next.JS, I transform creative concepts into
        reality with clean, efficient, and scalable code. My dedication shines
        through a relentless commitment to mastering the latest industry trends,
        tools, and best practices. I thrive in collaborative environments,
        partnering closely with designers, backend developers, and stakeholders
        to build responsive, high-performance websites that exceed expectation
      </Typography>
    </Container>
  );
};

export default HeroSection;
