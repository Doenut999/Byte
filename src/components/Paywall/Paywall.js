import styled from "styled-components";

const Paywall = () => {

    return (
        <PaywallView>
            <PaywallNav>
                <Logo>Byte</Logo>
                <Auth>
                    <button>Create A New Account</button>
                    <button>Log In</button>
                </Auth>
            </PaywallNav>
            <TopSection>
                <TopSectionLeft></TopSectionLeft>
                <TopSectionRight></TopSectionRight>
            </TopSection>
            <MidSection>
                <MidSectionLeft></MidSectionLeft>
                <MidSectionRight></MidSectionRight>
            </MidSection>
            <BottomSection>
                <BottomSectionLeft></BottomSectionLeft>
                <BottomSectionRight></BottomSectionRight>
            </BottomSection>
        </PaywallView>
    )
}



const Logo = styled.div`
margin-left: 10vw;
  flex: 3;
`

const PaywallView = styled.div`
  z-index: 19;
  position: relative;

  background-color: white;
  width: 100vw;
  height: 100vh;
`

const PaywallNav = styled.nav`
  color: crimson;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10vh;
  display: flex;
  //justify-content: center;
  align-items: center;
  background-color: ghostwhite;
`

const Auth = styled.div`
  width: 40vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  //border: 1px solid red;
  height: 100%;
  & button {
    height: 60px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    width: 8vw;
    font-size: 0.5rem;
    &:hover {
      border: 1px solid green;
    }
    transition: all 0.6s ease;
  }
`
const TopSection = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: blue;
  border: 1px saddlebrown dot-dash;
  padding: 10vh 10vw;
`
const MidSection = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #48ff00;
  border: 1px #ffb200 dot-dash;
  padding: 10vh 10vw;


`
const BottomSection = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #9e4444;
  border: 1px saddlebrown dot-dash;
  padding: 10vh 10vw;
`

const TopSectionLeft = styled.div``
const TopSectionRight = styled.section``
const MidSectionLeft = styled.section``
const MidSectionRight = styled.section``
const BottomSectionLeft = styled.section``
const BottomSectionRight = styled.section``
export default Paywall