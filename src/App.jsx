import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepg from "./components/HomePg";
import ExpensesPg from "./components/ExpensesPg";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [array, SetArray] = useState([]);
  const fetchApi = async () => {
    const response = await axios.get("http://localhost:3001/api");
    SetArray(response.data.fruits);
    console.log(response.data.fruits);
  };


  useEffect(() => {
    fetchApi();
  }, []);
 

  return (
    <>
       <Navbar/>
      
       <Routes>
          <Route path="/" element={<Homepg SetArray={SetArray} array={array}/>}/>
          <Route path="/expenses" element={<ExpensesPg/>}/>
        </Routes>
       <Footer/>
    </>
  )
}

export default App
