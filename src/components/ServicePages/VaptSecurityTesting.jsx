import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar } from '../Navbar'
import '../../styles/servicePages.css'

function CustomSelect({ name, value, onChange, options, placeholder = "Select" }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const selectedOption = options.find((opt) => opt.value === value)
  const displayLabel = selectedOption && selectedOption.value !== '' ? selectedOption.label : placeholder

  const handleSelect = (optionValue) => {
    onChange({ target: { name, value: optionValue } })
    setIsOpen(false)
  }

  return (
    <div className="custom-select-container" ref={dropdownRef}>
      <button
        type="button"
        className={`custom-select-trigger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={value ? 'select-value' : 'select-placeholder'}>
          {displayLabel}
        </span>
        <motion.span
          className="select-arrow"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 5L9 1" stroke="#0d9488" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="custom-select-menu"
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 4, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            {options.map((opt) => {
              const isSelected = opt.value === value
              return (
                <motion.li
                  key={opt.value}
                  className={`custom-select-option ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleSelect(opt.value)}
                  whileHover={{ backgroundColor: '#e6fcf8', color: '#0d9488', x: 2 }}
                  transition={{ duration: 0.15 }}
                >
                  <span>{opt.label}</span>
                  {isSelected && (
                    <span className="check-icon">
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M1 4.5L4.5 8L11 1" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  )}
                </motion.li>
              )
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function VaptSecurityTesting() {
  const navigate = useNavigate()

  const coverageCards = [
    {
      title: 'Web Application Penetration Testing',
      bullets: [
        'Assess applications against OWASP Top 10 & business logic vulnerabilities',
        'Test for authentication, authorization, input validation, and session management flaws',
        'Identify misconfigurations and insecure components'
      ]
    },
    {
      title: 'Mobile Application Penetration Testing',
      bullets: [
        'Security testing for Android & iOS applications',
        'Validate secure storage, API communications, jailbreak/root detection, and reverse engineering resilience',
        'Map findings against OWASP Mobile Top 10'
      ]
    },
    {
      title: 'API Penetration Testing',
      bullets: [
        'Evaluate REST, SOAP, and GraphQL APIs',
        'Test authentication, authorization, rate-limiting, data exposure, and injection flaws',
        'Ensure secure integration with backend systems'
      ]
    },
    {
      title: 'Network Penetration Testing',
      bullets: [
        'Internal & external network penetration testing',
        'Identify misconfigurations, unpatched systems, weak services, and insecure protocols',
        'Simulate real-world attack vectors to assess resilience'
      ]
    },
    {
      title: 'Thick Client Application Penetration Testing',
      bullets: [
        'Analyze client-side applications (desktop, hybrid, etc.)',
        'Assess local storage, memory handling, traffic interception, and reverse engineering vulnerabilities',
        'Verify secure communication with servers'
      ]
    },
    {
      title: 'Source Code Review',
      bullets: [
        'Examine application code to identify security flaws and weak coding practices',
        'Detect issues like injection, auth gaps, secrets exposure, and logic errors',
        'Provide secure coding guidance and remediation'
      ]
    }
  ]

  const methodSteps = [
    {
      num: '1',
      title: 'Scope confirmation',
      desc: 'Confirm assets, test model, environments and exclusions.'
    },
    {
      num: '2',
      title: 'Discovery and testing',
      desc: 'Automated discovery supported by manual validation and exploitation.'
    },
    {
      num: '3',
      title: 'Risk classification',
      desc: 'Classify findings by severity, business impact and exploitability.'
    },
    {
      num: '4',
      title: 'Reporting and walkthrough',
      desc: 'Provide evidence, remediation recommendations and stakeholder review.'
    },
    {
      num: '5',
      title: 'Retesting',
      desc: 'Validate fixes and support final closure where included.'
    }
  ]


const testingOptions = [
  {
    id: "web",
    title: "Web application",
    description: "Authenticated and unauthenticated flows",
  },
  {
    id: "api",
    title: "API testing",
    description: "REST, GraphQL or other interfaces",
  },
  {
    id: "mobile",
    title: "Mobile application",
    description: "Android / iOS and supporting APIs",
  },
  {
    id: "external",
    title: "External network",
    description: "Public IPs and internet-facing services",
  },
  {
    id: "internal",
    title: "Internal network",
    description: "Servers, endpoints and internal IP ranges",
  },
  {
    id: "cloud",
    title: "Cloud review",
    description: "Configuration and exposed workloads",
  },
  {
    id: "thick",
    title: "Thick client",
    description: "Desktop or installed applications",
  },
  {
    id: "retest",
    title: "Retesting",
    description: "Validation after remediation",
  },
];

const assessmentModels = [
  {
    id: "black",
    title: "Black box",
    description: "No credentials or internal knowledge",
  },
  {
    id: "grey",
    title: "Grey box",
    description: "Limited credentials or context",
  },
  {
    id: "white",
    title: "White box",
    description: "Full knowledge, architecture or source support",
  },
];

  const downloadDraft = () => {
    const content = `
G3 Cyberspace - VAPT Quote Request

Organisation: ${formData.organisation}
Business Email: ${formData.email}

Testing Types:
${formData.testingTypes.join(", ") || "None selected"}

Assessment Model: ${formData.assessmentModel}

Web Applications: ${formData.webApplications}
APIs: ${formData.apis}
Mobile Apps: ${formData.mobileApps}
Public IPs: ${formData.publicIps}
Internal IPs: ${formData.internalIps}

Target Date: ${formData.targetDate}

Authentication Model: ${formData.authentication}
Environment: ${formData.environment}

Additional Context:
${formData.additionalContext}
`;

    const blob = new Blob([content], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "vapt-quote-draft.txt";
    link.click();

    URL.revokeObjectURL(url);
  };



   const [formData, setFormData] = useState({
    organisation: "",
    email: "",
    testingTypes: [],
    assessmentModel: "",
    webApplications: 0,
    apis: 0,
    mobileApps: 0,
    publicIps: 0,
    internalIps: 0,
    targetDate: "",
    authentication: "",
    environment: "",
    additionalContext: "",
    consent: false,
  });

  const handleTestingChange = (id) => {
    setFormData((prev) => {
      const exists = prev.testingTypes.includes(id);
      return {
        ...prev,
        testingTypes: exists
          ? prev.testingTypes.filter((t) => t !== id)
          : [...prev.testingTypes, id],
      };
    });
  };

  const authenticationOptions = [
    { value: '', label: 'Select' },
    { value: 'authenticated', label: 'Authenticated' },
    { value: 'unauthenticated', label: 'Unauthenticated' },
    { value: 'both', label: 'Both' },
  ]

  const environmentOptions = [
    { value: '', label: 'Select' },
    { value: 'production', label: 'Production' },
    { value: 'staging', label: 'Staging' },
    { value: 'development', label: 'Development' },
    { value: 'hybrid', label: 'Hybrid' },
  ]

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.consent) {
      alert("Please provide consent before submitting.");
      return;
    }

    console.log("VAPT Quote Request:", formData);
    alert("VAPT proposal request submitted!");
  };

  return (
    <div className="service-page-layout light-theme">
      <Navbar />

      <main className="service-hero-centered-screen">
        <div className="service-hero-center-box">


          {/* Main Headline */}
          <h1 className="service-hero-heading">
            Plan the right <br className="desktop-break" />
            security assessment and <br className="desktop-break" />
            receive a <span className="highlight-text-gradient">tailored quote.</span>
          </h1>

          {/* Subtitle / Description */}
          <p className="service-hero-description left-aligned-hero-desc">
            Choose the testing type, assessment model, target environment and asset volumes so we can estimate the effort and prepare a tailored commercial quote.
          </p>

          {/* Action Buttons Centered */}
          <div className="service-buttons-centered">
            <button className="btn-compliance-quote" onClick={() => navigate('/getaquote')}>
              <span className="btn-text-roll">
                <span className="text-original">Discuss with our team</span>
                <span className="text-duplicate" aria-hidden="true">Discuss with our team</span>
              </span>
            </button>
            <button className="btn-discuss-req" onClick={() => navigate('/services/vapt-security-testing/intake')}>
              <span className="btn-text-roll">
                <span className="text-original">Go to intake form</span>
                <span className="text-duplicate" aria-hidden="true">Go to intake form</span>
              </span>
            </button>
          </div>

        

          {/* Testing Coverage Section (Centered - Component 1) */}
          <div className="testing-coverage-section">

            <h2 className="standards-heading">
              Focused coverage across the <br className="desktop-break" />
              application and infrastructure <br className="desktop-break" />
              attack surface.
            </h2>

            {/* 7 Coverage Cards Grid with Left-to-Right Entrance */}
            <div className="vapt-7-cards-grid">
              {coverageCards.map((card, index) => (
                <motion.div
                  key={index}
                  className="vapt-coverage-card"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: (index % 3) * 0.1, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="vapt-coverage-card-inner">
                    <h3 className="vapt-coverage-card-title">{card.title}</h3>
                    <ul className="vapt-coverage-bullets">
                      {card.bullets.map((bullet, bIdx) => (
                        <li key={bIdx}>
                          <span className="bullet-dot">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Method Section (Centered below Component 1 - Component 2) */}
          <div className="method-section-centered">

            <motion.div 
              className="method-card-box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {methodSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="method-step-row"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="method-step-num">{step.num}</div>
                  <div className="method-step-info">
                    <h4 className="method-step-title">{step.title}</h4>
                    <p className="method-step-desc">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}
