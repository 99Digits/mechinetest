import React from 'react'
import Footer from '../footer/footer/Footer'
import Mainheader from '../header/Mainheader'
import Cos from './contents/Cos'
import Homemaincontents from './contents/Homemaincontents'
import Aivideo from './contents/Aivideo'
import Products from '../products/Products'
function MainHome() {
  return (
    <div>
        <Mainheader/>
        <Cos/>
        <div className="mt-3">
          
          <Homemaincontents/>
        </div>
      <div className="mt-5">
        <Products/>
      </div>
        {/* <Footer/> */}
    </div>
  )
}

export default MainHome