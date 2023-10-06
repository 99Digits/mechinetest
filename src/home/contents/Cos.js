import React, { useEffect, useState } from 'react'
import './cos.css'
import { Carousel } from 'react-carousel3'

function Cos() {
    const style = {
        width: 500,
        height: 346,
        
      };    
  return (
    <div>
    
        <div className="row">
            
            <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      background: 'linear-gradient(to bottom, #16235e 0%, #020223 100%)',
      overflow: 'hidden'

    }}
  >
    <Carousel height={460} width={980} Origin={42} yRadius={48} autoPlay={true}>
      <div key={1} style={style}>
        <img className='img1' alt="" src="https://advancedbytez.com/wp-content/uploads/2022/03/Accessibility-for-your-Online-eCommerce-Store.jpg" />
      </div>
      <div key={2} style={style}>
        <img className='img1' alt="" src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg" />
      </div>
      <div key={3} style={style}>
        <img className='img1' alt="" src="https://www.partitaiva.it/wp-content/uploads/2023/01/Aprire-un-e-commerce.jpg" />
      </div>
      <div  key={4} style={style}>
        <img className='img1' alt="" src="https://web-station.it/wp-content/uploads/elementor/thumbs/perche-ecommerce-opbq7tp5ldjfus0kyhpekoyd136mbwyzsg5x8ekv48.jpg" />
      </div>
      <div key={5} style={style}>
        <img className='img1' alt="" src="https://images.businessnewsdaily.com/app/uploads/2022/04/04073619/how-ecommerce-works.png" />
      </div>
      <div key={6} style={style}>
        <img className='img1' alt="" src="https://blog.shift4shop.com/hubfs/iStock-1051616786.jpg" />
      </div>
    </Carousel>
  </div>
            </div>
        </div>
     
   
  )
}

export default Cos