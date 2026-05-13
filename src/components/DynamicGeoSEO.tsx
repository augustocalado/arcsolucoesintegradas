'use client';

import { useEffect, useState } from 'react';

export default function DynamicGeoSEO() {
  const [city, setCity] = useState('');

  useEffect(() => {
    const savedCity = localStorage.getItem('site_target_city');
    if (savedCity) {
      setCity(savedCity);
      
      // Update Title for SEO
      const originalTitle = document.title;
      if (!originalTitle.includes(savedCity)) {
        document.title = `${originalTitle} em ${savedCity}`;
      }

      // Inject Geo Metatags
      const metaPlacename = document.querySelector('meta[name="geo.placename"]');
      if (metaPlacename) {
        metaPlacename.setAttribute('content', savedCity);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'geo.placename';
        meta.content = savedCity;
        document.head.appendChild(meta);
      }

      const metaRegion = document.querySelector('meta[name="og:region"]');
      if (metaRegion) {
        metaRegion.setAttribute('content', 'BR');
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:region');
        meta.content = 'BR';
        document.head.appendChild(meta);
      }

      // Inject JSON-LD LocalBusiness
      const scriptId = 'json-ld-local-seo';
      let script = document.getElementById(scriptId) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }

      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Arc Soluções Integradas",
        "image": "https://arcsolucoesintegradas.com.br/logo.png",
        "@id": "https://arcsolucoesintegradas.com.br",
        "url": "https://arcsolucoesintegradas.com.br",
        "telephone": "+5511999999999",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Atendimento Regional",
          "addressLocality": savedCity,
          "addressRegion": "BR",
          "postalCode": "00000-000",
          "addressCountry": "BR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -23.5505,
          "longitude": -46.6333
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "08:00",
          "closes": "18:00"
        }
      });
    }
  }, []);

  if (!city) return null;

  return (
    <div style={{ 
      background: 'var(--c-blue-primary)', 
      color: 'white', 
      textAlign: 'center', 
      padding: '0.5rem', 
      fontSize: '0.8rem', 
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '1px'
    }}>
      Atendimento Especializado em {city} e Região
    </div>
  );
}
