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
              Login
              className="login-btn"
              onClick={() => setIsLoginModalOpen(true)}
            >
              <Code size={16} />
              Login
            </button>
          </div>
          </div>
        </div>
      </nav>

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

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700;800&family=Orbitron:wght@400;500;700;900&family=Fira+Code:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

        /* Global Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }

        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 15px rgba(139, 92, 246, 0.3); }
          50% { box-shadow: 0 0 25px rgba(139, 92, 246, 0.6); }
        }

        @keyframes scan {
          0% { transform: scale(0.8) rotate(0deg); opacity: 0.5; }
          50% { transform: scale(1.1) rotate(180deg); opacity: 1; }
          100% { transform: scale(0.8) rotate(360deg); opacity: 0.5; }
        }

        @keyframes particleFloat {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-15px) translateX(5px); }
          50% { transform: translateY(-5px) translateX(-5px); }
          75% { transform: translateY(-10px) translateX(3px); }
        }

        @keyframes borderGlow {
          0%, 100% { border-color: rgba(139, 92, 246, 0.3); }
          50% { border-color: rgba(139, 92, 246, 0.8); }
        }

        @keyframes streamFlow {
          0% { transform: translateX(-100%) scaleX(0); }
          50% { transform: translateX(0%) scaleX(1); }
          100% { transform: translateX(100%) scaleX(0); }
        }

        @keyframes matrixRain {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }

        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink {
          50% { border-color: transparent; }
        }

        @keyframes scrollHorizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }

        /* Background Elements */
        .circuit-pattern {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.1) 0%, transparent 50%);
          background-size: 400px 400px;
          animation: float 20s infinite ease-in-out;
        }

        .floating-particles {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
        }

        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: linear-gradient(45deg, #8B5CF6, #06B6D4);
          border-radius: 50%;
          animation: particleFloat 15s infinite ease-in-out;
        }

        .particle-1 { top: 10%; left: 10%; animation-delay: 0s; }
        .particle-2 { top: 20%; left: 80%; animation-delay: 2s; }
        .particle-3 { top: 60%; left: 15%; animation-delay: 4s; }
        .particle-4 { top: 80%; left: 70%; animation-delay: 6s; }
        .particle-5 { top: 30%; left: 60%; animation-delay: 8s; }
        .particle-6 { top: 70%; left: 30%; animation-delay: 10s; }
        .particle-7 { top: 15%; left: 40%; animation-delay: 1s; }
        .particle-8 { top: 85%; left: 20%; animation-delay: 3s; }
        .particle-9 { top: 40%; left: 85%; animation-delay: 5s; }
        .particle-10 { top: 55%; left: 5%; animation-delay: 7s; }
        .particle-11 { top: 25%; left: 25%; animation-delay: 9s; }
        .particle-12 { top: 75%; left: 75%; animation-delay: 11s; }
        .particle-13 { top: 5%; left: 65%; animation-delay: 1.5s; }
        .particle-14 { top: 95%; left: 45%; animation-delay: 3.5s; }
        .particle-15 { top: 35%; left: 10%; animation-delay: 5.5s; }
        .particle-16 { top: 65%; left: 90%; animation-delay: 7.5s; }
        .particle-17 { top: 45%; left: 35%; animation-delay: 9.5s; }
        .particle-18 { top: 85%; left: 55%; animation-delay: 11.5s; }
        .particle-19 { top: 15%; left: 75%; animation-delay: 2.5s; }
        .particle-20 { top: 75%; left: 15%; animation-delay: 4.5s; }

        .grid-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: 
            linear-gradient(rgba(0, 255, 127, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 127, 0.02) 1px, transparent 1px);
          background-size: 60px 60px;
          opacity: 0.6;
        }

        .matrix-rain {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .rain-drop {
          position: absolute;
          color: rgba(0, 255, 127, 0.3);
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
          animation: matrixRain 8s linear infinite;
        }

        .drop-1 { left: 2%; animation-delay: 0s; }
        .drop-2 { left: 6%; animation-delay: 1s; }
        .drop-3 { left: 12%; animation-delay: 2s; }
        .drop-4 { left: 18%; animation-delay: 0.5s; }
        .drop-5 { left: 25%; animation-delay: 1.5s; }
        .drop-6 { left: 32%; animation-delay: 3s; }
        .drop-7 { left: 38%; animation-delay: 2.5s; }
        .drop-8 { left: 45%; animation-delay: 4s; }
        .drop-9 { left: 52%; animation-delay: 3.5s; }
        .drop-10 { left: 58%; animation-delay: 5s; }
        .drop-11 { left: 65%; animation-delay: 4.5s; }
        .drop-12 { left: 72%; animation-delay: 6s; }
        .drop-13 { left: 78%; animation-delay: 5.5s; }
        .drop-14 { left: 85%; animation-delay: 7s; }
        .drop-15 { left: 92%; animation-delay: 6.5s; }
        .drop-16 { left: 8%; animation-delay: 7.5s; }
        .drop-17 { left: 15%; animation-delay: 8s; }
        .drop-18 { left: 22%; animation-delay: 8.5s; }
        .drop-19 { left: 35%; animation-delay: 9s; }
        .drop-20 { left: 42%; animation-delay: 9.5s; }
        .drop-21 { left: 48%; animation-delay: 10s; }
        .drop-22 { left: 55%; animation-delay: 10.5s; }
        .drop-23 { left: 62%; animation-delay: 11s; }
        .drop-24 { left: 68%; animation-delay: 11.5s; }
        .drop-25 { left: 75%; animation-delay: 12s; }
        .drop-26 { left: 82%; animation-delay: 12.5s; }
        .drop-27 { left: 88%; animation-delay: 13s; }
        .drop-28 { left: 95%; animation-delay: 13.5s; }
        .drop-29 { left: 10%; animation-delay: 14s; }
        .drop-30 { left: 20%; animation-delay: 14.5s; }
        .drop-31 { left: 30%; animation-delay: 15s; }
        .drop-32 { left: 40%; animation-delay: 15.5s; }
        .drop-33 { left: 50%; animation-delay: 16s; }
        .drop-34 { left: 60%; animation-delay: 16.5s; }
        .drop-35 { left: 70%; animation-delay: 17s; }
        .drop-36 { left: 80%; animation-delay: 17.5s; }
        .drop-37 { left: 90%; animation-delay: 18s; }
        .drop-38 { left: 4%; animation-delay: 18.5s; }
        .drop-39 { left: 14%; animation-delay: 19s; }
        .drop-40 { left: 24%; animation-delay: 19.5s; }
        .drop-41 { left: 34%; animation-delay: 20s; }
        .drop-42 { left: 44%; animation-delay: 20.5s; }
        .drop-43 { left: 54%; animation-delay: 21s; }
        .drop-44 { left: 64%; animation-delay: 21.5s; }
        .drop-45 { left: 74%; animation-delay: 22s; }
        .drop-46 { left: 84%; animation-delay: 22.5s; }
        .drop-47 { left: 94%; animation-delay: 23s; }
        .drop-48 { left: 16%; animation-delay: 23.5s; }
        .drop-49 { left: 26%; animation-delay: 24s; }
        .drop-50 { left: 36%; animation-delay: 24.5s; }

        /* Header - Enhanced Logo */
        .navbar-animated {
          backdrop-filter: blur(20px);
          transition: all 0.3s ease;
        }

        .logo-container-new {
          position: relative;
        }

        .logo-wrapper {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .logo-brackets {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 1.4rem;
          font-weight: 700;
        }

        .bracket-left, .bracket-right {
          color: #00FF7F;
          text-shadow: 0 0 10px rgba(0, 255, 127, 0.5);
          animation: pulse 2s infinite;
        }

        .logo-core {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .logo-shield-new {
          position: relative;
          padding: 6px;
          background: linear-gradient(45deg, #8B5CF6, #06B6D4);
          border-radius: 6px;
          animation: glow 3s infinite;
        }

        .shield-icon-new {
          color: white;
        }

        .logo-text-horizontal {
          display: flex;
          align-items: center;
          font-family: 'Orbitron', monospace;
          font-weight: 900;
        }

        .logo-slash {
          color: #00FF7F;
          font-size: 1.6rem;
          margin-right: 4px;
          text-shadow: 0 0 10px rgba(0, 255, 127, 0.5);
        }

        .logo-veri-new {
          color: #06B6D4;
          font-size: 1.6rem;
          text-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
        }

        .logo-dot {
          color: #FBBF24;
          font-size: 1.6rem;
          margin: 0 2px;
          text-shadow: 0 0 10px rgba(251, 191, 36, 0.5);
        }

        .logo-fact-new {
          color: #8B5CF6;
          font-size: 1.6rem;
          text-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
        }

        .logo-subtitle {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          color: #00FF7F;
          margin-top: 4px;
          margin-left: 8px;
          opacity: 0.8;
          letter-spacing: 0.5px;
        }

        .upload-btn, .login-btn {
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          position: relative;
          overflow: hidden;
        }

        .upload-btn {
          background: linear-gradient(45deg, #06B6D4, #8B5CF6);
          color: white;
        }

        .login-btn {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(0, 255, 127, 0.3);
        }

        .upload-btn:hover, .login-btn:hover, .disposable-browser-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        .login-btn:hover {
          border-color: rgba(0, 255, 127, 0.6);
          box-shadow: 0 0 20px rgba(0, 255, 127, 0.2);
        }

        /* Rolling Facts */
        .rolling-facts-container {
          padding: 12px 0;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.3);
        }

        .rolling-facts-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          animation: slideInUp 0.5s ease;
        }

        .fact-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: linear-gradient(45deg, #00FF7F, #06B6D4);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .fact-icon {
          color: white;
        }

        .scrolling-wrapper {
          overflow: hidden;
        }

        .rolling-text-tech {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.95rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 12px;
          animation: slideInUp 0.5s ease;
        }

        .terminal-prompt {
          color: #00FF7F;
          text-shadow: 0 0 10px rgba(0, 255, 127, 0.5);
        }

        .command-text {
          color: white;
        }

        .fact-dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }

        .dot.active {
          background: #00FF7F;
          box-shadow: 0 0 10px rgba(0, 255, 127, 0.5);
        }

        /* Hero Section */
        .hero-section {
          padding: 80px 0;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .hero-image {
          display: flex;
          justify-content: center;
        }

        .image-container {
          position: relative;
          width: 320px;
          height: 320px;
        }

        .ai-visualization {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .scanning-grid {
          position: absolute;
          width: 200px;
          height: 200px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 4px;
        }

        .grid-cell {
          background: rgba(0, 255, 127, 0.1);
          border: 1px solid rgba(0, 255, 127, 0.3);
          border-radius: 4px;
          animation: scan 3s infinite ease-in-out;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cell-content {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: #00FF7F;
          font-weight: 600;
        }

        .cell-1 { animation-delay: 0s; }
        .cell-2 { animation-delay: 0.2s; }
        .cell-3 { animation-delay: 0.4s; }
        .cell-4 { animation-delay: 0.6s; }
        .cell-5 { animation-delay: 0.8s; }
        .cell-6 { animation-delay: 1s; }
        .cell-7 { animation-delay: 1.2s; }
        .cell-8 { animation-delay: 1.4s; }
        .cell-9 { animation-delay: 1.6s; }

        .central-processor {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, #8B5CF6, #06B6D4);
          border-radius: 50%;
          animation: glow 2s infinite;
        }

        .processor-icon {
          color: white;
          z-index: 3;
        }

        .processor-rings {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .ring {
          position: absolute;
          border: 2px solid rgba(0, 255, 127, 0.3);
          border-radius: 50%;
          animation: pulse 2s infinite ease-in-out;
        }

        .ring-1 {
          width: 100px;
          height: 100px;
          top: -50px;
          left: -50px;
          animation-delay: 0s;
        }

        .ring-2 {
          width: 140px;
          height: 140px;
          top: -70px;
          left: -70px;
          animation-delay: 0.5s;
        }

        .ring-3 {
          width: 180px;
          height: 180px;
          top: -90px;
          left: -90px;
          animation-delay: 1s;
        }

        .tech-indicators {
          position: absolute;
          width: 200px;
          height: 200px;
        }

        .indicator {
          position: absolute;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 700;
          color: #00FF7F;
          background: rgba(0, 0, 0, 0.7);
          padding: 4px 8px;
          border-radius: 4px;
          border: 1px solid rgba(0, 255, 127, 0.3);
          animation: pulse 1.5s infinite ease-in-out;
        }

        .indicator-1 { top: 20px; left: 50%; transform: translateX(-50%); animation-delay: 0s; }
        .indicator-2 { top: 50%; right: 20px; transform: translateY(-50%); animation-delay: 0.5s; }
        .indicator-3 { bottom: 20px; left: 50%; transform: translateX(-50%); animation-delay: 1s; }

        .data-streams {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .stream {
          position: absolute;
          width: 2px;
          height: 40px;
          background: linear-gradient(to bottom, transparent, #00FF7F, transparent);
          animation: streamFlow 2s infinite ease-in-out;
        }

        .stream-1 { top: 0; left: 50%; animation-delay: 0s; }
        .stream-2 { top: 50%; right: 0; transform: rotate(90deg); animation-delay: 0.25s; }
        .stream-3 { bottom: 0; left: 50%; animation-delay: 0.5s; }
        .stream-4 { top: 50%; left: 0; transform: rotate(90deg); animation-delay: 0.75s; }
        .stream-5 { top: 15%; right: 15%; transform: rotate(45deg); animation-delay: 1s; }
        .stream-6 { bottom: 15%; right: 15%; transform: rotate(-45deg); animation-delay: 1.25s; }
        .stream-7 { bottom: 15%; left: 15%; transform: rotate(45deg); animation-delay: 1.5s; }
        .stream-8 { top: 15%; left: 15%; transform: rotate(-45deg); animation-delay: 1.75s; }

        .hero-text {
          color: white;
        }

        .hero-title {
          font-family: 'Orbitron', monospace;
          font-size: 3.2rem;
          font-weight: 900;
          line-height: 1.2;
          margin-bottom: 32px;
        }

        .title-word {
          display: block;
          animation: slideInUp 0.8s ease;
          margin-bottom: 8px;
        }

        .code-bracket {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7em;
          font-weight: 600;
        }

        .title-word:nth-child(1) { 
          animation-delay: 0.2s; 
          color: #06B6D4; 
        }
        .title-word:nth-child(1) .code-bracket { color: #00FF7F; }

        .title-word:nth-child(2) { 
          animation-delay: 0.4s; 
          color: #8B5CF6; 
        }
        .title-word:nth-child(2) .code-bracket { color: #00FF7F; }

        .title-word:nth-child(3) { 
          animation-delay: 0.6s; 
          color: #10B981; 
        }
        .title-word:nth-child(3) .code-bracket { color: #00FF7F; }

        .hero-description-wrapper {
          margin-bottom: 32px;
          animation: slideInUp 1s ease 0.8s both;
        }

        .command-line {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.9rem;
          margin-bottom: 16px;
          color: rgba(255, 255, 255, 0.7);
        }

        .prompt {
          color: #00FF7F;
          text-shadow: 0 0 10px rgba(0, 255, 127, 0.3);
        }

        .command {
          color: #06B6D4;
          margin-left: 8px;
        }

        .hero-description {
          font-family: 'Inter', sans-serif;
          font-size: 1.1rem;
          line-height: 1.7;
          opacity: 0.9;
          font-weight: 400;
        }

        .hero-features {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          animation: slideInUp 1.2s ease 1s both;
        }

        .feature-tag {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 255, 127, 0.2);
          border-radius: 20px;
          padding: 8px 16px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          font-weight: 500;
          color: white;
          transition: all 0.3s ease;
        }

        .feature-tag:hover {
          background: rgba(0, 255, 127, 0.1);
          transform: translateY(-2px);
          border-color: rgba(0, 255, 127, 0.5);
          box-shadow: 0 0 15px rgba(0, 255, 127, 0.2);
        }

        /* Services Section */
        .services-section {
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
        }

        .section-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 60px;
        }

        .terminal-header {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 1rem;
          color: #00FF7F;
          margin-bottom: 16px;
          animation: slideInUp 0.6s ease;
        }

        .section-title {
          font-family: 'Orbitron', monospace;
          font-size: 2.8rem;
          font-weight: 900;
          text-align: center;
          color: white;
          animation: slideInUp 0.8s ease;
        }

        .services-horizontal-scroll {
          overflow-x: auto;
          padding: 20px 0;
        }

        .services-track {
          display: flex;
          gap: 32px;
          padding-bottom: 20px;
          min-width: max-content;
        }

        .service-card {
          position: relative;
          background: rgba(0, 0, 0, 0.5);
          background: linear-gradient(135deg, 
            rgba(139, 92, 246, 0.08) 0%, 
            rgba(6, 182, 212, 0.08) 50%, 
            rgba(16, 185, 129, 0.08) 100%
          );
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 255, 127, 0.2);
          border-radius: 16px;
          padding: 32px;
          min-width: 320px;
          max-width: 320px;
          transition: all 0.4s ease;
          animation: slideInUp 0.8s ease;
          overflow: hidden;
        }

        .service-card:hover {
          transform: translateY(-8px);
          background: linear-gradient(135deg, 
            rgba(139, 92, 246, 0.15) 0%, 
            rgba(6, 182, 212, 0.15) 50%, 
            rgba(16, 185, 129, 0.15) 100%
          );
          border-color: rgba(0, 255, 127, 0.4);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .card-1 { animation-delay: 0.2s; }
        .card-2 { animation-delay: 0.4s; }
        .card-3 { animation-delay: 0.6s; }
        .card-4 { animation-delay: 0.8s; }

        .service-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .service-icon {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #00FF7F;
        }

        .icon-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          background: radial-gradient(circle, rgba(0, 255, 127, 0.2) 0%, transparent 70%);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service-card:hover .icon-glow {
          opacity: 1;
        }

        .service-number {
          font-family: 'JetBrains Mono', monospace;
          font-size: 1.2rem;
          font-weight: 700;
          color: #8B5CF6;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .service-card h3 {
          font-family: 'Orbitron', monospace;
          font-size: 1.3rem;
          font-weight: 700;
          color: white;
          margin-bottom: 16px;
          line-height: 1.3;
        }

        .service-card p {
          font-family: 'Inter', sans-serif;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          font-size: 0.95rem;
          font-weight: 400;
          margin-bottom: 20px;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-stack span {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          font-weight: 500;
          color: #06B6D4;
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.2);
          border-radius: 12px;
          padding: 4px 8px;
        }

        .card-border {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 16px;
          border: 2px solid transparent;
          background: linear-gradient(45deg, transparent, rgba(0, 255, 127, 0.3), transparent) border-box;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service-card:hover .card-border {
          opacity: 1;
          animation: borderGlow 2s infinite;
        }

        /* Why Section */
        .why-section {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%);
        }

        .why-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .why-text {
          animation: slideInUp 0.8s ease;
        }

        .terminal-prompt-section {
          margin-bottom: 24px;
        }

        .terminal-line {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .prompt-symbol {
          color: #00FF7F;
          text-shadow: 0 0 10px rgba(0, 255, 127, 0.5);
        }

        .command {
          color: #06B6D4;
        }

        .section-heading {
          font-family: 'Orbitron', monospace;
          font-size: 2.8rem;
          font-weight: 900;
          color: white;
          margin-bottom: 32px;
        }

        .section-para {
          font-family: 'Inter', sans-serif;
          font-size: 1.15rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 400;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          animation: slideInUp 1s ease 0.4s both;
        }

        .stat-card {
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 255, 127, 0.2);
          border-radius: 12px;
          padding: 24px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          border-color: rgba(0, 255, 127, 0.5);
          box-shadow: 0 0 20px rgba(0, 255, 127, 0.1);
        }

        .stat-number {
          font-family: 'Orbitron', monospace;
          font-size: 2.4rem;
          font-weight: 900;
          color: #00FF7F;
          text-shadow: 0 0 20px rgba(0, 255, 127, 0.5);
        }

        .stat-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.8);
          margin-top: 8px;
          font-weight: 500;
        }

        /* How It Works */
        .how-section {
          background: rgba(0, 0, 0, 0.4);
        }

        .terminal-header-section {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 80px;
          animation: slideInUp 0.8s ease;
        }

        .main-heading {
          font-family: 'JetBrains Mono', monospace;
          font-size: 2.2rem;
          font-weight: 700;
          color: #00FF7F;
          text-shadow: 0 0 20px rgba(0, 255, 127, 0.5);
        }

        .steps-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 60px;
          max-width: 1200px;
          margin: 0 auto;
          flex-wrap: wrap;
        }

        .step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 280px;
          animation: slideInUp 1s ease;
          position: relative;
        }

        .step:nth-child(1) { animation-delay: 0.2s; }
        .step:nth-child(3) { animation-delay: 0.4s; }
        .step:nth-child(5) { animation-delay: 0.6s; }

        .step-number {
          position: relative;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(45deg, #8B5CF6, #06B6D4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Orbitron', monospace;
          font-size: 1.6rem;
          font-weight: 900;
          color: white;
          margin-bottom: 24px;
          animation: glow 3s infinite;
          border: 2px solid rgba(0, 255, 127, 0.3);
        }

        .number-glow {
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border-radius: 50%;
          background: linear-gradient(45deg, rgba(0, 255, 127, 0.3), rgba(6, 182, 212, 0.3));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .step:hover .number-glow {
          opacity: 1;
        }

        .step-connector {
          position: absolute;
          top: -20px;
          left: -20px;
          right: -20px;
          bottom: -20px;
          border-radius: 50%;
          border: 1px dashed rgba(0, 255, 127, 0.2);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .step:hover .step-connector {
          opacity: 1;
          animation: pulse 2s infinite;
        }

        .step-content h3 {
          font-family: 'Orbitron', monospace;
          font-size: 1.2rem;
          font-weight: 700;
          color: white;
          margin-bottom: 12px;
        }

        .step-content p {
          font-family: 'Inter', sans-serif;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          font-weight: 400;
          margin-bottom: 16px;
        }

        .code-snippet {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          color: #00FF7F;
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(0, 255, 127, 0.2);
          border-radius: 6px;
          padding: 8px 12px;
          text-shadow: 0 0 10px rgba(0, 255, 127, 0.3);
        }

        .step-arrow {
          position: relative;
          color: #00FF7F;
          animation: pulse 2s infinite;
        }

        .arrow-trail {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #00FF7F, transparent);
          animation: streamFlow 2s infinite;
        }

        /* Footer */
        .footer-section {
          border-top: 1px solid rgba(0, 255, 127, 0.2);
          background: rgba(0, 0, 0, 0.8);
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 80px;
          margin-bottom: 60px;
        }

        .footer-brand {
          animation: slideInUp 0.8s ease;
        }

        .footer-logo-new {
          margin-bottom: 20px;
        }

        .footer-brackets {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 1.2rem;
          font-weight: 600;
        }

        .footer-bracket-left, .footer-bracket-right {
          color: #00FF7F;
          text-shadow: 0 0 10px rgba(0, 255, 127, 0.5);
        }

        .footer-logo-core {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .footer-shield-new {
          padding: 4px;
          background: linear-gradient(45deg, #8B5CF6, #06B6D4);
          border-radius: 4px;
        }

        .footer-logo-text-horizontal {
          display: flex;
          align-items: center;
          font-family: 'Orbitron', monospace;
          font-weight: 800;
        }

        .footer-slash {
          color: #00FF7F;
          font-size: 1.2rem;
          margin-right: 2px;
        }

        .footer-veri-new {
          color: #06B6D4;
          font-size: 1.2rem;
        }

        .footer-dot {
          color: #FBBF24;
          font-size: 1.2rem;
          margin: 0 1px;
        }

        .footer-fact-new {
          color: #8B5CF6;
          font-size: 1.2rem;
        }

        .footer-description {
          font-family: 'Inter', sans-serif;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          margin-bottom: 32px;
          font-weight: 400;
        }

        .social-links {
          display: flex;
          gap: 16px;
        }

        .social-link {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid rgba(0, 255, 127, 0.2);
        }

        .social-link:hover {
          background: linear-gradient(45deg, #8B5CF6, #06B6D4);
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 255, 127, 0.3);
          border-color: rgba(0, 255, 127, 0.5);
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
        }

        .link-group {
          animation: slideInUp 1s ease;
        }

        .link-group:nth-child(1) { animation-delay: 0.2s; }
        .link-group:nth-child(2) { animation-delay: 0.4s; }
        .link-group:nth-child(3) { animation-delay: 0.6s; }
        .link-group:nth-child(4) { animation-delay: 0.8s; }

        .link-group h4 {
          font-family: 'JetBrains Mono', monospace;
          font-size: 1rem;
          color: #00FF7F;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .link-group a {
          display: block;
          font-family: 'Inter', sans-serif;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          margin-bottom: 12px;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          font-weight: 400;
        }

        .link-group a:hover {
          color: #00FF7F;
          transform: translateX(6px);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: 'JetBrains Mono', monospace;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.85rem;
          font-weight: 400;
        }

        .contact-item svg {
          color: #00FF7F;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 40px;
          border-top: 1px solid rgba(0, 255, 127, 0.1);
          animation: slideInUp 1.2s ease 1s both;
        }

        .copyright {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .copyright p {
          font-family: 'JetBrains Mono', monospace;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.85rem;
          font-weight: 400;
        }

        .legal-links {
          display: flex;
          gap: 24px;
        }

        .legal-links a {
          font-family: 'JetBrains Mono', monospace;
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 400;
          transition: color 0.3s ease;
        }

        .legal-links a:hover {
          color: #00FF7F;
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(20px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease;
        }

        .modal-content {
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(0, 255, 127, 0.3);
          border-radius: 16px;
          padding: 40px;
          max-width: 420px;
          width: 90%;
          position: relative;
          animation: slideInUp 0.5s ease;
        }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 20px;
          background: none;
          border: none;
          color: #00FF7F;
          font-size: 2rem;
          cursor: pointer;
          line-height: 1;
          transition: color 0.3s ease;
        }

        .modal-close:hover {
          color: #8B5CF6;
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .auth-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 8px;
        }

        .auth-form h2 {
          font-family: 'Orbitron', monospace;
          font-size: 1.6rem;
          font-weight: 700;
          color: #00FF7F;
          text-shadow: 0 0 20px rgba(0, 255, 127, 0.5);
        }

        .command-line-input {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .input-prompt {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
          color: #00FF7F;
          font-weight: 500;
        }

        .auth-form input {
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(0, 255, 127, 0.2);
          border-radius: 8px;
          padding: 16px;
          color: white;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 500;
          outline: none;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        .disposable-browser-btn {
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          background: linear-gradient(45deg, #10B981, #059669);
          color: white;
        }

        .auth-form input:focus {
          border-color: #00FF7F;
          box-shadow: 0 0 0 3px rgba(0, 255, 127, 0.1);
        }

        .auth-form input::placeholder {
          color: rgba(255, 255, 255, 0.4);

        .auth-submit {
          background: linear-gradient(45deg, #8B5CF6, #06B6D4);
          border: none;
          border-radius: 8px;
          padding: 16px;
          color: white;
          font-family: 'Orbitron', monospace;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .auth-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 255, 127, 0.4);
        }

        .auth-form p {
          text-align: center;
          color: rgba(255, 255, 255, 0.7);
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
          font-weight: 400;
        }

        .auth-switch {
          background: none;
          border: none;
          color: #00FF7F;
          font-family: 'JetBrains Mono', monospace;
          cursor: pointer;
          text-decoration: underline;
          font-size: 0.85rem;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .auth-switch:hover {
          color: #8B5CF6;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .hero-title {
            font-size: 2.2rem;
          }

          .services-track {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 24px;
          }

          .service-card {
            min-width: 280px;
            max-width: 280px;
          }

          .why-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .steps-container {
            flex-direction: column;
            gap: 40px;
          }

          .step-arrow {
            transform: rotate(90deg);
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .footer-links {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }

          .logo-brackets {
            font-size: 1.1rem;
          }

          .logo-text-horizontal {
            font-size: 1.3rem;
          }

          .section-title, .section-heading, .main-heading {
            font-size: 2rem;
          }

          .rolling-facts-content {
            flex-direction: column;
            gap: 12px;
          }

          .matrix-rain {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

export default App;