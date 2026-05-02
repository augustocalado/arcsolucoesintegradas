import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://arcsolucoesintegradas.com.br'; // Ajuste para o domínio final se necessário

  // Lista de serviços para o sitemap dinâmico
  const services = [
    'cftv-inteligente',
    'controle-acesso',
    'antenas-antifurto',
    'manutencao-preventiva',
    'alarmes-empresariais',
    'seguranca-para-redes-varejistas',
    'seguranca-para-shoppings',
    'suporte-emergencial'
  ];

  const serviceUrls = services.map((slug) => ({
    url: `${baseUrl}/servicos/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/servicos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sobre-a-empresa`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cobertura-nacional`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/orcamento`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...serviceUrls,
  ];
}
