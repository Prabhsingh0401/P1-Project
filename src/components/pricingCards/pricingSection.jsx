import Carousel from "./pricingCardsLogic"

const PricingSection = () => {
    return(
        <div className="w-full lg:mt-0 mt-10">
        <div className="lg:flex justify-between px-4 lg:px-15 lg:mb-20 mb-80 min-h-[460px] h-[460px] lg:h-[490px]">
            <div className="flex-1 mb-8 lg:mb-0 lg:ml-10">
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
                    Simple Pricing. Powerful Security.
                </h2>
                <p className="text-lg lg:text-xl text-gray-400">
                    We want to ensure that cybersecurity is accessible without slowing down your growth journey.
                </p>
            </div>
            <div className="flex-1 flex justify-center">
                <Carousel
                    baseWidth={window.innerWidth < 768 ? Math.min(350, window.innerWidth - 32) : 400}
                    autoplay={true}
                    autoplayDelay={3000}
                    pauseOnHover={true}
                    loop={true}
                    round={false}
                />
            </div>
        </div>
        </div>
    )
}

export default PricingSection