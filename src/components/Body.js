import styled from "styled-components";
import SearchAll from "./SearchAll";

const Body = () => {

    return (
        <BodyStyles>
            <HoriRule/>
            <SearchAll />
        </BodyStyles>
    )
}
const BodyStyles = styled.div`
  position: relative;
  width: 80vw;
  height: 100vh;
  float: right;
  background-color: #1b1b1b;
  border: 3px solid red;
  
`


const HoriRule = styled.hr`
  color: transparent;
  margin-top: 10vh;
`
export default Body