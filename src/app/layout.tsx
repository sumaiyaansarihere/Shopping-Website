
import React from 'react'; // Import React
import HeaderTop from './components/HeaderTop'; // Import your HeaderTop component
import HeaderMain from './components/HeaderMain';
import Navbar from './components/Navbar';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import Hero from '.@/components/Hero'; // Adjust the import path if necessary

import './globals.css'; // Import global CSS

// Define the Layout component
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en"> {/* Add the <html> tag with language attribute */}
      <body>
        <HeaderTop />
        <HeaderMain />
        <Navbar />
        {/* <Hero /> */}
        {/* Use the HeaderTop component here */}
        <main>{children}</main> {/* Render children content */}
      </body>
    </html>
  );
};

// Export the Layout component
export default Layout;
