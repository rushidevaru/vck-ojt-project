
import React, { useState } from "react";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AdmissionPage from "./pages/AdmissionPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";

import NotFoundPage from "./pages/NotFoundPage";
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopUp";

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Rushikesh Jagdish Devaru"
          studentPhotoUrl="/Images/rushi.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
          
        />
        <ChatbotComponent/>
      </div>
      <div>
   <Router>
  
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/apply" element={<AdmissionPage />} />
          <Route path="/contact" element={<ContactPage />} />
           <Route path="/courses" element={<CoursesPage/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      
    </Router>
    </div>
    </>
  );
}

export default App;
        
