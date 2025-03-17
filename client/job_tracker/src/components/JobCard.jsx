import React from "react";
import { Card, CardContent, Typography, Button, CardActions } from "@mui/material";

const JobCard = ({ jobRole, companyName, location, onApply }) => {
  return (
    <Card sx={{ maxWidth: 345,height: 250, boxShadow: 3, border: 1, 
      borderColor: "#212121", borderRadius: 2, p: 2 }}>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {jobRole}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {companyName}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {location}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" sx={{ backgroundColor: "#212121", color: "white"}}  onClick={onApply}>
          Apply Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default JobCard;