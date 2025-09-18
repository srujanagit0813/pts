import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Paper,
  Divider,
} from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";

export default function Contact() {
  return (
    <Box sx={{ bgcolor: "#f9fafb", py: 10 }}>
      <Container>
        {/* Header */}
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "#1e293b" }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: "700px", mx: "auto" }}
          >
            We’d love to hear from you! Whether you have a question, need
            support, or want to explore opportunities, our team is here to help.
          </Typography>
        </Box>

        <Grid container spacing={6} >
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                width:"500px",
                p: 4,
                borderRadius: 3,
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              }}
              elevation={0}
            >
              <Typography
                variant="h5"
                gutterBottom
                fontWeight="600"
                sx={{ mb: 2 }}
              >
                Send us a message
              </Typography>
              <Divider sx={{ mb: 3, borderBottomWidth: 2 }} />

              <Box
                component="form"
                sx={{
                  mt: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2.5,
                }}
              >
                <TextField
                  fullWidth
                  label="Full Name"
                  variant="outlined"
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                  required
                />
                <TextField
                  fullWidth
                  label="Phone"
                  type="tel"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  required
                />
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: "#2563eb",
                    py: 1.5,
                    fontWeight: "bold",
                    textTransform: "none",
                    "&:hover": { bgcolor: "#1e40af" },
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Contact Details & Map */}
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                width:"500px",
                p: 4,
                borderRadius: 3,
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
              elevation={0}
            >
              <Typography
                variant="h5"
                gutterBottom
                fontWeight="600"
                sx={{ mb: 2 }}
              >
                Our Office
              </Typography>
              <Divider sx={{ mb: 3, borderBottomWidth: 2 }} />

              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <LocationOn color="primary" sx={{ mr: 1 }} />
                  <Typography variant="body1" color="text.secondary">
                    123 Tech Park, HITEC City, Hyderabad, India
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Email color="primary" sx={{ mr: 1 }} />
                  <Typography variant="body1" color="text.secondary">
                    contact@pts.com
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Phone color="primary" sx={{ mr: 1 }} />
                  <Typography variant="body1" color="text.secondary">
                    +91 98765 43210
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  flex: 1,
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              >
                <iframe
                  title="PTS Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.435539067914!2d78.38574561539663!3d17.4422982880494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b3c19a0e7b%3A0xe7f5a5167c228d89!2sHITEC%20City%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1617342146009!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
