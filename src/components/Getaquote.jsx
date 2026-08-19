import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Navbar } from "./Navbar";
import { ChevronDown, Check, Download, Send, CheckCircle2, ShieldCheck, Clock, FileText } from "lucide-react";
import '../styles/servicePages.css';
import '../styles/quoteForm.css';

// Clean Framer Motion 3D Tilt Card
const Motion3DCard = ({ children, className, onClick }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for 3D rotation
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
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {children}
    </motion.div>
  );
};

// Reusable Custom Dropdown Component with Framer Motion
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

const GetaQuote = () => {
  // Form State
  const [formData, setFormData] = useState({
    organisation: "",
    contactName: "",
    businessEmail: "",
    employeeStrength: "",
    requirements: [],
    requirementSummary: "",
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  // Requirement Options
  const requirementOptions = [
    { id: "vapt", title: "VAPT", desc: "Security testing" },
    { id: "tprm", title: "TPRM", desc: "Professional services / platform" },
    { id: "soc", title: "SOC Operations", desc: "Monitoring and Incident support" },
    { id: "privacy", title: "Privacy", desc: "DPDPA, GDPR, Saudi PDPL and UAE privacy" },
    { id: "compliance", title: "Compliance", desc: "ISO 27001, SOC 2 and others" },
    { id: "g3secai", title: "G3SEC.ai", desc: "Product or combined engagement" },
  ];

  // Employee Strength Options
  const employeeStrengthOptions = [
    { value: "1-10", label: "1 - 10 employees" },
    { value: "11-50", label: "11 - 50 employees" },
    { value: "51-200", label: "51 - 200 employees" },
    { value: "201-500", label: "201 - 500 employees" },
    { value: "501-1000", label: "501 - 1,000 employees" },
    { value: "1000+", label: "1,000+ employees" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleRequirement = (id) => {
    setFormData((prev) => {
      const exists = prev.requirements.includes(id);
      return {
        ...prev,
        requirements: exists
          ? prev.requirements.filter((item) => item !== id)
          : [...prev.requirements, id],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  const handleDownloadDraft = () => {
    const draftText = `--- G3 CYBERSPACE QUOTE REQUEST DRAFT ---
Organisation: ${formData.organisation || "N/A"}
Contact Name: ${formData.contactName || "N/A"}
Business Email: ${formData.businessEmail || "N/A"}
Employee Strength: ${formData.employeeStrength || "N/A"}
Requirements: ${
      formData.requirements.length > 0
        ? formData.requirements
            .map((id) => requirementOptions.find((r) => r.id === id)?.title)
            .join(", ")
        : "None selected"
    }
Requirement Summary: ${formData.requirementSummary || "N/A"}
Consent Given: ${formData.consent ? "Yes" : "No"}
Generated Date: ${new Date().toLocaleDateString()}
`;

    const blob = new Blob([draftText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `quote-request-draft-${formData.organisation || "g3"}.txt`;
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
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
            maxWidth: "1240px",
            width: "100%",
            margin: "0 auto",
            alignItems: "start",
          }}
        >
          {/* Left Column: Heading & Value Props */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                background: "#ffffff",
                border: "1.5px solid rgba(13, 148, 136, 0.25)",
                borderRadius: "24px",
                padding: "2.5rem 2rem",
                boxShadow:
                  "0 18px 45px -10px rgba(13, 148, 136, 0.15), 0 4px 18px rgba(15, 23, 42, 0.04)",
                textAlign: "left",
                boxSizing: "border-box",
              }}
            >
              <h1
                className="service-hero-heading"
                style={{
                  fontSize: "clamp(1.85rem, 3.2vw, 2.6rem)",
                  lineHeight: 1.28,
                  textAlign: "left",
                  margin: 0,
                }}
              >
                Tell us what you need. <br />
                <span className="soc-gradient-text">
                  We will prepare a quote aligned to your requirement.
                </span>
              </h1>
            </motion.div>

            {/* Left Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                background: "linear-gradient(145deg, #f0fdfa 0%, #e0f2fe 100%)",
                border: "1.5px solid rgba(13, 148, 136, 0.2)",
                borderRadius: "24px",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              <h3 style={{ fontSize: "1.1rem", fontWeight: "800", color: "#0f172a", margin: 0 }}>
                Why partner with G3 Cyberspace?
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <div style={{ padding: "8px", borderRadius: "10px", background: "rgba(13, 148, 136, 0.15)", color: "#0f766e" }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <strong style={{ fontSize: "0.92rem", color: "#0f172a" }}>Fast Proposal Turnaround</strong>
                    <p style={{ fontSize: "0.84rem", color: "#64748b", margin: "2px 0 0 0", lineHeight: 1.4 }}>
                      Detailed commercial proposal delivered within 24-48 hours.
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <div style={{ padding: "8px", borderRadius: "10px", background: "rgba(13, 148, 136, 0.15)", color: "#0f766e" }}>
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <strong style={{ fontSize: "0.92rem", color: "#0f172a" }}>Tailored Scope & Pricing</strong>
                    <p style={{ fontSize: "0.84rem", color: "#64748b", margin: "2px 0 0 0", lineHeight: 1.4 }}>
                      Customized security scope tailored strictly to your architecture and goals.
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <div style={{ padding: "8px", borderRadius: "10px", background: "rgba(13, 148, 136, 0.15)", color: "#0f766e" }}>
                    <FileText size={20} />
                  </div>
                  <div>
                    <strong style={{ fontSize: "0.92rem", color: "#0f172a" }}>Enterprise NDA & Privacy</strong>
                    <p style={{ fontSize: "0.84rem", color: "#64748b", margin: "2px 0 0 0", lineHeight: 1.4 }}>
                      Your shared data remains strictly confidential and protected.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Tailored Quote Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            style={{ width: "100%" }}
          >
            <div className="quote-form-card">
              {/* Form Header */}
              <div className="quote-form-header">
                <h2 className="quote-form-title">Get Your Tailored Quote</h2>
                <p className="quote-form-subtitle">
                  Share the essential details below so our team can prepare the right commercial quote.
                  In production, the request can route directly to email or CRM.
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
                      Thank you! Your quote request has been generated successfully. Our team will contact you shortly.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form Content */}
              <form onSubmit={handleSubmit} className="quote-form-body">
                {/* Row 1: Organisation & Contact name */}
                <div className="quote-form-grid-2">
                  <div className="quote-form-field">
                    <label className="quote-form-label">Organisation</label>
                    <input
                      type="text"
                      name="organisation"
                      className="quote-form-input"
                      value={formData.organisation}
                      onChange={handleInputChange}
                      placeholder=""
                    />
                  </div>

                  <div className="quote-form-field">
                    <label className="quote-form-label">Contact name</label>
                    <input
                      type="text"
                      name="contactName"
                      className="quote-form-input"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      placeholder=""
                    />
                  </div>
                </div>

                {/* Row 2: Business email & Employee strength dropdown */}
                <div className="quote-form-grid-2">
                  <div className="quote-form-field">
                    <label className="quote-form-label">Business email</label>
                    <input
                      type="email"
                      name="businessEmail"
                      className="quote-form-input"
                      value={formData.businessEmail}
                      onChange={handleInputChange}
                      placeholder=""
                    />
                  </div>

                  <div className="quote-form-field">
                    <label className="quote-form-label">Employee strength</label>
                    <CustomDropdown
                      options={employeeStrengthOptions}
                      value={formData.employeeStrength}
                      onChange={(val) => setFormData((prev) => ({ ...prev, employeeStrength: val }))}
                      placeholder="Select"
                    />
                  </div>
                </div>

                {/* Requirement Section: Framer Motion 3D Cards */}
                <div className="quote-form-field">
                  <label className="quote-form-label">Requirement</label>
                  <div className="requirements-grid">
                    {requirementOptions.map((item) => {
                      const isSelected = formData.requirements.includes(item.id);
                      return (
                        <Motion3DCard
                          key={item.id}
                          className={`requirement-card ${isSelected ? "selected" : ""}`}
                          onClick={() => toggleRequirement(item.id)}
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

                {/* Requirement summary */}
                <div className="quote-form-field">
                  <label className="quote-form-label">Requirement summary</label>
                  <textarea
                    name="requirementSummary"
                    className="quote-form-textarea"
                    value={formData.requirementSummary}
                    onChange={handleInputChange}
                    placeholder="Describe the business objective, scope, environment and expected timeline."
                  />
                </div>

                {/* Consent Checkbox */}
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

                {/* Action Buttons using Framer Motion */}
                <div className="quote-actions-row">
                  <motion.button
                    type="submit"
                    className="btn-request-quote"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <Send size={18} />
                    <span>Request Your Quote</span>
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
        </div>
      </main>
    </div>
  );
};

export default GetaQuote;