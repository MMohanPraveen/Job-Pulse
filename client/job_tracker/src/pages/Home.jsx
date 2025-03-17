import React, { useRef } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Trial from "../components/Trial";
import Banner from "../components/Banner";
import Stats from "../components/Stats";
import CTA from "../components/CTA";
import JobPulseTracker from "../components/JobPulseTracker";
import JobPulseExplorer from "../components/JobPulseExplorer";

const Home = () => {
  const jobPulseTrackerRef = useRef(null);

  const scrollToTracker = () => {
    jobPulseTrackerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Header />
      <Banner onKnowMoreClick={scrollToTracker} />
      <Stats />
      <div ref={jobPulseTrackerRef}>
        <JobPulseTracker />
      </div>
      <JobPulseExplorer />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
