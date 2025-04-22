import { Stack, Typography } from "@mui/material";
import React from "react";

const HeroSection = () => {
  return (
    <Stack
    maxWidth='sm'
    marginTop={10}>
      <Typography variant="h1" sx={{ fontWeight: "1000" }}>
        SOFTWARE
      </Typography>
      <Typography variant="h1" sx={{ color: "#353334", fontWeight: "1000" }}>
        DEVELOPER
      </Typography>
      <Typography
      variant='h5' sx={{
        mt:5
      }}>
        An experienced Software Developer with having worked on diverse and real-world projects using the most advanced and up to date tools.
      </Typography>
    </Stack>
  );
};

export default HeroSection;
