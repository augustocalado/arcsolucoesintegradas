import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DynamicGeoSEO from '@/components/DynamicGeoSEO';

export const metadata: Metadata = {
  metadataBase: new URL('https://arcsolucoesintegradas.com.br'),
  title: {
    default: 'Arc Soluções Integradas | Segurança Eletrônica Corporativa',
    template: '%s | Arc Soluções Integradas'
  },
  description: 'Líder em Segurança Eletrônica Corporativa: CFTV Inteligente, Controle de Acesso e Antenas Antifurto. Soluções completas para grandes redes de varejo e empresas em todo o Brasil.',
  keywords: ['segurança eletrônica', 'Arc Soluções Integradas', 'cftv corporativo', 'antenas antifurto', 'controle de acesso', 'segurança varejo', 'infraestrutura de segurança'],
  authors: [{ name: 'Arc Soluções Integradas' }],
  creator: 'Arc Soluções Integradas',
  publisher: 'Arc Soluções Integradas',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Arc Soluções Integradas | Segurança Eletrônica Corporativa',
    description: 'Alta tecnologia em segurança para o seu negócio com cobertura em todo o Brasil. Projetos personalizados e suporte especializado.',
    url: 'https://arcsolucoesintegradas.com.br',
    siteName: 'Arc Soluções Integradas',
    locale: 'pt_BR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://arcsolucoesintegradas.com.br',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'xZF6j7nTZKJvBGJ77onOOXsdeHjbaJvDrgXXkG-w11E',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <DynamicGeoSEO />
        <Header />
        <main style={{ minHeight: '100vh' }}>
          {children}
        </main>
        <Footer />
        
        {/* WhatsApp Floating Button */}
        <a 
          href="https://wa.me/5511973098174" 
          target="_blank" 
          rel="noreferrer"
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            backgroundColor: '#25D366',
            color: 'white',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
            zIndex: 9999,
            transition: 'transform 0.3s ease'
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </a>
      </body>
    </html>
  );
}
