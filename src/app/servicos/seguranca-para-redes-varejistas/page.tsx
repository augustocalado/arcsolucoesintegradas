import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Network,
  Map,
  Server,
  Wifi,
  CheckCircle2,
  BarChart3,
  ShieldCheck,
  Layers,
  Cable,
  PhoneCall,
  Building2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Inteligência para Varejo e Cabeamento Estruturado | ARC Soluções Integradas',
  description: 'Infraestrutura de rede, cabeamento estruturado e inteligência de dados para redes varejistas. Relatórios de conversão, mapa de calor e otimização de layout de loja.',
  keywords: 'cabeamento estruturado, infraestrutura de rede, inteligência varejo, relatorio conversao loja, mapa de calor, arc solucoes integradas',
};

export default function InteligenciaVarejoPage() {
  const solucoes = [
    {
      icon: <Cable size={40} color="var(--c-blue-primary)" />,
      title: 'Cabeamento Estruturado',
      desc: 'Projetos de rede Cat6, Cat6A e fibra óptica para ambientes corporativos e industriais, com certificação pós-instalação e documentação completa.'
    },
    {
      icon: <Server size={40} color="var(--c-blue-primary)" />,
      title: 'Infraestrutura de Racks',
      desc: 'Montagem e organização de racks, patch panels, switches PoE e nobreaks. Ambientes climatizados e com monitoramento remoto de temperatura.'
    },
    {
      icon: <Wifi size={40} color="var(--c-blue-primary)" />,
      title: 'Redes Wi-Fi Corporativas',
      desc: 'Cobertura Wi-Fi sem pontos cegos, com segmentação de redes (clientes, funcionários e IoT) e controle de acesso por autenticação.'
    },
    {
      icon: <Map size={40} color="var(--c-blue-primary)" />,
      title: 'Mapas de Calor e Fluxo',
      desc: 'Identificação das zonas quentes e frias da sua loja com base no deslocamento real dos clientes para otimizar o layout de produtos e PDV.'
    },
    {
      icon: <BarChart3 size={40} color="var(--c-blue-primary)" />,
      title: 'Relatórios de Conversão',
      desc: 'Cruzamento entre contagem de visitantes e número de vendas para medir a taxa de conversão por período, horário e dia da semana.'
    },
    {
      icon: <Layers size={40} color="var(--c-blue-primary)" />,
      title: 'Dashboards Operacionais',
      desc: 'Painéis em tempo real com KPIs de segurança, fluxo de pessoas e desempenho de equipamentos acessíveis via browser em qualquer dispositivo.'
    }
  ];

  const beneficiosVarejo = [
    'Redução de rupturas de gôndola com análise de fluxo e permanência por sessão',
    'Identificação das horas de pico para dimensionamento de equipe de atendimento',
    'Comparativo de desempenho entre filiais da rede',
    'Dados para negociação de ponto comercial e espaço de destaque com fornecedores',
    'Integração com sistemas de BI e dashboards da gestão central',
    'Relatórios automáticos por e-mail semanais ou mensais para a diretoria'
  ];

  return (
    <>
      {/* Hero */}
      <section style={{
        position: 'relative',
        padding: '10rem 0 6rem 0',
        backgroundImage: 'url("/images/relatorio_varejo_1777417991714.png")',
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
              <Network size={16} color="var(--c-neon-blue)" /> Dados e Infraestrutura para o Varejo Inteligente
            </div>
            <h1 style={{ fontSize: '3.75rem', marginBottom: '1.5rem', color: 'var(--c-white)', lineHeight: 1.15 }}>
              Inteligência para <span style={{ color: 'var(--c-neon-blue)' }}>Varejo</span> e Cabeamento
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.85)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
              Segurança que gera dados estratégicos. Transformamos a infraestrutura de rede e os sistemas de monitoramento da sua loja em uma fonte de inteligência operacional para aumentar as vendas e reduzir custos.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/orcamento" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                Solicitar Diagnóstico Técnico <ArrowRight size={18} />
              </Link>
              <a href="https://wa.me/5511973098174" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.125rem', borderColor: 'rgba(255,255,255,0.4)', color: 'var(--c-white)' }}>
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Soluções */}
      <section className="section-padding" style={{ backgroundColor: 'var(--c-bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4.5rem auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ width: '30px', height: '2px', background: 'var(--c-blue-primary)' }}></span>
              <span style={{ color: 'var(--c-blue-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.875rem' }}>O Que Entregamos</span>
            </div>
            <h2 style={{ fontSize: '2.75rem', marginBottom: '1.25rem', color: 'var(--c-dark-blue)' }}>
              Infraestrutura robusta + <span className="text-primary">dados que geram valor</span>
            </h2>
            <p style={{ color: 'var(--c-metallic)', fontSize: '1.125rem' }}>
              Da tomada ao dashboard executivo — estruturamos a base tecnológica da sua operação para que cada real investido em segurança também contribua para a performance do negócio.
            </p>
          </div>

          <div className="grid grid-cols-3" style={{ gap: '2rem' }}>
            {solucoes.map((sol, idx) => (
              <div key={idx} className="premium-card" style={{ textAlign: 'center' }}>
                <div style={{ width: '72px', height: '72px', borderRadius: '20px', background: 'rgba(0, 86, 210, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                  {sol.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--c-dark-blue)' }}>{sol.title}</h3>
                <p style={{ color: 'var(--c-metallic)', lineHeight: 1.6, fontSize: '0.9rem' }}>{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inteligência para varejo */}
      <section className="section-padding" style={{ backgroundColor: 'var(--c-dark-blue)' }}>
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ width: '30px', height: '2px', background: 'var(--c-neon-blue)' }}></span>
                <span style={{ color: 'var(--c-neon-blue)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.875rem' }}>Análise de Dados do Varejo</span>
              </div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--c-white)', lineHeight: 1.2 }}>
                Transforme dados de segurança em decisões de negócio.
              </h2>
              <p style={{ color: 'var(--c-metallic-light)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.8 }}>
                As câmeras de CFTV e os sensores de fluxo instalados nas suas lojas capturam informações valiosíssimas sobre o comportamento de compra dos seus clientes. A ARC integra essas fontes e entrega relatórios acionáveis para o time comercial e de operações.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {beneficiosVarejo.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'var(--c-metallic-light)', fontSize: '0.92rem' }}>
                    <CheckCircle2 size={18} color="var(--c-neon-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: '2.5rem' }}>
                <Link href="/orcamento" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                  Solicitar Demo de Dashboard <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', border: '1px solid var(--c-blue-accent)' }}>
              <Image
                src="/images/case_noc_monitoring_1777419631868.png"
                alt="Dashboard de inteligência operacional para varejo ARC Soluções"
                width={600}
                height={480}
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cabeamento Estruturado Destaque */}
      <section className="section-padding" style={{ backgroundColor: 'var(--c-white)' }}>
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', border: '1px solid var(--c-border-light)' }}>
              <Image
                src="/images/banner_instalacao_cameras.jpg"
                alt="Instalação de cabeamento estruturado pela equipe ARC"
                width={600}
                height={480}
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
            </div>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ width: '30px', height: '2px', background: 'var(--c-blue-primary)' }}></span>
                <span style={{ color: 'var(--c-blue-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.875rem' }}>Infraestrutura de Rede</span>
              </div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--c-dark-blue)', lineHeight: 1.2 }}>
                A base da segurança começa no cabeamento.
              </h2>
              <p style={{ color: 'var(--c-metallic)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.8 }}>
                Redes mal dimensionadas causam lentidão de vídeo, queda de câmeras e falhas nos sistemas de controle de acesso. Nossa equipe projeta e executa toda a infraestrutura de dados com certificação e garantia de desempenho.
              </p>
              {[
                'Projeto lógico e físico documentado em AutoCAD ou SketchUp',
                'Certificação do cabeamento com relatórios de medição Fluke Networks',
                'Organização de rack com etiquetagem e documentação completa',
                'Fibra óptica para longas distâncias entre blocos e andares',
                'Compatível com normas ANSI/TIA-568 e NBR 14565'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <ShieldCheck size={18} color="var(--c-blue-primary)" style={{ flexShrink: 0 }} />
                  <span style={{ color: 'var(--c-metallic)', fontSize: '0.95rem' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Segmentos */}
      <section className="section-padding" style={{ backgroundColor: 'var(--c-bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <h2 style={{ fontSize: '2.25rem', marginBottom: '1rem', color: 'var(--c-dark-blue)' }}>
              Atendemos empresas de todos os segmentos
            </h2>
          </div>
          <div className="grid grid-cols-4" style={{ gap: '1.5rem' }}>
            {[
              { icon: <Building2 size={28} color="var(--c-blue-primary)" />, label: 'Redes Varejistas' },
              { icon: <Server size={28} color="var(--c-blue-primary)" />, label: 'Centros de Distribuição' },
              { icon: <Wifi size={28} color="var(--c-blue-primary)" />, label: 'Shoppings e Galerias' },
              { icon: <Map size={28} color="var(--c-blue-primary)" />, label: 'Escritórios Corporativos' }
            ].map((seg, idx) => (
              <div key={idx} className="premium-card" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: 'rgba(0, 86, 210, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                  {seg.icon}
                </div>
                <p style={{ color: 'var(--c-dark-blue)', fontWeight: 600, fontSize: '0.95rem' }}>{seg.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section style={{ backgroundColor: 'var(--c-white)', padding: '6rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.25rem', color: 'var(--c-dark-blue)' }}>
            Quer que sua segurança gere inteligência para o negócio?
          </h2>
          <p style={{ color: 'var(--c-metallic)', fontSize: '1.125rem', marginBottom: '2.5rem' }}>
            Solicite uma consultoria e veja como integrar dados de fluxo, câmeras e infraestrutura de rede em uma plataforma unificada de gestão.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/orcamento" className="btn btn-primary" style={{ padding: '1.125rem 2.5rem', fontSize: '1.125rem' }}>
              Solicitar Consultoria Gratuita
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
