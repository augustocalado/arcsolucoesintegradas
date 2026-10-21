import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Wrench, 
  Clock, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  Video, 
  Radio, 
  Lock, 
  Network,
  PhoneCall
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Manutenção Preventiva e Corretiva | ARC Soluções Integradas',
  description: 'Contratos de manutenção preventiva e corretiva com SLA garantido para CFTV, antenas antifurto e controle de acesso em todo o Brasil.',
  keywords: 'manutenção preventiva, manutenção corretiva cftv, contrato de manutenção segurança eletrônica, sla segurança varejo, arc solucoes integradas',
};

export default function ManutencaoPage() {
  const modalidades = [
    {
      title: 'Manutenção Preventiva',
      badge: 'Proativa & Recorrente',
      desc: 'Visitas técnicas programadas para inspeção profunda, evitando paradas inesperadas e prolongando a vida útil de todo o parque tecnológico.',
      itens: [
        'Limpeza técnica de lentes, cúpulas e sensores ópticos',
        'Verificação de saúde de HDs, storages e gravações contínuas',
        'Calibração e teste de sintonia de antenas antifurto (AM/RF)',
        'Teste de baterias, nobreaks e fontes de alimentação',
        'Atualização de firmwares e patches de segurança contra vulnerabilidades'
      ]
    },
    {
      title: 'Manutenção Corretiva Express',
      badge: 'Atendimento Emergencial',
      desc: 'Resposta rápida para restabelecer a segurança da sua unidade com atendimento de técnicos certificados e peças sobressalentes.',
      itens: [
        'SLA ágil com técnicos prontos para deslocamento',
        'Diagnóstico preciso de falhas em hardware e cabeamento',
        'Troca expressa com equipamentos de backup imediato',
        'Restauração de comunicação de rede e enlaces de vídeo',
        'Laudo técnico detalhado da causa raiz da ocorrência'
      ]
    },
    {
      title: 'Gestão de SLA & Contratos',
      badge: 'Padrão Corporativo',
      desc: 'Um único contrato centralizado para toda a sua rede de filiais no Brasil, com indicadores de desempenho e relatórios executivos na nuvem.',
      itens: [
        'NOC centralizado para abertura e acompanhamento de chamados',
        'Métricas transparentes de tempo de atendimento (MTTR/MTBF)',
        'Consultoria técnica contínua para melhorias do parque',
        'Estoque de peças críticas reservado para sua operação',
        'Redução drástica do custo operacional e administrativo'
      ]
    }
  ];

  const sistemas = [
    {
      icon: <Video size={36} color="var(--c-blue-primary)" />,
      title: 'CFTV e Videomonitoramento',
      desc: 'Câmeras IP, gravadores NVR, servidores de VMS e inteligência analítica sempre calibrados e gravando em máxima resolução.'
    },
    {
      icon: <Radio size={36} color="var(--c-blue-primary)" />,
      title: 'Antenas Antifurto (EAS)',
      desc: 'Sistemas Acusto-Magnéticos (AM) e Radiofrequência (RF) alinhados para detecção cirúrgica sem disparos falsos.'
    },
    {
      icon: <Lock size={36} color="var(--c-blue-primary)" />,
      title: 'Controle de Acesso',
      desc: 'Catracas eletrônicas, torniquetes, leitores faciais e eletroímãs revisados com precisão mecânica e eletrônica.'
    },
    {
      icon: <Network size={36} color="var(--c-blue-primary)" />,
      title: 'Cabeamento e Infraestrutura',
      desc: 'Switches PoE, racks, patch panels e organização de conexões para garantir transmissão de dados ininterrupta.'
    }
  ];

  return (
    <>
      {/* Hero Header */}
      <section style={{ 
        position: 'relative',
        padding: '10rem 0 6rem 0', 
        backgroundImage: 'url("/images/tecnico_manutencao_1777417976205.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '65vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          background: 'linear-gradient(to right, rgba(10, 25, 47, 0.95) 0%, rgba(10, 25, 47, 0.7) 100%)', 
          zIndex: 0 
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '850px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', borderRadius: '30px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', marginBottom: '1.5rem', color: 'var(--c-white)', fontSize: '0.875rem', fontWeight: 600 }}>
              <Wrench size={16} color="var(--c-neon-blue)" /> SLA Corporativo com Cobertura Nacional
            </div>
            <h1 style={{ fontSize: '3.75rem', marginBottom: '1.5rem', color: 'var(--c-white)', lineHeight: 1.15 }}>
              Manutenção <span style={{ color: 'var(--c-neon-blue)' }}>Preventiva e Corretiva</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.85)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
              Mantenha sua operação blindada contra falhas técnicas. Garantimos disponibilidade máxima (uptime) dos seus sistemas de CFTV, controle de acesso e antenas antifurto com atendimento técnico padronizado em todo o país.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/orcamento" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                Solicitar Contrato de Manutenção <ArrowRight size={18} />
              </Link>
              <a 
                href="https://wa.me/5511973098174" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-secondary" 
                style={{ padding: '1rem 2rem', fontSize: '1.125rem', borderColor: 'rgba(255,255,255,0.4)', color: 'var(--c-white)' }}
              >
                Atendimento Imediato no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Destaques / Métricas */}
      <section style={{ backgroundColor: 'var(--c-white)', padding: '3.5rem 0', borderBottom: '1px solid var(--c-border-light)' }}>
        <div className="container">
          <div className="grid grid-cols-4" style={{ gap: '2rem' }}>
            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <Clock size={40} color="var(--c-blue-primary)" style={{ margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontSize: '1.75rem', color: 'var(--c-dark-blue)', marginBottom: '0.25rem' }}>SLA Rigoroso</h3>
              <p style={{ color: 'var(--c-metallic)', fontSize: '0.95rem' }}>Atendimento com prazos contratuais garantidos para lojas e empresas.</p>
            </div>

            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <ShieldCheck size={40} color="var(--c-blue-primary)" style={{ margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontSize: '1.75rem', color: 'var(--c-dark-blue)', marginBottom: '0.25rem' }}>99.4% Uptime</h3>
              <p style={{ color: 'var(--c-metallic)', fontSize: '0.95rem' }}>Índice comprovado de disponibilidade dos equipamentos monitorados.</p>
            </div>

            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <FileText size={40} color="var(--c-blue-primary)" style={{ margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontSize: '1.75rem', color: 'var(--c-dark-blue)', marginBottom: '0.25rem' }}>Laudos Digitais</h3>
              <p style={{ color: 'var(--c-metallic)', fontSize: '0.95rem' }}>Relatórios fotográficos e checklist completo entregues a cada visita.</p>
            </div>

            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <CheckCircle2 size={40} color="var(--c-blue-primary)" style={{ margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontSize: '1.75rem', color: 'var(--c-dark-blue)', marginBottom: '0.25rem' }}>Técnicos Próprios</h3>
              <p style={{ color: 'var(--c-metallic)', fontSize: '0.95rem' }}>Equipes qualificadas com certificações técnicas e conformidade com NR-10 e NR-35.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modalidades de Manutenção */}
      <section className="section-padding" style={{ backgroundColor: 'var(--c-bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4.5rem', maxWidth: '800px', margin: '0 auto 4.5rem auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ width: '30px', height: '2px', background: 'var(--c-blue-primary)' }}></span>
              <span style={{ color: 'var(--c-blue-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.875rem' }}>Planos Sob Medida</span>
            </div>
            <h2 style={{ fontSize: '2.75rem', marginBottom: '1.25rem', color: 'var(--c-dark-blue)' }}>Modalidades de <span className="text-primary">Atendimento Técnico</span></h2>
            <p style={{ color: 'var(--c-metallic)', fontSize: '1.125rem' }}>
              Desenvolvemos planos flexíveis adaptados à escala e criticidade da sua infraestrutura, desde suporte pontual até contratos integrados full service.
            </p>
          </div>

          <div className="grid grid-cols-3" style={{ gap: '2rem' }}>
            {modalidades.map((item, idx) => (
              <div key={idx} className="premium-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'inline-block', padding: '0.3rem 0.8rem', borderRadius: '20px', background: 'rgba(0, 86, 210, 0.08)', color: 'var(--c-blue-primary)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                    {item.badge}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--c-dark-blue)' }}>{item.title}</h3>
                  <p style={{ color: 'var(--c-metallic)', marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem' }}>{item.desc}</p>
                  
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                    {item.itens.map((sub, sidx) => (
                      <li key={sidx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'var(--c-dark-blue)', fontSize: '0.875rem' }}>
                        <CheckCircle2 size={16} color="var(--c-blue-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/orcamento" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center', textAlign: 'center', borderColor: 'var(--c-blue-primary)', color: 'var(--c-blue-primary)' }}>
                  Cotar Este Modelo
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sistemas que mantemos */}
      <section className="section-padding" style={{ backgroundColor: 'var(--c-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.25rem', color: 'var(--c-dark-blue)' }}>Especialização em <span className="text-primary">Múltiplos Ambientes</span></h2>
            <p style={{ color: 'var(--c-metallic)', fontSize: '1.125rem' }}>
              Nossos técnicos possuem experiência com os principais fabricantes mundiais de segurança (Intelbras, Hikvision, Dahua, Sensormatic, Control iD e outros).
            </p>
          </div>

          <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
            {sistemas.map((sis, sidx) => (
              <div key={sidx} className="premium-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(0, 86, 210, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {sis.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--c-dark-blue)' }}>{sis.title}</h3>
                  <p style={{ color: 'var(--c-metallic)', lineHeight: 1.6, fontSize: '0.95rem' }}>{sis.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que a manutenção é essencial (Alerta / Prevenção de Perdas) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--c-dark-blue)', color: 'var(--c-white)' }}>
        <div className="container">
          <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0.85rem', borderRadius: '20px', background: 'rgba(255, 180, 0, 0.15)', border: '1px solid rgba(255, 180, 0, 0.3)', color: '#FFB800', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem' }}>
                <AlertTriangle size={16} /> Prevenção de Prejuízos Invisíveis
              </div>
              <h2 style={{ fontSize: '2.75rem', marginBottom: '1.5rem', color: 'var(--c-white)', lineHeight: 1.2 }}>
                O custo da falha é sempre maior que o da prevenção.
              </h2>
              <p style={{ color: 'var(--c-metallic-light)', fontSize: '1.125rem', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                Em uma ocorrência crítica ou auditoria de furto, descobrir que uma câmera estava desligada ou que o gravador corrompeu as imagens gera prejuízos incalculáveis e perda de evidências legais.
              </p>
              <p style={{ color: 'var(--c-metallic-light)', fontSize: '1.125rem', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                Com o plano de manutenção da <strong>ARC Soluções Integradas</strong>, sua empresa conta com rotinas de auditoria que asseguram que 100% dos seus dispositivos estão ativos e operando dentro dos parâmetros de fábrica.
              </p>
              <Link href="/orcamento" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
                Proteger Minha Operação Agora
              </Link>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid var(--c-blue-accent)' }}>
                <Image 
                  src="/images/tecnico_clean_1777418478324.png" 
                  alt="Técnico especialista em manutenção preventiva ARC" 
                  width={600} 
                  height={450} 
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section style={{ backgroundColor: 'var(--c-bg-light)', padding: '6rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.25rem', color: 'var(--c-dark-blue)' }}>
            Precisa de suporte ou contrato de manutenção?
          </h2>
          <p style={{ color: 'var(--c-metallic)', fontSize: '1.125rem', marginBottom: '2.5rem' }}>
            Fale com nossos engenheiros para desenhar um plano adequado ao porte e à quantidade de unidades da sua empresa.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/orcamento" className="btn btn-primary" style={{ padding: '1.125rem 2.5rem', fontSize: '1.125rem' }}>
              Solicitar Contrato de Manutenção
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
