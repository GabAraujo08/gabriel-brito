import React from 'react';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: '📧',
      label: 'E-mail',
      value: 'gabriel.araujosilvabrito@gmail.com',
      link: 'mailto:gabriel.araujosilvabrito@gmail.com'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/gabrielaraujobrito',
      link: 'https://www.linkedin.com/in/gabrielaraujobrito/'
    },
    {
      icon: '</>', 
      label: 'GitHub',
      value: 'github.com/GabAraujo08',
      link: 'https://github.com/GabAraujo08'
    },
    {
      icon: '📱',
      label: 'Telefone',
      value: '+55 (11) 95152-4860',
      link: 'tel:+5511951524860'
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/seuusuario' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com/seuusuario' },
    { name: 'Dev.to', icon: '📝', url: 'https://dev.to/seuusuario' },
    { name: 'CodePen', icon: '🖊️', url: 'https://codepen.io/seuusuario' }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">
          <span className="title-bracket">{'<'}</span>
          Entre em Contato
          <span className="title-bracket">{'/>'}</span>
        </h2>
        
        <div className="contact-content">
          <div className="contact-intro">
            <h3>Vamos conversar!</h3>
            <p>
              Estou sempre aberto a discutir novos projetos, oportunidades criativas 
              ou parcerias. Se você tem alguma pergunta ou apenas quer dizer oi, 
              ficarei feliz em responder!
            </p>
          </div>

          <div className="contact-grid">
            {contactInfo.map((contact, index) => (
              <a 
                key={index} 
                href={contact.link} 
                className="contact-card"
                target={contact.link.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
              >
                <div className="contact-icon">{contact.icon}</div>
                <div className="contact-details">
                  <span className="contact-label">{contact.label}</span>
                  <span className="contact-value">{contact.value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
