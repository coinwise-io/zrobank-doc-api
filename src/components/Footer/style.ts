import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: grid;
  gap: 1rem;
  padding: 2rem 4rem;
  background: var(--ifm-font-color-base);
  color: var(--ifm-navbar-link-color);
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Logo = styled.img`
  width: 100px;
`

export const Copyright = styled.p`
  margin-bottom: 0;
  text-align: center;
`

export const IconsContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export const Icon = styled.img`
  width: 30px;
  cursor: pointer;
`
