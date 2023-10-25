import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Slider from '../components/slider';

const Cars = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedBrand = queryParams.get('brand');

  const [carData, setCarData] = useState([]);

  useEffect(() => {
    fetch('cars.json')
      .then((response) => response.json())
      .then((data) => {
        const filteredCars = selectedBrand ? data.cars.filter((car) => car.brand_name === selectedBrand) : data.cars;
        setCarData(filteredCars);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [selectedBrand]);

  return (
    <section className="bg-slate-100 font-poppins">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="text-3xl text-black lg:text-6xl font-bold">
            Popular <span className="text-orange-400">Cars</span>
          </h1>
          <Slider></Slider>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-4">
          {carData.map((car, index) => (
            <div key={index} className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
              <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img src={car.image} alt="Car" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
              </div>
              <div className="p-6">
                <h5 className="block text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                  {car.car_name}, {car.brand_name} <div className="badge badge-accent">{car.type}</div>
                </h5>
                <div className="badge badge-success mt-2 mb-2">Rating: {car.rating}</div>
                <p className="block text-base antialiased font-light leading-relaxed text-gray-700">
                  {car.description}
                </p>
                <h1 className="text-xl font-medium mt-5 mb-5">Price: {car.price}</h1>
              </div>
              <div className="p-6 pt-3">
                <button
                  className="block w-full select-none rounded-lg bg-orange-500 py-3.5 px-7 text-center align-middle text-sm font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cars;
