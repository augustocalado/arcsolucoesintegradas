import React from 'react';
import Link from 'next/link';
import { Shield, MapPin, Phone, Mail, Instagram, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--c-black-light)', borderTop: '1px solid var(--c-metallic-dark)', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container grid grid-cols-4">
        <div>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Shield color="var(--c-neon-blue)" size={28} />
            <span style={{ fontSize: '1.25rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
              C5S<span style={{ color: 'var(--c-neon-blue)' }}>.</span>
            </span>
          </Link>
          <p style={{ color: 'var(--c-metallic-light)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
            Especialistas em Segurança Eletrônica Corporativa para Redes Varejistas. Atendimento nacional com padrão enterprise.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" style={{ color: 'var(--c-metallic-light)' }}><Linkedin size={20} /></a>
            <a href="#" style={{ color: 'var(--c-metallic-light)' }}><Instagram size={20} /></a>
            <a href="#" style={{ color: 'var(--c-metallic-light)' }}><Facebook size={20} /></a>
          </div>
        </div>
        
        <div>
          <h4 style={{ marginBottom: '1.5rem', fontSize: '1.125rem' }}>Soluções</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link href="/servicos/cftv" style={{ color: 'var(--c-metallic-light)', fontSize: '0.875rem' }}>CFTV Corporativo</Link></li>
            <li><Link href="/servicos/controle-acesso" style={{ color: 'var(--c-metallic-light)', fontSize: '0.875rem' }}>Controle de Acesso</Link></li>
            <li><Link href="/servicos/antenas-antifurto" style={{ color: 'var(--c-metallic-light)', fontSize: '0.875rem' }}>Antenas Antifurto</Link></li>
            <li><Link href="/servicos/manutencao" style={{ color: 'var(--c-metallic-light)', fontSize: '0.875rem' }}>Manutenção Preventiva</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: '1.5rem', fontSize: '1.125rem' }}>Institucional</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link href="/sobre-a-empresa" style={{ color: 'var(--c-metallic-light)', fontSize: '0.875rem' }}>Sobre a Empresa</Link></li>
            <li><Link href="/cobertura-nacional" style={{ color: 'var(--c-metallic-light)', fontSize: '0.875rem' }}>Cobertura Nacional</Link></li>
            <li><Link href="/blog" style={{ color: 'var(--c-metallic-light)', fontSize: '0.875rem' }}>Blog / Notícias</Link></li>
            <li><Link href="/contato" style={{ color: 'var(--c-metallic-light)', fontSize: '0.875rem' }}>Trabalhe Conosco</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: '1.5rem', fontSize: '1.125rem' }}>Contato</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: 'var(--c-metallic-light)', fontSize: '0.875rem' }}>
              <MapPin size={16} style={{ color: 'var(--c-neon-blue)', flexShrink: 0, marginTop: '0.2rem' }} />
              <span>Av. Paulista, 1000 - Bela Vista<br/>São Paulo - SP</span>
            </li>
            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'var(--c-metallic-light)', fontSize: '0.875rem' }}>
              <Phone size={16} style={{ color: 'var(--c-neon-blue)' }} />
              <span>0800 123 4567</span>
            </li>
            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'var(--c-metallic-light)', fontSize: '0.875rem' }}>
              <Mail size={16} style={{ color: 'var(--c-neon-blue)' }} />
              <span>comercial@c5s.com.br</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container" style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--c-metallic-dark)', textAlign: 'center', color: 'var(--c-metallic)', fontSize: '0.75rem' }}>
        <p>&copy; {new Date().getFullYear()} C5S Security. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
