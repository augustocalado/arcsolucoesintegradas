'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Shield, Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', position: 'relative', zIndex: 1001 }}>
          <img 
            src="https://lh3.googleusercontent.com/a-/ALV-UjWnTbi1i586gmBeKsmH1jVp88oH5v8fc9TRwMg7p1s2xmOMaXU=w1905" 
            alt="Logo Arc Soluções" 
            style={{ 
              width: '56px', 
              height: '56px', 
              borderRadius: '50%', 
              objectFit: 'cover',
              filter: 'invert(1)',
              mixBlendMode: 'multiply',
              border: '1px solid rgba(0,0,0,0.05)'
            }} 
          />
          <span style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--c-dark-blue)', lineHeight: 1.2 }}>
            A<span style={{ color: 'var(--c-blue-primary)' }}>r</span>c Soluções<br /><span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--c-blue-primary)' }}>Integradas</span>
          </span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/sobre-a-empresa" className="nav-link">Empresa</Link>
          <Link href="/servicos" className="nav-link">Soluções</Link>
          <Link href="/cobertura-nacional" className="nav-link">Cobertura</Link>
          <Link href="/contato" className="nav-link">Contato</Link>
          
          <Link href="/orcamento" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.875rem' }}>
            <Phone size={16} />
            Orçamento
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
          style={{ position: 'relative', zIndex: 1001 }}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <nav>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/sobre-a-empresa" onClick={() => setIsMenuOpen(false)}>Empresa</Link>
            <Link href="/servicos" onClick={() => setIsMenuOpen(false)}>Soluções</Link>
            <Link href="/cobertura-nacional" onClick={() => setIsMenuOpen(false)}>Cobertura</Link>
            <Link href="/contato" onClick={() => setIsMenuOpen(false)}>Contato</Link>
            <Link href="/orcamento" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>
              Solicitar Orçamento
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
