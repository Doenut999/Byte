import OrderHistory from "../assets/side-icons/OrderHistory.svg";
import Promo from "../assets/side-icons/promo.svg";
import SpecialOrder from "../assets/side-icons/SpecialOrder.svg";
import Favs from "../assets/side-icons/Favs.svg";
import LogOut from "../assets/side-icons/LogOut.svg";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const Sidebar = (props) => {

    const transition2 = {
        delay: 0,
        type: "tween",
        duration: 0.65,
    }

    const initialLink = {
        y: "100vh"
    }

    const animateLink = {
        y: 0
    }
    const transitionLink = {
        type: "spring",
        delay: 0.2,
        duration: 2500,
        stiffness: 100
    }

    return (
        <>
            <Side>
                <Div>
                </Div>
                <SLink as={motion(Link)} initial={initialLink} animate={animateLink} transition={transitionLink} exit={{fontSize: 0, transition: transition2}} to="order-history">
                    <Div className="order-history">
                        <SideImg>
                            <SideBarImg src={OrderHistory} alt="yay" title="order-history"/>
                        </SideImg>
                        <>
                            <SideText>Order History</SideText>
                        </>
                    </Div>
                </SLink>
                <SLink as={motion(Link)} initial={initialLink} animate={animateLink} transition={{...transitionLink, delay: 0.3}} exit={{fontSize: 0, transition: transition2}} to="promotions">
                    <Div className="promotions-n-deals">
                        <SideImg>
                            <SideBarImg src={Promo} alt="yay"  title="deals and promo"/>
                        </SideImg>
                        <><SideText>Deals & Promos</SideText></>
                    </Div>
                </SLink>
                <SLink as={motion(Link)} initial={initialLink} animate={animateLink} transition={{...transitionLink, delay: 0.5}} exit={{fontSize: 0, transition: transition2}} to="special-order">
                    <Div className="special-order">
                        <SideImg>
                            <SideBarImg src={SpecialOrder} alt="yay"  title="special-order"/>
                        </SideImg>
                        <><SideText>Special Order</SideText></>
                    </Div>
                </SLink>
                <SLink as={motion(Link)} initial={initialLink} animate={animateLink} transition={{...transitionLink, delay: 0.5}} exit={{fontSize: 0, transition: transition2}} to="favorites">
                    <Div className="favorites">
                        <SideImg>
                            <SideBarImg src={Favs} alt="baba" title="favorites"/>
                        </SideImg>
                        <><SideText>Favorites</SideText></>
                    </Div>
                </SLink>
                <SLink as={motion(Link)} initial={initialLink} animate={animateLink} transition={{...transitionLink, delay: 0.6}} exit={{fontSize: 0, transition: transition2}} to="/">
                    <Div className="log-out">
                        <SideImg>
                            <SideBarImg src={LogOut} alt="bobo" title="log-out"/>
                        </SideImg>
                        <><SideText>Log Out</SideText></>
                    </Div>
                </SLink>
            </Side>
        </>
    )
}


const Div = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  //justify-content: center;
  //align-items: center;
  padding: 1vh 1vw;
  flex-flow: row nowrap;

`

const Side = styled.aside`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 11;
  height: 90vh;
  width: 20vw;
  min-width: 80px;
  //background-color: blueviolet;
  background-color: #556b3e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`


const SideImg = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  &:hover {
    transform: scale(1.2);
  }
  transition: transform 1s ease;
  
`


const SideBarImg = styled.img`
  width: 5vh;
  height: 5vh;
  margin-left: 30px;
`

const SideText = styled.span`
  color: white;
  font-size: 1vw;
  margin-top: 10%;
`

const SLink = styled(Link)`
  height: 15%;
  width: 100%;
  
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:active {
    text-decoration: white underline;
  }
`

export default Sidebar

