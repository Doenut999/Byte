import styled from "styled-components";

const NavBar = () => {

    return (
        <>
            <NavStyles>
                <Logo>
                    Byte
                </Logo>
            </NavStyles>
        </>
    )
}

const NavStyles = styled.nav`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: purple;
  z-index: 22;
  color: white;
`

const Logo = styled.div`
margin-left: 10vw;
`

export default NavBar