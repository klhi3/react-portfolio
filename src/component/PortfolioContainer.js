import React, { useState } from 'react';
import NavBars from './NavBars';

import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';
import Footer from './pages/Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'ContactMe') {
      return <ContactMe />;
    }
    return <Resume />;
  };

  // change current page value
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <body>
    <div className="text-white"> 
      <NavBars currentPage={currentPage} handlePageChange={handlePageChange} />

      <div className="container-fluid ">
        <p/>
        {renderPage()}
        <p/><p/>
        <Footer />
      </div>
    </div>
    </body>
  );
}
