import styled from "styled-components";
import NavBar from "../components/NavBar";
const HomePage = () => {

    return (
    <>
        <NavBar />
        <Section style={{backgroundColor: "#fff", marginTop: "8.33vh"}} className="first">
            <SubSectionA1>First Section</SubSectionA1>
            <Here/>
            <SubSectionA2 style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
               <Mix>
                   <Input placeholder="enter your email" type="email"/>
                </Mix>
            </SubSectionA2>
        </Section>
        <Section style={{backgroundColor: "#4B3F72"}} className="first">
            <SubSectionB1>First Section</SubSectionB1>
            <Here/>
            <SubSectionB2>First Section II</SubSectionB2>
        </Section>
        <Section style={{backgroundColor: "#fff"}} className="first">
            <SubSectionC1>First Section</SubSectionC1>
            <Here/>
            <SubSectionC2>First Section II</SubSectionC2>
        </Section>
        <Section style={{backgroundColor: "#4B3F72"}} className="first">
            <SubSectionD1>First Section</SubSectionD1>
            <Here/>
            <SubSectionD2>First Section II</SubSectionD2>
        </Section>
    </>
    )
}

const Section = styled.section`
  height: 100vh;
  display: flex;
  width: 100%;
`

const SubSection = styled.section`
  width: 50vw;
  height: 100%;
`

const Here = styled.hr`
    color: purple;
    height: 100%;
`

const Input = styled.input`
    width: calc (20vw + 8ch);
    outline:0  transparent;
    border: 0 transparent;
`
const Mix = styled.div`
  border-bottom: 1px solid purple;
  &:hover {
    border-bottom: 3px solid purple;
  }
`

const SubSectionA1 = styled(SubSection)``
const SubSectionA2 = styled(SubSection)``
const SubSectionB1 = styled(SubSection)``
const SubSectionB2 = styled(SubSection)``
const SubSectionC1 = styled(SubSection)``
const SubSectionC2 = styled(SubSection)``
const SubSectionD1 = styled(SubSection)``
const SubSectionD2 = styled(SubSection)``
export default HomePage