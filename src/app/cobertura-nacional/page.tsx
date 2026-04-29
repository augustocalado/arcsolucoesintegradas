import React from 'react';
import type { Metadata } from 'next';
import { MapPin, Truck, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cobertura Nacional | C5S Security',
  description: 'Atendimento e suporte técnico em todo o território nacional. Estrutura logística e técnica preparada para atender redes varejistas em qualquer estado do Brasil.',
};

export default function CoberturaNacional() {
  return (
    <>
      <section style={{ padding: '8rem 0 4rem 0', background: 'var(--c-bg-light)', borderBottom: '1px solid var(--c-border-light)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--c-dark-blue)' }}>Cobertura <span className="text-primary">Nacional</span></h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--c-metallic)' }}>Sua operação protegida, não importa onde esteja. Capilaridade técnica para atender filiais em todos os estados do Brasil.</p>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--c-white)' }}>
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '5rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ width: '30px', height: '2px', background: 'var(--c-blue-primary)' }}></span>
                <span style={{ color: 'var(--c-blue-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.875rem' }}>Alcance Enterprise</span>
              </div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--c-dark-blue)' }}>Onde você estiver, a <span className="text-primary">C5S Security</span> está.</h2>
              <p style={{ color: 'var(--c-metallic)', marginBottom: '1.5rem', lineHeight: 1.8, fontSize: '1.125rem' }}>
                Gerenciar a segurança de dezenas ou centenas de filiais espalhadas pelo país é um desafio complexo. Contratar fornecedores locais gera inconsistência técnica, variação de preços e dificuldade na gestão de SLAs.
              </p>
              <p style={{ color: 'var(--c-metallic)', marginBottom: '2.5rem', lineHeight: 1.8, fontSize: '1.125rem' }}>
                A C5S Security resolve esse problema atuando como seu parceiro único de tecnologia. Com bases operacionais e parceiros homologados em todas as regiões do Brasil, padronizamos a infraestrutura da sua empresa.
              </p>
              
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(0,86,210,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--c-blue-primary)', flexShrink: 0 }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem', color: 'var(--c-dark-blue)' }}>Presença em 26 Estados + DF</h4>
                    <p style={{ color: 'var(--c-metallic)', fontSize: '1rem' }}>Técnicos homologados nas principais capitais e cidades polo.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(0,86,210,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--c-blue-primary)', flexShrink: 0 }}>
                    <Truck size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem', color: 'var(--c-dark-blue)' }}>Logística Eficiente</h4>
                    <p style={{ color: 'var(--c-metallic)', fontSize: '1rem' }}>Centros de distribuição estratégicos para envio rápido de peças e equipamentos de reposição (RMA).</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(0,86,210,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--c-blue-primary)', flexShrink: 0 }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem', color: 'var(--c-dark-blue)' }}>SLA Padronizado</h4>
                    <p style={{ color: 'var(--c-metallic)', fontSize: '1rem' }}>Contratos com tempos de resposta bem definidos, independente da região da filial afetada.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="premium-card" style={{ padding: '3rem', textAlign: 'center', border: 'none', background: 'var(--c-bg-light)' }}>
              <div style={{ width: '100%', height: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--c-white)', borderRadius: '16px', border: '1px solid var(--c-border-light)', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                <div style={{ textAlign: 'center' }}>
                  <MapPin size={64} color="var(--c-blue-primary)" style={{ margin: '0 auto 1.5rem auto' }} />
                  <h3 style={{ color: 'var(--c-dark-blue)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Mapa Interativo de Cobertura</h3>
                  <p style={{ color: 'var(--c-metallic)', fontSize: '1rem', fontWeight: 500 }}>Atuação Nacional Integrada (100%)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
