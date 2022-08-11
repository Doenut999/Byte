import styled from "styled-components";

const MobileSideBar = () => {

    return (
        <>
            <StyledBar>
                What's up my dears
            </StyledBar>
        </>
    )
}

const StyledBar = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  width: 25vw;
  height: 40vh;
  background-color: cornflowerblue;
  color: white;
  padding: 1vh;
  z-index: 5;
  border: 5px solid #ff0000;
  border-radius: 1.5vw;
  margin: 10vh 5vw;
`


export default MobileSideBar