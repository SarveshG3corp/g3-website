import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Navbar } from "../Navbar";
import { ChevronDown, Check, Calendar, Download, Send, CheckCircle2, ShieldCheck, Target, Cpu } from "lucide-react";
import '../../styles/servicePages.css';
import '../../styles/quoteForm.css';

// Clean Framer Motion 3D Tilt Card Component
const Motion3DCard = ({ children, className, onClick }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 350, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 350, damping: 25 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
    e.currentTarget.style.setProperty("--mouse-x", `${((px + 0.5) * 100).toFixed(1)}%`);
    e.currentTarget.style.setProperty("--mouse-y", `${((py + 0.5) * 100).toFixed(1)}%`);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.965 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {children}
    </motion.div>
  );
};

// Reusable Custom Dropdown Component
const CustomDropdown = ({ options, value, onChange, placeholder = "Select" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className={`custom-dropdown-container ${isOpen ? "is-open" : ""}`} ref={dropdownRef}>
      <button
        type="button"
        className={`custom-dropdown-trigger ${!selectedOption ? "placeholder" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <motion.span
          className="custom-dropdown-arrow"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="custom-dropdown-menu"
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            {options.map((option) => {
              const isSelected = option.value === value;
              return (
                <div
                  key={option.value}
                  className={`custom-dropdown-option ${isSelected ? "selected" : ""}`}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                >
                  <span>{option.label}</span>
                  {isSelected && <Check size={16} className="custom-dropdown-check" />}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const VaptIntake = () => {
  // Form State
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

  const [submitted, setSubmitted] = useState(false);

  // Testing Type Options (8 cards)
  const testingOptions = [
    { id: "web", title: "Web application", desc: "Authenticated and unauthenticated flows" },
    { id: "api", title: "API testing", desc: "REST, GraphQL or other interfaces" },
    { id: "mobile", title: "Mobile application", desc: "Android / iOS and supporting APIs" },
    { id: "external_net", title: "External network", desc: "Public IPs and internet - facing services" },
    { id: "internal_net", title: "Internal network", desc: "Servers, endpoints and internal IP ranges" },
    { id: "cloud", title: "Cloud review", desc: "Configuration and exposed workloads" },
    { id: "thick_client", title: "Thick client", desc: "Desktop or installed applications" },
    { id: "retesting", title: "Retesting", desc: "Validation after remediation" },
  ];

  // Assessment Model Options (3 cards)
  const assessmentModels = [
    { id: "black_box", title: "Black box", desc: "No credentials or internal knowledge" },
    { id: "grey_box", title: "Grey box", desc: "Limited credentials or context" },
    { id: "white_box", title: "White box", desc: "Full knowledge, architecture or source support" },
  ];

  // Dropdown Options
  const authenticationOptions = [
    { value: "authenticated", label: "Authenticated" },
    { value: "unauthenticated", label: "Unauthenticated" },
    { value: "both", label: "Both / Mixed" },
  ];

  const environmentOptions = [
    { value: "production", label: "Production" },
    { value: "staging", label: "Staging / Pre-prod" },
    { value: "development", label: "Development" },
    { value: "uat", label: "UAT" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleTestingType = (id) => {
    setFormData((prev) => {
      const exists = prev.testingTypes.includes(id);
      return {
        ...prev,
        testingTypes: exists
          ? prev.testingTypes.filter((item) => item !== id)
          : [...prev.testingTypes, id],
      };
    });
  };


  const handleDownloadDraft = () => {
    const draftText = `--- G3 CYBERSPACE VAPT QUOTE INTAKE DRAFT ---
Organisation: ${formData.organisation || "N/A"}
Business Email: ${formData.email || "N/A"}
Types of Testing: ${
      formData.testingTypes.length > 0
        ? formData.testingTypes
            .map((id) => testingOptions.find((t) => t.id === id)?.title)
            .join(", ")
        : "None selected"
    }
Assessment Model: ${
      assessmentModels.find((m) => m.id === formData.assessmentModel)?.title || "N/A"
    }
Asset Counts:
  - Web Applications: ${formData.webApplications}
  - APIs: ${formData.apis}
  - Mobile Apps: ${formData.mobileApps}
  - Public IPs: ${formData.publicIps}
  - Internal IPs: ${formData.internalIps}
Target Date: ${formData.targetDate || "N/A"}
Authentication Model: ${formData.authentication || "N/A"}
Environment: ${formData.environment || "N/A"}
Additional Context: ${formData.additionalContext || "N/A"}
Consent Given: ${formData.consent ? "Yes" : "No"}
Generated Date: ${new Date().toLocaleDateString()}
`;

    const blob = new Blob([draftText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `vapt-quote-intake-${formData.organisation || "g3"}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="service-page-layout light-theme">
      <Navbar />

      <main className="vciso-hero-container" style={{ padding: "3.5rem 1.5rem 5rem" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            maxWidth: "780px",
            width: "100%",
            margin: "0 auto",
          }}
        >

          {/* Top Center: Get a VAPT Quote Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ width: "100%" }}
          >
            <div className="quote-form-card">
              {/* Form Header */}
              <div className="quote-form-header">
                <span className="eyebrow-badge">DEDICATED INTAKE</span>
                <h2 className="quote-form-title">Get a VAPT Quote</h2>
                <p className="quote-form-subtitle">
                  Provide the essential technical inputs needed to estimate effort, timeline and commercials.
                </p>
              </div>

              {/* Success Notification Banner */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    className="submit-success-banner"
                    initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                    animate={{ opacity: 1, height: "auto", marginBottom: "1.5rem" }}
                    exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  >
                    <CheckCircle2 size={20} />
                    <span>
                      Thank you! Your VAPT proposal request has been generated successfully. Our cybersecurity team will contact you shortly.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form Content */}
              <form className="quote-form-body" action="https://submit-form.com/UWXw8uoaG"
                    method="POST">
                {/* Row 1: Organisation & Business email */}
                <div className="quote-form-grid-2">
                  <div className="quote-form-field">
                    <label className="quote-form-label">Organisation</label>
                    <input
                      type="text"
                      name="organisation"
                      className="quote-form-input"
                      value={formData.organisation}
                      onChange={handleInputChange}
                      placeholder="Company / legal entity"
                    />
                  </div>

                  <div className="quote-form-field">
                    <label className="quote-form-label">Business email</label>
                    <input
                      type="email"
                      name="email"
                      className="quote-form-input"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@company.com"
                    />
                  </div>
                </div>

                {/* Section 2: Type of testing (8 Check Cards Grid) */}
                <div className="quote-form-field">
                  <label className="quote-form-label">Type of testing</label>
                  <div className="requirements-grid">
                    {testingOptions.map((item) => {
                      const isSelected = formData.testingTypes.includes(item.id);
                      return (
                        <Motion3DCard
                          key={item.id}
                          className={`requirement-card ${isSelected ? "selected" : ""}`}
                          onClick={() => toggleTestingType(item.id)}
                        >
                          <div className="requirement-checkbox">
                            {isSelected && <Check size={14} strokeWidth={3} />}
                          </div>
                          <div className="requirement-info">
                            <span className="requirement-title">{item.title}</span>
                            <span className="requirement-desc">{item.desc}</span>
                          </div>
                        </Motion3DCard>
                      );
                    })}
                  </div>
                </div>

                {/* Section 3: Assessment model (3 Radio Cards Grid) */}
                <div className="quote-form-field">
                  <label className="quote-form-label">Assessment model</label>
                  <div className="radio-cards-grid">
                    {assessmentModels.map((model) => {
                      const isSelected = formData.assessmentModel === model.id;
                      return (
                        <Motion3DCard
                          key={model.id}
                          className={`requirement-card ${isSelected ? "selected" : ""}`}
                          onClick={() => setFormData((prev) => ({ ...prev, assessmentModel: model.id }))}
                        >
                          <div className="radio-circle-btn">
                            {isSelected && <div className="radio-circle-dot" />}
                          </div>
                          <div className="requirement-info">
                            <span className="requirement-title">{model.title}</span>
                            <span className="requirement-desc">{model.desc}</span>
                          </div>
                        </Motion3DCard>
                      );
                    })}
                  </div>
                </div>

                {/* Section 4: Web apps, APIs, Mobile apps (3-Column Grid) */}
                <div className="quote-form-grid-3">
                  <div className="quote-form-field">
                    <label className="quote-form-label">Web applications</label>
                    <input
                      type="number"
                      min="0"
                      name="webApplications"
                      className="quote-form-input"
                      value={formData.webApplications}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="quote-form-field">
                    <label className="quote-form-label">APIs</label>
                    <input
                      type="number"
                      min="0"
                      name="apis"
                      className="quote-form-input"
                      value={formData.apis}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="quote-form-field">
                    <label className="quote-form-label">Mobile apps</label>
                    <input
                      type="number"
                      min="0"
                      name="mobileApps"
                      className="quote-form-input"
                      value={formData.mobileApps}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Section 5: Public IPs, Internal IPs, Target date (3-Column Grid) */}
                <div className="quote-form-grid-3">
                  <div className="quote-form-field">
                    <label className="quote-form-label">Public IPs</label>
                    <input
                      type="number"
                      min="0"
                      name="publicIps"
                      className="quote-form-input"
                      value={formData.publicIps}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="quote-form-field">
                    <label className="quote-form-label">Internal IPs</label>
                    <input
                      type="number"
                      min="0"
                      name="internalIps"
                      className="quote-form-input"
                      value={formData.internalIps}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="quote-form-field">
                    <label className="quote-form-label">Target date</label>
                    <div className="quote-date-input-wrapper">
                      <input
                        type="date"
                        name="targetDate"
                        className="quote-form-input"
                        value={formData.targetDate}
                        onChange={handleInputChange}
                      />
                      <Calendar size={18} className="quote-date-icon" />
                    </div>
                  </div>
                </div>

                {/* Section 6: Authentication model & Environment (2-Column Custom Dropdowns) */}
                <div className="quote-form-grid-2">
                  <div className="quote-form-field">
                    <label className="quote-form-label">Authentication model</label>
                    <CustomDropdown
                      options={authenticationOptions}
                      value={formData.authentication}
                      onChange={(val) => setFormData((prev) => ({ ...prev, authentication: val }))}
                      placeholder="Select"
                    />
                  </div>

                  <div className="quote-form-field">
                    <label className="quote-form-label">Environment</label>
                    <CustomDropdown
                      options={environmentOptions}
                      value={formData.environment}
                      onChange={(val) => setFormData((prev) => ({ ...prev, environment: val }))}
                      placeholder="Select"
                    />
                  </div>
                </div>

                {/* Section 7: Additional context */}
                <div className="quote-form-field">
                  <label className="quote-form-label">Additional context</label>
                  <textarea
                    name="additionalContext"
                    className="quote-form-textarea"
                    value={formData.additionalContext}
                    onChange={handleInputChange}
                    placeholder="Technology stack, hosting, compliance driver, exclusions or other considerations."
                  />
                </div>

                {/* Section 8: Consent Checkbox */}
                <motion.div
                  className={`consent-card ${formData.consent ? "selected" : ""}`}
                  onClick={() => setFormData((prev) => ({ ...prev, consent: !prev.consent }))}
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                >
                  <div className="requirement-checkbox">
                    {formData.consent && <Check size={14} strokeWidth={3} />}
                  </div>
                  <span className="consent-text">
                    I consent to G3 Cyberspace Private Limited processing my personal data for this request in accordance with the{" "}
                    <a
                      href="#"
                      className="consent-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Privacy Policy
                    </a>
                    .
                  </span>
                </motion.div>

                {/* Section 9: Action Buttons */}
                <div className="quote-actions-row">
                  <motion.button
                    type="submit"
                    className="btn-request-quote"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <Send size={18} />
                    <span>Request VAPT proposal</span>
                  </motion.button>

                  <motion.button
                    type="button"
                    className="btn-download-draft"
                    onClick={handleDownloadDraft}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <Download size={18} />
                    <span>Download draft</span>
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Below Form: Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{
              width: "100%",
              background: "linear-gradient(145deg, #f0fdfa 0%, #e0f2fe 100%)",
              border: "1.5px solid rgba(13, 148, 136, 0.2)",
              borderRadius: "24px",
              padding: "2rem 2.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              boxSizing: "border-box",
            }}
          >
            <h3 style={{ fontSize: "1.15rem", fontWeight: "800", color: "#0f172a", margin: 0 }}>
              Why request VAPT from G3 Cyberspace?
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1.25rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <div style={{ padding: "8px", borderRadius: "10px", background: "rgba(13, 148, 136, 0.15)", color: "#0f766e" }}>
                  <Target size={20} />
                </div>
                <div>
                  <strong style={{ fontSize: "0.92rem", color: "#0f172a" }}>Zero-day & Business Logic Coverage</strong>
                  <p style={{ fontSize: "0.84rem", color: "#64748b", margin: "2px 0 0 0", lineHeight: 1.4 }}>
                    Deep manual assessment beyond basic automated scanner noise.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <div style={{ padding: "8px", borderRadius: "10px", background: "rgba(13, 148, 136, 0.15)", color: "#0f766e" }}>
                  <Cpu size={20} />
                </div>
                <div>
                  <strong style={{ fontSize: "0.92rem", color: "#0f172a" }}>Full-Stack Security Assessment</strong>
                  <p style={{ fontSize: "0.84rem", color: "#64748b", margin: "2px 0 0 0", lineHeight: 1.4 }}>
                    Web, APIs, Mobile, Network, and Cloud configuration reviews.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <div style={{ padding: "8px", borderRadius: "10px", background: "rgba(13, 148, 136, 0.15)", color: "#0f766e" }}>
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <strong style={{ fontSize: "0.92rem", color: "#0f172a" }}>Complimentary Retesting</strong>
                  <p style={{ fontSize: "0.84rem", color: "#64748b", margin: "2px 0 0 0", lineHeight: 1.4 }}>
                    Validation of fixes included to ensure complete vulnerability remediation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default VaptIntake;
