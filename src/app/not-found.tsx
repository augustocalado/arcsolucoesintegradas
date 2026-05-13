'use client';

import React from 'react';
import Link from 'next/link';
import { Home, ShieldAlert, ArrowLeft, Search, PhoneCall } from 'lucide-react';

export default function NotFound() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      background: '#050a15',
      color: 'white',
      padding: '2rem',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--font-sans)'
    }}>
      {/* Dynamic Background Effects */}
      <div style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        width: '100vw', 
        height: '100vh',
        background: 'radial-gradient(circle at center, rgba(0, 86, 210, 0.15) 0%, transparent 70%)',
        zIndex: 0
      }}></div>

      {/* Grid Pattern */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
        zIndex: 0
      }}></div>

      {/* Scanning Line Animation */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '2px',
        background: 'linear-gradient(90deg, transparent, var(--c-blue-primary), transparent)',
        boxShadow: '0 0 15px var(--c-blue-primary)',
        opacity: 0.5,
        zIndex: 1,
        animation: 'scan 4s linear infinite'
      }}></div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0% { top: -10%; }
          100% { top: 110%; }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .animate-glitch {
          animation: glitch 1s linear infinite;
        }
        @keyframes glitch {
          2%, 64% { transform: translate(2px, 0) skew(0deg); }
          4%, 60% { transform: translate(-2px, 0) skew(0deg); }
          62% { transform: translate(0, 0) skew(5deg); }
        }
      `}} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px' }}>
        {/* Error Icon with Pulse */}
        <div style={{ position: 'relative', display: 'inline-block', marginBottom: '2.5rem' }}>
          <div style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            width: '120px', 
            height: '120px', 
            borderRadius: '50%', 
            border: '2px solid var(--c-blue-primary)',
            animation: 'pulse-ring 2s ease-out infinite'
          }}></div>
          <div style={{ 
            width: '100px', 
            height: '100px', 
            borderRadius: '50%', 
            background: 'rgba(0, 86, 210, 0.1)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            border: '1px solid rgba(0, 86, 210, 0.3)',
            backdropFilter: 'blur(5px)'
          }}>
            <ShieldAlert size={48} color="var(--c-blue-primary)" />
          </div>
        </div>

        <div style={{ 
          fontSize: '12rem', 
          fontWeight: 900, 
          lineHeight: 1, 
          fontFamily: 'var(--font-heading)',
          marginBottom: '0.5rem',
          background: 'linear-gradient(180deg, #FFFFFF 40%, rgba(255,255,255,0.1) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 0 30px rgba(0,86,210,0.4))',
          letterSpacing: '-5px'
        }}>
          404
        </div>
        
        <h1 style={{ 
          fontSize: '3rem', 
          marginBottom: '1.5rem', 
          fontFamily: 'var(--font-heading)', 
          color: 'white',
          fontWeight: 700 
        }}>
          Acesso Interrompido
        </h1>
        
        <p style={{ 
          fontSize: '1.25rem', 
          color: 'rgba(255,255,255,0.6)', 
          marginBottom: '3.5rem', 
          lineHeight: '1.8',
          fontWeight: 400
        }}>
          O caminho solicitado não foi localizado em nossa rede de segurança. 
          Pode ter ocorrido uma falha de conexão ou o endereço foi removido permanentemente.
        </p>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '1.5rem', 
          flexWrap: 'wrap' 
        }}>
          <Link href="/" className="btn btn-primary" style={{ 
            padding: '1.25rem 2.5rem',
            borderRadius: '8px',
            fontSize: '1.05rem',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            <Home size={20} />
            Retornar ao Início
          </Link>
          
          <Link href="/contato" style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '1.25rem 2.5rem',
            borderRadius: '8px',
            fontSize: '1.05rem',
            fontWeight: 600,
            border: '1px solid rgba(255,255,255,0.15)',
            background: 'rgba(255,255,255,0.05)',
            color: 'white',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
          }}
          >
            <PhoneCall size={20} />
            Suporte Central
          </Link>
        </div>

        {/* Footer info for 404 */}
        <div style={{ marginTop: '5rem', opacity: 0.3, fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
          Error Code: SEC_PATH_NOT_FOUND_404
        </div>
      </div>

      {/* Decorative corners */}
      <div style={{ position: 'absolute', top: '40px', left: '40px', width: '100px', height: '100px', borderTop: '2px solid rgba(0, 86, 210, 0.3)', borderLeft: '2px solid rgba(0, 86, 210, 0.3)', opacity: 0.5 }}></div>
      <div style={{ position: 'absolute', bottom: '40px', right: '40px', width: '100px', height: '100px', borderBottom: '2px solid rgba(0, 86, 210, 0.3)', borderRight: '2px solid rgba(0, 86, 210, 0.3)', opacity: 0.5 }}></div>
    </div>
  );
}
