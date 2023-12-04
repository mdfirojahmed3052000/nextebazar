import React from 'react'
import axios from 'axios'
import Head from '../component/header/Head';
import ListProduct from '../component/product/listProduct';
import Footer from '../component/footer/Footer';


let getproduct=async()=>{

  const {data} = await axios.get(`${process.env.API_URL}/api/products/`);

  return data;

}/*
getproduct=async(params)=>{
  var sample = params;
  const {data} = await axios.get(`${process.env.API_URL}/api/products/${sample}`);

  return data;

}
*/

const page = async() => {
  
  const productData= await getproduct();

  return (
    <>
        <Head/>
        <ListProduct data ={productData} />
        
        
    </>
  )
}

export default page