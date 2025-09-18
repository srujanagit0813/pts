import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Divider,
} from "@mui/material";
import cloud from "../assets/images/IT/cloud.jpg";
import managedServices from "../assets/images/IT/managed services.jpg";
import network from "../assets/images/IT/network.jpg";
export default function ITServices() {
  const services = [
    {
      title: "Cloud Migration",
      desc: "Seamlessly migrate applications and data to secure cloud platforms.",
      img: cloud,
    },
    {
      title: "Managed Services",
      desc: "24/7 monitoring and IT support for your critical systems and infrastructure.",
      img: managedServices,
    },
    {
      title: "Network Design & Security",
      desc: "Advanced network architecture with top-notch security and compliance.",
      img: network,
    },
  ];

  return (
    <Box sx={{ bgcolor: "#f8fafc", py: 8 }}>
    <Container >
      {/* Page Header */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" gutterBottom>
          IT Services
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Comprehensive IT solutions to accelerate your digital transformation
          journey.
        </Typography>
      </Box>

      {/* Services Grid */}
      <Grid container spacing={3}>
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
            > <Box sx={{ position: "relative" }}>
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
              </Box>
              <CardContent>
                <Typography  variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      color: "black",
                      textAlign: "center",
                      lineHeight: "1.5rem",
                      minHeight: "3rem",
                    }}>
                  {service.title}
                </Typography>
                <Typography  sx={{
                      color: "black",
                      textAlign: "start",
                      lineHeight: "1.5rem", // line height
                      minHeight: "3rem",
                      maxWidth: "300px",
                    }}>
                  {service.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Additional Info */}
      <Box mt={6}>
        <Typography variant="h4" gutterBottom>
          Why Choose PTS IT Services?
        </Typography>
       

<Divider
  sx={{
    borderBottomWidth: 3,
    borderColor: "#000",  
    width: "100%",        
    my: 4,                
  }}
/>
        <Typography sx={{fontSize:"20px"}}>
          We deliver cutting-edge IT services tailored to your business needs.
          From cloud computing to cybersecurity and managed services, our
          solutions ensure scalability, security, and performance.
        </Typography>
      </Box>
    </Container>
    </Box>
  );
}
