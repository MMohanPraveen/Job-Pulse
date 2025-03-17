import Home from "./pages/Home";
import JobTracker from "./pages/JobTracker";
import JobExplorer from "./pages/JobExplorer";
import ContactUs from "./pages/ContactUs"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job-tracker" element={<JobTracker />} />
          <Route path="/job-explorer" element={<JobExplorer />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
  );
}

export default App;
