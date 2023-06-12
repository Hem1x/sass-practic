import React, { useState } from 'react'
import HeaderImg from '../assets/header/header-image.jpg'

const Header = () => {
    const [isActive, setIsActive] = useState(false)

    const formFocus = () => {
        setIsActive(true)
    }

    return (
        <header className='header'>
            <div className="container">
                <div className="header__row">
                    <div className="header__text">
                        <h1 className='header__title'>Find your custom matched commercial real estate space.</h1>
                        <p>In oculis quidem exercitus quid ex ea consequatur? autem vel eum fugiat, quo pertineant ero tibique</p>

                        <form className={`header__form form ${isActive ? 'form--active' : ''}`} 
                            onFocus={() => setIsActive(true)} 
                            onBlur={() => setIsActive(false)}
                        >
                            <label className='form__label'>
                                <input type="text" className='form__input' placeholder='Your mail address'/>
                                <button className='form__button button'>Subscribe</button>
                            </label>
                        </form>
                    </div>

                    <div className="header__img">
                        <img src={HeaderImg} alt="Header img" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header