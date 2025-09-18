import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { Divider } from "@mui/material";
import escs from "../assets/images/Engineering/escs.jpg";
import hvac from "../assets/images/Engineering/hvac.jpeg";
import drafting from "../assets/images/Engineering/drafting.jpg";
import bim from "../assets/images/Engineering/bmi.jpg";

import Plumbing from "../assets/images/Engineering/Plumbing.jpeg";


export default function EngineeringServices() {
  const services = [
    {
      title: "Civil & Structural Engineering",
      desc: "Comprehensive solutions for civil, architectural, and structural steel projects.",
      img: escs,
    },
    {
      title: "HVAC & MEP",
      desc: "Design and implementation of HVAC and MEP systems for all building types.",
      img: hvac,
    },
    {
      title: "Drafting & Detailing",
      desc: "Accurate drafting and detailing for precise execution and compliance.",
      img: drafting,
    },
    {
      title: "BIM Modeling & Coordination",
      desc: "3D BIM modeling, clash detection, and multi-discipline coordination for seamless delivery.",
      img: bim,
    },

    {
      title: "Plumbing & Fire Protection",
      desc: "Water supply, drainage, fire suppression designs adhering to international codes.",
      img: Plumbing,
    },
    {
      title: "Project Management & QA/QC",
      desc: "End-to-end project controls, documentation, and quality assurance for on-time delivery.",
      img: escs,
    },
  ];

  return (
    <Box sx={{ bgcolor: "#f8fafc", py: 8 }}>
      <Container>
        {/* Page Header */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Engineering Services
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: "700px", mx: "auto" }}
          >
            Innovative, reliable, and cost-effective engineering solutions
            tailored for your needs.
          </Typography>
        </Box>

        {/* Services Grid */}
        <Grid container spacing={1}>
          {services.map((service, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                borderRadius: 2,
                p: 1,
              }} //
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",

                  borderRadius: 3,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                  overflow: "hidden",
                  transition: "all 0.35s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 12px 32px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={service.img}
                    alt={service.title}
                    sx={{
                      objectFit: "cover",

                      p: 3,
                    }}
                  />
                </Box>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      color: "black",
                      textAlign: "center",
                      lineHeight: "1.5rem",
                      minHeight: "3rem",
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "black",
                      textAlign: "start",
                      lineHeight: "1.5rem", // line height
                      minHeight: "3rem",
                      maxWidth: "300px",
                    }}
                  >
                    {service.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Additional Info */}
        <Box mt={8} textAlign="center">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Our Expertise
          </Typography>
          <Divider
  sx={{
    borderBottomWidth: 3,
    borderColor: "#000",  
    width: "100%",        
    my: 4,                
  }}
/>
          <Typography
           sx={{fontSize:"20px"}}
          >
            We combine advanced technologies, global standards, and expert
            engineering teams to deliver top-notch solutions in civil,
            mechanical, and electrical domains. From design to implementation,
            PTS ensures efficiency, precision, and excellence in every project.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
