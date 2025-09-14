import Squares from '../backGroundAnimation/backgroundAnimation'
import { Shield } from 'lucide-react'

const Hero = () => {
    return(
        <>
        <div style={{ width: '100%', height: '700px', position: 'relative', backgroundColor: 'white'}}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
                <Squares 
                    speed={0.5} 
                    squareSize={40}
                    direction='diagonal' 
                    borderColor='rgba(49, 86, 167, 0.09)'
                    hoverFillColor='#393a96'
                />
            </div>
            <div className="h-[90vh] flex justify-center items-center" style={{ position: 'relative', zIndex: 10 }}>
                <div className='text-center space-y-5'>
                    <div className='inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-lg text-gray-700 mb-4 border' style={{borderColor: '#282a77',}}>
                        <Shield size={16} />
                        <span>Enterprise Grade</span>
                    </div>
                    <h1 className='font-bold text-5xl'>One-Stop <span style={{ background: 'linear-gradient(135deg, #282a77, #282a77)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Cyber Security</span> Product</h1>
                    <h2 className='text-gray-500 text-3xl'>Built for New-Age Businesses</h2>
                    <button type="button" className="cursor-pointer text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:opacity-90 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, #282a77, #3b3d99)' }}>Get Started</button>
                    <button type="button" className="cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border-2 transition-colors duration-300" style={{ color: '#282a77', borderColor: '#282a77', background: 'white' }}>Watch Demo</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero