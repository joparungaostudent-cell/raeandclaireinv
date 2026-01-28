import { useEffect, useState } from 'react'
import './App.css'

export default function App() {
  // State for active swatch index per dress group
  const [activeSponsorSwatch, setActiveSponsorSwatch] = useState(null);
  const [activeGuestSwatch, setActiveGuestSwatch] = useState(null);

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
          {/* <div className="detail-card">
            <h3> Ceremony Time</h3>
            <p>Sto. Niño Parish Church, CSFP</p>
            <p className="time">2:30 PM</p>
          </div>

          <div className="detail-card">
            <h3> Reception</h3>
            <p>The Orchids Garden, CSFP</p>
            <p className="time">5:00 PM</p>
          </div> */}

        
        </div>

        <h3 className="section-subheading">Locations</h3>
        <div className="locations-container">
          <div className="location-card">
            <h3>Church</h3>
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
            <h3>Reception</h3>
            <p>The Orchidarium Event Center</p>
            <a
              href="https://maps.app.goo.gl/gr9fPyT4UNahxjd48"
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
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpQ1wTFfHEjikUMs-2El8RSFG63etnvQFeD9UYYdINpLArOmDLNAjtRFG2Q-iqmKeU1xm3muZkclx8ONgZHhYy8ygaGZ1JFYA6uvug8UGDMuTB98Ok6iT1q3CX9oMCmiAi8dVOYt8ly_Y9XHBcYomo1tTNBsLa7k69Q023pSpk3kmuwOJVRb4vDX6KuYoY/w507-h507/barong.png"
                  alt="Barong/Long Gown"
                  style={{ cursor: 'pointer' }}
                  onClick={() => window.open('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpQ1wTFfHEjikUMs-2El8RSFG63etnvQFeD9UYYdINpLArOmDLNAjtRFG2Q-iqmKeU1xm3muZkclx8ONgZHhYy8ygaGZ1JFYA6uvug8UGDMuTB98Ok6iT1q3CX9oMCmiAi8dVOYt8ly_Y9XHBcYomo1tTNBsLa7k69Q023pSpk3kmuwOJVRb4vDX6KuYoY/w507-h507/barong.png', '_blank')}
                />
                <span className="dress-label">Gentlemen: Barong</span>
                <div className="color-swatches">
                  <div
                    className="color-swatch"
                    style={{ backgroundColor: '#F5F5DC' }}
                    title="Beige"
                    onClick={() => setActiveSponsorSwatch(activeSponsorSwatch === 0 ? null : 0)}
                  ></div>
                </div>
                {/* Swatch title for mobile */}
                {activeSponsorSwatch === 0 && (
                  <div className="swatch-title-mobile">Beige</div>
                )}
                <br></br>
                <span className="dress-label">Ladies: Long Gown</span>
                <p className="theme"></p>
                
            

                <div className="color-swatches">
                  <div
                    className="color-swatch"
                    style={{ backgroundColor: '#0041c0' }}
                    title="Royal"
                    onClick={() => setActiveSponsorSwatch(activeSponsorSwatch === 1 ? null : 1)}
                  ></div>
                  <div
                    className="color-swatch"
                    style={{ backgroundColor: '#0b1aa3' }}
                    title="Indigo"
                    onClick={() => setActiveSponsorSwatch(activeSponsorSwatch === 2 ? null : 2)}
                  ></div>
                  <div
                    className="color-swatch"
                    style={{ backgroundColor: '#002d83' }}
                    title="Sapphire"
                    onClick={() => setActiveSponsorSwatch(activeSponsorSwatch === 3 ? null : 3)}
                  ></div>
                  <div
                    className="color-swatch"
                    style={{ backgroundColor: '#1a1965' }}
                    title="Berry"
                    onClick={() => setActiveSponsorSwatch(activeSponsorSwatch === 4 ? null : 4)}
                  ></div>
                </div>
                {/* Swatch title for mobile */}
                {activeSponsorSwatch === 1 && (
                  <div className="swatch-title-mobile">Royal</div>
                )}
                {activeSponsorSwatch === 2 && (
                  <div className="swatch-title-mobile">Indigo</div>
                )}
                {activeSponsorSwatch === 3 && (
                  <div className="swatch-title-mobile">Sapphire</div>
                )}
                {activeSponsorSwatch === 4 && (
                  <div className="swatch-title-mobile">Berry</div>
                )}
              </div>
            </div>
          </div>
          <div className="dress-group">
            <h4 className="dress-category">Guests</h4>
            <div className="dress-code-gallery">
              <div className="dress-item reveal">
                
                <img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiH7nnfmYIJ4gK4AABNvym1byDbZjBg_aOukUgJoF8MM8FBafsp3HH5vn3ol78lBKrevfPhdO0WkWB2J8zeNdpastnRqLxhA84hzVxHTJ6nyCXHb6aXaIAW7iGZdXb2mZlnUR7tz-cKmymON5z3mqi4_Zpc1sN4cB1IxBkUL_UReYNoOeEpBMX2bDHhyphenhyphenHZO/w604-h604/suit.png"
                  alt="Suit/Dress"
                  style={{ cursor: 'pointer' }}
                  onClick={() => window.open('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiH7nnfmYIJ4gK4AABNvym1byDbZjBg_aOukUgJoF8MM8FBafsp3HH5vn3ol78lBKrevfPhdO0WkWB2J8zeNdpastnRqLxhA84hzVxHTJ6nyCXHb6aXaIAW7iGZdXb2mZlnUR7tz-cKmymON5z3mqi4_Zpc1sN4cB1IxBkUL_UReYNoOeEpBMX2bDHhyphenhyphenHZO/w604-h604/suit.png', '_blank')}
                />

                <span className="dress-label">Gentlemen: Suit / Barong</span>
                <div className="color-swatches">
                  <div
                    className="color-swatch"
                    style={{ backgroundColor: '#36454F' }}
                    title="Charcoal"
                    onClick={() => setActiveGuestSwatch(activeGuestSwatch === 0 ? null : 0)}
                  ></div>
                  <div
                    className="color-swatch"
                    style={{ backgroundColor: '#02075d' }}
                    title="Dark Navy"
                    onClick={() => setActiveGuestSwatch(activeGuestSwatch === 1 ? null : 1)}
                  ></div>
                  <div
                    className="color-swatch"
                    style={{ backgroundColor: '#000000' }}
                    title="Black"
                    onClick={() => setActiveGuestSwatch(activeGuestSwatch === 2 ? null : 2)}
                  ></div>
                </div>
                {/* Swatch title for mobile */}
                {activeGuestSwatch === 0 && (
                  <div className="swatch-title-mobile">Charcoal</div>
                )}
                {activeGuestSwatch === 1 && (
                  <div className="swatch-title-mobile">Dark Navy</div>
                )}
                {activeGuestSwatch === 2 && (
                  <div className="swatch-title-mobile">Black</div>
                )}
                <br></br>
                <span className="dress-label">Ladies: Long gown / Dress</span>
                <div className="color-swatches">
                  <div
                    className="color-swatch"
                    style={{ backgroundColor: '#00bff5' }}
                    title="Sky"
                    onClick={() => setActiveGuestSwatch(activeGuestSwatch === 3 ? null : 3)}
                  ></div>
                  <div
                    className="color-swatch"
                    style={{ backgroundColor: '#00e0fa' }}
                    title="Aqua"
                    onClick={() => setActiveGuestSwatch(activeGuestSwatch === 4 ? null : 4)}
                  ></div>
                  <div
                    className="color-swatch"
                    style={{ backgroundColor: '#0097e3' }}
                    title="Ocean"
                    onClick={() => setActiveGuestSwatch(activeGuestSwatch === 5 ? null : 5)}
                  ></div>
                  <div
                    className="color-swatch"
                    style={{ backgroundColor: '#00315b' }}
                    title="Navy"
                    onClick={() => setActiveGuestSwatch(activeGuestSwatch === 6 ? null : 6)}
                  ></div>
                </div>
                {/* Swatch title for mobile */}
                {activeGuestSwatch === 3 && (
                  <div className="swatch-title-mobile">Sky</div>
                )}
                {activeGuestSwatch === 4 && (
                  <div className="swatch-title-mobile">Aqua</div>
                )}
                {activeGuestSwatch === 5 && (
                  <div className="swatch-title-mobile">Ocean</div>
                )}
                {activeGuestSwatch === 6 && (
                  <div className="swatch-title-mobile">Navy</div>
                )}
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
              Rev.Fr. Victor Nicomedes S. Nicdao
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
        {/* Principal Sponsors block moved below timeline */}
      </section>
        
      {/* Principal Sponsors Section */}
      <section className="principal-sponsors-section reveal">
        <h2 className="schedule-title">Principal Sponsors</h2>
        <div className="sponsors-grid">
          <div className="sponsors-col sponsors-gentlemen">
            <h3 className="sponsors-col-title">Gentlemen</h3>
            <div className="sponsor-name">Regalado A. Cordova</div>
            <div className="sponsor-name">Raul Peter M. Santos</div>
            <div className="sponsor-name">Ronald S. Flores</div>
            <div className="sponsor-name">Arnel N. Puri</div>
            <div className="sponsor-name">Reginald N. Tiomico</div>
          </div>
          <div className="sponsors-col sponsors-ladies">
            <h3 className="sponsors-col-title">Ladies</h3>
            <div className="sponsor-name">Jocelyn C. Ballesteros</div>
            <div className="sponsor-name">Lucia C. Maniacup</div>
            <div className="sponsor-name">Maria Luisa B. Gonzales</div>
            <div className="sponsor-name">Ana Gloria C. Dizon</div>
            <div className="sponsor-name">Yolanda C. Barrera</div>
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
