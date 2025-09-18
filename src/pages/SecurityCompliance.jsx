import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider,
} from "@mui/material";

import securityaudit from "../assets/images/cybersecurity/securityaudit.jpeg";
import dataprotection from "../assets/images/cybersecurity/dataprotection.jpg";
import regulatorycompliance from "../assets/images/cybersecurity/regulatorycompliance.jpeg";
export default function SecurityCompliance() {
  const complianceServices = [
    {
      title: "Data Protection",
      desc: "Implementing robust data protection measures to prevent unauthorized access.",
      img: dataprotection,
    },
    {
      title: "Regulatory Compliance",
      desc: "Ensuring compliance with industry regulations like GDPR, ISO, HIPAA.",
      img: regulatorycompliance,
    },
    {
      title: "Security Audits",
      desc: "Regular security audits and vulnerability assessments for risk mitigation.",
      img: securityaudit,
    },
  ];

  return (
    <Box sx={{ bgcolor: "#f8fafc", py: 8 }}>
      <Container>
        {/* Header */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" gutterBottom>
            Security & Compliance
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Advanced security solutions and compliance frameworks to safeguard
            your business.
          </Typography>
        </Box>

        {/* Services Grid */}
        <Grid container spacing={2}>
          {complianceServices.map((service, index) => (
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
                <CardMedia
                  component="img"
                  height="200"
                  image={service.img}
                  alt={service.title}
                  sx={{
                    objectFit: "cover",
                    p: 2,
                  }}
                />
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
        <Box mt={6}>
          <Typography variant="h5" gutterBottom>
            Why Security & Compliance Matters
          </Typography>
          <Divider
            sx={{
              borderBottomWidth: 3,
              borderColor: "#000",
              width: "100%",
              my: 4,
            }}
          />
          <Typography sx={{ fontSize: "20px" }}>
            We provide end-to-end security and compliance solutions to ensure
            your business meets all industry standards, protects sensitive data,
            and minimizes risks of cyber threats.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
