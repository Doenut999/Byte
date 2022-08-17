import Paywall from "./components/Paywall/Paywall";
import Home from "./pages/Home"
import {Route, Routes, useLocation} from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import NavBar from "./components/NavBar";
import Favorites from "./pages/Favorites";
import Sidebar from "./components/SideBar";
import OrderHistory from "./pages/OrderHistory";
import Promotions from "./pages/Promotions";
import SpecialOrder from "./pages/SpecialOrder";
import {useEffect, useState} from "react";
import ShowButton from "./components/ShowButton";
import MobileSideBar from "./components/MobileSideBar";
import {AnimatePresence} from "framer-motion";
import React from "react";

const App = () => {
    const [show, setShow] = useState(false)
    const [width, setWindowWidth] = useState(0);
    const myLocation = useLocation()
    let isPayWall = myLocation.pathname === "/pw"
    console.log(isPayWall)


    const responsive = {
        showTopNavMenu: width > 1023
    }
    useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions)
        return () => window.removeEventListener("resize", updateDimensions)
    }, [])
    const updateDimensions = () => {
        const width = window.innerWidth
        setWindowWidth(width)
    }

    return (
        <>
            {isPayWall ? <Paywall /> :
            <>
                <GlobalStyle/>
            {responsive.showTopNavMenu ?
                <>
                <NavBar/>
                <Sidebar/>
                </> :
                <>
                <ShowButton show={show} setShow={setShow}/>
                <AnimatePresence>
            {show && <MobileSideBar key="indigo"/>}
                </AnimatePresence>
                </>
            }
                </>
            }

            <Routes>
                <Route path="pw" element={<Paywall/>}/>
                <Route path="*" element={<>where do you think you are going</>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="favorites" element={<Favorites/>}/>
                <Route path="promotions" element={<Promotions/>}/>
                <Route path="special-order" element={<SpecialOrder/>}/>
                <Route path="order-history" element={<OrderHistory/>}/>


            </Routes>
        </>
    );
}
export default App;


