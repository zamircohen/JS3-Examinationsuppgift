import React, {createContext, useState} from "react"
import {Routes, Route} from "react-router-dom"
import CustomerCreatePage from "./pages/CustomerCreatePage";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserCreatePage from "./pages/UserCreatePage";



const UserContext = createContext({})


function App() {

  
  const [myData, setMyData] = useState(null)
  const [customerList, setCustomerList] = useState(null)  

  return (
    
  
    <UserContext.Provider value = {{myData, setMyData, customerList, setCustomerList}}>

    
    <div>
      
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/customer/:id" element={<CustomerDetailPage />}></Route>
          <Route path="/create" element={<CustomerCreatePage />}></Route>
          <Route path="/user/create" element={<UserCreatePage />}></Route>
          {/* <Route path="/user/activate" element={<UserActivatePage />}></Route> */}
        </Routes>

    </div>

      </UserContext.Provider>

  );
}


export {UserContext}

export default App;
