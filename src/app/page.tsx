'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';
import { site, contactLink } from '@/config/site';
import { trackEvent } from '@/lib/analytics';

const services = [
  { number: '01', slug: 'inventario-partilha', title: 'Inventário e partilha de bens', body: 'Entenda os documentos, as etapas e as possibilidades de fazer o inventário em cartório ou pela via judicial. A orientação considera os direitos dos herdeiros e a realidade de cada família.', message: 'Gostaria de informações sobre inventário e partilha de bens.' },
  { number: '02', slug: 'divorcio', title: 'Divórcio judicial e extrajudicial', body: 'Orientação para compreender as decisões sobre divórcio, partilha de bens e, quando aplicável, guarda e alimentos. O procedimento depende dos requisitos legais e de cada situação.', message: 'Gostaria de informações sobre divórcio.' },
  { number: '03', slug: 'planejamento-patrimonial', title: 'Planejamento matrimonial e patrimonial', body: 'Conheça opções como regime de bens, pacto antenupcial e contrato de união estável, com explicações claras sobre direitos, deveres e efeitos de cada escolha.', message: 'Gostaria de informações sobre planejamento matrimonial e patrimonial.' },
  { number: '04', slug: 'testamentos-doacoes', title: 'Testamentos e doações', body: 'Organize a transmissão de bens em vida ou por testamento, com atenção à sua vontade, aos limites previstos em lei e aos direitos dos herdeiros.', message: 'Gostaria de informações sobre testamentos e doações.' },
];
const questions = [
  { q: 'É possível fazer inventário em cartório?', a: 'Em algumas situações, o inventário pode ser feito em cartório por escritura pública, desde que os requisitos legais sejam atendidos. A participação de advogado é obrigatória. Se essa modalidade não for possível, o inventário segue pela via judicial.' },
  { q: 'O que acontece quando os herdeiros discordam da partilha?', a: 'Quando não há acordo, a divisão dos bens pode precisar ser resolvida na Justiça. A análise considera as divergências, os documentos e os direitos de cada herdeiro.' },
  { q: 'Qual é a diferença entre divórcio judicial e extrajudicial?', a: 'O divórcio extrajudicial é feito em cartório quando a situação atende aos requisitos legais. Em outros casos, o processo ocorre na Justiça, que pode decidir as questões envolvidas.' },
  { q: 'Como é feita a divisão de bens no divórcio?', a: 'A divisão depende do regime de bens do casamento e das circunstâncias de cada relação. É necessário analisar quais bens são comuns e quais pertencem individualmente a cada cônjuge.' },
  { q: 'O que é planejamento patrimonial?', a: 'É a organização jurídica dos bens de acordo com os objetivos pessoais e familiares. Pode envolver regime de bens, união estável, doações ou testamento, sempre dentro dos limites legais.' },
  { q: 'A doação em vida elimina a necessidade de inventário?', a: 'Não necessariamente. A doação pode transferir determinados bens, mas o patrimônio restante ainda pode precisar de inventário. As regras sucessórias e cada situação devem ser analisadas.' },
  { q: 'Preciso ter muitos bens para fazer um testamento?', a: 'Não. O testamento pode ser considerado por quem deseja organizar a destinação de seus bens. Ele deve cumprir os requisitos legais e respeitar os direitos dos herdeiros necessários, quando houver.' },
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
          <Image src="/images/logo-carolina-horizontal.webp" alt="Carolina Rocha — Advocacia e Consultoria" width={2973} height={991} priority unoptimized className="brand-logo" />
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
            <p className="eyebrow light hero-enter">DIREITO DE FAMÍLIA E SUCESSÕES</p>
            <h1><span>Seu patrimônio, sua família</span><span>e seu futuro merecem</span><em>decisões bem orientadas.</em></h1>
            <p className="hero-description hero-enter">Assessoria jurídica em inventário, divórcio e planejamento patrimonial, com atendimento humanizado, linguagem clara e atenção às particularidades de cada história.</p>
            <div className="hero-actions hero-enter">
              <a href="#atuacao" className="button button-champagne">CONHEÇA AS ÁREAS DE ATUAÇÃO <ArrowRight size={18} /></a>
              <ContactLink label="Entre em contato" className="hero-contact-link">ENTRE EM CONTATO</ContactLink>
            </div>
            <p className="hero-signature">Atendimento online e presencial com hora marcada</p>
          </div>
          <div className="hero-portrait">
            <Image src="/images/portrait-hero-atualizado.webp" alt="Retrato de Carolina Rocha" fill priority unoptimized sizes="(max-width: 760px) 100vw, 48vw" className="hero-photo" />
            <div className="portrait-brand-seal"><Image src="/images/selo-carolina-rocha.webp" alt="Selo Carolina Rocha — Advocacia e Consultoria" width={1254} height={1254} unoptimized /></div>
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
            <Reveal><p className="eyebrow">SOBRE CAROLINA ROCHA</p><h2>Mais do que orientação jurídica, clareza para tomar decisões importantes.</h2></Reveal>
            <Reveal delay={0.1}><div className="about-copy"><p>Sou Carolina Rocha, advogada com atuação em Direito de Família e Sucessões.</p><p>Acredito que cada situação merece ser compreendida com atenção, respeito e responsabilidade. Questões de família e patrimônio costumam trazer dúvidas, mudanças e decisões que impactam o futuro de muitas pessoas.</p><p>Meu trabalho é oferecer orientação jurídica clara e individualizada, explicar cada etapa e apresentar os caminhos previstos em lei para que você possa decidir com mais segurança.</p></div></Reveal>
            <Reveal delay={0.2}><ul className="values"><li>Atendimento humanizado e individualizado</li><li>Comunicação clara, sem complicações jurídicas</li><li>Orientação responsável em cada etapa</li><li>Atenção às particularidades de cada caso</li></ul><div className="signature"><span>Carolina Rocha</span><small>{site.oab}</small></div><a className="text-link" href="#atuacao">Conheça as áreas de atuação <ArrowRight size={15} /></a></Reveal>
          </div>
        </div>
      </section>

      <section className="practice section" id="atuacao">
        <div className="container">
          <Reveal className="practice-heading"><div><p className="eyebrow">COMO POSSO ORIENTAR VOCÊ</p><h2>Soluções jurídicas para proteger seus direitos e organizar seu patrimônio.</h2></div><p className="practice-note">Cada momento pede uma orientação. Conheça as áreas de atuação e como funciona o acompanhamento jurídico em cada situação.</p></Reveal>
          <div className="service-list">{services.map((service, i) => <Reveal key={service.number} delay={i * 0.07}><article className="service-row" id={service.slug}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.body}</p><ContactLink message={service.message} label={`Saiba mais sobre ${service.title}`} className="service-link">Saiba mais <ArrowUpRight size={17} /></ContactLink></article></Reveal>)}</div>
        </div>
      </section>

      <section className="quote-band" aria-label="Princípio de atuação"><div className="container quote-inner"><span className="quote-mark">“</span><p>Clareza para compreender. Cuidado para decidir.</p><span className="quote-rule" /></div></section>

      <section className="faq section" id="duvidas">
        <div className="faq-grid container"><Reveal className="faq-intro"><p className="eyebrow">INFORMAÇÃO E ORIENTAÇÃO</p><h2>Suas dúvidas merecem respostas claras.</h2><p>Veja respostas gerais sobre inventário, divórcio e planejamento patrimonial. Cada caso depende de uma análise individual.</p></Reveal><div className="faq-list">{questions.map((item, index) => { const open = activeQuestion === index; return <Reveal key={item.q} delay={index * 0.04}><div className="faq-item"><button type="button" className="faq-question" aria-expanded={open} aria-controls={`faq-answer-${index}`} onClick={() => { setActiveQuestion(open ? null : index); if (!open) trackEvent('faq_open', { question: String(index + 1) }); }}><span><small>{String(index + 1).padStart(2, '0')}</small>{item.q}</span><span className={`faq-plus ${open ? 'expanded' : ''}`} aria-hidden="true" /></button><div id={`faq-answer-${index}`} className={`faq-answer ${open ? 'open' : ''}`} aria-hidden={!open}><p>{item.a}</p></div></div></Reveal>; })}</div></div>
        <div className="faq-cta container"><p>Ainda tem dúvidas?</p><ContactLink label="Entre em contato para esclarecer dúvidas" className="text-link">Entre em contato <ArrowRight size={15} /></ContactLink></div>
      </section>

      <section className="contact section" id="contato"><div className="contact-orbit" aria-hidden="true" /><div className="container contact-inner"><Reveal><p className="eyebrow light">CAROLINA ROCHA · ADVOCACIA E CONSULTORIA</p><h2>Decisões importantes começam com informação e orientação.</h2><p className="contact-description">Se você tem dúvidas sobre inventário, divórcio ou planejamento patrimonial, conhecer as possibilidades jurídicas é um passo importante para decidir com consciência. Entre em contato para apresentar sua situação e obter informações sobre o atendimento.</p><ContactLink label="Falar pelo WhatsApp" className="button button-champagne">FALAR PELO WHATSAPP <ArrowRight size={18} /></ContactLink></Reveal><Reveal delay={0.12} className="contact-details"><div className="contact-name">Carolina Rocha<small>{site.oab}</small></div><div className="contact-detail"><span>ÁREA DE ATUAÇÃO</span><p>Direito de Família e Sucessões</p></div><div className="contact-detail"><span>ATENDIMENTO</span><p>Online e presencial com hora marcada</p></div><div className="contact-social"><span>Instagram · contato a configurar</span><span>WhatsApp · contato a configurar</span></div></Reveal></div></section>
    </main>

    <footer className="footer"><div className="container footer-inner"><a href="#inicio" className="footer-brand">CAROLINA ROCHA <span>·</span> ADVOCACIA E CONSULTORIA</a><p>Direito de Família e Sucessões <span>·</span> {site.oab}</p><nav className="footer-services" aria-label="Áreas de atuação"><a href="#inventario-partilha">Inventário e partilha</a><a href="#divorcio">Divórcio</a><a href="#planejamento-patrimonial">Planejamento patrimonial</a><a href="#testamentos-doacoes">Testamentos e doações</a></nav><a href="#inicio" className="back-top">VOLTAR AO TOPO ↑</a><small>© {new Date().getFullYear()} Carolina Rocha. Todos os direitos reservados. As informações deste site são informativas e não substituem a análise jurídica individualizada.</small></div></footer>
  </>;
}








