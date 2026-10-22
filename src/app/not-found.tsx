import React from 'react';
import Link from 'next/link';
import {
  Home,
  ArrowRight,
  Search,
  PhoneCall,
  ShieldCheck,
  Building2,
  MapPin,
  Video,
  Radio,
  Lock,
  Wrench,
  Clock
} from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

const atalhos = [
  {
    href: '/servicos',
    title: 'Soluções',
    desc: 'CFTV, controle de acesso, antenas antifurto e manutenção para empresas.',
    icon: <ShieldCheck size={26} color="var(--c-blue-primary)" />
  },
  {
    href: '/sobre-a-empresa',
    title: 'Quem somos',
    desc: 'Conheça a estrutura, a experiência técnica e a história da ARC.',
    icon: <Building2 size={26} color="var(--c-blue-primary)" />
  },
  {
    href: '/cobertura-nacional',
    title: 'Cobertura nacional',
    desc: 'Atendimento padronizado em todo o Brasil para redes varejistas.',
    icon: <MapPin size={26} color="var(--c-blue-primary)" />
  },
  {
    href: '/contato',
    title: 'Contato',
    desc: 'Fale com o nosso time comercial e técnico de forma direta.',
    icon: <PhoneCall size={26} color="var(--c-blue-primary)" />
  }
];

const servicos = [
  { href: '/servicos/cftv-inteligente', label: 'CFTV Inteligente', icon: <Video size={16} /> },
  { href: '/servicos/antenas-antifurto', label: 'Antenas Antifurto', icon: <Radio size={16} /> },
  { href: '/servicos/controle-de-acesso', label: 'Controle de Acesso', icon: <Lock size={16} /> },
  { href: '/servicos/manutencao-preventiva', label: 'Manutenção Preventiva', icon: <Wrench size={16} /> }
];

export default function NotFound() {
  return (
    <>
      {/* Hero 404 */}
      <section style={{
        position: 'relative',
        padding: '10rem 0 6rem 0',
        background: 'radial-gradient(ellipse at 50% 0%, #112240 0%, #0A192F 62%)',
        overflow: 'hidden'
      }}>
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-12%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '680px',
            height: '680px',
            maxWidth: '120vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,229,255,0.14) 0%, rgba(0,229,255,0) 70%)',
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '880px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1rem',
            borderRadius: '30px',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'var(--c-white)',
            fontSize: '0.8rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '1.25rem'
          }}>
            <Search size={14} color="var(--c-neon-blue)" /> Erro 404
          </div>

          <div
            aria-hidden="true"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(6.5rem, 20vw, 13rem)',
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: '-0.05em',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #00E5FF 55%, #0056D2 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
              marginBottom: '0.75rem'
            }}
          >
            404
          </div>

          <h1 style={{ fontSize: '2.75rem', color: 'var(--c-white)', marginBottom: '1.25rem' }}>
            Página <span style={{ color: 'var(--c-neon-blue)' }}>não encontrada</span>
          </h1>

          <p style={{
            color: 'rgba(255,255,255,0.78)',
            fontSize: '1.125rem',
            lineHeight: 1.8,
            maxWidth: '640px',
            margin: '0 auto 2.5rem auto'
          }}>
            O endereço que você tentou acessar não existe, foi movido ou está temporariamente
            indisponível. Nossa operação segue monitorando a sua segurança 24/7 — escolha um
            atalho abaixo para continuar navegando.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/" className="btn btn-primary" style={{ padding: '1rem 2.25rem', fontSize: '1.05rem' }}>
              <Home size={18} /> Voltar ao início
            </Link>
            <a
              href="https://wa.me/5511973098174"
              target="_blank"
              rel="noreferrer"
              className="btn"
              style={{
                padding: '1rem 2.25rem',
                fontSize: '1.05rem',
                gap: '0.6rem',
                border: '1px solid rgba(255,255,255,0.35)',
                color: 'var(--c-white)'
              }}
            >
              <WhatsAppIcon size={18} /> Falar com um especialista
            </a>
          </div>
        </div>
      </section>

      {/* Atalhos */}
      <section className="section-padding" style={{ backgroundColor: 'var(--c-bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ width: '30px', height: '2px', background: 'var(--c-blue-primary)' }}></span>
              <span style={{ color: 'var(--c-blue-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem' }}>
                Navegação rápida
              </span>
            </div>
            <h2 style={{ fontSize: '2.25rem', marginBottom: '1rem', color: 'var(--c-dark-blue)' }}>
              Talvez você estivesse procurando
            </h2>
            <p style={{ color: 'var(--c-metallic)', fontSize: '1.05rem' }}>
              Estes são os caminhos mais acessados pelos nossos clientes.
            </p>
          </div>

          <div className="grid grid-cols-4" style={{ gap: '1.5rem' }}>
            {atalhos.map((item) => (
              <Link key={item.href} href={item.href} className="premium-card" style={{ display: 'block', padding: '2rem' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  background: 'rgba(0, 86, 210, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--c-dark-blue)' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--c-metallic)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                  {item.desc}
                </p>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  color: 'var(--c-blue-primary)',
                  fontWeight: 600,
                  fontSize: '0.875rem'
                }}>
                  Acessar <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
            <p style={{ color: 'var(--c-metallic)', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
              Serviços mais procurados:
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              {servicos.map((servico) => (
                <Link
                  key={servico.href}
                  href={servico.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.65rem 1.15rem',
                    borderRadius: '30px',
                    background: 'var(--c-white)',
                    border: '1px solid var(--c-border-light)',
                    color: 'var(--c-dark-blue)',
                    fontWeight: 500,
                    fontSize: '0.9rem'
                  }}
                >
                  <span style={{ display: 'inline-flex', color: 'var(--c-blue-primary)' }}>{servico.icon}</span>
                  {servico.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Faixa de contato */}
      <section style={{ backgroundColor: 'var(--c-dark-blue)', padding: '3.5rem 0' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: 'rgba(0, 229, 255, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <ShieldCheck size={26} color="var(--c-neon-blue)" />
            </div>
            <div>
              <h2 style={{ fontSize: '1.35rem', color: 'var(--c-white)', marginBottom: '0.25rem' }}>
                Ainda precisa de ajuda para encontrar algo?
              </h2>
              <p style={{ color: 'var(--c-metallic-light)', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <Clock size={15} /> Atendimento especializado com cobertura nacional.
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link href="/contato" className="btn btn-primary" style={{ padding: '0.85rem 1.75rem' }}>
              Falar com a ARC
            </Link>
            <Link href="/orcamento" className="btn" style={{ padding: '0.85rem 1.75rem', border: '1px solid rgba(255,255,255,0.35)', color: 'var(--c-white)' }}>
              Pedir orçamento
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
