import React from 'react'
import Datatable from '../../components/datatable/Datatable'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './list.scss'

const List = ({dataColums,dataRows,type}) => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
      <Datatable type={type} dataColums={dataColums} dataRows={dataRows}/>
      </div>
    </div>
  )
}

export default List
