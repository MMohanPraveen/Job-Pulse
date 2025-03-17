import { useState } from "react";
import axios from "axios";
import { Box, TextField, MenuItem, Button } from "@mui/material";
const API_URL = process.env.REACT_APP_API_URL;


const AddJob = ({ fetchJobs, closeModal }) => {
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    status: "applied",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${API_URL}/jobs`, formData);
    fetchJobs(); // Refresh job list
    closeModal(); // Close modal after adding job
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        mx: "auto",
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: "white",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >

    <TextField
      fullWidth
      label="Company"
      name="company"
      value={formData.company}
      onChange={handleChange}
      required
    />

    <TextField
      fullWidth
      label="Position"
      name="position"
      value={formData.position}
      onChange={handleChange}
      required
    />

    <TextField
      fullWidth
      select
      label="Status"
      name="status"
      value={formData.status}
      onChange={handleChange}
    >
      {["applied", "interview", "offer", "rejected"].map((status) => (
        <MenuItem key={status} value={status}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </MenuItem>
      ))}
    </TextField>

    <TextField
      fullWidth
      label="Location"
      name="location"
      value={formData.location}
      onChange={handleChange}
      required
    />

    <Button type="submit" variant="contained" sx={{backgroundColor: "#212121", width: 125}}>
      Add Job
    </Button>
  </Box> 
  );
};

export default AddJob;
