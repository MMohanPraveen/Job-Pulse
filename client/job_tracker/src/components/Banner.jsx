import { Box, Button, Container, Grid, Typography } from "@mui/material";

const Banner = ({onKnowMoreClick}) => {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", py: 6 }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
            Explore & Track Jobs Smarter!!
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Effortlessly manage your job applications, stay organized, and never miss an opportunity.
            </Typography>
            <Button variant="contained" sx={{bgcolor: "#212121"}} onClick={onKnowMoreClick} size="large">
              Know More
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/job-pulse-banner.webp"
              alt="Banner"
              sx={{
                width: "100%",
                height: "auto",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
