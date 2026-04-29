import React from 'react';
import { Shield, Target, Eye, Users } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre a Empresa | C5S Security',
  description: 'Conheça a história, missão e valores da C5S Security. Empresa líder em segurança eletrônica corporativa com cobertura nacional.',
};

export default function SobreEmpresa() {
  return (
    <>
      <section style={{ padding: '8rem 0 4rem 0', background: 'var(--c-bg-light)', borderBottom: '1px solid var(--c-border-light)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--c-dark-blue)' }}>Nossa <span className="text-primary">Trajetória</span></h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--c-metallic)' }}>Mais de 15 anos protegendo o patrimônio das maiores redes varejistas do Brasil com tecnologia de ponta e excelência operacional.</p>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--c-white)' }}>
        <div className="container">
          <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '5rem' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ width: '30px', height: '2px', background: 'var(--c-blue-primary)' }}></span>
                <span style={{ color: 'var(--c-blue-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.875rem' }}>História de Inovação</span>
              </div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>O parceiro estratégico da sua operação.</h2>
              <p style={{ color: 'var(--c-metallic)', marginBottom: '1.5rem', lineHeight: 1.8, fontSize: '1.125rem' }}>
                Fundada com a missão de revolucionar a segurança eletrônica no Brasil, a C5S Security nasceu para atender uma demanda crítica: a necessidade de um serviço padronizado, de alta qualidade e com abrangência nacional para o setor varejista.
              </p>
              <p style={{ color: 'var(--c-metallic)', marginBottom: '1.5rem', lineHeight: 1.8, fontSize: '1.125rem' }}>
                Ao longo de nossa trajetória, investimos fortemente em capital humano e tecnologias disruptivas, estabelecendo parcerias sólidas com os maiores fabricantes de hardware e software de segurança do mundo.
              </p>
              <p style={{ color: 'var(--c-metallic)', lineHeight: 1.8, fontSize: '1.125rem' }}>
                Hoje, somos reconhecidos como uma das principais integradoras de tecnologia do país, operando com um modelo de negócio focado em SLA, performance e resultados reais na prevenção de perdas.
              </p>
            </div>
            
            <div className="grid grid-cols-2" style={{ gap: '1.5rem' }}>
              <div className="premium-card" style={{ textAlign: 'center', padding: '2rem' }}>
                <Target size={40} color="var(--c-blue-primary)" style={{ margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--c-dark-blue)' }}>Missão</h3>
                <p style={{ color: 'var(--c-metallic)', fontSize: '0.875rem' }}>Proteger ativos e pessoas através de tecnologia inteligente e serviços de excelência.</p>
              </div>
              
              <div className="premium-card" style={{ textAlign: 'center', padding: '2rem', transform: 'translateY(2rem)' }}>
                <Eye size={40} color="var(--c-blue-primary)" style={{ margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--c-dark-blue)' }}>Visão</h3>
                <p style={{ color: 'var(--c-metallic)', fontSize: '0.875rem' }}>Ser a principal e mais confiável referência em segurança corporativa no Brasil.</p>
              </div>
              
              <div className="premium-card" style={{ textAlign: 'center', padding: '2rem' }}>
                <Shield size={40} color="var(--c-blue-primary)" style={{ margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--c-dark-blue)' }}>Valores</h3>
                <p style={{ color: 'var(--c-metallic)', fontSize: '0.875rem' }}>Ética, Transparência, Inovação Constante e Foco absoluto no Cliente.</p>
              </div>
              
              <div className="premium-card" style={{ textAlign: 'center', padding: '2rem', transform: 'translateY(2rem)' }}>
                <Users size={40} color="var(--c-blue-primary)" style={{ margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--c-dark-blue)' }}>Equipe</h3>
                <p style={{ color: 'var(--c-metallic)', fontSize: '0.875rem' }}>Profissionais altamente qualificados e certificados internacionalmente.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
