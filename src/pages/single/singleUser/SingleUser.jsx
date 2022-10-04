import React from 'react'
import Chart from '../../../components/chart/Chart'
import Navbar from '../../../components/navbar/Navbar'
import Sidebar from '../../../components/sidebar/Sidebar'
import MyTable from '../../../components/table/Table'
import './singleUser.scss'

const SingleUser = () => {
  const dataChart = [
    { name: "January", Total: 1200 },
    { name: "February", Total: 2100 },
    { name: "March", Total: 800 },
    { name: "April", Total: 1600 },
    { name: "May", Total: 900 },
    { name: "June", Total: 1700 },
  ];
  return (
    <div className='singleUser'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
     <div className="top">
      <div className="left">
        <div className="editButton">Edit</div>
        <h1 className="title">Information</h1>
        <div className="item">
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="" className="itemImg" />
         <div className="details">
          <div className="itemTitle">Jane Doe</div>
          <div className="detailItem">
            <span className="itemKey">Email:</span>
            <span className="itemValue">JaneDoa@gmail.com</span>
          </div>
          <div className="detailItem">
            <span className="itemKey">Phone:</span>
            <span className="itemValue">+258 582 8665</span>
          </div>
          <div className="detailItem">
            <span className="itemKey">Address:</span>
            <span className="itemValue">aa bb cc</span>
          </div>
          <div className="detailItem">
            <span className="itemKey">Country:</span>
            <span className="itemValue">Tunisia</span>
          </div>
         </div>
        </div>
      </div>
      <div className="right">
        <Chart data={dataChart} aspect={3/1} title="User Spending (Last 6 Month)"/>
      </div>
     </div>
     <div className="bottom">
     <h1 className="title">Last transaction</h1>
      <MyTable/>
     </div>
      </div>
    </div>
  )
}

export default SingleUser
