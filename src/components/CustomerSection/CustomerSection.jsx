import React from 'react';
import './CustomerSection.css';

const CustomerSection = () => {
  // You would replace these with your actual logo image files
  const logos = [
    'Pizza Hut', 'McDonald\'s', 'Starbucks',
    'Behrouz Biryani', 'Haldiram\'s', 'Baskin Robbins'
  ];

  return (
    <div className="customer-section">
         <h2 className="section-heading">Our Trusted Restaurant Partners...</h2>
      <div className="logo-grid">
        {logos.map((logo, index) => (
          <div key={index} className="logo-item">
            {logo}
          </div>
        ))}
      </div>
      <div className="cta-container">
        <button className="cta-button">
          Meet our Partners &gt;
        </button>
      </div>
    </div>
  );
};

export default CustomerSection;