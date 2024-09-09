import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 
import './Inicio.css'; 
import Mapa from './Mapa';

const Inicio = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="inicio-container">
      {selectedImage && (
        <div className="modal" onClick={closeImage}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage} alt="Imagen en grande" />
        </div>
      )}

      <div className="secciones">
        {/* Sección de Cursos de FP */}
        <section className="seccion">
          <div className="imagen-seccion">
            <img src="https://castellonaldia.elmundo.es/binrepository/697x420/59c0/580d420/none/291842500/ETPM/imagen-barracones-ies-alvaro-falomir_381-3025841_20231024171127.jpg" 
                 alt={t('Cursos de Formación Profesional')}
                 onClick={() => openImage('https://castellonaldia.elmundo.es/binrepository/697x420/59c0/580d420/none/291842500/ETPM/imagen-barracones-ies-alvaro-falomir_381-3025841_20231024171127.jpg')}
                 style={{ cursor: 'pointer' }}
            />
          </div>
          <div className="texto-seccion">
            <h2>{t('Cursos de Formación Profesional')}</h2>
            <p>{t('Descubre nuestra oferta educativa...')}</p>
            <Link to="/cursos-fp" className="enlace">{t('Ver más')}</Link>
          </div>
        </section>

        {/* Sección de Eventos */}
        <section className="seccion">
          <div className="imagen-seccion">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ldGxqjlfhrBqt6UBTZ2gZy5aNq09ah8TNQ&s" 
                 alt={t('Eventos y Actividades')}
                 onClick={() => openImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ldGxqjlfhrBqt6UBTZ2gZy5aNq09ah8TNQ&s')}
                 style={{ cursor: 'pointer' }}
            />
          </div>
          <div className="texto-seccion">
            <h2>{t('Eventos y Actividades')}</h2>
            <p>{t('Mantente al día con nuestros eventos...')}</p>
            <Link to="/eventos" className="enlace">{t('Ver más')}</Link>
          </div>
        </section>

        {/* Otras secciones */}
        <section className="seccion seccion-invertida">
          <div className="imagen-seccion">
            <img src="/imagenes/herramientas.webp" 
                 alt={t('Herramientas y Recursos')}
                 onClick={() => openImage('/imagenes/herramientas.webp')}
                 style={{ cursor: 'pointer' }}
            />
          </div>
          <div className="texto-seccion">
            <h2>{t('Herramientas y Recursos')}</h2> 
            <p>
              {t('Aqui se encuentran las herramientas de programación')}
            </p>
            <Link to="/tools" className="enlace">{t('Ver más')}</Link>
          </div>
        </section>
      </div>

      {/* Contenedor para el mapa */}
      <div className="mapa-container">
        <Mapa />
      </div>
    </div>
  );
};

export default Inicio;
