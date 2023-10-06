import React, { useState } from 'react'
import Mainheader from '../header/Mainheader'
import { Button, Card, CardBody, CardFooter, CardHeader, Tooltip, Typography } from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom'
import '../products/products.css'
function Wishlist() {
    const nav=useNavigate()
    const [found,setfound]=useState(false)
    const Wtocart=()=>{
        localStorage.setItem("title",localStorage.getItem("wtitle"))
        localStorage.setItem("price",localStorage.getItem("wprice"))
        localStorage.setItem("image",localStorage.getItem("wimage"))


        localStorage.removeItem("wtitle")
        localStorage.removeItem("wprice")
        localStorage.removeItem("wimage")
        alert("Item Added To cart")
        nav('/cart')
        setfound(true)

    }
  return (
    <div>
<Mainheader/>


<div className="container flex justify-center">

{localStorage.getItem("title")?<Card className="w-96">
  <CardHeader floated={false} className="h-80">
    <img className='image2' src={localStorage.getItem("wimage")} alt="profile-picture" />
  </CardHeader>
  <CardBody className="text-center">
    <Typography variant="h4" color="blue-gray" className="mb-2">
      
    </Typography>
    <Typography color="blue-gray" className="font-medium" textGradient>
        <h4 className='dec'>{localStorage.getItem("wtitle")}</h4>
    
    </Typography>
  </CardBody>
  <CardFooter className="flex justify-center gap-7 pt-2">
    <Tooltip content="Like">
      <Typography
        as="a"
        href="#facebook"
        variant="lead"
        color="blue"
        textGradient
      >
       
      </Typography>
    </Tooltip>
    <Button  onClick={Wtocart}  className=' mt-5  text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Add TO Cart <i class="fa-solid fa-cart-shopping"></i></Button>
    
  </CardFooter>
</Card>:<div className="image2"> <img src="https://ibella.us/admin_assets/CustomImage/wishlist-empty.jpg" alt="" /></div>}
</div>



    </div>
  )
}

export default Wishlist