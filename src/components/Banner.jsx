import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="w-full bg-center bg-cover h-[38rem]" style={{backgroundImage: 'url(https://i.ibb.co/KxtrQRX/pexels-torsten-dettlaff-70912.jpg)'}}>
        <div className="flex items-center justify-center font-poppins w-full h-full bg-gray-900/40">
            <div className="text-center">
                <h1 className="text-3xl text-white lg:text-6xl font-poppins font-bold">Discover Your Perfect Ride with  <span className=" text-orange-500">Car Connect X</span></h1>
                <button className="btn bg-orange-500  hover:bg-orange-400 focus:outline-none  text-white">
                <Link to='/signup'>Get Quote</Link></button>

                <p className="text-xl text-white lg:text-2xl font-poppins font-semibold">
                Where Driving Dreams Come True. Explore Quality, Style, and Performance Today!
            </p>
            </div>
        </div>
    </div>
    );
};

export default Banner;