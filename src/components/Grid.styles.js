import styled, { css } from 'styled-components'



export const Container = styled.div`
  background-color: gainsboro;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto auto auto auto;
  gap: 5px;

`
export const Box = styled.div`
  ${props => props.styles ? props.styles : 'background: black'};
  
  
  
`






  // .item1 {
  //   grid-area: 2 / 2 / 4/ 4;
  //   background-color: gold;
  //   z-index: 2;
  // }
