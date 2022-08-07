import styled from "styled-components";
import {useParams} from "react-router-dom";

const Body = (props) => {
    useParams()

    return (
        <BodyStyles>
            <HoriRule/>
            {props.children}
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