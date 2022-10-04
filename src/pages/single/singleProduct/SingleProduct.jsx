import React from 'react'
import Chart from '../../../components/chart/Chart'
import Navbar from '../../../components/navbar/Navbar'
import Sidebar from '../../../components/sidebar/Sidebar'
import MyTable from '../../../components/table/Table'
import './singleProduct.scss'

 

const SingleProduct = () => {
    const dataChart = [
        { name: "January", Total: 1200 },
        { name: "February", Total: 2100 },
        { name: "March", Total: 800 },
        { name: "April", Total: 1600 },
        { name: "May", Total: 900 },
        { name: "June", Total: 1700 },
      ];
    const product={
        images:[
            "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg"
        ],
        productName:'Pc Azus',
        ram:'8Gb',
        disqueDur:"500Gb ssd",
        processeur:'intel i7 8500',
        price:"2500 $",
        quantity :100
    }
  return (
    <div className='singleProduct'>
    <Sidebar/>
    <div className="singleContainer">
      <Navbar/>
      <div className="top">
      <div className="left">
        <div className="editButton">Edit</div>
        <h1 className="title">Information</h1>
        <div className="item">
          <img src={product.images[0]} 
          alt="" className="itemImg" />
         <div className="details">
          <div className="itemTitle">{product.productName}</div>
          <div className="detailItem">
            <span className="itemKey">Ram:</span>
            <span className="itemValue">{product.ram}</span>
          </div>
          <div className="detailItem">
            <span className="itemKey">Disque Dur:</span>
            <span className="itemValue">{product.disqueDur}</span>
          </div>
          <div className="detailItem">
            <span className="itemKey">Processor:</span>
            <span className="itemValue">{product.processeur}</span>
          </div>
          <div className="detailItem">
            <span className="itemKey">Price:</span>
            <span className="itemValue">{product.price}</span>
          </div>
          <div className="detailItem">
            <span className="itemKey">Quantity:</span>
            <span className="itemValue">{product.quantity}</span>
          </div>
         </div>
        </div>
      </div>
      <div className="right">
        <Chart data={dataChart} aspect={3/1} title="User Spending (Last 6 Month)"/>
      </div>
     </div>
     <div className="bottom">
     <h1 className="title">Images product</h1>
     <div className="listImageProduct">
     {product.images.map(img=>{
        console.log(img);
       return (
            <img src={img} alt='' className='imagesProduct'/>
        )
       })}
     </div>

      
    
     </div>
      </div>
    </div>
  )
}



export default SingleProduct
