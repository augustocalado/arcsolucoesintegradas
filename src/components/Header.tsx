import React from 'react';
import Link from 'next/link';
import { Shield, Menu, X, Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="header">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Shield color="var(--c-blue-primary)" size={32} />
          <span style={{ fontSize: '1.75rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--c-dark-blue)' }}>
            C5S<span style={{ color: 'var(--c-blue-primary)' }}>.</span>
          </span>
        </Link>
        
        <nav style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
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
      </div>
    </header>
  );
}
