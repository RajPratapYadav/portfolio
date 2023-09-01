import React from 'react';

const expertiseContainerStyle = {
  background: 'linear-gradient(135deg, #2e2e2e, #000000)',
  padding: '20px',
  color: 'white',
  borderRadius: '10px',
  marginTop: '20px',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr', // Two columns
  gap: '20px', // Gap between items
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const expertiseTitleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '10px',
  color: '#FFD700', // Gold color
  gridColumn: 'span 2',
};

const expertiseListStyle = {
  listStyleType: 'none',
  padding: '0',
};

const expertiseItemStyle = {
  fontSize: '18px',
  marginBottom: '10px',
};

const bulletStyle = {
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  background: '#FFD700',
  marginRight: '10px',
  display: 'inline-block',
};

const Expertise = () => (
  <div style={expertiseContainerStyle}>
    <h2 style={expertiseTitleStyle}>Areas of Expertise</h2>
    <ul style={expertiseListStyle}>
      <li style={expertiseItemStyle}>
        <div style={bulletStyle}></div>
        Android App Development
      </li>
      <li style={expertiseItemStyle}>
        <div style={bulletStyle}></div>
        Cross-Platform Mobile App Development
      </li>
      <li style={expertiseItemStyle}>
        <div style={bulletStyle}></div>
        Flutter App Development
      </li>
      <li style={expertiseItemStyle}>
        <div style={bulletStyle}></div>
        React Native App Development
      </li>
      <li style={expertiseItemStyle}>
        <div style={bulletStyle}></div>
        Programming
      </li>
      {/* Add more expertise items below */}
      <li style={expertiseItemStyle}>
        <div style={bulletStyle}></div>
        Web Development
      </li>
      <li style={expertiseItemStyle}>
        <div style={bulletStyle}></div>
        JavaScript
      </li>
      <li style={expertiseItemStyle}>
        <div style={bulletStyle}></div>
        Java
      </li>
      <li style={expertiseItemStyle}>
        <div style={bulletStyle}></div>
        C++
      </li>
      <li style={expertiseItemStyle}>
        <div style={bulletStyle}></div>
        CSS
      </li>
      <li style={expertiseItemStyle}>
        <div style={bulletStyle}></div>
        HTML
      </li>
      <li style={expertiseItemStyle}>
        <div style={bulletStyle}></div>
        Kotlin
      </li>
    </ul>
  </div>
);

export default Expertise;
