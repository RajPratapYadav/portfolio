import React from 'react';

const toolbarStyle = {
  backgroundColor: '#000000',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  padding: '10px 0',
};

const tabStyle = {
  margin: '0 20px',
  cursor: 'pointer',
};

const activeTabStyle = {
  fontWeight: 'bold',
};

const Toolbar = ({ setActiveTab, activeTab }) => {
  return (
    <div style={toolbarStyle}>
      <div
        style={{ ...tabStyle, ...(activeTab === 'home' && activeTabStyle) }}
        onClick={() => setActiveTab('home')}
      >
        Home
      </div>
      <div
        style={{ ...tabStyle, ...(activeTab === 'skills' && activeTabStyle) }}
        onClick={() => setActiveTab('skills')}
      >
        Skills
      </div>
      <div
        style={{ ...tabStyle, ...(activeTab === 'expertise' && activeTabStyle) }}
        onClick={() => setActiveTab('expertise')}
      >
        Expertise
      </div>
      <div
        style={{ ...tabStyle, ...(activeTab === 'work' && activeTabStyle) }}
        onClick={() => setActiveTab('work')}
      >
        Work History
      </div>
      <div
        style={{ ...tabStyle, ...(activeTab === 'projects' && activeTabStyle) }}
        onClick={() => setActiveTab('projects')}
      >
        Projects
      </div>
    </div>
  );
};

export default Toolbar;
