import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Lock,
  ScanFace,
  Fingerprint,
  QrCode,
  Users,
  ShieldCheck,
  CheckCircle2,
  BarChart3,
  Key,
  Building2,
  PhoneCall
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Controle de Acesso Enterprise | ARC Soluções Integradas',
  description: 'Sistemas completos de controle de acesso com biometria, reconhecimento facial, catracas e torniquetes para empresas e redes varejistas. Cobertura nacional.',
  keywords: 'controle de acesso, biometria corporativa, catracas de acesso, reconhecimento facial empresas, controle de entrada e saída, arc solucoes integradas',
};

export default function ControleAcessoPage() {
  const tecnologias = [
    {
      icon: <ScanFace size={40} color="var(--c-blue-primary)" />,
      title: 'Reconhecimento Facial',
      desc: 'Identificação instantânea com prova de vida e detecção de máscara. Alta precisão mesmo em condições adversas de iluminação.'
    },
    {
      icon: <Fingerprint size={40} color="var(--c-blue-primary)" />,
      title: 'Biometria Digital',
      desc: 'Leitores ópticos e capacitivos de última geração. Integração nativa com sistemas de RH, ponto eletrônico e folha de pagamento.'
    },
    {
      icon: <QrCode size={40} color="var(--c-blue-primary)" />,
      title: 'QR Code & Crachá',
      desc: 'Acesso via crachás RFID, cartões proximidade ou QR Code dinâmico gerado via app. Ideal para gestão de visitantes e terceiros.'
    },
    {
      icon: <Key size={40} color="var(--c-blue-primary)" />,
      title: 'Catracas e Torniquetes',
      desc: 'Equipamentos de alto fluxo com design industrial premium. Suportam ambientes de grande volume com confiabilidade mecânica comprovada.'
    },
    {
      icon: <Users size={40} color="var(--c-blue-primary)" />,
      title: 'Gestão Centralizada',
      desc: 'Software web para gerenciar permissões, horários, grupos de acesso e relatórios de toda a rede de filiais em tempo real.'
    },
    {
      icon: <BarChart3 size={40} color="var(--c-blue-primary)" />,
      title: 'Dashboards e Relatórios',
      desc: 'Visibilidade total do fluxo de pessoas por unidade, turno e área. Dados exportáveis para auditoria, compliance e prevenção de perdas.'
    }
  ];

  const aplicacoes = [
    {
      icon: <Building2 size={32} color="var(--c-blue-primary)" />,
      title: 'Redes Varejistas',
      desc: 'Controle de acesso ao depósito, sala de servidor e cofre separado do acesso de clientes na loja.'
    },
    {
      icon: <ShieldCheck size={32} color="var(--c-blue-primary)" />,
      title: 'Centros de Distribuição',
      desc: 'Gestão rigorosa de entrada de motoristas, fornecedores e prestadores com pré-agendamento digital.'
    },
    {
      icon: <Users size={32} color="var(--c-blue-primary)" />,
      title: 'Escritórios Corporativos',
      desc: 'Controle por andar, sala e nível de segurança. Registro de ponto integrado e controle de visitantes com foto e documento.'
    },
    {
      icon: <Lock size={32} color="var(--c-blue-primary)" />,
      title: 'Áreas de Alta Segurança',
      desc: 'Data centers, salas de controle e ambientes críticos com autenticação multifator (biometria + cartão + PIN).'
    }
  ];

  const diferenciais = [
    'Projeto técnico personalizado com planta baixa e mapeamento de pontos críticos',
    'Instalação por técnicos certificados com certificações de fabricante',
    'Integração com sistemas legados de RH, ERP e câmeras de CFTV',
    'Manutenção preventiva inclusa nos contratos de SLA',
    'Suporte técnico dedicado com NOC centralizado',
    'Escalabilidade para dezenas ou centenas de unidades com um único contrato'
  ];

  return (
    <>
      {/* Hero Header */}
      <section style={{
        position: 'relative',
        padding: '10rem 0 6rem 0',
        backgroundImage: 'url("/images/catracas_marisa_1777418461276.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center 60%',
        backgroundAttachment: 'fixed',
        minHeight: '68vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%', height: '100%',
          background: 'linear-gradient(to right, rgba(10, 25, 47, 0.96) 0%, rgba(10, 25, 47, 0.65) 100%)',
          zIndex: 0
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '850px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', borderRadius: '30px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', marginBottom: '1.5rem', color: 'var(--c-white)', fontSize: '0.875rem', fontWeight: 600 }}>
              <Lock size={16} color="var(--c-neon-blue)" /> Solução Enterprise para Múltiplas Unidades
            </div>
            <h1 style={{ fontSize: '3.75rem', marginBottom: '1.5rem', color: 'var(--c-white)', lineHeight: 1.15 }}>
              Controle de <span style={{ color: 'var(--c-neon-blue)' }}>Acesso Enterprise</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.85)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
              Gerencie com precisão quem entra, onde e quando — em uma filial ou em centenas delas. Biometria facial, catracas industriais e software centralizado para o controle completo do fluxo humano na sua operação.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/orcamento" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                Solicitar Projeto Técnico <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/5511973098174"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ padding: '1rem 2rem', fontSize: '1.125rem', borderColor: 'rgba(255,255,255,0.4)', color: 'var(--c-white)' }}
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Métricas */}
      <section style={{ backgroundColor: 'var(--c-white)', padding: '3.5rem 0', borderBottom: '1px solid var(--c-border-light)' }}>
        <div className="container">
          <div className="grid grid-cols-4" style={{ gap: '2rem' }}>
            {[
              { num: '100%', label: 'Auditoria de Acesso', sub: 'Cada entrada e saída registrada com timestamp e foto' },
              { num: 'Multi-site', label: 'Gestão Centralizada', sub: 'Um painel para controlar toda a rede de unidades' },
              { num: 'Integrado', label: 'Sistemas de RH e Ponto', sub: 'Redução de horas extras irregulares e fraudes de ponto' },
              { num: 'SLA', label: 'Manutenção Garantida', sub: 'Técnicos em campo para garantir disponibilidade contínua' }
            ].map((item, idx) => (
              <div key={idx} style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--c-blue-primary)', marginBottom: '0.4rem' }}>{item.num}</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--c-dark-blue)', marginBottom: '0.25rem' }}>{item.label}</div>
                <p style={{ color: 'var(--c-metallic)', fontSize: '0.85rem' }}>{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologias */}
      <section className="section-padding" style={{ backgroundColor: 'var(--c-bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4.5rem auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ width: '30px', height: '2px', background: 'var(--c-blue-primary)' }}></span>
              <span style={{ color: 'var(--c-blue-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.875rem' }}>Tecnologias Disponíveis</span>
            </div>
            <h2 style={{ fontSize: '2.75rem', marginBottom: '1.25rem', color: 'var(--c-dark-blue)' }}>
              Múltiplas Credenciais, <span className="text-primary">Uma Plataforma</span>
            </h2>
            <p style={{ color: 'var(--c-metallic)', fontSize: '1.125rem' }}>
              Combinamos as melhores tecnologias do mercado para criar arquiteturas de controle de acesso adaptadas a cada ambiente e nível de segurança exigido.
            </p>
          </div>

          <div className="grid grid-cols-3" style={{ gap: '2rem' }}>
            {tecnologias.map((tec, idx) => (
              <div key={idx} className="premium-card" style={{ textAlign: 'center' }}>
                <div style={{ width: '72px', height: '72px', borderRadius: '20px', background: 'rgba(0, 86, 210, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                  {tec.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--c-dark-blue)' }}>{tec.title}</h3>
                <p style={{ color: 'var(--c-metallic)', lineHeight: 1.6, fontSize: '0.95rem' }}>{tec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aplicações por Segmento */}
      <section className="section-padding" style={{ backgroundColor: 'var(--c-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.25rem', color: 'var(--c-dark-blue)' }}>
              Soluções para <span className="text-primary">Cada Ambiente</span>
            </h2>
            <p style={{ color: 'var(--c-metallic)', fontSize: '1.125rem' }}>
              Desde lojas de varejo até grandes centros de distribuição — dimensionamos a arquitetura certa para o porte e criticidade da sua operação.
            </p>
          </div>

          <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
            {aplicacoes.map((app, idx) => (
              <div key={idx} className="premium-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(0, 86, 210, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {app.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--c-dark-blue)' }}>{app.title}</h3>
                  <p style={{ color: 'var(--c-metallic)', lineHeight: 1.6, fontSize: '0.95rem' }}>{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais ARC + Imagem */}
      <section className="section-padding" style={{ backgroundColor: 'var(--c-dark-blue)' }}>
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ width: '30px', height: '2px', background: 'var(--c-neon-blue)' }}></span>
                <span style={{ color: 'var(--c-neon-blue)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.875rem' }}>Por que a ARC?</span>
              </div>
              <h2 style={{ fontSize: '2.75rem', marginBottom: '1.5rem', color: 'var(--c-white)', lineHeight: 1.2 }}>
                Controle total da sua operação, de ponta a ponta.
              </h2>
              <p style={{ color: 'var(--c-metallic-light)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                Não fornecemos apenas equipamentos — entregamos um projeto técnico completo, desde o levantamento de campo até a integração com os seus sistemas existentes.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                {diferenciais.map((d, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'var(--c-metallic-light)', fontSize: '0.95rem' }}>
                    <CheckCircle2 size={18} color="var(--c-neon-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <Link href="/orcamento" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
                Solicitar Consultoria Técnica <ArrowRight size={18} />
              </Link>
            </div>

            <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', border: '1px solid var(--c-blue-accent)' }}>
              <Image
                src="/images/catracas_acesso_1777417963618.png"
                alt="Sistema de controle de acesso com catracas instalado pela ARC"
                width={600}
                height={480}
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section style={{ backgroundColor: 'var(--c-bg-light)', padding: '6rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.25rem', color: 'var(--c-dark-blue)' }}>
            Pronto para profissionalizar seu controle de acesso?
          </h2>
          <p style={{ color: 'var(--c-metallic)', fontSize: '1.125rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            Nossos engenheiros realizam o levantamento técnico sem custo e apresentam uma proposta detalhada com ROI estimado para a sua operação.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/orcamento" className="btn btn-primary" style={{ padding: '1.125rem 2.5rem', fontSize: '1.125rem' }}>
              Solicitar Levantamento Técnico Gratuito
            </Link>
            <a
              href="https://wa.me/5511973098174"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
              style={{ padding: '1.125rem 2.5rem', fontSize: '1.125rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <PhoneCall size={18} /> (11) 97309-8174
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
