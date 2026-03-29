import React, { useState } from 'react';
import { ProposalPage } from './pages/ProposalPage';
import { PetitionPage } from './pages/PetitionPage';
import { GalleryPage } from './pages/GalleryPage';
import { FounderPage } from './pages/FounderPage';
import { NavigationBar } from './components/NavigationBar';
export function App() {
  const [currentPage, setCurrentPage] = useState('proposal');
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <NavigationBar currentPage={currentPage} onNavigate={handleNavigate} />
      {currentPage === 'proposal' &&
      <ProposalPage onNavigate={handleNavigate} />
      }
      {currentPage === 'founder' && <FounderPage onNavigate={handleNavigate} />}
      {currentPage === 'gallery' && <GalleryPage onNavigate={handleNavigate} />}
      {currentPage === 'petition' &&
      <PetitionPage onNavigate={handleNavigate} />
      }
    </>);

}