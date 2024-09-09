import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BotonAtras = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="back-button" 
      onClick={() => navigate(-1)} 
      style={{
        position: 'fixed', 
        top: '90%', 
        left: '20px', 
        fontSize: '32px', 
        cursor: 'pointer', 
        zIndex: 1000
      }}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </div>
  );
};

export default BotonAtras;