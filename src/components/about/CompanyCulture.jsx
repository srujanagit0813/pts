import React from "react";
import { Box, Container, Typography } from "@mui/material";
export default function CompanyCulture() {
  return (
    <Box sx={{ py: 4 }}>
      <Container>
        <Typography variant="h6">Company Culture</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          We focus on collaboration, continuous improvement and customer
          centricity.
        </Typography>
      </Container>
    </Box>
  );
}
