import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItemButton,
  Box,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";

const nav = [
  { to: "/", label: "Home" },
  { to: "/engineering-services", label: "Engineering" },
  { to: "/it-services", label: "IT" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (to) => pathname === to;

  return (
    <AppBar
      position="sticky"
      elevation={4}
      sx={{
        backgroundColor: "#fff",
        color: "text.primary",
        py: 0.5,
      }}
    >
      <Toolbar sx={{ gap: 2, display: "flex", justifyContent: "space-between" }}>
        {/* Mobile Menu Button */}
        <IconButton
          sx={{ display: { xs: "inline-flex", md: "none" } }}
          color="inherit"
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo + Company Name */}
        <Typography
          component={Link}
          to="/"
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: 800,
            textDecoration: "none",
            color: "primary.main",
            fontSize: "1.5rem",
            letterSpacing: 0.5,
          }}
        >
          Pinnacle Technologies
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, alignItems: "center" }}>
          {nav.map((n) => (
            <Button
              key={n.to}
              component={Link}
              to={n.to}
              sx={{
                fontSize:"18px",
                position: "relative",
                fontWeight: isActive(n.to) ? 700 : 500,
                color: isActive(n.to) ? "primary.main" : "text.primary",
                textTransform: "none",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: -4,
                  left: 0,
                  width: isActive(n.to) ? "100%" : "0%",
                  height: "2px",
                  backgroundColor: "primary.main",
                  transition: "width 0.3s ease",
                },
                "&:hover:after": {
                  width: "100%",
                },
              }}
            >
              {n.label}
            </Button>
          ))}

          {/* Contact Button as CTA */}
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            sx={{
              borderRadius: "25px",
              fontWeight: 600,
              px: 3,
              textTransform: "none",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
            }}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 250 }}>
          {nav.map((n) => (
            <ListItemButton
              key={n.to}
              component={Link}
              to={n.to}
              onClick={() => setOpen(false)}
              sx={{
                fontWeight: isActive(n.to) ? 700 : 500,
                color: isActive(n.to) ? "primary.main" : "text.primary",
              }}
            >
              <ListItemText primary={n.label} />
            </ListItemButton>
          ))}
          <ListItemButton
            component={Link}
            to="/contact"
            onClick={() => setOpen(false)}
          >
            <Button
              variant="contained"
              fullWidth
              sx={{ borderRadius: "25px", fontWeight: 600 }}
            >
              Contact
            </Button>
          </ListItemButton>
        </List>
      </Drawer>
    </AppBar>
  );
}
