'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Shield, Lock, User, ArrowRight } from 'lucide-react';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple hardcoded login for demonstration
    if (username === 'admin' && password === 'arc@2026') {
      localStorage.setItem('admin_auth', 'true');
      router.push('/admin/dashboard');
    } else {
      setError('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'radial-gradient(circle at top left, var(--c-dark-blue), var(--c-black))',
      padding: '1.5rem'
    }}>
      <div className="animate-fade-in" style={{ 
        width: '100%', 
        maxWidth: '450px', 
        background: 'rgba(255, 255, 255, 0.03)', 
        backdropFilter: 'blur(15px)',
        borderRadius: '24px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '3rem 2.5rem',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ 
            width: '64px', 
            height: '64px', 
            borderRadius: '16px', 
            background: 'var(--c-blue-primary)', 
            display: 'inline-flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            marginBottom: '1.5rem',
            boxShadow: '0 0 20px rgba(0, 86, 210, 0.4)'
          }}>
            <Shield color="white" size={32} />
          </div>
          <h1 style={{ color: 'white', fontSize: '1.75rem', marginBottom: '0.5rem' }}>ARC TECH Admin</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>Acesse o painel de controle do sistema</p>
        </div>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ position: 'relative' }}>
            <User size={18} color="rgba(255,255,255,0.4)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text" 
              placeholder="Usuário" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '1rem 1rem 1rem 3rem', 
                background: 'rgba(255,255,255,0.05)', 
                border: '1px solid rgba(255,255,255,0.1)', 
                borderRadius: '12px',
                color: 'white',
                outline: 'none',
                transition: 'border-color 0.3s'
              }} 
            />
          </div>

          <div style={{ position: 'relative' }}>
            <Lock size={18} color="rgba(255,255,255,0.4)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="password" 
              placeholder="Senha" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '1rem 1rem 1rem 3rem', 
                background: 'rgba(255,255,255,0.05)', 
                border: '1px solid rgba(255,255,255,0.1)', 
                borderRadius: '12px',
                color: 'white',
                outline: 'none'
              }} 
            />
          </div>

          {error && <p style={{ color: '#ff4d4d', fontSize: '0.875rem', textAlign: 'center' }}>{error}</p>}

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1rem' }}>
            Entrar no Painel
            <ArrowRight size={20} />
          </button>
        </form>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>
            &copy; {new Date().getFullYear()} ARC TECH Soluções Integradas
          </p>
        </div>
      </div>
    </div>
  );
}
