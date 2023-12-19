import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Admin from "./Pages/Admin";

const App = () => {
    return (
     <BrowserRouter>
         <Routes>
             <Route path='/' element={<HomePage/>} />
             <Route path='/admin' element={<Admin/>}/>
         </Routes>
     </BrowserRouter>
    );
};

export default App;