// src/components/Header.tsx
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ backgroundColor: "#000" }}>
        <Typography variant="h6">Meu Header</Typography>
      </Toolbar>
    </AppBar>
  );
}
