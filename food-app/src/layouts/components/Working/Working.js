import { Swiper, SwiperSlide} from 'swiper/react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import Styles from './Working.module.scss'

import workingImage from '../../../assets/images/working-1.jpg'
import workingImage1 from '../../../assets/images/working-2.jpg'
import workingImage3 from '../../../assets/images/working-3.jpg'
import workingImage4 from '../../../assets/images/working-4.jpg'
import Round from '../../../Components/Round/Round'

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";

// import required modules
import { Grid} from "swiper";

const cx = classNames.bind(Styles)

function Working(){
    const Images = [
        {
            id: 1,
            content:'choose your favorite',
            url: workingImage,
        },{
            id: 2,
            content: 'we deliver your meals',
            url: workingImage1,
        },
        {
            id: 3,
            content: 'cash on delivery',
            url: workingImage3,
        },
        {
            id: 4,
            content: 'eat and enjoy',
            url: workingImage4,
        }
    ]
    setTimeout (() =>{
        function DeleteIcon () {
           const a =  document.querySelectorAll('.Working_wrapper__n0-cK .Working_content__-ot9d .Working_slide-work__lma4W .Working_icon__qeXIk')
            a[0].style.display = "none"
            a[a.length-1].style.display = "none"
        }
        DeleteIcon()
    },200)
    return(
        <div className={cx('wrapper')}>
            <div id="container">
                <div className={cx('title')}>
                    <h1>how it works</h1>
                    <p>order now!</p>
                </div>
                <div className={cx('content')}>
                    <Swiper
                        slidesPerView={Images.length}
                        grid={{
                            rows: 1,
                        }}
                        modules={[Grid]}
                        className="mySwiper"
                        id="slide"
                    >
                        {Images.map((image)=>(
                            <SwiperSlide key={image.id} className={cx('slide-work')} id='round'>
                                <img src={image.url} alt="don't " id="border-slide"  />
                                <p className={cx('content')}>{image.content}</p>
                                <Round
                                        width= '60px'
                                        height= '60px'
                                        left= {12}
                                        top= {12}
                                        item
                                        children={image.id}
                                />
                                <FontAwesomeIcon icon={faChevronRight}  className={cx('icon','icon-two')} />
                                <FontAwesomeIcon icon={faChevronRight}  className={cx('icon','icon-one')} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className={cx('')}></div>
                </div>
            </div>
        </div>
    )
}

export default Working