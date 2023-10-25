import React, { useState, useEffect } from 'react';

const Mycart = () => {
  const [cartData, setCartData] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    if (cartData.length === 0) {
      setIsLoading(true);
      fetch('https://brand-shop-server-xmehh5xyk-sadid-hasans-projects.vercel.app/car')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setCartData(data);
          setIsLoading(false);
          localStorage.setItem('cart', JSON.stringify(data)); 
        })
        .catch(error => {
          setError(error);
          setIsLoading(false);
        });
    }
  }, []); 

  const handleDelete = carId => {
    fetch(`https://brand-shop-server-xmehh5xyk-sadid-hasans-projects.vercel.app/car/${carId}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const updatedCartData = cartData.filter(car => car._id !== carId);
        setCartData(updatedCartData);
        localStorage.setItem('cart', JSON.stringify(updatedCartData)); 
      })
      .catch(error => {
        console.error('Error deleting car:', error);
      });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }


  return (
    <section className="bg-slate-100 font-poppins">
      <div className="container px-6 py-10 mx-auto">
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {cartData.map(car => (
            <div key={car._id} className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
              <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img src={car.image} alt="Car" />
                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h5 className="block text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                    {car.car_name}, {car.brand_name} <div className="badge badge-accent">{car.type}</div>
                  </h5>
                  <p className="flex items-center gap-1.5 text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="-mt-0.5 h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.760-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    {car.rating}
                  </p>
                </div>
                <p className="block text-base antialiased font-light leading-relaxed text-gray-700">
                  {car.description}
                </p>
                <h1>Price: {car.price}</h1>
              </div>
              <div className="p-6 pt-3">
                <button
                  className="block w-full select-none rounded-lg bg-orange-500 py-3.5 px-7 text-center align-middle text-sm font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                  onClick={() => handleDelete(car._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mycart;
