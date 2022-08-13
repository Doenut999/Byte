import styled from "styled-components";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const MobileSideBar = () => {

    const initialStyles = {
        width: 0,
    }

    const animatedStyles = {
        width: "25vw",
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
        y: "100vh",
        opacity:0

    }

    const animateLink = {
        y: 0,
        opacity: 1
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
                    <Slink onClick={()=> {}} as={motion(Link)} initial={initialLink} animate={animateLink} transition={{...transitionLink, delay: 0.3}} exit={{fontSize: 0, }} to="order-history">Order History</Slink>
                    <Slink as={motion(Link)} initial={initialLink} animate={animateLink} transition={{...transitionLink, delay: 0.5}} exit={{fontSize: 0}} to="promotions">Promotions</Slink>
                    <Slink as={motion(Link)} initial={initialLink} animate={animateLink} transition={{...transitionLink, delay: 0.5}} exit={{fontSize: 0}} to="special-order">Special Order</Slink>
                    <Slink as={motion(Link)} initial={initialLink} animate={animateLink} transition={{...transitionLink, delay: 0.6}} exit={{fontSize: 0}} to="favorites">Favorites</Slink>
                    <Slink as={motion(Link)} initial={initialLink} animate={animateLink} transition={{...transitionLink, delay: 0.7}} exit={{fontSize: 0}} to="/">Log Out</Slink>
                </StyledBar>
        </>)
}

const StyledBar = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 10vh;
  height: 80vh;
  width: 25vw;
  opacity: 0.40;
  background-color: blueviolet;
  color: white;
  z-index: 15;
  display: flex;
  flex-flow: column nowrap;
`

const Slink = styled(Link)`
  width: 100%;
  padding: 3px;
  height: 15%;
  display: flex;
  justify-content: center;
  font-size: 18px;
  align-items: center;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  color: white;
  @media (min-width: 600px) {
    font-size: 20px;
  }
  @media (max-width: 400px) {
    font-size: 13px;
  }

`

export default MobileSideBar