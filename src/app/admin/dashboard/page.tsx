'use client';

import React from 'react';
import { 
  Users, 
  Briefcase, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  ArrowUpRight 
} from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { label: 'Serviços Ativos', value: '12', icon: <Briefcase size={24} />, color: '#0056D2', trend: '+2 este mês' },
    { label: 'Leads (Contatos)', value: '48', icon: <Users size={24} />, color: '#10b981', trend: '+15% vs mês anterior' },
    { label: 'SLA Médio', value: '99.9%', icon: <CheckCircle2 size={24} />, color: '#f59e0b', trend: 'Meta atingida' },
    { label: 'Tempo de Resposta', value: '4h', icon: <Clock size={24} />, color: '#6366f1', trend: '-20min' },
  ];

  return (
    <div className="animate-fade-in">
      <div style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--c-dark-blue)', marginBottom: '0.5rem' }}>Olá, Administrador 👋</h1>
        <p style={{ color: 'var(--c-metallic)' }}>Bem-vindo ao painel de controle da ARC TECH.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4" style={{ gap: '1.5rem', marginBottom: '2.5rem' }}>
        {stats.map((stat, i) => (
          <div key={i} className="premium-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `${stat.color}10`, color: stat.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {stat.icon}
              </div>
              <span style={{ color: '#10b981', fontSize: '0.75rem', fontWeight: 600, background: '#10b98110', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>
                <ArrowUpRight size={12} style={{ marginRight: '2px' }} />
                {stat.trend}
              </span>
            </div>
            <div>
              <p style={{ color: 'var(--c-metallic)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>{stat.label}</p>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--c-dark-blue)' }}>{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
        {/* Recent Activity or Tasks */}
        <div className="premium-card" style={{ padding: '2rem' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--c-dark-blue)' }}>Ações Rápidas</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'flex-start', padding: '1rem' }}>Editar Banner Principal</button>
            <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'flex-start', padding: '1rem' }}>Adicionar Novo Serviço</button>
            <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'flex-start', padding: '1rem' }}>Atualizar Clientes</button>
            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'flex-start', padding: '1rem' }}>Exportar Relatório de Leads</button>
          </div>
        </div>

        {/* System Health */}
        <div className="premium-card" style={{ padding: '2rem' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--c-dark-blue)' }}>Status do Site</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--c-metallic)' }}>Status do Servidor</span>
              <span style={{ color: '#10b981', fontWeight: 700 }}>Online</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--c-metallic)' }}>Tempo de Carregamento</span>
              <span style={{ color: '#10b981', fontWeight: 700 }}>0.8s</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--c-metallic)' }}>Certificado SSL</span>
              <span style={{ color: '#10b981', fontWeight: 700 }}>Ativo</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--c-metallic)' }}>Último Backup</span>
              <span style={{ color: 'var(--c-dark-blue)', fontWeight: 700 }}>Hoje, 04:30 AM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
