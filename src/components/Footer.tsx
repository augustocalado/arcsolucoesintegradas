import React from 'react';
import Link from 'next/link';
import { Shield, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--c-dark-blue)', borderTop: '1px solid var(--c-blue-accent)', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container grid grid-cols-4">
        <div>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <img 
              src="https://lh3.googleusercontent.com/a-/ALV-UjWnTbi1i586gmBeKsmH1jVp88oH5v8fc9TRwMg7p1s2xmOMaXU=w1905" 
              alt="Logo" 
              style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }} 
            />
            <span style={{ fontSize: '1.125rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--c-white)' }}>
              A<span style={{ color: 'var(--c-neon-blue)' }}>r</span>c Soluções Integradas
            </span>
          </Link>
          <p style={{ color: 'var(--c-metallic-light)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
            Especialistas em Segurança Eletrônica Corporativa para Redes Varejistas. Atendimento nacional com projetos personalizados.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>
        
        <div>
          <h4 style={{ marginBottom: '1.5rem', fontSize: '1.125rem', color: 'var(--c-white)' }}>Soluções</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link href="/servicos/cftv-inteligente" style={{ color: 'var(--c-metallic-light)', fontSize: '0.875rem' }}>CFTV Corporativo</Link></li>
            <li><Link href="/servicos/controle-acesso" style={{ color: 'var(--c-metallic-light)', fontSize: '0.875rem' }}>Controle de Acesso</Link></li>
            <li><Link href="/servicos/antenas-antifurto" style={{ color: 'var(--c-metallic-light)', fontSize: '0.875rem' }}>Antenas Antifurto</Link></li>
            <li><Link href="/servicos/manutencao" style={{ color: 'var(--c-metallic-light)', fontSize: '0.875rem' }}>Manutenção Preventiva</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: '1.5rem', fontSize: '1.125rem', color: 'var(--c-white)' }}>Institucional</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link href="/sobre-a-empresa" style={{ color: 'var(--c-metallic-light)', fontSize: '0.875rem' }}>Sobre a Empresa</Link></li>
            <li><Link href="/cobertura-nacional" style={{ color: 'var(--c-metallic-light)', fontSize: '0.875rem' }}>Atendimento Nacional</Link></li>
            <li><Link href="/servicos" style={{ color: 'var(--c-metallic-light)', fontSize: '0.875rem' }}>SLA Garantido</Link></li>
            <li><Link href="/contato" style={{ color: 'var(--c-metallic-light)', fontSize: '0.875rem' }}>Trabalhe Conosco</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: '1.5rem', fontSize: '1.125rem', color: 'var(--c-white)' }}>Contato</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'var(--c-metallic-light)', fontSize: '0.875rem' }}>
              <Phone size={16} style={{ color: 'var(--c-neon-blue)' }} />
              <span>(11) 99893-7891</span>
            </li>
            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'var(--c-metallic-light)', fontSize: '0.875rem' }}>
              <Phone size={16} style={{ color: 'var(--c-neon-blue)' }} />
              <span>(11) 99893-7891</span>
            </li>
            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'var(--c-metallic-light)', fontSize: '0.875rem' }}>
              <Mail size={16} style={{ color: 'var(--c-neon-blue)' }} />
              <span>comercial@ARC TECHsecury.com.br</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container" style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--c-blue-accent)', textAlign: 'center', color: 'var(--c-metallic)', fontSize: '0.75rem' }}>
        <p>&copy; {new Date().getFullYear()} Arc Soluções Integradas. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
