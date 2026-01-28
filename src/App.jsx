import { useEffect, useState } from 'react'
import './App.css'

export default function App() {

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.15 }
    )

    reveals.forEach(el => observer.observe(el))
  }, [])

  const [navOpen, setNavOpen] = useState(false);
  const [zoomImg, setZoomImg] = useState(null);

  return (
    <div className="container">

      {/* Mobile nav overlay */}
      <div className={navOpen ? 'nav-overlay open' : 'nav-overlay'} onClick={() => setNavOpen(false)} />
      <nav className="navbar">
        <div className="nav-brand">
          <a href="#home" className="nav-couple">Rae & Claire</a>
        </div>
        <div className="nav-actions">
          <button
            className={`nav-hamburger${navOpen ? ' open' : ''}`}
            aria-label="Toggle navigation menu"
            onClick={() => setNavOpen(o => !o)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <div className={`nav-links${navOpen ? ' open' : ''}`}>
            <a href="#details" className="nav-link" onClick={() => setNavOpen(false)}>Details</a>
            <a href="#party" className="nav-link" onClick={() => setNavOpen(false)}>The Entourage</a>
            <a href="#rsvp" className="nav-link" onClick={() => setNavOpen(false)}>RSVP</a>
          </div>
        </div>
      </nav>

      <section className="hero reveal" id="home">
        <div className="hero-top-decor">
          <svg className="blue-flower-decoration" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g>
              <circle cx="50" cy="50" r="8" fill="#2c5aa0"/>
              <ellipse cx="50" cy="25" rx="6" ry="8" fill="#2c5aa0"/>
              <ellipse cx="70" cy="35" rx="6" ry="8" fill="#2c5aa0" transform="rotate(45 70 35)"/>
              <ellipse cx="75" cy="55" rx="6" ry="8" fill="#2c5aa0" transform="rotate(90 75 55)"/>
              <ellipse cx="65" cy="75" rx="6" ry="8" fill="#2c5aa0" transform="rotate(135 65 75)"/>
              <ellipse cx="45" cy="80" rx="6" ry="8" fill="#2c5aa0" transform="rotate(180 45 80)"/>
              <ellipse cx="25" cy="70" rx="6" ry="8" fill="#2c5aa0" transform="rotate(225 25 70)"/>
              <ellipse cx="20" cy="50" rx="6" ry="8" fill="#2c5aa0" transform="rotate(270 20 50)"/>
              <ellipse cx="30" cy="30" rx="6" ry="8" fill="#2c5aa0" transform="rotate(315 30 30)"/>
            </g>
          </svg>
        </div>

        <p className="ceremony-header">THE WEDDING CEREMONY OF</p>
        
        <div className="hero-names-wrapper">
          <div className="names-top">
            <span className="initial-large">R</span>
            <svg className="flower-divider" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M 50 70 Q 48 55 50 35" stroke="#1a3a52" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
              <path d="M 45 50 Q 40 45 35 40" stroke="#1a3a52" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
              <path d="M 55 50 Q 60 45 65 40" stroke="#1a3a52" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
              <path d="M 42 48 Q 38 42 35 35" stroke="#1a3a52" strokeWidth="1" fill="none" strokeLinecap="round"/>
              <path d="M 58 48 Q 62 42 65 35" stroke="#1a3a52" strokeWidth="1" fill="none" strokeLinecap="round"/>
              <path d="M 47 45 Q 45 38 45 30" stroke="#1a3a52" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
              <path d="M 53 45 Q 55 38 55 30" stroke="#1a3a52" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
            </svg>
            <span className="initial-large">C</span>
          </div>
          <div className="names-bottom">
            <span className="full-name">RAE</span>
            <span className="name-separator">AND</span>
            <span className="full-name">CLAIRE</span>
          </div>
        </div>

        <div className="formal-date-section">
          <div className="date-layout">
            <div className="date-left">
              <span className="date-day">SATURDAY</span>
              <div className="date-line"></div>
            </div>
            <div className="date-vertical-divider"></div>
            <div className="date-middle">
              <span className="date-month">MARCH</span>
              <span className="date-number">21</span>
              <span className="date-year">2026</span>
            </div>
            <div className="date-vertical-divider"></div>
            <div className="date-right">
              <div className="date-line"></div>
              <span className="date-time">2:30 PM</span>
            </div>
          </div>
        </div>

        <div className="ceremony-venues">
          <p className="venue-church">Sto. Niño Parish Church, CSFP</p>
          <p className="venue-reception">The Orchids Garden</p>
        </div>

        
          
        
      </section>

      <section className="reveal" id="details">
        <h2>Wedding Details</h2>

        <div className="details-grid">
          <div className="detail-card">
            <h3> Ceremony Time</h3>
            <p>Sto. Niño Parish Church, CSFP</p>
            <p className="time">2:30 PM</p>
          </div>

          <div className="detail-card">
            <h3> Reception</h3>
            <p>The Orchids Garden, CSFP</p>
            <p className="time">5:00 PM</p>
          </div>

        
        </div>

        <h3 className="section-subheading">Locations</h3>
        <div className="locations-container">
          <div className="location-card">
            <h3>Church Location</h3>
            <p>Sto. Niño Parish Church, CSFP</p>
            <a
              href="https://maps.google.com/maps/search/Sto.+Niño+Parish+Church+CSFP"
              target="_blank"
              className="button"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="location-card">
            <h3>Reception Location</h3>
            <p>The Orchids Garden, CSFP</p>
            <a
              href="https://maps.google.com/maps/search/The+Orchids+Garden+CSFP"
              target="_blank"
              className="button"
            >
              Open in Google Maps
            </a>
          </div>
        </div>

        <h3 className="section-subheading">Wedding Attire: Strictly Formal</h3>
        <div className="dress-code-container">
          <div className="dress-group">
            <h4 className="dress-category">Principal Sponsors</h4>
            <div className="dress-code-gallery">
              <div className="dress-item reveal">
                <img
                  src="./src/assets/barong.png"
                  alt="Barong/Long Gown"
                  style={{ cursor: 'pointer' }}
                  onClick={() => window.open('./src/assets/barong.png', '_blank')}
                />
                <span className="dress-label">Barong & Long Gown</span>
                <p className="theme"></p>
            

               <div className="color-swatches">
              <div className="color-swatch" style={{backgroundColor: '#2840b1'}} title="Dark Navy"></div>
              <div className="color-swatch" style={{backgroundColor: '#1f1f96'}} title="Medium Navy"></div>
              <div className="color-swatch" style={{backgroundColor: '#1d2e78'}} title="Light Navy"></div>
              <div className="color-swatch" style={{backgroundColor: '#221f60'}} title="Sky Navy"></div>
            </div>
              </div>
            </div>
          </div>
          <div className="dress-group">
            <h4 className="dress-category">Guests</h4>
            <div className="dress-code-gallery">
              <div className="dress-item reveal">
                <img
                  src="./src/assets/suit.png"
                  alt="Suit/Dress"
                  style={{ cursor: 'pointer' }}
                  onClick={() => window.open('./src/assets/suit.png', '_blank')}
                />
                <span className="dress-label">Suit & Dress</span>
                <div className="color-swatches">
              <div className="color-swatch" style={{backgroundColor: '#8FD3F4'}} title="Dark Navy"></div>
              <div className="color-swatch" style={{backgroundColor: '#6BB6E8'}} title="Medium Navy"></div>
              <div className="color-swatch" style={{backgroundColor: '#4A90D9'}} title="Light Navy"></div>
              <div className="color-swatch" style={{backgroundColor: '#1F3A5F'}} title="Sky Navy"></div>
            </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for zoomed image */}
        {zoomImg && (
          <div
            className="zoom-modal"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0,0,0,0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2000,
              cursor: 'zoom-out',
            }}
            onClick={() => setZoomImg(null)}
          >
            <img
              src={zoomImg}
              alt="Zoomed Dress Code"
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                borderRadius: 12,
                boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
                transition: 'transform 0.3s',
                transform: 'scale(1.1)',
                background: '#fff',
                padding: 8,
              }}
            />
          </div>
        )}
      </section>

      <section className="schedule reveal" id="party">
        <h2 className="schedule-title">The Entourage</h2>

        <div className="timeline">
          <div className="timeline-item right reveal">
           
            <h3 className="timeline-title">Officiating Priest</h3>
            <p className="timeline-desc">
              Rev.Fr. Victor Nicomendes S. Nicdao
            </p>
          </div>

          <div className="timeline-item left reveal">
            
            <h3 className="timeline-title">Parents of the Groom</h3>
            <p className="timeline-desc">
              Remando A. Cordova<br />
              Cristina L. Cordova
            </p>
          </div>

          <div className="timeline-item right reveal">
         
            <h3 className="timeline-title">Parents of the Bride</h3>
            <p className="timeline-desc">
              Joann N. Tiomico<br />
              Clarita L. Tiomico
            </p>
          </div>

          <div className="timeline-item left reveal">
            
            <h3 className="timeline-title">Man of Honor</h3>
            <p className="timeline-desc">
              Jeremiah L. Tiomico
            </p>
          </div>

          <div className="timeline-item right reveal">
            
            <h3 className="timeline-title">Best Woman</h3>
            <p className="timeline-desc">
              Czarina Mae L. Cordova
            </p>
          </div>

          
        </div>
      </section>

      <section className="reveal" id="rsvp">
        <h2>RSVP</h2>
        <div className="rsvp-details-block">
          <h3 className="rsvp-gift-title">Note on Gifts</h3>
          <p className="rsvp-gift-message">
           With all that we have, we've been truly blessed. Your presence and prayers are all that we request. But, if you desire to give nonetheless, a monetary gift is one we suggest.
          </p>
          <h3 className="rsvp-info-title">RSVP</h3>
          <p className="rsvp-info-message">
            We hope you can celebrate with us on this wonderful moment in our lives. Kindly respond by until March 1, 2026.<br />
            <strong>Invited guests only.</strong><br />
            Please contact us thru our Facebook Messenger.
          </p>
        </div>
       
      </section>

      <footer className="reveal">
        <p>With love and joy,</p>
        <h3>Rae & Claire</h3>
        <p className="footer-date">March 21, 2026</p>
      </footer>

    </div>
  )
}
