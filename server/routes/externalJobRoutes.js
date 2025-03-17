const express = require("express");
const axios = require("axios");
const router = express.Router();

// Fetch jobs from an external API
router.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://jsearch.p.rapidapi.com/search", {
      params: { query: "software developer", page: "1", num_pages: "1" },
      headers: {
        "X-RapidAPI-Key": process.env.RAPIDAPI_KEY, // Store API key in .env
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    });

    const jobs = response.data.data.map((job) => ({
      title: job.job_title,
      company: job.employer_name,
      location: job.job_city || "Unknown",
      url: job.job_apply_link,
    }));

    res.json({ jobs });
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs", error });
  }
});

module.exports = router;
