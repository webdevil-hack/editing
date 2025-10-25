import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Overview from './Overview';
import Profile from './Profile';
import ShotStack from './APIs/ShotStack';
import CreatoMate from './APIs/CreatoMate';
import Pandly from './APIs/Pandly';
import Tavus from './APIs/Tavus';
import PromptClip from './APIs/PromptClip';
import LuckyEdit from './APIs/LuckyEdit';
import LTXVideo from './APIs/LTXVideo';
import Vant from './APIs/Vant';

const Dashboard = () => {
  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/shotstack" element={<ShotStack />} />
      <Route path="/creatomate" element={<CreatoMate />} />
      <Route path="/pandly" element={<Pandly />} />
      <Route path="/tavus" element={<Tavus />} />
      <Route path="/promptclip" element={<PromptClip />} />
      <Route path="/luckyedit" element={<LuckyEdit />} />
      <Route path="/ltxvideo" element={<LTXVideo />} />
      <Route path="/vant" element={<Vant />} />
    </Routes>
  );
};

export default Dashboard;
