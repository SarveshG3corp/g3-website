import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Navbar } from '../Navbar'
import { 
  ArrowRight, 
  Eye, 
  Zap, 
  Target, 
  Lock, 
  ShieldCheck, 
  Radio, 
  BarChart3, 
  Link as LinkIcon, 
  Settings, 
  Cpu
} from 'lucide-react'
import '../../styles/soltrisk.css'

// 3D Motion Card Component with mouse tracking and spring tilt
const Motion3DCard = ({ children, className, delay = 0 }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 300, damping: 28 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 300, damping: 28 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    x.set(px)
    y.set(py)
    e.currentTarget.style.setProperty("--mouse-x", `${((px + 0.5) * 100).toFixed(1)}%`)
    e.currentTarget.style.setProperty("--mouse-y", `${((py + 0.5) * 100).toFixed(1)}%`)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ scale: 1.015, z: 4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 28, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function Soltrisk() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('all')

  const capabilities = [
    {
      num: "01",
      icon: <Eye size={22} />,
      title: "ASSET DISCOVERY",
      desc: "Automatically map every internet-facing asset across domains, subdomains, IPs, cloud instances, APIs, and shadow IT — without any agent installation.",
      tags: ["DNS Enumeration", "Cloud Discovery", "Shadow IT"]
    },
    {
      num: "02",
      icon: <Zap size={22} />,
      title: "REAL-TIME MONITORING",
      desc: "Continuous scanning detects new assets, changed configurations, and emerging vulnerabilities the moment they appear — 24/7, 365 days a year.",
      tags: ["Live Alerts", "Change Detection", "Auto-Rescan"]
    },
    {
      num: "03",
      icon: <Target size={22} />,
      title: "VULNERABILITY PRIORITISATION",
      desc: "CVSS-scored findings ranked by real-world exploitability, KEV status, and EPSS probability — so you fix what matters most, first.",
      tags: ["CVSS 3.1", "KEV / EPSS", "Risk Scoring"]
    },
    {
      num: "04",
      icon: <Lock size={22} />,
      title: "SSL / TLS INTELLIGENCE",
      desc: "Track certificate expiry, misconfigured TLS versions, weak cipher suites, and HSTS compliance across your entire digital estate.",
      tags: ["Expiry Alerts", "TLS Grading", "Cipher Audit"]
    },
    {
      num: "05",
      icon: <ShieldCheck size={22} />,
      title: "SECURITY HEADER ANALYSIS",
      desc: "Instantly identify missing or misconfigured HTTP security headers — CSP, HSTS, X-Frame-Options, CORS — with actionable fix guidance.",
      tags: ["CSP", "HSTS", "CORS"]
    },
    {
      num: "06",
      icon: <Radio size={22} />,
      title: "EXPOSED SERVICES DETECTION",
      desc: "Detect open ports, misconfigured admin panels, exposed databases, RDP, SSH, and unintended services that expand your attack surface.",
      tags: ["Port Scanning", "Admin Panel", "DB Exposure"]
    },
    {
      num: "07",
      icon: <BarChart3 size={22} />,
      title: "CYBER SCORE & REPORTING",
      desc: "A single 0–100 Cyber Score reflects your real-time external posture. Generate board-ready PDF reports and executive summaries in one click.",
      tags: ["Cyber Score", "PDF Reports", "Grade Bands"]
    },
    {
      num: "08",
      icon: <LinkIcon size={22} />,
      title: "THIRD-PARTY RISK MONITORING",
      desc: "Extend visibility to your supply chain. Monitor subsidiaries, vendors, and technology partners for external security posture weaknesses.",
      tags: ["Vendor Risk", "Supply Chain", "Subsidiaries"]
    },
    {
      num: "09",
      icon: <Settings size={22} />,
      title: "REMEDIATION WORKFLOW",
      desc: "Assign, track, verify, and close findings directly in the platform. Integrate with Jira, Slack, or your SIEM for seamless team workflows.",
      tags: ["Jira Sync", "Slack Alerts", "SIEM Ready"]
    }
  ]

  const processSteps = [
    {
      num: "01",
      title: "Submit Your Organisation",
      desc: "Provide your primary domain and organisation details. No agents, no network access needed — SOLTRISK works entirely from the outside in."
    },
    {
      num: "02",
      title: "Deep Surface Scan",
      desc: "SOLTRISK maps your entire external attack surface — subdomains, IPs, open ports, technologies, certificates, headers, and misconfigurations."
    },
    {
      num: "03",
      title: "Risk-Ranked Findings",
      desc: "Every finding is scored, prioritised, and delivered with technical context, evidence, and step-by-step remediation guidance."
    },
    {
      num: "04",
      title: "Fix, Verify & Monitor",
      desc: "Remediate findings, trigger re-scans to confirm closure, and let SOLTRISK monitor continuously for new and re-emerging threats."
    }
  ]

  const integrations = [
    { name: "📊 Splunk" },
    { name: "🛡️ Microsoft Sentinel" },
    { name: "☁️ AWS Security Hub" },
    { name: "ServiceNow" },
    { name: "💬 Slack" },
    { name: "QRadar" },
    { name: "Azure Sentinel" },
    { name: "🔔 PagerDuty" },
    { name: "📋 Jira" },
    { name: "📧 Microsoft Teams" },
    { name: "🌐 ServiceNow" },
    { name: "🔑 Okta" },
    { name: "📋 Elastic SIEM" }
  ]

  const scrollToProcess = () => {
    const el = document.getElementById('soltrisk-process')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="soltrisk-page-wrapper">
      <Navbar variant="g3secai" />

      {/* Hero Section */}
      <main className="soltrisk-hero-section">
        <div className="soltrisk-hero-grid">
          
          {/* Left Column Text & CTAs */}
          <motion.div 
            className="soltrisk-hero-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="soltrisk-tag-badge">
              <span className="soltrisk-badge-dot" />
              ATTACK SURFACE MANAGEMENT PLATFORM
            </div>

            <h1 className="soltrisk-hero-title">
              KNOW YOUR <br />
              <span className="soltrisk-gold-text">ATTACK</span> <br />
              <span className="soltrisk-outline-text">SURFACE</span>
            </h1>

            <p className="soltrisk-hero-subtitle">
              <strong>SOLTRISK</strong> continuously discovers, monitors, and prioritises your <strong>external-facing assets</strong> — before attackers do. Real-time intelligence. Zero blind spots.
            </p>

            <div className="soltrisk-hero-actions">
              <button className="btn-soltrisk-outline" onClick={scrollToProcess}>
                <span>See how it works</span>
              </button>
              <button 
                className="btn-soltrisk-primary btn-soltrisk-slow-flash" 
                onClick={() => navigate('/soltrisk-demo')}
              >
                <span>View Brochure</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>

          {/* Right Column Interactive Live Dashboard Window */}
          <motion.div 
            className="soltrisk-dashboard-window"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="soltrisk-window-header">
              <div className="soltrisk-window-dots">
                <span className="window-dot red" />
                <span className="window-dot yellow" />
                <span className="window-dot green" />
              </div>
              <span className="soltrisk-window-title">soltrisk.com — dashboard</span>
            </div>

            <div className="soltrisk-window-body">
              
              {/* Stat Cards Grid */}
              <div className="dash-stats-row">
                <div className="dash-stat-card">
                  <span className="dash-stat-label">CYBER SCORE</span>
                  <div className="dash-stat-val gold">74</div>
                  <span className="dash-stat-sub">Grade B · Good</span>
                </div>
                <div className="dash-stat-card">
                  <span className="dash-stat-label">CRITICAL</span>
                  <div className="dash-stat-val red">3</div>
                  <span className="dash-stat-sub">Findings</span>
                </div>
                <div className="dash-stat-card">
                  <span className="dash-stat-label">ASSETS</span>
                  <div className="dash-stat-val cyan">142</div>
                  <span className="dash-stat-sub">Monitored</span>
                </div>
              </div>

              {/* Recent Findings List */}
              <div>
                <div className="dash-section-title">RECENT FINDINGS</div>
                <div className="dash-findings-list">
                  <div className="dash-finding-item">
                    <div className="dash-finding-info">
                      <span className="finding-dot" style={{ background: '#ef4444' }} />
                      <span>Exposed RDP Port 3389</span>
                    </div>
                    <span className="finding-badge new">NEW</span>
                  </div>

                  <div className="dash-finding-item">
                    <div className="dash-finding-info">
                      <span className="finding-dot" style={{ background: '#f59e0b' }} />
                      <span>SSL Certificate Expiry 7d</span>
                    </div>
                    <span className="finding-badge open">OPEN</span>
                  </div>

                  <div className="dash-finding-item">
                    <div className="dash-finding-info">
                      <span className="finding-dot" style={{ background: '#f59e0b' }} />
                      <span>Missing HSTS Header</span>
                    </div>
                    <span className="finding-badge open">OPEN</span>
                  </div>

                  <div className="dash-finding-item">
                    <div className="dash-finding-info">
                      <span className="finding-dot" style={{ background: '#10b981' }} />
                      <span>CORS Misconfiguration</span>
                    </div>
                    <span className="finding-badge fixed">FIXED</span>
                  </div>
                </div>
              </div>

              {/* Severity Progress Bars */}
              <div>
                <div className="dash-section-title">SEVERITY DISTRIBUTION</div>
                <div className="dash-severity-bars">
                  <div className="severity-row">
                    <span className="severity-label">Critical</span>
                    <div className="severity-track">
                      <div className="severity-fill critical" style={{ width: '20%' }} />
                    </div>
                    <span className="severity-count">3</span>
                  </div>

                  <div className="severity-row">
                    <span className="severity-label">High</span>
                    <div className="severity-track">
                      <div className="severity-fill high" style={{ width: '45%' }} />
                    </div>
                    <span className="severity-count">8</span>
                  </div>

                  <div className="severity-row">
                    <span className="severity-label">Medium</span>
                    <div className="severity-track">
                      <div className="severity-fill medium" style={{ width: '70%' }} />
                    </div>
                    <span className="severity-count">21</span>
                  </div>

                  <div className="severity-row">
                    <span className="severity-label">Low</span>
                    <div className="severity-track">
                      <div className="severity-fill low" style={{ width: '90%' }} />
                    </div>
                    <span className="severity-count">44</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </main>

      {/* Stats Ribbon Bar (Screenshot 2) */}
      <section className="soltrisk-stats-bar">
        <div className="soltrisk-stats-container">
          <div className="soltrisk-stat-item">
            <span className="soltrisk-stat-num">24/7</span>
            <span className="soltrisk-stat-title">Continuous Monitoring</span>
          </div>
          <div className="soltrisk-stat-item">
            <span className="soltrisk-stat-num">500+</span>
            <span className="soltrisk-stat-title">Asset Types Discovered</span>
          </div>
          <div className="soltrisk-stat-item">
            <span className="soltrisk-stat-num">&lt;15M</span>
            <span className="soltrisk-stat-title">Avg. Time to First Finding</span>
          </div>
          <div className="soltrisk-stat-item">
            <span className="soltrisk-stat-num">99.9%</span>
            <span className="soltrisk-stat-title">Platform Uptime SLA</span>
          </div>
        </div>
      </section>

      {/* Platform Capabilities Section (Screenshot 3) */}
      <section className="soltrisk-capabilities-section">
        <div className="soltrisk-section-header">
          <span className="soltrisk-tag-badge">PLATFORM CAPABILITIES</span>
          <h2 className="soltrisk-section-title">
            EVERYTHING YOU NEED TO <br />
            <span className="soltrisk-gold-text">OWN YOUR PERIMETER</span>
          </h2>
          <p className="soltrisk-section-desc">
            SOLTRISK delivers end-to-end attack surface visibility — from discovery through remediation — in a single, unified platform.
          </p>
        </div>

        <div className="soltrisk-cards-grid">
          {capabilities.map((cap, idx) => (
            <Motion3DCard 
              key={idx}
              className="soltrisk-capability-card"
              delay={idx * 0.06}
            >
              <span className="card-num-watermark">{cap.num}</span>
              <div>
                <div className="card-icon-wrapper">
                  {cap.icon}
                </div>
                <h3 className="capability-card-title">{cap.title}</h3>
                <p className="capability-card-desc">{cap.desc}</p>
              </div>
              <div className="capability-tags">
                {cap.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="cap-tag">{tag}</span>
                ))}
              </div>
            </Motion3DCard>
          ))}
        </div>
      </section>

      {/* How SOLTRISK Works Section (Screenshot 4) */}
      <section id="soltrisk-process" className="soltrisk-process-section">
        <div className="soltrisk-process-container-inner">
          <div className="soltrisk-process-grid">
            
            {/* Left Steps */}
            <div>
              <div style={{ textAlign: 'left', marginBottom: '2.5rem' }}>
                <span className="soltrisk-tag-badge" style={{ background: 'rgba(255, 255, 255, 0.15)', color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.3)' }}>
                  <span className="soltrisk-badge-dot" style={{ background: '#fbbf24', boxShadow: '0 0 6px #fbbf24' }} />
                  THE PROCESS
                </span>
                <h2 className="soltrisk-section-title" style={{ textAlign: 'left', margin: '0.75rem 0 1rem', color: '#ffffff' }}>
                  HOW <span style={{ color: '#fbbf24' }}>SOLTRISK</span> WORKS
                </h2>
                <p className="soltrisk-section-desc" style={{ textAlign: 'left', color: '#cbd5e1' }}>
                  A structured, two-phase approach — Discover and Act — built for continuous, real-world risk reduction.
                </p>
              </div>

              <div className="process-steps-list">
                {processSteps.map((step, idx) => (
                  <motion.div 
                    key={idx} 
                    className="process-step-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                  >
                    <span className="step-num">{step.num}</span>
                    <div className="step-content">
                      <h3 className="step-title">{step.title}</h3>
                      <p className="step-desc">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Flow Diagram Card */}
            <motion.div 
              className="process-diagram-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="process-diagram-inner">
                <div className="diagram-phase">
                  <span className="phase-tag">PHASE 1 — DISCOVER</span>
                  <div className="phase-flow-row">
                    <div className="phase-node">Submit</div>
                    <span className="phase-arrow">→</span>
                    <div className="phase-node">Scan</div>
                    <span className="phase-arrow">→</span>
                    <div className="phase-node">Assess</div>
                    <span className="phase-arrow">→</span>
                    <div className="phase-node">Report</div>
                  </div>
                </div>

                <div className="diagram-phase">
                  <span className="phase-tag">PHASE 2 — ACT</span>
                  <div className="phase-flow-row">
                    <div className="phase-node">Access</div>
                    <span className="phase-arrow">→</span>
                    <div className="phase-node">Fix</div>
                    <span className="phase-arrow">→</span>
                    <div className="phase-node">Verify</div>
                    <span className="phase-arrow">→</span>
                    <div className="phase-node">Monitor</div>
                  </div>
                </div>

                <div>
                  <span className="phase-tag" style={{ fontSize: '0.68rem', color: '#1e5288' }}>LAST SCAN METRICS</span>
                  <div className="diagram-metrics-grid" style={{ marginTop: '8px' }}>
                    <div className="metric-mini-box">
                      <div className="metric-mini-num">6</div>
                      <span className="metric-mini-lbl">SUBDOMAINS</span>
                    </div>
                    <div className="metric-mini-box">
                      <div className="metric-mini-num">3</div>
                      <span className="metric-mini-lbl">TECHNOLOGIES</span>
                    </div>
                    <div className="metric-mini-box">
                      <div className="metric-mini-num">14</div>
                      <span className="metric-mini-lbl">FINDINGS</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Risk Intelligence & Cyber Score Section (Screenshot 5) */}
      <section className="soltrisk-risk-section">
        <div className="soltrisk-section-header">
          <span className="soltrisk-tag-badge">RISK INTELLIGENCE</span>
          <h2 className="soltrisk-section-title">
            YOUR <span className="soltrisk-gold-text">CYBER SCORE</span> <br />
            AT A GLANCE
          </h2>
          <p className="soltrisk-section-desc">
            A single severity-weighted score from 0–100 summarises your external security posture. Track improvement over time, compare against baselines, and report to leadership with consistent, explainable metrics — no noisy ticker, just the signal that matters.
          </p>
        </div>

        {/* Radial Score Gauge */}
        <div className="radial-score-container">
          <div className="radial-ring">
            <div className="radial-inner">
              <span className="score-big-num">74</span>
              <span className="score-lbl">SCORE</span>
            </div>
          </div>
          <div className="grade-badge-title">GRADE B · GOOD</div>
          <span className="grade-subtext">2 medium findings pending remediation</span>

          {/* Breakdown Boxes */}
          <div className="score-breakdown-grid">
            <div className="breakdown-box">
              <div className="breakdown-num critical">0</div>
              <span className="breakdown-lbl">CRITICAL</span>
            </div>
            <div className="breakdown-box">
              <div className="breakdown-num high">0</div>
              <span className="breakdown-lbl">HIGH</span>
            </div>
            <div className="breakdown-box">
              <div className="breakdown-num medium">2</div>
              <span className="breakdown-lbl">MEDIUM</span>
            </div>
            <div className="breakdown-box">
              <div className="breakdown-num low">12</div>
              <span className="breakdown-lbl">LOW</span>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Bar Section */}
      <section className="integrations-bar">
        <div className="integrations-lbl">INTEGRATES WITH YOUR SECURITY STACK</div>
        <div className="integrations-track-wrapper">
          <div className="integrations-flex">
            {[...integrations, ...integrations, ...integrations, ...integrations].map((item, idx) => (
              <div key={idx} className="integration-pill">
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Card */}
      <section className="soltrisk-cta-section">
        <motion.div 
          className="soltrisk-cta-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="cta-title">READY TO DISCOVER YOUR BLIND SPOTS?</h2>
          <p className="cta-desc">
            Tell us about your external footprint and security goals. Our team will follow up with next steps — no obligation.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-soltrisk-primary" onClick={() => navigate('/getaquote')}>
              <span>Get Started / Request Quote</span>
              <ArrowRight size={18} />
            </button>
            <button className="btn-soltrisk-outline" onClick={() => navigate('/calendar')}>
              <span>Schedule Live Demo</span>
            </button>
          </div>
        </motion.div>
      </section>

    </div>
  )
}
