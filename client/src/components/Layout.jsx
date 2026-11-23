import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Common application layout container wrapping pages with header and footer.
 */
export default function Layout({ children }) {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}
