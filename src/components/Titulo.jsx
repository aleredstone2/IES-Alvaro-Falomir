import React from 'react';
import './Titulo.css'; 
import { useTranslation } from 'react-i18next';

const Titulo = () => {
  const { t } = useTranslation();

  return (
    <div className="titulo-container">
      <img
        className="imagen-principal"
        src="https://estaticos-cdn.prensaiberica.es/clip/23113e69-5759-4be4-b1cf-d9d3858e2480_16-9-discover-aspect-ratio_default_0.jpg"
        alt="Imagen Principal"
      />
      <div className="titulo-texto">
        <h1>IES ÁLVARO FALOMIR</h1>
        <p>{t('school_description')}</p>
      </div>
    </div>
  );
};

export default Titulo;
