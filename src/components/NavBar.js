import styled from "styled-components";
import Bag from "../assets/Bagg.svg"


const NavBar = () => {
    return (
        <>
            <NavStyles>

                <Logo>
                    Byte
                </Logo>
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
  z-index: 2;
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

export default NavBar