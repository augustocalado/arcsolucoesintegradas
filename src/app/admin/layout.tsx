'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Settings, 
  Users, 
  FileText, 
  LogOut, 
  Shield, 
  Bell,
  Search,
  Menu,
  X,
  Briefcase
} from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Simple check for localStorage auth
    const auth = localStorage.getItem('admin_auth');
    if (auth !== 'true' && pathname !== '/admin') {
      router.push('/admin');
    } else {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, [pathname, router]);

  const handleLogout = () => {
    localStorage.removeItem('admin_auth');
    router.push('/admin');
  };

  if (isLoading) return <div style={{ background: 'var(--c-dark-blue)', height: '100vh' }}></div>;

  // Don't show layout on login page
  if (pathname === '/admin') return <>{children}</>;

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
      {/* Sidebar */}
      <aside style={{ 
        width: isSidebarOpen ? '280px' : '0px',
        background: 'var(--c-dark-blue)',
        color: 'white',
        transition: 'all 0.3s ease',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 100
      }}>
        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem' }}>
            <img 
              src="https://lh3.googleusercontent.com/a-/ALV-UjWnTbi1i586gmBeKsmH1jVp88oH5v8fc9TRwMg7p1s2xmOMaXU=w1905" 
              alt="Logo Arc Soluções" 
              style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'black', padding: '2px' }} 
            />
            <span style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
              Arc Soluções
            </span>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
            {[
              { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/admin/dashboard' },
              { name: 'Serviços', icon: <Briefcase size={20} />, path: '/admin/servicos' },
              { name: 'Conteúdo Site', icon: <FileText size={20} />, path: '/admin/conteudo' },
              { name: 'Clientes', icon: <Users size={20} />, path: '/admin/clientes' },
              { name: 'Configurações', icon: <Settings size={20} />, path: '/admin/configuracoes' },
            ].map((item) => (
              <Link 
                key={item.path}
                href={item.path}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem', 
                  padding: '1rem', 
                  borderRadius: '12px',
                  background: pathname === item.path ? 'rgba(255,255,255,0.1)' : 'transparent',
                  color: pathname === item.path ? 'var(--c-neon-blue)' : 'rgba(255,255,255,0.7)',
                  fontWeight: 600,
                  transition: '0.2s'
                }}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </nav>

          <button 
            onClick={handleLogout}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem', 
              padding: '1rem', 
              color: '#ff4d4d', 
              fontWeight: 600,
              marginTop: 'auto'
            }}
          >
            <LogOut size={20} />
            Sair do Sistema
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <header style={{ 
          height: '80px', 
          background: 'white', 
          borderBottom: '1px solid var(--c-border-light)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 2rem'
        }}>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} style={{ color: 'var(--c-dark-blue)' }}>
            <Menu size={24} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ position: 'relative', display: 'none' }}>
               {/* Search hidden for brevity */}
            </div>
            <button style={{ color: 'var(--c-metallic)', position: 'relative' }}>
              <Bell size={20} />
              <span style={{ position: 'absolute', top: '-5px', right: '-5px', width: '10px', height: '100%', background: 'red', borderRadius: '50%', border: '2px solid white' }}></span>
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 1rem', borderRadius: '30px', background: 'var(--c-bg-light)', border: '1px solid var(--c-border-light)' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--c-blue-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>A</div>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--c-dark-blue)' }}>Administrador</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div style={{ padding: '2rem', flex: 1, overflowY: 'auto' }}>
          {children}
        </div>
      </main>
    </div>
  );
}
