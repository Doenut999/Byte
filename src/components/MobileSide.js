import styled from "styled-components"
import CloseBurger from "../assets/burger/CloseBurger.svg"
// import ThreeBurger from "../assets/burger/ThreeBurger.svg"
// import {useState} from "react";

const MobileSide = (props) => {



    return (
        <>
            <MDiv>
                <Burger>
                    <Img src={CloseBurger} alt="hamburger-menu-open-close"/>
                </Burger>
            </MDiv>
        </>
    )
}

const Burger = styled.div`
  border: 2px solid white;
  border-radius: 50%;
  padding: 5px;
  position: absolute;
  top: 3vh;
  left: 3vw;
  z-index: 5;
`
const Img = styled.img`
  width: 50px;
  height: 50px;
`
const MDiv = styled.div`
  height: 100vh;
  width: 20vw;
  background-color: #1b1b1b;
  position: absolute;
  left: 0;
  top: 0;
`

export default MobileSide