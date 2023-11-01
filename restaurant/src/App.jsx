import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar/navbar'
import Cards from './components/layout/Cards'
import Carousal from './components/layout/components/Carousal/Carousal';
import Footer from './components/layout/components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div>
      <Navbar title="Restaurant"/>
      <Routes>
          <Route exact path="/" element={<Overview image={"https://th.bing.com/th/id/OIP.fhWnuV2SzN_XbiSofYMK-AHaF-?pid=ImgDet&rs=1"} />}></Route>
          <Route exact path="/cards" element={<Cards />}></Route>
        </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App
