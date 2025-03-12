import React from 'react';

const Numbers = () => {
    return (
        <section className="py-10 sm:py-16 lg:py-24 ">
            <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Numbers tell our story</h2>
                    <p className="mt-3 text-xl leading-relaxed text-secondary-dark md:mt-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
                </div>

                <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
                    <div>
                        <h3 className="font-bold text-7xl">
                            <span className="text-transparent bg-clip-text text-dark-red"> 50M+ </span>
                        </h3>
                        <p className="mt-4 text-xl font-medium text-secondary-dark">Net worth in EGP</p>
                        <p className="text-base mt-0.5 text-black">Creating the successful path</p>
                    </div>

                    <div>
                        <h3 className="font-bold text-7xl">
                            <span className="text-transparent bg-clip-text text-dark-red"> 10+ </span>
                        </h3>
                        <p className="mt-4 text-xl font-medium text-secondary-dark">Revenue Streams</p>
                        <p className="text-base mt-0.5 text-black">                  <a
                    href="#services"
                    className="hover-link cursor-pointer text-base font-semibold text-bright-red no-underline transition-all duration-200 hover:text-bright-red"
                  >
                    Explore
                  </a> our diverse portfolio</p>
                    </div>

                    <div>
                        <h3 className="font-bold text-7xl">
                            <span className="text-transparent bg-clip-text text-dark-red"> 50k </span>
                        </h3>
                        <p className="mt-4 text-xl font-medium text-secondary-dark">Fidans of land</p>
                        <p className="text-base mt-0.5 text-black">Industry leaders in New Valley Governorate</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Numbers;