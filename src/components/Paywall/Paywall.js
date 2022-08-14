import styled from "styled-components";
import { motion} from "framer-motion";


const Paywall = () => {
    const initial = {
        x: 400,
        opacity: 0.05
    }

    const initial2 = {
        x: -400,
        opacity: 0.05
    }

    const inView = {
        x: 0,
        opacity: 1

    }

    const transition = {
        delay: 0.6,
        duration: 1.4
    }
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
                <TopSectionLeft  as={motion.section} initial={initial} whileInView={inView} transition={transition} viewPort={{once: false, amount: 0.6}}></TopSectionLeft>
                <TopSectionRight as={motion.section} initial={initial2} whileInView={inView} transition={transition}  viewPort={{once: false, amount: 0.6}}></TopSectionRight>
            </TopSection>
            <MidSection >
                <MidSectionLeft as={motion.section} initial={initial} whileInView={inView} transition={transition} viewPort={{once: false, amount: 0.6}}></MidSectionLeft>
                <MidSectionRight as={motion.section} initial={initial2} whileInView={inView} transition={transition} viewPort={{once: false, amount: 0.6}}></MidSectionRight>
            </MidSection>
            <BottomSection>
                <BottomSectionLeft as={motion.section} initial={initial} whileInView={inView} transition={transition} viewPort={{once: false, amount: 0.6}}></BottomSectionLeft>
                <BottomSectionRight as={motion.section}initial={initial2} whileInView={inView} transition={transition} viewPort={{once: false, amount: 0.6}} ></BottomSectionRight>
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
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10vh;
  display: flex;
  z-index: 50;
  //justify-content: center;
  align-items: center;
  background-color: #454372;
`

const Auth = styled.div`
  width: 40vw;
  flex: 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  //border: 1px solid red;
  height: 100%;
  & button {
    height: 60px;
    border: none;
    color: white;
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
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: blue;
  border: 1px saddlebrown dot-dash;
  padding: 10vh 5vw;
`
const MidSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #48ff00;
  border: 1px #ffb200 dot-dash;
  padding: 10vh 10vw;


`
const BottomSection = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #9e4444;
  display: flex;
  align-items: center;
  border: 1px saddlebrown dot-dash;
  padding: 10vh 10vw;
`

const TopSectionLeft = styled.div`
  border: 4px solid white;
  width: 40vw;
  height: 70vh;
  border-radius: 15px;
  margin-right: 5vw;

`
const TopSectionRight = styled.section`
  border: 4px solid white;
  width: 40vw;
  height: 70vh;
  border-radius: 15px;
  margin-left: 5vw;

`
const MidSectionLeft = styled.section` 
  border: 1px solid cornflowerblue;
  width: 40vw;
  height: 40vh;
  border-radius: 15px;
  margin-right: 5vw;


`
const MidSectionRight = styled.section`
  border: 1px solid cornflowerblue;
  width: 40vw;
  height: 40vh;
  border-radius: 15px;
  margin-left: 5vw;


`
const BottomSectionLeft = styled.section`
  border: 1px solid cornflowerblue;
  width: 40vw;
  height: 40vh;
  border-radius: 15px;
  margin-right: 5vw;


`
const BottomSectionRight = styled.section` 
  border: 1px solid cornflowerblue;
  width: 40vw;
  height: 40vh;
  border-radius: 15px;
  margin-left: 5vw;

`
export default Paywall