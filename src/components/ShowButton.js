import HamburgerMenu from "./HamburgerMenu";
import styled from "styled-components";
const ShowButton = ({setShow}) => {

    const toggleSideBar = () => {
        setTimeout(()=> {
            setShow(prevShow => !prevShow)
        }, 600)
    }

    return (
        <>
            {/*<HamburgerMenu onClick={()=>{console.log("Hamburger clicked")}} />*/}
            <Button onClick={toggleSideBar}><HamburgerMenu /></Button>
        </>
    )
}

const Button = styled.button`
  background-color: transparent;
  color: transparent;
  border: none;
  padding: 8px;
  position: relative;
  z-index: 13;
  cursor: pointer;
  border-radius: 4px;
  top: 30px;
  left: 20px;
`

export default ShowButton