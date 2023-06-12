import React from 'react'
import card1 from '../assets/cards/01.jpg'
import card2 from '../assets/cards/02.jpg'
import building from '../assets/icons/building.svg'

const Objects = () => {
  return (
    <section className='objects'>
        <div className="conteiner container--fluid conteiner--no-padding">
            <div className="objects__row">
                <div className="objects__img">
                    <div className="img-card img-card--rounder">
                        <img src={card2} className='img-card__img' alt="card 2" />
                    </div>

                    <div className="img-card">
                        <img src={card1} className='img-card__img' alt="card 1" />

                        <div className="img-card__info">
                            <div className="card-info">
                                <div className="card-info__icon">
                                    <img src={building} alt="building" />
                                </div>

                                <div className="card-info__text">
                                    <h3 className='card-info__title'>Twelve West Lake</h3>
                                    <p>Space for up to 150 people</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="objects__text">
                    <h2 className='objects__title title'>We provide best space for you!</h2>
                    <p>Quid ex eo ortum, tam inportuno tamque crudeli; sin, ut aliquid ex ea quid est et via procedat oratio quaerimus.</p>
                    <p>quid aut ad id omnia referri oporteat, ipsum autem nusquam hoc epicurus in ea commodi consequatur?</p>
                    <a href='#' className='objects__button button'>Learn more</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Objects