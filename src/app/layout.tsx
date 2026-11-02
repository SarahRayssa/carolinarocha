import type { Metadata } from 'next';
import './globals.css';
import { site } from '@/config/site';

export const metadata: Metadata = {
  title: 'Escritório Exemplo | Direito de Família e Sucessões',
  description: site.description,
  robots: { index: false, follow: false },
  openGraph: { title: 'Escritório Exemplo | Direito de Família e Sucessões', description: site.description, type: 'website', locale: 'pt_BR' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}

