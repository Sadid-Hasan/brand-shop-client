import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <Carousel>
        <div>
            <img src="https://i.ibb.co/RN1htT7/front-left-side-47.webp" />
        </div>
        <div>
            <img src="https://i.ibb.co/0q5qy9Y/BN-MK772-RUMBLE-J-20160203113833.jpg" />
        </div>
        <div>
            <img src="https://i.ibb.co/x6w9Y64/2024-bmw-5-series-17.jpg" />
        </div>
    </Carousel>
    );
};

export default Slider;