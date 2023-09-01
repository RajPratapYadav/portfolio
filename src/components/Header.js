import React from 'react';

const headerContainerStyle = {
  backgroundColor: '#131720', // Dark background color
  padding: '20px',
  borderBottom: '5px solid #666', // Slightly darker border
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const headerStyle = {
  fontSize: '36px',
  fontWeight: 'bold',
  margin: '0',
  marginRight: '10px',
};

const subheaderStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0',
};

const imageStyle = {
  width: '100px', // Adjust the image size as needed
  height: '100px', // Adjust the image size as needed
  borderRadius: '50%', // Make the image round
  marginRight: '10px',
  
  objectFit: 'cover',
};

const Header = () => (
  <div style={headerContainerStyle}>
    <img
      src="data:image/jpeg;base64,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" // Replace with your image URL
      alt="Profile"
      style={imageStyle}
    />
    <div>
      <h1 style={headerStyle}>Raj Pratap Yadav</h1>
      <p style={subheaderStyle}>Software Engineer</p>
    </div>
  </div>
);

export default Header;
