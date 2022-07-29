import styled from "styled-components";
import NavBar from "../components/NavBar";
import {Link} from "react-router-dom";
import Menu from "./Menu";

const HomePage = () => {

    return (
    <>
        <NavBar />
        <Section style={{backgroundColor: "#fff", marginTop: "8.33vh"}} className="first">
            <SubSectionA1>First Section</SubSectionA1>
            <SubSectionA2 style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
               <Mix>
                   <Input placeholder="enter your email" type="email"/>
                </Mix>
                <Link to="menu" element={<Menu />}>Create Account</Link>
            </SubSectionA2>
        </Section>
        <Section style={{backgroundColor: "#4B3F72"}} className="first">
            <SubSectionB1>First Section</SubSectionB1>
            <SubSectionB2>First Section II</SubSectionB2>
        </Section>
        <Section style={{backgroundColor: "#fff"}} className="first">
            <SubSectionC1>First Section</SubSectionC1>
            <SubSectionC2>First Section II</SubSectionC2>
        </Section>
        <Section style={{backgroundColor: "#4B3F72"}} className="first">
            <SubSectionD1>First Section</SubSectionD1>
            <SubSectionD2>First Section II</SubSectionD2>
        </Section>
    </>
    )
}

const Section = styled.section`
  height: 100vh;
  display: flex;
  width: 100%;
  @media (max-width: 700px){
    flex-direction: column;
  }
`

const SubSection = styled.section`
  width: 50vw;
  height: 100%;
  @media (max-width: 700px) {
    flex: 1;
    width: 100%;
  }
`


const Input = styled.input`
    max-width: 400px;
    min-width: 300px;
    width: 22vw;
    font-size: 0.7rem;
    outline:0  transparent;
    display: inline-block;
    border: 0 transparent;
`
const Mix = styled.div`
  border-bottom: 1px solid purple;
  &:hover {
    border-bottom: 3px solid purple;
  }
`

const SubSectionA1 = styled(SubSection)`
  background-color: #0065fc;
  @media (max-width: 700px) {
    flex: 1;
    width: 100%;
  }
`
const SubSectionA2 = styled(SubSection)`
  display: flex;
  flex-direction: column;
  background-color: red;
  @media (max-width: 700px) {
    flex: 1;
    width: 100%;
  }
`
const SubSectionB1 = styled(SubSection)`
  background-color: lawngreen;
`
const SubSectionB2 = styled(SubSection)`
    
`
const SubSectionC1 = styled(SubSection)`
  background-color: #fc0000;
`

const SubSectionC2 = styled(SubSection)`
  background-color: #b500fc;
`

const SubSectionD1 = styled(SubSection)`
  background-color: lawngreen;
`
const SubSectionD2 = styled(SubSection)`
  
`


export default HomePage