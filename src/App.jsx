import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import G3SecAi from './components/G3SecAi'
import Calendar from './components/Calendar'
import CybersecurityCompliance from './components/ServicePages/CybersecurityCompliance'
import VaptSecurityTesting from './components/ServicePages/VaptSecurityTesting'
import VaptIntake from './components/ServicePages/VaptIntake'
import TprmServices from './components/ServicePages/TprmServices'
import SocOperations from './components/ServicePages/SocOperations'
import PrivacyDataProtection from './components/ServicePages/PrivacyDataProtection'
import PrivacyForms from './components/ServicePages/PrivacyForms'
import VcisoVdpoAdvisory from './components/ServicePages/VcisoVdpoAdvisory'
import Securityservices from './components/ServicePages/Securityservices'
import Tracs360 from './components/products/tracs360'
import Soltrisk from './components/products/soltrisk'
import SoltriskDemo from './components/products/Soltrisk-demo'
import Getaquote from './components/getaquote'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Home />
          </>
        } />
        <Route path="/g3secai" element={<G3SecAi />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/getaquote" element={<Getaquote />} />
        <Route path="/get-a-quote" element={<Getaquote />} />
        <Route path="/quote" element={<Getaquote />} />
        <Route path="/services/cybersecurity-compliance" element={<CybersecurityCompliance />} />
        <Route path="/services/vapt-security-testing" element={<VaptSecurityTesting />} />
        <Route path="/services/vapt-security-testing/intake" element={<VaptIntake />} />
        <Route path="/vapt-intake" element={<VaptIntake />} />
        <Route path="/services/tprm-services" element={<TprmServices />} />
        <Route path="/services/soc-operations" element={<SocOperations />} />
        <Route path="/services/privacy-data-protection" element={<PrivacyDataProtection />} />
        <Route path="/services/privacy-data-protection/intake" element={<PrivacyForms />} />
        <Route path="/privacy-forms" element={<PrivacyForms />} />
        <Route path="/services/vciso-vdpo-advisory" element={<VcisoVdpoAdvisory />} />
        <Route path="/services/security-services" element={<Securityservices />} />
        <Route path="/products/tracs360" element={<Tracs360 />} />
        <Route path="/tracs360" element={<Tracs360 />} />
        <Route path="/products/soltrisk" element={<Soltrisk />} />
        <Route path="/soltrisk" element={<Soltrisk />} />
        <Route path="/products/soltrisk-demo" element={<SoltriskDemo />} />
        <Route path="/soltrisk-demo" element={<SoltriskDemo />} />
      </Routes>
      <Footer />
    </div>
  )
}
