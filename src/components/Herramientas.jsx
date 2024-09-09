import React from 'react';
import './Herramientas.css';
import { useTranslation } from 'react-i18next'; 
import { Link } from 'react-router-dom'; 

const GalleryItem = ({ image, title, description, link, isExternal }) => {
  return (
    <div className="gallery-item">
      {isExternal ? (
        
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title} />
        </a>
      ) : (
        
        <Link to={link}>
          <img src={image} alt={title} />
        </Link>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Herramientas = () => {
  const { t } = useTranslation(); 

  const items = [
    {
      image: '/imagenes/netbeans.png',
      title: t('titulo netbeans'), 
      description: t('descripcion netbeans'), 
      link: '/javaide', 
      isExternal: false,
    },
    {
      image: 'https://via.placeholder.com/300',
      title: t('titulo sqlite'),
      description: t('descripcion sqlite'),
      link: 'https://www.ejemplo2.com', 
      isExternal: true,
    },
  ];

  return (
    <div className="gallery-container">
      {items.map((item, index) => (
        <GalleryItem
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
          link={item.link}
          isExternal={item.isExternal}
        />
      ))}
    </div>
  );
};

export default Herramientas;
