const NetworkSecurity = () => {
    return (
        <div className="min-h-screen p-8">
            <div className="text-center mb-16">
                <h1 className="font-bold text-5xl mb-4" style={{ color: '#282a77' }}>Network Security</h1>
                <p className="text-gray-600 text-xl">Advanced network infrastructure protection with intelligent traffic analysis and threat prevention</p>
            </div>
            
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="border rounded-2xl p-8 text-center" style={{ borderColor: '#2829783b' }}>
                    <div className="mb-6">
                        <div className="w-16 h-16 mx-auto rounded-lg flex items-center justify-center" style={{ borderColor: '#2829783b' }}>
                            <svg className="w-8 h-8" style={{ color: '#282a77' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                    </div>
                    <h3 className="font-bold text-xl mb-4" style={{ color: '#282a77' }}>Firewall Protection</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Next-generation firewall with deep packet inspection and application-layer filtering
                    </p>
                </div>
                
                <div className="border rounded-2xl p-8 text-center" style={{ borderColor: '#2829783b' }}>
                    <div className="mb-6">
                        <div className="w-16 h-16 mx-auto rounded-lg flex items-center justify-center" style={{ borderColor: '#2829783b' }}>
                            <svg className="w-8 h-8" style={{ color: '#282a77' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                    </div>
                    <h3 className="font-bold text-xl mb-4" style={{ color: '#282a77' }}>Intrusion Detection</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Real-time monitoring and detection of suspicious network activities and breach attempts
                    </p>
                </div>
                
                <div className="border rounded-2xl p-8 text-center" style={{ borderColor: '#2829783b' }}>
                    <div className="mb-6">
                        <div className="w-16 h-16 mx-auto rounded-lg flex items-center justify-center" style={{ borderColor: '#2829783b' }}>
                            <svg className="w-8 h-8" style={{ color: '#282a77' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                    </div>
                    <h3 className="font-bold text-xl mb-4" style={{ color: '#282a77' }}>Traffic Analysis</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Comprehensive network flow analysis with bandwidth monitoring and anomaly detection
                    </p>
                </div>
                
                <div className="border rounded-2xl p-8 text-center" style={{ borderColor: '#2829783b' }}>
                    <div className="mb-6">
                        <div className="w-16 h-16 mx-auto rounded-lg flex items-center justify-center" style={{ borderColor: '#2829783b' }}>
                            <svg className="w-8 h-8" style={{ color: '#282a77' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                    </div>
                    <h3 className="font-bold text-xl mb-4" style={{ color: '#282a77' }}>VPN Security</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Secure remote access with encrypted tunnels and multi-factor authentication protocols
                    </p>
                </div>
            </div>
            
            <div className="text-center mt-20 mb-12">
                <h2 className="font-bold text-4xl" style={{ color: '#282a77' }}>Why Choose Our Network Security?</h2>
            </div>
            
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="border rounded-2xl py-20 p-8" style={{ borderColor: '#2829783b' }}>
                    <h3 className="font-bold text-xl mb-4" style={{ color: '#282a77' }}>Advanced Threat Prevention</h3>
                    <p className="text-gray-600 text-sm mb-6">Proactive defense against sophisticated network-based attacks and vulnerabilities</p>
                    <ul className="space-y-3">
                        <li className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 mr-3" style={{ color: '#10B981' }} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            DDoS attack mitigation
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 mr-3" style={{ color: '#10B981' }} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Malware traffic blocking
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 mr-3" style={{ color: '#10B981' }} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Geo-blocking capabilities
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 mr-3" style={{ color: '#10B981' }} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            SSL/TLS inspection
                        </li>
                    </ul>
                </div>
                
                <div className="border rounded-2xl py-20 p-8" style={{ borderColor: '#2829783b' }}>
                    <h3 className="font-bold text-xl mb-4" style={{ color: '#282a77' }}>High-Speed Performance</h3>
                    <p className="text-gray-600 text-sm mb-6">Enterprise-grade throughput without compromising security effectiveness</p>
                    <ul className="space-y-3">
                        <li className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 mr-3" style={{ color: '#10B981' }} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Multi-gigabit processing
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 mr-3" style={{ color: '#10B981' }} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Hardware acceleration
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 mr-3" style={{ color: '#10B981' }} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Load balancing support
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 mr-3" style={{ color: '#10B981' }} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Minimal latency impact
                        </li>
                    </ul>
                </div>
                
                <div className="border rounded-2xl py-20 p-8" style={{ borderColor: '#2829783b' }}>
                    <h3 className="font-bold text-xl mb-4" style={{ color: '#282a77' }}>Comprehensive Visibility</h3>
                    <p className="text-gray-600 text-sm mb-6">Complete network insight with detailed analytics and real-time monitoring dashboards</p>
                    <ul className="space-y-3">
                        <li className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 mr-3" style={{ color: '#10B981' }} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Network topology mapping
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 mr-3" style={{ color: '#10B981' }} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Traffic flow analysis
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 mr-3" style={{ color: '#10B981' }} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Security event correlation
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 mr-3" style={{ color: '#10B981' }} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Compliance reporting
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="text-center mt-16">
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                    <button className="px-8 py-3 text-white font-medium rounded-lg transition-opacity duration-300 hover:opacity-90" style={{ background: 'linear-gradient(135deg, #282a77, #3b3d99)' }}>
                        Get Started
                    </button>
                    <button className="px-8 py-3 border-2 font-medium rounded-lg transition-colors duration-300" style={{ color: '#282a77', borderColor: '#282a77', background: 'white' }}>
                        Contact Sales
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NetworkSecurity