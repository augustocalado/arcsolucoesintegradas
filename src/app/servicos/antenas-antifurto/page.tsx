import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Radio,
  ShieldCheck,
  CheckCircle2,
  TrendingDown,
  Scan,
  Tag,
  Zap,
  BarChart3,
  Store,
  PhoneCall,
  AlertTriangle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Antenas Antifurto EAS para Varejo | ARC Soluções Integradas',
  description: 'Sistemas EAS de antenas antifurto AM e RF para lojas e redes varejistas. Reduza furtos em até 80% com tecnologia acusto-magnética e radiofrequência de alta precisão.',
  keywords: 'antena antifurto, sistema eas, alarme antifurto loja, am rf varejo, prevenção de perdas, etiqueta antifurto, arc solucoes integradas',
};

export default function AntenasAntifurtoPage() {
  const tecnologias = [
    {
      badge: 'AM — Acusto-Magnético',
      title: 'Para Farmácias e Perfumarias',
      desc: 'A tecnologia AM opera em 58 kHz, ideal para produtos em embalagens metalizadas, cosméticos e medicamentos. Zero interferência com cartões e mídias magnéticas.',
      itens: [
        'Maior taxa de detecção do mercado — mais de 95%',
        'Compatível com embalagens de alumínio e metalizadas',
        'Etiquetas rígidas e soft labels de alta adesão',
        'Desativadores de balcão e de checkout rápido'
      ],
      cor: 'rgba(0, 86, 210, 0.06)'
    },
    {
      badge: 'RF — Radiofrequência',
      title: 'Para Vestuário e Calçados',
      desc: 'Tecnologia RF em 8,2 MHz, padrão global no varejo de moda. Alta velocidade de detecção, design discreto e integração com sistemas de gestão de estoque (RFID).',
      itens: [
        'Antenas em acrílico com design elegante e iluminação LED',
        'Detacheres mecânicos, elétricos e eletromagnéticos',
        'Conversão para RFID para controle de inventário',
        'Alta imunidade a alarmes falsos por interferência externa'
      ],
      cor: 'rgba(0, 160, 120, 0.06)'
    }
  ];

  const beneficios = [
    { icon: <TrendingDown size={32} color="var(--c-blue-primary)" />, title: 'Redução de Furtos', desc: 'Queda comprovada de até 80% nos índices de furto externo após implantação do sistema EAS.' },
    { icon: <Scan size={32} color="var(--c-blue-primary)" />, title: 'Precisão Cirúrgica', desc: 'Taxa de detecção acima de 95% com praticamente zero alarmes falsos que perturbam a experiência do cliente.' },
    { icon: <BarChart3 size={32} color="var(--c-blue-primary)" />, title: 'Contagem de Fluxo', desc: 'Módulo opcional integrado para contar o número exato de clientes que entram na loja e calcular a taxa de conversão.' },
    { icon: <Store size={32} color="var(--c-blue-primary)" />, title: 'Design Premium', desc: 'Antenas com acabamento em acrílico translúcido e iluminação LED RGB personalizável, sem comprometer a estética da loja.' },
    { icon: <Zap size={32} color="var(--c-blue-primary)" />, title: 'Instalação Rápida', desc: 'Equipes treinadas para instalação noturna ou em janelas de loja fechada, sem impacto na operação do dia seguinte.' },
    { icon: <Tag size={32} color="var(--c-blue-primary)" />, title: 'Linha Completa de Etiquetas', desc: 'Fornecimento de etiquetas rígidas, soft labels, spider wraps, ganchos de segurança e embalagens especiais.' }
  ];

  return (
    <>
      {/* Hero Header */}
      <section style={{
        position: 'relative',
        padding: '10rem 0 6rem 0',
        backgroundImage: 'url("/images/banner_farmacia_antenas.jpg")',
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
              <Radio size={16} color="var(--c-neon-blue)" /> Tecnologias AM e RF para Prevenção de Perdas
            </div>
            <h1 style={{ fontSize: '3.75rem', marginBottom: '1.5rem', color: 'var(--c-white)', lineHeight: 1.15 }}>
              Antenas <span style={{ color: 'var(--c-neon-blue)' }}>Antifurto EAS</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.85)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
              Proteja o patrimônio da sua loja sem comprometer a experiência do cliente. Sistemas de detecção eletrônica de artigos (EAS) com tecnologias AM e RF de alta precisão, instalados por especialistas com cobertura em todo o Brasil.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/orcamento" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                Solicitar Projeto Antifurto <ArrowRight size={18} />
              </Link>
              <a href="https://wa.me/5511973098174" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.125rem', borderColor: 'rgba(255,255,255,0.4)', color: 'var(--c-white)' }}>
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Alerta de impacto */}
      <section style={{ backgroundColor: 'var(--c-dark-blue)', padding: '2.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', textAlign: 'center' }}>
            <AlertTriangle size={32} color="#FFB800" />
            <p style={{ color: 'var(--c-white)', fontSize: '1.1rem', margin: 0 }}>
              O varejo brasileiro perde aproximadamente <strong style={{ color: '#FFB800' }}>R$ 23 bilhões por ano</strong> com furtos internos e externos. Sistemas EAS reduzem esse índice em até <strong style={{ color: '#FFB800' }}>80%</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Tecnologias AM e RF */}
      <section className="section-padding" style={{ backgroundColor: 'var(--c-bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4.5rem auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ width: '30px', height: '2px', background: 'var(--c-blue-primary)' }}></span>
              <span style={{ color: 'var(--c-blue-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.875rem' }}>Escolha a Tecnologia Certa</span>
            </div>
            <h2 style={{ fontSize: '2.75rem', marginBottom: '1.25rem', color: 'var(--c-dark-blue)' }}>
              AM ou RF: <span className="text-primary">A solução ideal para cada segmento</span>
            </h2>
            <p style={{ color: 'var(--c-metallic)', fontSize: '1.125rem' }}>
              Nossa equipe técnica realiza o diagnóstico do mix de produtos da sua loja e recomenda a tecnologia mais eficiente para o seu modelo de negócio.
            </p>
          </div>

          <div className="grid grid-cols-2" style={{ gap: '2.5rem' }}>
            {tecnologias.map((tec, idx) => (
              <div key={idx} className="premium-card" style={{ background: tec.cor }}>
                <div style={{ display: 'inline-block', padding: '0.3rem 0.9rem', borderRadius: '20px', background: 'rgba(0, 86, 210, 0.1)', color: 'var(--c-blue-primary)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                  {tec.badge}
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--c-dark-blue)' }}>{tec.title}</h3>
                <p style={{ color: 'var(--c-metallic)', marginBottom: '1.75rem', lineHeight: 1.7, fontSize: '0.95rem' }}>{tec.desc}</p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {tec.itens.map((item, iidx) => (
                    <li key={iidx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'var(--c-dark-blue)', fontSize: '0.9rem' }}>
                      <CheckCircle2 size={16} color="var(--c-blue-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="section-padding" style={{ backgroundColor: 'var(--c-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.25rem', color: 'var(--c-dark-blue)' }}>
              Muito além da <span className="text-primary">detecção</span>
            </h2>
            <p style={{ color: 'var(--c-metallic)', fontSize: '1.125rem' }}>
              Os sistemas ARC são projetados para ser um ativo estratégico da sua loja — não apenas um alarme.
            </p>
          </div>
          <div className="grid grid-cols-3" style={{ gap: '2rem' }}>
            {beneficios.map((b, idx) => (
              <div key={idx} className="premium-card" style={{ textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '18px', background: 'rgba(0, 86, 210, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                  {b.icon}
                </div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.6rem', color: 'var(--c-dark-blue)' }}>{b.title}</h3>
                <p style={{ color: 'var(--c-metallic)', fontSize: '0.9rem', lineHeight: 1.6 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Imagem + CTA */}
      <section className="section-padding" style={{ backgroundColor: 'var(--c-dark-blue)' }}>
        <div className="container">
          <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', border: '1px solid var(--c-blue-accent)' }}>
              <Image
                src="/images/antena_c5s_security_1777418676760.png"
                alt="Antena antifurto EAS ARC Soluções Integradas instalada em loja"
                width={600}
                height={480}
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
            </div>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ width: '30px', height: '2px', background: 'var(--c-neon-blue)' }}></span>
                <span style={{ color: 'var(--c-neon-blue)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.875rem' }}>Processo ARC</span>
              </div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--c-white)', lineHeight: 1.2 }}>
                Da consultoria até a manutenção — sem terceirizar nada.
              </h2>
              <p style={{ color: 'var(--c-metallic-light)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.8 }}>
                Nossa metodologia cobre cada etapa: diagnóstico do mix de produtos, escolha da tecnologia, instalação por equipe própria, treinamento da equipe da loja e manutenção preventiva contínua.
              </p>
              {[
                '1. Diagnóstico e consultoria técnica sem custo',
                '2. Projeto com lay-out de posicionamento das antenas',
                '3. Instalação com equipe certificada e EPIs',
                '4. Treinamento da equipe e configuração do sistema',
                '5. Contrato de manutenção preventiva e fornecimento de etiquetas'
              ].map((step, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <ShieldCheck size={18} color="var(--c-neon-blue)" style={{ flexShrink: 0 }} />
                  <span style={{ color: 'var(--c-metallic-light)', fontSize: '0.95rem' }}>{step}</span>
                </div>
              ))}
              <div style={{ marginTop: '2rem' }}>
                <Link href="/orcamento" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
                  Solicitar Consultoria Gratuita <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section style={{ backgroundColor: 'var(--c-bg-light)', padding: '6rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.25rem', color: 'var(--c-dark-blue)' }}>
            Pronto para eliminar as perdas por furto na sua rede?
          </h2>
          <p style={{ color: 'var(--c-metallic)', fontSize: '1.125rem', marginBottom: '2.5rem' }}>
            Fale agora com nossos especialistas em prevenção de perdas e receba um projeto personalizado para a sua loja ou rede de filiais.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/orcamento" className="btn btn-primary" style={{ padding: '1.125rem 2.5rem', fontSize: '1.125rem' }}>
              Solicitar Projeto Antifurto
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
