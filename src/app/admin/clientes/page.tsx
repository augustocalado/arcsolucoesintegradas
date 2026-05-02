'use client';

import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Globe,
  Upload,
  X,
  Check
} from 'lucide-react';

interface Client {
  id: string;
  name: string;
  logo: string;
  website?: string;
  status: 'Ativo' | 'Inativo';
}

export default function AdminClients() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const initialClients: Client[] = [
    { id: '1', name: 'Marisa', logo: '/images/logo_marisa.png', status: 'Ativo' },
    { id: '2', name: 'Caedu', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD8XwofHDEtViXRSYMUv2YqTWXEEdJZh57vg&s', status: 'Ativo' },
    { id: '3', name: 'Bradesco', logo: '/images/logo_bradesco.png', status: 'Ativo' },
    { id: '4', name: 'Bifarma', logo: '/images/logo_bifarma.png', status: 'Ativo' },
    { id: '5', name: 'Localiza', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJbudB5itpk5cogHtvqLYMMaOf6ibRP2CUwg&s', status: 'Ativo' },
    { id: '6', name: 'Tenda Atacadista', logo: '/images/logo_tenda.png', status: 'Ativo' },
  ];

  const [clients, setClients] = useState(initialClients);

  const filteredClients = clients.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', color: 'var(--c-dark-blue)', marginBottom: '0.5rem' }}>Gestão de Clientes</h1>
          <p style={{ color: 'var(--c-metallic)' }}>Administre os logotipos e informações das empresas que confiam na Arc Soluções.</p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="btn btn-primary">
          <Plus size={20} />
          Novo Cliente
        </button>
      </div>

      <div className="premium-card" style={{ padding: '0', overflow: 'hidden' }}>
        {/* Filters */}
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--c-border-light)', display: 'flex', gap: '1rem' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <Search size={18} color="var(--c-metallic)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text" 
              placeholder="Buscar cliente..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 3rem', borderRadius: '10px', border: '1px solid var(--c-border-light)', outline: 'none' }}
            />
          </div>
        </div>

        {/* Clients Grid */}
        <div style={{ padding: '2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2rem' }}>
            {filteredClients.map((client) => (
              <div key={client.id} className="premium-card" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.5rem', transition: 'all 0.3s' }}>
                <div style={{ width: '100%', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', background: client.logo ? 'transparent' : 'rgba(0,0,0,0.03)', borderRadius: '8px' }}>
                  {client.logo ? (
                    <img src={client.logo} alt={client.name} style={{ maxHeight: '100%', maxWidth: '80%', objectFit: 'contain' }} />
                  ) : (
                    <span style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--c-metallic)', opacity: 0.5 }}>{client.name}</span>
                  )}
                </div>
                <h3 style={{ fontSize: '1.125rem', color: 'var(--c-dark-blue)', marginBottom: '0.5rem' }}>{client.name}</h3>
                
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                  <button style={{ padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--c-border-light)', background: 'white', color: 'var(--c-metallic)' }}>
                    <Edit size={16} />
                  </button>
                  <button style={{ padding: '0.5rem', borderRadius: '8px', border: '1px solid #ff4d4d20', background: 'white', color: '#ff4d4d' }}>
                    <Trash2 size={16} />
                  </button>
                </div>

                <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                   <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: client.status === 'Ativo' ? '#10b981' : '#ef4444' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Simplified Modal Placeholder */}
      {isModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="premium-card" style={{ width: '500px', padding: '2.5rem', position: 'relative' }}>
            <button onClick={() => setIsModalOpen(false)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: 'var(--c-metallic)' }}>
              <X size={24} />
            </button>
            
            <h2 style={{ marginBottom: '2rem' }}>Novo Cliente</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--c-dark-blue)' }}>Nome da Empresa</label>
                <input type="text" placeholder="Ex: Marisa" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--c-border-light)' }} />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--c-dark-blue)' }}>Logotipo (URL ou Upload)</label>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <input type="text" placeholder="https://..." style={{ flex: 1, padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--c-border-light)' }} />
                  <button style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--c-border-light)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Upload size={18} />
                    Subir
                  </button>
                </div>
              </div>

              <button className="btn btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '1rem' }}>
                Salvar Cliente
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
