import styled from "styled-components";
import {Link} from "react-router-dom";
import Menu from "./Menu";

const HomePage = () => {

    return (
    <SectionWrapper>
        <Section style={{backgroundColor: "#fff", marginTop: "8.33vh"}} className="first">
            <SubSectionA1>First Section</SubSectionA1>
            <SubSectionA2 style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
               <Mix>
                   <Input placeholder="enter your email" type="email"/>
                </Mix>
                <Link to="menu" element={<Menu />}>Create Account</Link>
            </SubSectionA2>
        </Section>
        <Section  className="first">
            <SubSectionB1>First Section</SubSectionB1>
            <SubSectionB2>First Section II</SubSectionB2>
        </Section>
        <Section  className="first">
            <SubSectionC1>First Section</SubSectionC1>
            <SubSectionC2>First Section II</SubSectionC2>
        </Section>
        <Section className="first">
            <SubSectionD1>First Section</SubSectionD1>
            <SubSectionD2>First Section II</SubSectionD2>
        </Section>
    </SectionWrapper>
    )

}

const Section = styled.section`
  height: 100vh;
  display: flex;
  width: 90vw;
  min-width: 200px;
  border: 1px solid crimson;
  @media (max-width: 700px){
    flex-direction: column;
  }
`

const SubSection = styled.section`
  width: 50vw;
  height: 100%;
  padding: 3vw;
  min-width: 200px;
  border: 1px solid crimson;
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

const SectionWrapper = styled.div`
  width: 90vw;
  float: right;
`

const Mix = styled.div`
  border-bottom: 1px solid purple;
  &:hover {
    border-bottom: 3px solid purple;
  }
`

const SubSectionA1 = styled(SubSection)`
  @media (max-width: 700px) {
    flex: 1;
    width: 100%;
  } 
`
const SubSectionA2 = styled(SubSection)`
  display: flex;
  flex-direction: column;
  @media (max-width: 700px) {
    flex: 1;
    width: 100%;
  }
`
const SubSectionB1 = styled(SubSection)`
`

const SubSectionB2 = styled(SubSection)`
    
`
const SubSectionC1 = styled(SubSection)`
`

const SubSectionC2 = styled(SubSection)`
 `

const SubSectionD1 = styled(SubSection)`
`
const SubSectionD2 = styled(SubSection)`
  
`


export default HomePage