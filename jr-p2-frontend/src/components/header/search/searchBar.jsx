import styled from 'styled-components';
const SearchBarStyle = styled.div`
        width: 150px;
        height: 30px;
        background-color: pink;
        display: flex;
        justify-content: end;
        .searchBtn{
            width: 30px;
           height:30px;
           border-radius:50%;
           display: flex;
        justify-content: end;
        background-color:red;
   
           ::after {
            position:relative;
               // top:10px;
                width: 15px;
                height: 3px;
                background: black;
                content: "";
                display: inline-block;
                vertical-align: middle;
                transform: rotate(35deg);
            }
        }
        input{
                width:20px;
                height:20px;
                border-radius:50%;
                position:relative;
               // right:15px;
                :focus{
                   // right:15px;
                   transition-duration:500ms;
                    width:150px; 
                    border-radius:5px;
                }
            }

        
       
  

`

const SearchBar = () => {
    return (<SearchBarStyle>
        {/*  */}
        <span className='searchBtn'>
        <input type="text"  />
        </span>
       
       
        
    </SearchBarStyle>);
}

export default SearchBar;