import React from 'react';

const Footer = function() {
  return React.createElement(
    'footer',
    { className: 'footer' },
    'Todos los derechos reservados. ',
    React.createElement(
      'a',
      {
        href: 'https://www.mirageconsultores.com',
        target: '_blank',
        rel: 'noopener noreferrer'
      },
      'Mirage Consultores.'
    )
  );
};

export default Footer;
