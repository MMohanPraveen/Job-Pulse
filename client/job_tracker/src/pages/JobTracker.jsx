import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, Card, CardContent, IconButton, Menu, MenuItem, Button, TextField, Select, Modal } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import AddJob from "../components/AddJob";
import Header from "../components/Header";
import Footer from "../components/Footer";

const JobTracker = () => {
  const [editingJobId, setEditingJobId] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [showAddJob, setShowAddJob] = useState(false); // Controls the AddJob modal
  const [editedData, setEditedData] = useState({
    company: "",
    position: "",
    status: "",
    location: "",
  });

  // Fetch jobs from the backend
  const fetchJobs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/jobs");
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Handle delete job
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/jobs/${id}`);
      fetchJobs(); // Refresh job list
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  // Enable editing mode
  const handleEdit = (job) => {
    setEditingJobId(job._id);
    setEditedData({
      company: job.company,
      position: job.position,
      status: job.status,
      location: job.location,
    });
  };

  // Handle input changes
  const handleChange = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  // Submit updated job data
  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:5000/jobs/${id}`, editedData);
      setEditingJobId(null);
      fetchJobs(); // Refresh job list
    } catch (error) {
      console.error("Error updating job:", error);
    }
  };


  // Handle menu open/close
  const handleMenuOpen = (event, jobId) => {
    setMenuAnchor(event.currentTarget);
    setSelectedJobId(jobId);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
    setSelectedJobId(null);
  };

  // Group jobs by status
  const groupedJobs = {
    applied: jobs.filter((job) => job.status === "applied"),
    interview: jobs.filter((job) => job.status === "interview"),
    offer: jobs.filter((job) => job.status === "offer"),
    rejected: jobs.filter((job) => job.status === "rejected"),
  };

  return (
    <div>
      <Header />
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ px: 4,my: 3 }}>
        <Typography variant="h4" fontWeight={"bold"}>Track Your Jobs!!</Typography>
        <Button variant="contained" sx={{backgroundColor: "#212121"}} onClick={() => setShowAddJob(true)}>
          + Add Job
        </Button>
      </Box>

      {/* AddJob Modal */}
      <Modal open={showAddJob} onClose={() => setShowAddJob(false)}>
        <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", bgcolor: "white", p: 4, borderRadius: 2, boxShadow: 3, minWidth: 400 }}>
                    {/* Close Button */}
                    <IconButton
            sx={{ position: "absolute", top: 8, right: 8 }}
            onClick={() => setShowAddJob(false)}
          >
            <CloseIcon />
          </IconButton>

          <Typography variant="h5" align="center" sx={{ mb: 2 }}>
            Add New Job
          </Typography>

          <AddJob fetchJobs={fetchJobs} closeModal={() => setShowAddJob(false)} />
        </Box>
      </Modal>

      <Box display="flex" justifyContent="center" alignItems="center" gap={2} sx={{ my: 3, flexDirection: {xs: "column", sm: "row"} }} >
        {Object.entries(groupedJobs).map(([status, jobList]) => (
          <Box key={status} sx={{ width: "300px", height: "600px", p: 2, color: "white", bgcolor: "#212121", borderRadius: 2, boxShadow: 2, overflow: "hidden" }}>
            {/* Fixed heading */}
            <Typography variant="h6" fontWeight="bold" align="center" sx={{ position: "sticky", top: 0, bgcolor: "#212121", p: 1, zIndex: 10 }}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Typography>
            <Box sx={{ maxHeight: "550px", overflowY: "auto", pr: 1, "&::-webkit-scrollbar": { display: "none" } }}>
              {jobList.length === 0 ? (
                <Typography align="center" sx={{ mt: 2, color: "gray" }}>
                  No jobs in this category
                </Typography>
              ) : (
                jobList.map((job) => (
                  <Card key={job._id} sx={{ mt: 2, p: 2, boxShadow: 2, borderRadius: 2, position: "relative" }}>
                    <IconButton
                      sx={{ position: "absolute", top: 5, right: 5 }}
                      onClick={(e) => handleMenuOpen(e, job._id)}
                    >
                      <MoreVertIcon />
                    </IconButton>

                    <Menu anchorEl={menuAnchor} open={selectedJobId === job._id} onClose={handleMenuClose}>
                      <MenuItem onClick={() => handleEdit(job)}>Edit</MenuItem>
                      <MenuItem onClick={() => handleDelete(job._id)}>Delete</MenuItem>
                    </Menu>

                    {editingJobId === job._id ? (
                      <>
                        <TextField fullWidth label="Company" name="company" value={editedData.company} onChange={handleChange} sx={{ mb: 1 }} />
                        <TextField fullWidth label="Position" name="position" value={editedData.position} onChange={handleChange} sx={{ mb: 1 }} />

                        {/* Fixed the status dropdown */}
                        <Select
                          fullWidth
                          name="status"
                          value={editedData.status}
                          onChange={handleChange}
                          sx={{ mb: 1 }}
                        >
                          <MenuItem value="applied">Applied</MenuItem>
                          <MenuItem value="interview">Interview</MenuItem>
                          <MenuItem value="offer">Offer</MenuItem>
                          <MenuItem value="rejected">Rejected</MenuItem>
                        </Select>

                        <TextField fullWidth label="Location" name="location" value={editedData.location} onChange={handleChange} sx={{ mb: 1 }} />
                        <Button variant="contained" color="success" onClick={() => handleUpdate(job._id)} sx={{ mr: 1 }}>
                          Save
                        </Button>
                        <Button variant="outlined" color="error" onClick={() => setEditingJobId(null)}>
                          Cancel
                        </Button>
                      </>
                    ) : (
                      <CardContent>
                        <Typography variant="h6">{job.position}</Typography>
                        <Typography variant="body1">
                          <strong>{job.company}</strong>
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {job.location}
                        </Typography>
                      </CardContent>
                    )}
                  </Card>
                ))
              )}
            </Box>
          </Box>
        ))}
      </Box>

      <Footer />
    </div>
  );
};

export default JobTracker;
