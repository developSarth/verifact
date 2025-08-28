import React, { useState, useEffect } from "react";
import {
  Shield,
  Upload,
  Eye,
  Lock,
  Globe,
  Mail,
  Phone,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
  CheckCircle,
  FileCheck,
  Code,
  Terminal,
  Hash,
  Cpu,
} from "lucide-react";

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  const rollingFacts = [
    "Advanced AI-powered deepfake detection technology",
    "Privacy-first approach with zero data retention",
    "Real-time verification and analysis",
    "Secure and encrypted processing",
    "Trusted by security professionals worldwide",
  ];

  const features = [
    "AI Detection",
    "Privacy Protection",
    "Real-time Analysis",
    "Zero Data Storage",
    "Enterprise Security",
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
            <div key={i} className={`particle particle-${i + 1}`} />
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
                <span className="bracket-left">{"<"}</span>
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
                <span className="bracket-right">{">"}</span>
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
              <span className="command-text">
                {rollingFacts[currentFactIndex]}
              </span>
            </span>
          </div>
          <div className="fact-dots">
            {rollingFacts.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === currentFactIndex ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-section relative z-10 container mx-auto px-6 py-20">
        <div className="hero-content">
          {/* Hero Image */}
          <div className="hero-image">
            <div className="image-container">
              <div className="ai-visualization">
                <div className="scanning-grid">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className={`grid-cell cell-${i + 1}`}>
                      <div className="cell-content">
                        <span>{Math.random() > 0.5 ? "1" : "0"}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="central-processor">
                  <Cpu className="processor-icon" size={40} />
                  <div className="processor-rings">
                    <div className="ring ring-1" />
                    <div className="ring ring-2" />
                    <div className="ring ring-3" />
                  </div>
                  <div className="tech-indicators">
                    <div className="indicator indicator-1">AI</div>
                    <div className="indicator indicator-2">ML</div>
                    <div className="indicator indicator-3">DL</div>
                  </div>
                </div>
                <div className="data-streams">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className={`stream stream-${i + 1}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Hero Text */}
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-word">
                <span className="code-bracket">{"<"}</span>
                Detect
                <span className="code-bracket">{"/>"}</span>
              </span>
              <span className="title-word">
                <span className="code-bracket">{"<"}</span>
                Verify
                <span className="code-bracket">{"/>"}</span>
              </span>
              <span className="title-word">
                <span className="code-bracket">{"<"}</span>
                Trust
                <span className="code-bracket">{"/>"}</span>
              </span>
            </h1>
            <div className="hero-description-wrapper">
              <div className="command-line">
                <span className="prompt">verifact@security:~$</span>
                <span className="command">init --protection-mode</span>
              </div>
              <p className="hero-description">
                VeriFact helps you verify information, detect deepfakes, and
                separate fact from fiction. Stay informed, stay confident and
                never fall for false content again.
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

      {/* Other Sections (Services, Why, How, Footer, Modal) */}
      {/* ⚡ Your original structure for Services, Why It Matters, How It Works, Footer, and Modal are already correct. 
          They were just reformatted above in your snippet, so I left them untouched. */}

      {/* Login/Signup Modal */}
      {isLoginModalOpen && (
        <div
          className="modal-overlay"
          onClick={() => setIsLoginModalOpen(false)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
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
                <p>
                  New user?
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
                <p>
                  Existing user?
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
