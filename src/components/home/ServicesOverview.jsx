import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import EngineeringIcon from "@mui/icons-material/PrecisionManufacturing";
import CloudIcon from "@mui/icons-material/Cloud";
import SecurityIcon from "@mui/icons-material/Security";
import { Link as RouterLink } from "react-router-dom";

// 🔹 Dynamic services data
const services = [
  {
    icon: <EngineeringIcon fontSize="large" />,
    title: "Engineering Services",
    desc: "BIM,CAD Drafting,Structural Design",
    path: "/engineering-services",
  },
  {
    icon: <CloudIcon fontSize="large" />,
    title: "IT Solutions",
    desc: "Cloud Migration,Virtualization,Data Centers",
    path: "/it-services",
  },
  {
    icon: <SecurityIcon fontSize="large" />,
    title: "Cybersecurity",
    desc: "Firewalls,DLP,WAF,Endpoint Security",
    path: "/security-compliance",
  },
];

export default function ServicesOverview() {
  return (
    <Box sx={{ py: 10, backgroundColor: "#f9fafc" }}>
      <Container>
        {/* Section Title */}
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          Our Services
        </Typography>
        <Typography
          align="center"
          color="black"
          sx={{ maxWidth: "700px", mx: "auto", mb: 6, fontSize: "20px" }}
        >
          We deliver world-class engineering, IT, and security solutions to help
          businesses innovate, scale, and stay secure in today’s digital age.
        </Typography>

        {/* Services Grid */}
        <Grid container spacing={2}>
          {services.map((s, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={i}
              sx={{
                border: "2px solid whitesmoke",
                borderRadius: 2,
                p: 2,
                backgroundColor: "white",
              }}
            >
              <Card
                component={RouterLink}
                to={s.path}
                sx={{
                  textAlign: "center",

                  height: "100%",
                }}
              >
                {/* Icon in circular background */}
                <Avatar
                  sx={{
                    bgcolor: "primary.main",
                    color: "#fff",
                    width: 64,
                    height: 64,
                    mx: "auto",
                    mb: 3,
                    transition: "0.3s",
                  }}
                >
                  {s.icon}
                </Avatar>

                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      color: "black",
                      textAlign: "center",
                      lineHeight: "1.5rem", // line height
                      minHeight: "3rem", // 2 lines * lineHeight
                    }}
                  >
                    {s.title}
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
                    {s.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
