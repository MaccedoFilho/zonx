import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import './App.css'
import avatarImage from './assets/image.png'

function App() {
  useGSAP(() => {
    gsap.from('.hero-title', {
      duration: 1.2,
      opacity: 0,
      ease: 'power3.out',
      delay: 0.3
    })

    gsap.from('.hero-subtitle', {
      duration: 1,
      opacity: 0,
      ease: 'power2.out',
      delay: 0.6
    })

    gsap.from('.phone-mockup', {
      duration: 1.5,
      x: 100,
      opacity: 0,
      ease: 'power3.out',
      delay: 0.4
    })

    gsap.from('.neural-network', {
      duration: 2,
      scale: 0.8,
      opacity: 0,
      ease: 'elastic.out(1, 0.3)',
      delay: 0.8
    })



    gsap.to('.network-node', {
      duration: 3,
      scale: 'random(0.8, 1.2)',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: {
        each: 0.2,
        from: 'random'
      }
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
    </div>
  )
}

export default App
