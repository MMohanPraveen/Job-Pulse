import { useState, useEffect } from "react";
import axios from "axios";
import JobCard from "../components/JobCard"
import { Grid, Container, Typography } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
const API_URL = process.env.REACT_APP_API_URL;



const JobExplorer = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get(`${API_URL}/explore-jobs`);
      setJobs(response.data.jobs);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch jobs");
      setLoading(false);
    }
  };

  if (loading) return <Typography variant="h6">Loading jobs...</Typography>;
  if (error) return <Typography variant="h6" color="error">{error}</Typography>;

  return (
    <div>
      <Header />

      <Container>
        <Typography variant="h4" fontWeight={"bold"} textAlign={"center"} sx={{py:3}} gutterBottom>
          Explore Available Jobs!!
        </Typography>
        <Grid container spacing={3} sx={{paddingBottom: 5}}>
          {jobs.map((job, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <JobCard 
                jobRole={job.title} 
                companyName={job.company} 
                location={job.location} 
                onApply={() => window.open(job.url, "_blank")} 
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </div>
  );
};

export default JobExplorer;
