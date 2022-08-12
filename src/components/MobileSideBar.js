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
        type: "spring",
        duration: 0.35,
        stiffness: 100
    }
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
                <StyledBar key="sidebar" as={motion.aside} initial={initialStyles} animate={animatedStyles}
                           transition={transition} exit={ {width: 0, transition: transition2} }>
                    <div className="spacing" style={{height: "25%"}}></div>
                    <Slink as={motion(Link)} initial={initialLink} animate={animateLink} transition={transitionLink} to="order-history">Order History</Slink>
                    <Slink as={motion(Link)} initial={initialLink} animate={animateLink} transition={transitionLink} to="promotions">Promotions</Slink>
                    <Slink as={motion(Link)} initial={initialLink} animate={animateLink} transition={transitionLink} to="special-order">Special Order</Slink>
                    <Slink as={motion(Link)} initial={initialLink} animate={animateLink} transition={transitionLink} to="favorites">Favorites</Slink>
                    <Slink as={motion(Link)} initial={initialLink} animate={animateLink} transition={transitionLink} to="/">Log Out</Slink>
                </StyledBar>
        </>)
}

const StyledBar = styled.aside`
  position: absolute;
  left: 0;
  top: 0;
  height: 80vh;
  width: 25vw;
  opacity: 0.40;
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
  font-size: 0.5em;
  align-items: center;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  color: white;

`

export default MobileSideBar