import Paywall from "./components/Paywall";
import Home from "./pages/Home"
import {Route, Routes} from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import NavBar from "./components/NavBar";
import Favorites from "./pages/Favorites";
import Sidebar from "./components/SideBar";
import OrderHistory from "./pages/OrderHistory";
import Promotions from "./pages/Promotions";
import SpecialOrder from "./pages/SpecialOrder";
import {useEffect, useState} from "react";
import MobileSideBar from "./components/MobileSideBar";
import ShowButton from "./components/ShowButton";
import {motion} from "framer-motion";

const App = ()  =>{
    const [show, setShow] = useState(false)
    const [width, setWindowWidth] = useState(0);

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
        <GlobalStyle />
        { responsive.showTopNavMenu ?
                <>
                    <NavBar />
                    <Sidebar />
                </> :
           <>
               <ShowButton show={show} setShow={setShow} />
               { show && <MobileSideBar as={motion.aside}/>}
           </>
        }
      <Routes>
        <Route path="/" element={<Paywall />} />
        <Route path="welcome" element={<Home />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="promotions" element={<Promotions />} />
        <Route path="special-order" element={<SpecialOrder />} />
        <Route path="order-history" element={<OrderHistory />} />


      </Routes>
    </>
  );
}



export default App;


