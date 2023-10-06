import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import './products.css'
import { alldata } from '../service/all_api'

function Products() {
    useEffect(()=>{
        allproducts()

    })
    const [products,setproducts]=useState([])
    const allproducts=async()=>{
        try{
            const Response=await alldata()
            console.log(Response);
             setproducts(Response)
             
        }
        catch(err){
            console.log(err);
        }
       
       
        
    }
    const AddtoCart=(product)=>{
        localStorage.setItem("title",product.title)
        localStorage.setItem("price",product.price)
        localStorage.setItem("image",product.image)
        console.log("item added");
        alert("Item Added To Cart")
    }

    const Addtowishlist=(product)=>{
        localStorage.setItem("wtitle",product.title)
        localStorage.setItem("wprice",product.price)
        localStorage.setItem("wimage",product.image)
        alert("item Added to Wishlist")

    }
  return (
    <div>
        <Container className='cards_data'>
      {/* <Row className="row">
    
      {
        products.map((Data)=>(

<div className="col-lg-4 mt-6  ">
        <Card className="mt-6 w-20">
      <CardHeader color="blue-gray" className="relative h-56">
        <img className='image2'
          src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/b/u/f/-original-imaghxa5hvapbfds.jpeg?q=70"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Iphone 14
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Add to Cart<i class="fa-solid fa-cart-shopping"></i></Button>
        <Button className='text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Add WishList<i class="fa-solid fa-heart"></i></Button>
      </CardFooter>
    </Card>
        </div>

        ))
      }
      
      </Row> */}
<div className="flex flex-wrap">
      {products.map((data)=>(
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">

        <div className="border p-4">
      <Card className="mt-6 w-60">
      <CardHeader color="blue-gray" className="relative h-56">
        <img className='image2'
          src={data.image}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
         {data.title.slice(0,10)}
        </Typography>
        <Typography>
          {data.description.slice(0,50)}
        </Typography>
      </CardBody>
      <CardFooter className="pt-5 m-4">
      <a href={`view_products/${data.id}`} className='text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2'>ViewProduct &nbsp; <i class="fa-solid fa-eye"></i></a> <br /><br />
        <Button onClick={()=>AddtoCart(data)} className=' mt-5  text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Add to Cart<i class="fa-solid fa-cart-shopping"></i></Button><br /><br />
        <Button onClick={()=>Addtowishlist(data)} className='text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Add WishList<i class="fa-solid fa-heart"></i></Button>
      </CardFooter>
    </Card>


      </div>
      </div>
      ))}
      {/* <div className="border p-4">Column 2</div>
      <div className="border p-4">Column 3</div>
      <div className="border p-4">Column 4</div> */}
   

</div>


        </Container>


    </div>
  )
}

export default Products