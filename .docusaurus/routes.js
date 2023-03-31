import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'c05'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'd48'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'fed'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'b24'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'e5b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'a0c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '53d'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '2fe'),
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
        path: '/docs/overview/teste',
        component: ComponentCreator('/docs/overview/teste', '2ab'),
        exact: true,
        sidebar: "overviewSidebar"
      },
      {
        path: '/docs/overview/teste2',
        component: ComponentCreator('/docs/overview/teste2', 'c32'),
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
    component: ComponentCreator('/', 'a0b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
