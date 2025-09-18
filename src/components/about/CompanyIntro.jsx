import React from "react";
import { Box, Container, Typography } from "@mui/material";
export default function CompanyIntro() {
  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Typography variant="h4">About Pinnacle Technology Services</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          PTS is a Hyderabad-based Engineering, IT & Cloud services provider
          with over 25 years’ experience.
        </Typography>
      </Container>
    </Box>
  );
}
