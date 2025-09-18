import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MLink,
  Divider,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#072e6a",
        color: "#fff",
        mt: 8,
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Pinnacle Technology Services
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, opacity: 0.85 }}>
              25+ years in Engineering, IT & Cloud — delivering value through
              innovation and technology.
            </Typography>

            {/* Social Icons */}
            <Box sx={{ mt: 2 }}>
              <IconButton
                href="https://facebook.com"
                target="_blank"
                sx={{ color: "#fff", "&:hover": { color: "#3b5998" } }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                sx={{ color: "#fff", "&:hover": { color: "#1da1f2" } }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                href="https://linkedin.com"
                target="_blank"
                sx={{ color: "#fff", "&:hover": { color: "#0077b5" } }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                sx={{ color: "#fff", "&:hover": { color: "#e1306c" } }}
              >
                <Instagram />
              </IconButton>
            </Box>
          </Grid>

          {/* Company Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
              Company
            </Typography>
            {["About", "Careers", "Contact"].map((item, i) => (
              <MLink
                key={i}
                component={Link}
                to={`/${item.toLowerCase()}`}
                color="inherit"
                display="block"
                underline="hover"
                sx={{ opacity: 0.85, mb: 0.5 }}
              >
                {item}
              </MLink>
            ))}
          </Grid>

          {/* Resources Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
              Resources
            </Typography>
            {["Blog", "FAQs", "Support"].map((item, i) => (
              <MLink
                key={i}
                component={Link}
                to={`/${item.toLowerCase()}`}
                color="inherit"
                display="block"
                underline="hover"
                sx={{ opacity: 0.85, mb: 0.5 }}
              >
                {item}
              </MLink>
            ))}
          </Grid>

          {/* Legal Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
              Legal
            </Typography>
            {["Privacy", "Terms", "Sitemap"].map((item, i) => (
              <MLink
                key={i}
                component={Link}
                to={`/${item.toLowerCase()}`}
                color="inherit"
                display="block"
                underline="hover"
                sx={{ opacity: 0.85, mb: 0.5 }}
              >
                {item}
              </MLink>
            ))}
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ bgcolor: "rgba(255,255,255,0.2)", my: 4 }} />

        {/* Copyright */}
        <Typography
          variant="body2"
          sx={{ textAlign: "center", opacity: 0.7 }}
        >
          © {new Date().getFullYear()} Pinnacle Technology Services — All rights
          reserved.
        </Typography>
      </Container>
    </Box>
  );
}
