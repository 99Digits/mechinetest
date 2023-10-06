import React from 'react'
import Mainheader from '../header/Mainheader'
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react'
import '../products/products.css'
function Cart() {
  return (
    <div>
<Mainheader/>
       <div className="mt-4 flex justify-center">
       <div className="flex flex-wrap w-60">
      
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">

        <div className="border p-0 w-60">
      <Card className="mt-6 w-60">
      <CardHeader color="blue-gray" className="relative h-56">
        <img className='image2'
          src={`${localStorage.getItem("image")}`}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
       {localStorage.getItem("title")}
        </Typography>
        <Typography>
      
        </Typography>
      </CardBody>
      <CardFooter className="pt-5 m-4">
          <h3>PRICE <span className='price'><i class="fa-solid fa-indian-rupee-sign"></i>{localStorage.getItem("price")}</span></h3><br />
        <a href={`cart`} className=' mt-5  text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>BUY NOW <i class="fa-brands fa-google-pay"></i></a><br /><br />
       
      </CardFooter>
    </Card>


      </div>
      </div>
    
      {/* <div className="border p-4">Column 2</div>
      <div className="border p-4">Column 3</div>
      <div className="border p-4">Column 4</div> */}
   

</div>
       </div>
    </div>
  )
}

export default Cart