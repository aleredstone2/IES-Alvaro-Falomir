import React from 'react';
import { useTranslation } from 'react-i18next';
import './CiclosFormativos.css'; 
import { t } from 'i18next';

const EnlacesInteres = () => (
  <div className="enlaces-interes">
    <h2>{t('enlaces_interes.title')}</h2>

    <div className="wp-block-image">
      <figure className="aligncenter size-large is-resized">
        <a href="https://www.iesalvarofalomir.es/podcast/noticiari-radiomir-episodi-7">
          <img
            loading="lazy"
            decoding="async"
            width="1024"
            height="435"
            src="https://www.iesalvarofalomir.es/wp-content/uploads/2023/11/IMG-20231024-WA0010-1024x435.jpg"
            alt=""
            className="wp-image-1025"
            style={{ width: '198px', height: 'auto' }}
          />
        </a>
        <figcaption className="wp-element-caption">
          <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }} className="has-inline-color has-vivid-red-color">
          </mark>
        </figcaption>
      </figure>
    </div>

    <div className="wp-block-group">
      <div className="wp-block-group__inner-container">
        <div className="wp-block-image is-style-default">
          <figure className="aligncenter size-large is-resized">
            <a href="https://ceice.gva.es/va/web/educacion" target="_blank" rel="noreferrer noopener">
              <img
                loading="lazy"
                decoding="async"
                width="1024"
                height="504"
                src="http://www.iesalvarofalomir.es/wp-content/uploads/2022/09/gv_conselleria_educacio_rgb_val-1024x504.png"
                alt=""
                className="wp-image-88"
                style={{ width: '167px', height: '81px' }}
              />
            </a>
          </figure>
        </div>

        <div className="wp-block-image is-style-rounded">
          <figure className="aligncenter size-large is-resized">
            <a href="https://portal.edu.gva.es/aules/" target="_blank" rel="noreferrer noopener">
              <img
                loading="lazy"
                decoding="async"
                width="1024"
                height="370"
                src="https://www.iesalvarofalomir.es/wp-content/uploads/2022/09/logo_aulesnew-1-1024x370.png"
                alt=""
                className="wp-image-49"
                style={{ width: '188px', height: '68px' }}
              />
            </a>
          </figure>
        </div>
      </div>
    </div>

    <div className="wp-block-image is-style-rounded">
      <figure className="aligncenter size-full is-resized">
        <a href="https://acces.edu.gva.es/sso/login.xhtml?callbackUrl=https://docent.edu.gva.es/md-front/www/" target="_blank" rel="noreferrer noopener">
          <img
            loading="lazy"
            decoding="async"
            width="386"
            height="257"
            src="https://www.iesalvarofalomir.es/wp-content/uploads/2022/09/itaca-modul-docent-1.png"
            alt=""
            className="wp-image-50"
            style={{ width: '176px', height: '118px' }}
          />
        </a>
      </figure>
    </div>

    <div className="wp-block-image is-style-rounded">
      <figure className="aligncenter size-full is-resized">
        <a href="https://familia.edu.gva.es/wf-front/myitaca/login_wf?idioma=C" target="_blank" rel="noreferrer noopener">
          <img
            loading="lazy"
            decoding="async"
            width="687"
            height="330"
            src="http://www.iesalvarofalomir.es/wp-content/uploads/2022/09/web_familia2.png"
            alt=""
            className="wp-image-53"
            style={{ width: '181px', height: '86px' }}
          />
        </a>
      </figure>
    </div>

    <div className="wp-block-image is-style-rounded">
      <figure className="aligncenter size-full is-resized">
        <a href="https://ampafalomir.miampa.com/" target="_blank" rel="noreferrer noopener">
          <img
            loading="lazy"
            decoding="async"
            width="640"
            height="640"
            src="http://www.iesalvarofalomir.es/wp-content/uploads/2022/09/195566663_456139802094400_2800967039418658665_n.jpg"
            alt=""
            className="wp-image-54"
            style={{ width: '129px', height: '129px' }}
          />
        </a>
      </figure>
    </div>
  </div>
);

const CiclosFormativosConEnlaces = () => {
  const { t } = useTranslation();

  return (
    <div className="ciclos-y-enlaces">
      <div className="cursos">
        <h1 className="title">{t('title')}</h1>

        {/* Ciclo: Sistemas Informáticos y Redes */}
        <div className="ciclo">
          <h2>{t('ciclos.sistemas_informaticos.title')}</h2>
          <p>{t('ciclos.sistemas_informaticos.description')}</p>
          <h3>{t('ciclos.sistemas_informaticos.subjects_title')}</h3>
          <ul>
            {t('ciclos.sistemas_informaticos.subjects', { returnObjects: true }).map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul>
          <h3>{t('ciclos.sistemas_informaticos.jobs_title')}</h3>
          <ul>
            {t('ciclos.sistemas_informaticos.jobs', { returnObjects: true }).map((job, index) => (
              <li key={index}>{job}</li>
            ))}
          </ul>
        </div>

        {/* Ciclo: Desarrollo de Aplicaciones Multiplataforma */}
        <div className="ciclo">
          <h2>{t('ciclos.desarrollo_multiplataforma.title')}</h2>
          <p>{t('ciclos.desarrollo_multiplataforma.description')}</p>
          <h3>{t('ciclos.desarrollo_multiplataforma.subjects_title')}</h3>
          <ul>
            {t('ciclos.desarrollo_multiplataforma.subjects', { returnObjects: true }).map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul>
          <h3>{t('ciclos.desarrollo_multiplataforma.jobs_title')}</h3>
          <ul>
            {t('ciclos.desarrollo_multiplataforma.jobs', { returnObjects: true }).map((job, index) => (
              <li key={index}>{job}</li>
            ))}
          </ul>
        </div>

        {/* Ciclo: Desarrollo de Aplicaciones Web */}
        <div className="ciclo">
          <h2>{t('ciclos.desarrollo_web.title')}</h2>
          <p>{t('ciclos.desarrollo_web.description')}</p>
          <h3>{t('ciclos.desarrollo_web.subjects_title')}</h3>
          <ul>
            {t('ciclos.desarrollo_web.subjects', { returnObjects: true }).map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul>
          <h3>{t('ciclos.desarrollo_web.jobs_title')}</h3>
          <ul>
            {t('ciclos.desarrollo_web.jobs', { returnObjects: true }).map((job, index) => (
              <li key={index}>{job}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Enlaces de interés a la derecha */}
      <EnlacesInteres />
    </div>
  );
};

export default CiclosFormativosConEnlaces;
