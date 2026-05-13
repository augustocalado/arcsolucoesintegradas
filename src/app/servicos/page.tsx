import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Video, Lock, Radio, Map, Wrench, ShieldAlert } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Soluções em Segurança | ARC TECH',
  description: 'Conheça nossas soluções enterprise: CFTV, Controle de Acesso, Antenas Antifurto e Manutenção para redes de varejo.',
};

export default function Servicos() {
  const servicos = [
    { 
      id: 'cftv-inteligente',
      title: 'CFTV Corporativo Inteligente', 
      desc: 'Sistemas de videomonitoramento de alta resolução com IA para análise de comportamento, contagem de fluxo, mapa de calor e prevenção de perdas. Câmeras IP, NVRs e VMS de classe mundial.', 
      icon: <Video size={48} />,
      image: '/images/monitor_cftv_1777417935507.png'
    },
    { 
      id: 'antenas-antifurto',
      title: 'Sistemas Antifurto (EAS)', 
      desc: 'Tecnologias AM, RF e RFID para proteção de mercadorias. Antenas discretas, etiquetas de alto padrão e integração com sistemas de gestão da loja para minimizar furtos internos e externos.', 
      icon: <Radio size={48} />,
      image: '/images/premium_antena_antifurto_arc_tech.png'
    },
    { 
      id: 'controle-de-acesso',
      title: 'Controle de Acesso Enterprise', 
      desc: 'Gestão completa de entradas e saídas através de biometria, reconhecimento facial, catracas e torniquetes. Softwares centralizados para múltiplos sites com controle de visitantes e terceiros.', 
      icon: <Lock size={48} />,
      image: '/images/catracas_premium_enterprise.png'
    },
    { 
      id: 'infraestrutura-de-redes',
      title: 'Cabeamento Estruturado e Redes', 
      desc: 'Projetos de infraestrutura lógica certificados seguindo normas TIA/EIA. Cabeamento Cat6, Cat6a e Fibra Óptica para garantir a base de dados dos seus sistemas críticos.', 
      icon: <ShieldAlert size={48} />,
      image: '/images/tecnico_clean_1777418478324.png'
    },
    { 
      id: 'manutencao-preventiva',
      title: 'Manutenção Preventiva e Corretiva', 
      desc: 'Contratos de SLA rigorosos garantindo uptime dos sistemas. Rotinas de inspeção, limpeza de equipamentos, atualização de firmware e substituição de peças com agilidade nacional.', 
      icon: <Wrench size={48} />,
      image: '/images/tecnico_arc_tech.png'
    },
    { 
      id: 'seguranca-para-redes-varejistas',
      title: 'Inteligência para Varejo', 
      desc: 'Unimos segurança e dados para gerar valor ao negócio. Relatórios de conversão, otimização de layout de loja baseado em fluxo de clientes e redução estratégica de rupturas.', 
      icon: <Map size={48} />,
      image: '/images/relatorio_varejo_1777417991714.png'
    },

  ];

  return (
    <>
      {/* Hero Header de Serviços com Imagem */}
      <section style={{ 
        position: 'relative',
        padding: '10rem 0 6rem 0', 
        backgroundImage: 'url("/images/hero_ecossistema_1777418825943.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        overflow: 'hidden'
      }}>
        {/* Overlay escuro para garantir leitura perfeita */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(10, 25, 47, 0.95) 0%, rgba(10, 25, 47, 0.8) 100%)', zIndex: 0 }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ marginBottom: '1.5rem', color: 'var(--c-white)' }}>Ecossistema Completo de <span style={{ color: 'var(--c-neon-blue)' }}>Segurança</span></h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.8)' }}>Tecnologias de alta performance integradas para proteger de ponta a ponta as operações da sua empresa.</p>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--c-white)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {servicos.map((servico, index) => (
              <div key={servico.id} className={`premium-card service-card-row ${index % 2 !== 0 ? 'alternate' : ''}`} style={{ alignItems: 'center', border: '1px solid var(--c-border-light)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                <div style={{ flex: 1, width: '100%' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(0, 86, 210, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--c-blue-primary)', flexShrink: 0 }}>
                      {servico.icon}
                    </div>
                    <h2 style={{ fontSize: '1.75rem', color: 'var(--c-dark-blue)' }}>{servico.title}</h2>
                  </div>
                  
                  <p style={{ color: 'var(--c-metallic)', fontSize: '1.125rem', marginBottom: '2rem', lineHeight: 1.8 }}>{servico.desc}</p>
                  
                  <Link href={`/servicos/${servico.id}`} className="btn btn-primary" style={{ padding: '0.875rem 2rem', fontSize: '1rem', width: '100%', justifyContent: 'center' }}>
                    Conhecer Detalhes <ArrowRight size={18} />
                  </Link>
                </div>
                
                <div style={{ flex: 1, position: 'relative', width: '100%', height: '300px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                  <Image 
                    src={servico.image} 
                    alt={servico.title} 
                    fill 
                    style={{ objectFit: 'cover' }} 
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 40%)' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
