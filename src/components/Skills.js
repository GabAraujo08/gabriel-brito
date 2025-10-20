import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = {
    frontend: [
      { name: 'React', level: 'Iniciante' },
      { name: 'JavaScript', level: 'Intermediário' },
      { name: 'HTML/CSS', level: 'Intermediário' }
    ],
    backend: [
      { name: 'Java', level: 'Intermediário' },
      { name: 'Node.js', level: 'Iniciante' },
      { name: 'Python', level: 'Intermediário' },
      { name: 'FastAPI', level: 'Intermediário' },
      { name: 'PostgreSQL', level: 'Iniciante' },
      { name: 'SQL', level: 'Intermediário' },
      { name: 'REST API', level: 'Intermediário' }
    ],
    tools: [
      { name: 'Git/GitHub', level: 'Intermediário' },
      { name: 'Docker', level: 'Iniciante' },
      { name: 'AWS', level: 'Estudando' },
      { name: 'Linux', level: 'Intermediário' },
      { name: 'Google Colab', level: 'Intermediário' },
      { name: 'Scikit-learn', level: 'Iniciante' },
      { name: 'Pandas', level: 'Iniciante' },
      { name: 'NumPy', level: 'Iniciante' },
      { name: 'Jupyter Notebook', level: 'Iniciante' }
    ]
  };

  // Define as cores e estilos para cada nível
  const getLevelStyle = (level) => {
    const styles = {
      'Iniciante': { color: '#60a5fa', icon: '📘', bg: 'rgba(96, 165, 250, 0.1)', border: 'rgba(96, 165, 250, 0.3)' },
      'Intermediário': { color: '#a78bfa', icon: '📗', bg: 'rgba(167, 139, 250, 0.1)', border: 'rgba(167, 139, 250, 0.3)' },
      'Profissional': { color: '#00ff88', icon: '🏆', bg: 'rgba(0, 255, 136, 0.1)', border: 'rgba(0, 255, 136, 0.3)' },
      'Avançado': { color: '#fbbf24', icon: '⭐', bg: 'rgba(251, 191, 36, 0.1)', border: 'rgba(251, 191, 36, 0.3)' },
      'Estudando': { color: '#f472b6', icon: '🎯', bg: 'rgba(244, 114, 182, 0.1)', border: 'rgba(244, 114, 182, 0.3)' }
    };
    return styles[level] || styles['Intermediário'];
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">
          <span className="title-bracket">{'<'}</span>
          Skills
          <span className="title-bracket">{'/>'}</span>
        </h2>
        
        <div className="skills-grid">
          <div className="skill-category">
            <h3 className="category-title">
              <span className="icon">🎨</span> Frontend
            </h3>
            <div className="skills-list">
              {skillsData.frontend.map((skill, index) => {
                const style = getLevelStyle(skill.level);
                return (
                  <div key={index} className="skill-item-badge">
                    <div className="skill-name-badge">{skill.name}</div>
                    <div 
                      className="skill-level-badge"
                      style={{
                        color: style.color,
                        backgroundColor: style.bg,
                        borderColor: style.border
                      }}
                    >
                      <span className="level-icon">{style.icon}</span>
                      <span className="level-text">{skill.level}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">
              <span className="icon">⚙️</span> Backend
            </h3>
            <div className="skills-list">
              {skillsData.backend.map((skill, index) => {
                const style = getLevelStyle(skill.level);
                return (
                  <div key={index} className="skill-item-badge">
                    <div className="skill-name-badge">{skill.name}</div>
                    <div 
                      className="skill-level-badge"
                      style={{
                        color: style.color,
                        backgroundColor: style.bg,
                        borderColor: style.border
                      }}
                    >
                      <span className="level-icon">{style.icon}</span>
                      <span className="level-text">{skill.level}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">
              <span className="icon">🛠️</span> Ferramentas
            </h3>
            <div className="skills-list">
              {skillsData.tools.map((skill, index) => {
                const style = getLevelStyle(skill.level);
                return (
                  <div key={index} className="skill-item-badge">
                    <div className="skill-name-badge">{skill.name}</div>
                    <div 
                      className="skill-level-badge"
                      style={{
                        color: style.color,
                        backgroundColor: style.bg,
                        borderColor: style.border
                      }}
                    >
                      <span className="level-icon">{style.icon}</span>
                      <span className="level-text">{skill.level}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Legenda dos níveis */}
        <div className="skills-legend">
          <h4 className="legend-title">Níveis de Proficiência</h4>
          <div className="legend-items">
            <div className="legend-item">
              <span className="legend-icon">📘</span>
              <span className="legend-label">Iniciante</span>
              <span className="legend-description">Conhecimento básico e em aprendizado</span>
            </div>
            <div className="legend-item">
              <span className="legend-icon">📗</span>
              <span className="legend-label">Intermediário</span>
              <span className="legend-description">Trabalho independente em tarefas comuns</span>
            </div>
            <div className="legend-item">
              <span className="legend-icon">🏆</span>
              <span className="legend-label">Profissional</span>
              <span className="legend-description">Domínio completo e experiência prática</span>
            </div>
            <div className="legend-item">
              <span className="legend-icon">⭐</span>
              <span className="legend-label">Avançado</span>
              <span className="legend-description">Expertise e capacidade de mentoria</span>
            </div>
            <div className="legend-item">
              <span className="legend-icon">🎯</span>
              <span className="legend-label">Estudando</span>
              <span className="legend-description">Atualmente aprendendo e praticando</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
