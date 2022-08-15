import styled from "styled-components";

const ShowButton = ({setShow}) => {

    const toggleSideBar = () => {
        setTimeout(()=> {
            setShow(prevShow => !prevShow)
        }, 600)
    }

    return (
        <>
            <Button onClick={toggleSideBar}>Show SideBar</Button>
        </>
    )
}

const Button = styled.button`
  background-color: darkblue;
  color: white;
  border: none;
  padding: 8px;
  position: relative;
  z-index: 3;
  cursor: pointer;
  box-shadow: 1px 1px 1px coral;
  border-radius: 4px;
  top: 30px;
  left: 20px;
`

export default ShowButton