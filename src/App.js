import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faHome, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './i18n'; 
import JavaIDE from './components/JavaIDE';
import Inicio from './components/Inicio';
import Titulo from './components/Titulo';
import Herramientas from './components/Herramientas';
import CiclosFormativos from './components/CiclosFormativos';
import Eventos from './components/Eventos';
import BotonAtras from './components/BotonAtras'; // Importa el botón de retroceso

const App = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('es');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Botón de retroceso */}
        <BotonAtras />

        {/* Barra superior con la casita y las banderas */}
        <div className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', width: '100%' }}>
          {/* Icono de casa a la izquierda */}
          <div className="home-icon">
            <Link to="/">
              <FontAwesomeIcon 
                icon={faHome} 
                style={{ fontSize: '32px', cursor: 'pointer', top: '50% !important'}} 
              />
            </Link>
          </div>

          {/* Flags a la derecha */}
          <div className="flags-container" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/flags/es.png"
              alt="Español"
              onClick={() => changeLanguage('es')}
              style={{ width: '32px', cursor: 'pointer', marginRight: '10px' }}
            />
            <img
              src="/flags/cat.jpg"
              alt="Valencià"
              onClick={() => changeLanguage('ca')}
              style={{ width: '32px', cursor: 'pointer' }}
            />
          </div>
        </div>

        {/* El título ocupará todo el ancho */}
        <div className="title-container" style={{ width: '100%' }}>
          <Titulo />
        </div>

        {/* Rutas */}
        <Routes>
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/tools" element={<Herramientas />} />
          <Route path="/javaide" element={<JavaIDE />} />
          <Route path="/cursos-fp" element={<CiclosFormativos />} />
          <Route path="/" element={<Inicio />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
