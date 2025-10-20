import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: 'Bacharelado em Sistemas de Informação',
      institution: 'Faculdade de Informática e Administração Paulista (FIAP)',
      period: 'Jan 2024 - Dez 2027',
      description: 'Curso focado em desenvolvimento de software, gestão de projetos e tecnologias emergentes.'
    },
    {
      degree: 'Técnico em Desenvolvimento de Sistemas',
      institution: 'ETEC',
      period: 'Jan 2022 - Jun 2023',
      description: 'Formação técnica com ênfase em programação, banco de dados e desenvolvimento web.'
    }
  ];

  const certifications = [
    'Big Data & Analytics - FIAP',
    'Inteligência Artificial e Computacional - FIAP',
    'Soluções Tecnológicas Emergentes - FIAP',
    'Professional Qualification Certificate in System Analysis and Web Prototyping - FIAP'
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">
          <span className="title-bracket">{'<'}</span>
          Formação & Certificações
          <span className="title-bracket">{'/>'}</span>
        </h2>
        
        <div className="education-grid">
          <div className="education-column">
            <h3 className="subsection-title">Formação Acadêmica</h3>
            {education.map((edu, index) => (
              <div key={index} className="education-card">
                <h4 className="degree">{edu.degree}</h4>
                <div className="institution">{edu.institution}</div>
                <div className="period">{edu.period}</div>
                <p className="description">{edu.description}</p>
              </div>
            ))}
          </div>
          
          <div className="certifications-column">
            <h3 className="subsection-title">Certificações</h3>
            <div className="certifications-list">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-item">
                  <span className="cert-icon">✓</span>
                  <span className="cert-name">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
