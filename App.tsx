
import React, { useState } from 'react';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardHome from './pages/DashboardHome';
import MuseStudio from './pages/MuseStudio';
import ImageStudio from './pages/ImageStudio';
import VideoStudio from './pages/VideoStudio';
import MotionLab from './pages/MotionLab';
import EnhanceLab from './pages/EnhanceLab';
import WardrobeStudio from './pages/WardrobeStudio';
import PricingPage from './pages/PricingPage';
import SettingsPage from './pages/SettingsPage';

export type ViewType = 'dashboard' | 'create' | 'image-gen' | 'video-gen' | 'animate' | 'upscale' | 'wardrobe' | 'pricing' | 'settings';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>('dashboard');

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <DashboardHome setView={setActiveView} />;
      case 'create':
        return <MuseStudio />;
      case 'image-gen':
        return <ImageStudio />;
      case 'video-gen':
        return <VideoStudio />;
      case 'animate':
        return <MotionLab />;
      case 'upscale':
        return <EnhanceLab />;
      case 'wardrobe':
        return <WardrobeStudio />;
      case 'pricing':
        return <PricingPage />;
      case 'settings':
          return <SettingsPage />;
      default:
        return <DashboardHome setView={setActiveView} />;
    }
  };

  return (
    <div className="flex h-screen bg-black text-zinc-100 font-sans selection:bg-indigo-500/30">
      
      <Sidebar activeView={activeView} setView={setActiveView} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6 md:p-8 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
          {renderView()}
        </main>
      </div>
    </div>
  );
};

export default App;
