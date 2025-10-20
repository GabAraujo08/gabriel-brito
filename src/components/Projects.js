import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'Corretor de Redações IA',
      category: 'fullstack',
      description: 'Um corretor de redações (ENEM) feito usando Python e o framework Flask, utiliza da API do ChatGPT para corrigir as redações que o usuário envia com base nos critérios e competências estabelecidos pelo ENEM, ao final atribui uma nota à redação.',
      image: '📊',
      technologies: ['Python', 'Flask', 'OpenAI API', 'HTML/CSS', 'JavaScript'],
      github: 'https://github.com/GabAraujo08/CorretorRedacaoIA',
      demo: 'https://demo.exemplo.com',
      highlights: ['Correção automática', 'Feedback detalhado', 'Interface amigável']
    },
    {
      title: 'Getto',
      category: 'fullstack',
      description: 'Getto foi meu projeto de TCC na ETEC, é uma rede social web voltada para a comunidade de artistas independentes, onde eles podem compartilhar suas obras, conectar-se com outros artistas e receber feedbacks.',
      image: '✅',
      technologies: ['PHP', 'MYSQL', 'Javascript', 'HTML', 'CSS'],
      github: 'https://github.com/GabAraujo08/Getto',
      demo: 'https://tasks.exemplo.com',
      highlights: ['Compartilhamento de obras', 'Conexão entre artistas', 'Feedback da comunidade']
    }
  ];

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          <span className="title-bracket">{'<'}</span>
          Projetos Pessoais
          <span className="title-bracket">{'/>'}</span>
        </h2>
        
        {/* <div className="filter-buttons">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div> */}

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-highlights">
                {project.highlights.map((highlight, i) => (
                  <span key={i} className="highlight-badge">{highlight}</span>
                ))}
              </div>
              
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                  <span className="link-icon">{'</>'}</span> GitHub
                </a>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
