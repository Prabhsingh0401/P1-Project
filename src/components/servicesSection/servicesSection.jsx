import MagicBento from "../services/servicesDiv"

const ServicesSection = () => {
    return(
        <>
        <div className="flex flex-col-reverse lg:flex lg:flex-row w-full min-h-screen px-4 py-8">
            <div className="lg:w-[70vw]">
                <MagicBento 
                textAutoHide={true}
                enableStars={false}
                enableSpotlight={true}
                enableBorderGlow={false}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                spotlightRadius={300}
                particleCount={12}
                glowColor="46, 48, 131"
                />
            <p className="lg:ml-15 text-gray-500">* Not included in the Osto.one plan; offered separately as an add-on.</p>
            </div>
            <div className="text-left py-5 pl-4 mr-7">
            <div>
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-800">
                    Core Security Modules
                </h2>
                <p className='mt-3 text-gray-500 text-xl'>Modules covering the most essential use cases needed by a fast growing startup.</p>
                <button type="button" className="cursor-pointer mt-5 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:opacity-90 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, #282a77, #3b3d99)' }}>Explore Modules</button>
            </div>
            </div>
        </div>
        </>
    )
}

export default ServicesSection