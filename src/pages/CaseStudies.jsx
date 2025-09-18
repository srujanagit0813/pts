import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Chip,
} from "@mui/material";
import { useState } from "react";
import oilgas from "../assets/images/Case Studies/oilgas.jpg";
import cloud from "../assets/images/Case Studies/cloud.jpg";
import datacenter from "../assets/images/Case Studies/datacenter.jpg";
export default function CaseStudies() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Engineering", "IT Services", "Cloud"];
  const studies = [
    {
      title: "BIM Implementation for Oil & Gas",
      category: "Engineering",
      img: oilgas,
      desc: "Improved design efficiency with full BIM modeling and clash detection.",
    },
    {
      title: "Cloud Migration for Manufacturing",
      category: "Cloud",
      img: cloud,
      desc: "Seamless migration of on-premise servers to secure cloud infrastructure.",
    },
    {
      title: "Data Center Setup for Pharma",
      category: "IT Services",
      img: datacenter,
      desc: "Implemented high-availability data center with advanced security features.",
    },
  ];

  const filteredStudies =
    filter === "All" ? studies : studies.filter((s) => s.category === filter);

  return (
    <Box sx={{ bgcolor: "#f8fafc", py: 8 }}>
      <Container>
        {/* Page Header */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" gutterBottom>
            Case Studies
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Real-world examples of how PTS delivers excellence in Engineering &
            IT Solutions.
          </Typography>
        </Box>

        {/* Filter Chips */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4, gap: 1 }}>
          {categories.map((cat, index) => (
            <Chip
              key={index}
              label={cat}
              color={filter === cat ? "primary" : "default"}
              onClick={() => setFilter(cat)}
              clickable
            />
          ))}
        </Box>

        {/* Case Study Grid */}
        <Grid container spacing={2}>
          {filteredStudies.map((study, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                borderRadius: 2,
                p: 1,
              }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",

                  borderRadius: 2,
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
                    height="200"
                    image={study.img}
                    alt={study.title}
                    sx={{
                      objectFit: "cover",
                      p: 2,
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
                    {study.title}
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
                    {study.desc}
                  </Typography>
                </CardContent>
                {/* <Box sx={{ p: 2, textAlign: "center" }}>
                  <Button variant="outlined">Read More</Button>
                </Box> */}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
