import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Pagination,
  Container,
} from "@mui/material";
import TrendsEngineeringServices from "../assets/images/Our Blog/Trends in Engineering Services.jpg";
import CloudMigration from "../assets/images/Our Blog/Cloud Migration.jpeg";
import TopCybersecurity from "../assets/images/Our Blog/Top Cybersecurity.jpg";
export default function BlogList() {
  const blogs = [
    {
      title: "Top Trends in Engineering Services",
      desc: "Explore how BIM, CAD, and automation are transforming engineering.",
      img: TrendsEngineeringServices,
    },
    {
      title: "Cloud Migration Best Practices",
      desc: "Learn strategies for smooth and secure cloud migration.",
      img: CloudMigration,
    },
    {
      title: "IT Security in 2025",
      desc: "Top security solutions for modern IT infrastructure.",
      img: TopCybersecurity,
    },
  ];

  return (
    <Box sx={{ bgcolor: "#f8fafc", py: 8 }}>
      <Container>
        <Typography variant="h3" gutterBottom align="center">
          Our Blog
        </Typography>
        <Typography variant="h6" align="center" sx={{ mb: 4 }}>
          Insights, trends, and expert tips for Engineering & IT Services.
        </Typography>

        <Grid container spacing={2}>
          {blogs.map((blog, index) => (
            <Grid
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
                  image={blog.img}
                  alt={blog.title}
                  sx={{
                    objectFit: "cover",
                    p: 2,
                  }}
                />
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
                    {blog.title}
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
                    {blog.desc}
                  </Typography>
                  {/* <Button variant="contained" size="small">Read More</Button> */}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Pagination count={3} color="primary" />
        </Box>
      </Container>
    </Box>
  );
}
