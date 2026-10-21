import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ShieldAlert,
  BellRing,
  Eye,
  Siren,
  CheckCircle2,
  Clock,
  Wifi,
  ShieldCheck,
  PhoneCall,
  Building2,
  Lock
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Alarmes Empresariais e Detecção de Intrusão | ARC Soluções Integradas',
  description: 'Sistemas de alarme e detecção de intrusão para empresas e redes varejistas. Sensores avançados, monitoramento 24h e resposta rápida a ocorrências.',
  keywords: 'alarmes empresariais, sistema de alarme corporativo, detecção de intrusão, sensor de presença, monitoramento 24h, arcsolucoesintegradas',
};

export default function AlarmesEmpresariaisPage() {
  const componentes = [
    {
      icon: <Eye size={36} color="var(--c-blue-primary)" />,
      title: 'Sensores de Presença (PIR)',
      desc: 'Detectores infravermelhos passivos com inteligência para distinguir seres humanos de animais e fontes de calor, eliminando alarmes falsos.'
    },
    {
      icon: <BellRing size={36} color="var(--c-blue-primary)" />,
      title: 'Sensores de Vibração e Abertura',
      desc: 'Proteção perimetral para janelas, portas, cofres e racks. Acionamento instantâneo a qualquer tentativa de arrombamento.'
    },
    {
      icon: <Siren size={36} color="var(--c-blue-primary)" />,
      title: 'Sirenes e Alertas Sonoros',
      desc: 'Sirenes de alto volume para inibição imediata do invasor, além de alertas silenciosos integrados diretamente à central de monitoramento.'
    },
    {
      icon: <Lock size={36} color="var(--c-blue-primary)" />,
      title: 'Botões de Pânico',
      desc: 'Dispositivos discretos e estrategicamente posicionados para acionamento silencioso em situações de coerção ou emergência.'
    },
    {
      icon: <Wifi size={36} color="var(--c-blue-primary)" />,
      title: 'Comunicação Redundante',
      desc: 'Comunicação com a central via GSM/GPRS, Ethernet e linha telefônica — garantindo transmissão do alarme mesmo com corte de energia ou internet.'
    },
    {
      icon: <Clock size={36} color="var(--c-blue-primary)" />,
      title: 'Monitoramento 24x7',
      desc: 'NOC próprio com operadores altamente treinados para triagem de ocorrências e acionamento de equipes de resposta e autoridades.'
    }
  ];

  const aplicacoes = [
    { icon: <Building2 size={28} color="var(--c-blue-primary)" />, title: 'Lojas e Franquias', desc: 'Proteção total fora do horário de funcionamento com acionamento e desarme via app ou senha.' },
    { icon: <ShieldCheck size={28} color="var(--c-blue-primary)" />, title: 'Centros de Distribuição', desc: 'Zoneamento por área (administrativo, armazém, doca) com permissões de acesso por horário e turno.' },
    { icon: <Eye size={28} color="var(--c-blue-primary)" />, title: 'Escritórios Corporativos', desc: 'Integração com CFTV para verificação visual da ocorrência antes do despacho de equipes de resposta.' },
    { icon: <Lock size={28} color="var(--c-blue-primary)" />, title: 'Cofres e Áreas Restritas', desc: 'Sensores de vibração de alta sensibilidade e detectores sísmicos para proteção de ativos de alto valor.' }
  ];

  return (
    <>
      {/* Hero */}
      <section style={{
        position: 'relative',
        padding: '10rem 0 6rem 0',
        backgroundImage: 'url("/images/alarme_intelbras_1777418492213.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '68vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(10, 25, 47, 0.97) 0%, rgba(10, 25, 47, 0.65) 100%)', zIndex: 0 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '850px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', borderRadius: '30px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', marginBottom: '1.5rem', color: 'var(--c-white)', fontSize: '0.875rem', fontWeight: 600 }}>
              <ShieldAlert size={16} color="var(--c-neon-blue)" /> Monitoramento e Resposta 24 Horas
            </div>
            <h1 style={{ fontSize: '3.75rem', marginBottom: '1.5rem', color: 'var(--c-white)', lineHeight: 1.15 }}>
              Alarmes e <span style={{ color: 'var(--c-neon-blue)' }}>Detecção de Intrusão</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.85)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
              Proteja o patrimônio da sua empresa mesmo fora do horário comercial. Sistemas inteligentes de alarme com sensores avançados, comunicação redundante e central de monitoramento 24h para resposta imediata a qualquer ocorrência.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/orcamento" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                Solicitar Projeto de Alarme <ArrowRight size={18} />
              </Link>
              <a href="https://wa.me/5511973098174" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.125rem', borderColor: 'rgba(255,255,255,0.4)', color: 'var(--c-white)' }}>
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Componentes do sistema */}
      <section className="section-padding" style={{ backgroundColor: 'var(--c-bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4.5rem auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ width: '30px', height: '2px', background: 'var(--c-blue-primary)' }}></span>
              <span style={{ color: 'var(--c-blue-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.875rem' }}>Arquitetura do Sistema</span>
            </div>
            <h2 style={{ fontSize: '2.75rem', marginBottom: '1.25rem', color: 'var(--c-dark-blue)' }}>
              Detecção inteligente em <span className="text-primary">múltiplas camadas</span>
            </h2>
            <p style={{ color: 'var(--c-metallic)', fontSize: '1.125rem' }}>
              Combinamos diferentes tecnologias de detecção para criar uma barreira de segurança sem pontos cegos, desde o perímetro externo até as áreas críticas internas.
            </p>
          </div>

          <div className="grid grid-cols-3" style={{ gap: '2rem' }}>
            {componentes.map((comp, idx) => (
              <div key={idx} className="premium-card">
                <div style={{ width: '64px', height: '64px', borderRadius: '18px', background: 'rgba(0, 86, 210, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  {comp.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.7rem', color: 'var(--c-dark-blue)' }}>{comp.title}</h3>
                <p style={{ color: 'var(--c-metallic)', lineHeight: 1.6, fontSize: '0.9rem' }}>{comp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integração com CFTV */}
      <section className="section-padding" style={{ backgroundColor: 'var(--c-dark-blue)' }}>
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', border: '1px solid var(--c-blue-accent)' }}>
              <Image
                src="/images/alarme_intrusao_1777418002218.png"
                alt="Central de alarme integrada ao CFTV da ARC Soluções"
                width={600}
                height={480}
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
            </div>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ width: '30px', height: '2px', background: 'var(--c-neon-blue)' }}></span>
                <span style={{ color: 'var(--c-neon-blue)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.875rem' }}>Integração Total</span>
              </div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--c-white)', lineHeight: 1.2 }}>
                Alarme + CFTV: a combinação mais poderosa em segurança.
              </h2>
              <p style={{ color: 'var(--c-metallic-light)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.8 }}>
                Quando o sensor de presença aciona o alarme, as câmeras associadas à zona de detecção são automaticamente focadas na área e o operador do NOC visualiza em tempo real o que está acontecendo — antes mesmo de despachar uma equipe.
              </p>
              {[
                'Redução de chamadas falsas e custos de mobilização',
                'Evidência visual registrada e vinculada ao evento de alarme',
                'Integração com controle de acesso para bloqueio automático de portas',
                'Notificações push para responsáveis via aplicativo móvel',
                'Laudo fotográfico e relatório de ocorrência após cada evento'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <CheckCircle2 size={18} color="var(--c-neon-blue)" style={{ flexShrink: 0 }} />
                  <span style={{ color: 'var(--c-metallic-light)', fontSize: '0.95rem' }}>{item}</span>
                </div>
              ))}
              <div style={{ marginTop: '2rem' }}>
                <Link href="/orcamento" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                  Solicitar Projeto Integrado <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aplicações */}
      <section className="section-padding" style={{ backgroundColor: 'var(--c-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.25rem', color: 'var(--c-dark-blue)' }}>
              Soluções para <span className="text-primary">Cada Ambiente</span>
            </h2>
          </div>
          <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
            {aplicacoes.map((app, idx) => (
              <div key={idx} className="premium-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: 'rgba(0, 86, 210, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {app.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--c-dark-blue)' }}>{app.title}</h3>
                  <p style={{ color: 'var(--c-metallic)', lineHeight: 1.6, fontSize: '0.9rem' }}>{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section style={{ backgroundColor: 'var(--c-bg-light)', padding: '6rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.25rem', color: 'var(--c-dark-blue)' }}>
            Sua empresa está protegida quando ninguém está lá?
          </h2>
          <p style={{ color: 'var(--c-metallic)', fontSize: '1.125rem', marginBottom: '2.5rem' }}>
            Solicite uma consultoria técnica e saiba como blindar sua operação com o sistema de alarme certo para o seu negócio.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/orcamento" className="btn btn-primary" style={{ padding: '1.125rem 2.5rem', fontSize: '1.125rem' }}>
              Solicitar Projeto de Alarme
            </Link>
            <a href="https://wa.me/5511973098174" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '1.125rem 2.5rem', fontSize: '1.125rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <PhoneCall size={18} /> (11) 97309-8174
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
