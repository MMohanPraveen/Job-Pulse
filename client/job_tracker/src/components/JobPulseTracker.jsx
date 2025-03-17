import React from "react";
import { Box, Button, Typography, Grid, Link } from "@mui/material";

const JobPulseTracker = () => {
  return (
    <Box sx={{ py: 5, px: 3, backgroundColor: "#f5f5f5" }}>
              <Typography variant="h3" fontWeight="bold" align="center" sx={{mt: 5}} gutterBottom>Job Pulse provides...</Typography>
      <Grid container spacing={4} sx={{width: "90%", m: "auto"}} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/job-tracker.png"
            alt="Banner"
            sx={{
              width: "100%",
              height: "auto",
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Job Pulse Tracker
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={3}>
          Job Pulse Tracker is your all-in-one solution to manage and track job applications effortlessly. Stay organized with a centralized dashboard, monitor application statuses, set deadline reminders, and add interview notes—all in one place. No more lost opportunities or missed follow-ups! With real-time updates and a seamless interface, Job Pulse Tracker helps you stay ahead in your job search, compare offers, and make informed career decisions. Take control of your job hunt today and land your dream job with ease!
          </Typography>
          <Button variant="contained" sx={{bgcolor: "#212121"}} size="large">
          <Link href="/job-tracker" color="inherit" underline="none">Try Now!</Link>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JobPulseTracker;
