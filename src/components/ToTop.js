import React, { useEffect} from 'react';
import { BiArrowFromBottom } from 'react-icons/bi';

const ToTop = () => {

    const scrollFunction = () => {
        const topButton = document.getElementsByClassName("up")[0]
        if(window.pageYOffset > 900) topButton.style.opacity = "1"
        else topButton.style.opacity = "0"
    }

    const toTopFunction = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollFunction)
        return () => window.removeEventListener('scroll', scrollFunction)
        //The goal of this return() is to remove the eventListener when the component unmount.
    }, [])

    return <div className='up' onClick={toTopFunction}>
                <BiArrowFromBottom className='up-icon' onClick={toTopFunction}/>
            </div>
}

export default ToTop;