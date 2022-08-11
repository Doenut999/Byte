import styled from "styled-components";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const MobileSideBar = () => {

    const initialStyles = {
        width: 0
    }

    const animatedStyles = {
        width: "25vw"
    }

    const transition = {
        delay: 0.05,
        type: "spring",
        duration: 0.35,
        stiffness: 100
    }
    const transition2 = {
        delay: 0,
        type: "tween",
        duration: 0.65,
    }
    return (
        <>
                <StyledBar key="sidebar" as={motion.aside} initial={initialStyles} animate={animatedStyles}
                           transition={transition} exit={ {width: 0, transition: transition2} }>
                    <div className="spacing" style={{height: "25%"}}></div>
                    <Slink as={motion.a} to="order-history">Order History</Slink>
                    <Slink as={motion.a} to="promotions">Promotions</Slink>
                    <Slink as={motion.a} to="special-order">Special Order</Slink>
                    <Slink as={motion.a} to="favorites">Favorites</Slink>
                    <Slink as={motion.a} to="/">Log Out</Slink>
                </StyledBar>
        </>)
}

const StyledBar = styled.aside`
  position: absolute;
  left: 0;
  top: 0;
  height: 80vh;
  width: 25vw;
  opacity: 0.4;
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