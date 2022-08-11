import styled from "styled-components";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const MobileSideBar = ( ) => {

    const initialStyles = {
        x: -400
    }

    const animatedStyles = {
        x: 0
    }

    const transition = {
        delay: 0.05,
        duration: 1.35
    }

    return (
        <>
            <StyledBar as={motion.aside} initial={initialStyles} animate={animatedStyles} transition={transition} >
                <div className="spacing" style={{height: "25%"}}></div>
                <Slink as={motion.a}   to="order-history">Order History</Slink>
                <Slink as={motion.a}  to="promotions">Promotions</Slink>
                <Slink as={motion.a}  to="special-order">Special Order</Slink>
                <Slink as={motion.a}  to="favorites">Favorites</Slink>
                <Slink as={motion.a}  to="/">Log Out</Slink>
            </StyledBar>
        </>
    )

}

const StyledBar = styled.aside`
  position: absolute;
  left: 0;
  top: 0;
  height: 80vh;
  width: 25vw;
  margin-top: 6vh;
  background-color: blueviolet;
  color: white;
  z-index: 15;
  display: flex;
  flex-flow: column nowrap;
`

const Slink = styled(Link)`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  align-items: center;
  text-align: center;
  text-decoration: none;
  color: white;

`

export default MobileSideBar