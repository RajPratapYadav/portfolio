import React, { useState } from 'react';
import Header from './components/Header';
import ContactInfo from './components/ContactInfo';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Expertise from './components/Expertise';
import WorkHistory from './components/WorkHistory';
import Projects from './components/Projects';
import Toolbar from './components/Toolbar';

const appStyle = {
  backgroundColor: '#000000',
  color: 'white',
  fontFamily: 'Arial, sans-serif',
  minHeight: '100vh',
};

const contentStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
};

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'summary':
        return <Summary />;
      case 'skills':
        return <Skills />;
      case 'expertise':
        return <Expertise />;
      case 'work':
        return <WorkHistory />;
      case 'projects':
        return <Projects />;
      default:
        return (
          <div>
            <ContactInfo />
          </div>
        );
    }
  };

  return (
    <div style={appStyle}>
      <Toolbar setActiveTab={setActiveTab} activeTab={activeTab} />
      <div style={contentStyle}>
        {renderContent()}
      </div>
    </div>
  );
};

export default App;
