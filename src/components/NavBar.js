import styled from "styled-components";
import Bag from "../assets/Bagg.svg"
import {Link} from "react-router-dom";
import {motion} from "framer-motion";


const NavBar = () => {
    const transition2 = {
        delay: 0,
        type: "tween",
        duration: 0.65,
    }

    const initialLink = {
        y: -100
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
            <NavStyles>

                <SLink to="welcome" as={motion(Link)} initial={initialLink} animate={animateLink} transition={transitionLink} exit={{fontSize: 0, transition: transition2}}>
                    <Logo>Byte</Logo>
                </SLink>
                <Img src={Bag} alt="shopping bag"/>
            </NavStyles>
        </>
    )
}

const NavStyles = styled.nav`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: blueviolet;
  border-bottom: 3px solid white;
  z-index: 12;
  color: white;
  
`



const Img = styled.img`
  height: 60px;
  width: 60px;
  margin-right: 10vw;
`

const Logo = styled.div`
margin-left: 10vw;
`
const SLink = styled(Link)`
  cursor: pointer;
  color: white;
  text-decoration: none;
`

export default NavBar