// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

require('dotenv').config()

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

// const { ALGOLIA_API_KEY, ALGOLIA_APP_ID } = process.env;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Z.ro Bank',
  tagline: 'Documentation',
  favicon: 'img/favicon.png',
  url: 'https://github.com',
  baseUrl: '/zrobank-doc-api/',
  organizationName: 'coinwise-io', // Usually your GitHub org/user name.
  projectName: 'zrobank-doc-api', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  plugins: [
    require.resolve('@cmfcmf/docusaurus-search-local'),
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'api',
        docsPluginId: 'classic',
        config: {
          gateway: {
            specPath: 'specs/gateway-spec.json',
            outputDir: 'docs/gateway/endpoints',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          },
          paas: {
            specPath: 'specs/paas-spec.json',
            outputDir: 'docs/paas/endpoints',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          },
          caas: {
            specPath: 'specs/caas-spec.json',
            outputDir: 'docs/caas/endpoints',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          },
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          docLayoutComponent: '@theme/DocPage',
          docItemComponent: '@theme/ApiItem',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        logo: {
          alt: 'Zro Bank Logo',
          src: 'img/new-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'overviewSidebar',
            position: 'left',
            label: 'Overview',
          },
          {
            type: 'docSidebar',
            sidebarId: 'paasSidebar',
            position: 'left',
            label: 'Pix as a Service',
          },
          {
            type: 'docSidebar',
            sidebarId: 'caasSidebar',
            position: 'left',
            label: 'Crypto as a Service',
          },
          {
            type: 'docSidebar',
            sidebarId: 'gatewaySidebar',
            position: 'left',
            label: 'Gateway',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
      },
      // algolia: {
      //   appId: ALGOLIA_APP_ID,
      //   apiKey: ALGOLIA_API_KEY,
      //   indexName: "dev_zrobank",
      // },
    }),
  themes: ['docusaurus-theme-openapi-docs'],
}

module.exports = config
