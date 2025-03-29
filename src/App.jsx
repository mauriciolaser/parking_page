import React from 'react';
import { Helmet } from 'react-helmet';
import Analytics from './Analytics';

function App() {
  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mirage | En Construcción</title>
        <meta name="description" content="Estamos construyendo una página web aquí. Vuelve pronto." />
        <meta name="keywords" content="Mirage Consultores, desarrollo web" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Mirage Consultores" />
        {/* Puedes agregar más meta tags según sea necesario */}
      </Helmet>

      {/* Incluir Google Analytics */}
      <Analytics />

      <h1>Mirage | En Construcción</h1>
      <p>Estamos construyendo una página web aquí. Vuelve pronto.</p>
    </div>
  );
}

export default App;
