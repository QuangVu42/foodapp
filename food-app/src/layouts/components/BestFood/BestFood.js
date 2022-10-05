import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Swiper ,SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination,Navigation} from 'swiper'

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

import Styles from './BestFood.module.scss'
import Button from '../../../Components/Button/Button'
import imgslide1 from '../../../assets/svgs/beef.svg'
import imgslide2 from '../../../assets/svgs/burger.svg'
import imgslide3 from '../../../assets/svgs/chicken.svg'
import imgslide4 from '../../../assets/svgs/coffee.svg'
import imgslide5 from '../../../assets/svgs/dinner.svg'
import imgslide6 from '../../../assets/svgs/juice.svg'
import imgslide7 from '../../../assets/svgs/lunch.svg'
import imgslide8 from '../../../assets/svgs/pork.svg'
import imgslide9 from '../../../assets/svgs/tea.svg'

const cx=classNames.bind(Styles)

function BestFood() {
    const imgslides = [
        {
            id:1,
            src: imgslide1,
            alt: "Error"
            
        },
        {
            id:2,
            src: imgslide2,
            alt: "Error"
            
        },
        {
            id:3,
            src: imgslide3,
            alt: "Error"
            
        }
        ,
        {
            id:4,
            src: imgslide4,
            alt: "Error"
            
        },
        {
            id:5,
            src: imgslide5,
            alt: "Error"
            
        },
        {
            id:6,
            src: imgslide6,
            alt: "Error"
            
        },
        {
            id:7,
            src: imgslide7,
            alt: "Error"
            
        }, 
        {
            id:8,
            src: imgslide8,
            alt: "Error"
            
        },
        {
            id:9,
            src: imgslide9,
            alt: "Error"
            
        }
    ]

    return(
        <div className={cx('wrapper')}>
            <div id="container">
                <section className={cx('bestFood')}>
                    <div className={cx('content')}>
                        <h1>best food</h1>
                        <p>super delicious steak <span>hamburger<br/> $25.00</span></p>
                    </div>
                    <div className={cx('btn')}>
                        <Button 
                            primary
                            to={'/shop'} 
                            children={'order now'}
                            icon = {<FontAwesomeIcon icon={faCartShopping} className={cx('icon')} />}
                        />
                    </div>
                </section>
                <section className={cx('categoryFood')}>
                    <div className={cx('content')}>
                        <h1>what we have?</h1>
                        <p>browse food category</p>
                    </div>
                    <div className={cx('slide')}>
                        <Swiper
                            breakpoints={{
                                768:{
                                    slidesPerView:7
                                },
                                576:{
                                    slidesPerView: 5
                                },
                                0:{
                                    slidesPerView: 3
                                }
                            }}
                            spaceBetween={0}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >   
                            {imgslides.map((imgslide,index)=>(
                                <div key={imgslide.id}>
                                    <SwiperSlide key={index}>
                                        <img src={imgslide.src} alt="Error"  className={cx('imgslide')} />
                                    </SwiperSlide>
                                </div>
                            ))} 
                        </Swiper>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default BestFood