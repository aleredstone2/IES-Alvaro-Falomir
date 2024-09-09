import React from 'react';
import { useTranslation } from 'react-i18next';

const Mapa = () => {
    const { t } = useTranslation();

  return (
    <div id="block-3" className="mg-widget widget_block">
      <div className="wp-block-group">
        <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
          <h2 className="wp-block-heading">{t('mapa.title')}</h2>
          <p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12234.040350401701!2d-0.0651956!3d39.9523469!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaa4afda387e800a7!2sIES%20%C3%81lvaro%20Falomir!5e0!3m2!1ses!2ses!4v1663952963208!5m2!1ses!2ses"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              width="450"
              height="450"
              title={t('mapa.iframeTitle')}
            ></iframe>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mapa;
