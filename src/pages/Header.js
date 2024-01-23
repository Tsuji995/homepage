import React from 'react'

import { Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules'

import { Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'


import img1 from '../img/img1.jpeg'
import img2 from '../img/img2.jpeg'
import img3 from '../img/img3.jpeg'

import imag4 from '../img/img4.jpg'
import imag6 from '../img/img6.jpg'


import './Header.css'



export const Header = () => {
  return (
      <Swiper
        className='sample-slider'
        modules={[Autoplay, Navigation, Pagination, Scrollbar]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{delay: 3500}}
        loop={true}
        >
        <SwiperSlide>
          <img src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
      </Swiper>
  )
}
