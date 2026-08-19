import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Navbar } from '../Navbar'
import { Shield, CheckCircle2, ArrowRight, Activity, FileCheck, Layers, Lock, Users, AlertTriangle } from 'lucide-react'
import '../../styles/servicePages.css'

export default function Tracs360() {
  const navigate = useNavigate()

  const features = [
    {
      icon: <Shield size={24} />,
      title: "Automated Vendor Risk Assessments",
      desc: "Streamline third-party evaluations with automated questionnaires, security scoring, and risk classification."
    },
    {
      icon: <Activity size={24} />,
      title: "Continuous Threat & Exposure Monitoring",
      desc: "Monitor vendor security postures continuously to catch risk degradation, leaked credentials, and unpatched vulnerabilities."
    },
    {
      icon: <FileCheck size={24} />,
      title: "Contract & SLA Lifecycle Management",
      desc: "Align third-party engagements with ISO 27001, SOC 2, DPDPA, and GDPR regulatory compliance standards."
    },
    {
      icon: <Layers size={24} />,
      title: "Centralized Vendor Trust Hub",
      desc: "Single pane of glass for all supplier risks, evidence artifacts, mitigation plans, and audit-ready reports."
    }
  ]

  return (
    <div className="service-page-layout light-theme">
      <Navbar variant="g3secai" />

      <main className="vciso-hero-container" style={{ padding: "4rem 1.5rem 6rem" }}>
        <div className="service-page-container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          
          {/* Hero Section */}
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="service-badge-pill" style={{ background: "#f0f7ff", color: "#1e5288" }}>
                ENTERPRISE TPRM PLATFORM
              </span>
              <h1 className="service-page-title" style={{ color: "#0f172a", fontSize: "clamp(2.5rem, 4.5vw, 3.8rem)", margin: "1rem 0" }}>
                TRACS <span className="soc-gradient-text">360</span>
              </h1>
              <p className="service-page-subtitle" style={{ margin: "0 auto 2.5rem auto", maxWidth: "800px" }}>
                Continuous Third-Party Risk Management & Vendor Assurance Platform. Automate vendor risk assessments, continuously monitor supplier security postures, and maintain audit-ready compliance.
              </p>

              <div style={{ display: "flex", gap: "1.25rem", justifyContent: "center", flexWrap: "wrap" }}>
                <button className="service-btn-primary" onClick={() => navigate('/getaquote')}>
                  <span>Get Started / Request Proposal</span>
                  <ArrowRight size={18} />
                </button>
                <button className="service-btn-secondary" onClick={() => navigate('/calendar')}>
                  <span>Schedule Demo</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Key Features Grid */}
          <div style={{ marginTop: "4rem" }}>
            <h2 className="standards-heading" style={{ textAlign: "center", marginBottom: "3rem" }}>
              Key Capabilities of TRACS 360
            </h2>

            <div className="standards-cards-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
              {features.map((feat, idx) => (
                <motion.div
                  key={idx}
                  className="standards-card-item"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="detail-card-icon" style={{ background: "rgba(30, 82, 136, 0.1)", color: "#1e5288" }}>
                    {feat.icon}
                  </div>
                  <h3 className="standards-card-title">{feat.title}</h3>
                  <p className="standards-card-desc">{feat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              marginTop: "5rem",
              background: "linear-gradient(135deg, #092c4c 0%, #1e5288 100%)",
              borderRadius: "24px",
              padding: "3.5rem 2.5rem",
              color: "#ffffff",
              textAlign: "center",
              boxShadow: "0 20px 45px rgba(9, 44, 76, 0.25)"
            }}
          >
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", margin: "0 0 1rem 0" }}>
              Ready to automate your vendor risk management?
            </h2>
            <p style={{ fontSize: "1.05rem", color: "#e2e8f0", maxWidth: "700px", margin: "0 auto 2rem auto" }}>
              Empower your enterprise with real-time vendor risk intelligence and seamless compliance governance.
            </p>
            <button className="btn-compliance-quote" onClick={() => navigate('/getaquote')} style={{ background: "#ffffff", color: "#092c4c", fontWeight: "800" }}>
              Request TRACS 360 Demo & Quote
            </button>
          </motion.div>

        </div>
      </main>
    </div>
  )
}
