import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepg from "./components/HomePg";
import ExpensesPg from "./components/ExpensesPg";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
       <Navbar/>
       <Routes>
          <Route path="/" element={<Homepg/>}/>
          <Route path="/expenses" element={<ExpensesPg/>}/>
        </Routes>
       <Footer/>
    </>
  )
}

export default App
