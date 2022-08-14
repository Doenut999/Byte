import Search from "../assets/Search.svg";
import styled from "styled-components";
import {useEffect, useRef} from "react";

const SearchAll = () => {

    const searchItem = useRef()
    useEffect(()=> {
        searchItem.current.focus()
    })
    
    const SearchText = "Look up, food/drink, item or vendor/store"
    return (
        <>
            <>
                <SearchBorder>
                    <SearchInput ref={searchItem} type="text" placeholder={SearchText}/>
                    <SearchImg   onClick={()=> console.log(searchItem.current.value)} src={Search} alt={SearchText}/>
                </SearchBorder>
            </>
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
  color: #ffffff;
  font-size: .4rem;
  font-weight: lighter;
  display: inline;
  background-color: transparent;
  border: 1px solid transparent;

`
const SearchBorder = styled.div`
  display: flex;
  border-bottom: 1.4px solid white;
  width: 40vw;
  position: relative;
  left: 20vw;
`

export default SearchAll