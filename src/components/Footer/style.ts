import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: grid;
  gap: 1rem;
  padding: 2rem 4rem;
  background: var(--ifm-font-color-base);
  color: var(--ifm-navbar-link-color);
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const Copyright = styled.p`
  grid-column: 2;
  margin-bottom: 0;
  text-align: center;
`

export const IconsContainer = styled.div`
  display: flex;
  grid-column: 3;
  gap: 1rem;
  justify-self: end;
`

export const Icon = styled.img`
  width: 30px;
  cursor: pointer;
`
