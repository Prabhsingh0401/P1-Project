import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/footer/footer'
import NavBar from './components/navBar/navBar'
import Home from './components/home/home'
import EndpointSecurity from './components/pages/EndpointSecurity'
import NetworkSecurity from './components/pages/NetworkSecurity'
import ComplianceVapt from './components/pages/ComplianceVapt'
import CloudSecurity from './components/pages/CloudSecurity'
import TryOsto from './components/pages/TryOsto'
import AboutUs from './components/pages/AboutUs'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/endpoint-security" element={<EndpointSecurity />} />
        <Route path="/network-security" element={<NetworkSecurity />} />
        <Route path="/compliance-vapt" element={<ComplianceVapt />} />
        <Route path="/cloud-security" element={<CloudSecurity />} />
        <Route path="/try-osto" element={<TryOsto />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
