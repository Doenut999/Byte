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
                    <span>Order History</span>
                </Div>
                <Div className="promotions-n-deals">
                    <SideBarImg src={Promo} alt="yay"  title="deals and promo"/>
                    <span>Deals & Promos</span>
                </Div>
                <Div className="special-order">
                    <SideBarImg src={SpecialOrder} alt="yay"  title="special-order"/>
                    <span>Special Order</span>
                </Div>
                <Div className="favorites">
                    <SideBarImg src={Favs} alt="baba" title="favorites"/>
                    <span>Favorites</span>
                </Div>
                <Div className="log-out">
                    <SideBarImg src={LogOut} alt="bobo" title="log-out"/>
                    <span>Log Out</span>
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

export default Sidebar