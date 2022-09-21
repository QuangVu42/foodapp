import classNames from 'classnames/bind'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination} from 'swiper'

import Styles from './Comment.module.scss'
import img1 from '../../../assets/images/user-review-1.05fc2331.jpg'
import img2 from '../../../assets/images/user-review-2.8b773fe5.jpg'
import img3 from '../../../assets/images/user-review-3.3fbbdde9.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const cx= classNames.bind(Styles)
function Comment(){

    const comments =[
        {
            id:1,
            src: img1,
            name: 'mark zukerberg',
            work: 'co-founding facebook, inc',
            content: 'I chose food G because of their value And incredible superior customer Service they really awesome Food with quality service Ha of their value And incredible sup with quality'
        },
        {
            id:2,
            src: img2,
            name: 'Rose',
            work: 'main vocalist of backpink group',
            content: "Had dinner with girl friends. Menu is perfect, something for everyone. Service was awesome and Jason was very accommodating. Will be back definitely!"
        },
        {
            id:3,
            src: img3,
            name: 'tim cook',
            work: 'ceo of apple',
            content:'I had lunch with some of my colleagues at Echo on Day 1. I had the wedge salad - it was delicious. On Night 2, I enjoyed a drink at the bar. I had a Margarita. The service was excellent'
        }
    ]
    return(
        <div className={cx('warpper')}>
            <div id="container">
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
                    {comments.map((comment)=>(
                        <SwiperSlide key={comment.id}>
                            <div className={cx('image')}>
                                <img src={comment.src} alt={comment.name} />
                            </div>
                            <div className={cx('comment')}>
                                <h1>{comment.name}</h1>
                                <span>{comment.work}</span>
                                <p>{comment.content}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Comment