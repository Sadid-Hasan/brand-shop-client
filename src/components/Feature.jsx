import React from 'react';

const Feature = () => {
    return (
        <div>
            <section className="bg-slate-50 dark:bg-gray-900 font-poppins">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl text-center text-black lg:text-6xl font-bold">Why Choose <span className="text-orange-400"> Us?</span></h1>

        <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
            <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
                <div className="space-y-3">
                    <span className="inline-block p-3 text-orange-500 bg-orange-100 rounded-xl dark:text-white dark:bg-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                    </span>

                    <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Expert Curation</h1>

                    <p className="text-gray-500 dark:text-gray-300">
                    Our team of experts meticulously curates the finest automotive brands, ensuring you have access to a selection of vehicles known for their innovation, performance, and reliability.
                    </p>
                </div>

                <div className="space-y-3">
                    <span className="inline-block p-3 text-orange-500 bg-orange-100 rounded-xl dark:text-white dark:bg-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                        </svg>
                    </span>

                    <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Exceptional Quality</h1>

                    <p className="text-gray-500 dark:text-gray-300">
                    We prioritize quality above all else. Each vehicle in our collection undergoes rigorous inspection, guaranteeing that you invest in a car that meets the highest standards of excellence.
                    </p>
                </div>

                <div className="space-y-3">
                    <span className="inline-block p-3 text-orange-500 bg-orange-100 rounded-xl dark:text-white dark:bg-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                        </svg>
                    </span>

                    <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Customer-Centric Service</h1>

                    <p className="text-gray-500 dark:text-gray-300">
                    Your satisfaction is our priority. Our dedicated customer support team is always ready to assist you, providing personalized assistance and expertise throughout your car-buying journey.
                    </p>
                </div>

                <div className="space-y-3">
                    <span className="inline-block p-3 text-orange-500 bg-orange-100 rounded-xl dark:text-white dark:bg-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                    </span>

                    <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Tailored Solutions</h1>

                    <p className="text-gray-500 dark:text-gray-300">
                    Whether you seek speed, luxury, or eco-friendly options, we offer a diverse range of vehicles tailored to your preferences. Discover a driving experience that aligns perfectly with your lifestyle and aspirations.
                    </p>
                </div>
            </div>

            <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
                <img className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://i.ibb.co/R7VRcr9/carbuying-725133-1600.jpg" alt=""/>
            </div>
        </div>
    </div>
</section>
        </div>
    );
};

export default Feature;