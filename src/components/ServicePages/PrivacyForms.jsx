import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "../Navbar";
import { CheckCircle2, ChevronRight, ChevronLeft, RefreshCw, ShieldCheck, Award } from "lucide-react";
import '../../styles/servicePages.css';
import '../../styles/quoteForm.css';

const privacyQuestions = [
  {
    id: 1,
    question: "Does the organisation engage in the collection, receipt, generation, or otherwise obtainment of Personal Data pertaining to Data Principals in any form whether directly, indirectly, through automated means, or via third-party sources thereby invoking the applicability of the Digital Personal Data Protection Act, 2023, and its attendant obligations?",
    options: [
      "Yes, we collect the personal data.",
      "No, we do not collect any personal data.",
      "We collect some data but not sure its personal data."
    ]
  },
  {
    id: 2,
    question: "Is the organisation’s acquisition of consent structured to ensure that such consent is demonstrably valid, informed, uncoerced, and based on a disclosure framework that sufficiently apprises the Data Principal of the nature, scope, and implications of the proposed processing activity?",
    options: [
      "Yes, we take valid consent.",
      "Yes, we provide T&C.",
      "No, we do not take any consent."
    ]
  },
  {
    id: 3,
    question: "Does the organisation ensure that the consent obtained meets the statutory thresholds of being free, specific in purpose, unambiguous in expression, informed through prior notice, and granular enough to avoid blanket or bundled authorisations?",
    options: [
      "Yes, consent free, specific, unambiguous, and informed.",
      "Not Sure.",
      "Neither of the two options are applicable."
    ]
  },
  {
    id: 4,
    question: "Is there an operationalised, user-centric, and technically feasible mechanism enabling Data Principals to effectuate withdrawal of consent at any juncture with such withdrawal being honoured without unreasonable delay or detriment to the Data Principal?",
    options: [
      "Yes, we provide mechanism for data principal to withdrawal their consent.",
      "No such mechanism is implemented."
    ]
  },
  {
    id: 5,
    question: "Does the organisation maintain and provide a Privacy Notice that is sufficiently comprehensive, readily accessible, prominently displayed, and capable of apprising Data Principals of all material aspects of data processing undertaken by the organisation?",
    options: [
      "Yes, we serve the privacy notice.",
      "No privacy notice is served."
    ]
  },
  {
    id: 6,
    question: "Is the Privacy Notice furnished to the Data Principal prior to or contemporaneously with the initiation of any data collection activity, ensuring compliance with the temporal requirements embedded within the DPDP Act?",
    options: [
      "Yes, privacy notice is served before or at the time of personal data collection.",
      "Yes, Privacy notice is served.",
      "Neither of two options is applicable."
    ]
  },
  {
    id: 7,
    question: "Is the Privacy Notice articulated in language that, while accurate and legally compliant, avoids technical obfuscation yet maintains clarity, precision, and interpretive consistency for the benefit of the Data Principal?",
    options: [
      "Yes, privacy notice written in clear, plain, and easily understandable language.",
      "No, the Privacy Notice is not written in clear, plain, or easily understandable language.",
      "Neither of two options is applicable."
    ]
  },
  {
    id: 8,
    question: "Does the Privacy Notice explicitly delineate the lawful purpose of processing, the detailed and itemised categories of personal data being processed, the corresponding rights conferred upon the Data Principal, the prescribed or operational data retention period, and the designated contact particulars of the Data Protection Officer or authorised grievance-handling entity?",
    options: [
      "Yes, Notice include purpose, itemized data category, data principal rights, storage period, contact information of DPO.",
      "No, Notice does not include purpose, itemized data category, data principal rights, storage period, contact information of DPO."
    ]
  },
  {
    id: 9,
    question: "Does the organisation operate an internal grievance-redressal mechanism capable of acknowledging, triaging, and resolving Data Principal grievances within the statutory period of 90 days, as mandated under Section 13 of the DPDP Act?",
    options: [
      "Yes, grievances resolved within 90 days as required under DPDP Act.",
      "No timeline is defined for the grievance redressal process.",
      "No such grievance-redressal mechanism present."
    ]
  },
  {
    id: 10,
    question: "Does the organisation engage in the collection or processing of the Personal Data of children defined under the DPDP Act as individuals who have not attained the age of eighteen years thus invoking enhanced compliance and fiduciary responsibilities?",
    options: [
      "Yes, children’s data are collected.",
      "No, children’s data are collected."
    ]
  },
  {
    id: 11,
    question: "Where child data processing occurs, does the organisation deploy a verifiable and auditable mechanism to secure parental or lawful guardian consent, ensuring the authenticity and demonstrability of such consent in line with the Act’s heightened requirements for processing of minors’ data?",
    options: [
      "Yes, we have mechanism for obtaining verifiable parental consent before processing the personal data of a child.",
      "No such mechanism present for parental consent."
    ]
  },
  {
    id: 12,
    question: "Does the organisation retain Personal Data and associated data logs for at least the statutory minimum period of one year from the date of the relevant processing activity, or longer if mandated by law, regulatory directives, or legitimate business needs consistent with the storage-limitation principle?",
    options: [
      "Yes, retain for the minimum of one year.",
      "Retain for infinite period.",
      "No retention mechanism present."
    ]
  },
  {
    id: 13,
    question: "Does the organisation provide Data Principals with an operational, accessible, and reliable interface through which they may exercise their statutory rights such as access, correction, erasure, grievance escalation, or withdrawal of consent—as conferred under the DPDP Act?",
    options: [
      "Yes, provide easy access for Data Principals to exercise their rights under the Act.",
      "No, Data Principals are not provided to exercise their rights under the Act."
    ]
  },
  {
    id: 14,
    question: "Is the organisation subject to cross-border data transfer requirements as per the DPDP Act, necessitating the implementation of appropriate safeguards to prevent the unauthorized disclosure or misuse of Personal Data to entities or systems outside the territory of India?",
    options: [
      "Yes, personal information is transferred outside the territory of India.",
      "No, personal information is not transferred outside the territory of India."
    ]
  }
];

export default function PrivacyForms() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = privacyQuestions[currentStep];
  const selectedOption = answers[currentQ.id];

  const handleSelectOption = (optionIndex) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionIndex
    }));
  };

  const handleNext = () => {
    if (currentStep < privacyQuestions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  // Calculate score logic (option index 0 is optimal yes/compliant answer)
  const calculateScore = () => {
    let score = 0;
    Object.keys(answers).forEach((qId) => {
      if (answers[qId] === 0) {
        score += 1;
      }
    });
    return Math.round((score / privacyQuestions.length) * 100);
  };

  const scorePct = calculateScore();

  return (
    <div className="service-page-layout light-theme" style={{ background: '#f8fafc', minHeight: '100vh' }}>
      <Navbar />

      <main style={{ padding: '3.5rem 1.5rem 5rem', maxWidth: '980px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        
        {/* Progress Header */}
        <div style={{ marginBottom: '2.5rem', textTransform: 'none' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '800', color: '#0d9488', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              DPDP Act Compliance Assessment
            </span>
            <span style={{ fontSize: '0.9rem', fontWeight: '700', color: '#64748b' }}>
              Question {currentStep + 1} of {privacyQuestions.length}
            </span>
          </div>

          <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '999px', overflow: 'hidden' }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / privacyQuestions.length) * 100}%` }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              style={{ height: '100%', background: 'linear-gradient(90deg, #0d9488 0%, #0284c7 100%)', borderRadius: '999px' }}
            />
          </div>
        </div>

        {!isCompleted ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              style={{
                background: '#ffffff',
                borderRadius: '24px',
                padding: '2.5rem 2rem 3rem',
                boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.08)',
                border: '1px solid #f1f5f9',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem'
              }}
            >
              {/* Question Text */}
              <h2 style={{
                fontSize: '1.25rem',
                fontWeight: '800',
                lineHeight: '1.5',
                color: '#0f172a',
                fontFamily: "'Manrope', 'Plus Jakarta Sans', sans-serif",
                margin: 0
              }}>
                Q{currentQ.id}. {currentQ.question}
              </h2>

              {/* MCQ Radio Option Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {currentQ.options.map((optText, optIdx) => {
                  const isSelected = selectedOption === optIdx;
                  return (
                    <motion.div
                      key={optIdx}
                      onClick={() => handleSelectOption(optIdx)}
                      whileHover={{ scale: 1.01, x: 3 }}
                      whileTap={{ scale: 0.99 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.2rem',
                        padding: '1.2rem 1.5rem',
                        borderRadius: '16px',
                        background: isSelected ? '#f0fdfa' : '#f8fafc',
                        border: isSelected ? '2px solid #0d9488' : '1.5px solid #e2e8f0',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        boxShadow: isSelected ? '0 8px 24px -6px rgba(13, 148, 136, 0.18)' : 'none'
                      }}
                    >
                      {/* Radio Circle */}
                      <div style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        border: isSelected ? '2px solid #0d9488' : '2px solid #94a3b8',
                        background: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        {isSelected && (
                          <div style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            background: '#0d9488'
                          }} />
                        )}
                      </div>

                      {/* Option Text */}
                      <span style={{
                        fontSize: '1rem',
                        fontWeight: isSelected ? '700' : '600',
                        color: isSelected ? '#0f766e' : '#334155',
                        lineHeight: '1.45',
                        fontFamily: "'Inter', sans-serif"
                      }}>
                        {optText}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Navigation Controls Row */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid #f1f5f9'
              }}>
                <button
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '12px 24px',
                    borderRadius: '999px',
                    background: 'transparent',
                    border: '1.5px solid #cbd5e1',
                    color: currentStep === 0 ? '#94a3b8' : '#475569',
                    fontWeight: '700',
                    fontSize: '0.92rem',
                    cursor: currentStep === 0 ? 'not-allowed' : 'pointer',
                    opacity: currentStep === 0 ? 0.5 : 1,
                    transition: 'all 0.2s ease'
                  }}
                >
                  <ChevronLeft size={18} />
                  <span>Previous</span>
                </button>

                <button
                  onClick={handleNext}
                  disabled={selectedOption === undefined}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '13px 32px',
                    borderRadius: '999px',
                    background: selectedOption === undefined
                      ? '#cbd5e1'
                      : 'linear-gradient(135deg, #0284c7 0%, #0d9488 100%)',
                    border: 'none',
                    color: '#ffffff',
                    fontWeight: '800',
                    fontSize: '0.96rem',
                    cursor: selectedOption === undefined ? 'not-allowed' : 'pointer',
                    boxShadow: selectedOption === undefined
                      ? 'none'
                      : '0 8px 25px rgba(2, 132, 199, 0.35)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <span>{currentStep === privacyQuestions.length - 1 ? 'Calculate Score' : 'Next'}</span>
                  <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          /* Completion & Gap Assessment Score Card */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            style={{
              background: '#ffffff',
              borderRadius: '24px',
              padding: '3rem 2.5rem',
              textAlign: 'center',
              boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.08)',
              border: '1px solid #f1f5f9',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.75rem'
            }}
          >
            <div style={{
              width: '72px',
              height: '72px',
              borderRadius: '20px',
              background: 'rgba(13, 148, 136, 0.12)',
              color: '#0d9488',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Award size={38} />
            </div>

            <div>
              <span className="eyebrow-badge">DPDP ACT READINESS ASSESSMENT</span>
              <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#0f172a', margin: '0.5rem 0' }}>
                Your Gap Assessment Score
              </h2>
              <p style={{ color: '#64748b', fontSize: '1rem', margin: 0 }}>
                Based on your selected inputs across all 14 statutory provisions under the Digital Personal Data Protection Act, 2023.
              </p>
            </div>

            {/* Score Ring Display */}
            <div style={{
              position: 'relative',
              width: '160px',
              height: '160px',
              borderRadius: '50%',
              background: `conic-gradient(#0d9488 0% ${scorePct}%, #e2e8f0 ${scorePct}% 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 12px 30px rgba(13, 148, 136, 0.25)'
            }}>
              <div style={{
                width: '136px',
                height: '136px',
                borderRadius: '50%',
                background: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ fontSize: '2.5rem', fontWeight: '900', color: '#0f172a', lineHeight: 1 }}>
                  {scorePct}%
                </span>
                <span style={{ fontSize: '0.72rem', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '4px' }}>
                  Readiness
                </span>
              </div>
            </div>

            <div style={{
              background: scorePct >= 70 ? '#f0fdf4' : scorePct >= 40 ? '#fefce8' : '#fef2f2',
              border: `1.5px solid ${scorePct >= 70 ? '#bbf7d0' : scorePct >= 40 ? '#fef08a' : '#fecaca'}`,
              borderRadius: '16px',
              padding: '1.25rem 1.75rem',
              maxWidth: '600px',
              width: '100%',
              boxSizing: 'border-box'
            }}>
              <h4 style={{ margin: '0 0 0.35rem 0', color: scorePct >= 70 ? '#166534' : scorePct >= 40 ? '#854d0e' : '#991b1b', fontWeight: '800' }}>
                {scorePct >= 70 ? 'High Privacy Readiness' : scorePct >= 40 ? 'Moderate Compliance Gaps' : 'Critical Governance Required'}
              </h4>
              <p style={{ margin: 0, fontSize: '0.88rem', color: scorePct >= 70 ? '#15803d' : scorePct >= 40 ? '#a16207' : '#b91c1c', lineHeight: 1.5 }}>
                {scorePct >= 70
                  ? 'Your organization demonstrates solid baseline compliance controls. Speak with our privacy experts to conduct formal evidence audits and maintain ongoing readiness.'
                  : scorePct >= 40
                  ? 'Key statutory gaps identified in notice timing, consent workflows, or grievance timelines. Schedule a consultation to build your operational roadmap.'
                  : 'Immediate action recommended across consent mechanisms, DPO governance, notice disclosures, and retention controls under DPDP Act obligations.'}
              </p>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1rem' }}>
              <button
                onClick={handleRestart}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 28px',
                  borderRadius: '999px',
                  background: '#ffffff',
                  border: '1.5px solid #0f766e',
                  color: '#0f766e',
                  fontWeight: '700',
                  fontSize: '0.94rem',
                  cursor: 'pointer'
                }}
              >
                <RefreshCw size={18} />
                <span>Retake Assessment</span>
              </button>

              <a
                href="/calendar"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 28px',
                  borderRadius: '999px',
                  background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                  color: '#ffffff',
                  fontWeight: '800',
                  fontSize: '0.94rem',
                  textDecoration: 'none',
                  boxShadow: '0 8px 25px rgba(6, 182, 212, 0.35)'
                }}
              >
                <ShieldCheck size={18} />
                <span>Speak with a Privacy Specialist</span>
              </a>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}
