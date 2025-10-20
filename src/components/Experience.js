import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Vivo (Telefônica Brasil)',
      position: 'Estagiário de Machine Learning e Inteligência Artificial',
      period: 'Set 2025 - Atual',
      description: 'Atuação no desenvolvimento de soluções baseadas em Machine Learning e IA para otimizar processos internos. Implementação de modelos preditivos, análise de dados e automação de tarefas utilizando técnicas de aprendizado de máquina.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker']
    },
    {
      company: 'Eletrobras',
      position: 'Estagiário de Infraestrutura de TI',
      period: 'Nov 2024 - Set 2025',
      description: 'Atualização de documentações técnicas pertinentes a área de infraestrutura, auxilio na sustentação de ambiente de AD, gestão de softwares via SCCM, sou responsável ativamente por realizar controles da área em que somos auditados, nesta tarefa extraio relatórios, colho evidências e me comunico com auditores, auxilio na sustentação do ambiente de redes da companhia, fazendo gerenciamento dos AP‘s, switches e servidores',
      technologies: ['Active Directory', 'Citrix', 'Juniper']
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">
          <span className="title-bracket">{'<'}</span>
          Experiência Profissional
          <span className="title-bracket">{'/>'}</span>
        </h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                {index !== experiences.length - 1 && <div className="marker-line"></div>}
              </div>
              <div className="timeline-content">
                <div className="experience-header">
                  <h3 className="position">{exp.position}</h3>
                  <span className="period">{exp.period}</span>
                </div>
                <h4 className="company">{exp.company}</h4>
                <p className="description">{exp.description}</p>
                <div className="tech-stack">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>     
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
