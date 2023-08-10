import React from 'react';
import './Card.css';

const projects = [
  {
    title: 'Face detection',
    image: 'imgs/faced.png',
    description: 'A real-time face or smile detection using Haar cascade algorithm, uses blocks or line detection features.',
    sourceCode: 'github.com'
  },
  {
    title: 'Data Fusion: Predictive Analytics & Recommendations',
    image: 'imgs/predAnalysis.jpg',
    description: 'Integrated car prize prediction, sales forecasting, and movie recommendation models for actionable insights.',
    sourceCode: 'github.com'
  },


  {
    title: 'Lead tracker chrome extension',
    image: 'imgs/leadt.png',
    description: 'Leads Tracker can be used to save URL from any website.',
    sourceCode: 'github.com'
  },
  {
    title: 'Library Management System (Java)',
    image: 'imgs/libman.png',
    description: 'Used to insert, update, delete records into the Library database using jdbc connector. Where interface is made using Java Swing framework.',
    sourceCode: 'github.com'
  },
  {
    title: 'Personal portfolio website',
    image: 'imgs/perweb.png',
    description: 'My Portfolio website built using React framework.',
    sourceCode: 'github.com'
  }
];

const Card = ({ title, image, description, sourceCode }) => (
  <div className="card offset-lg-1 col-lg-3 col-md-5 col-sm-8" data-aos="flip-down">
    <img className="cardimgs" src={image} alt="Avatar" style={{ width: '100%' }} />
    <h4><b>{title}</b></h4>
    <div className="container card-back">
      <p>{description}</p>
      <button><a href={sourceCode}>Source code</a></button>
    </div>
  </div>
);

const App = () => (



  <section id="projects" className="container project-section project">
    <div className="section-title">
      <h2>Projects</h2>
    </div>
    <hr />
    <div className="row">
      {projects.map((project, index) => (
        <Card key={index} {...project} />
      ))}
    </div>
  </section>
);

export default App;