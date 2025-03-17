import React from "react";
import { Box, Container, Typography, Link, Grid, IconButton, Divider } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: "#212121", color: "white", py: 5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={5} justifyContent="space-between" alignItems="start">
          <Grid item xs={12} sm={4} sx={{ml: {xs: 0, sm: 10}}} textAlign={{ xs: "center", sm: "left" }}>
            <Typography variant="h6">Job Pulse</Typography>
            <Typography variant="body2" color="gray">Job Pulse is an intuitive platform that helps users efficiently track their job applications, manage interviews, and stay organized throughout their job search. With real-time updates and smart insights, it streamlines the hiring process for job seekers.</Typography>
          </Grid>
          
          <Grid item xs={12} sm={3} textAlign="center">
            <Typography variant="h6">Products</Typography>
            <Grid container spacing={1} justifyContent="center" display={"block"} color="gray">
              <Grid item><Link href="/job-tracker" color="inherit" underline="hover">Job Tracker</Link></Grid>
              <Grid item><Link href="/job-explorer" color="inherit" underline="hover">Job Explorer</Link></Grid>
            </Grid>
          </Grid>
          
          <Grid item xs={12} sm={4} textAlign="center" color="gray">
            <Typography variant="h6" color="white">Follow Us</Typography>
            <IconButton href="https://www.facebook.com/hiringhood/?locale=fr_CA" color="inherit"><Facebook /></IconButton>
            <IconButton href="https://x.com/i/flow/login?redirect_after_login=%2Fhiringhood" color="inherit"><Twitter /></IconButton>
            <IconButton href="https://www.instagram.com/hiringhood/" color="inherit"><Instagram /></IconButton>
            <IconButton href="https://www.linkedin.com/company/hiringhood/" color="inherit"><LinkedIn /></IconButton>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, backgroundColor: "gray" }} />

        <Typography variant="body2" align="center" color="gray">
          Developed by Mohan Praveen Majji || &copy; {new Date().getFullYear()} All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
