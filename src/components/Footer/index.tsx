import React from 'react'
import {
  FooterContainer,
  Logo,
  Copyright,
  IconsContainer,
  Icon,
  Content,
} from './style'

export default function Footer() {
  return (
    <FooterContainer>
      <Content>
        <Logo src="img/new-logo.png" alt="Logo" />
        <Copyright>
          Customer support: alo@zro.global | LGPD: dpo.zro@zro.global |
          CNPJ: 26.264.220/0001-16
        </Copyright>
        <IconsContainer>
          <a
            href="https://www.linkedin.com/company/zroglobal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon src="img/linkedin.png" />
          </a>
          <a
            href="https://www.instagram.com/zro.global"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon src="img/instagram.png" />
          </a>
        </IconsContainer>
      </Content>
    </FooterContainer>
  )
}
