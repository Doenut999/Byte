import OrderHistory from "../assets/side-icons/OrderHistory.svg";
import Promo from "../assets/side-icons/promo.svg";
import SpecialOrder from "../assets/side-icons/SpecialOrder.svg";
import Favs from "../assets/side-icons/Favs.svg";
import LogOut from "../assets/side-icons/LogOut.svg";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Sidebar = () => {

    return (
        <>
            <Side>
                <Div>
                </Div>
                <SLink to="order-history">
                    <Div className="order-history">
                        <SideImg>
                            <SideBarImg src={OrderHistory} alt="yay" title="order-history"/>
                        </SideImg>
                        <>
                            <SideText>Order History</SideText>
                        </>
                    </Div>
                </SLink>
                <SLink to="promotions">
                    <Div className="promotions-n-deals">
                        <SideImg>
                            <SideBarImg src={Promo} alt="yay"  title="deals and promo"/>
                        </SideImg>
                        <><SideText>Deals & Promos</SideText></>
                    </Div>
                </SLink>
                <SLink to="special-order">
                    <Div className="special-order">
                        <SideImg>
                            <SideBarImg src={SpecialOrder} alt="yay"  title="special-order"/>
                        </SideImg>
                        <><SideText>Special Order</SideText></>
                    </Div>
                </SLink>
                <SLink to="favorites">
                    <Div className="favorites">
                        <SideImg>
                            <SideBarImg src={Favs} alt="baba" title="favorites"/>
                        </SideImg>
                        <><SideText>Favorites</SideText></>
                    </Div>
                </SLink>
                <SLink to="/">
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
  z-index: 1;
  height: 90vh;
  width: 20vw;
  min-width: 80px;
  background-color: blueviolet;
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

