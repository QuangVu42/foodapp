import classNames from 'classnames/bind'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination} from 'swiper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import Styles from './QualityProducts.module.scss'
import Button from '../../../Components/Button/Button'

import imgProduct1 from '../../../assets/images/product-1.png'
import imgProduct2 from '../../../assets/images/product-2.png'
import imgProduct3 from '../../../assets/images/product-3.png'
import imgProduct4 from '../../../assets/images/product-4.png'


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const cx = classNames.bind(Styles)

function QualityProducts() {

    const imgProducts = [
        {
            id: 1,
            src: imgProduct1,
            title: 'crazy burger',
            content: 'Buarning do amet contur dicivt suia non nuameius velit',
            price: '$20.00'
        },
        {
            id: 2,
            src: imgProduct2,
            title: 'beefcakes burgers',
            content: 'Buarning do amet contur dicivt suia non nuameius velit',
            price: '$25.00'
        },
        {
            id: 3,
            src: imgProduct3,
            title: 'the cripy bun',
            content: 'Buarning do amet contur dicivt suia non nuameius velit',
            price: '$30.00'
        },
        {
            id: 4,
            src: imgProduct4,
            title: 'bugout burgers',
            content: 'Buarning do amet contur dicivt suia non nuameius velit',
            price: '$25.00'
        }
    ]
    
    return(
        <div className={cx('wrapper')}>
            <div id='container'>
                <section className={cx('header')}>
                    <div className={cx('header-content')}>
                        <h1 className={cx('title')}>quality products</h1>
                        <p>Burger as expected <span>dilicious</span> one</p>
                    </div>
                </section>
                <section className={cx('slide')}>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={20}
                        // centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                    >
                        {imgProducts.map((imgProduct, index)=>(
                            <SwiperSlide key={imgProduct.id}>
                                <div className={cx('box')}>
                                    <div className={cx('image')}>
                                        <img src={imgProduct.src} alt="don't img" className={cx('img')} />
                                    </div>
                                    <div className={cx('btn')}>
                                        <Button 
                                            primary
                                            href="#" 
                                            children={'order now'}
                                            icon = {<FontAwesomeIcon icon={faCartShopping} className={cx('icon')} />}
                                        />
                                    </div>
                                    <div className={cx('content')}>
                                        <h3>{imgProduct.title}</h3>
                                        <p>{imgProduct.content}</p>
                                        <span>{imgProduct.price}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
            </div>
        </div>
    )
}

export default QualityProducts