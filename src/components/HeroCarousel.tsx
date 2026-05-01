'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface Banner {
  id: number;
  type: 'image' | 'video';
  url: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const defaultBanners: Banner[] = [
  {
    id: 1,
    type: 'image',
    url: '/images/banner_antenas_premium_varejo_1777670014515.png',
    title: 'Proteção inteligente para Redes Varejistas',
    subtitle: 'Tecnologia avançada em antenas antifurto para zerar suas perdas com elegância e precisão.',
    ctaText: 'Ver Soluções EAS',
    ctaLink: '/servicos/antenas-antifurto'
  },
  {
    id: 2,
    type: 'image', // In a real scenario, this would be 'video'
    url: '/images/case_desativador_rf_1777419614796.png',
    title: 'Desativação Rápida e Eficiente no PDV',
    subtitle: 'Nossas soluções de desativação garantem um checkout fluido sem alarmes falsos.',
    ctaText: 'Falar com Consultor',
    ctaLink: '/contato'
  },
  {
    id: 3,
    type: 'image',
    url: '/images/hero_ecossistema_1777418825943.png',
    title: 'Ecossistema Completo ARC TECH',
    subtitle: 'Do CFTV ao Controle de Acesso: infraestrutura robusta com padrão enterprise nacional.',
    ctaText: 'Solicitar Orçamento',
    ctaLink: '/orcamento'
  }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [banners, setBanners] = useState<Banner[]>(defaultBanners);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % banners.length);
  }, [banners.length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  }, [banners.length]);

  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: '600px', overflow: 'hidden', background: 'var(--c-dark-blue)' }}>
      {banners.map((banner, index) => (
        <div 
          key={banner.id}
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: index === current ? 1 : 0,
            visibility: index === current ? 'visible' : 'hidden',
            transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
            transform: index === current ? 'scale(1)' : 'scale(1.05)'
          }}
        >
          {/* Media Render */}
          {banner.type === 'video' ? (
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            >
              <source src={banner.url} type="video/mp4" />
            </video>
          ) : (
            <div style={{ 
              width: '100%', 
              height: '100%', 
              backgroundImage: `url(${banner.url})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center' 
            }}></div>
          )}

          {/* Overlay */}
          <div style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            background: 'linear-gradient(to right, rgba(10, 25, 47, 0.9) 0%, rgba(10, 25, 47, 0.4) 100%)',
            zIndex: 1
          }}></div>

          {/* Content */}
          <div className="container" style={{ 
            position: 'relative', 
            zIndex: 2, 
            height: '100%', 
            display: 'flex', 
            alignItems: 'center' 
          }}>
            <div style={{ 
              maxWidth: '800px',
              opacity: index === current ? 1 : 0,
              transform: index === current ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease-out 0.3s'
            }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', borderRadius: '30px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', marginBottom: '2rem', backdropFilter: 'blur(10px)' }}>
                <ShieldCheck size={18} color="var(--c-neon-blue)" />
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--c-white)', letterSpacing: '0.5px' }}>Tecnologia ARC TECH</span>
              </div>
              
              <h1 style={{ color: 'var(--c-white)', marginBottom: '1.5rem', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                {banner.title}
              </h1>
              
              <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', marginBottom: '3rem', maxWidth: '600px', lineHeight: '1.8' }}>
                {banner.subtitle}
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href={banner.ctaLink} className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2.5rem' }}>
                  {banner.ctaText}
                  <ArrowRight size={20} />
                </Link>
                {banner.type === 'video' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', fontWeight: 600, fontSize: '0.875rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Play size={16} fill="white" />
                    </div>
                    Assistir Demonstração
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="container" style={{ position: 'absolute', bottom: '150px', left: '0', right: '0', zIndex: 10, display: 'flex', gap: '1rem', pointerEvents: 'none' }}>
        <button 
          onClick={prevSlide} 
          style={{ 
            pointerEvents: 'auto',
            width: '50px', 
            height: '50px', 
            borderRadius: '50%', 
            border: '1px solid rgba(255,255,255,0.2)', 
            background: 'rgba(255,255,255,0.05)', 
            color: 'white', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            backdropFilter: 'blur(5px)',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'var(--c-blue-primary)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide} 
          style={{ 
            pointerEvents: 'auto',
            width: '50px', 
            height: '50px', 
            borderRadius: '50%', 
            border: '1px solid rgba(255,255,255,0.2)', 
            background: 'rgba(255,255,255,0.05)', 
            color: 'white', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            backdropFilter: 'blur(5px)',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'var(--c-blue-primary)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicators */}
      <div style={{ position: 'absolute', bottom: '100px', left: '0', width: '100%', zIndex: 10, display: 'flex', justifyContent: 'center', gap: '0.75rem' }}>
        {banners.map((_, i) => (
          <div 
            key={i} 
            onClick={() => setCurrent(i)}
            style={{ 
              width: i === current ? '40px' : '10px', 
              height: '10px', 
              borderRadius: '10px', 
              background: i === current ? 'var(--c-neon-blue)' : 'rgba(255,255,255,0.3)', 
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}
          ></div>
        ))}
      </div>
    </section>
  );
}
