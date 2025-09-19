import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Button,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GavelIcon from "@mui/icons-material/Gavel";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import GroupsIcon from "@mui/icons-material/Groups";

const coreValues = [
  {
    icon: <SecurityIcon fontSize="large" color="primary" />,
    title: "Safety & Quality",
    desc: "Safety is our top priority. We are committed to delivering quality results with precision.",
  },
  {
    icon: <PeopleAltIcon fontSize="large" color="primary" />,
    title: "Customer Centric",
    desc: "We build strong, long-term relationships based on trust, transparency, and accountability.",
  },
  {
    icon: <GavelIcon fontSize="large" color="primary" />,
    title: "Integrity",
    desc: "We conduct business with fairness, ethics, and the highest level of professionalism.",
  },
  {
    icon: <LightbulbIcon fontSize="large" color="primary" />,
    title: "Innovation",
    desc: "We embrace new ideas and technologies to deliver innovative solutions for our clients.",
  },
  {
    icon: <GroupsIcon fontSize="large" color="primary" />,
    title: "Teamwork",
    desc: "We believe in collaboration to achieve shared goals and deliver better solutions.",
  },
];

export default function About() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      {/* Page Header */}
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h3"
          fontWeight={700}
          gutterBottom
          sx={{ color: "primary.main" }}
        >
          About Us
        </Typography>
        <Typography
          variant="h6"
          color="black"
          maxWidth="md"
          mx="auto"
          lineHeight={1.7}
        >
          Pinnacle Technology Services (PTS) is a Hyderabad-based Engineering,
          IT & Cloud Services company, delivering innovative and cost-effective
          solutions for over a decade.
        </Typography>
      </Box>

      {/* Company Introduction */}
      <Paper
        elevation={3}
        sx={{
          p: { xs: 3, md: 5 },
          mb: 6,
          borderRadius: 3,
          backgroundColor: "background.paper",
        }}
      >
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Who We Are
        </Typography>
        <Typography color="black" lineHeight={1.8}>
          PTS is a recognized solution provider for top engineering companies
          worldwide. We offer scalable engineering design, IT, and cloud
          solutions that help clients reduce risks, optimize costs, and
          accelerate project delivery.
        </Typography>
      </Paper>

      {/* Mission & Vision */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{ p: { xs: 3, md: 5 }, height: "100%", borderRadius: 3 }}
          >
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Our Mission
            </Typography>
            <Typography color="black" lineHeight={1.8}>
              Exceed customer expectations by meeting agreed timelines,
              maintaining quality standards at a competitive price, and
              conducting our business with integrity, righteousness, and
              accountability.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{ p: { xs: 3, md: 5 }, height: "100%", borderRadius: 3 }}
          >
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Our Vision
            </Typography>
            <Typography color="black" lineHeight={1.8}>
              To become an outsourcing partner of choice with consistent and
              reliable delivery of industry-specific engineering design and
              drafting services.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Core Values */}
      <Box mb={6}>
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight={700}
          gutterBottom
        >
          Our Core Values
        </Typography>
        <Divider sx={{
    borderBottomWidth: 3,
    borderColor: "#000",  
    width: "100%",        
    my: 4,                
  }}/>
        <Grid container spacing={4} justifyContent={"center"}>
          {coreValues.map((value, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={4}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  p: 2,
                  borderRadius: 3,
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent>
                  {value.icon}
                  <Typography variant="h6" fontWeight={600} sx={{ mt: 2 }}>
                    {value.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="black"
                    sx={{ mt: 1 }}
                  >
                    {value.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Company Highlights */}
      <Paper
        elevation={3}
        sx={{
          p: { xs: 3, md: 5 },
          textAlign: "center",
          mb: 6,
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Company at a Glance
        </Typography>
        <Typography color="black" lineHeight={1.8}>
          10+ years of experience serving industries like Oil & Gas,
          Petrochemical, Chemical, Power Plants, and EPC projects. Expertise in
          BIM Modelling, Revit, CAD, FEA, Reverse Engineering, and IT solutions.
        </Typography>
      </Paper>

      {/* Call to Action */}
      <Box textAlign="center">
        <Typography variant="h6" gutterBottom fontWeight={500}>
          Ready to collaborate on your next project?
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="/contact"
          sx={{
            px: 4,
            py: 1.5,
            borderRadius: 2,
            fontWeight: 600,
            textTransform: "none",
            "&:hover": { backgroundColor: "primary.dark" },
          }}
        >
          Contact Us
        </Button>
      </Box>
    </Container>
  );
}
