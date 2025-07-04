import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'
import avatarImage from './assets/image.png'
  
gsap.registerPlugin(ScrollTrigger)

gsap.config({
  nullTargetWarn: false,
  autoSleep: 60,
  force3D: true
})

function App() {
  useGSAP(() => {
    const isMobile = window.isMobile || window.innerWidth < 768;
    
    gsap.set([
      '.floating-benefits',
      '.floating-container',
      '.floating-text.main-title',
      '.title-text',
      '.title-underline',
      '.benefits-text-container',
      '.benefit-item',
      '.benefit-icon',
      '.benefit-content',
      '.benefit-content h3',
      '.benefit-content p'
    ], {opacity: 1, visibility: 'visible', y: 0, scale: 1});
    
    // Se for mobile, apenas garantir que tudo esteja visível
    if (isMobile) {
      gsap.set([
        '.who-needs-help .section-title',
        '.who-needs-help .section-subtitle',
        '.who-needs-help .business-item',
        '.help-section .help-title',
        '.help-section .help-subtitle',
        '.help-section .situation-card',
        '.floating-help-cta .cta-text',
        '.floating-help-cta .cta-description',
        '.section-divider',
        '.contact-section .contact-title',
        '.contact-section .contact-subtitle',
        '.contact-section .contact-card',
        '.footer .footer-logo',
        '.footer .footer-contact h3',
        '.footer .footer-contact p',
        '.footer .footer-social',
        '.social-link',
        '.footer-bottom'
      ], {opacity: 1});
      
      gsap.set('.business-details', {
        position: 'relative',
        top: 'auto',
        left: 'auto',
        transform: 'none',
        opacity: 1,
        visibility: 'visible',
        filter: 'none',
        pointerEvents: 'auto'
      });
      return;
    }
    
    gsap.set([
      '.who-needs-help .section-title',
      '.who-needs-help .section-subtitle',
      '.who-needs-help .business-item',
      '.help-section .help-title',
      '.help-section .help-subtitle',
      '.help-section .situation-card',
      '.floating-help-cta .cta-text',
      '.floating-help-cta .cta-description',
      '.section-divider',
      '.contact-section .contact-title',
      '.contact-section .contact-subtitle',
      '.contact-section .contact-card',
      '.footer .footer-logo',
      '.footer .footer-contact h3',
      '.footer .footer-contact p',
      '.footer .footer-social',
      '.social-link',
      '.footer-bottom'
    ], {opacity: 0});
    
    const createFadeInAnimation = (selector: string, delay = 0, stagger = 0, fromDirection: 'bottom' | 'top' | 'left' | 'right' = 'bottom') => {
      const directions = {
        bottom: { y: isMobile ? 15 : 30, x: 0 },
        top: { y: isMobile ? -15 : -30, x: 0 },
        left: { y: 0, x: isMobile ? -15 : -30 },
        right: { y: 0, x: isMobile ? 15 : 30 }
      }
      
      const from = directions[fromDirection]
      
      return gsap.fromTo(selector, 
        { opacity: 0, ...from, scale: isMobile ? 0.97 : 0.95 },
        { 
          opacity: 1, 
          y: 0,
          x: 0,
          scale: 1, 
          duration: isMobile ? 0.8 : 1.2, 
          ease: 'power3.out', 
          delay: isMobile ? delay * 0.7 : delay,
          ...(stagger && { stagger: isMobile ? stagger * 0.7 : stagger })
        }
      )
    }

    const createTitleAnimation = (selector: string, delay = 0) => {
      return gsap.fromTo(selector,
        { opacity: 0, y: isMobile ? 20 : 40, scale: isMobile ? 0.95 : 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: isMobile ? 1 : 1.5, 
          ease: 'power4.out', 
          delay: isMobile ? delay * 0.7 : delay 
        }
      )
    }

    gsap.from('.hero-title', { 
      duration: isMobile ? 1.2 : 1.8, 
      opacity: 0, 
      y: isMobile ? 15 : 30, 
      ease: 'power4.out', 
      delay: 0.2,
      clearProps: 'all'  
    })
    
    gsap.from('.hero-subtitle', { 
      duration: isMobile ? 1 : 1.4, 
      opacity: 0, 
      y: isMobile ? 10 : 20, 
      ease: 'power3.out', 
      delay: isMobile ? 0.4 : 0.5,
      clearProps: 'all'
    })
    
    gsap.from('.phone-mockup', { 
      duration: isMobile ? 1.2 : 1.8, 
      x: isMobile ? 40 : 80, 
      opacity: 0, 
      ease: 'power4.out', 
      delay: 0.3,
      clearProps: 'transform'
    })
    
    gsap.from('.neural-network', { 
      duration: isMobile ? 1.5 : 2.5, 
      scale: isMobile ? 0.8 : 0.7, 
      opacity: 0, 
      ease: 'power3.out', 
      delay: isMobile ? 0.5 : 0.7,
      clearProps: 'transform'
    })
    
    if (!isMobile) {
      gsap.to('.network-node', {
        duration: 4,
        scale: 'random(0.9, 1.1)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: { each: 0.3, from: 'random' }
      })
    } else {
      gsap.to('.network-node', {
        duration: 3,
        scale: 1.05,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.1
      })
    }

    gsap.fromTo('.title-text', 
      { opacity: 0, scale: 0.8, y: -30 },
      { opacity: 1, scale: 1, y: 0, duration: 1.6, ease: 'power4.out', delay: 0.3 }
    )

    ScrollTrigger.create({
      trigger: '.benefits-text-container',
      start: "top 75%",
      once: true,
      onEnter: () => {
        // Garantir que os benefit-items sejam visíveis
        gsap.set('.benefit-item', { opacity: 1, y: 0, visibility: 'visible' });
        
        // Aplicar animação mais suave
        gsap.fromTo('.benefit-item', 
          { scale: 0.98 },
          { 
            scale: 1, 
            duration: 0.8, 
            stagger: 0.12,
            ease: 'power2.out',
            clearProps: 'scale' 
          }
        );
        
        // Garantir que os elementos permaneçam visíveis após a animação
        setTimeout(() => {
          document.querySelectorAll('.benefit-item').forEach(el => {
            if (el instanceof HTMLElement) {
              el.style.opacity = '1';
              el.style.transform = 'none';
              el.style.visibility = 'visible';
            }
          });
        }, 2000);
      },
      markers: false,
      fastScrollEnd: true
    })

    ScrollTrigger.create({
      trigger: '.who-needs-help',
      start: "top 70%",
      once: true,
      onEnter: () => {
        createTitleAnimation('.section-title')
        createFadeInAnimation('.section-subtitle', 0.3)
        createFadeInAnimation('.business-item', 0.6, 0.1)
      },
      markers: false,
      fastScrollEnd: true
    })

    ScrollTrigger.create({
      trigger: '.help-section',
      start: "top 70%",
      once: true,
      onEnter: () => {
        createTitleAnimation('.help-title')
        createFadeInAnimation('.help-subtitle', 0.3)
        createFadeInAnimation('.situation-card', 0.6, 0.08)
      },
      markers: false,
      fastScrollEnd: true
    })

    ScrollTrigger.create({
      trigger: '.floating-help-cta',
      start: "top 75%",
      once: true,
      onEnter: () => {
        gsap.fromTo('.cta-text', 
          { opacity: 0, y: isMobile ? 15 : 25, scale: isMobile ? 0.97 : 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: isMobile ? 1 : 1.4, ease: 'power3.out' }
        )
        
        gsap.fromTo('.cta-description', 
          { opacity: 0, y: isMobile ? 10 : 20 },
          { opacity: 1, y: 0, duration: isMobile ? 0.8 : 1.2, ease: 'power2.out', delay: isMobile ? 0.1 : 0.2 }
        )
        
        gsap.fromTo('.section-divider', 
          { opacity: 0, scaleX: 0, transformOrigin: 'center' },
          { opacity: 1, scaleX: 1, duration: isMobile ? 1.2 : 1.8, ease: 'power3.out', delay: isMobile ? 0.3 : 0.6 }
        )

        // Garantir que os elementos permaneçam visíveis após a animação
        setTimeout(() => {
          document.querySelectorAll('.cta-text, .cta-description, .section-divider').forEach(el => {
            if (el instanceof HTMLElement) {
              el.style.opacity = '1';
              el.style.transform = 'none';
              el.style.visibility = 'visible';
            }
          });
        }, 2000);
      },
      markers: false,
      fastScrollEnd: true
    })
    
    ScrollTrigger.create({
      trigger: '.contact-section',
      start: "top 75%",
      once: true,
      onEnter: () => {
        createTitleAnimation('.contact-title')
        createFadeInAnimation('.contact-subtitle', 0.3)
        createFadeInAnimation('.contact-card', 0.6, 0.12)
      },
      markers: false,
      fastScrollEnd: true
    })

    ScrollTrigger.create({
      trigger: '.footer',
      start: "top 80%",
      once: true,
      onEnter: () => {
        createFadeInAnimation('.footer-logo', 0, 0, 'left')
        createFadeInAnimation('.footer-contact h3', 0.2, 0)
        createFadeInAnimation('.footer-contact p', 0.4, 0.1)
        createFadeInAnimation('.footer-social', 0.6, 0)
        createFadeInAnimation('.social-link', 0.8, 0.08)
        createFadeInAnimation('.footer-bottom', 1, 0)
      },
      markers: false,
      fastScrollEnd: true
    })
  }, [])

  return (
    <div className="app">
      <section className="hero">

        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Zonx
                <span className="gradient-text">AI Assistant</span>
              </h1>
                            <p className="hero-subtitle">
                Seu assistente inteligente para WhatsApp. Conversas naturais, respostas instantâneas e tecnologia de ponta.
              </p>
            </div>

            <div className="neural-network">
              <svg width="400" height="300" viewBox="0 0 400 300" className="network-svg">
                <defs>
                  <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#25D366" />
                    <stop offset="50%" stopColor="#128C7E" />
                    <stop offset="100%" stopColor="#075E54" />
                  </linearGradient>
                  <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#34B7F1" />
                    <stop offset="100%" stopColor="#0084FF" />
                  </linearGradient>
                </defs>

                <g className="network-connections">
                  <path d="M50,150 Q100,100 150,120 T250,100 T350,140" stroke="url(#networkGradient)" strokeWidth="2" fill="none" opacity="0.6"/>
                  <path d="M80,200 Q150,180 200,160 T300,180" stroke="url(#networkGradient)" strokeWidth="1.5" fill="none" opacity="0.4"/>
                  <path d="M120,80 Q180,60 240,80 T340,90" stroke="url(#networkGradient)" strokeWidth="1.5" fill="none" opacity="0.5"/>
                  <path d="M60,120 Q120,140 180,130 T280,150 T360,170" stroke="url(#networkGradient)" strokeWidth="2" fill="none" opacity="0.6"/>
                </g>

                <g className="network-nodes">
                  <circle cx="50" cy="150" r="8" fill="url(#nodeGradient)" className="network-node"/>
                  <circle cx="150" cy="120" r="6" fill="url(#nodeGradient)" className="network-node"/>
                  <circle cx="250" cy="100" r="7" fill="url(#nodeGradient)" className="network-node"/>
                  <circle cx="350" cy="140" r="8" fill="url(#nodeGradient)" className="network-node"/>
                  <circle cx="80" cy="200" r="5" fill="url(#nodeGradient)" className="network-node"/>
                  <circle cx="200" cy="160" r="6" fill="url(#nodeGradient)" className="network-node"/>
                  <circle cx="300" cy="180" r="7" fill="url(#nodeGradient)" className="network-node"/>
                  <circle cx="120" cy="80" r="6" fill="url(#nodeGradient)" className="network-node"/>
                  <circle cx="240" cy="80" r="5" fill="url(#nodeGradient)" className="network-node"/>
                  <circle cx="340" cy="90" r="7" fill="url(#nodeGradient)" className="network-node"/>
                  <circle cx="180" cy="130" r="4" fill="url(#nodeGradient)" className="network-node"/>
                  <circle cx="280" cy="150" r="6" fill="url(#nodeGradient)" className="network-node"/>
                  <circle cx="360" cy="170" r="8" fill="url(#nodeGradient)" className="network-node"/>
                </g>
              </svg>
            </div>
          </div>

          <div className="phone-mockup">
            <div className="phone-frame">
              <div className="phone-screen">
                <div className="status-bar">
                  <div className="status-left">
                    <span>9:41</span>
                    <div className="signal-bars">
                      <div className="bar"></div>
                      <div className="bar"></div>
                      <div className="bar"></div>
                      <div className="bar"></div>
                    </div>
                    <div className="wifi-icon"></div>
                  </div>
                  <div className="battery"></div>
                </div>

                <div className="chat-header">
                  <div className="contact-info">
                    <div className="avatar">
                      <img src={avatarImage} alt="Zonx" className="avatar-image" />
                    </div>
                    <div className="contact-details">
                      <div className="contact-name">Zonx Assistant</div>
                      <div className="status">online</div>
                    </div>
                  </div>
                  <div className="header-actions">
                    <svg className="action-icon" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    </svg>
                    <svg className="action-icon" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                    </svg>
                  </div>
                </div>
                
                <div className="chat-messages">
                  <div className="message user-message">
                    <div className="message-bubble">
                      Oi! Vocês têm iPhone 15 Pro disponível?
                    </div>
                    <span className="message-time">14:30</span>
                  </div>
                  
                  <div className="message bot-message">
                    <div className="message-bubble">
                      Olá! Sim, temos o iPhone 15 Pro em estoque nas cores Titânio Natural, Azul e Preto. Qual cor você prefere? 📱
                    </div>
                    <span className="message-time">14:30</span>
                  </div>
                  
                  <div className="message user-message">
                    <div className="message-bubble">
                      Qual o preço do modelo de 256GB azul?
                    </div>
                    <span className="message-time">14:31</span>
                  </div>
                  
                  <div className="message bot-message">
                    <div className="message-bubble">
                      O iPhone 15 Pro 256GB Azul está R$ 8.299,00 à vista ou 12x de R$ 691,58 sem juros no cartão! 💳
                    </div>
                    <span className="message-time">14:31</span>
                  </div>

                  <div className="message user-message">
                    <div className="message-bubble">
                      E a entrega para São Paulo, quanto tempo demora?
                    </div>
                    <span className="message-time">14:32</span>
                  </div>
                  
                  <div className="message bot-message">
                    <div className="message-bubble">
                      Para São Paulo capital, a entrega é em 1-2 dias úteis. Frete grátis para compras acima de R$ 5.000! 🚚
                    </div>
                    <span className="message-time">14:32</span>
                  </div>

                  <div className="message user-message">
                    <div className="message-bubble">
                      Vocês fazem troca? Tenho um iPhone 13
                    </div>
                    <span className="message-time">14:33</span>
                  </div>
                  
                  <div className="message bot-message">
                    <div className="message-bubble">
                      Sim! Fazemos avaliação do seu iPhone 13. Dependendo do estado, pode valer entre R$ 2.200 a R$ 2.800. Quer que eu faça uma pré-avaliação? 🔄
                    </div>
                    <span className="message-time">14:33</span>
                  </div>

                  <div className="message user-message">
                    <div className="message-bubble">
                      Perfeito! Como funciona a garantia?
                    </div>
                    <span className="message-time">14:34</span>
                  </div>
                  
                  <div className="message bot-message">
                    <div className="message-bubble">
                      Garantia Apple de 1 ano + nossa garantia estendida de 6 meses. Total de 18 meses de cobertura! 
                    </div>
                    <span className="message-time">14:34</span>
                  </div>

                  <div className="message user-message">
                    <div className="message-bubble">
                      Ótimo! Posso reservar e buscar na loja?
                    </div>
                    <span className="message-time">14:35</span>
                  </div>
                  
                  <div className="message bot-message">
                    <div className="message-bubble">
                      Claro! Vou reservar o iPhone 15 Pro 256GB Azul por 24h para você. Nossa loja fica na Rua Augusta, 1234. Horário: 9h às 18h 🏪
                    </div>
                    <span className="message-time">14:35</span>
                  </div>
                </div>

                <div className="input-area">
                  <input 
                    type="text" 
                    className="message-input" 
                    placeholder="Digite uma mensagem"
                    readOnly
                  />
                  <button className="send-button"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="floating-benefits">
        <div className="floating-container">
          <div className="floating-text main-title">
            <span className="title-text">
              Por que escolher a <span className="highlight">Zonx?</span>
            </span>
            <div className="title-underline"></div>
          </div>

          <div className="benefits-text-container">
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="benefit-content">
                <h3>Respostas Instantâneas</h3>
                <p>Atenda seus clientes em menos de 3 segundos, 24 horas por dia, sem pausas ou demoras.</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9.5 2A7.5 7.5 0 0 0 4 10c0 6 3.5 10 3.5 10s3.5-4 3.5-10a7.5 7.5 0 0 0-5.5-8z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M15.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 15h9l-2 7-7-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="benefit-content">
                <h3>IA Superinteligente</h3>
                <p>Nossa inteligência artificial aprende com cada conversa, oferecendo respostas cada vez mais precisas.</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="benefit-content">
                <h3>Economia de até 70%</h3>
                <p>Reduza drasticamente os custos operacionais mantendo a qualidade premium no atendimento.</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 12l3-3 3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="benefit-content">
                <h3>+200% de Conversões</h3>
                <p>Clientes atendidos rapidamente compram mais. Transforme cada conversa em oportunidade de venda.</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 21c0-1-1-3-3-3s-3 2-3 3 1 3 3 3 3-2 3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="benefit-content">
                <h3>Integração Perfeita</h3>
                <p>Conecta seamlessly com CRM, ERP e todos os sistemas que você já utiliza. Setup em minutos.</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="benefit-content">
                <h3>Suporte Dedicado</h3>
                <p>Equipe especializada disponível 24/7 para garantir que tudo funcione perfeitamente.</p>
              </div>
            </div>
          </div>


        </div>
      </section>

      <section className="who-needs-help">
        <div className="who-needs-container">
          <div className="section-header">
            <h2 className="section-title">
              Quem precisa da nossa <span className="highlight">ajuda?</span>
            </h2>
            <p className="section-subtitle">
              Transformamos a comunicação de negócios que precisam de velocidade e eficiência
            </p>
          </div>

          <div className="horizontal-business-list">
            <div className="business-item" data-title="E-commerce">
              <div className="business-circle">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 21v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span className="business-name">E-commerce</span>
              <div className="business-details">
                <h4>Lojas Online</h4>
                <p>Responda dúvidas sobre produtos, processe pedidos e dê suporte 24/7 automaticamente</p>
                <div className="results">
                  <span className="result-item">+300% vendas</span>
                  <span className="result-item">0s resposta</span>
                </div>
              </div>
            </div>

            <div className="business-item" data-title="Consultórios">
              <div className="business-circle">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span className="business-name">Consultórios</span>
              <div className="business-details">
                <h4>Clínicas & Saúde</h4>
                <p>Agende consultas, confirme horários e esclareça dúvidas médicas automaticamente</p>
                <div className="results">
                  <span className="result-item">-80% faltas</span>
                  <span className="result-item">Agenda automática</span>
                </div>
              </div>
            </div>

            <div className="business-item" data-title="Restaurantes">
              <div className="business-circle">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1" stroke="currentColor" strokeWidth="2"/>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" stroke="currentColor" strokeWidth="2"/>
                  <line x1="6" y1="1" x2="6" y2="4" stroke="currentColor" strokeWidth="2"/>
                  <line x1="10" y1="1" x2="10" y2="4" stroke="currentColor" strokeWidth="2"/>
                  <line x1="14" y1="1" x2="14" y2="4" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span className="business-name">Restaurantes</span>
              <div className="business-details">
                <h4>Food & Delivery</h4>
                <p>Receba pedidos, faça reservas e informe cardápio em tempo real</p>
                <div className="results">
                  <span className="result-item">+150% pedidos</span>
                  <span className="result-item">Zero erro</span>
                </div>
              </div>
            </div>

            <div className="business-item" data-title="Varejo">
              <div className="business-circle">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="3.27,6.96 12,12.01 20.73,6.96" stroke="currentColor" strokeWidth="2"/>
                  <line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span className="business-name">Varejo</span>
              <div className="business-details">
                <h4>Varejo & Atacado</h4>
                <p>Processe grandes volumes de consultas sobre estoque, preços e prazos</p>
                <div className="results">
                  <span className="result-item">-90% tempo</span>
                  <span className="result-item">Volume infinito</span>
                </div>
              </div>
            </div>

            <div className="business-item" data-title="Serviços">
              <div className="business-circle">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span className="business-name">Serviços</span>
              <div className="business-details">
                <h4>Prestadores de Serviço</h4>
                <p>Agende, orce e acompanhe trabalhos automaticamente</p>
                <div className="results">
                  <span className="result-item">+200% agendamentos</span>
                  <span className="result-item">Orçamento instantly</span>
                </div>
              </div>
            </div>

            <div className="business-item" data-title="Educação">
              <div className="business-circle">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span className="business-name">Educação</span>
              <div className="business-details">
                <h4>Escolas & Cursos</h4>
                <p>Informe sobre matrículas, horários e dê suporte aos alunos 24/7</p>
                <div className="results">
                  <span className="result-item">+400% matrículas</span>
                  <span className="result-item">Suporte 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="help-section">
        <div className="help-container">
          <div className="help-header">
            <h2 className="help-title">
              Esses <span className="highlight-zonx">problemas</span> afetam seu <span className="highlight-zonx">negócio?</span>
            </h2>

          </div>

          <div className="situations-grid">
            <div className="situation-card">
              <div className="situation-emoji"></div>
              <h3>Clientes abandonam o carrinho</h3>
              <p>Dúvidas sobre frete, pagamento e produtos ficam sem resposta, fazendo você perder vendas todos os dias</p>
            </div>

            <div className="situation-card">
              <div className="situation-emoji"></div>
              <h3>Funciona só no horário comercial</h3>
              <p>Clientes interessados tentam contato fora do expediente e acabam comprando da concorrência</p>
            </div>

            <div className="situation-card">
              <div className="situation-emoji"></div>
              <h3>Equipe sobrecarregada</h3>
              <p>Sua equipe gasta tempo demais respondendo as mesmas perguntas básicas repetidamente</p>
            </div>

            <div className="situation-card">
              <div className="situation-emoji"></div>
              <h3>Custos operacionais altos</h3>
              <p>Contratar e treinar atendentes custa caro, além dos salários e benefícios mensais</p>
            </div>

            <div className="situation-card">
              <div className="situation-emoji"></div>
              <h3>Atendimento não escala</h3>
              <p>Quanto mais clientes chegam, mais atendentes precisa contratar, aumentando custos exponencialmente</p>
            </div>
            <div className="situation-card">
              <div className="situation-emoji"></div>
              <h3>Baixas conversões</h3>
              <p>Demora para responder faz clientes desistirem e procurarem outras opções no mercado</p>
            </div>
          </div>
        </div>
      </section>
      <section className="floating-help-cta">
        <div className="help-cta-container">
          <div className="floating-text-content">
            <h3 className="cta-text">
              Se sua empresa enfrenta esses <span className="text-highlight">problemas</span>, 
              temos a <span className="text-highlight">solução perfeita</span>!
            </h3>
            <p className="cta-description">
              Transforme seu atendimento em uma máquina de vendas 24/7 com <strong>resultados em 48 horas</strong> garantidos. 
              Cada minuto perdido são vendas que não voltam mais!
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider">
        <div className="divider-line"></div>
      </div>

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-header">
            <h2 className="contact-title">
              Fale com a <span className="text-highlight">gente</span>
            </h2>
            <p className="contact-subtitle">
              Estamos prontos para transformar o atendimento da sua empresa. Entre em contato agora mesmo!
            </p>
          </div>
          
          <div className="contact-content">
            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M20.5023 3.49763C18.2724 1.26763 15.2325 0 11.9962 0C5.43962 0 0.0942497 5.34537 0.0942497 11.9019C0.0942497 13.9976 0.64712 16.0427 1.69274 17.8283L0 24L6.33549 22.3421C8.05461 23.2939 9.99999 23.7967 11.9915 23.7967H11.9962C18.5481 23.7967 24 18.4513 24 11.8949C24 8.66825 22.7322 5.72763 20.5023 3.49763ZM11.9962 21.7861H11.9915C10.2116 21.7861 8.46799 21.3013 6.96474 20.3861L6.60674 20.1746L2.85824 21.1353L3.83474 17.4815L3.60074 17.1094C2.58599 15.5411 2.05287 13.7509 2.05287 11.9019C2.05287 6.45188 6.54599 2.01063 12.0009 2.01063C14.6893 2.01063 17.1984 3.06563 19.0552 4.92238C20.9119 6.77913 22.0462 9.28825 22.0414 11.8949C22.0414 17.3496 17.4462 21.7861 11.9962 21.7861ZM17.4367 14.3949C17.1459 14.2484 15.6895 13.5346 15.4221 13.4391C15.1546 13.3436 14.9579 13.2959 14.7612 13.5867C14.5645 13.8776 14.0031 14.5436 13.8301 14.7403C13.657 14.937 13.484 14.9609 13.1932 14.8143C12.9023 14.6678 11.9419 14.3711 10.8087 13.3626C9.92024 12.5763 9.32599 11.6087 9.15299 11.3179C8.97999 11.027 9.13574 10.8659 9.28674 10.7167C9.42112 10.5817 9.58499 10.3659 9.73599 10.1929C9.88699 10.0198 9.93474 9.89775 10.0303 9.70113C10.1258 9.5045 10.078 9.33151 10.0064 9.18513C9.93474 9.03875 9.34524 7.58238 9.10174 7.00075C8.85824 6.41913 8.61474 6.51462 8.44174 6.51462C8.26874 6.51462 8.07212 6.49088 7.87549 6.49088C7.67887 6.49088 7.36349 6.56251 7.09599 6.85338C6.82849 7.14425 6.06787 7.85806 6.06787 9.31444C6.06787 10.7708 7.11974 12.1795 7.27074 12.3761C7.42174 12.5728 9.31949 15.4967 12.2309 16.7772C12.9262 17.0824 13.4695 17.2718 13.8961 17.4135C14.5979 17.6483 15.2374 17.6149 15.7425 17.5432C16.3051 17.4624 17.4939 16.8332 17.7374 16.1561C17.981 15.4789 17.981 14.8973 17.9095 14.7403C17.8379 14.5834 17.6412 14.5057 17.4367 14.3949Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3>WhatsApp</h3>
                <p>Resposta imediata</p>
                <a href="https://wa.me/5511999999999" className="contact-button">
                  Falar agora
                </a>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.88889 5C2.39797 5 2 5.39797 2 5.88889V18.1111C2 18.602 2.39797 19 2.88889 19H21.1111C21.602 19 22 18.602 22 18.1111V5.88889C22 5.39797 21.602 5 21.1111 5H2.88889ZM4.77778 7.66667C4.77778 7.17575 5.17575 6.77778 5.66667 6.77778H18.3333C18.8243 6.77778 19.2222 7.17575 19.2222 7.66667V8.55556L12 12.5556L4.77778 8.55556V7.66667ZM4.77778 10.4444L11.6667 14.2778C11.8661 14.3849 12.1339 14.3849 12.3333 14.2778L19.2222 10.4444V16.3333C19.2222 16.8243 18.8243 17.2222 18.3333 17.2222H5.66667C5.17575 17.2222 4.77778 16.8243 4.77778 16.3333V10.4444Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3>Email</h3>
                <p>Suporte técnico</p>
                <a href="mailto:contato@zonx.com.br" className="contact-button">
                  Enviar email
                </a>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7H11V13L16.2 16.2L17 14.9L12.5 12.2V7Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3>Horário</h3>
                <p>Atendimento</p>
                <span className="contact-info-text">
                  24/7 disponível
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-contact">
              <div className="footer-logo">
                <span className="footer-logo-text">Zonx<span className="footer-highlight">AI</span></span>
              </div>
              <h3>Entre em contato</h3>
              <p>contato@zonx.com.br</p>
              <p>(47) 99977-6326</p>
            </div>
            <div className="footer-social">
              <a href="https://linkedin.com/company/zonx-ai" className="social-link" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              <a href="https://www.instagram.com/zonx.tech/" className="social-link" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5932 15.1514 13.8416 15.5297C13.0901 15.9079 12.2385 16.0396 11.4078 15.9059C10.5771 15.7723 9.80977 15.3801 9.21485 14.7852C8.61993 14.1902 8.22774 13.4229 8.09408 12.5922C7.96042 11.7615 8.09208 10.9099 8.47034 10.1584C8.8486 9.40685 9.4542 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="16.5" cy="7.5" r="1.5" fill="currentColor"/>
                </svg>
                <span>Instagram</span>
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Zonx AI. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

    </div>
  )
}
export default App