import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronDown, Menu, X, Search, Calendar, Globe, ArrowRight } from 'lucide-react'
import g3Logo from '../assets/logo/g3.png'
import g3ai from '../assets/logo/g3Ai.png'
import '../styles/navbar.css'


export function Navbar({ variant }) {
  const [activeTab, setActiveTab] = useState('Home')
  const [openDropdown, setOpenDropdown] = useState(null)
  const [hoverDropdown, setHoverDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navRef = useRef(null)

  const navigate = useNavigate()
  const logoSrc = variant === 'g3secai' ? g3ai : g3Logo

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleMagneticMove = (e) => {
    const btn = e.currentTarget
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    btn.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`
    btn.style.transition = 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)'
  }

  const handleMagneticLeave = (e) => {
    const btn = e.currentTarget
    btn.style.transform = 'translate(0px, 0px)'
    btn.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
  }

  const servicesList = [
    {
      badge: 'CY',
      badgeBg: '#ccfbf1',
      badgeColor: '#0f766e',
      title: 'Cybersecurity & Compliance Assurance',
      desc: 'ISO 27001, ISO 27701, ISO 42001, NIST CSF, HITRUST and related frameworks.',
      path: '/services/cybersecurity-compliance'
    },
    {
      badge: 'VA',
      badgeBg: '#ccfbf1',
      badgeColor: '#0f766e',
      title: 'VAPT & Security Testing',
      desc: 'Web, API, mobile, network, cloud and thick - client testing.',
      path: '/services/vapt-security-testing'
    },
    {
      badge: 'TP',
      badgeBg: '#ccfbf1',
      badgeColor: '#0f766e',
      title: 'TPRM Professional Services',
      desc: 'Programme design, assessments, evidence review and oversight.',
      path: '/services/tprm-services'
    },
    {
      badge: 'SO',
      badgeBg: '#ccfbf1',
      badgeColor: '#0f766e',
      title: 'SOC Operations',
      desc: 'Monitoring, triage, incident support and operational maturity.',
      path: '/services/soc-operations'
    },
    {
      badge: 'DP',
      badgeBg: '#ccfbf1',
      badgeColor: '#0f766e',
      title: 'Privacy & Data Protection',
      desc: 'DPDPA, GDPR, Saudi PDPL, UAE privacy and governance support.',
      path: '/services/privacy-data-protection'
    },
    {
      badge: 'AD',
      badgeBg: '#ccfbf1',
      badgeColor: '#0f766e',
      title: 'vCISO & vDPO Advisory',
      desc: 'Retained security and privacy leadership, governance and executive support.',
      path: '/services/vciso-vdpo-advisory'
    },
    {
      badge: 'MS',
      badgeBg: '#ccfbf1',
      badgeColor: '#0f766e',
      title: 'Managed Security Services',
      desc: 'Security-control and platform operations.',
      path: '/services/security-services'
    }
  ]

  const productsList = [
    {
      badge: 'T3',
      badgeBg: '#ccfbf1',
      badgeColor: '#0f766e',
      title: 'TRACS 360',
      desc: 'Third - party risk assurance and control workflows.',
      path: '/products/tracs360'
    },
    {
      badge: 'AS',
      badgeBg: '#ccfbf1',
      badgeColor: '#0f766e',
      title: 'SOLTRISK',
      desc: 'External attack surface and cyber exposure visibility.',
      path: '/products/soltrisk'
    },
    {
      badge: 'CA',
      badgeBg: '#fef3c7',
      badgeColor: '#b45309',
      title: 'Compliance Assurance',
      desc: 'Structured readiness, evidence and continuous assurance.',
      path: '/services/cybersecurity-compliance'
    },
    {
      badge: 'PR',
      badgeBg: '#dcfce7',
      badgeColor: '#15803d',
      title: 'Privacy Automation',
      desc: 'Operational privacy workflows and accountability.',
      path: '/services/privacy-data-protection'
    },
    {
      badge: 'C3',
      badgeBg: '#f3e8ff',
      badgeColor: '#7e22ce',
      title: 'Contract Compliance',
      desc: 'Post - contract obligations and assurance tracking.'
    }
  ]

  const navItems = [
    { name: 'Home', hasDropdown: false },
    { 
      name: 'Services', 
      hasDropdown: true
    },
    { 
      name: 'Products', 
      hasDropdown: true
    },
    { name: 'Company', hasDropdown: false },
    { name: 'Contact', hasDropdown: false }
  ]

  const handleNavClick = (item) => {
    setActiveTab(item.name)
    if (item.name === 'Home') {
      navigate('/')
    }
    if (item.hasDropdown) {
      setOpenDropdown(prev => (prev === item.name ? null : item.name))
    } else {
      setOpenDropdown(null)
    }
  }

  const currentDropdown = hoverDropdown || openDropdown

  return (
    <div className="navbar-sticky-wrapper">
      {/* <div className='before-nav'>
        <div className="before-nav-container">
          <div className="before-nav-left">
            <span className="before-nav-badge">
              LEADER IN CYBERSECURITY &amp; COMPLIANCE ASSURANCE
            </span>
            <a href="#services" className="before-nav-link">
              Find Out Why <ArrowRight size={13} />
            </a>
          </div>
          <div className="before-nav-right">
            <a href="#breach" className="before-nav-util-link">Experiencing a breach?</a>
            <a href="#vapt" className="before-nav-util-link">VAPT Services</a>
            <a href="#careers" className="before-nav-util-link">Careers</a>
            <div className="before-nav-icons">
              <button className="before-nav-icon-btn" aria-label="Search"><Search size={14} /></button>
              <button 
                className="before-nav-icon-btn" 
                aria-label="Book Demo"
                onClick={() => navigate('/calendar')}
              >
                <Calendar size={14} />
              </button>
              <button className="before-nav-icon-btn" aria-label="Language"><Globe size={14} /></button>
            </div>
          </div>
        </div>
      </div> */}
      <header className="navbar-header" ref={navRef}>
        <nav className="navbar-container">
          {/* Left Section: Brand Logo & Identity */}
          <div className="navbar-brand">
            <a 
              href="/" 
              className="logo-link"
              onClick={(e) => {
                e.preventDefault()
                setActiveTab('Home')
                navigate('/')
              }}
            >
              <img src={logoSrc} alt={variant === 'g3secai' ? "G3SEC.ai Logo" : "G3 Cyberspace Logo"} className="brand-logo-img" />
            </a>
          </div>

          {/* Center Section: Floating Pill Navigation Menu */}
          <div className="nav-pill-wrapper">
            <ul className="nav-pill-list">
              {navItems.map((item) => {
                const isDropdownVisible = currentDropdown === item.name
                return (
                  <li 
                    key={item.name} 
                    className="nav-pill-item"
                    onMouseEnter={() => item.hasDropdown && setHoverDropdown(item.name)}
                    onMouseLeave={() => setHoverDropdown(null)}
                  >
                    <button
                      className={`nav-pill-link ${activeTab === item.name ? 'active' : ''}`}
                      onClick={() => handleNavClick(item)}
                    >
                      <span>{item.name}</span>
                      {item.hasDropdown && (
                        <ChevronDown 
                          size={14} 
                          className={`chevron-icon ${isDropdownVisible ? 'rotate' : ''}`} 
                        />
                      )}
                    </button>

                    {/* Dropdown Menu Rendering */}
                    {item.hasDropdown && isDropdownVisible && (
                      item.name === 'Services' ? (
                        /* Mega Dropdown Panel for Services */
                        <div className="mega-dropdown-panel services-dropdown-panel">
                          <div className="mega-dropdown-main">
                            <h3 className="mega-dropdown-heading">Core services</h3>
                            <div className="services-grid">
                              {servicesList.map((srv, idx) => (
                                <a 
                                  key={idx} 
                                  href={srv.path} 
                                  className="service-card"
                                  onClick={(e) => {
                                    e.preventDefault()
                                    setOpenDropdown(null)
                                    setHoverDropdown(null)
                                    navigate(srv.path)
                                  }}
                                >
                                  <div className="service-info">
                                    <h4 className="service-title">{srv.title}</h4>
                                    <p className="service-desc">{srv.desc}</p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>

                          {/* Proposal Callout Card Horizontal below Core Services */}
                          <div className="mega-dropdown-proposal-card horizontal">
                            <div>
                              <h4 className="proposal-title">Need a proposal?</h4>
                              <p className="proposal-desc">
                                Tell us what you need and receive a tailored quote, or use the dedicated VAPT intake for technical requirements.
                              </p>
                            </div>
                            <div className="proposal-actions horizontal-actions">
                              <a 
                                href="/getaquote" 
                                className="btn-quote"
                                onMouseMove={handleMagneticMove}
                                onMouseLeave={handleMagneticLeave}
                                onClick={(e) => {
                                  e.preventDefault()
                                  setOpenDropdown(null)
                                  setHoverDropdown(null)
                                  navigate('/getaquote')
                                }}
                              >
                                Get a Quote
                              </a>
                              <a 
                                href="/services/vapt-security-testing/intake" 
                                className="btn-vapt-intake"
                                onMouseMove={handleMagneticMove}
                                onMouseLeave={handleMagneticLeave}
                                onClick={(e) => {
                                  e.preventDefault()
                                  setOpenDropdown(null)
                                  setHoverDropdown(null)
                                  navigate('/services/vapt-security-testing/intake')
                                }}
                              >
                                VAPT intake
                              </a>
                            </div>
                          </div>
                        </div>
                      ) : item.name === 'Products' ? (
                        /* Mega Dropdown Panel for Products */
                        <div className="mega-dropdown-panel">
                          <div className="mega-dropdown-main">
                            <h3 className="mega-dropdown-heading">G3SecAi - Platform - Capabilities</h3>
                            <div className="services-grid">
                              {productsList.map((prod, idx) => (
                                <a 
                                  key={idx} 
                                  href={prod.path || `#${prod.title.toLowerCase().replace(/\s+/g, '-')}`} 
                                  className="service-card"
                                  onClick={(e) => {
                                    if (prod.path) {
                                      e.preventDefault()
                                      setOpenDropdown(null)
                                      setHoverDropdown(null)
                                      navigate(prod.path)
                                    }
                                  }}
                                >
                                  <div className="service-info">
                                    <h4 className="service-title">{prod.title}</h4>
                                    <p className="service-desc">{prod.desc}</p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>

                          {/* Platform Suite Sidebar Card */}
                          <div className="mega-dropdown-proposal-card">
                            <div>
                              <span className="platform-tag">G3SEC.ai platform</span>
                              <h4 className="proposal-title" style={{ marginTop: '10px' }}>
                                Explore the G3SEC.ai capability suite.
                              </h4>
                              <p className="proposal-desc">
                                Support third - party risk, compliance, privacy, contract assurance and external cyber exposure programmes.
                              </p>
                            </div>
                            <div className="proposal-actions">
                              <a 
                                href="#g3sec-ai" 
                                className="btn-quote full-width"
                                onMouseMove={handleMagneticMove}
                                onMouseLeave={handleMagneticLeave}
                                onClick={(e) => {
                                  e.preventDefault()
                                  setOpenDropdown(null)
                                  setHoverDropdown(null)
                                  navigate('/g3secai')
                                }}
                              >
                                Explore G3SEC.ai
                              </a>
                            </div>
                          </div>
                        </div>
                      ) : null
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Right Section: Action Buttons */}
          <div className="navbar-actions">
            {variant === 'g3secai' ? (
              <a 
                href="/calendar" 
                className="btn-book-demo"
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
                onClick={(e) => {
                  e.preventDefault()
                  navigate('/calendar')
                }}
              >
                Book Demo
              </a>
            ) : (
              <>
                <a 
                  href="#talk" 
                  className="btn-talk"
                  onMouseMove={handleMagneticMove}
                  onMouseLeave={handleMagneticLeave}
                >
                  <span className="btn-text-roll">
                    <span className="text-original">Talk to us</span>
                    <span className="text-duplicate" aria-hidden="true">Talk to us</span>
                  </span>
                </a>
                <a 
                  href="/getaquote" 
                  className="btn-quote"
                  onMouseMove={handleMagneticMove}
                  onMouseLeave={handleMagneticLeave}
                  onClick={(e) => {
                    e.preventDefault()
                    navigate('/getaquote')
                  }}
                >
                  <span className="btn-text-roll">
                    <span className="text-original">Get a Quote</span>
                    <span className="text-duplicate" aria-hidden="true">Get a Quote</span>
                  </span>
                </a>
              </>
            )}
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-menu-drawer">
            <ul className="mobile-nav-list">
              {navItems.map((item) => (
                <li key={item.name} className="mobile-nav-item">
                  <div 
                    className={`mobile-nav-link ${activeTab === item.name ? 'active' : ''}`}
                    onClick={() => handleNavClick(item)}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && <ChevronDown size={16} />}
                  </div>

                  {item.hasDropdown && currentDropdown === item.name && (
                    item.name === 'Services' ? (
                      <div className="mobile-dropdown">
                        {servicesList.map((srv, idx) => (
                          <a 
                            key={idx}
                            href={srv.path}
                            className="mobile-dropdown-item"
                            onClick={(e) => {
                              e.preventDefault()
                              setMobileMenuOpen(false)
                              navigate(srv.path)
                            }}
                          >
                            {srv.title}
                          </a>
                        ))}
                      </div>
                    ) : item.name === 'Products' ? (
                      <div className="mobile-dropdown">
                        {productsList.map((prod, idx) => (
                          <a 
                            key={idx}
                            href={prod.path || `#${prod.title.toLowerCase().replace(/\s+/g, '-')}`}
                            className="mobile-dropdown-item"
                            onClick={(e) => {
                              if (prod.path) {
                                e.preventDefault()
                                setMobileMenuOpen(false)
                                navigate(prod.path)
                              }
                            }}
                          >
                            {prod.title}
                          </a>
                        ))}
                      </div>
                    ) : null
                  )}
                </li>
              ))}
            </ul>
            <div className="mobile-actions">
              {variant === 'g3secai' ? (
                <a 
                  href="/calendar" 
                  className="btn-book-demo full-width" 
                  onClick={(e) => {
                    e.preventDefault()
                    setMobileMenuOpen(false)
                    navigate('/calendar')
                  }}
                >
                  Book Demo
                </a>
              ) : (
                <>
                  <a href="#talk" className="btn-talk full-width" onClick={() => setMobileMenuOpen(false)}>
                    Talk to us
                  </a>
                  <a 
                    href="/getaquote" 
                    className="btn-quote full-width" 
                    onClick={(e) => {
                      e.preventDefault()
                      setMobileMenuOpen(false)
                      navigate('/getaquote')
                    }}
                  >
                    Get a Quote
                  </a>
                </>
              )}
            </div>
          </div>
        )}
      </header>
    </div>
  )
}
