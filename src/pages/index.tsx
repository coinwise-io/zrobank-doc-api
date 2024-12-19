import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import styles from './index.module.css'
import Footer from '../components/Footer'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <img
        className={clsx('heroCircle', styles.heroCircle)}
        src="img/blue-circle.svg"
        alt="Circle"
      />
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/overview/introduction"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <>
      <Layout
        title={`${siteConfig.title}`}
        description="Description will go into a meta tag in <head />"
      >
        <HomepageHeader />
        <main>
          <img
            className={clsx('heroCircleBg', styles.heroCircleBg)}
            src="img/blue-circle-bg.svg"
            alt="Circle"
          />
          <HomepageFeatures />
        </main>
      </Layout>
      <Footer />
    </>
  )
}
