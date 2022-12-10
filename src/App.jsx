
import './App.css'
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'
import Detail from './Routes/Detail'
import NotFound from './Routes/NotFound'
import {Route, Routes } from 'react-router-dom'
import React, { useContext } from "react";
import {routes} from './Routes/Routess'
import { useGlobalStates } from './Context/Context'
import { ThemeContext } from "./Context/ThemeContext";


function App() {
  
  const{data}=useGlobalStates()
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={`${darkMode ? "dark" : "light"}`}>
      <Navbar />
      <Routes>
        <Route path={routes.home} element={<Home/>} />
        <Route path='/dentist/:id' element={<Detail data={data} />} />
        <Route path={routes.contact} element={<Contact/>}/>
        <Route path={routes.favs} element={<Favs/>}/> 
        <Route path='*' element={<NotFound />} />
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
/*

  
*/