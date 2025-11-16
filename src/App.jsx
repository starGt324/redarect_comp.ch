import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [timeLeft, setTimeLeft] = useState(120) // 2 minutes in seconds
  const targetUrl = 'https://comparatifsdevis.ch/'

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer)
          window.location.href = targetUrl
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleButtonClick = () => {
    window.location.href = targetUrl
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="landing-container">
      <div className="content-wrapper">
        <div className="logo-section">
          <div className="logo">
            <img src="/logo.svg" alt="comparatifsdevis.ch" className="logo-image" />
          </div>
        </div>

        <main className="main-content">
          <h1 className="main-title">
            🌱 Passez à l'énergie durable
          </h1>
          
          <p className="subtitle">
            Que vous soyez particulier ou entreprise, bénéficiez des aides et subventions suisses 
            pour vos panneaux solaires ou votre pompe à chaleur. Faites un geste pour la planète 
            tout en réduisant vos coûts énergétiques.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Réponse en 48h</h3>
              <p>Devis détaillés et personnalisés.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">✅</div>
              <h3>Prestataires certifiés</h3>
              <p>Vérifiés et notés par nos équipes.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Économies garanties</h3>
              <p>Aides cantonales et fédérales identifiées pour vous.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔓</div>
              <h3>Sans engagement</h3>
              <p>Vous gardez le contrôle, on vous accompagne.</p>
            </div>
          </div>

          <div className="cta-section">
            <button className="cta-button" onClick={handleButtonClick}>
              🚀 Accéder à comparatifsdevis.ch
            </button>
            
            <div className="timer-info">
              <p className="timer-text">
                Redirection automatique dans
              </p>
              <div className="timer-display">
                {formatTime(timeLeft)}
              </div>
            </div>
          </div>

          <div className="benefits-section">
            <p className="benefits-title">
              Recevez jusqu'à 4 devis gratuits de prestataires qualifiés en Suisse romande.
            </p>
            <p className="benefits-subtitle">
              Comparez, choisissez et économisez — facilement et sans engagement.
            </p>
          </div>
        </main>

        <footer className="footer">
          <p>✓ Service 100% gratuit et sans engagement ✓ Artisans vérifiés</p>
          <p className="contact-info">
            <a href="tel:+41798249001">📞 +41 79 824 90 01</a>
            <span className="separator">|</span>
            <a href="mailto:contact@comparatifsdevis.ch">✉️ contact@comparatifsdevis.ch</a>
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
