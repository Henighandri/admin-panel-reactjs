import React from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';

import { Link } from 'react-router-dom';

  
const Datatable = ({dataColums,dataRows,type}) => {
   const actionColumn =[{
    fiels: "action",
    headerName:"Action",
    width:200,
    renderCell:()=>{
        return(
            <div className='cellAction'>
                <Link to={type==="admin"?"/admin/125":"/products/256"} style={{textDecoration:"none"}}>
            <div className="viewButton">view</div>
            </Link>
            <div className="deleteButton">delete</div>
            
            </div>
        )
    }
}]


  return (
    <div className='datatable' >
       <div className="datatableTitle">
        Add New {type==="admin"?"admin":"product"}
        <Link to={type==="admin"?"/admin/new":"/products/new"} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className='datagrid'
        rows={dataRows}
        columns={dataColums.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable
