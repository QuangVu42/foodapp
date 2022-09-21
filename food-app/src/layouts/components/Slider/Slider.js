// import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination} from 'swiper'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Button from '../../../Components/Button/Button'
import Styles from './Slider.module.scss'
import backgroundBanner from '../../../assets/images/banner-nd.jpg'
import backgroundBanner1 from '../../../assets/images/banner-rd.jpg'
import backgroundBanner2 from '../../../assets/images/banner-st.jpg'

const cx = classNames.bind(Styles)

function Slider(){

    const Banners = [
        {
            id: 1,
            title: 'enjoy your meal',
            content: 'good food is wise',
            image: backgroundBanner
        },
        {
            id: 2,
            title: 'happy your special ',
            content: 'love at first bite',
            image: backgroundBanner1
        },
        {
            id: 3,
            title: 'good food is good mood',
            content: 'the belly rules the mind',
            image: backgroundBanner2
        }
    ]
    return(
        <div className={cx('warpper')}>
            <Swiper
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                {Banners.map(banner=>(
                   <SwiperSlide key={banner.id}>
                        <div className={cx('banner')}>
                            <img src={banner.image} alt={banner.title}  className={cx('banner-img')} />
                            <div className={cx('content')} id='container-header' >
                                <h1 className={cx('title')}>{banner.title}</h1>
                                <p>{banner.content}</p>
                                <Button 
                                    primary
                                    href="#" 
                                    children={'order now'}
                                    icon = {<FontAwesomeIcon icon={faCartShopping} className={cx('icon')} />}
                                />
                            </div>
                        </div>
                   </SwiperSlide>
                ))}
            </Swiper> 
        </div>
    )
}

export default Slider