import React, { useContext } from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import CreditCardIcon from "@mui/icons-material/CreditCard";
import {Link} from 'react-router-dom'
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {
  const {dispatch}=useContext(DarkModeContext)
  return (
    <div className='sidebar'>
      
      <div className="top">
      <Link to="/" style={{textDecoration:"none"}}><span className="logo">Admin Panel</span>
      </Link>
      </div>

      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{textDecoration:"none"}}>
          <li>
            <DashboardIcon className='icon' />
            <span>Dashboard</span> </li>
            </Link>
          <p className="title">LISTS</p>
          <Link to="/admin" style={{textDecoration:"none"}}>
          <li>
            <PersonOutlineOutlinedIcon className='icon' />
            <span>Admin</span>
          </li>
          </Link>
          <Link to="/products" style={{textDecoration:"none"}}>
          <li>
            <StoreOutlinedIcon className='icon' />
            <span>Products</span>
          </li>
          </Link>
          <Link to="/orders" style={{textDecoration:"none"}}>
          <li>
            <CreditCardIcon className='icon' />
            <span>Orders</span>
          </li>
          </Link>
          <li> <LocalShippingOutlinedIcon className='icon' />
            <span>Delivery</span></li>
          <p className="title">
            USEFUL</p>
          <li> <AssessmentOutlinedIcon className='icon' />
            <span>Stats</span></li>
          <li> <NotificationsOutlinedIcon className='icon' />
            <span>Notifications</span></li>
          <p className="title"> SERVICE</p>
          <li> <SettingsSystemDaydreamOutlinedIcon className='icon' /> <span>System Health</span></li>
          <li> <InsertEmoticonOutlinedIcon className='icon' /> <span>Logos</span></li>
          <li> <SettingsOutlinedIcon className='icon' /> <span>Settings</span></li>
          <p className="title"> USER</p>
          <li> <AccountCircleOutlinedIcon className='icon' /> <span>Profile</span></li>
          <li> <ExitToAppOutlinedIcon className='icon' /> <span>Logout</span></li>

        </ul>

      </div>
      <div className="bottom">
        <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
        <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
      </div>
    </div>
  )
}

export default Sidebar
