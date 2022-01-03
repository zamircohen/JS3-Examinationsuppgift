import React from "react"
import {Routes, Route} from "react-router-dom"
import CustomerCreatePage from "./pages/CustomerCreatePage";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserCreatePage from "./pages/UserCreatePage";

function App() {
  return (
    <div>

        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/customer/:id" element={<CustomerDetailPage />}></Route>
          <Route path="/create" element={<CustomerCreatePage />}></Route>
          <Route path="/user/create" element={<UserCreatePage />}></Route>
        </Routes>

    </div>
  );
}

export default App;
