import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="profile-image">
            <div className="image-placeholder">
              <img className="profile-pic" src="/images/gabriel-vivo.jpeg" alt="Descrição da Imagem" />
            </div>
            <div className="status-indicator">
              <span className="status-dot"></span>
              <span className="status-text">Trabalhando em: Vivo (Telefônica Brasil)</span>
            </div>
          </div>
          <div className="about-text">
            <h1 className="glitch" data-text="João Silva">Gabriel Araujo</h1>
            <div className="typing-effect">
              <span className="role">Estudando: Ciência de Dados, Machine Learning, IA e Engenharia de Software</span>
              <span className="cursor">|</span>
            </div>
            <p className="description">
                Olá! Sou Gabriel Araujo, um entusiasta de tecnologia e estudante de Sistemas de Informação na FIAP. Atualmente, estou estagiando na Vivo (Telefônica Brasil) como Estagiário de Machine Learning e Inteligência Artificial, onde aplico meus conhecimentos para desenvolver soluções inovadoras. Apaixonado por aprendizado contínuo, estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente.
            </p>
            {/* <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">1+</span>
                <span className="stat-label">Anos de Experiência</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projetos Concluídos</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Tecnologias</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
