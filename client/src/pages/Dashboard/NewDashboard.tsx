import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Overview from './Overview';
import Profile from './Profile';
import ShotStack from './APIs/ShotStack';
import CreatoMate from './APIs/CreatoMate';
import PromptClip from './APIs/PromptClip';

const NewDashboard = () => {
  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/shotstack" element={<ShotStack />} />
      <Route path="/creatomate" element={<CreatoMate />} />
      <Route path="/promptclip" element={<PromptClip />} />
      {/* Add more API routes as needed */}
    </Routes>
  );
};

export default NewDashboard;