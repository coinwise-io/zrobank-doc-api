import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  src: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Pix as a Service",
    src: require("@site/static/img/paas.png").default,
    description: (
      <>
        Send and receive instant payments through our Pix API, quickly and
        safely.
      </>
    ),
  },
  {
    title: "Zro Gateway",
    src: require("@site/static/img/gateway.png").default,
    description: (
      <>
        Manage your wallets, track your transactions, and enjoy availability
        across multiple banks with the lowest fees.
      </>
    ),
  },
  {
    title: "Crypto as a Service",
    src: require("@site/static/img/caas.png").default,
    description: (
      <>
        Increase liquidity in your operations and offer your customers the most
        popular cryptocurrencies on your website or app, using our Crypto API.
      </>
    ),
  },
];

function Feature({ title, src, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={src} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
