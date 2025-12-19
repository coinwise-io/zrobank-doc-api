import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

type FeatureItem = {
  title: string
  src: string
  to: string
  description: JSX.Element
  isExternal?: boolean
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Pix as a Service',
    src: require('@site/static/img/pix.png').default,
    to: '/paas/api-overview/introduction',
    description: (
      <>
        Send and receive instant payments through our Pix API, quickly and
        safely.
      </>
    ),
  },
  {
    title: 'Zro Gateway',
    src: require('@site/static/img/door.png').default,
    to: '/gateway/api-overview/introduction',
    description: (
      <>
        Manage your wallets, track your transactions, and enjoy availability
        across multiple banks with the lowest fees.
      </>
    ),
  },
  {
    title: 'Crypto as a Service',
    src: require('@site/static/img/bitcoin.png').default,
    to: '/caas/api-overview/introduction',
    description: (
      <>
        Increase liquidity in your operations and offer your customers the most
        popular cryptocurrencies on your website or app, using our Crypto API.
      </>
    ),
  },
  {
    title: 'Payments Gateway',
    src: require('@site/static/img/dolar.png').default,
    to: '/paymentGateway/api-overview/introduction',
    description: (
      <>
        Accept card payments with agility and security through our Payments Gateway API, 
        enabling seamless integration for in-person and online transactions.
      </>
    ),
  },
]

function Feature({ title, src, description, to, isExternal }: FeatureItem) {
  return (
    <div className={clsx('col', styles.featureCard)}>
      <div className={styles.featureCardItem}>
        <div className={styles.featureHeader}>
          <img src={src} role="img" />
          <h3>{title}</h3>
        </div>
        <p>{description}</p>
        {isExternal ? (
          <Link href={to} target="_self">See more</Link>
        ) : (
          <Link to={to}>See more</Link>
        )}
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  const zroInternationalUrl = (siteConfig?.customFields as { zroInternationalDocumentationUrl?: string })?.zroInternationalDocumentationUrl

  // Update Payments Gateway feature to use external URL if available
  const updatedFeatureList = FeatureList.map((feature) => {
    if (feature.title === 'Payments Gateway' && zroInternationalUrl) {
      return {
        ...feature,
        to: zroInternationalUrl,
        isExternal: true,
      }
    }
    return feature
  })

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx('row', styles.featureRow)}>
          {updatedFeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
