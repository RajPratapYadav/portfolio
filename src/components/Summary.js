import React from 'react';

const summaryContainerStyle = {
  backgroundColor: '#202938', // Dark background color
  padding: '20px',
  color: 'white',
  borderRadius: '5px',
  marginTop: '20px', // Top margin of 20px
};

const summaryTitleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '10px',
  
  color: '#FFD700', // Gold color
};

const summaryTextStyle = {
  fontSize: '18px',
  
};

const Summary = () => (
  <div style={summaryContainerStyle}>
    <h2 style={summaryTitleStyle}>Professional Summary</h2>
    <p style={summaryTextStyle}>
      Experienced Mobile Developer at Sagiam Limited, adept in creating and maintaining applications. Impressive portfolio of 15+ projects, showcasing expertise in Kotlin, React Native, Android, Flutter, Dart, and Java. Proven dedication contributed to project success. Completed intensive 6-month Android and Flutter training. Holds a Bachelor's in Computer Science and Technology, providing a strong foundation for innovation in this dynamic field.
    </p>
  </div>
);

export default Summary;
