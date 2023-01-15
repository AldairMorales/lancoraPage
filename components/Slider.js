// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const styles = {
    bgImage: {
        backgroudSize: 'cover',
        height:'100vh',
        width: '200px'
    }
}

export default function Slider () {
    return (
        <Swiper
            spaceBetween={25}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <img src="/portada2.jpg" className="card-img-top" alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/portada1.jpg" className="card-img-top" alt=""/>
            </SwiperSlide>
        </Swiper>
    )
}