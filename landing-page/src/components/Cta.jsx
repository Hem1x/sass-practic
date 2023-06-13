import React from 'react'
import dashboard from '../assets/cta/dashboard.jpg'

const Cta = () => {
  return (
    <section className='cta'>
        <div className="container">
            <div className="cta__block">
                <div className="cta__img">
                    <img src={dashboard} alt="" />
                </div>
                <div className="cta__text">
                    <h2 className="cta_title title">Start using our product</h2>
                    
                    <p>Quid ex eo ortum, tam inportuno tamque crudeli; sin, ut aliquid ex</p>
                    
                    <div className="cta__buttons-row">
                        <a href="#" className='button'>Contact us</a>
                        <button className='button button--white'>Watch now</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cta