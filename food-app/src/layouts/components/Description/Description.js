import classNames from 'classnames/bind'

import Styles from './Description.module.scss'

const cx = classNames.bind(Styles)

function Description (){

    return(
        <div className={cx('wrapper')}>
            <div id = 'container'>
                <h1 className={cx('title')}>description</h1>
                <p className={cx('content')}>Although the legendary Double Burger really needs no introduction, please allow us…
                Tucked in between three soft buns are two all-beef patties, cheddar cheese, ketchup, onion, pickles and iceberg lettuce.
                Hesburger’s own paprika and cucumber mayonnaise add the crowning touch. Oh baby!</p>
                <div className={cx('table')}>
                    <ul>
                        <li className={cx('title')}>
                            <h2>best foods</h2>
                            <span>28 cm size</span>
                            <h2 className={cx('ingredients')}>ingredients</h2>
                        </li>
                        <li>
                            <h2>24</h2>
                            <span>28 cm size</span>
                            <p>egg</p>
                        </li>
                        <li>
                            <h2>728</h2>
                            <span>energy</span>
                            <p>milk protein</p>
                        </li>
                        <li>
                            <h2>1054</h2>
                            <span>calo</span>
                            <p>sesame</p>
                        </li>
                        <li>
                            <h2>68</h2>
                            <span>fat</span>
                            <p>lactose</p>
                        </li>
                        <li>
                            <h2>25</h2>
                            <span>gluxit</span>
                            <p>gluten</p>
                        </li>
                        <li>
                            <h2>548</h2>
                            <span>protein</span>
                            <p>mustard</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Description