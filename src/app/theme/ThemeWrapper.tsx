"use client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import theme from "./theme"; // Adjust the path as needed

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Optional: Adds MUI's baseline styles */}
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}