'use client';

import React, { useState } from 'react';
import { 
  Edit, 
  Trash2, 
  Plus, 
  Video, 
  Radio, 
  Lock, 
  Wrench, 
  Map, 
  ShieldAlert,
  Search,
  Check,
  X
} from 'lucide-react';

export default function AdminServices() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditing, setIsEditing] = useState<string | null>(null);

  const initialServices = [
    { id: 'cftv-inteligente', title: 'CFTV Corporativo Inteligente', category: 'Monitoramento', status: 'Ativo' },
    { id: 'antenas-antifurto', title: 'Sistemas Antifurto (EAS)', category: 'Varejo', status: 'Ativo' },
    { id: 'controle-de-acesso', title: 'Controle de Acesso Enterprise', category: 'Infraestrutura', status: 'Ativo' },
    { id: 'manutencao-preventiva', title: 'Manutenção Preventiva', category: 'Suporte', status: 'Ativo' },
    { id: 'alarmes-empresariais', title: 'Alarmes e Detecção', category: 'Segurança', status: 'Ativo' },
    { id: 'seguranca-para-redes-varejistas', title: 'Inteligência para Varejo', category: 'Consultoria', status: 'Inativo' },
  ];

  const [services, setServices] = useState(initialServices);

  const filteredServices = services.filter(s => 
    s.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', color: 'var(--c-dark-blue)', marginBottom: '0.5rem' }}>Gerenciar Serviços</h1>
          <p style={{ color: 'var(--c-metallic)' }}>Adicione ou edite as soluções oferecidas pela ARC TECH.</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={20} />
          Novo Serviço
        </button>
      </div>

      <div className="premium-card" style={{ padding: '0', overflow: 'hidden' }}>
        {/* Filters */}
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--c-border-light)', display: 'flex', gap: '1rem' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <Search size={18} color="var(--c-metallic)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text" 
              placeholder="Buscar serviço..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 3rem', borderRadius: '10px', border: '1px solid var(--c-border-light)', outline: 'none' }}
            />
          </div>
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: 'var(--c-bg-light)', borderBottom: '1px solid var(--c-border-light)' }}>
                <th style={{ padding: '1.25rem 2rem', fontSize: '0.875rem', fontWeight: 700, color: 'var(--c-dark-blue)' }}>Serviço</th>
                <th style={{ padding: '1.25rem 2rem', fontSize: '0.875rem', fontWeight: 700, color: 'var(--c-dark-blue)' }}>Categoria</th>
                <th style={{ padding: '1.25rem 2rem', fontSize: '0.875rem', fontWeight: 700, color: 'var(--c-dark-blue)' }}>Status</th>
                <th style={{ padding: '1.25rem 2rem', fontSize: '0.875rem', fontWeight: 700, color: 'var(--c-dark-blue)', textAlign: 'right' }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {filteredServices.map((service) => (
                <tr key={service.id} style={{ borderBottom: '1px solid var(--c-border-light)', transition: 'background 0.2s' }} className="hover:bg-gray-50">
                  <td style={{ padding: '1.25rem 2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(0, 86, 210, 0.05)', color: 'var(--c-blue-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Video size={20} />
                      </div>
                      <span style={{ fontWeight: 600, color: 'var(--c-dark-blue)' }}>{service.title}</span>
                    </div>
                  </td>
                  <td style={{ padding: '1.25rem 2rem', color: 'var(--c-metallic)' }}>{service.category}</td>
                  <td style={{ padding: '1.25rem 2rem' }}>
                    <span style={{ 
                      padding: '0.4rem 0.8rem', 
                      borderRadius: '30px', 
                      fontSize: '0.75rem', 
                      fontWeight: 700,
                      background: service.status === 'Ativo' ? '#10b98115' : '#ef444415',
                      color: service.status === 'Ativo' ? '#10b981' : '#ef4444'
                    }}>
                      {service.status}
                    </span>
                  </td>
                  <td style={{ padding: '1.25rem 2rem', textAlign: 'right' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                      <button style={{ p: '0.5rem', color: 'var(--c-metallic)', background: 'none' }}><Edit size={18} /></button>
                      <button style={{ p: '0.5rem', color: '#ff4d4d', background: 'none' }}><Trash2 size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
