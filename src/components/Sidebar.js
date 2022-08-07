import styled from "styled-components";
import OrderHistory from "../assets/OrderHistory.svg"
import LogOut from "../assets/LogOut.svg"
import Favs from "../assets/Favs.svg"
import Promo from "../assets/promo.svg"
import SpecialOrder from "../assets/SpecialOrder.svg"

const Sidebar = () => {
    return (
        <>
            <Side>
                <Div className="order-history">
                    <SideBarImg src={OrderHistory} alt="yay" width="60px" height="60px" title="order-history"/>
                </Div>
                <Div className="promotions-n-deals">
                    <SideBarImg src={Promo} alt="yay" width="60px" height="60px" title="deals and promo"/>
                </Div>
                <Div className="special-order">
                    <SideBarImg src={SpecialOrder} alt="yay" width="60px" height="60px" title="special-order"/>
                </Div>
                <Div className="favorites">
                    <SideBarImg src={Favs} alt="baba" width="60px" height="60px" title="favorites"/>
                </Div>
                <Div className="log-out">
                    <SideBarImg src={LogOut} alt="bobo" width="60px" height="60px" title="log-out"/>
                </Div>
            </Side>
        </>
    )
}

const Div = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  //border: 1px solid cadetblue;
`
const Side = styled.aside`
  position: fixed;
  left: 0;
  bottom: 0;
  height: 92vh;
  width: 10vw;
  border: 1px solid palegreen;
  color: darkseagreen;
  min-width: 80px;
  background-color: blueviolet;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`


const SideBarImg = styled.img`
  width: 100px;
  height: 100px;
`

export default Sidebar