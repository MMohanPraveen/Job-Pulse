import React from "react";
import { Box, Typography, Button, Link } from "@mui/material";

const CTA = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        my: 5,
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Get in Touch with Us!
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: "600px", mb: 3 }}>
        Have any questions or need assistance? We're here to help! Contact us today and let's make things happen.
      </Typography>
      <Button variant="contained" sx={{bgcolor: "#212121"}}>
          <Link href="/contact" color="inherit" underline="none">contact Us</Link>
      </Button>
    </Box>
  );
};

export default CTA;
