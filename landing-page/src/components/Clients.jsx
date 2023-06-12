import React from 'react'
import Img01 from '../assets/clients/01.svg'
import Img02 from '../assets/clients/02.svg'
import Img03 from '../assets/clients/03.svg'
import Img04 from '../assets/clients/04.svg'

const Clients = () => {
  return (
    <section className="clients">
        <div className="container">
            <div className="clients__row">
                <img src={Img01} alt="" />
                <img src={Img02} alt="" />
                <img src={Img03} alt="" />
                <img src={Img04} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Clients