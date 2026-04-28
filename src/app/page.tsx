import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Cpu, Map, Clock, Video, Lock, Radio, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        padding: '8rem 0', 
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, var(--c-black) 0%, var(--c-dark-blue) 100%)',
        overflow: 'hidden'
      }}>
        {/* Background glow effects */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '600px', height: '600px', background: 'radial-gradient(circle, var(--c-neon-blue-glow) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(60px)', zIndex: 0 }}></div>
        <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(10,37,64,0.8) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(50px)', zIndex: 0 }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '800px' }} className="animate-fade-in">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.25rem 0.75rem', borderRadius: '20px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '1.5rem' }}>
              <ShieldCheck size={16} color="var(--c-neon-blue)" />
              <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--c-metallic-light)' }}>Padrão Enterprise em Segurança</span>
            </div>
            
            <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', letterSpacing: '-1px' }}>
              Especialistas em Segurança Eletrônica <span style={{ color: 'var(--c-neon-blue)' }}>Corporativa</span> para Redes Varejistas
            </h1>
            
            <p style={{ fontSize: '1.25rem', color: 'var(--c-metallic-light)', marginBottom: '2.5rem', maxWidth: '600px', lineHeight: '1.8' }}>
              Implantação, manutenção e suporte técnico com cobertura nacional e atendimento especializado para garantir a proteção do seu negócio.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/orcamento" className="btn btn-primary">
                Solicitar Orçamento
                <ArrowRight size={18} />
              </Link>
              <Link href="https://wa.me/5511999999999" className="btn btn-secondary">
                Falar no WhatsApp
              </Link>
            </div>
          </div>

          {/* Key Metrics */}
          <div style={{ marginTop: '5rem', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', borderTop: '1px solid var(--c-metallic-dark)', paddingTop: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--c-white)', marginBottom: '0.5rem' }}>+15<span style={{ color: 'var(--c-neon-blue)', fontSize: '1.5rem' }}>anos</span></h3>
              <p style={{ color: 'var(--c-metallic)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>De Mercado</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--c-white)', marginBottom: '0.5rem' }}>99.9<span style={{ color: 'var(--c-neon-blue)', fontSize: '1.5rem' }}>%</span></h3>
              <p style={{ color: 'var(--c-metallic)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>SLA Cumprido</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--c-white)', marginBottom: '0.5rem' }}>100<span style={{ color: 'var(--c-neon-blue)', fontSize: '1.5rem' }}>%</span></h3>
              <p style={{ color: 'var(--c-metallic)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Cobertura Nacional</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--c-white)', marginBottom: '0.5rem' }}>+500</h3>
              <p style={{ color: 'var(--c-metallic)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Clientes Atendidos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--c-black-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Soluções em <span className="text-neon">Segurança Tecnológica</span></h2>
            <p style={{ color: 'var(--c-metallic-light)' }}>Tecnologia de ponta e infraestrutura robusta para prevenir perdas e proteger ativos em todo o território nacional.</p>
          </div>

          <div className="grid grid-cols-3">
            {[
              { title: 'CFTV Corporativo', desc: 'Sistemas de videomonitoramento de alta resolução com inteligência artificial para análise de comportamento e prevenção de perdas.', icon: <Video size={32} /> },
              { title: 'Antenas Antifurto', desc: 'Soluções EAS modernas e discretas, com alta taxa de detecção e integração com sistemas de gestão de loja.', icon: <Radio size={32} /> },
              { title: 'Controle de Acesso', desc: 'Catracas, biometria, reconhecimento facial e gestão centralizada para controle de fluxo de funcionários e visitantes.', icon: <Lock size={32} /> },
              { title: 'Manutenção Preventiva', desc: 'Rotinas rigorosas de inspeção para garantir o funcionamento contínuo de todos os equipamentos de segurança.', icon: <Wrench size={32} /> },
              { title: 'Gestão de Varejo', desc: 'Integração de sistemas de segurança com tecnologias para otimização de layout e redução de rupturas.', icon: <Map size={32} /> },
              { title: 'Suporte 24/7', desc: 'NOC dedicado operando 24 horas por dia para monitoramento de health check de equipamentos e resposta rápida.', icon: <Clock size={32} /> }
            ].map((service, index) => (
              <div key={index} className="glass-panel" style={{ padding: '2rem', transition: 'all 0.3s ease', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: 'rgba(0,229,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--c-neon-blue)', marginBottom: '1.5rem' }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{service.title}</h3>
                <p style={{ color: 'var(--c-metallic-light)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{service.desc}</p>
                <Link href="/servicos" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--c-white)', fontSize: '0.875rem', fontWeight: 600 }}>
                  Saiba mais <ArrowRight size={16} color="var(--c-neon-blue)" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--c-black)', position: 'relative' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '4rem' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Por que a grandes redes confiam na <span className="text-neon">C5S Security?</span></h2>
            <p style={{ color: 'var(--c-metallic-light)', marginBottom: '2rem', fontSize: '1.125rem' }}>Nossa estrutura foi desenhada para atender a complexidade de grandes operações varejistas, garantindo padronização e eficiência.</p>
            
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                'Padronização de projetos em todas as filiais do país',
                'SLA de atendimento rigoroso e transparente',
                'Equipe técnica própria altamente qualificada',
                'Tecnologias homologadas com os melhores fabricantes',
                'Dashboard exclusivo para gestão de chamados'
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <CheckCircle2 size={24} color="var(--c-neon-blue)" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '1rem', color: 'var(--c-white)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ flex: 1, position: 'relative' }}>
             {/* Using a placeholder styled to look like an interface or tech setup */}
             <div style={{ width: '100%', aspectRatio: '4/3', background: 'var(--c-black-lighter)', borderRadius: '12px', border: '1px solid var(--c-metallic-dark)', overflow: 'hidden', position: 'relative' }}>
               <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(0,229,255,0.1) 0%, rgba(10,37,64,0.5) 100%)' }}></div>
               <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                 <Cpu size={64} color="var(--c-neon-blue)" style={{ opacity: 0.8, marginBottom: '1rem' }} />
                 <p style={{ color: 'var(--c-metallic-light)', fontFamily: 'var(--font-heading)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.875rem' }}>Tecnologia Enterprise</p>
               </div>
             </div>
             {/* Glow behind image */}
             <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', background: 'var(--c-neon-blue)', filter: 'blur(100px)', opacity: 0.1, zIndex: -1 }}></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ background: 'linear-gradient(to right, var(--c-blue-accent), var(--c-black))', borderTop: '1px solid var(--c-metallic-dark)', borderBottom: '1px solid var(--c-metallic-dark)' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Pronto para elevar o nível da sua <span className="text-neon">segurança?</span></h2>
          <p style={{ color: 'var(--c-metallic-light)', fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            Fale com nossos especialistas e descubra como podemos criar um projeto personalizado para a sua rede varejista.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
            <Link href="/orcamento" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
              Agendar Consultoria Gratuita
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
