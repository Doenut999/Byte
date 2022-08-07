import styled from "styled-components";
import f from "../assets/f-name.png"
const NavBar = () => {
    return (
        <Nav>
            <LogoDiv>
                <h3>Byte</h3>
            </LogoDiv>
            <LogoDiv2>
                <img src={f} alt="account-first-name-letter"/>
            </LogoDiv2>
        </Nav>
    )
}

const Nav = styled.nav`
  z-index: 50;
  height: 8.33vh;
  width: 100%;
  position: fixed;
  top: 0;
  color: white;
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #4B3F72;
  left: 0;
  border-bottom: 0.5px solid white;
`

const LogoDiv = styled.div`
  margin-left: 10vw;
`

const LogoDiv2 = styled.div`
  margin-right: 10vw;
  height: 100%;
  display: flex;
  align-items: center;
  & img {
    width: 40px;
    height: 40px;
  }
`


export default NavBar