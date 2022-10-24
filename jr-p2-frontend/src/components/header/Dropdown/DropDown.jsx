import React from "react";
import { useState, useEffect } from "react";
import styled from 'styled-components';
import { getCities } from '../../../api/Weathers';

const DropDownContainer = styled.div`
    width: 10.5em;
    margin-right:30px;
    z-index:99;
`;
const DropDownHeader = styled.div`
  color: white;
  height: 40px;
  font-size: 16px;
  border: 1px solid #ddd;
  cursor: pointer;
  :hover, :focus {
    background-color:  #3e8e41;
  }
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ArrowDown = styled.i`
    border: solid  #ddd;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
`
const DropDownListContainer = styled.div`
    position: absolute;
    background-color: #f6f6f6;
   // max-width: 40px;
    width: 10.5em;
    overflow: auto;
    border: 1px solid #ddd;
    z-index: 1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const SearchBar = styled.input`
    box-sizing: border-box;
    background-image: url('searchicon.png');
    background-position: 14px 12px;
    background-repeat: no-repeat;
    font-size: 16px;
    padding: 14px 10px 12px 15px;
    border: none;
    border-bottom: 1px solid #ddd;
    :focus {
        outline: 3px solid #ddd;
    }
`
const StyledSelect = styled.select`
    width:100%
`
const StyledOption = styled.option`
margin-bottom: 0.8em;
`
const DropDown = ({ setCurrentCityID }) => {
    console.log("DropDown--------");
    const [isOpen, setIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [originOptions, setOriginOptions] = useState([]);
    const [city, setCity] = useState('Sydney')
    const [options, setOptions] = useState(originOptions);
    const [selected, setSelected] = useState(options[0]?.value);

    useEffect(() => {
        getCities().then((res) => {
            setOriginOptions(res.data);
            setOptions(res.data);
        })
    }, [])

    useEffect(() => {
        const result = originOptions.filter(checkIndex);
        setOptions(result);
    }, [searchValue])

    const toggling = () => {
        setIsOpen(!isOpen);
        const result = originOptions.find((option) => {
            return option.name === city;
        })
        setSelected(result.name);
    }

    const searchFunction = (event) => {
        setSearchValue(event.target.value);
    }

    const handleChange = event => {
    };

    const handleInputClick = () => {
        console.log("handleInputClick-------");
    }
    const handleClick = (event) => {
        setCity(event.target.value);
        const result = originOptions.find(
            (option) => {
                const filter = event.target.value.toUpperCase();
                return option.name.toUpperCase().indexOf(filter) > -1;
            });
        console.log("lalala", result);
        setCurrentCityID(result.id);
        setSearchValue('');
        setIsOpen(false);
    }

    const checkIndex = (option) => {
        const filter = searchValue.toUpperCase();
        return option.name.toUpperCase().indexOf(filter) > -1;
    }

    return (
        <DropDownContainer>
            <DropDownHeader onClick={toggling}>{city}
                <ArrowDown></ArrowDown>
            </DropDownHeader>
            {isOpen && (
                <DropDownListContainer>

                    <SearchBar
                        type="text"
                        placeholder="Search.."
                        id="myInput"
                        onChange={searchFunction}
                        onClick={handleInputClick}
                        value={searchValue} />
                    <StyledSelect name="cars" id="myDropdown" size="16" value={selected} onChange={handleChange} onClick={handleClick}>
                        {(options.length > 0) && options.map(option => (
                            <StyledOption key={option.id} value={option.name}>{option.name}</StyledOption>
                        ))}
                    </StyledSelect>

                </DropDownListContainer>
            )
            }
        </DropDownContainer >
    )
}
export default DropDown;