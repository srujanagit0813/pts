import React from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ConstructionIcon from "@mui/icons-material/Construction";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import { Link } from "react-router-dom";
import hero from "../../assets/images/hero.jpg"; // ensure correct path

export default function HeroBanner() {
  return (
    <Box
      sx={{
        position: "relative",
        color: "#fff",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${hero}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: { xs: "80vh", md: "100vh" },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        {/* Company Name */}
        <Typography
          variant="overline"
          sx={{
            letterSpacing: 2,
            fontWeight: 600,
            color: "#e0e7ff",
          }}
        >
          Pinnacle Technology Services
        </Typography>

        {/* Main Heading */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: 900,
            maxWidth: 900,
            lineHeight: 1.2,
            mt: 1,
          }}
        >
          Engineering & IT, <br /> Delivered with Precision
        </Typography>

        {/* Subtext */}
        <Typography
          variant="h6"
          sx={{
            opacity: 0.9,
            maxWidth: 700,
            mt: 3,
            fontWeight: 400,
            lineHeight: 1.6,
            color: "#f1f5f9",
          }}
        >
          From BIM & plant design to cloud migration and managed security —
          we help you build, run, and scale with confidence.
        </Typography>

        {/* Buttons */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2.5}
          sx={{ mt: 5 }}
        >
          <Button
            size="large"
            variant="contained"
            color="secondary"
            endIcon={<ArrowForwardIcon />}
            component={Link}
            to="/engineering-services"
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: "bold",
              borderRadius: "50px",
              textTransform: "none",
              boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
              "&:hover": { boxShadow: "0 12px 28px rgba(0,0,0,0.45)" },
            }}
          >
            Explore Engineering
          </Button>

          <Button
            size="large"
            variant="outlined"
            color="inherit"
            startIcon={<CloudQueueIcon />}
            component={Link}
            to="/it-services"
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: "bold",
              borderRadius: "50px",
              textTransform: "none",
              borderWidth: 2,
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.08)",
                borderColor: "#fff",
              },
            }}
          >
            IT & Cloud
          </Button>

          <Button
            size="large"
            variant="outlined"
            color="inherit"
            startIcon={<ConstructionIcon />}
            component={Link}
            to="/case-studies"
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: "bold",
              borderRadius: "50px",
              textTransform: "none",
              borderWidth: 2,
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.08)",
                borderColor: "#fff",
              },
            }}
          >
            Case Studies
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
