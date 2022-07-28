import styled from "styled-components";
const HomePage = () => {
    return (
    <>
        <Sextion style={{backgroundColor: "#25283D"}} className="first">First Section</Sextion>
        <Sextion style={{backgroundColor: "#750D37"}} className="first">Second Section</Sextion>
        <Sextion style={{backgroundColor: "#B3DEC1"}} className="first">Third Section</Sextion>
        <Sextion style={{backgroundColor: "#DBF9F0"}} className="first">Fourth Section</Sextion>
    </>
    )
}

const Sextion = styled.section`
  height: 100vh;
  width: 100%;
`
export default HomePage