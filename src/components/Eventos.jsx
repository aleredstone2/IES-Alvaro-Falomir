import React from 'react';
import { useTranslation } from 'react-i18next';
import './Eventos.css'; 

const Eventos = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      {/* Hackathon Section */}
      <div className="event">
        <div className="event-content">
          <div className="event-text">
            <h2>{t('hackathon_title')}</h2>
            <p>{t('hackathon_description')}</p>
          </div>
          <a href="https://hackathon-2024.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://hackathon-2024.com/assets/img/hackaton_1.png"
              alt="Hackathon"
              className="event-image"
            />
          </a>
        </div>
      </div>

      {/* Deep Racing Section */}
      <div className="event">
        <div className="event-content">
          <div className="event-text">
            <h2>{t('deepracing_title')}</h2>
            <p>{t('deepracing_description')}</p>
          </div>
          <a href="https://aws.amazon.com/es/deepracer/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://d1.awsstatic.com/deepracer/DRL%20Logo%20web%20500px.2b6ea0add11b4cf83314b39d3d7d6ab63d7fdff9.png"
              alt="Deep Racing"
              className="event-image"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Eventos;
