import classNames from 'classnames/bind'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

import Styles from './Information.module.scss'
import Button from '../../../Components/Button/Button'

const cx = classNames.bind(Styles)
function Information(){

    const Informations =[
        {
            id:1,
            number: 350,
            title:'cup of caffe',
            augment: true,
        },
        {
            id: 2,
            number: 2678,
            title: 'orders everyday',
            augment: true,
        },
        {
            id: 3,
            number: 60,
            title: 'skilled professionals',
            augment: false,
        },
        {
            id:4,
            number: 30,
            title: 'sandwichs at hour',
            augment: false,
        }
    ]
    return(
        <div className={cx('wrapper')}>
            <section className={cx('review')}>
                <Button 
                    circle
                    href="#" 
                    children={'sandwich'}
                    element={
                        <div className={cx('box')}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    }
                    icon = {<FontAwesomeIcon icon={faYoutube} className={cx('icon')} /> }
                />
            </section>
            <section className={cx('container')}>
                <div id="container-header" className={cx('content')}>
                        {Informations.map((information)=>(
                            <div key={information.id} className={cx('information')}>
                                <h1>{information.number}</h1>
                                <p>{information.title}</p>
                            </div>
                        ))}
                </div>
            </section>
        </div>
    )
}

export default Information