import React from 'react';
import type { Metadata } from 'next';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solicitar Orçamento | ARC TECH',
  description: 'Fale com nossos especialistas comerciais e receba uma proposta personalizada para a segurança da sua empresa.',
};

export default function Orcamento() {
  return (
    <>
      <section style={{ padding: '8rem 0 6rem 0', background: 'var(--c-bg-light)', borderBottom: '1px solid var(--c-border-light)' }}>
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '5rem', alignItems: 'flex-start' }}>
            
            {/* Formulario */}
            <div className="premium-card" style={{ padding: '3.5rem' }}>
              <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--c-dark-blue)' }}>Solicitar <span className="text-primary">Orçamento</span></h1>
              <p style={{ color: 'var(--c-metallic)', marginBottom: '2.5rem' }}>Preencha os dados abaixo e nosso time de engenharia comercial entrará em contato em até 24 horas úteis.</p>
              
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="grid grid-cols-2" style={{ gap: '1.5rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--c-dark-blue)' }}>Nome Completo *</label>
                    <input type="text" required style={{ width: '100%', padding: '1rem', background: 'var(--c-white)', border: '1px solid var(--c-border-light)', borderRadius: '8px', color: 'var(--c-dark-blue)', outline: 'none' }} placeholder="João Silva" />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--c-dark-blue)' }}>Cargo</label>
                    <input type="text" style={{ width: '100%', padding: '1rem', background: 'var(--c-white)', border: '1px solid var(--c-border-light)', borderRadius: '8px', color: 'var(--c-dark-blue)', outline: 'none' }} placeholder="Diretor de Prevenção de Perdas" />
                  </div>
                </div>

                <div className="grid grid-cols-2" style={{ gap: '1.5rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--c-dark-blue)' }}>E-mail Corporativo *</label>
                    <input type="email" required style={{ width: '100%', padding: '1rem', background: 'var(--c-white)', border: '1px solid var(--c-border-light)', borderRadius: '8px', color: 'var(--c-dark-blue)', outline: 'none' }} placeholder="joao@empresa.com.br" />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--c-dark-blue)' }}>Telefone / WhatsApp *</label>
                    <input type="tel" required style={{ width: '100%', padding: '1rem', background: 'var(--c-white)', border: '1px solid var(--c-border-light)', borderRadius: '8px', color: 'var(--c-dark-blue)', outline: 'none' }} placeholder="(11) 99999-9999" />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--c-dark-blue)' }}>Nome da Empresa *</label>
                  <input type="text" required style={{ width: '100%', padding: '1rem', background: 'var(--c-white)', border: '1px solid var(--c-border-light)', borderRadius: '8px', color: 'var(--c-dark-blue)', outline: 'none' }} placeholder="Nome Fantasia ou Razão Social" />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--c-dark-blue)' }}>Solução de Interesse</label>
                  <select style={{ width: '100%', padding: '1rem', background: 'var(--c-white)', border: '1px solid var(--c-border-light)', borderRadius: '8px', color: 'var(--c-dark-blue)', outline: 'none' }}>
                    <option value="">Selecione uma opção</option>
                    <option value="cftv">CFTV Corporativo</option>
                    <option value="antifurto">Antenas Antifurto</option>
                    <option value="acesso">Controle de Acesso</option>
                    <option value="manutencao">Manutenção Preventiva</option>
                    <option value="projeto-completo">Projeto Completo para Loja</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--c-dark-blue)' }}>Detalhes do Projeto</label>
                  <textarea rows={4} style={{ width: '100%', padding: '1rem', background: 'var(--c-white)', border: '1px solid var(--c-border-light)', borderRadius: '8px', color: 'var(--c-dark-blue)', outline: 'none', resize: 'vertical' }} placeholder="Descreva brevemente a sua necessidade, quantidade de lojas, ou desafio atual..."></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '1rem', fontSize: '1.125rem' }}>
                  Enviar Solicitação <Send size={18} />
                </button>
              </form>
            </div>

            {/* Informações de Contato Direto */}
            <div style={{ padding: '2rem 0' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ width: '30px', height: '2px', background: 'var(--c-blue-primary)' }}></span>
                <span style={{ color: 'var(--c-blue-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.875rem' }}>Contato Direto</span>
              </div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--c-dark-blue)' }}>Atendimento <span className="text-primary">Especializado</span></h2>
              <p style={{ color: 'var(--c-metallic)', marginBottom: '3rem', fontSize: '1.125rem', lineHeight: 1.8 }}>
                Entendemos que projetos corporativos exigem agilidade e expertise. Nossa equipe técnica está pronta para dimensionar e propor a arquitetura ideal para a sua rede.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(0,86,210,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--c-blue-primary)', flexShrink: 0 }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', marginBottom: '0.25rem', color: 'var(--c-dark-blue)' }}>Ligação Gratuita</h4>
                    <p style={{ color: 'var(--c-metallic)', fontSize: '1.125rem', fontWeight: 600 }}>0800 123 4567</p>
                    <p style={{ color: 'var(--c-metallic-light)', fontSize: '0.875rem' }}>Seg a Sex, das 8h às 18h</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(0,86,210,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--c-blue-primary)', flexShrink: 0 }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', marginBottom: '0.25rem', color: 'var(--c-dark-blue)' }}>E-mail Comercial</h4>
                    <p style={{ color: 'var(--c-metallic)', fontSize: '1.125rem', fontWeight: 600 }}>comercial@ARC TECH.com.br</p>
                    <p style={{ color: 'var(--c-metallic-light)', fontSize: '0.875rem' }}>Retorno estimado: 4 horas</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(0,86,210,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--c-blue-primary)', flexShrink: 0 }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', marginBottom: '0.25rem', color: 'var(--c-dark-blue)' }}>Matriz</h4>
                    <p style={{ color: 'var(--c-metallic)', lineHeight: 1.6 }}>Av. Paulista, 1000 - Bela Vista<br/>São Paulo - SP, 01310-100</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
