import React from 'react';
import Footer from './_components/footer';
import Navbar from './_components/navbar';

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-white">
      <Navbar />
      <main className="pt-20 pb-20 bg-white">{children}</main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
