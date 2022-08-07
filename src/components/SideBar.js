import OrderHistory from "../assets/OrderHistory.svg";
import Promo from "../assets/promo.svg";
import SpecialOrder from "../assets/SpecialOrder.svg";
import Favs from "../assets/Favs.svg";
import LogOut from "../assets/LogOut.svg";
import styled from "styled-components";

const Sidebar = () => {
    return (
        <>
            <Side>
                <Div className="order-history">
                    <SideBarImg src={OrderHistory} alt="yay" title="order-history"/>
                    <SideText>Order History</SideText>
                </Div>
                <Div className="promotions-n-deals">
                    <SideBarImg src={Promo} alt="yay"  title="deals and promo"/>
                    <SideText>Deals & Promos</SideText>
                </Div>
                <Div className="special-order">
                    <SideBarImg src={SpecialOrder} alt="yay"  title="special-order"/>
                    <SideText>Special Order</SideText>
                </Div>
                <Div className="favorites">
                    <SideBarImg src={Favs} alt="baba" title="favorites"/>
                    <SideText>Favorites</SideText>
                </Div>
                <Div className="log-out">
                    <SideBarImg src={LogOut} alt="bobo" title="log-out"/>
                    <SideText>Log Out</SideText>
                </Div>
            </Side>
        </>
    )
}

const Div = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  border-bottom: 1px solid darkblue;
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

export default Sidebar