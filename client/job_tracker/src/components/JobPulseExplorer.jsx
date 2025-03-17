import React from "react";
import { Box, Button, Typography, Grid, Link } from "@mui/material";

const JobPulseExplorer = () => {
  return (
    <Box sx={{ py: 5, px: 3, backgroundColor: "#212121" }}>
      <Grid container spacing={4} sx={{width: "90%", m: "auto"}} alignItems="center">
        <Grid item xs={12} md={6} sx={{color: "#fff", }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Job Pulse Explorer
          </Typography>
          <Typography variant="body1" color="white" mb={3}>
          Job Pulse Explorer is a feature that fetches and displays available jobs from a third-party API, helping users discover real-time job opportunities effortlessly. It provides a seamless way to explore job listings, filter results based on preferences, and stay updated with the latest openings—all in one place.
          </Typography>
          <Button variant="contained" sx={{bgcolor: "white", color: "#212121"}} size="large">
          <Link href="/job-explorer" color="inherit" underline="none">Try Now!</Link>
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
    </Box>
  );
};

export default JobPulseExplorer;
