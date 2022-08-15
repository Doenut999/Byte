import styled from "styled-components";
import { motion} from "framer-motion";


const Paywall = () => {
    const initial = {
        opacity: 0,
        x: "50vw"
    }

    const initial2 = {
        x: "-50vw",
        opacity: 0
    }

    const inView = {
        x: 0,
        opacity: 1

    }

    const transition = {
        delay: 0.4,
        duration: 1.4,
        type: "spring",
        stiffness: 40
    }

    const transition2 = {
        delay: 0.6,
        duration: 1.4,
        type: "spring",
        stiffness: 40
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
                <TopSectionLeft  as={motion.section} initial={initial} whileInView={inView} transition={transition} viewport={{once: false, amount: 0.45}}></TopSectionLeft>
                <TopSectionRight as={motion.section} initial={initial2} whileInView={inView} transition={transition2}  viewport={{once: false, amount: 0.45}}></TopSectionRight>
            </TopSection>
            <MidSection >
                <MidSectionLeft as={motion.section} initial={initial} whileInView={inView} transition={transition} viewport={{once: false, amount: 0.45}}></MidSectionLeft>
                <MidSectionRight as={motion.section} initial={initial2} whileInView={inView} transition={transition2} viewport={{once: false, amount: 0.45}}></MidSectionRight>
            </MidSection>
            <BottomSection>
                <BottomSectionLeft as={motion.section} initial={initial} whileInView={inView} transition={transition} viewport={{once: false, amount: 0.45}}></BottomSectionLeft>
                <BottomSectionRight as={motion.section} initial={initial2} whileInView={inView} transition={transition2} viewport={{once: false, amount: 0.45}} ></BottomSectionRight>
            </BottomSection>
        </PaywallView>
    )
}



const Logo = styled.div`
margin-left: 10vw;
  flex: 3;
`

const PaywallView = styled.div`
  z-index: 22;
  overflow-x: hidden;
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
  padding: 10vh 5vw;
  @media  (max-width: 1024px) {
    justify-content: space-evenly;
    flex-direction: column;
    padding: 0;
  }
`
const MidSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #82d068;
  padding: 10vh 10vw;
  @media  (max-width: 1024px) {
    justify-content: space-evenly;
    flex-direction: column;
    padding: 0;
  }

`
const BottomSection = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #e18200;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  padding: 10vh 10vw;
  @media (max-width: 1024px) {
    justify-content: space-evenly;
    flex-direction: column;
    padding: 6vh 0 0 0;
  }
`

const TopSectionLeft = styled.div`
  border: 4px solid white;
  width: 40vw;
  height: 70vh;
  border-radius: 15px;
  margin-right: 5vw;
  margin-top: 80px;
  @media  (max-width: 1024px) {
    margin: 0;
    width: 70vw;
    height: 40vh;
  }
`
const TopSectionRight = styled.section`
  border: 4px solid white;
  width: 40vw;
  height: 70vh;
  border-radius: 15px;
  margin-left: 5vw;
  margin-bottom: 80px;
  @media  (max-width: 1024px) {

    margin: 0;
    width: 70vw;
    height: 40vh;
  }
`
const MidSectionLeft = styled.section`
  border: 4px solid white;
  width: 40vw;
  height: 70vh;
  border-radius: 15px;
  margin-right: 5vw;
  margin-top: 80px;

  @media  (max-width: 1024px) {

    margin: 0;
    width: 70vw;
    height: 40vh;
  }

`
const MidSectionRight = styled.section`
  border: 4px solid white;
  width: 40vw;
  height: 70vh;
  border-radius: 15px;
  margin-left: 5vw;
  margin-bottom: 80px;

  @media  (max-width: 1024px) {

    margin: 0;
    width: 70vw;
    height: 40vh;
  }

`
const BottomSectionLeft = styled.section`
  border: 4px solid white;
  width: 40vw;
  height: 70vh;
  border-radius: 15px;
  margin-right: 5vw;
  margin-top: 80px;

  @media  (max-width: 1024px) {

    margin: 0;
    width: 70vw;
    height: 40vh;
  }

`
const BottomSectionRight = styled.section`
  border: 4px solid white;
  width: 40vw;
  height: 70vh;
  border-radius: 15px;
  margin-left: 5vw;
  margin-bottom: 180px;

  @media  (max-width: 1024px) {
    margin: 0;
    width: 70vw;
    height: 40vh;
  }
`
export default Paywall