type EventName = 'demo_contact_click' | 'faq_open';
declare global { interface Window { gtag?: (...args: unknown[]) => void } }

export function trackEvent(name: EventName, params?: Record<string, string>) {
  if (typeof window !== 'undefined' && window.gtag) window.gtag('event', name, params ?? {});
}

