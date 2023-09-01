import React from 'react';

const projectsContainerStyle = {
  marginTop: '20px',
  padding: '20px',
  backgroundColor: '#131720', // Dark background color
  borderRadius: '5px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Box shadow for card effect
  color: 'white', // Text color
};

const projectListStyle = {
  listStyle: 'none',
  padding: '0',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', // Responsive grid
  gap: '20px', // Gap between project items
};

const projectItemStyle = {
  marginBottom: '20px',
  border: '1px solid #555', // Border color
  borderRadius: '5px',
  padding: '20px',
  background: 'linear-gradient(135deg, #2e2e2e, #000000)',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Box shadow for project items
};

const projectTitleStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '10px',
  color: '#FFD700', // Gold color
};

const projectDescriptionStyle = {
  fontSize: '16px',
};

const projectImageStyle = {
  width: '100%',
  height: 'auto',
  marginBottom: '10px',
  borderRadius: '5px',
};

const projectLinksStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '10px',
};

const projectLinkStyle = {
  textDecoration: 'none',
  color: 'white',
  fontSize: '14px',
};

const Technologies = ({ techList }) => (
  <div>
    <h4 style={{ color: '#FFD700' }}>Technologies Used:</h4>
    <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
      {techList.map((tech, index) => (
        <li key={index} style={{ fontSize: '14px' }}>
          {tech}
        </li>
      ))}
    </ul>
  </div>
);

const projectsData = [
    {
      title: 'Y Junction User',
      description:
        'Co-developed "Y Junction User," an Android and Kotlin project, enabling easy on-demand hourly labor hiring and secure payments.',
      imageUrl: 'https://example.com/y-junction-user.jpg',
      githubLink: 'https://github.com/yourusername/y-junction-user',
      playstoreLink: 'https://play.google.com/store/apps/details?id=com.example.yjunctionuser',
      techList: ['Android', 'Kotlin', 'UI/UX Design', 'Network Implementation'],
    },
    {
      title: 'Java, Y Junction Vendor',
      description:
        'Co-created "Y Junction Vendor" on Android/Kotlin with a teammate, streamlining laborer-administrator links.',
      imageUrl: 'https://example.com/y-junction-vendor.jpg',
      githubLink: 'https://github.com/yourusername/y-junction-vendor',
      playstoreLink: 'https://play.google.com/store/apps/details?id=com.example.yjunctionvendor',
      techList: ['Android', 'Kotlin', 'UI/UX Design', 'Network Implementation'],
    },
    {
      title: 'Ghar se khana User',
      description:
        'Developed "Ghar se Khana User," an Android and Kotlin-based solution for streamlined food ordering from restaurants.',
      imageUrl: 'https://example.com/ghar-se-khana-user.jpg',
      githubLink: 'https://github.com/yourusername/ghar-se-khana-user',
      playstoreLink: 'https://play.google.com/store/apps/details?id=com.example.gharsekhanauser',
      techList: ['Android', 'Kotlin', 'UI/UX Design', 'Network Implementation'],
    },
    {
      title: 'Ghar se khana chef',
      description:
        'Contributed to the development of "Ghar Se Khana Chef," a platform catering to restaurant chefs.',
      imageUrl: 'https://example.com/ghar-se-khana-chef.jpg',
      githubLink: 'https://github.com/yourusername/ghar-se-khana-chef',
      playstoreLink: 'https://play.google.com/store/apps/details?id=com.example.gharsekhanachef',
      techList: ['Android', 'Kotlin', 'UI/UX Design', 'Network Implementation'],
    },
    {
      title: 'ICL',
      description:
        'Developed "ICL" project for domestic and international courier services, utilizing Android, Kotlin, and Java.',
      imageUrl: 'https://example.com/icl.jpg',
      githubLink: 'https://github.com/yourusername/icl',
      playstoreLink: 'https://play.google.com/store/apps/details?id=com.example.icl',
      techList: ['Android', 'Kotlin', 'Java', 'UI/UX Design', 'Network Implementation'],
    },
    {
      title: 'Explora',
      description:
        'Individually created "Explora," an independent Android app, combining product listings, coupons, and a marketplace.',
      imageUrl: 'https://example.com/explora.jpg',
      githubLink: 'https://github.com/yourusername/explora',
      playstoreLink: 'https://play.google.com/store/apps/details?id=com.example.explora',
      techList: ['Android', 'Kotlin', 'UI/UX Design', 'Network Implementation'],
    },
    {
      title: 'Vitta- Android, Kotlin',
      description:
        'Independently developed "Vitta" project in Android Kotlin, a Quiz app allowing users to play games online and earn real money.',
      imageUrl: 'https://example.com/vitta.jpg',
      githubLink: 'https://github.com/yourusername/vitta',
      playstoreLink: 'https://play.google.com/store/apps/details?id=com.example.vitta',
      techList: ['Android', 'Kotlin', 'UI/UX Design', 'Backend Integration'],
    },
    {
      title: 'Spot Hole',
      description:
        '"Spot Hole" is a user-friendly platform enabling users to submit images of road potholes from their chosen areas and monitor the repair progress.',
      imageUrl: 'https://example.com/spot-hole.jpg',
      githubLink: 'https://github.com/yourusername/spot-hole',
      playstoreLink: 'https://play.google.com/store/apps/details?id=com.example.spot-hole',
      techList: ['Android', 'Kotlin', 'Java', 'UI/UX Design', 'Network Implementation'],
    },
    {
      title: 'Spot Hole Driver',
      description:
        '"Spot Hole Driver" is a user-centric Android application skillfully developed using Kotlin and Java.',
      imageUrl: 'https://example.com/spot-hole-driver.jpg',
      githubLink: 'https://github.com/yourusername/spot-hole-driver',
      playstoreLink: 'https://play.google.com/store/apps/details?id=com.example.spot-hole-driver',
      techList: ['Android', 'Kotlin', 'Java', 'UI/UX Design', 'Network Implementation'],
    },
    {
      title: 'Godavari Cuts',
      description:
        '"Godavari Cuts" is an Android application tailored for chicken shops.',
      imageUrl: 'https://example.com/godavari-cuts.jpg',
      githubLink: 'https://github.com/yourusername/godavari-cuts',
      playstoreLink: 'https://play.google.com/store/apps/details?id=com.example.godavari-cuts',
      techList: ['Android', 'Kotlin', 'Java', 'UI/UX Design', 'Network Implementation'],
    },
    {
      title: 'I And J Group',
      description:
        '"I And J Group" is a versatile multi-user app designed for streamlined loan and finance processes.',
      imageUrl: 'https://example.com/i-and-j-group.jpg',
      githubLink: 'https://github.com/yourusername/i-and-j-group',
      playstoreLink: 'https://play.google.com/store/apps/details?id=com.example.iandjgroup',
      techList: ['Android', 'Kotlin', 'UI/UX Design', 'Network Implementation'],
    },
    {
      title: 'Call First- Android, Kotlin',
      description:
        '"Call First" is an alarm activation application developed individually using Android and Kotlin.',
      imageUrl: 'https://example.com/call-first.jpg',
      githubLink: 'https://github.com/yourusername/call-first',
      playstoreLink: 'https://play.google.com/store/apps/details?id=com.example.callfirst',
      techList: ['Android', 'Kotlin', 'UI/UX Design', 'Network Implementation'],
    },
    {
      title: 'Call first device App',
      description:
        '"Call first device App" is a user-friendly application enabling instant alarm activation with a single click.',
      imageUrl: 'https://example.com/call-first-device-app.jpg',
      githubLink: 'https://github.com/yourusername/call-first-device-app',
      playstoreLink: 'https://play.google.com/store/apps/details?id=com.example.callfirstdeviceapp',
      techList: ['Android', 'Kotlin', 'UI/UX Design', 'Network Implementation'],
    },
    {
      title: 'XpressForce',
      description:
        '"XpressForce" is an application utilized by XpressBees, enabling them to post job requirements while users can apply for these positions seamlessly.',
      imageUrl: 'https://example.com/xpressforce.jpg',
      githubLink: 'https://github.com/yourusername/xpressforce',
      playstoreLink: 'https://play.google.com/store/apps/details?id=com.example.xpressforce',
      techList: ['Android', 'Kotlin', 'UI/UX Design', 'Network Implementation'],
    },
    {
      title: 'TalentGlass',
      description:
        '"Talent Glass" is a dynamic app that facilitates seamless interaction between TalentGlass and Vendors.',
      imageUrl: 'https://example.com/talentglass.jpg',
      githubLink: 'https://github.com/yourusername/talentglass',
      playstoreLink: 'https://play.google.com/store/apps/details?id=com.example.talentglass',
      techList: ['React Native', 'UI/UX Design', 'Backend Integration'],
    },
    {
      title: 'FinAcePay',
      description:
        '"FinAcePay" is a user-centric rewards app that enables seamless payments via credit cards or UPI.',
      imageUrl: 'https://example.com/finacepay.jpg',
      githubLink: 'https://github.com/yourusername/finacepay',
      playstoreLink: 'https://play.google.com/store/apps/details?id=com.example.finacepay',
      techList: ['React Native', 'UI/UX Design', 'Backend Integration'],
    },
    {
      title: 'StarzOpp',
      description:
        '"StarzOpp" is a premier social media app tailored for the Entertainment industry.',
      imageUrl: 'https://example.com/starzopp.jpg',
      githubLink: 'https://github.com/yourusername/starzopp',
      playstoreLink: 'https://play.google.com/store/apps/details?id=com.example.starzopp',
      techList: ['React Native', 'UI/UX Design', 'Backend Integration'],
    },
    // Add more project objects like the ones above
  ];
  
  
const Projects = () => (
  <div style={projectsContainerStyle}>
    <h2>Projects</h2>
    <ul style={projectListStyle}>
      {projectsData.map((project, index) => (
        <li key={index} style={projectItemStyle}>
          <h3 style={projectTitleStyle}>{project.title}</h3>
          <img src={project.imageUrl} alt={project.title} style={projectImageStyle} />
          <p style={projectDescriptionStyle}>{project.description}</p>
          <Technologies techList={project.techList} />
          <div style={projectLinksStyle}>
            {project.githubLink && (
              <a href={project.githubLink} style={projectLinkStyle} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
            {project.playstoreLink && (
              <a href={project.playstoreLink} style={projectLinkStyle} target="_blank" rel="noopener noreferrer">
                Play Store
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Projects;
