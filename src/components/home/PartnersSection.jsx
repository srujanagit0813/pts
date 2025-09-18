import React from "react";
import { Box, Container, Typography, Grid, Card, Avatar } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business"; // placeholder for logos

// 🔹 Partner data (replace icon with real logos if available)
const partners = [
  { name: "Microsoft", color: "linear-gradient(135deg, #0078D4, #00A4EF)" },
  { name: "VMware", color: "linear-gradient(135deg, #607078, #8A9AA5)" },
  { name: "Cisco", color: "linear-gradient(135deg, #1BA0D7, #48C1EF)" },
  { name: "SonicWall", color: "linear-gradient(135deg, #F15A29, #FF8A50)" },
  { name: "Dell", color: "linear-gradient(135deg, #007DB8, #33BDEF)" },
  { name: "NetApp", color: "linear-gradient(135deg, #0067C5, #3399FF)" },
  
];

export default function PartnersSection() {
  return (
    <Box sx={{ py: 10, bgcolor: "#f9fafc" }}>
      <Container>
        {/* Title */}
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          Our Partners
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="black"
          sx={{ maxWidth: 700, mx: "auto", mb: 6 }}
        >
          Trusted collaborations with global technology leaders to deliver
          innovative, secure, and scalable solutions.
        </Typography>

        {/* Partner Cards */}
      <Grid container spacing={4} justifyContent="center">
  {partners.map((p, i) => (
    <Grid item xs={12} sm={6} md={4} key={i}>
      <Card
        sx={{
        p:5,
          height: 180,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 4,
          textAlign: "center",
          background: p.color,
          color: "#fff",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-6px) scale(1.03)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          },
        }}
      >
        <Avatar
          sx={{
            bgcolor: "rgba(255,255,255,0.2)",
            color: "#fff",
            width: 60,
            height: 60,
            mb: 2,
          }}
        >
          <BusinessIcon />
        </Avatar>
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, fontSize: "1rem" }}
        >
          {p.name}
        </Typography>
      </Card>
    </Grid>
  ))}
</Grid>

      </Container>
    </Box>
  );
}
