import styled from 'styled-components'

export const TryItOutButton = styled.a`
  width: 5.25rem;
  height: 2.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 0.5rem;
  background: blue;
  color: #252f59;
  font-size: 0.875rem;
  cursor: pointer;
  font-weight: 500;
  background: linear-gradient(90deg, #54b7e8 1.32%, #3491ff 100%);
  font-family: 'Kanit Medium';
  margin-bottom: 1.25rem;

  &:hover {
    text-decoration: none;
    color: #252f59;
  }

  p {
    margin: 0;
  }
`
