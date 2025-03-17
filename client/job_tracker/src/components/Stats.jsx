import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const stats = [
  { value: "5000+", label1: "Satisfied", label2: "Customers" },
  { value: "800+", label1: "Total Hours", label2: "Saved" },
  { value: "1000+", label1: "Job Tracker", label2: "Users" },
  { value: "500+", label1: "Exploring", label2: "Jobs" },
];

const Stats = () => {
  return (
    <Box sx={{ py: 4, px: 6, textAlign: "center", backgroundColor: "#f5f5f5" }}>
      <Grid container spacing={6} justifyContent="center">
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box sx={{ p: 2, backgroundColor: "#212121",color: "whitesmoke", borderRadius: 2, boxShadow: 3 }}>
              <Typography variant="h5" fontWeight="bold">
                {stat.value}
              </Typography>
              <Typography variant="h6">{stat.label1}</Typography>
              <Typography variant="h6">{stat.label2}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Stats;
