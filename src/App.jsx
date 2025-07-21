import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import RestorationHub from "./Components/RestorationHub";
import SponsorDashboard from "./Components/SponsorDashBoard";
import CommunityWall from "./Components/CommunityWall";
import ResearchHub from "./Components/ResearchHub";
import ExplorePage from "./Components/ExplorePage";
import WetlandReportPage from "./Components/Reports";
import SubmitReport from "./Components/SubmitReport";
import MyActivities from "./Components/MyActivities";
import AboutUs from "./Components/About";
import LoginSignup from "./Components/LoginSignup"; 
import DashboardShell from "./Components/DashboardShell";
const apiBase = import.meta.env.VITE_API_BASE;


export default function App() {
  return (
    <Router>
      {/* Navbar can go here if you want it on all pages */}
      <Routes>
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/auth" element={<LoginSignup apiBase={apiBase} />} />
        <Route element={<DashboardShell />}>
          <Route path="/dashboard" element={<ExplorePage />} />
          <Route path="/community" element={<CommunityWall />} />
          <Route path="/restoration" element={<RestorationHub />} />
          <Route path="/activities" element={<MyActivities />} />
          <Route path="/research-hub" element={<ResearchHub />} />
          <Route path="/sponsor" element={<SponsorDashboard />} />
          <Route path="/make-report" element={<SubmitReport />} />
          <Route index element={<Navigate to="/dashboard" />} />
        </Route>
        {/* Fallback route */}
        {/* <Route path="*" element={<Navigate to="/dashboard" />} /> */}


        {/* <Route path="/restoration" element={<RestorationHub />} />
        <Route path="/sponsor" element={<SponsorDashboard />} />
        <Route path="/community" element={<CommunityWall />} />
        <Route path="/research" element={<ResearchHub />} />
        <Route path="/make-report" element={<SubmitReport />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/reports" element={<WetlandReportPage />} />
        <Route path="/activities" element={<MyActivities />} /> */}
        {/* Add more as needed */}
      </Routes>
    </Router>
  );
}
