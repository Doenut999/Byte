import styled from "styled-components";
import {useState} from "react";

const HamburgerMenu = () => {
        const [click, setClick] = useState(false)
    return (
        <Burger>
            <svg className={click ? "ham hamRotate ham1 active": "ham hamRotate ham1"}  viewBox="0 0 100 100" width="80" onClick={()=> setClick(prevState => !prevState)}>
                <path
                    className="line top"
                    d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"/>
                <path
                    className="line middle"
                    d="m 30,50 h 40"/>
                <path
                    className="line bottom"
                    d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"/>
            </svg>
        </Burger>
    )
}

const Burger = styled.div`
  body {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    margin: 0;
    overflow: hidden;
    position: absolute;
    width: 100%;
  }
  .ham {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .hamRotate.active {
    transform: rotate(45deg);
  }
  .hamRotate180.active {
    transform: rotate(180deg);
  }
  .line {
    fill:none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke:#fff;
    stroke-width:5.5;
    stroke-linecap:round;
  }
  .ham1 .top {
    stroke-dasharray: 40 139;
  }
  .ham1 .bottom {
    stroke-dasharray: 40 180;
  }
  .ham1.active .top {
    stroke-dashoffset: -98px;
  }
  .ham1.active .bottom {
    stroke-dashoffset: -138px;
  }
  .ham2 .top {
    stroke-dasharray: 40 121;
  }
  .ham2 .bottom {
    stroke-dasharray: 40 121;
  }
  .ham2.active .top {
    stroke-dashoffset: -102px;
  }
  .ham2.active .bottom {
    stroke-dashoffset: -102px;
  }
  .ham3 .top {
    stroke-dasharray: 40 130;
  }
  .ham3 .middle {
    stroke-dasharray: 40 140;
  }
  .ham3 .bottom {
    stroke-dasharray: 40 205;
  }
  .ham3.active .top {
    stroke-dasharray: 75 130;
    stroke-dashoffset: -63px;
  }
  .ham3.active .middle {
    stroke-dashoffset: -102px;
  }
  .ham3.active .bottom {
    stroke-dasharray: 110 205;
    stroke-dashoffset: -86px;
  }
  .ham4 .top {
    stroke-dasharray: 40 121;
  }
  .ham4 .bottom {
    stroke-dasharray: 40 121;
  }
  .ham4.active .top {
    stroke-dashoffset: -68px;
  }
  .ham4.active .bottom {
    stroke-dashoffset: -68px;
  }
  .ham5 .top {
    stroke-dasharray: 40 82;
  }
  .ham5 .bottom {
    stroke-dasharray: 40 82;
  }
  .ham5.active .top {
    stroke-dasharray: 14 82;
    stroke-dashoffset: -72px;
  }
  .ham5.active .bottom {
    stroke-dasharray: 14 82;
    stroke-dashoffset: -72px;
  }
  .ham6 .top {
    stroke-dasharray: 40 172;
  }
  .ham6 .middle {
    stroke-dasharray: 40 111;
  }
  .ham6 .bottom {
    stroke-dasharray: 40 172;
  }
  .ham6.active .top {
    stroke-dashoffset: -132px;
  }
  .ham6.active .middle {
    stroke-dashoffset: -71px;
  }
  .ham6.active .bottom {
    stroke-dashoffset: -132px;
  }
  .ham7 .top {
    stroke-dasharray: 40 82;
  }
  .ham7 .middle {
    stroke-dasharray: 40 111;
  }
  .ham7 .bottom {
    stroke-dasharray: 40 161;
  }
  .ham7.active .top {
    stroke-dasharray: 17 82;
    stroke-dashoffset: -62px;
  }
  .ham7.active .middle {
    stroke-dashoffset: 23px;
  }
  .ham7.active .bottom {
    stroke-dashoffset: -83px;
  }
  .ham8 .top {
    stroke-dasharray: 40 160;
  }
  .ham8 .middle {
    stroke-dasharray: 40 142;
    transform-origin: 50%;
    transition: transform 400ms;
  }
  .ham8 .bottom {
    stroke-dasharray: 40 85;
    transform-origin: 50%;
    transition: transform 400ms, stroke-dashoffset 400ms;
  }
  .ham8.active .top {
    stroke-dashoffset: -64px;
  }
  .ham8.active .middle {
    //stroke-dashoffset: -20px;
    transform: rotate(90deg);
  }
  .ham8.active .bottom {
    stroke-dashoffset: -64px;
  }

`

export default HamburgerMenu