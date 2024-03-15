import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
`

export const RequestContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
border: 3px solid rgba(199, 234, 255, 0.25);
border-radius: 1.5rem;
margin-top: 1.875rem;
padding-bottom: 2rem;

h2 {
  font-family: "Kanit Medium";
  padding: 1.5rem 0 1.5rem 1rem;
}
`

export const BodyBox = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
padding: 0 2rem;
`
export const HeaderBox = styled.div`
display: flex;
width: 100%;
border-bottom: 1px solid rgba(199, 234, 255, 0.25);
gap: 16rem;
margin-bottom: 1rem;

h3 {
  margin-bottom: 1.5rem
}

div {
  padding: 0 2rem;
}
`
export const ExecuteButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 4.25rem;
background: linear-gradient(90deg, #54B7E8 51.69%, #3491FF 100%);
border-color: transparent;
border: none;
border-radius: 1rem;
margin-top: 3rem;
font-size: 1.5rem;
font-family: "Kanit Medium";
color: rgba(37, 47, 89, 1);
cursor: pointer;
`

export const ContainerParams = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
`

export const ParamsTitle = styled.h3`
font-family: "Kanit Medium";
font-size: 1.25rem;
`

export const ContainerAllParams = styled.div`
display: flex;
flex-direction: column;
gap: 5rem;
`

export const ResponseContainer = styled.pre`
border: 1px solid rgba(199, 234, 255, 0.25);
border-radius: 1rem;
max-height: 45rem;
margin-top: 3rem;
background: transparent;
`
export const ResponseHeader = styled.div`
display: flex;
width: 100%;
border-bottom: 1px solid rgba(199, 234, 255, 0.25);
gap: 7rem;
padding-left: 1rem;

h3 {
  font-size: 1rem;
  font-family: "Kanit";
}
`
export const ResponseCodeDescriptionBox = styled.div`
margin-top: 0.5rem;
display: flex;
width: 100%;
padding-left: 1rem;
gap: 7rem;

p {
font-family: "Kanit";
}
`
export const ButtonsContainer = styled.div`
display: flex;
width: 100%;
gap: 1rem;
margin-bottom: 1.25rem;
`
export const ClearButton = styled.button`
width: 100%;
height: 4.25rem;
background: transparent;
border-color: transparent;
color: rgba(84, 183, 232, 1);
border: none;
border-radius: 1rem;
margin-top: 3rem;
font-size: 1.5rem;
font-family: "Kanit Medium";
cursor: pointer;
`

export const ResetButton = styled.a`
width: 3.75rem;
height: 2.25rem;
color: rgba(84, 183, 232, 1);
display: flex;
justify-content: center;
align-items: center;
text-align: center;
border: none;
background: transparent;
border-color: transparent;
font-family: "Kanit Medium";
border-radius: 1rem;
cursor: pointer;
font-size: 0.875rem;

&:hover {
  text-decoration: none;
}
`
export const CancelButton = styled.button`
width: 4.2rem;
height: 2.25rem;
background: linear-gradient(90deg, #54B7E8 51.69%, #3491FF 100%);
color: rgba(37, 47, 89, 1);
font-size: 0.875rem;
border: none;
border-color: transparent;
font-family: "Kanit Medium";
border-radius: 0.5rem;
cursor: pointer;
`

export const Spinner = styled.div`  
  border: 5px solid #f3f3f3; 
  border-top: 5px solid rgba(37, 47, 89, 1);;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export const AddOrderButton = styled.button`
width: 8rem;
height: 2.25rem;
color: rgba(84, 183, 232, 1);
display: flex;
justify-content: center;
align-items: center;
text-align: center;
border: none;
background: transparent;
border-color: transparent;
font-family: "Kanit Medium";
border-radius: 1rem;
cursor: pointer;
font-size: 0.875rem;
margin-top: 2rem;

&:hover {
  text-decoration: none;
}
`

export const RemoveOrderButton = styled.button`
width: 8rem;
height: 2.25rem;
color: rgba(84, 183, 232, 1);
display: flex;
justify-content: center;
align-items: center;
text-align: center;
border: none;
background: transparent;
border-color: transparent;
font-family: "Kanit Medium";
border-radius: 1rem;
cursor: pointer;
font-size: 0.875rem;
margin-top: 1rem;
position: absolute;
right: 0;
top: 0;

&:hover {
  text-decoration: none;
}
`

export const ContainerOrder = styled.div`
display: flex;
flex-direction: column;
padding: 1rem;
gap: 1rem;
border: 1px solid rgba(199, 234, 255, 0.25);
border-radius: 1rem;
position: relative;
`

export const AuthorizedFlagBox = styled.div`
display: flex;
width: fit-content;
padding: .5rem;
height: fit-content;
gap: 1rem;
border: 1px solid green;
border-radius: 1rem;
position: relative;
margin-right: 1rem;
color: green;
background-color: "#FFF";
`
export const UnauthorizedFlagBox = styled.div`
display: flex;
width: fit-content;
padding: .5rem;
height: fit-content;
gap: 1rem;
border: 1px solid red;
border-radius: 1rem;
position: relative;
margin-right: 1rem;
color: red;
background-color: "#FFF";
`

export const AuthStatusBox = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`