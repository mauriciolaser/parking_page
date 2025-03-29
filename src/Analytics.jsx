import { useEffect } from 'react';

const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID;

const Analytics = () => {
  useEffect(() => {
    if (!GA_TRACKING_ID) {
      console.warn("Google Analytics tracking ID no está definido");
      return;
    }
    
    // Cargar el script de Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Configuración de gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID);
  }, []);

  return null;
};

export default Analytics;
