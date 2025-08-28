import React, { useState, useEffect } from 'react';
import { Shield, Upload, Eye, Lock, Globe, Mail, Phone, Twitter, Facebook, Instagram, Linkedin, ArrowRight, CheckCircle, Zap, Database, Search, Cpu, FileCheck, Code, Terminal, Brackets, Hash } from 'lucide-react';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  const rollingFacts = [
    "Advanced AI-powered deepfake detection technology",
    "Privacy-first approach with zero data retention", 
    "Real-time verification and analysis",
    "Secure and encrypted processing",
    "Trusted by security professionals worldwide"
  ];

  const features = [
    "AI Detection",
    "Privacy Protection", 
    "Real-time Analysis",
    "Zero Data Storage",
    "Enterprise Security"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % rollingFacts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Subtle Animated Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="circuit-pattern"></div>
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>
        <div className="grid-overlay"></div>
        <div className="matrix-rain">
          {[...Array(50)].map((_, i) => (
            <div key={i} className={`rain-drop drop-${i + 1}`}>
              {Math.random().toString(36).substring(7)}
            </div>
          ))}
        </div>
      </div>

      {/* Header */}
      <nav className="navbar-animated relative z-10 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="logo-container-new">
            <div className="logo-wrapper">
              <div className="logo-brackets">
                <span className="bracket-left">{'<'}</span>
                <div className="logo-core">
                  <div className="logo-shield-new">
                    <Shield className="shield-icon-new" size={24} />
                  </div>
                  <div className="logo-text-horizontal">
                    <span className="logo-slash">/</span>
                    <span className="logo-veri-new">VERI</span>
                    <span className="logo-dot">.</span>
                    <span className="logo-fact-new">FACT</span>
                  </div>
                </div>
                <span className="bracket-right">{'>'}</span>
              </div>
              <div className="logo-subtitle">
                <Terminal size={12} />
                <span>TRUTH_VERIFICATION_PROTOCOL.exe</span>
              </div>
            </div>
          </div>
          
         <div className="flex items-center gap-6">
  <button className="upload-btn">
    <Upload size={18} />
    Upload Media
  </button>

  <button className="disposable-browser-btn">
    <Globe size={18} />
    Disposable Browser
  </button>

  <button 
    className="login-btn"
    onClick={() => setIsLoginModalOpen(true)}
  >
    <Code size={16} />
    Login
  </button>
</div></nav>          



      {/* Rolling Facts Banner */}
      <div className="rolling-facts-container relative z-10 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border-y border-white/10">
        <div className="rolling-facts-content">
          <div className="fact-indicator">
            <Hash className="fact-icon" size={18} />
          </div>
          <div className="scrolling-wrapper">
            <span className="rolling-text-tech">
              <span className="terminal-prompt">root@verifact:~$</span>
              <span className="command-text">{rollingFacts[currentFactIndex]}</span>
            </span>
          </div>
          <div className="fact-dots">
            {rollingFacts.map((_, index) => (
              <div 
                key={index} 
                className={`dot ${index === currentFactIndex ? 'active' : ''}`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-section relative z-10 container mx-auto px-6 py-20">
        <div className="hero-content">
          <div className="hero-image">
            <div className="image-container">
              <div className="ai-visualization">
                <div className="scanning-grid">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className={`grid-cell cell-${i + 1}`}>
                      <div className="cell-content">
                        <span>{Math.random() > 0.5 ? '1' : '0'}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="central-processor">
                  <Cpu className="processor-icon" size={40} />
                  <div className="processor-rings">
                    <div className="ring ring-1"></div>
                    <div className="ring ring-2"></div>
                    <div className="ring ring-3"></div>
                  </div>
                  <div className="tech-indicators">
                    <div className="indicator indicator-1">AI</div>
                    <div className="indicator indicator-2">ML</div>
                    <div className="indicator indicator-3">DL</div>
                  </div>
                </div>
                <div className="data-streams">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className={`stream stream-${i + 1}`}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-word">
                <span className="code-bracket">{'<'}</span>
                Detect
                <span className="code-bracket">{'/>'}</span>
              </span>
              <span className="title-word">
                <span className="code-bracket">{'<'}</span>
                Verify
                <span className="code-bracket">{'/>'}</span>
              </span>
              <span className="title-word">
                <span className="code-bracket">{'<'}</span>
                Trust
                <span className="code-bracket">{'/>'}</span>
              </span>
            </h1>
            <div className="hero-description-wrapper">
              <div className="command-line">
                <span className="prompt">verifact@security:~$</span>
                <span className="command">init --protection-mode</span>
              </div>
              <p className="hero-description">
                VeriFact helps you verify information, detect deepfakes, and separate fact from fiction. 
                Stay informed, stay confident and never fall for false content again.
              </p>
            </div>
            <div className="hero-features">
              {features.map((feature, index) => (
                <span key={index} className="feature-tag">
                  <CheckCircle size={14} />
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="section-header">
            <div className="terminal-header">
              <Terminal size={20} />
              <span>./services --list-all</span>
            </div>
            <h2 className="section-title">What We Provide</h2>
          </div>
          
          <div className="services-horizontal-scroll">
            <div className="services-track">
              <div className="service-card card-1">
                <div className="service-header">
                  <div className="service-icon">
                    <Eye size={28} />
                    <div className="icon-glow"></div>
                  </div>
                  <div className="service-number">01</div>
                </div>
                <h3>Deepfake Detection</h3>
                <p>Identify fake and altered content using advanced AI models that spot manipulations in videos and images.</p>
                <div className="tech-stack">
                  <span>AI/ML</span>
                  <span>Computer Vision</span>
                  <span>Neural Networks</span>
                </div>
                <div className="card-border"></div>
              </div>

              <div className="service-card card-2">
                <div className="service-header">
                  <div className="service-icon">
                    <Globe size={28} />
                    <div className="icon-glow"></div>
                  </div>
                  <div className="service-number">02</div>
                </div>
                <h3>Disposable Browser & Auto Data Clearance</h3>
                <p>A temporary browser that clears history, cookies, and cache automatically once the session ends—keeping your activity private.</p>
                <div className="tech-stack">
                  <span>Privacy Tech</span>
                  <span>Auto-Clear</span>
                  <span>Secure Browsing</span>
                </div>
                <div className="card-border"></div>
              </div>

              <div className="service-card card-3">
                <div className="service-header">
                  <div className="service-icon">
                    <FileCheck size={28} />
                    <div className="icon-glow"></div>
                  </div>
                  <div className="service-number">03</div>
                </div>
                <h3>GDPR/CCPA Compliance</h3>
                <p>We strictly follow international privacy laws to safeguard user data, maintain transparency, and protect individual rights.</p>
                <div className="tech-stack">
                  <span>Legal Compliance</span>
                  <span>Data Protection</span>
                  <span>Privacy Rights</span>
                </div>
                <div className="card-border"></div>
              </div>

              <div className="service-card card-4">
                <div className="service-header">
                  <div className="service-icon">
                    <Lock size={28} />
                    <div className="icon-glow"></div>
                  </div>
                  <div className="service-number">04</div>
                </div>
                <h3>Data Privacy & Protection</h3>
                <p>We ensure sensitive data stays safe with encryption and strict access control.</p>
                <div className="tech-stack">
                  <span>Encryption</span>
                  <span>Zero Trust</span>
                  <span>Secure Access</span>
                </div>
                <div className="card-border"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="why-section relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="why-content">
            <div className="why-text">
              <div className="terminal-prompt-section">
                <span className="terminal-line">
                  <span className="prompt-symbol">$</span>
                  <span className="command">cat /var/log/misinformation.log</span>
                </span>
              </div>
              <h2 className="section-heading">Why It Matters?</h2>
              <p className="section-para">
                False information spreads faster than the truth. Deepfakes and fake news can mislead people, 
                damage reputations, and even influence important decisions. VeriFact gives you the power to 
                check what's real; So you can make choices with confidence.
              </p>
            </div>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">73%</div>
                <div className="stat-label">Faster Fake Spread</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">2.5x</div>
                <div className="stat-label">More Engagement</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">99.7%</div>
                <div className="stat-label">Detection Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-section relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="terminal-header-section">
            <Code size={24} />
            <h2 className="main-heading">./execute_verification_protocol.sh</h2>
          </div>
          
          <div className="steps-container">
            <div className="step">
              <div className="step-number">
                <span>01</span>
                <div className="number-glow"></div>
                <div className="step-connector"></div>
              </div>
              <div className="step-content">
                <h3>Initialize_Account()</h3>
                <p>Register in seconds and unlock VeriFact's security protocols</p>
                <div className="code-snippet">
                  <span>user.create() → authenticated</span>
                </div>
              </div>
            </div>
            
            <div className="step-arrow">
              <ArrowRight size={24} />
              <div className="arrow-trail"></div>
            </div>
            
            <div className="step">
              <div className="step-number">
                <span>02</span>
                <div className="number-glow"></div>
                <div className="step-connector"></div>
              </div>
              <div className="step-content">
                <h3>Upload_Media()</h3>
                <p>Securely upload any image or video for AI-powered analysis</p>
                <div className="code-snippet">
                  <span>media.upload() → processing</span>
                </div>
              </div>
            </div>
            
            <div className="step-arrow">
              <ArrowRight size={24} />
              <div className="arrow-trail"></div>
            </div>
            
            <div className="step">
              <div className="step-number">
                <span>03</span>
                <div className="number-glow"></div>
              </div>
              <div className="step-content">
                <h3>Analyze_Result()</h3>
                <p>Get instant AI-powered verification results with confidence scores</p>
                <div className="code-snippet">
                  <span>ai.verify() → truth_score</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="footer-section relative z-10 bg-black/40 backdrop-blur-lg border-t border-white/20">
        <div className="container mx-auto px-6 py-16">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo-new">
                <div className="footer-brackets">
                  <span className="footer-bracket-left">{'<'}</span>
                  <div className="footer-logo-core">
                    <div className="footer-shield-new">
                      <Shield size={20} />
                    </div>
                    <div className="footer-logo-text-horizontal">
                      <span className="footer-slash">/</span>
                      <span className="footer-veri-new">VERI</span>
                      <span className="footer-dot">.</span>
                      <span className="footer-fact-new">FACT</span>
                    </div>
                  </div>
                  <span className="footer-bracket-right">{'>'}</span>
                </div>
              </div>
              <p className="footer-description">
                Leading the fight against misinformation with cutting-edge AI technology and advanced security protocols.
              </p>
              <div className="social-links">
                <a href="#" className="social-link"><Twitter size={18} /></a>
                <a href="#" className="social-link"><Facebook size={18} /></a>
                <a href="#" className="social-link"><Instagram size={18} /></a>
                <a href="#" className="social-link"><Linkedin size={18} /></a>
              </div>
            </div>

            <div className="footer-links">
              <div className="link-group">
                <h4># Quick Links</h4>
                <a href="#">→ Home</a>
                <a href="#">→ About Us</a>
                <a href="#">→ How It Works</a>
                <a href="#">→ Features</a>
              </div>

              <div className="link-group">
                <h4># Security Features</h4>
                <a href="#">→ Deepfake Detection</a>
                <a href="#">→ Privacy Browser</a>
                <a href="#">→ GDPR Compliance</a>
                <a href="#">→ Enterprise Solutions</a>
              </div>

              <div className="link-group">
                <h4># Support</h4>
                <a href="#">→ Help Center</a>
                <a href="#">→ Documentation</a>
                <a href="#">→ Contact Support</a>
                <a href="#">→ FAQ</a>
              </div>

              <div className="link-group">
                <h4># Contact</h4>
                <div className="contact-info">
                  <div className="contact-item">
                    <Mail size={14} />
                    <span>security@verifact.com</span>
                  </div>
                  <div className="contact-item">
                    <Globe size={14} />
                    <span>www.verifact.com</span>
                  </div>
                  <div className="contact-item">
                    <Phone size={14} />
                    <span>+1 (555) VERIFY-1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="copyright">
              <Terminal size={14} />
              <p>© 2025 VeriFact Security Systems. All rights reserved. | Build: v2.1.3</p>
            </div>
            <div className="legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Security Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Login/Signup Modal */}
      {isLoginModalOpen && (
        <div className="modal-overlay" onClick={() => setIsLoginModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setIsLoginModalOpen(false)}
            >
              ×
            </button>

            {!isSignup ? (
              <div className="auth-form">
                <div className="auth-header">
                  <Terminal size={20} />
                  <h2>Access Terminal</h2>
                </div>
                <div className="command-line-input">
                  <span className="input-prompt">email@verifact:~$</span>
                  <input type="email" placeholder="Enter your email" />
                </div>
                <div className="command-line-input">
                  <span className="input-prompt">password:~$</span>
                  <input type="password" placeholder="Enter secure password" />
                </div>
                <button className="auth-submit">
                  <Code size={16} />
                  Initialize Session
                </button>
                <p>New user? 
                  <button 
                    className="auth-switch"
                    onClick={() => setIsSignup(true)}
                  >
                    Create Account
                  </button>
                </p>
              </div>
            ) : (
              <div className="auth-form">
                <div className="auth-header">
                  <Terminal size={20} />
                  <h2>Create Security Profile</h2>
                </div>
                <div className="command-line-input">
                  <span className="input-prompt">name:~$</span>
                  <input type="text" placeholder="Full Name" />
                </div>
                <div className="command-line-input">
                  <span className="input-prompt">email:~$</span>
                  <input type="email" placeholder="Email Address" />
                </div>
                <div className="command-line-input">
                  <span className="input-prompt">passwd:~$</span>
                  <input type="password" placeholder="Secure Password" />
                </div>
                <button className="auth-submit">
                  <Shield size={16} />
                  Deploy Account
                </button>
                <p>Existing user? 
                  <button 
                    className="auth-switch"
                    onClick={() => setIsSignup(false)}
                  >
                    Access Terminal
                  </button>
                </p>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

export default App;