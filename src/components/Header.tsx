'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Shield, Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', position: 'relative', zIndex: 1001 }}>
          <Shield color="var(--c-blue-primary)" size={32} />
          <span style={{ fontSize: '1.75rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--c-dark-blue)' }}>
            ARC TECH<span style={{ color: 'var(--c-blue-primary)' }}>.</span>
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
