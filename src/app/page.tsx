import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Video, Radio, Lock, Wrench, Map, Clock, Cpu, CheckCircle2 } from 'lucide-react';
import HeroCarousel from '@/components/HeroCarousel';

export default function Home() {
  return (
    <>
      {/* Hero Section Carousel */}
      <HeroCarousel />


      {/* Services Section - Clean and Professional */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem', maxWidth: '800px', margin: '0 auto 5rem auto' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>Soluções de <span className="text-primary">Alta Performance</span></h2>
            <p style={{ color: 'var(--c-metallic)', fontSize: '1.125rem' }}>Infraestrutura e sistemas inteligentes projetados para operações críticas. Reduza vulnerabilidades e otimize a gestão do seu patrimônio.</p>
          </div>

          <div className="grid grid-cols-3">
            {[
              { title: 'CFTV Inteligente', desc: 'Sistemas de videomonitoramento de alta resolução com IA para análise de comportamento e identificação facial.', icon: <Video size={32} />, link: '/servicos/cftv-inteligente' },
              { title: 'Antenas Antifurto', desc: 'Soluções EAS discretas e modernas, com alta taxa de detecção para redução drástica de perdas em loja.', icon: <Radio size={32} />, link: '/servicos/antenas-antifurto' },
              { title: 'Controle de Acesso', desc: 'Gestão de fluxo corporativo com catracas, biometria e softwares centralizados para múltiplas filiais.', icon: <Lock size={32} />, link: '/servicos/controle-de-acesso' },
              { title: 'Manutenção Preventiva', desc: 'Rotinas rigorosas de inspeção para garantir 100% de disponibilidade dos seus equipamentos de segurança.', icon: <Wrench size={32} />, link: '/servicos/manutencao-preventiva' },
              { title: 'Inteligência de Varejo', desc: 'Integração de dados de fluxo e mapas de calor para otimização de layout de loja e inteligência de negócios.', icon: <Map size={32} />, link: '/servicos/seguranca-para-redes-varejistas' }
            ].map((service, index) => (
              <div key={index} className="premium-card">
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(0, 86, 210, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--c-blue-primary)', marginBottom: '1.5rem' }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--c-dark-blue)' }}>{service.title}</h3>
                <p style={{ color: 'var(--c-metallic)', fontSize: '1rem', marginBottom: '2rem', lineHeight: '1.6' }}>{service.desc}</p>
                <Link href={service.link} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--c-blue-primary)', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Conheça a solução <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--c-bg-light)', borderTop: '1px solid var(--c-border-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ width: '30px', height: '2px', background: 'var(--c-blue-primary)' }}></span>
              <span style={{ color: 'var(--c-blue-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.875rem' }}>Casos de Sucesso</span>
              <span style={{ width: '30px', height: '2px', background: 'var(--c-blue-primary)' }}></span>
            </div>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>Tecnologia aplicada na prática.</h2>
            <p style={{ color: 'var(--c-metallic)', fontSize: '1.125rem' }}>Veja como implementamos soluções de segurança nas maiores redes do país, desde o caixa até as portas da loja.</p>
          </div>

          <div className="grid grid-cols-3">
            <div className="premium-card" style={{ padding: 0, overflow: 'hidden' }}>
              <img src="/images/case_marisa_rf_generated_1777419740237.png" alt="Implementação Antenas Marisa" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--c-dark-blue)' }}>Antenas RF e Prevenção</h3>
                <p style={{ color: 'var(--c-metallic)', fontSize: '0.9rem' }}>Implementação de antenas antifurto elegantes na entrada, sem impactar a arquitetura visual da loja.</p>
              </div>
            </div>

            <div className="premium-card" style={{ padding: 0, overflow: 'hidden' }}>
              <img src="/images/case_desativador_rf_1777419614796.png" alt="Desativador RF no Caixa" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--c-dark-blue)' }}>Desativação no PDV</h3>
                <p style={{ color: 'var(--c-metallic)', fontSize: '0.9rem' }}>Desativador de etiquetas embutido nos caixas para uma experiência de checkout rápida e invisível.</p>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Differentials Section - High Trust Layout */}
      <section className="section-padding" style={{ backgroundColor: 'var(--c-white)', borderTop: '1px solid var(--c-border-light)' }}>
        <div className="container flex-responsive" style={{ alignItems: 'center', gap: '4rem' }}>
          <div style={{ flex: 1, position: 'relative', width: '100%' }}>
             {/* Corporate Abstract Element representing technology */}
             <div style={{ width: '100%', aspectRatio: '16/9', background: 'var(--c-bg-light)', borderRadius: '24px', border: '1px solid var(--c-border-light)', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
               <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(0,86,210,0.05) 0%, rgba(0,229,255,0.05) 100%)' }}></div>
               <div style={{ textAlign: 'center', zIndex: 1 }}>
                 <Cpu size={80} color="var(--c-blue-primary)" style={{ marginBottom: '1.5rem', opacity: 0.9 }} />
                 <p style={{ color: 'var(--c-dark-blue)', fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '1rem' }}>Operação Centralizada</p>
               </div>
             </div>
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ width: '30px', height: '2px', background: 'var(--c-blue-primary)' }}></span>
              <span style={{ color: 'var(--c-blue-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.875rem' }}>Por que a ARC TECH?</span>
            </div>
            <h2 style={{ marginBottom: '1.5rem', lineHeight: '1.1' }}>Sua expansão suportada por uma infraestrutura <span className="text-primary">sólida.</span></h2>
            <p style={{ color: 'var(--c-metallic)', marginBottom: '2.5rem', fontSize: '1.125rem', lineHeight: '1.8' }}>
              A complexidade de gerenciar centenas de lojas exige um parceiro capaz de entregar padronização nacional e cumprimento rigoroso de SLAs.
            </p>
            
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                'Projetos 100% padronizados em todas as unidades',
                'Contratos corporativos de SLA com atendimento garantido',
                'Engenheiros especialistas nas principais marcas mundiais',
                'Estoque estratégico para rápida reposição (RMA)',
                'Plataforma própria de chamados e relatórios gerenciais'
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--c-blue-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <CheckCircle2 size={14} color="white" />
                  </div>
                  <span style={{ fontSize: '1.05rem', color: 'var(--c-dark-blue)', fontWeight: 500 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 0', background: 'var(--c-bg-light)', borderTop: '1px solid var(--c-border-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--c-dark-blue)' }}>Empresas que confiam na <span className="text-primary">Arc Soluções</span></h2>
            <p style={{ color: 'var(--c-metallic)' }}>Tecnologia e suporte especializado para as maiores redes do país.</p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
            gap: '3rem', 
            alignItems: 'center', 
            justifyContent: 'center'
          }}>
            {[
              { name: 'Marisa', logo: '/images/logo_marisa.png' },
              { name: 'Caedu', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD8XwofHDEtViXRSYMUv2YqTWXEEdJZh57vg&s' },
              { name: 'Bradesco', logo: '/images/logo_bradesco.png' },
              { name: 'Bifarma', logo: '' },
              { name: 'Localiza', logo: '/images/logo_localiza.png' },
              { name: 'Tenda Atacadista', logo: '/images/logo_tenda.png' },
            ].map((client, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70px', padding: '0 10px' }}>
                {client.logo ? (
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    style={{ 
                      maxHeight: '100%', 
                      maxWidth: '100%', 
                      objectFit: 'contain'
                    }} 
                  />
                ) : (
                  <span style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--c-dark-blue)', letterSpacing: '-1px', opacity: 0.5 }}>{client.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Sophisticated */}
      <section className="section-padding" style={{ background: 'var(--c-bg-light)', borderTop: '1px solid var(--c-border-light)' }}>
        <div className="container">
          <div style={{ background: 'linear-gradient(135deg, var(--c-dark-blue) 0%, var(--c-blue-accent) 100%)', borderRadius: '24px', padding: '5rem 3rem', textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at right, rgba(0, 86, 210, 0.5) 0%, transparent 60%)', zIndex: 0 }}></div>
            
            <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--c-white)' }}>Otimize sua segurança e reduza custos operacionais.</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem', marginBottom: '3rem' }}>
                Agende uma reunião técnica com nossos engenheiros e descubra como grandes varejistas estão escalando suas operações com a ARC TECH.
              </p>
              <div className="flex-responsive" style={{ justifyContent: 'center', gap: '1.5rem' }}>
                <Link href="/orcamento" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
                  Solicitar Proposta Comercial
                </Link>
                <Link href="/contato" className="btn btn-secondary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem', color: 'var(--c-white)', borderColor: 'rgba(255,255,255,0.3)' }}>
                  Falar com Consultor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
