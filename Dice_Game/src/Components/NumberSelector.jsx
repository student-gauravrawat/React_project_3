import React, { useState } from 'react';
import styled from 'styled-components';

const NumberSelector = ({selectedNum, setSelectedNum, error, setError}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

let numberSelectorHandler = (num)=>{
   setSelectedNum(num)
   setError("")
}

  return (
    <NumberSelectorContainer>
    <p className='error'>{error}</p>
      <div className="num_box">
        {arrNumber.map((num, idx) => {
          return (
            <Box key={idx} onClick={()=>numberSelectorHandler(num)} isSelected={num === selectedNum}>{num} </Box>
          );
         })
     }
</div>
      <p className='text'>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
   display: flex;
   align-items: end;
   flex-direction: column;
   margin-right: 28px;
   
  .num_box {
    display: flex;
    gap: 24px;
  }
  .error{
    color: red;
    font-weight: 400;
    font-size: 24px;
  }

  .text {
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
  }
`;

const Box = styled.div`
  width: 72px;
  height: 72px;
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;

  background-color: ${props => (props.isSelected ? "black" : "white")};
  color: ${props => (props.isSelected ? "white" : "black")};
`;
