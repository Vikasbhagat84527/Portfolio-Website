import React from "react";
import { IconButton, Stack, Tooltip } from "@mui/material";
import {
  HomeIcon,
  ToolIcon,
  EditIcon,
  ProjectIcon,
  ContactIcon,
} from "./icons";

interface NavbarProps {
  activeSection: string;
  onNavClick: (id: string) => void;
}

const NAV_ITEMS: { id: string; label: string; icon: React.ReactNode }[] = [
  { id: "home", label: "Home", icon: <HomeIcon /> },
  { id: "skills", label: "Skills", icon: <ToolIcon /> },
  { id: "experience", label: "Experience", icon: <EditIcon /> },
  { id: "projects", label: "Projects", icon: <ProjectIcon /> },
  { id: "contact", label: "Contact Form", icon: <ContactIcon /> },
];

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavClick }) => {
  return (
    <Stack
      direction="row"
      sx={{
        position: "sticky",
        top: 20,
        width: { xs: "250px", sm: "250px", md: "300px", xl: "350px" },
        mx: "auto",
        backgroundColor: "#292A2B",
        borderRadius: "17px",
        justifyContent: "space-between",
        zIndex: 1000,
      }}
    >
      {NAV_ITEMS.map(({ id, label, icon }) => (
        <Tooltip key={id} title={label}>
          <IconButton
            onClick={() => {
              console.log("Active section", activeSection);
              console.log("Active id", id);
              onNavClick(id);
            }}
            sx={{
              backgroundColor: activeSection === id ? "#8D4AEA" : "transparent",
            }}
          >
            {icon}
          </IconButton>
        </Tooltip>
      ))}
    </Stack>
  );
};

export default Navbar;
