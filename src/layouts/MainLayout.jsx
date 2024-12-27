import { Outlet } from "react-router-dom";
 import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { createContext, useState } from "react";

export const countContext = createContext(null)
const MainLayout = () => {
    const [count,setCount] = useState(0)
    return (
        <div>
           <countContext.Provider value={{count, setCount}}>
           <Navbar></Navbar>
           <div className="mx-auto px-4 md:px-10">
           <Outlet></Outlet>
           </div>
            <Footer></Footer>
            </countContext.Provider>  
        </div>
    );
};

export default MainLayout;