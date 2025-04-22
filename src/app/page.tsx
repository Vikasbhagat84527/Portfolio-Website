'use client'
import { Stack } from "@mui/material";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import ThemeWrapper from "./theme/ThemeWrapper";
import ContentSection from "./components/ContentSection";

export default function Home() {
  return (
    <ThemeWrapper>
      <Navbar/>
      <Stack
        direction={{ sm: 'column', md: 'row' }}
        spacing={12}
        sx={{
          m: '8rem 10rem 0 15rem',
        }}
      >
          <ProfileCard/>
        <ContentSection/>
      </Stack>
    </ThemeWrapper>
  );
}