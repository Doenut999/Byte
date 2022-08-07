import Search from "../assets/Search.svg";
import styled from "styled-components";


const SearchAll = () => {
    const SearchText = "Look up, food/drink, item or vendor/store"

    return (
        <>
            <SafeSearch>
                <SearchInput type="text" placeholder={SearchText}/>
                <SearchImg onClick={()=> console.log("What you trying to search?")} src={Search} alt={SearchText}/>
            </SafeSearch>
        </>
    )
}

const SearchImg =styled.img`
    width: 30px;
    height: 30px;
    &:hover {
      cursor: pointer;
    }
`
const SearchInput = styled.input`
    width: 40vw;
  outline: transparent;
  border: 1px solid transparent;
  
`

const SafeSearch = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 37vw;
  padding: 10px;
  border-radius: 18px;
  margin-left: 20vw;
  border: 1px solid red;
`

export default SearchAll