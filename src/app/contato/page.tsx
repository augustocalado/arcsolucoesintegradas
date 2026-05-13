import React from 'react';
import Orcamento from '../orcamento/page';

export default function ContactPage() {
  const [city, setCity] = React.useState('');

  React.useEffect(() => {
    const savedCity = localStorage.getItem('site_target_city');
    if (savedCity) setCity(savedCity);
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--c-bg-light)', minHeight: '100vh' }}>
      <section style={{ padding: '6rem 0 4rem 0', background: 'var(--c-dark-blue)', color: 'white' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Fale com a Arc {city ? `em ${city}` : 'TECH'}
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.8, maxWidth: '700px' }}>
            Nossa equipe técnica está pronta para atender sua demanda {city ? `em ${city} e toda a região` : 'em todo o território nacional'}.
          </p>
        </div>
      </section>
      <Orcamento />
    </div>
  );
}
