import React from 'react'
import axios from 'axios'
import Head from '../component/header/Head';
import Footer from '../component/footer/Footer';
import ListProduct from '../component/product/ListProduct'


let getproduct=async()=>{

  //const {data} = await axios.get(`${process.env.API_URL}/api/products/`);
  try {
    const {data} = await axios.get(`${process.env.API_URL}/api/products/`);
    // Process the successful response
    return data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Handle authentication error
      console.error('Authentication failed:', error.message);
    } else {
      // Handle other errors
      console.error('Request failed:', error.message);
    }
  }
  

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
        {(productData)?<ListProduct data ={productData} />:<h1></h1>}
        
        
    </>
  )
}
/*
export async function getStaticProps() {
  // Fetch data from an API or any other source
  const {data} = await axios.get(`${process.env.API_URL}/api/products/`);

  // Return the data as props
  return {
    props: {
      data,
    },
  };
}*/
export default page