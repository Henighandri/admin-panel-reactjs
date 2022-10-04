import React from 'react'
import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import MyTable from '../../components/table/Table'

const Home = () => {
  const dataChart = [
    { name: "January", Total: 1200 },
    { name: "February", Total: 2100 },
    { name: "March", Total: 800 },
    { name: "April", Total: 1600 },
    { name: "May", Total: 900 },
    { name: "June", Total: 1700 },
  ];
  return (
    <div className='home' >
     <Sidebar/>
     <div className="homeContainer">
      <Navbar/>
     <div className="widgets">
      <Widget type ="user"/>
      <Widget type ="order"/>
      <Widget type ="earning"/>
      <Widget type ="balance"/>

     </div>
     <div className="charts">
        <Featured/>
        <Chart data={dataChart} aspect={2/1} title="Last 6Months (Revenue)"/>

      </div>
      <div className="listContainer">
        <div className="listTitle">Lastest Transaction</div>
        <MyTable/>
      </div>

     </div>
    </div>
  )
}

export default Home
