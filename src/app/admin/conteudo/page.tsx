'use client';

import React, { useState, useEffect } from 'react';
import { Save, RefreshCw, Eye } from 'lucide-react';

export default function AdminContent() {
  const [heroTitle, setHeroTitle] = useState('Proteção inteligente para Redes Varejistas');
  const [heroSubtitle, setHeroSubtitle] = useState('Implantação, manutenção e suporte técnico com cobertura nacional.');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    // Load from localStorage if exists
    const savedTitle = localStorage.getItem('site_hero_title');
    const savedSubtitle = localStorage.getItem('site_hero_subtitle');
    if (savedTitle) setHeroTitle(savedTitle);
    if (savedSubtitle) setHeroSubtitle(savedSubtitle);
  }, []);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      localStorage.setItem('site_hero_title', heroTitle);
      localStorage.setItem('site_hero_subtitle', heroSubtitle);
      setIsSaving(false);
      alert('Conteúdo atualizado com sucesso! (Nota: Como ainda não há banco de dados, esta alteração ficará salva apenas no seu navegador para demonstração)');
    }, 1000);
  };

  return (
    <div className="animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', color: 'var(--c-dark-blue)', marginBottom: '0.5rem' }}>Conteúdo do Site</h1>
          <p style={{ color: 'var(--c-metallic)' }}>Modifique os textos principais da página inicial.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn btn-secondary" style={{ gap: '0.5rem' }}>
            <Eye size={18} />
            Ver Site
          </button>
          <button className="btn btn-primary" onClick={handleSave} disabled={isSaving} style={{ gap: '0.5rem' }}>
            {isSaving ? <RefreshCw size={18} className="animate-spin" /> : <Save size={18} />}
            Salvar Alterações
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1" style={{ gap: '2rem' }}>
        <div className="premium-card" style={{ padding: '2.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--c-dark-blue)', borderBottom: '1px solid var(--c-border-light)', paddingBottom: '1rem' }}>Banner Principal (Hero)</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: 600, color: 'var(--c-dark-blue)', fontSize: '0.875rem' }}>Título Principal</label>
              <input 
                type="text" 
                value={heroTitle}
                onChange={(e) => setHeroTitle(e.target.value)}
                style={{ width: '100%', padding: '1rem', borderRadius: '10px', border: '1px solid var(--c-border-light)', fontSize: '1.125rem' }} 
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: 600, color: 'var(--c-dark-blue)', fontSize: '0.875rem' }}>Subtítulo / Descrição</label>
              <textarea 
                rows={4}
                value={heroSubtitle}
                onChange={(e) => setHeroSubtitle(e.target.value)}
                style={{ width: '100%', padding: '1rem', borderRadius: '10px', border: '1px solid var(--c-border-light)', fontSize: '1rem', fontFamily: 'inherit' }} 
              />
            </div>

            <div style={{ background: 'var(--c-bg-light)', padding: '1.5rem', borderRadius: '12px', border: '1px dashed var(--c-border-light)' }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--c-metallic)', margin: 0 }}>
                <strong>Dica:</strong> Use palavras-chave como "Varejo", "Segurança Eletrônica" e "Cobertura Nacional" para melhorar o SEO enquanto edita.
              </p>
            </div>
          </div>
        </div>

        <div className="premium-card" style={{ padding: '2.5rem', opacity: 0.6 }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--c-dark-blue)' }}>Seção de Diferenciais (Em breve)</h3>
          <p>Esta seção permitirá editar os 5 pontos principais da empresa.</p>
        </div>
      </div>
    </div>
  );
}
