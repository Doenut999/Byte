import OrderHistory from "../assets/OrderHistory.svg";
import Promo from "../assets/promo.svg";
import SpecialOrder from "../assets/SpecialOrder.svg";
import Favs from "../assets/Favs.svg";
import LogOut from "../assets/LogOut.svg";
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
                        <SideBarImg src={OrderHistory} alt="yay" title="order-history"/>
                        <SideText>Order History</SideText>
                    </Div>
                </SLink>
                <SLink to="promotions">
                    <Div className="promotions-n-deals">
                        <SideBarImg src={Promo} alt="yay"  title="deals and promo"/>
                        <SideText>Deals & Promos</SideText>
                    </Div>
                </SLink>
                <SLink to="special-order">
                    <Div className="special-order">
                        <SideBarImg src={SpecialOrder} alt="yay"  title="special-order"/>
                        <SideText>Special Order</SideText>
                    </Div>
                </SLink>
                <SLink to="favorites">
                    <Div className="favorites">
                        <SideBarImg src={Favs} alt="baba" title="favorites"/>
                        <SideText>Favorites</SideText>
                    </Div>
                </SLink>
                <SLink to="/">
                    <Div className="log-out">
                        <SideBarImg src={LogOut} alt="bobo" title="log-out"/>
                        <SideText>Log Out</SideText>
                    </Div>
                </SLink>
            </Side>
        </>
    )
}

const Div = styled.div`
  width: 100%;
  height: 16%;
  display: flex;
  //border-bottom: 1px solid darkblue;
  //justify-content: space-between;
  align-items: center;
  //border: 1px solid cadetblue;
`
const Side = styled.aside`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: -2;
  height: 90vh;
  width: 20vw;
  min-width: 80px;
  background-color: blueviolet;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`


const SideBarImg = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 30px;
`

const SideText = styled.span`
  color: white;
`

const SLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:active {
    text-decoration: white underline;
  }
`

export default Sidebar