import type { Metadata } from 'next';
import './globals.css';
import { site } from '@/config/site';

export const metadata: Metadata = {
  metadataBase: new URL('https://carolina-rocha-advocacia.vercel.app'),
  title: 'Carolina Rocha | Advocacia em Família e Sucessões',
  description: site.description,
  applicationName: 'Carolina Rocha Advocacia e Consultoria',
  keywords: ['advogada de família', 'Direito de Família', 'Direito das Sucessões', 'inventário e partilha', 'divórcio', 'planejamento patrimonial', 'Goiás'],
  authors: [{ name: 'Carolina Rocha' }],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: { title: 'Carolina Rocha | Advocacia em Família e Sucessões', description: site.description, type: 'website', locale: 'pt_BR', siteName: 'Carolina Rocha — Advocacia e Consultoria', url: '/' },
  twitter: { card: 'summary_large_image', title: 'Carolina Rocha | Advocacia em Família e Sucessões', description: site.description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Carolina Rocha — Advocacia e Consultoria',
    url: 'https://carolina-rocha-advocacia.vercel.app',
    image: 'https://carolina-rocha-advocacia.vercel.app/images/logo-carolina.jpg',
    description: site.description,
    areaServed: { '@type': 'AdministrativeArea', name: 'Goiás' },
    knowsAbout: ['Direito de Família', 'Direito das Sucessões', 'Inventário e partilha', 'Divórcio', 'Planejamento patrimonial', 'Testamentos e doações'],
    employee: { '@type': 'Person', name: 'Carolina Rocha', jobTitle: 'Advogada', identifier: 'OAB/GO 61.499' },
  };

  return <html lang="pt-BR"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />{children}</body></html>;
}
