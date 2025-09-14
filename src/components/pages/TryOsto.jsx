import { useState } from 'react'

const TryOsto = () => {
    const [activeTab, setActiveTab] = useState('demo')
    const [quizStep, setQuizStep] = useState(0)
    const [quizAnswers, setQuizAnswers] = useState({})
    const [showScore, setShowScore] = useState(false)

    const quizQuestions = [
        {
            question: "How many employees does your organization have?",
            options: ["1-50", "51-200", "201-1000", "1000+"]
        },
        {
            question: "What is your current cybersecurity maturity level?",
            options: ["Basic/None", "Intermediate", "Advanced", "Expert"]
        },
        {
            question: "Which security challenges concern you most?",
            options: ["Endpoint Protection", "Network Security", "Compliance", "Cloud Security"]
        },
        {
            question: "How often do you conduct security assessments?",
            options: ["Never", "Annually", "Quarterly", "Monthly"]
        },
        {
            question: "What's your primary industry?",
            options: ["Healthcare", "Finance", "Technology", "Other"]
        }
    ]

    const handleQuizAnswer = (answer) => {
        const newAnswers = { ...quizAnswers, [quizStep]: answer }
        setQuizAnswers(newAnswers)
        
        if (quizStep < quizQuestions.length - 1) {
            setQuizStep(quizStep + 1)
        } else {
            setShowScore(true)
        }
    }

    const calculateScore = () => {
        let score = 0
        Object.values(quizAnswers).forEach((answer, index) => {
            if (index === 0) score += answer === "1000+" ? 25 : answer === "201-1000" ? 20 : answer === "51-200" ? 15 : 10
            if (index === 1) score += answer === "Expert" ? 25 : answer === "Advanced" ? 20 : answer === "Intermediate" ? 15 : 5
            if (index === 2) score += 15
            if (index === 3) score += answer === "Monthly" ? 25 : answer === "Quarterly" ? 20 : answer === "Annually" ? 10 : 5
            if (index === 4) score += answer === "Finance" || answer === "Healthcare" ? 20 : 15
        })
        return Math.min(score, 100)
    }

    const resetQuiz = () => {
        setQuizStep(0)
        setQuizAnswers({})
        setShowScore(false)
    }

    return (
        <div className="min-h-screen p-8 mb-20">
            <div className="text-center mb-16">
                <h1 className="font-bold text-5xl mb-4" style={{ color: '#282a77' }}>Get Started with Osto</h1>
                <p className="text-gray-600 text-xl">Experience Osto.one with a free trial or book a demo with our experts</p>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="flex justify-center mb-8">
                    <div className="flex border rounded-2xl p-2" style={{ borderColor: '#2829783b' }}>
                        <button 
                            onClick={() => setActiveTab('demo')}
                            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeTab === 'demo' ? 'text-white' : 'text-gray-600'}`}
                            style={{ background: activeTab === 'demo' ? 'linear-gradient(135deg, #282a77, #3b3d99)' : 'transparent' }}
                        >
                            Book Demo
                        </button>
                        <button 
                            onClick={() => setActiveTab('trial')}
                            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeTab === 'trial' ? 'text-white' : 'text-gray-600'}`}
                            style={{ background: activeTab === 'trial' ? 'linear-gradient(135deg, #282a77, #3b3d99)' : 'transparent' }}
                        >
                            Free Trial
                        </button>
                        <button 
                            onClick={() => setActiveTab('assessment')}
                            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeTab === 'assessment' ? 'text-white' : 'text-gray-600'}`}
                            style={{ background: activeTab === 'assessment' ? 'linear-gradient(135deg, #282a77, #3b3d99)' : 'transparent' }}
                        >
                            Security Assessment
                        </button>
                    </div>
                </div>

                {activeTab === 'demo' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="border rounded-2xl p-8" style={{ borderColor: '#2829783b' }}>
                            <h3 className="font-bold text-2xl mb-6" style={{ color: '#282a77' }}>Book Your Demo</h3>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input type="text" placeholder="Your full name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input type="email" placeholder="your.email@company.com" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                                    <input type="text" placeholder="Your company name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Security Needs</label>
                                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option>Select your primary need</option>
                                        <option>Endpoint Security</option>
                                        <option>Network Security</option>
                                        <option>Cloud Security</option>
                                        <option>Compliance & VAPT</option>
                                        <option>Complete Security Suite</option>
                                    </select>
                                </div>
                                <button type="submit" className="w-full py-3 px-6 text-white font-medium rounded-lg transition-opacity duration-300 hover:opacity-90" style={{ background: 'linear-gradient(135deg, #282a77, #3b3d99)' }}>
                                    Book My Demo
                                </button>
                            </form>
                        </div>
                        
                        <div className="border rounded-2xl p-8" style={{ borderColor: '#2829783b' }}>
                            <h3 className="font-bold text-2xl mb-6" style={{ color: '#282a77' }}>Choose Your Time Slot</h3>
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <button className="p-4 border rounded-lg hover:bg-gray-50 text-left" style={{ borderColor: '#2829783b' }}>
                                        <div className="font-medium">Today</div>
                                        <div className="text-sm text-gray-600">2:00 PM - 3:00 PM</div>
                                    </button>
                                    <button className="p-4 border rounded-lg hover:bg-gray-50 text-left" style={{ borderColor: '#2829783b' }}>
                                        <div className="font-medium">Today</div>
                                        <div className="text-sm text-gray-600">4:00 PM - 5:00 PM</div>
                                    </button>
                                    <button className="p-4 border rounded-lg hover:bg-gray-50 text-left" style={{ borderColor: '#2829783b' }}>
                                        <div className="font-medium">Tomorrow</div>
                                        <div className="text-sm text-gray-600">10:00 AM - 11:00 AM</div>
                                    </button>
                                    <button className="p-4 border rounded-lg hover:bg-gray-50 text-left" style={{ borderColor: '#2829783b' }}>
                                        <div className="font-medium">Tomorrow</div>
                                        <div className="text-sm text-gray-600">2:00 PM - 3:00 PM</div>
                                    </button>
                                </div>
                                <div className="text-center mt-6">
                                    <button className="text-blue-600 hover:underline">View more available slots</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'trial' && (
                    <div className="max-w-2xl mx-auto border rounded-2xl p-8 text-center" style={{ borderColor: '#2829783b' }}>
                        <h3 className="font-bold text-2xl mb-6" style={{ color: '#282a77' }}>Start Your Free Trial</h3>
                        <p className="text-gray-600 mb-8">Get instant access to our sandbox environment with limited features to explore Osto.one capabilities.</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="text-center">
                                <div className="w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#282a77' }}>
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h4 className="font-semibold">14-Day Trial</h4>
                                <p className="text-sm text-gray-600">Full access period</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#282a77' }}>
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h4 className="font-semibold">No Credit Card</h4>
                                <p className="text-sm text-gray-600">Required to start</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#282a77' }}>
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                                    </svg>
                                </div>
                                <h4 className="font-semibold">Full Support</h4>
                                <p className="text-sm text-gray-600">Expert assistance</p>
                            </div>
                        </div>

                        <form className="space-y-4 max-w-md mx-auto">
                            <input type="text" placeholder="Your name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <input type="email" placeholder="Work email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <input type="text" placeholder="Company name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <button type="submit" className="w-full py-3 px-6 text-white font-medium rounded-lg transition-opacity duration-300 hover:opacity-90" style={{ background: 'linear-gradient(135deg, #282a77, #3b3d99)' }}>
                                Start Free Trial
                            </button>
                        </form>
                    </div>
                )}

                {activeTab === 'assessment' && (
                    <div className="max-w-2xl mx-auto border rounded-2xl p-8" style={{ borderColor: '#2829783b' }}>
                        {!showScore ? (
                            <>
                                <div className="mb-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="font-bold text-2xl" style={{ color: '#282a77' }}>Security Assessment Quiz</h3>
                                        <span className="text-sm text-gray-600">{quizStep + 1} of {quizQuestions.length}</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full transition-all duration-300" style={{ width: `${((quizStep + 1) / quizQuestions.length) * 100}%`, background: 'linear-gradient(135deg, #282a77, #3b3d99)' }}></div>
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <h4 className="text-xl font-semibold mb-6">{quizQuestions[quizStep].question}</h4>
                                    <div className="space-y-3">
                                        {quizQuestions[quizStep].options.map((option, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleQuizAnswer(option)}
                                                className="w-full p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                                style={{ borderColor: '#2829783b' }}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="text-center">
                                <h3 className="font-bold text-2xl mb-4" style={{ color: '#282a77' }}>Your Security Readiness Score</h3>
                                <div className="mb-8">
                                    <div className="text-6xl font-bold mb-4" style={{ color: '#282a77' }}>{calculateScore()}</div>
                                    <div className="text-xl text-gray-600">out of 100</div>
                                </div>
                                
                                <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                                    <h4 className="font-semibold mb-2">Recommendations:</h4>
                                    <ul className="text-left text-gray-600 space-y-2">
                                        <li>• Consider implementing endpoint security solutions</li>
                                        <li>• Regular security assessments are recommended</li>
                                        <li>• Explore cloud security options for better protection</li>
                                    </ul>
                                </div>

                                <div className="flex gap-4">
                                    <button 
                                        onClick={resetQuiz}
                                        className="flex-1 py-3 px-6 border-2 font-medium rounded-lg transition-colors duration-300" 
                                        style={{ color: '#282a77', borderColor: '#282a77', background: 'white' }}
                                    >
                                        Retake Quiz
                                    </button>
                                    <button className="flex-1 py-3 px-6 text-white font-medium rounded-lg transition-opacity duration-300 hover:opacity-90" style={{ background: 'linear-gradient(135deg, #282a77, #3b3d99)' }}>
                                        Get Consultation
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default TryOsto