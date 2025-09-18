import React from "react";
import { Box, Container, Grid, Avatar, Typography } from "@mui/material";
const leaders = [
  { name: "John Doe", title: "Founder & CEO" },
  { name: "Jane Smith", title: "VP Engineering" },
];
export default function LeadershipTeam() {
  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Typography variant="h5">Leadership Team</Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {leaders.map((l, i) => (
            <Grid item xs={12} sm={6} key={i}>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Avatar sx={{ width: 64, height: 64 }}>{l.name[0]}</Avatar>
                <div>
                  <Typography variant="subtitle1">{l.name}</Typography>
                  <Typography variant="body2">{l.title}</Typography>
                </div>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
