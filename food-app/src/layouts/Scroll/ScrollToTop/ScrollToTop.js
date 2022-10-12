import React, {Fragment, useEffect, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUpLong} from '@fortawesome/free-solid-svg-icons'

function ScrollToTop(){
    const [backToTop, setBackToTop] = useState(false)
    
    useEffect(() =>{
        const onScroll = () => {
            if(window.scrollY>100){
                setBackToTop(true)
            }else{
                setBackToTop(false)
            }
        }
        window.addEventListener('scroll',onScroll,{passive:true})
    },[])
    const scrollUp  = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        }) 
    }
    return(
        <Fragment>
            {backToTop && (
                <button style={{
                    position: 'fixed',
                    height: '50px',
                    width: '50px',
                    bottom: '10%',
                    right: '1%',
                    borderRadius: '50%',
                    fontSize: '2rem',
                    backgroundColor: 'var(--blue)',
                    color: 'var(--white)',
                    cursor: 'pointer'
                }}
                onClick= {scrollUp}
                >
                    <FontAwesomeIcon icon={faUpLong} />
                </button>
            )}
        </Fragment>
    )
}

export default ScrollToTop