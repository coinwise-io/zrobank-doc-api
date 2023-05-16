import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '78d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '540'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'd04'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '5da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '327'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '1ae'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '43d'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '973'),
    routes: [
      {
        path: '/docs/caas/teste',
        component: ComponentCreator('/docs/caas/teste', '083'),
        exact: true,
        sidebar: "caasSidebar"
      },
      {
        path: '/docs/gateway/teste',
        component: ComponentCreator('/docs/gateway/teste', 'a0c'),
        exact: true,
        sidebar: "gatewaySidebar"
      },
      {
        path: '/docs/overview/api-changelog',
        component: ComponentCreator('/docs/overview/api-changelog', 'c0b'),
        exact: true,
        sidebar: "overviewSidebar"
      },
      {
        path: '/docs/overview/api-key',
        component: ComponentCreator('/docs/overview/api-key', 'f40'),
        exact: true,
        sidebar: "overviewSidebar"
      },
      {
        path: '/docs/overview/environments',
        component: ComponentCreator('/docs/overview/environments', '097'),
        exact: true,
        sidebar: "overviewSidebar"
      },
      {
        path: '/docs/overview/introduction',
        component: ComponentCreator('/docs/overview/introduction', 'a91'),
        exact: true,
        sidebar: "overviewSidebar"
      },
      {
        path: '/docs/overview/security',
        component: ComponentCreator('/docs/overview/security', 'ddb'),
        exact: true,
        sidebar: "overviewSidebar"
      },
      {
        path: '/docs/paas/teste',
        component: ComponentCreator('/docs/paas/teste', 'e05'),
        exact: true,
        sidebar: "paasSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '599'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
