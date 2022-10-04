import Home from "./pages/home/Home";
import List from "./pages/list/List"
import Login from "./pages/login/Login"
import New from "./pages/new/New"
import SingleUser from "./pages/single/singleUser/SingleUser"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import './style/dark.scss'
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import {userColumns,userRows,productColumns,productRows} from './datatablesource'
import SingleProduct from "./pages/single/singleProduct/SingleProduct";
import Orders from "./pages/orders/Orders";
function App() {
 const {darkMode}=useContext(DarkModeContext)
  return (
    <div className={darkMode? "app dark ":"app" }>
      <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="login" element={<Login/>}/>
          <Route path="admin">
            <Route index element={<List type="admin" dataColums={userColumns} dataRows={userRows}/>}/>
            <Route path=":adminId" element={<SingleUser/>}/>
            <Route path="new" element={<New inputs={userInputs} title="Add new admin"/>}/>

          </Route>
          <Route path="products">
            <Route index element={<List type="products" dataColums={productColumns} dataRows={productRows}/>}/>
            <Route path=":productId" element={<SingleProduct/>}/>
            <Route path="new" element={<New inputs={productInputs} title="Add new product"/>}/>

          </Route>
          <Route path="orders">
            <Route index element={<Orders/>  }/>
            <Route path=":order" element={<div></div>}/>
           

          </Route>
         
        </Route>
        
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
