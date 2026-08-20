import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Navbar } from '../Navbar'
import {
    CheckCircle2,
    ArrowRight,
    ChevronDown
} from 'lucide-react'
import '../../styles/soltrisk.css'

export default function SoltriskDemo() {
    const navigate = useNavigate()
    const [downloadSuccess, setDownloadSuccess] = useState(false)

    // Form State
    const [formData, setFormData] = useState({
        corporateEmail: '',
        firstName: '',
        lastName: '',
        jobTitle: '',
        country: '',
        companyName: '',
        domain: '',
        companySize: '',
        receiveUpdates: false
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setDownloadSuccess(true)
        setTimeout(() => {
            setDownloadSuccess(false)
        }, 5000)
    }

    return (
        <div className="soltrisk-page-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar variant="g3secai" />

            {/* Main 2-Column Section: Left Text + Right Replicated Form */}
            <main style={{ flex: 1, padding: '2.5rem 1.75rem 4rem', display: 'flex', alignItems: 'center' }}>
                <div style={{ maxWidth: '1320px', margin: '0 auto', width: '100%' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 540px',
                        gap: '3.5rem',
                        alignItems: 'flex-start'
                    }}>

                        {/* LEFT COLUMN: Headings Only */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            style={{ textAlign: 'left', marginTop: '50px' }}
                        >
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
                                <span className="soltrisk-tag-badge" style={{ background: '#e0f2fe', color: '#1e5288', border: '1px solid rgba(30, 82, 136, 0.3)' }}>
                                    <span className="soltrisk-badge-dot" style={{ background: '#1e5288' }} />
                                    FREE REPORT
                                </span>
                            </div>

                            <h1 style={{
                                fontFamily: "'Outfit', 'Manrope', sans-serif",
                                fontSize: 'clamp(1.65rem, 2.7vw, 2.35rem)',
                                fontWeight: '900',
                                color: '#0b1528',
                                lineHeight: '1.22',
                                letterSpacing: '-0.02em',
                                margin: '0 0 1.25rem'
                            }}>
                                How do you continuously discover your unknown, internet-facing assets and assess your risk posture?
                            </h1>

                            <p style={{
                                fontSize: '1.08rem',
                                fontWeight: '700',
                                color: '#1e5288',
                                margin: 0,
                                lineHeight: '1.45'
                            }}>
                                Get the SOLTRISK External Attack Surface Management Report — <span style={{ color: '#059669', fontWeight: '900' }}>FREE!</span>
                            </p>

                            {downloadSuccess && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    style={{
                                        marginTop: '1.5rem',
                                        padding: '1rem 1.25rem',
                                        background: '#f0fdf4',
                                        border: '1px solid #bbf7d0',
                                        borderRadius: '14px',
                                        color: '#166534',
                                        fontSize: '0.92rem',
                                        fontWeight: '700',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px'
                                    }}
                                >
                                    <CheckCircle2 size={20} style={{ color: '#166534' }} />
                                    Thank you! Your FREE SOLTRISK Report has been generated and queued for download.
                                </motion.div>
                            )}
                        </motion.div>

                        {/* RIGHT COLUMN: Replicated Download Report Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 25, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            style={{
                                background: '#ffffff',
                                borderRadius: '24px',
                                border: '1.5px solid #cbd5e1',
                                boxShadow: '0 20px 45px rgba(9, 44, 76, 0.1), 0 0 25px rgba(30, 82, 136, 0.05)',
                                padding: '2.5rem 2.25rem',
                                textAlign: 'left'
                            }}
                        >
                            <h2 style={{
                                fontFamily: "'Outfit', sans-serif",
                                fontSize: '1.15rem',
                                fontWeight: '900',
                                color: '#092c4c',
                                letterSpacing: '0.06em',
                                textTransform: 'uppercase',
                                margin: '0 0 1.5rem',
                                textAlign: 'left'
                            }}>
                                DOWNLOAD REPORT
                            </h2>

                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                                {/* Corporate Email */}
                                <div>
                                    <input
                                        type="email"
                                        name="corporateEmail"
                                        placeholder="Corporate Email"
                                        required
                                        value={formData.corporateEmail}
                                        onChange={handleChange}
                                        style={{
                                            width: '100%',
                                            padding: '0.85rem 1rem',
                                            borderRadius: '10px',
                                            border: '1.5px solid #cbd5e1',
                                            fontSize: '0.92rem',
                                            color: '#0f172a',
                                            outline: 'none',
                                            boxSizing: 'border-box'
                                        }}
                                    />
                                </div>

                                {/* First Name */}
                                <div>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        style={{
                                            width: '100%',
                                            padding: '0.85rem 1rem',
                                            borderRadius: '10px',
                                            border: '1.5px solid #cbd5e1',
                                            fontSize: '0.92rem',
                                            color: '#0f172a',
                                            outline: 'none',
                                            boxSizing: 'border-box'
                                        }}
                                    />
                                </div>

                                {/* Last Name */}
                                <div>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        required
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        style={{
                                            width: '100%',
                                            padding: '0.85rem 1rem',
                                            borderRadius: '10px',
                                            border: '1.5px solid #cbd5e1',
                                            fontSize: '0.92rem',
                                            color: '#0f172a',
                                            outline: 'none',
                                            boxSizing: 'border-box'
                                        }}
                                    />
                                </div>

                                {/* Job Title */}
                                <div>
                                    <input
                                        type="text"
                                        name="jobTitle"
                                        placeholder="Job Title"
                                        required
                                        value={formData.jobTitle}
                                        onChange={handleChange}
                                        style={{
                                            width: '100%',
                                            padding: '0.85rem 1rem',
                                            borderRadius: '10px',
                                            border: '1.5px solid #cbd5e1',
                                            fontSize: '0.92rem',
                                            color: '#0f172a',
                                            outline: 'none',
                                            boxSizing: 'border-box'
                                        }}
                                    />
                                </div>

                                {/* Country Select */}
                                <div style={{ position: 'relative' }}>
                                    <select
                                        name="country"
                                        required
                                        value={formData.country}
                                        onChange={handleChange}
                                        style={{
                                            width: '100%',
                                            padding: '0.85rem 1rem',
                                            borderRadius: '10px',
                                            border: '1.5px solid #cbd5e1',
                                            fontSize: '0.92rem',
                                            color: formData.country ? '#0f172a' : '#64748b',
                                            outline: 'none',
                                            backgroundColor: '#ffffff',
                                            appearance: 'none',
                                            boxSizing: 'border-box',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <option value="" disabled hidden>Country</option>
                                        <option value="United States">United States</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="India">India</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <ChevronDown size={18} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: '#64748b', pointerEvents: 'none' }} />
                                </div>

                                {/* Company Name */}
                                <div>
                                    <input
                                        type="text"
                                        name="companyName"
                                        placeholder="Company Name"
                                        required
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        style={{
                                            width: '100%',
                                            padding: '0.85rem 1rem',
                                            borderRadius: '10px',
                                            border: '1.5px solid #cbd5e1',
                                            fontSize: '0.92rem',
                                            color: '#0f172a',
                                            outline: 'none',
                                            boxSizing: 'border-box'
                                        }}
                                    />
                                </div>

                                {/* Top-Level Domain for Assessment */}
                                <div>
                                    <input
                                        type="text"
                                        name="domain"
                                        placeholder="Top-Level Domain for Assessment"
                                        required
                                        value={formData.domain}
                                        onChange={handleChange}
                                        style={{
                                            width: '100%',
                                            padding: '0.85rem 1rem',
                                            borderRadius: '10px',
                                            border: '1.5px solid #cbd5e1',
                                            fontSize: '0.92rem',
                                            color: '#0f172a',
                                            outline: 'none',
                                            boxSizing: 'border-box'
                                        }}
                                    />
                                </div>

                                {/* Company Size Select */}
                                <div style={{ position: 'relative' }}>
                                    <select
                                        name="companySize"
                                        required
                                        value={formData.companySize}
                                        onChange={handleChange}
                                        style={{
                                            width: '100%',
                                            padding: '0.85rem 1rem',
                                            borderRadius: '10px',
                                            border: '1.5px solid #cbd5e1',
                                            fontSize: '0.92rem',
                                            color: formData.companySize ? '#0f172a' : '#64748b',
                                            outline: 'none',
                                            backgroundColor: '#ffffff',
                                            appearance: 'none',
                                            boxSizing: 'border-box',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <option value="" disabled hidden>Company Size</option>
                                        <option value="1-50">1 - 50 employees</option>
                                        <option value="51-200">51 - 200 employees</option>
                                        <option value="201-1000">201 - 1,000 employees</option>
                                        <option value="1000+">1,000+ employees</option>
                                    </select>
                                    <ChevronDown size={18} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: '#64748b', pointerEvents: 'none' }} />
                                </div>

                                {/* Checkbox */}
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginTop: '0.4rem' }}>
                                    <input
                                        type="checkbox"
                                        id="receiveUpdates"
                                        name="receiveUpdates"
                                        checked={formData.receiveUpdates}
                                        onChange={handleChange}
                                        style={{ marginTop: '3px', cursor: 'pointer', accentColor: '#1e5288' }}
                                    />
                                    <label htmlFor="receiveUpdates" style={{ fontSize: '0.82rem', color: '#475569', lineHeight: '1.4', cursor: 'pointer' }}>
                                        I would like to receive updates on the latest SOLTRISK innovations.
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="btn-soltrisk-primary btn-soltrisk-slow-flash"
                                    style={{
                                        width: '100%',
                                        justifyContent: 'center',
                                        padding: '0.9rem 1.5rem',
                                        borderRadius: '12px',
                                        fontSize: '0.98rem',
                                        fontWeight: '800',
                                        marginTop: '0.5rem'
                                    }}
                                >
                                    <span>Submit & Download Report</span>
                                    <ArrowRight size={18} />
                                </button>

                                {/* Privacy consent text */}
                                <p style={{ fontSize: '0.74rem', color: '#64748b', textAlign: 'center', margin: '0.5rem 0 0', lineHeight: '1.4' }}>
                                    By submitting this form, you consent to SOLTRISK's{' '}
                                    <span style={{ color: '#1e5288', textDecoration: 'underline', cursor: 'pointer', fontWeight: '700' }} onClick={() => navigate('/privacy')}>
                                        privacy policy
                                    </span>
                                </p>

                            </form>
                        </motion.div>

                    </div>
                </div>
            </main>
        </div>
    )
}
