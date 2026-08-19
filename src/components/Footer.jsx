import React from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import '../styles/footer.css'
import logoG3 from '../assets/logo/g3.png'
import logoG3Ai from '../assets/logo/g3Ai.png'

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } }
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
}

export function Footer({ variant }) {
  const location = useLocation()
  const isG3AiPage =
    variant === 'g3secai' ||
    location.pathname === '/g3secai' ||
    location.pathname.startsWith('/products/') ||
    location.pathname === '/tracs360' ||
    location.pathname === '/soltrisk'

  const logoSrc = isG3AiPage ? logoG3Ai : logoG3

  return (
    <motion.footer 
      className="footer-root"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeIn}
    >
      {/* Main Footer Body */}
      <div className="footer-body">
        <motion.div className="footer-container" variants={staggerContainer}>

          {/* Column 1: Brand */}
          <motion.div className="footer-brand-col" variants={fadeUp}>
            <div className="footer-logo-block">
              <img src={logoSrc} alt={isG3AiPage ? "G3SEC.ai Logo" : "G3 Cyberspace Logo"} className="footer-logo-img" />
              <div className="footer-logo-text">
                {/* <span className="footer-company-name">G3 Cyberspace</span> */}
                <span className="footer-tagline">GOVERN · GUARD · GROW</span>
              </div>
            </div>
            <p className="footer-brand-desc">
              Cybersecurity, compliance, privacy, third-party risk and risk intelligence delivered through practical consulting, managed operations and purpose-built technology.
            </p>
          </motion.div>

          {/* Column 2: Services */}
          <motion.div className="footer-links-col" variants={fadeUp}>
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-link-list">
              <li><a href="#assurance">Cybersecurity &amp; compliance assurance</a></li>
              <li><a href="#vapt">VAPT &amp; security testing</a></li>
              <li><a href="#tprm">Third-party risk services</a></li>
              <li><a href="#soc">SOC operations</a></li>
              <li><a href="#privacy">Data protection &amp; privacy</a></li>
              <li><a href="#vciso">vCISO &amp; vDPO advisory</a></li>
            </ul>
          </motion.div>

          {/* Column 3: Products */}
          <motion.div className="footer-links-col" variants={fadeUp}>
            <h4 className="footer-col-title">Products</h4>
            <ul className="footer-link-list">
              <li><a href="/g3secai">G3SEC.ai platform</a></li>
              <li><a href="/products/tracs360">TRACS 360</a></li>
              <li><a href="/products/soltrisk">SOLTRISK ASM</a></li>
              <li><a href="/services/cybersecurity-compliance">Compliance Assurance</a></li>
              <li><a href="/services/privacy-data-protection">Privacy Automation</a></li>
              <li><a href="#contract">Contract Compliance</a></li>
            </ul>
          </motion.div>

          {/* Column 4: Contact */}
          <motion.div className="footer-links-col" variants={fadeUp}>
            <h4 className="footer-col-title">Contact</h4>
            <address className="footer-address">
              4th Floor, Tek Towers, Rajiv Gandhi Salai,<br />
              OMR, Thoraipakkam, Chennai 600097
            </address>
            <div className="footer-contact-links">
              <a href="mailto:info@g3cyberspace.com">info@g3cyberspace.com</a>
              <a href="tel:+919500391184">+91 95003 91184</a>
            </div>
            <a href="#contact" className="footer-contact-team">Contact our team</a>
          </motion.div>

        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div className="footer-bottom-bar" variants={fadeUp}>
        <div className="footer-bottom-container">
          <span className="footer-copyright">© {new Date().getFullYear()} G3 Cyberspace Private Limited. All rights reserved.</span>
          <nav className="footer-bottom-nav">
            <a href="#about">About</a>
            <span className="footer-dot">·</span>
            <a href="#privacy">Privacy Policy</a>
            <span className="footer-dot">·</span>
            <a href="#careers">Careers</a>
            <span className="footer-dot">·</span>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </motion.div>
    </motion.footer>
  )
}
