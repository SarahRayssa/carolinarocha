'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';
import { site, contactLink } from '@/config/site';
import { trackEvent } from '@/lib/analytics';

const services = [
  { number: '01', title: 'Divórcio judicial e extrajudicial', body: 'Orientação jurídica para divórcios consensuais ou litigiosos, considerando os direitos envolvidos, a partilha de bens e as particularidades familiares.', message: 'Gostaria de informações sobre atendimento relacionado a divórcio.' },
  { number: '02', title: 'Inventário e partilha de bens', body: 'Acompanhamento em inventários judiciais ou extrajudiciais, com orientação sobre documentos, procedimentos e organização da partilha.', message: 'Gostaria de informações sobre atendimento relacionado a inventário.' },
  { number: '03', title: 'Planejamento matrimonial e patrimonial', body: 'Orientação sobre regimes de bens, pactos antenupciais, uniões estáveis e instrumentos de organização patrimonial.', message: 'Gostaria de informações sobre planejamento matrimonial e patrimonial.' },
  { number: '04', title: 'Testamentos e doações', body: 'Assessoria jurídica para organizar a transmissão patrimonial em vida, observando a legislação, as escolhas pessoais e os direitos dos herdeiros.', message: 'Gostaria de informações sobre testamentos e doações.' },
];
const questions = [
  { q: 'É possível realizar inventário em cartório?', a: 'Em determinadas situações, o inventário pode ser feito por escritura pública. A viabilidade depende dos requisitos legais e das circunstâncias da família, que devem ser avaliadas individualmente.' },
  { q: 'O que acontece quando os herdeiros discordam?', a: 'A falta de consenso pode exigir a via judicial. A orientação adequada depende dos pontos de divergência e dos documentos relativos ao patrimônio.' },
  { q: 'Qual é a diferença entre divórcio judicial e extrajudicial?', a: 'O divórcio extrajudicial é formalizado em cartório quando os requisitos legais são atendidos. Nos demais casos, ou quando há questões que exigem análise judicial, utiliza-se a via judicial.' },
  { q: 'Como funciona o planejamento patrimonial?', a: 'É uma análise das escolhas e instrumentos jurídicos disponíveis para organizar o patrimônio, considerando objetivos pessoais, composição familiar e limites previstos em lei.' },
  { q: 'Um testamento pode evitar o inventário?', a: 'O testamento registra disposições de última vontade, mas não substitui por si só o procedimento de inventário. A aplicação depende das circunstâncias e da legislação.' },
];

function ContactLink({ children, message, label, className = '' }: { children: React.ReactNode; message?: string; label: string; className?: string }) {
  return <a className={className} href={contactLink()} aria-label={label} onClick={() => trackEvent('demo_contact_click')}>{children}</a>;
}

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return <div className={`reveal ${className}`} style={{ '--reveal-delay': `${delay}s` } as React.CSSProperties}>{children}</div>;
}

export default function Home() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return <>
    <header className="nav-wrap">
      <nav className="nav container" aria-label="Navegação principal">
        <a href="#inicio" className="brand" aria-label={`${site.name} — início`}>
          <Image src="/images/logo-symbol.svg" alt="" width={190} height={198} priority unoptimized className="brand-logo" />
          <span className="brand-name">Carolina Rocha<small>ADVOCACIA E CONSULTORIA</small></span>
        </a>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {[['Início', '#inicio'], ['Sobre', '#sobre'], ['Atuação', '#atuacao'], ['Dúvidas', '#duvidas'], ['Contato', '#contato']].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </div>
        <button type="button" className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      </nav>
    </header>

    <main>
      <section className="hero" id="inicio">
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-inner container">
          <div className="hero-copy">
            <p className="eyebrow light hero-enter">ADVOCACIA · DIREITO DE FAMÍLIA E SUCESSÕES</p>
            <h1><span>Decisões importantes</span><span>merecem orientação</span><em>jurídica e cuidado.</em></h1>
            <p className="hero-description hero-enter">Atuação em inventários, divórcios e planejamento patrimonial, com atendimento humanizado, clareza e segurança jurídica.</p>
            <div className="hero-actions hero-enter">
              <ContactLink label="Ver contato demonstrativo" className="button button-champagne">ENTRAR EM CONTATO <ArrowRight size={18} /></ContactLink>
            </div>
            <p className="hero-signature">Atendimento online e presencial · com hora marcada</p>
          </div>
          <div className="hero-portrait">
            <Image src="/images/portrait-hero.png" alt="Retrato profissional fornecido como referência visual para a demonstração" fill priority unoptimized sizes="(max-width: 760px) 100vw, 48vw" className="hero-photo" />
            <div className="portrait-caption"><span>IMAGEM DE DEMONSTRAÇÃO</span><span>ADVOCACIA</span></div>
          </div>
          <div className="hero-index" aria-hidden="true"><span>01</span><i /></div>
          <a href="#sobre" className="scroll-cue" aria-label="Ir para a seção sobre"><span>CONTINUE</span><ArrowDown size={14} /></a>
        </div>
        <div className="hero-marquee" aria-label="Carolina Rocha — Advocacia e Consultoria">
          <div className="marquee-track" aria-hidden="true">
            {[0, 1].map((group) => <div className="marquee-group" key={group}>{[0, 1, 2, 3].map((item) => <span className="marquee-item" key={item}><Image src="/images/logo-symbol.svg" alt="" width={42} height={44} unoptimized /><strong>CAROLINA ROCHA</strong></span>)}</div>)}
          </div>
        </div>
      </section>

      <section className="about section" id="sobre">
        <div className="about-grid container">
          <Reveal className="about-photo-wrap"><div className="about-photo-frame"><Image src="/images/portrait-about.webp" alt="Retrato fornecido como referência visual para a demonstração" fill unoptimized sizes="(max-width: 760px) 88vw, 40vw" className="about-photo" /></div><span className="photo-note">IMAGEM DE DEMONSTRAÇÃO</span></Reveal>
          <div className="about-content">
            <Reveal><p className="eyebrow">CONHEÇA A ADVOGADA</p><h2>Por trás de cada decisão jurídica, existe uma história que merece atenção.</h2></Reveal>
            <Reveal delay={0.1}><div className="about-copy"><p>O Escritório Exemplo apresenta uma atuação demonstrativa em Direito de Família e Sucessões.</p><p>A orientação jurídica deve ir além dos procedimentos e documentos. Ela precisa oferecer clareza, acolhimento e segurança em momentos importantes da vida.</p><p>Os serviços apresentados incluem inventários, divórcios e planejamento patrimonial, sempre considerando as particularidades de cada situação e a importância de decisões bem fundamentadas.</p></div></Reveal>
            <Reveal delay={0.2}><ul className="values"><li>Atendimento humanizado</li><li>Linguagem clara e acessível</li><li>Orientação jurídica individualizada</li></ul><div className="signature"><span>Escritório Exemplo</span><small>{site.oab}</small></div></Reveal>
          </div>
        </div>
      </section>

      <section className="practice section" id="atuacao">
        <div className="container">
          <Reveal className="practice-heading"><div><p className="eyebrow">COMO POSSO AJUDAR</p><h2>Orientação jurídica para diferentes momentos da sua vida.</h2></div><p className="practice-note">Cada história merece ser compreendida com atenção e analisada de forma individual.</p></Reveal>
          <div className="service-list">{services.map((service, i) => <Reveal key={service.number} delay={i * 0.07}><article className="service-row"><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.body}</p><ContactLink message={service.message} label={`Saiba mais sobre ${service.title}`} className="service-link">Saiba mais <ArrowUpRight size={17} /></ContactLink></article></Reveal>)}</div>
        </div>
      </section>

      <section className="quote-band" aria-label="Princípio de atuação"><div className="container quote-inner"><span className="quote-mark">“</span><p>Clareza para compreender. Cuidado para decidir.</p><span className="quote-rule" /></div></section>

      <section className="faq section" id="duvidas">
        <div className="faq-grid container"><Reveal className="faq-intro"><p className="eyebrow">PERGUNTAS FREQUENTES</p><h2>Informação clara para decisões mais conscientes.</h2><p>As respostas gerais não substituem a análise jurídica das particularidades de cada caso.</p></Reveal><div className="faq-list">{questions.map((item, index) => { const open = activeQuestion === index; return <Reveal key={item.q} delay={index * 0.04}><div className="faq-item"><button type="button" className="faq-question" aria-expanded={open} aria-controls={`faq-answer-${index}`} onClick={() => { setActiveQuestion(open ? null : index); if (!open) trackEvent('faq_open', { question: String(index + 1) }); }}><span><small>0{index + 1}</small>{item.q}</span><span className={`faq-plus ${open ? 'expanded' : ''}`} aria-hidden="true" /></button><div id={`faq-answer-${index}`} className={`faq-answer ${open ? 'open' : ''}`} aria-hidden={!open}><p>{item.a}</p></div></div></Reveal>; })}</div></div>
      </section>

      <section className="contact section" id="contato"><div className="contact-orbit" aria-hidden="true" /><div className="container contact-inner"><Reveal><p className="eyebrow light">PRÉVIA DEMONSTRATIVA</p><h2>Algumas decisões ficam mais claras com a orientação certa.</h2><p className="contact-description">Esta página é uma demonstração de layout. Nome, inscrição profissional, localização e canais de contato são fictícios e devem ser substituídos antes de qualquer uso.</p><ContactLink label="Ver canais de contato demonstrativos" className="button button-champagne">Ver contato demonstrativo <ArrowRight size={18} /></ContactLink></Reveal><Reveal delay={0.12} className="contact-details"><div className="contact-name">{site.name}<small>{site.oab}</small></div><div className="contact-detail"><span>ÁREA DE ATUAÇÃO</span><p>Direito de Família e Sucessões</p></div><div className="contact-detail"><span>ATENDIMENTO</span><p>Modalidade e horários a configurar</p></div><div className="contact-social"><span>WhatsApp · canal demonstrativo</span><span>Instagram · perfil a configurar</span></div></Reveal></div></section>
    </main>

    <footer className="footer"><div className="container footer-inner"><a href="#inicio" className="footer-brand">{site.name.toUpperCase()} <span>·</span> ADVOCACIA</a><p>Direito de Família e Sucessões <span>·</span> {site.oab}</p><a href="#inicio" className="back-top">VOLTAR AO TOPO ↑</a><small>© {new Date().getFullYear()} {site.name}. Prévia demonstrativa com dados fictícios.</small></div></footer>
  </>;
}







