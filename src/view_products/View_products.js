import React, { useEffect, useState } from 'react'
import Mainheader from '../header/Mainheader'
import { viewdata } from '../service/all_api'
import { useParams } from 'react-router-dom'
import { Card, CardBody, CardFooter, CardHeader, Tooltip, Typography } from '@material-tailwind/react'
import '../products/products.css'
function View_products() {
    const {id}=useParams();
    useEffect(()=>{
        view_all()
        console.log(Data);
    },[])
    const [Data,setData]=useState([])

    const view_all=async()=>{
        

        try{
            const response=await viewdata(id)
            console.log(response);
            setData(response)

        }catch(err){
            console.log(err);
        }

    }
  return (
   
    <>
    
    <Mainheader/>

    <div className="container flex justify-center">

    <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img className='image2' src={Data.image} alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {Data.title}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
            <h4 className='dec'>Description</h4>
          {Data.description}
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
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#twitter"
            variant="lead"
            color="light-blue"
            textGradient
          >
            <i className="fab fa-twitter" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
          >
            <i className="fab fa-instagram" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
    </div>







    </>
  )
}

export default View_products