import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Navbar } from '../Navbar'
import '../../styles/servicePages.css'

import iso1Icon from '../../assets/icons/iso1.png'
import iso2Icon from '../../assets/icons/iso2.png'
import iso9001Icon from '../../assets/icons/iso9001.jpg'
import nistIcon from '../../assets/icons/nist.png'
import pciIcon from '../../assets/icons/pci.jpg'
import imagesIcon from '../../assets/icons/images.jpg'
import hitrustIcon from '../../assets/icons/hitrust.jpg'
import iso22301Icon from '../../assets/icons/iso22301.png'
import iso27701Icon from '../../assets/icons/iso27701.jpg'

export default function CybersecurityCompliance() {
  const navigate = useNavigate()

  const frameworkCards = [
    {
      badgeTop: 'ISO',
      badgeSub: '27001',
      badgeBg: '#0d9488',
      icon: iso1Icon,
      title: 'ISO/IEC 27001',
      desc: 'Information Security Management System scope, risk assessment, controls, documentation, evidence and certification readiness.'
    },
    {
      badgeTop: 'ISO',
      badgeSub: '27701',
      badgeBg: '#2563eb',
      icon: iso27701Icon,
      title: 'ISO/IEC 27701',
      desc: 'Privacy Information Management System support for PII controllers and processors, privacy controls and accountability.'
    },
    {
      badgeTop: 'ISO',
      badgeSub: '42001',
      badgeBg: '#7c3aed',
      icon: iso2Icon,
      title: 'ISO/IEC 42001',
      desc: 'AI governance, policy, risk management, lifecycle controls, transparency, monitoring and AI management - system readiness.'
    },
    {
      badgeTop: 'NIST',
      badgeSub: 'CSF 2.0',
      badgeBg: '#1e3a8a',
      icon: nistIcon,
      title: 'NIST Cybersecurity Framework',
      desc: 'Current - state profiles, target outcomes, governance priorities, risk - based improvement roadmaps and maturity reporting.'
    },
    {
      badgeTop: 'HITRUST',
      badgeSub: 'CSF',
      badgeBg: '#15803d',
      icon: hitrustIcon,
      title: 'HITRUST CSF Readiness',
      desc: 'Healthcare - oriented security and privacy control readiness, evidence preparation, remediation and assessment coordination.'
    },
    {
      badgeTop: 'SOC',
      badgeSub: '2',
      badgeBg: '#8b5cf6',
      icon: imagesIcon,
      title: 'SOC 2 Readiness',
      desc: 'Trust Services Criteria scoping, control design, evidence preparation, readiness review and independent auditor coordination.'
    },
    {
      badgeTop: 'PCI',
      badgeSub: 'DSS',
      badgeBg: '#d97706',
      icon: pciIcon,
      title: 'PCI DSS Readiness',
      desc: 'Cardholder - data environment scoping, gap assessment, remediation planning and readiness for formal validation.'
    },
    {
      badgeTop: 'ISO',
      badgeSub: '22301',
      badgeBg: '#0f766e',
      icon: iso22301Icon,
      title: 'ISO 22301',
      desc: 'Business continuity management, impact analysis, continuity strategies, exercises and certification readiness.'
    },
    {
      badgeTop: 'ISO',
      badgeSub: '9001',
      badgeBg: '#4d7c0f',
      icon: iso9001Icon,
      title: 'ISO 9001',
      desc: 'Quality management processes, documented controls, performance evaluation and integrated management - system support.'
    }
  ]

  const deliverySteps = [
    {
      num: '01',
      title: 'Scope & applicability',
      desc: 'Confirm entities, products, locations, processes, systems, data, interested parties and audit objectives.'
    },
    {
      num: '02',
      title: 'Gap & risk assessment',
      desc: 'Assess current maturity, identify control gaps and establish a prioritised implementation roadmap.'
    },
    {
      num: '03',
      title: 'Governance design',
      desc: 'Define ownership, policies, procedures, risk methods, committees, reporting and operating rhythms.'
    },
    {
      num: '04',
      title: 'Control implementation',
      desc: 'Support technical and operational teams in embedding controls across the in - scope environment.'
    },
    {
      num: '05',
      title: 'Evidence readiness',
      desc: 'Establish evidence requirements, repositories, operating records, metrics and traceability to controls.'
    },
    {
      num: '06',
      title: 'Training & adoption',
      desc: 'Build awareness and role - based understanding so the management system operates beyond the project team.'
    },
    {
      num: '07',
      title: 'Internal review',
      desc: 'Support internal audit, management review, remediation and readiness validation before external assessment.'
    },
    {
      num: '08',
      title: 'Audit coordination',
      desc: 'Coordinate with the independent auditor or certification body and support closure of identified findings.'
    }
  ]

  const engagementModels = [
    {
      badge: 'READINESS',
      title: 'Gap assessment & roadmap',
      desc: 'Independent baseline assessment, applicability, priority gaps, effort indicators and an actionable implementation plan.'
    },
    {
      badge: 'IMPLEMENTATION',
      title: 'End - to - end programme support',
      desc: 'Hands - on management - system implementation, policies, risk assessment, controls, evidence, training and audit preparation.'
    },
    {
      badge: 'ASSURANCE',
      title: 'Retained compliance support',
      desc: 'Ongoing governance, evidence monitoring, internal reviews, remediation follow - up and continual improvement support.'
    }
  ]

  return (
    <div className="service-page-layout light-theme">
      <Navbar />
      <main className="service-hero-centered-screen">
        <div className="service-hero-center-box">

          {/* Main Headline */}
          <h1 className="service-hero-heading">
            Build controls that work - and assurance that <span className="highlight-text-gradient">stands up to scrutiny.</span>
          </h1>

          {/* Subtitle / Description */}
          <p className="service-hero-description left-aligned-hero-desc">
            G3 Cyberspace supports management - system and cybersecurity - framework programmes from scope definition and gap assessment through implementation, evidence readiness, internal audit support, remediation and independent audit coordination.
          </p>

          {/* Action Buttons Centered */}
          <div className="service-buttons-centered">
            <button className="btn-compliance-quote" onClick={() => navigate('/getaquote')}>
              <span className="btn-text-roll">
                <span className="text-original">Get a Compliance Quote</span>
                <span className="text-duplicate" aria-hidden="true">Get a Compliance Quote</span>
              </span>
            </button>
            <button className="btn-discuss-req" onClick={() => navigate('/calendar')}>
              <span className="btn-text-roll">
                <span className="text-original">Discuss your requirement</span>
                <span className="text-duplicate" aria-hidden="true">Discuss your requirement</span>
              </span>
            </button>
          </div>

          {/* Standards and Frameworks Section */}
          <div className="standards-frameworks-section">
            <div className="standards-kicker-line">
              <span className="kicker-dash">—</span> STANDARDS AND FRAMEWORKS
            </div>

            <h2 className="standards-heading">
              Coverage for established and <br className="desktop-break" />
              emerging assurance <br className="desktop-break" />
              requirements.
            </h2>

            <p className="standards-description">
              Engagements are tailored to your sector, customer commitments, regulatory context, audit target and current control maturity.
            </p>

            {/* 9 Framework Cards Grid with Framer Motion Left-to-Right Entrance & Hover Effect */}
            <div className="standards-cards-grid">
              {frameworkCards.map((card, index) => (
                <motion.div
                  key={index}
                  className="standards-card-item"
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
                  <div 
                    className="standards-card-badge"
                    style={{ backgroundColor: card.icon ? 'transparent' : card.badgeBg }}
                  >
                    {card.icon ? (
                      <img src={card.icon} alt={card.title} className="standards-card-icon-img" />
                    ) : (
                      <>
                        <span className="badge-top-text">{card.badgeTop}</span>
                        <span className="badge-sub-text">{card.badgeSub}</span>
                      </>
                    )}
                  </div>

                  <h3 className="standards-card-title">{card.title}</h3>
                  <p className="standards-card-desc">{card.desc}</p>
                </motion.div>
              ))}
            </div>


 
            {/* Certification Disclaimer Callout Bar with Scroll Animation */}'
            <motion.div
              className="standards-disclaimer-box"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="disclaimer-text">
                Certification, attestation and formal validation are issued by independent accredited certification bodies, CPA firms or authorised assessors, as applicable. G3 Cyberspace provides implementation, readiness, evidence and coordination support.
              </p>
            </motion.div>
          </div>

          {/* Delivery Approach Section */}
          <div className="delivery-approach-section">
            <div className="standards-kicker-line">
              <span className="kicker-dash">—</span> DELIVERY APPROACH
            </div>

            <h2 className="standards-heading left-aligned-heading">
              From applicability and baseline <br className="desktop-break" />
              assessment to sustained <br className="desktop-break" />
              assurance.
            </h2>

            <p className="standards-description left-aligned-desc">
              Our delivery approach is designed to establish practical governance and evidence - not documentation that sits unused after the audit.
            </p>

            {/* 8 Delivery Step Cards Grid (4 columns) - Left to Right Sequential Entrance */}
            <div className="delivery-cards-grid">
              {deliverySteps.map((step, index) => (
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
                  <div className="delivery-step-badge">
                    {step.num}
                  </div>

                  <h3 className="standards-card-title">{step.title}</h3>
                  <p className="standards-card-desc">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Engagement Models Section */}
          <div className="engagement-models-section">
            <div className="standards-kicker-line">
              <span className="kicker-dash">—</span> ENGAGEMENT MODELS
            </div>

            <h2 className="standards-heading">
              Choose the level of support <br className="desktop-break" />
              that matches your programme <br className="desktop-break" />
              maturity.
            </h2>

            {/* 3 Engagement Model Cards Grid with Left-to-Right Entrance */}
            <div className="engagement-cards-grid">
              {engagementModels.map((model, index) => (
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
                  <span className="engagement-pill-badge">{model.badge}</span>
                  <h3 className="standards-card-title">{model.title}</h3>
                  <p className="standards-card-desc">{model.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons Centered */}
            <div className="service-buttons-centered">
              <button className="btn-compliance-quote" onClick={() => navigate('/getaquote')}>
                <span className="btn-text-roll">
                  <span className="text-original">Get a Tailored Quote</span>
                  <span className="text-duplicate" aria-hidden="true">Get a Tailored Quote</span>
                </span>
              </button>
              <button className="btn-discuss-req" onClick={() => navigate('/calendar')}>
                <span className="btn-text-roll">
                  <span className="text-original">Talk to a consultant</span>
                  <span className="text-duplicate" aria-hidden="true">Talk to a consultant</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
