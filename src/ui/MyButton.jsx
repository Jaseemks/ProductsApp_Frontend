import styled, { css } from "styled-components";

export const MyButton = styled.button`

  border: 1px;
  color: white;
  padding: 15px 32px;
  min-width: 200px;


  ${props => props.maroon && css`
    background: maroon;
    color: white;
    font-size: large;
  `}

  ${props => props.white && css`
  background: white;
  color: black;
`}

${props => props.red && css`
  background: red;
  color: white;
`}
${props => props.green && css`
  background: green;
  color : white;
`}


`