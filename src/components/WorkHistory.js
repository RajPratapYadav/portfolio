import React from 'react';

const cardStyle = {
  background: 'linear-gradient(135deg, #2e2e2e, #000000)',
  padding: '20px',
  color: 'white',
  borderRadius: '5px',
  marginTop: '20px', // Top margin of 20px
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Box shadow for card effect
};

const workHistoryTitleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '10px',
  color: '#FFD700', // Gold color
};

const workHistoryItemStyle = {
  marginBottom: '15px',
  borderBottom: '1px solid #555', // Divider line
  paddingBottom: '15px',
};

const workHistoryHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const workHistoryDateStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#FFD700', // Gold color
};

const workHistoryPositionStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
};

const workHistoryCompanyStyle = {
  fontSize: '18px',
};

const workHistoryDescriptionStyle = {
  fontSize: '18px',
};

const WorkHistory = () => (
  <div style={cardStyle}>
    <h2 style={workHistoryTitleStyle}>Work History</h2>
    <div style={workHistoryItemStyle}>
      <div style={workHistoryHeaderStyle}>
        <p style={workHistoryDateStyle}>Aug 2020 - Present</p>
        <p style={workHistoryPositionStyle}>Software Engineer</p>
      </div>
      <p style={workHistoryCompanyStyle}>Sagiam Limited, Hyderabad, India</p>
      <p style={workHistoryDescriptionStyle}>
        I'm a Mobile Developer who leads the creation of new apps and takes care of existing ones across a wide range of projects. I've worked on over 15 different ventures, demonstrating my skills in various technologies like Flutter, Dart, Kotlin, React Native, Android, and Java.
      </p>
    </div>
    <div style={workHistoryItemStyle}>
      <div style={workHistoryHeaderStyle}>
        <p style={workHistoryDateStyle}>Mar 2021 - Nov 2021</p>
        <p style={workHistoryPositionStyle}>Android and Flutter Trainee</p>
      </div>
      <p style={workHistoryCompanyStyle}>Ducat Training Institute, Noida, India</p>
      <p style={workHistoryDescriptionStyle}>
        Took part in an intensive 6-month training program to learn Android and Flutter development. Gained solid skills in creating mobile apps using these modern technologies.
      </p>
    </div>
  </div>
);

export default WorkHistory;
