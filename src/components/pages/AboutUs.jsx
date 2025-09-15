import AboutTeam from "../AboutTeam/AboutTeam"

const AboutUs = () => {
    return (
        <div className="min-h-screen p-8">
            <div className="text-center lg:mb-16">
                <div className="space-y-3">
                    <h1 className="font-bold text-5xl">About <span style={{ background: 'linear-gradient(135deg, #282a77, #282a77)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Osto</span></h1>
                    <p className="text-gray-500 text-2xl">Cybersecurity is accessible without slowing down your growth journey.</p>
                </div>
            </div>
            
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:gap-12 items-center mt-10 lg:mt-30">
                <div>
                    <h2 className="font-bold text-6xl rounded-2xl p-6 py-10 lg:py-14" style={{ color: '#282a77', borderColor: '#282978' }}>Our Mission</h2>
                </div>
                <div>
                    <p className="text-gray-600 text-lg leading-relaxed rounded-2xl px-6 p-3 lg:p-6">
                        To democratize enterprise-grade cybersecurity solutions for businesses of all sizes. We transform complex security challenges into simple, manageable solutions that protect your digital assets while enabling confident growth.
                    </p>
                </div>
            </div>
            
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-5 lg:mt-16">
                <div>
                    <h2 className="font-bold text-6xl rounded-2xl p-6 lg:py-14" style={{ color: '#282a77', borderColor: '#282978' }}>Our Values</h2>
                </div>
                <div>
                    <p className="text-gray-600 text-lg leading-relaxed rounded-2xl px-6 lg:p-6">
                        Innovation, integrity, and accessibility drive everything we do. We believe in transparent security practices and empowering businesses with tools that are both powerful and user-friendly.
                    </p>
                </div>
            </div>
            <div className='relative'>
                <AboutTeam />
            </div>
            <div className="max-w-7xl mx-auto lg:mt-20 p-8 rounded-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="font-bold text-4xl mb-4" style={{ color: '#282a77' }}>Contact Information</h2>
                        <p className="text-gray-600 mb-6">Have questions or need more information? Our team is here to help.</p>
                        
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-lg" style={{ color: '#282a77' }}>Email</h3>
                                <p className="text-gray-600">contact@osto.one</p>
                            </div>
                            
                            <div>
                                <h3 className="font-semibold text-lg" style={{ color: '#282a77' }}>Phone</h3>
                                <p className="text-gray-600">+91 9119119190</p>
                            </div>
                            
                            <div>
                                <h3 className="font-semibold text-lg" style={{ color: '#282a77' }}>Headquarters</h3>
                                <p className="text-gray-600">WiJungle<br /> 3rd Floor, 90, Sector 44, Gurugram, Haryana 122003<br />India</p>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                <input 
                                    type="text" 
                                    placeholder="Your name" 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input 
                                    type="email" 
                                    placeholder="your.email@example.com" 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea 
                                    rows="4" 
                                    placeholder="How can we help you?" 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                ></textarea>
                            </div>
                            
                            <button 
                                type="submit" 
                                className="w-full py-3 px-6 text-white font-medium rounded-lg transition-opacity duration-300 hover:opacity-90" 
                                style={{ background: 'linear-gradient(135deg, #282a77, #3b3d99)' }}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs