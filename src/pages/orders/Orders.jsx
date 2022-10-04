import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import MyTable from '../../components/table/Table'
import './orders.scss'
const Orders = () => {
  return (
    <div className="orders">
    <Sidebar/>
       <div className="ordersContainer">
        <Navbar/>
       <div className="title">All Orders</div>  
         <MyTable/>
         
       
       </div>
    </div>
  )
}

export default Orders
