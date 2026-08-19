import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Navbar } from '../Navbar'
import '../../styles/servicePages.css'

export default function SocOperations() {
  const navigate = useNavigate()

  const operationalCards = [
    {
      title: 'Use - case and coverage review',
      desc: 'Align monitoring scenarios to key assets, threats, business services and regulatory requirements.'
    },
    {
      title: 'Alert triage support',
      desc: 'Establish repeatable decision paths for validation, escalation, containment and closure.'
    },
    {
      title: 'Incident coordination',
      desc: 'Clarify roles, communications, evidence handling and escalation across technical and business teams.'
    },
    {
      title: 'Runbooks and playbooks',
      desc: 'Document consistent handling for high - priority alerts and incident scenarios.'
    },
    {
      title: 'Metrics and reporting',
      desc: 'Create operational dashboards, trends, SLA visibility and management reporting.'
    },
    {
      title: 'SOC maturity uplift',
      desc: 'Assess gaps and prioritise improvements across tooling, process, staffing and governance.'
    }
  ]

  const alertItems = [
    { dot: '#ef4444', name: 'Identity anomaly', status: 'Escalated', statusColor: '#f34d4dff' },
    { dot: '#f59e0b', name: 'Suspicious endpoint activity', status: 'Investigating', statusColor: '#c09c0cff' },
    { dot: '#3b82f6', name: 'Cloud configuration event', status: 'Validated', statusColor: '#3691f8ff' },
    { dot: '#10b981', name: 'Phishing report', status: 'Contained', statusColor: '#138658ff' }
  ]

  const socLifecycleSteps = [
    {
      num: '01',
      title: 'Collect',
      desc: 'Receive logs, alerts and telemetry from agreed security sources.',
      accent: '#0d9488'
    },
    {
      num: '02',
      title: 'Detect',
      desc: 'Apply correlation rules, use cases and available threat context.',
      accent: '#10b981'
    },
    {
      num: '03',
      title: 'Triage',
      desc: 'Validate the alert, severity, affected asset and business context.',
      accent: '#06b6d4'
    },
    {
      num: '04',
      title: 'Investigate',
      desc: 'Analyse related activity, indicators, timeline, scope and likely impact.',
      accent: '#3b82f6'
    },
    {
      num: '05',
      title: 'Respond',
      desc: 'Escalate incidents and coordinate agreed containment and remediation actions.',
      accent: '#8b5cf6'
    },
    {
      num: '06',
      title: 'Improve',
      desc: 'Tune detections, use cases and response playbooks based on lessons learned.',
      accent: '#0d9488'
    }
  ]

  const socCapabilitiesData = [
    {
      tag: '01 · MONITOR',
      title: 'Security Monitoring & Alert Triage',
      desc: 'Monitor agreed security sources, validate alerts, remove obvious false positives and prioritise events for investigation.'
    },
    {
      tag: '02 · INVESTIGATE',
      title: 'Threat Investigation & Enrichment',
      desc: 'Correlate available endpoint, identity, network, cloud and application context to determine scope, severity and likely impact.'
    },
    {
      tag: '03 · RESPOND',
      title: 'Incident Escalation & Response Coordination',
      desc: 'Escalate confirmed incidents, notify agreed stakeholders and coordinate containment or remediation actions within the defined response model.'
    },
    {
      tag: '04 · HUNT',
      title: 'Threat Hunting',
      desc: 'Perform targeted searches using indicators, threat intelligence and hypotheses to identify suspicious activity not detected by standard alerts.'
    },
    {
      tag: '05 · ENGINEER',
      title: 'Detection Engineering & Tuning',
      desc: 'Review and improve SIEM use cases, correlation logic, thresholds and playbooks to increase detection quality and reduce noise.'
    },
    {
      tag: '06 · GOVERN',
      title: 'Reporting & Service Governance',
      desc: 'Provide operational reporting, incident trends, open actions and service-review inputs to support continuous improvement.'
    }
  ]

  const telemetryCardsData = [
    {
      tag: 'SECURITY ANALYTICS',
      title: 'SIEM / SOAR',
      desc: 'Centralised log monitoring, correlation, alerting and workflow automation.'
    },
    {
      tag: 'ENDPOINT',
      title: 'EDR / XDR',
      desc: 'Endpoint detections, device context and investigation telemetry.'
    },
    {
      tag: 'INFRASTRUCTURE',
      title: 'Network & Cloud',
      desc: 'Firewall, VPN, cloud-security and infrastructure event data where available.'
    },
    {
      tag: 'ACCESS & APPLICATIONS',
      title: 'Identity, Email & Apps',
      desc: 'Authentication, access, email and application security events within the agreed scope.'
    }
  ]

  const socOwnershipData = [
    {
      tag: 'MANAGED',
      title: 'Managed SOC',
      desc: 'G3 performs the agreed day-to-day monitoring, triage, investigation, escalation and reporting activities.',
      features: [
        'Defined coverage window',
        'Agreed log sources and tools',
        'Incident escalation workflow',
        'Regular service reporting'
      ]
    },
    {
      tag: 'SHARED',
      title: 'Co-Managed SOC',
      desc: 'G3 works with your internal security team under a clear responsibility model and common operating workflow.',
      features: [
        'Shared monitoring responsibilities',
        'Joint escalation model',
        'Detection and tuning support',
        'Integrated service governance'
      ]
    },
    {
      tag: 'AUGMENTED',
      title: 'SOC Augmentation',
      desc: 'Add analyst or specialist capacity to an existing SOC for defined operational needs.',
      features: [
        'L1 / L2 / L3 support',
        'Threat hunting',
        'Detection engineering',
        'Investigation support'
      ]
    }
  ]

  const socDeliverablesData = [
    {
      title: 'Typical Operational Deliverables',
      side: 'left',
      items: [
        'Alert and incident investigation records',
        'Severity-based escalation and notification',
        'Threat-hunting observations and findings',
        'Detection-rule and use-case tuning actions',
        'Open incident and remediation tracking'
      ]
    },
    {
      title: 'Management & Governance Deliverables',
      side: 'right',
      items: [
        'Incident and alert trend reporting',
        'Detection and use-case performance observations',
        'Recurring threat patterns and lessons learned',
        'Open security actions and ageing',
        'Periodic service-review and improvement recommendations'
      ]
    }
  ]

  return (
    <div className="service-page-layout light-theme">
      <Navbar />

      <main className="soc-hero-container">
        <div className="soc-hero-grid">
          {/* Left Hero Content */}
          <div className="soc-hero-left">

            <h1 className="service-hero-heading left-aligned-heading" style={{ color: "#000000" }}>
              Strengthen security monitoring, triage <br className="desktop-break" />
              and incident response discipline.
            </h1>

            <p className="service-hero-description left-aligned-desc">
             G3 Cyberspace delivers 24/7 Managed SOC Services with continuous monitoring, threat detection, investigation, hunting, and incident response—helping organisations improve security visibility, coverage, and SOC maturity.
            </p>

            <div className="service-buttons-left">
              <button className="btn-compliance-quote" onClick={() => navigate('/getaquote')}>
                <span className="btn-text-roll">
                  <span className="text-original">Get a SOC Quote</span>
                  <span className="text-duplicate" aria-hidden="true">Get a SOC Quote</span>
                </span>
              </button>
            </div>
          </div>

          {/* Right Hero Content (Interactive Dashboard Preview Card) */}
          <div className="soc-hero-right">
            <motion.div 
              className="soc-dashboard-card"
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: -35 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              {/* Header */}
              <div className="soc-dash-header">
                <h3 className="soc-dash-title">Security Operations View</h3>
                <span className="soc-status-badge">Operational</span>
              </div>

              {/* Stat Metrics Row */}
              <div className="soc-stats-row">
                <div className="soc-stat-box">
                  <span className="soc-stat-label">Priority alerts</span>
                  <span className="soc-stat-val">12</span>
                  <span className="soc-stat-sub">Under review</span>
                </div>

                <div className="soc-stat-box">
                  <span className="soc-stat-label">Coverage</span>
                  <span className="soc-stat-val">86%</span>
                  <span className="soc-stat-sub">Use - case mapped</span>
                </div>

                <div className="soc-stat-box">
                  <span className="soc-stat-label">Response</span>
                  <span className="soc-stat-val">28m</span>
                  <span className="soc-stat-sub">Median triage</span>
                </div>
              </div>

              {/* Alert Feed */}
              <div className="soc-alerts-list">
                {alertItems.map((item, idx) => (
                  <div key={idx} className="soc-alert-row">
                    <div className="soc-alert-left">
                      <span className="soc-alert-dot" style={{ backgroundColor: item.dot }} />
                      <span className="soc-alert-name">{item.name}</span>
                    </div>
                    <span className="soc-alert-status" style={{ color: item.statusColor }}>{item.status}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Operational Areas Section (Component 2 below Hero) */}
        <div className="soc-operational-section">

          <div className="soc-operational-header-row">
            <h2 className="standards-heading centering-text-soc" style={{ color: "#000000" }}>
              Improve people, process and <br className="desktop-break" /> monitoring coverage together.
            </h2>
          </div>

          {/* 6 Operational Cards Grid with Left-to-Right Entrance Animation */}
          <div className="soc-cards-grid">
            {operationalCards.map((card, index) => (
              <motion.div
                key={index}
                className="standards-card-item soc-card-item"
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
                <h3 className="standards-card-title">{card.title}</h3>
                <p className="standards-card-desc">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SOC Operating Lifecycle Section */}
        <motion.section 
          className="soc-lifecycle-section"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header Row */}
          <div className="soc-lifecycle-header">
            <h2 className="soc-lifecycle-title">SOC Operating Lifecycle</h2>
            <motion.div 
              className="soc-lifecycle-flow-pill"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.025
                  }
                }
              }}
            >
              {"Monitor → Investigate → Respond → Improve".split(" ").map((word, wIdx, array) => (
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
            </motion.div>
          </div>

          {/* Grid Layout of 6 Step Cards */}
          <div className="soc-lifecycle-grid">
            {socLifecycleSteps.map((step, idx) => (
              <motion.div
                key={idx}
                className="soc-lifecycle-card"
                initial={{ opacity: 0, y: 25, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ 
                  duration: 0.5, 
                  delay: idx * 0.08, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                whileHover={{ y: -7, scale: 1.025 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Top Accent Line */}
                <div 
                  className="soc-lifecycle-accent-line" 
                  style={{ background: step.accent }}
                />

                <div className="soc-lifecycle-card-content">
                  <span className="soc-lifecycle-num">{step.num}</span>
                  <h3 className="soc-lifecycle-card-title">{step.title}</h3>
                  <p className="soc-lifecycle-card-desc">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* SOC Capabilities Section */}
        <motion.div 
          className="soc-capabilities-section"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header Row */}
          <div className="tprm-coverage-header-row">
            <div className="soc-capabilities-header-left">
              <h2 className="standards-heading left-aligned-heading">
                Security operations focused <br className="desktop-break" />
                on actionable detection and <br className="desktop-break" />
                response.
              </h2>
            </div>

            <p className="tprm-header-note">
              The service is designed to improve visibility, validate security events and provide a consistent path from alert to investigation, escalation and closure.
            </p>
          </div>

          {/* 6 Capabilities Cards Grid */}
          <div className="soc-cards-grid">
            {socCapabilitiesData.map((card, index) => (
              <motion.div
                key={index}
                className="standards-card-item soc-card-item"
                initial={{ opacity: 0, x: -30 }}
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
                <span className="engagement-pill-badge" style={{ marginBottom: '0.6rem' }}>{card.tag}</span>
                <h3 className="standards-card-title">{card.title}</h3>
                <p className="standards-card-desc">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SOC Telemetry Integration Section */}
        <motion.div 
          className="soc-telemetry-section"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Centered Header with centering-text-soc */}
          <div className="soc-telemetry-header">
            <h2 className="standards-heading centering-text-soc" style={{ color: "#000000" }}>
              Bring relevant <span className='break-text-soc'>telemetry</span> together for better investigation context.
            </h2>
            <p className="standards-desc-centered" style={{ marginTop: '0.85rem' }}>
              Coverage is agreed during onboarding and depends on the security technologies and log sources available in the client environment.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="telemetry-cards-grid">
            {telemetryCardsData.map((card, index) => (
              <motion.div
                key={index}
                className="standards-card-item soc-card-item"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="engagement-pill-badge" style={{ marginBottom: '0.6rem' }}>{card.tag}</span>
                <h3 className="standards-card-title">{card.title}</h3>
                <p className="standards-card-desc">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SOC Ownership / Delivery Models Section */}
        <motion.div 
          className="soc-ownership-section"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header Row with centering-text-soc */}
          <div className="soc-telemetry-header">
            <h2 className="standards-heading centering-text-soc" style={{ color: "#000000" }}>
              Choose the level of SOC ownership that fits your internal capability.
            </h2>
          </div>

          {/* 3 Cards Grid */}
          <div className="soc-ownership-cards-grid">
            {socOwnershipData.map((card, index) => (
              <SocOwnership3DCard key={index} card={card} index={index} />
            ))}
          </div>
        </motion.div>

        {/* SOC Deliverables Section */}
        <motion.div 
          className="soc-deliverables-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          <div className="soc-deliverables-grid">
            {socDeliverablesData.map((deliverable, index) => (
              <motion.div
                key={index}
                className="soc-deliverable-card"
                initial={{ 
                  opacity: 0, 
                  rotateY: deliverable.side === 'left' ? -26 : 26, 
                  rotateX: 10,
                  y: 45
                }}
                whileInView={{ 
                  opacity: 1, 
                  rotateY: 0, 
                  rotateX: 0,
                  y: 0 
                }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.18, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                whileHover={{ 
                  scale: 1.025,
                  rotateX: -4,
                  rotateY: deliverable.side === 'left' ? 3 : -3,
                  z: 20
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="soc-deliverable-card-inner">
                  <h3 className="soc-deliverable-title">{deliverable.title}</h3>
                  <ul className="soc-features-list">
                    {deliverable.items.map((item, iIdx) => (
                      <li key={iIdx} className="soc-feature-item">
                        <span className="soc-feature-dot" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  )
}

function SocOwnership3DCard({ card, index }) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const width = rect.width
    const height = rect.height

    // Calculate rotation: center is 0
    // Moving left tilts left side out (+ rotateY), moving right tilts right side out (- rotateY)
    const rY = ((mouseX / width) - 0.5) * 20
    const rX = ((mouseY / height) - 0.5) * -10

    setRotateX(rX)
    setRotateY(rY)
  }

  const handleMouseEnter = () => setIsHovered(true)

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      className="standards-card-item soc-card-item soc-ownership-card"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        scale: isHovered ? 1.025 : 1
      }}
      transition={{ 
        type: 'spring',
        stiffness: 260,
        damping: 20
      }}
      style={{
        transformStyle: 'preserve-3d',
        transformOrigin: 'center center'
      }}
    >
      <div>
        <span className="engagement-pill-badge" style={{ marginBottom: '0.6rem' }}>{card.tag}</span>
        <h3 className="standards-card-title">{card.title}</h3>
        <p className="standards-card-desc" style={{ marginBottom: '1.25rem' }}>{card.desc}</p>
      </div>

      {/* Bullet List Features */}
      <ul className="soc-features-list">
        {card.features.map((feature, fIdx) => (
          <li key={fIdx} className="soc-feature-item">
            <span className="soc-feature-dot" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
