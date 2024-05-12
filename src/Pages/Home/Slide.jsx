
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import { useRef } from 'react';
import Banner from './Banner';

import imagebg1 from '../../../public/bg1.jpg'
import imagebg2 from '../../../public/bg2.jpg'
import imagebg3 from '../../../public/bg3.jpg'
import imagebg4 from '../../../public/bg4.jpg'

export default function Slide() {
//   const progressCircle = useRef(null);
//   const progressContent = useRef(null);
//   const onAutoplayTimeLeft = (s, time, progress) => {
//     progressCircle.current.style.setProperty('--progress', 1 - progress);
//     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
//   };
  return (
    <div className='container px-8 py-12 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        // className="mySwiper"
      >
        <SwiperSlide><Banner  image={imagebg1} text='Volunteers do not necessarily have the time,they just have the heart. - Elizabeth Andrew'></Banner></SwiperSlide>
        <SwiperSlide><Banner image={imagebg2} text={'"Service to others is the rent you pay for your room here on Earth." - Muhammad Ali'}></Banner></SwiperSlide>
        <SwiperSlide><Banner image={imagebg3} text='Volunteering is the ultimate exercise in democracy. You vote in elections once a year, but when you volunteer, you vote every day about the kind of community you want to live in.'></Banner></SwiperSlide>
        <SwiperSlide><Banner image={imagebg4} text={'"Every act of kindness is a piece of love we leave behind." - Paul Williams'}></Banner></SwiperSlide>

      
  
   
      </Swiper>
    </div>
  );
}
