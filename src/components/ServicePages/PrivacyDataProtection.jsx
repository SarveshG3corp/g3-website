import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShieldCheck, Scale, Globe, Landmark, Building2, Briefcase, HeartPulse, Database, UserCheck, Lock, FileSearch, AlertTriangle, RefreshCw, Building } from 'lucide-react'
import { Navbar } from '../Navbar'
import '../../styles/servicePages.css'
import protectionImage from '../../assets/images/protectionservices.jpeg'


export default function PrivacyDataProtection() {
  const navigate = useNavigate()

  const keyOfferings = [
    {
      title: 'Privacy Readiness Assessment',
      desc: 'Evaluate current privacy maturity, data processing practices, and baseline regulatory readiness against global privacy standards.'
    },
    {
      title: 'Regulatory Assessments',
      desc: 'Gap analysis and compliance alignment for DPDPA, GDPR, PDPL, and other regional data protection regulations.'
    },
    {
      title: 'Product Assessments',
      desc: 'Privacy-by-design reviews for software, digital platforms, AI features, and user data intake flows.'
    },
    {
      title: 'Custom Framework Development',
      desc: 'Tailored privacy governance frameworks, operating structures, and policy matrices built for your organization.'
    },
    {
      title: 'Third-Party privacy risk management',
      desc: 'Assess, audit, and govern vendor data handling, data processing agreements, and third-party privacy risks.'
    },
    {
      title: 'Policy and Process Creation',
      desc: 'Develop operational privacy policies, data subject request workflows, consent notices, and breach protocols.'
    },
    {
      title: 'Data Lifecycle Management',
      desc: 'Define data minimisation, retention schedules, storage limits, and secure disposal practices across systems.'
    },
    {
      title: 'Workforce Privacy Integration',
      desc: 'Train employees, establish privacy ownership, and embed data protection awareness into day-to-day operations.'
    }
  ]

  const dpdpMiniCards = [
    {
      title: 'Applicability and data landscape',
      desc: 'Map entities, products, data flows, processing purposes, systems, processors and affected individuals.'
    },
    {
      title: 'Notice, consent and withdrawal',
      desc: 'Design user - facing notices, consent journeys, preference records and withdrawal mechanisms.'
    },
    {
      title: 'Data Principal rights',
      desc: 'Establish intake, identity verification, response, grievance and escalation workflows.'
    },
    {
      title: 'Processor and contract governance',
      desc: 'Strengthen privacy obligations, due diligence, instructions, breach support and oversight.'
    },
    {
      title: 'Breach and incident readiness',
      desc: 'Align privacy incidents with detection, assessment, decision, communication and evidence processes.'
    },
    {
      title: 'Special obligations',
      desc: 'Assess children\'s data, high - risk processing and Significant Data Fiduciary obligations where applicable.'
    }
  ]

  const regionalCards = [
    {
      badge: 'IN',
      badgeBg: '#0d9488',
      icon: <Scale size={18} color="#ffffff" />,
      title: 'India – DPDP Act & Rules',
      subtitle: 'Primary implementation focus for organisations processing digital personal data in India or offering goods and services to individuals in India.',
      bullets: [
        'Notice, consent and lawful processing',
        'Data Principal rights and grievance handling',
        'Processors, security safeguards and breach readiness'
      ]
    },
    {
      badge: 'EU',
      badgeBg: '#2563eb',
      icon: <Globe size={18} color="#ffffff" />,
      title: 'EU / EEA – GDPR',
      subtitle: 'Governance support across controller and processor obligations, lawful bases, rights, DPIAs, records, transfers and accountability.',
      bullets: [
        'ROPA and lawful - basis mapping',
        'DPIA and privacy - by - design',
        'Cross - border transfer governance'
      ]
    },
    {
      badge: 'KSA',
      badgeBg: '#0f766e',
      icon: <Landmark size={18} color="#ffffff" />,
      title: 'Saudi Arabia – PDPL',
      subtitle: 'Readiness and operational support aligned to the Saudi Personal Data Protection Law, its Implementing Regulations and transfer requirements.',
      bullets: [
        'Controller and processor responsibilities',
        'Data - subject rights and records',
        'Transfer and localisation assessment'
      ]
    },
    {
      badge: 'UAE',
      badgeBg: '#0284c7',
      icon: <Building2 size={18} color="#ffffff" />,
      title: 'UAE – Federal PDPL',
      subtitle: 'Privacy governance for organisations operating under the UAE federal personal - data protection framework.',
      bullets: [
        'Processing purpose and transparency',
        'Rights, security and breach processes',
        'Processor and transfer governance'
      ]
    },
    {
      badge: 'FC',
      badgeBg: '#7c3aed',
      icon: <Briefcase size={18} color="#ffffff" />,
      title: 'DIFC, ADGM & QFC',
      subtitle: 'Support for financial - centre privacy regimes and organisations operating across multiple Middle East jurisdictions.',
      bullets: [
        'Jurisdiction and applicability analysis',
        'International transfer mechanisms',
        'DPO, records and accountability'
      ]
    },
    {
      badge: 'HC',
      badgeBg: '#14b8a6',
      icon: <HeartPulse size={18} color="#ffffff" />,
      title: 'Healthcare & sector privacy',
      subtitle: 'Privacy - readiness support where health information, patient data, employee data or regulated sector information requires enhanced controls.',
      bullets: [
        'HIPAA - oriented readiness support',
        'Sensitive - data handling and access',
        'Vendor, retention and incident controls'
      ]
    }
  ]

  const operatingModelSteps = [
    {
      num: '01',
      title: 'Discover',
      desc: 'Identify personal - data processing, systems, locations, purposes, data categories, processors and transfer paths.'
    },
    {
      num: '02',
      title: 'Design',
      desc: 'Define governance, roles, policies, notices, lawful - processing rules, privacy risk methods and control requirements.'
    },
    {
      num: '03',
      title: 'Operationalise',
      desc: 'Implement consent, rights, retention, deletion, vendor privacy, DPIA, breach and records - management workflows.'
    },
    {
      num: '04',
      title: 'Assure',
      desc: 'Monitor evidence, metrics, issues, regulatory changes, training and management reporting through ongoing governance.'
    }
  ]

  const capabilityCards = [
    {
      tag: 'READINESS',
      title: 'Privacy gap and applicability assessment',
      desc: 'Determine applicable obligations, baseline current maturity and build a prioritised implementation roadmap.'
    },
    {
      tag: 'DATA VISIBILITY',
      title: 'Data inventory, flows and ROPA',
      desc: 'Establish structured visibility over processing activities, systems, purposes, locations, recipients and retention.'
    },
    {
      tag: 'TRANSPARENCY',
      title: 'Notices, consent and preferences',
      desc: 'Design external and internal notices, consent journeys, preference management and withdrawal processes.'
    },
    {
      tag: 'INDIVIDUAL RIGHTS',
      title: 'Rights and grievance operations',
      desc: 'Create intake, verification, assignment, response, exception, escalation and evidence procedures.'
    },
    {
      tag: 'RISK',
      title: 'DPIA and privacy - by - design',
      desc: 'Embed privacy assessment into projects, products, procurement, AI use cases and material business changes.'
    },
    {
      tag: 'THIRD PARTIES',
      title: 'Vendor and contract privacy',
      desc: 'Strengthen processor due diligence, contractual clauses, transfer arrangements, incident obligations and oversight.'
    },
    {
      tag: 'LIFECYCLE',
      title: 'Retention, deletion and minimisation',
      desc: 'Translate legal, business and contractual requirements into workable schedules and defensible disposal processes.'
    },
    {
      tag: 'INCIDENTS',
      title: 'Privacy breach readiness',
      desc: 'Align detection, assessment, notification decisions, communications, evidence and post - incident actions.'
    },
    {
      tag: 'LEADERSHIP',
      title: 'vDPO and ongoing advisory',
      desc: 'Provide privacy governance, regulatory monitoring, stakeholder guidance, programme reporting and escalation support.'
    }
  ]

  return (
    <div className="service-page-layout light-theme">
      <Navbar />

      <main className="service-hero-centered-screen">
        <div className="service-hero-center-box service-hero-split-layout">
          {/* Left Text Column */}
          <div className="service-hero-text-col">
            {/* Main Headline */}
            <h1 className="service-hero-heading">
              Build privacy governance that scales across{" "}
              <span className="highlight-text-gradient">regulations, markets and growth.</span>
            </h1>

            {/* Subtitle / Description */}
            <p className="service-hero-description">
              G3 Cyberspace helps organisations translate privacy requirements into practical governance, accountable ownership and sustainable operating controls across DPDPA, GDPR, Saudi Arabia's PDPL, UAE privacy regimes, financial - centre requirements and healthcare privacy expectations.
            </p>
          </div>

          {/* Right Image Column */}
          <div className="service-hero-image-col">
            <motion.div 
              className="service-hero-image-wrapper"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: -60 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              <img 
                src={protectionImage} 
                alt="Privacy and Data Protection Services" 
                className="service-hero-img" 
              />
            </motion.div>
          </div>
        </div>

        {/* Action Buttons Centered Across Screen */}
        <div className="service-buttons-centered" style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
          <button className="btn-compliance-quote" onClick={() => navigate('/getaquote')}>
            <span className="btn-text-roll">
              <span className="text-original">Get a Privacy Quote</span>
              <span className="text-duplicate" aria-hidden="true">Get a Privacy Quote</span>
            </span>
          </button>
        </div>

          {/* Key Offerings Section */}
          <section className="key-offerings-section">
            <div className="key-offerings-header-row">
              <div className="heading-with-arrow-box">
                <h2 className="standards-heading left-aligned-heading key-text">
                  Key Offerings for <br className="desktop-break" />
                  Data Protection Compliance
                </h2>

                <motion.div 
                  className="heading-pointer-arrow-standalone"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  animate={{ y: [0, 8, 0], x: [0, 4, 0] }}
                  transition={{ 
                    y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                    x: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                    duration: 0.6
                  }}
                >
                  <svg width="100" height="70" viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                      d="M10 10 C 35 15, 65 30, 85 55 M 66 55 H 85 V 36" 
                      stroke="url(#pointing-grad-long)" 
                      strokeWidth="4" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient id="pointing-grad-long" x1="10" y1="10" x2="85" y2="55" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0d9488" />
                        <stop offset="0.5" stopColor="#06b6d4" />
                        <stop offset="1" stopColor="#0284c7" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
              </div>

              <p className="key-offerings-header-note">
                End-to-end privacy governance, technical compliance, and operational controls built to sustain trust and regulatory compliance.
              </p>
            </div>

            <div className="key-offerings-grid">
              {keyOfferings.map((item, index) => (
                <motion.div
                  key={index}
                  className="key-offering-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ 
                    duration: 0.55, 
                    delay: (index % 4) * 0.1, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="key-offering-body">
                    <h3 className="key-offering-title">{item.title}</h3>
                    <p className="key-offering-desc">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* DPDPA Implementation Expertise Box (Light Theme Card Container) */}
          <motion.div 
            className="dpdp-expertise-container"
            initial={{ opacity: 0, y: 35, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="dpdp-expertise-box">
              {/* Left Column */}
              <div className="dpdp-box-left">
                <h2 className="dpdp-box-title">
                  Prepare for India's privacy regime with a practical readiness programme.
                </h2>
                <p className="dpdp-box-desc">
                  Our DPDP work is structured around business applicability, data processing visibility, accountable ownership, operational controls and evidence that can be sustained after the initial implementation.
                </p>
                <button className="btn-dpdpa-quote" onClick={() => navigate('/calendar')}>
                  <span className="btn-text-roll">
                    <span className="text-original">Get a DPDPA Quote</span>
                    <span className="text-duplicate" aria-hidden="true">Get a DPDPA Quote</span>
                  </span>
                </button>
              </div>

              {/* Right 6 Mini Grid Cards */}
              <div className="dpdp-box-right-grid">
                {dpdpMiniCards.map((card, idx) => (
                  <motion.div 
                    key={idx} 
                    className="dpdp-mini-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <h4 className="dpdp-mini-title">{card.title}</h4>
                    <p className="dpdp-mini-desc">{card.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Regulatory Coverage Section (6 Regional Cards) */}
          <div className="privacy-regulatory-section">

            <div className="tprm-coverage-header-row">
              <h2 className="standards-heading left-aligned-heading">
                Privacy expertise across <br className="desktop-break" />
                India, Europe and the <br className="desktop-break" />
                Middle East.
              </h2>

            <motion.p 
              className="tprm-header-note"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    staggerChildren: 0.035
                  }
                }
              }}
            >
              {"We help organisations build a common privacy operating model while accounting for the requirements, terminology and regulatory expectations of each jurisdiction.".split(" ").map((word, wIdx) => (
                <motion.span
                  key={wIdx}
                  style={{ display: 'inline-block', marginRight: '0.28em' }}
                  variants={{
                    hidden: { opacity: 0, y: 8, color: '#0d9488' },
                    visible: { opacity: 1, y: 0, color: '#334155' }
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
            </div>

            {/* 6 Regional Cards Grid */}
            <div className="privacy-regional-cards-grid">
              {regionalCards.map((card, index) => (
                <motion.div
                  key={index}
                  className="standards-card-item regional-card-item"
                  initial={{ opacity: 0, x: -35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ 
                    duration: 0.55, 
                    delay: (index % 3) * 0.15, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="regional-badge-header-row" style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.75rem' }}>
                    <div className="regional-badge-icon-box" style={{ 
                      width: '36px', 
                      height: '36px', 
                      borderRadius: '10px', 
                      background: `linear-gradient(135deg, ${card.badgeBg} 0%, ${card.badgeBg}dd 100%)`, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      boxShadow: `0 4px 14px ${card.badgeBg}40`
                    }}>
                      {card.icon}
                    </div>
                    <span className="regional-badge-label" style={{ 
                      fontSize: '0.76rem', 
                      fontWeight: '800', 
                      color: card.badgeBg, 
                      background: card.badgeBg + '1c', 
                      padding: '0.25rem 0.6rem', 
                      borderRadius: '7px',
                      letterSpacing: '0.04em'
                    }}>
                      {card.badge}
                    </span>
                  </div>
                  <h3 className="standards-card-title">{card.title}</h3>
                  <p className="standards-card-desc">{card.subtitle}</p>
                  <ul className="regional-bullets-list">
                    {card.bullets.map((b, bIdx) => (
                      <li key={bIdx}>• {b}</li>
                    ))}
                  </ul>
      
                </motion.div>
              ))}
            </div>
          </div>

          {/* Privacy Operating Model Section (4 Steps) */}
          <div className="privacy-opmodel-section">

            <h2 className="standards-heading">
              From data discovery to <br className="desktop-break" />
              demonstrable accountability.
            </h2>

            <motion.p 
              className="standards-desc-centered"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.018
                  }
                }
              }}
            >
              {"Our approach combines legal and regulatory interpretation with process design, technology enablement, contracts, training and evidence.".split(" ").map((word, wIdx, array) => (
                <span key={wIdx} className="typewriter-word">
                  {word.split("").map((char, cIdx) => (
                    <motion.span
                      key={cIdx}
                      className="typewriter-char"
                      variants={{
                        hidden: { opacity: 0, y: 1 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      transition={{ duration: 0.05 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                  {wIdx < array.length - 1 && <span className="typewriter-space">&nbsp;</span>}
                </span>
              ))}
              <motion.span 
                className="typewriter-cursor"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
              >
                |
              </motion.span>
            </motion.p>

            {/* 4 Steps Grid */}
            <div className="delivery-cards-grid">
              {operatingModelSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="standards-card-item delivery-card-item"
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ 
                    duration: 0.45, 
                    delay: (index % 4) * 0.12, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                >
                  <div className="delivery-step-badge">{step.num}</div>
                  <h3 className="standards-card-title">{step.title}</h3>
                  <p className="standards-card-desc">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Service Capabilities Section (9 Capability Cards Grid) */}
          <div className="privacy-capabilities-section">

            <div className="tprm-coverage-header-row">
              <h2 className="standards-heading left-aligned-heading">
                End - to - end support for privacy <br className="desktop-break" />
                implementation and ongoing <br className="desktop-break" />
                governance.
              </h2>

            <motion.p 
              className="tprm-header-note"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    staggerChildren: 0.035
                  }
                }
              }}
            >
              {"Engage us for a focused assessment, end - to - end implementation, retained vDPO support or targeted improvement programme.".split(" ").map((word, wIdx) => (
                <motion.span
                  key={wIdx}
                  style={{ display: 'inline-block', marginRight: '0.28em' }}
                  variants={{
                    hidden: { opacity: 0, y: 8, color: '#0d9488' },
                    visible: { opacity: 1, y: 0, color: '#334155' }
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
            </div>

            {/* 9 Capability Cards Grid */}
            <div className="privacy-capabilities-grid">
              {capabilityCards.map((card, index) => (
                <motion.div
                  key={index}
                  className="standards-card-item engagement-card-item"
                  initial={{ opacity: 0, x: -35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ 
                    duration: 0.55, 
                    delay: (index % 3) * 0.15, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="engagement-pill-badge">{card.tag}</span>
                  <h3 className="standards-card-title">{card.title}</h3>
                  <p className="standards-card-desc">{card.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>

            {/* Build Your Privacy Programme CTA Banner Box */}
            <motion.div 
              className="privacy-cta-banner-container"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="privacy-cta-banner-box">
                {/* Left Text Content */}
                <div className="privacy-cta-left">
            
                  <h2 className="privacy-cta-title">
                    Start with DPDPA readiness – or align multiple privacy regimes through one operating model.
                  </h2>
                </div>

                {/* Right Stacked Buttons */}
                <div className="privacy-cta-buttons-stacked">
                  <button className="btn-compliance-quote" onClick={() => navigate('/getaquote')}>
                    <span className="btn-text-roll">
                      <span className="text-original">Get a Privacy Quote</span>
                      <span className="text-duplicate" aria-hidden="true">Get a Privacy Quote</span>
                    </span>
                  </button>
                  <button className="btn-discuss-req" onClick={() => navigate('/calendar')}>
                    <span className="btn-text-roll">
                      <span className="text-original">Speak with a privacy specialist</span>
                      <span className="text-duplicate" aria-hidden="true">Speak with a privacy specialist</span>
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      )
    }
