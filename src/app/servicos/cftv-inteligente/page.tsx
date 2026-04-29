import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Video, ScanFace, Activity, ShieldAlert, Cpu } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CFTV Inteligente com IA Corporativa | C5S Security',
  description: 'Soluções avançadas de videomonitoramento com Inteligência Artificial, reconhecimento facial e análise comportamental para grandes corporações e varejo.',
  keywords: 'cftv inteligente, câmeras com ia, reconhecimento facial corporativo, videomonitoramento inteligente, c5s security',
};

export default function CFTVInteligentePage() {
  return (
    <>
      {/* Hero Header */}
      <section style={{ 
        position: 'relative',
        padding: '10rem 0 6rem 0', 
        backgroundImage: 'url("/images/hero_cftv_inteligente_1777420728077.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(10, 25, 47, 0.95) 0%, rgba(10, 25, 47, 0.6) 100%)', zIndex: 0 }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '800px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', borderRadius: '30px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', marginBottom: '1.5rem', color: 'var(--c-white)', fontSize: '0.875rem', fontWeight: 600 }}>
              <Video size={16} color="var(--c-neon-blue)" /> Solução Enterprise
            </div>
            <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem', color: 'var(--c-white)', lineHeight: 1.1 }}>
              CFTV <span style={{ color: 'var(--c-neon-blue)' }}>Inteligente</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '3rem', lineHeight: 1.8 }}>
              Mais do que câmeras, entregamos inteligência analítica. Monitore, previna perdas e obtenha dados precisos do fluxo operacional da sua rede em tempo real.
            </p>
            <Link href="/orcamento" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
              Falar com um Especialista <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding" style={{ backgroundColor: 'var(--c-bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem', maxWidth: '800px', margin: '0 auto 5rem auto' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.25rem', color: 'var(--c-dark-blue)' }}>O futuro da <span className="text-primary">segurança eletrônica</span></h2>
            <p style={{ color: 'var(--c-metallic)', fontSize: '1.125rem' }}>Nossos sistemas de CFTV contam com IA embarcada, permitindo não apenas a gravação, mas a análise preditiva e identificação de ocorrências antes que elas se tornem um problema crítico.</p>
          </div>

          <div className="grid grid-cols-2" style={{ gap: '3rem' }}>
            <div className="premium-card">
              <ScanFace size={40} color="var(--c-blue-primary)" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--c-dark-blue)' }}>Reconhecimento Facial e LPR</h3>
              <p style={{ color: 'var(--c-metallic)', lineHeight: 1.6 }}>Identifique suspeitos rapidamente, libere acessos por biometria facial e tenha controle total de entrada e saída de veículos (Leitura de Placas).</p>
            </div>
            
            <div className="premium-card">
              <Activity size={40} color="var(--c-blue-primary)" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--c-dark-blue)' }}>Análise Comportamental</h3>
              <p style={{ color: 'var(--c-metallic)', lineHeight: 1.6 }}>A IA detecta atitudes suspeitas, aglomerações indevidas, objetos abandonados ou pessoas em áreas restritas, disparando alertas imediatos ao NOC.</p>
            </div>
            
            <div className="premium-card">
              <ShieldAlert size={40} color="var(--c-blue-primary)" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--c-dark-blue)' }}>Cruzamento de Linha / Cerca Virtual</h3>
              <p style={{ color: 'var(--c-metallic)', lineHeight: 1.6 }}>Defina limites virtuais dentro do ambiente. Se um indivíduo ultrapassar essa linha em horários não permitidos, alarmes silenciosos são ativados.</p>
            </div>
            
            <div className="premium-card">
              <Cpu size={40} color="var(--c-blue-primary)" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--c-dark-blue)' }}>Mapas de Calor e Contagem</h3>
              <p style={{ color: 'var(--c-metallic)', lineHeight: 1.6 }}>Inteligência para o varejo: entenda as zonas mais acessadas da sua loja e tenha a contagem exata do fluxo de clientes para otimizar suas vendas.</p>
            </div>
          </div>

          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <Link href="https://wa.me/5511998937891" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ display: 'inline-flex', padding: '1.25rem 3rem', fontSize: '1.25rem' }}>
              Falar com Especialista agora no WhatsApp
            </Link>
          </div>
        </div>
      </section>

      {/* Infrastructure Specs */}
      <section className="section-padding" style={{ backgroundColor: 'var(--c-white)', borderTop: '1px solid var(--c-border-light)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '5rem' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--c-dark-blue)' }}>Integração centralizada para <span className="text-primary">Múltiplos Sites</span></h2>
            <p style={{ color: 'var(--c-metallic)', fontSize: '1.125rem', marginBottom: '2rem', lineHeight: 1.8 }}>
              Operar centenas de filiais requer uma arquitetura de dados robusta. Nossos engenheiros desenham a topologia de rede perfeita para garantir que seu VMS (Video Management System) centralize as imagens de todas as suas lojas sem gargalos.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ color: 'var(--c-dark-blue)', fontWeight: 600 }}>• Servidores locais e armazenamento em nuvem híbrida</li>
              <li style={{ color: 'var(--c-dark-blue)', fontWeight: 600 }}>• Câmeras 4K/8K, Dome, Bullet, Speed Dome e Panorâmicas</li>
              <li style={{ color: 'var(--c-dark-blue)', fontWeight: 600 }}>• Projetos em Fibra Óptica e Redes Gigabit</li>
              <li style={{ color: 'var(--c-dark-blue)', fontWeight: 600 }}>• Manutenção SLA de nível nacional 24x7</li>
            </ul>
          </div>
          <div style={{ flex: 1, backgroundColor: 'var(--c-dark-blue)', borderRadius: '24px', padding: '4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at top right, rgba(0, 229, 255, 0.2) 0%, transparent 70%)', zIndex: 0 }}></div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3 style={{ color: 'var(--c-white)', fontSize: '2rem', marginBottom: '1rem' }}>SLA Rigoroso</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.125rem', marginBottom: '2rem' }}>Equipamento offline é inaceitável em operações críticas. Garantimos o menor tempo de resposta (RMA) do mercado.</p>
              <Link href="/orcamento" className="btn btn-primary">Agendar Reunião Técnica</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
