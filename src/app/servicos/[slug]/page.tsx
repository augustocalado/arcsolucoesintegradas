import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { notFound } from 'next/navigation';

// SEO data for each targeted page
// SEO data for each targeted page
const seoPages: Record<string, { 
  title: string, 
  desc: string, 
  h1: string, 
  subtitle: string, 
  keywords: string, 
  schema: string, 
  heroImage?: string, 
  heroPosition?: string, 
  heroSize?: string,
  aboutTitle: string,
  aboutText: string,
  features: string[]
}> = {
  'instalacao-de-cftv-corporativo': {
    title: 'Instalação de CFTV Corporativo | C5S Security',
    desc: 'Projetos e instalação de CFTV para empresas e varejo. Câmeras IP, análise inteligente de vídeo e alta resolução. Empresa especializada com cobertura nacional.',
    h1: 'Instalação de CFTV Corporativo',
    subtitle: 'Tecnologia de ponta em videomonitoramento para proteger os ativos da sua empresa contra perdas e intrusões.',
    keywords: 'instalação de cftv corporativo, empresa de CFTV, CFTV para empresas, segurança eletrônica, monitoramento de vídeo',
    schema: 'Service',
    aboutTitle: 'Infraestrutura de Vídeo de Classe Mundial',
    aboutText: 'Nossa instalação de CFTV vai além de simples câmeras. Projetamos redes Gigabit dedicadas, armazenamento redundante e integração com softwares VMS líderes de mercado para garantir que cada pixel seja capturado com clareza.',
    features: [
      'Câmeras 4K com visão noturna avançada',
      'Cabeamento estruturado em fibra óptica para grandes distâncias',
      'Configuração de servidores de gravação redundantes',
      'Acesso remoto seguro via VPN corporativa',
      'Treinamento operacional para sua equipe de segurança'
    ]
  },
  'manutencao-de-cftv': {
    title: 'Manutenção de CFTV Corporativo | C5S Security',
    desc: 'Manutenção preventiva e corretiva de CFTV para empresas. Garanta o uptime do seu sistema de segurança com nossos SLAs rigorosos e atendimento nacional.',
    h1: 'Manutenção Especializada de CFTV',
    subtitle: 'Não deixe seu sistema parar. Nossos técnicos garantem o funcionamento ininterrupto do seu videomonitoramento.',
    keywords: 'manutenção de cftv, conserto de câmeras, manutenção preventiva cftv, manutenção corretiva cftv, empresa de segurança',
    schema: 'Service',
    aboutTitle: 'Garantia de Disponibilidade 24x7',
    aboutText: 'Sistemas de vídeo em ambientes críticos não podem falhar. Nossa manutenção especializada foca na limpeza técnica, atualização de firmwares e testes de gravação periódicos para evitar pontos cegos na sua segurança.',
    features: [
      'Limpeza técnica de lentes e cúpulas de proteção',
      'Verificação de integridade de HDs e storages',
      'Ajuste de foco e ângulo de visão pós-instalação',
      'Atualização de segurança de softwares e gravadores',
      'Relatórios detalhados de saúde do sistema'
    ]
  },
  'antenas-antifurto': {
    title: 'Antenas Antifurto EAS para Varejo | C5S Security',
    desc: 'Sistemas EAS, Antenas Antifurto AM e RF para lojas e supermercados. Reduza furtos em até 80% com tecnologia de ponta.',
    h1: 'Antenas Antifurto para Prevenção de Perdas',
    subtitle: 'Soluções discretas e eficientes para proteger suas mercadorias sem prejudicar a experiência do cliente.',
    keywords: 'antena antifurto, sistema eas, alarme para roupas, prevenção de perdas no varejo, segurança varejo',
    schema: 'Service',
    heroImage: '/images/banner_farmacia_antenas.jpg',
    aboutTitle: 'Prevenção de Perdas com Alta Tecnologia',
    aboutText: 'As antenas antifurto C5S são projetadas para o varejo moderno. Com tecnologias AM (Acousto-Magnetic) e RF (Radio Frequency), oferecemos a maior taxa de detecção do mercado com design que se integra à arquitetura da sua loja.',
    features: [
      'Detecção de alta precisão com zero alarmes falsos',
      'Design em acrílico premium com iluminação LED configurável',
      'Contagem de fluxo de clientes integrada (opcional)',
      'Sistemas AM para farmácias e perfumarias',
      'Sistemas RF ideais para lojas de vestuário e calçados'
    ]
  },
  'controle-de-acesso': {
    title: 'Sistemas de Controle de Acesso Corporativo | C5S Security',
    desc: 'Instalação de biometria, catracas e controle de acesso facial para empresas. Gerencie o fluxo de pessoas com máxima segurança.',
    h1: 'Controle de Acesso Enterprise',
    subtitle: 'Gestão inteligente de entradas e saídas. Proteja áreas restritas com tecnologia biométrica e facial de alta precisão.',
    keywords: 'controle de acesso, biometria corporativa, catracas de acesso, reconhecimento facial para empresas',
    schema: 'Service',
    heroImage: '/images/catracas_marisa_1777418461276.png',
    heroPosition: 'center 60%',
    heroSize: '110%',
    aboutTitle: 'Gestão Inteligente de Fluxo Humano',
    aboutText: 'Controle quem entra e quem sai com precisão cirúrgica. Nossas soluções integram catracas de alta velocidade, reconhecimento facial com prova de vida e biometria digital para garantir que apenas pessoas autorizadas acessem seu patrimônio.',
    features: [
      'Reconhecimento facial com detecção de máscara e temperatura',
      'Catracas e torniquetes de alto fluxo com design premium',
      'Gestão de visitantes via QR Code e pré-cadastro',
      'Relatórios de acesso em tempo real via dashboard web',
      'Integração total com sistemas de RH e folha de pagamento'
    ]
  },
  'alarmes-empresariais': {
    title: 'Sistemas de Alarmes Empresariais | C5S Security',
    desc: 'Alarmes de intrusão, sensores avançados e monitoramento 24h para proteger o patrimônio da sua empresa. Projetos corporativos sob medida.',
    h1: 'Sistemas de Alarmes Corporativos',
    subtitle: 'Detecção rápida e resposta imediata. Mantenha sua empresa protegida fora do horário comercial.',
    keywords: 'alarmes empresariais, sistema de alarme corporativo, detecção de intrusão, segurança eletrônica',
    schema: 'Service',
    aboutTitle: 'Detecção de Intrusão de Alta Precisão',
    aboutText: 'Nossos sistemas de alarme utilizam sensores de tripla tecnologia (infravermelho, micro-ondas e IA) para eliminar alarmes falsos enquanto garantem a detecção imediata de qualquer tentativa de invasão em perímetros corporativos.',
    features: [
      'Sensores infravermelhos com compensação de temperatura',
      'Barreiras perimetrais invisíveis de longo alcance',
      'Botões de pânico silenciosos para recepções e caixas',
      'Sirenes de alta potência e sinalizadores visuais',
      'Monitoramento 24h com pronta resposta tática'
    ]
  },
  'manutencao-preventiva': {
    title: 'Manutenção Preventiva de Segurança Eletrônica | C5S Security',
    desc: 'Evite falhas no seu sistema de segurança. Contratos de manutenção preventiva para CFTV, alarmes e controle de acesso em todo o Brasil.',
    h1: 'Manutenção Preventiva de Segurança Eletrônica',
    subtitle: 'Previsibilidade e confiabilidade. Cuidamos do seu sistema antes que o problema aconteça.',
    keywords: 'manutenção preventiva segurança eletrônica, contrato de manutenção cftv, manutenção de controle de acesso',
    schema: 'Service',
    aboutTitle: 'Proatividade que Salva Investimentos',
    aboutText: 'Não espere um incidente acontecer para descobrir que uma câmera não estava gravando. Nosso contrato de manutenção preventiva garante visitas técnicas periódicas, check-lists rigorosos e substituição proativa de componentes desgastados.',
    features: [
      'Calendário de visitas técnicas preventivas mensais',
      'Limpeza e calibração de todos os sensores e lentes',
      'Testes de autonomia de baterias e no-breaks',
      'Backup de configurações e histórico de logs',
      'SLA de atendimento prioritário em caso de falhas'
    ]
  },
  'suporte-emergencial': {
    title: 'Suporte Emergencial em Segurança Eletrônica | C5S Security',
    desc: 'Atendimento rápido e suporte técnico de emergência para sistemas de segurança corporativa. SLAs agressivos e técnicos especializados.',
    h1: 'Suporte Emergencial 24/7',
    subtitle: 'Problemas críticos exigem respostas rápidas. Nossa equipe atua com agilidade para restaurar a segurança da sua operação.',
    keywords: 'suporte emergencial cftv, manutenção emergencial de segurança, empresa de segurança corporativa',
    schema: 'Service',
    aboutTitle: 'Resposta Imediata em Situações Críticas',
    aboutText: 'Quando o seu sistema de segurança para, sua empresa fica vulnerável. Nosso suporte emergencial conta com equipes de prontidão e um centro de operações (NOC) que identifica falhas em tempo real, enviando técnicos com as peças necessárias para o reparo imediato.',
    features: [
      'Atendimento telefônico e remoto 24 horas por dia',
      'Deslocamento técnico com SLA de até 4 horas (conforme contrato)',
      'Equipes motorizadas para rápido acesso em centros urbanos',
      'Estoque de backup para substituição imediata (RMA Express)',
      'Diagnóstico avançado para solução definitiva do problema'
    ]
  },
  'seguranca-para-lojas': {
    title: 'Segurança Eletrônica para Lojas de Varejo | C5S Security',
    desc: 'Projetos completos de segurança para lojas. CFTV inteligente, antenas antifurto e monitoramento focados em prevenção de perdas.',
    h1: 'Segurança Inteligente para Lojas',
    subtitle: 'Tecnologia focada em reduzir perdas e aumentar a lucratividade da sua loja.',
    keywords: 'segurança para lojas, prevenção de perdas em lojas, cftv para loja, antena antifurto para loja',
    schema: 'Service',
    aboutTitle: 'Blindando sua Operação de Varejo',
    aboutText: 'Entendemos os desafios do varejo: furtos externos, internos e erros operacionais. Nossas soluções para lojas combinam Antenas EAS de última geração com CFTV de alta resolução posicionado estrategicamente para cobrir cada corredor e PDV.',
    features: [
      'Monitoramento de frentes de caixa para evitar fraudes',
      'Antenas antifurto AM/RF de alta sensibilidade',
      'Câmeras panorâmicas de 360 graus para cobertura total',
      'Integração com sistemas de alarme de intrusão',
      'Análise de comportamento para identificação de suspeitos'
    ]
  },
  'seguranca-para-shopping': {
    title: 'Segurança Eletrônica para Shoppings | C5S Security',
    desc: 'Soluções robustas de controle de acesso, CFTV com IA e monitoramento de grandes áreas para shopping centers e centros comerciais.',
    h1: 'Segurança para Shopping Centers',
    subtitle: 'Gestão de multidões, reconhecimento facial e controle de perímetro para complexos comerciais de grande porte.',
    keywords: 'segurança para shopping, cftv para shopping, segurança eletrônica em shopping',
    schema: 'Service',
    aboutTitle: 'Gestão de Segurança em Grande Escala',
    aboutText: 'Shoppings centers exigem uma infraestrutura complexa que equilibre segurança rigorosa com uma experiência de cliente agradável. Nossos projetos incluem monitoramento de estacionamentos, controle de docas e sistemas de vídeo analítico para gestão de grandes fluxos de pessoas.',
    features: [
      'Reconhecimento facial para identificação de foragidos ou suspeitos',
      'Monitoramento LPR (leitura de placas) em estacionamentos',
      'Botões de pânico sem fio para lojistas integrados ao NOC',
      'Controle de acesso rigoroso para áreas técnicas e administrativas',
      'Câmeras PTZ de longo alcance para monitoramento externo'
    ]
  },
  'seguranca-para-redes-varejistas': {
    title: 'Segurança para Redes Varejistas | C5S Security',
    desc: 'Padronização nacional de CFTV, alarmes e controle de acesso para redes de supermercados, farmácias e grandes varejistas.',
    h1: 'Segurança Padronizada para Redes Varejistas',
    subtitle: 'Gestão centralizada e SLA unificado para todas as filiais da sua rede, em qualquer estado do Brasil.',
    keywords: 'segurança para redes varejistas, segurança corporativa varejo, prevenção de perdas nacional',
    schema: 'Service',
    aboutTitle: 'Padronização Nacional e Gestão Centralizada',
    aboutText: 'Para redes varejistas com centenas de unidades, a padronização é a chave. Oferecemos um único interlocutor, um único SLA e a mesma tecnologia em todas as suas lojas, permitindo que a matriz tenha visão completa da segurança de toda a rede via dashboards unificados.',
    features: [
      'Projetos executivos padronizados para rápida expansão',
      'Gestão centralizada de múltiplos sites via VMS em nuvem',
      'Relatórios gerenciais comparativos de perdas por unidade',
      'SLA unificado em todo o território nacional',
      'Logística reversa e manutenção programada centralizada'
    ]
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = await params;
  const pageData = seoPages[p.slug];
  
  if (!pageData) {
    return { title: 'Serviço não encontrado' };
  }

  return {
    title: pageData.title,
    description: pageData.desc,
    keywords: pageData.keywords,
  };
}

export default async function ServiceSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = await params;
  const pageData = seoPages[p.slug];

  if (!pageData) {
    notFound();
  }

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": pageData.schema,
    "name": pageData.h1,
    "provider": {
      "@type": "LocalBusiness",
      "name": "C5S Security",
      "image": "https://c5s.com.br/logo.png"
    },
    "description": pageData.desc
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      
      {/* Service Hero Banner */}
      <section className="section-padding" style={{ 
        paddingTop: '9rem',
        background: pageData.heroImage ? `url(${pageData.heroImage}) no-repeat fixed` : 'linear-gradient(135deg, var(--c-dark-blue) 0%, var(--c-blue-accent) 100%)',
        backgroundPosition: pageData.heroPosition || 'center',
        backgroundSize: pageData.heroSize || 'cover',
        position: 'relative', 
        overflow: 'hidden' 
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: pageData.heroImage ? 'linear-gradient(to right, rgba(10, 25, 47, 0.95) 0%, rgba(10, 25, 47, 0.6) 100%)' : 'radial-gradient(circle at right, rgba(0, 86, 210, 0.4) 0%, transparent 60%)', zIndex: 0 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '800px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', borderRadius: '30px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', marginBottom: '1.5rem', color: 'var(--c-white)', fontSize: '0.875rem', fontWeight: 600 }}>
              <ShieldCheck size={16} color="var(--c-neon-blue)" /> Serviço Especializado
            </div>
            <h1 style={{ marginBottom: '1.5rem', color: 'var(--c-white)' }}>{pageData.h1}</h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', marginBottom: '2.5rem', lineHeight: 1.8 }}>{pageData.subtitle}</p>
            
            <Link href="/orcamento" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
              Solicitar Orçamento Agora <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--c-white)' }}>
        <div className="container">
          <div className="grid grid-cols-2" style={{ alignItems: 'flex-start' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ width: '30px', height: '2px', background: 'var(--c-blue-primary)' }}></span>
                <span style={{ color: 'var(--c-blue-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.875rem' }}>Diferencial C5S</span>
              </div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--c-dark-blue)' }}>{pageData.aboutTitle}</h2>
              <p style={{ color: 'var(--c-metallic)', marginBottom: '2rem', lineHeight: 1.8, fontSize: '1.125rem' }}>
                {pageData.aboutText}
              </p>
              
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {pageData.features.map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <CheckCircle2 color="var(--c-blue-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'var(--c-dark-blue)', fontSize: '1.125rem', fontWeight: 500 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="premium-card" style={{ padding: '3.5rem', borderTop: '4px solid var(--c-blue-primary)' }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--c-dark-blue)' }}>Benefícios do Serviço</h3>
              <p style={{ color: 'var(--c-metallic)', marginBottom: '2.5rem', fontSize: '1.125rem', lineHeight: 1.6 }}>Aumente a segurança e otimize sua operação reduzindo custos com prevenção de perdas eficiente.</p>
              
              <div style={{ padding: '2rem', background: 'var(--c-bg-light)', borderRadius: '12px', border: '1px solid var(--c-border-light)' }}>
                <strong style={{ color: 'var(--c-dark-blue)', display: 'block', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Dúvidas frequentes:</strong>
                <p style={{ color: 'var(--c-metallic)', fontSize: '1rem', lineHeight: 1.6 }}>Qual o tempo de implantação? Como funciona a garantia e o SLA? Fale com um de nossos consultores para entender todos os detalhes operacionais e técnicos do projeto.</p>
              </div>

              <Link href="https://wa.me/5511998937891" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ display: 'flex', marginTop: '2rem', width: '100%', justifyContent: 'center', fontSize: '1.125rem', padding: '1rem' }}>
                Falar com Especialista agora
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
