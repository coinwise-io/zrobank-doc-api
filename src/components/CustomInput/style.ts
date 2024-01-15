import styled from "styled-components";

export const InputContainer = styled.div`
display: flex;
`

export const InputLabelContainer = styled.div`
display: flex;
width: 20rem;
flex-direction: column;
gap: 0.25rem;
`

export const InputName = styled.p`
color: #FFF;
display: flex;
align-items: center;
margin: 0;
font-family: "Kanit";

span {
  margin-left: 0.5rem;
  font-size: 0.75rem;
  color: red;
}
`
export const InputType = styled.p`
color: #FFF;
margin: 0;
font-family: "Kanit Italic";
`

export const InputStyled = styled.input`
width: 19rem;
height: 2.5rem;
background-color: transparent;
border: 1px solid rgba(199, 234, 255, 0.25);
border-radius: 0.5rem;
padding-left: 1rem;
font-size: 1rem;
padding-top: 0.4rem;
`