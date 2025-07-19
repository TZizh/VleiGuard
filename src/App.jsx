import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import RestorationHub from "./Components/RestorationHub";
import SponsorDashboard from "./Components/SponsorDashboard.jsx";
import CommunityWall from "./Components/CommunityWall";
import ResearchHub from "./Components/ResearchHub";
import ExplorePage from "./Components/ExplorePage";
import WetlandReportPage from "./Components/Reports";
import SubmitReport from "./Components/SubmitReport";
import MyActivities from "./Components/MyActivities";

export default function App() {
  return (
    <Router>
      {/* Navbar can go here if you want it on all pages */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/restoration" element={<RestorationHub />} />
        <Route path="/sponsor" element={<SponsorDashboard />} />
        <Route path="/community" element={<CommunityWall />} />
        <Route path="/research" element={<ResearchHub />} />
        <Route path="/make-report" element={<SubmitReport />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/reports" element={<WetlandReportPage />} />
        <Route path="/activities" element={<MyActivities />} />
        {/* Add more as needed */}
      </Routes>
    </Router>
  );
}
