import React, { useEffect, useState } from 'react';

const Brand = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch('brands.json')
      .then((res) => res.json())
      .then((data) => setBrands(data.brands))
      .catch((error) => console.error('Error fetching brands:', error));
  }, []);

  return (
    <div>
      <section className="bg-slate-100 font-poppins">
        <div className="container px-6 py-10 mx-auto">
          <div className="text-center">
            <h1 className="text-3xl text-black lg:text-6xl font-bold">
              Popular <span className="text-orange-400">Brands</span>
            </h1>
            <p className="text-xl text-black mt-2 lg:text-2xl font-semibold">
            Explore a world of innovation, performance, and elegance. Our curated selection of top automotive brands represents the pinnacle of engineering and style
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8  mt-10 md:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand, index) => (
              <div key={index} className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                  <img src={brand.image} alt={brand.name} className="  h-full w-full object-cover" />
                </div>
                <div className="p-6 text-center">
                  <h4 className="block mb-2  text-2xl  font-bold  tracking-normal text-black-900">
                    {brand.name}
                  </h4>
                  <p className="block  text-xl  font-medium leading-relaxed text-transparent bg-gradient-to-tr from-orange-600 to-orange-500 bg-clip-text">
                    {brand.tagline}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brand;
