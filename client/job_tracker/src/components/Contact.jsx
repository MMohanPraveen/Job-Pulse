import { useState } from "react";
import axios from "axios";
import { Box, TextField, Button, Typography, Snackbar, Alert } from "@mui/material";
const API_URL = process.env.REACT_APP_API_URL;

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required!");
      return;
    }

    try {
      // Simulating API request
      const response = await axios.post(`${API_URL}/contacts`, formData, {
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 201) {
        console.log("Message sent successfully:", response.data);
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" }); 
      }
    } catch (error) {
      console.error("Error submitting contact form:", error.response?.data || error.message);
      setError("Something went wrong. Please try again.");
    }

  };

  return (
    <div>
      <Typography variant="h4" fontWeight="bold" align="center" sx={{mt: 5}} gutterBottom>Get In Touch!!</Typography>
      <Typography variant="h6" fontWeight="bold" align="center" gutterBottom>Fill in the form below and we’ll get back to you as soon as possible.</Typography>

      <Box sx={{ maxWidth: 500, margin: "auto", my: 5, p: 3, boxShadow: 3, borderRadius: 2 }}>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} sx={{ mb: 2 }} />
          <TextField fullWidth label="Email" name="email" type="email" value={formData.email} onChange={handleChange} sx={{ mb: 2 }} />
          <TextField fullWidth label="Message" name="message" multiline rows={4} value={formData.message} onChange={handleChange} sx={{ mb: 2 }} />
          
          <Button type="submit" variant="contained" sx={{bgcolor: "#212121"}}>Send Message</Button>
        </form>

        {/* Success & Error Alerts */}
        <Snackbar open={success} autoHideDuration={3000} onClose={() => setSuccess(false)}>
          <Alert severity="success">Message sent successfully!</Alert>
        </Snackbar>
        {error && (
          <Snackbar open={true} autoHideDuration={3000} onClose={() => setError("")}>
            <Alert severity="error">{error}</Alert>
          </Snackbar>
        )}
      </Box>
    </div>
  );
};

export default Contact;
