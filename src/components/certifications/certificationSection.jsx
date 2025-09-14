const CertificationSection = () => {
    return(
        <div className="mb-20">
            <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-5xl font-bold">Your Data. Our Top Priority.</h2>
                <p className="mt-5 text-gray-600 text-lg">At Osto, we prioritize data privacy and uphold the highest standards of security.</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 px-4 lg:px-10 justify-center">
            <div className="bg-white border border-[#393b90] p-6 lg:p-10 rounded-xl w-full lg:w-96 min-h-[220px] text-left transition-transform duration-300 ease-in-out cursor-pointer hover:scale-105">
                <div className="w-10 h-10 mb-5">
                    <img src="/ISOCertification.svg" alt="ISO" className="w-full h-full" />
                </div>
                <h3 className="font-semibold m-0 mb-2.5 text-xl lg:text-2xl">ISO 27001 Certified</h3>
                <p className="m-0 text-gray-600 text-sm lg:text-base leading-relaxed">
                    Our systems meet international standards for security management.
                </p>
            </div>

            <div className="bg-white border border-[#393b90] p-6 lg:p-10 rounded-xl w-full lg:w-96 min-h-[220px] text-left transition-transform duration-300 ease-in-out cursor-pointer hover:scale-105">
                <div className="w-10 h-10 mb-5">
                    <img src="/SOCType2.svg" alt="SOC" className="w-full h-full" />
                </div>
                <h3 className="font-semibold m-0 mb-2.5 text-xl lg:text-2xl">SOC 2 Type II Compliant</h3>
                <p className="m-0 text-gray-600 text-sm lg:text-base leading-relaxed">
                    Independently verified security, availability, and confidentiality.
                </p>
            </div>

            <div className="bg-white border border-[#393b90] p-6 lg:p-10 rounded-xl w-full lg:w-96 min-h-[220px] text-left transition-transform duration-300 ease-in-out cursor-pointer hover:scale-105">
                <div className="w-10 h-10 mb-5">
                    <img src="/GDPR.svg" alt="GDPR" className="w-full h-full" />
                </div>
                <h3 className="font-semibold m-0 mb-2.5 text-xl lg:text-2xl">GDPR Compliant</h3>
                <p className="m-0 text-gray-600 text-sm lg:text-base leading-relaxed">
                    We adhere to strict data privacy regulations and best practices.
                </p>
            </div>
        </div>
        </div>
    )
}

export default CertificationSection