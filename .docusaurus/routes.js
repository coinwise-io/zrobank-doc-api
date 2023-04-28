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
    component: ComponentCreator('/docs', 'cb2'),
    routes: [
      {
        path: '/docs/caas/apiLogs',
        component: ComponentCreator('/docs/caas/apiLogs', '4e8'),
        exact: true,
        sidebar: "caasSidebar"
      },
      {
        path: '/docs/caas/authentication',
        component: ComponentCreator('/docs/caas/authentication', 'b42'),
        exact: true,
        sidebar: "caasSidebar"
      },
      {
        path: '/docs/caas/errors',
        component: ComponentCreator('/docs/caas/errors', '278'),
        exact: true,
        sidebar: "caasSidebar"
      },
      {
        path: '/docs/caas/indepotence',
        component: ComponentCreator('/docs/caas/indepotence', 'b2e'),
        exact: true,
        sidebar: "caasSidebar"
      },
      {
        path: '/docs/caas/pagination',
        component: ComponentCreator('/docs/caas/pagination', 'b33'),
        exact: true,
        sidebar: "caasSidebar"
      },
      {
        path: '/docs/caas/protocol',
        component: ComponentCreator('/docs/caas/protocol', '5ec'),
        exact: true,
        sidebar: "caasSidebar"
      },
      {
        path: '/docs/caas/rateLimiting',
        component: ComponentCreator('/docs/caas/rateLimiting', '45b'),
        exact: true,
        sidebar: "caasSidebar"
      },
      {
        path: '/docs/caas/request_id',
        component: ComponentCreator('/docs/caas/request_id', 'a7f'),
        exact: true,
        sidebar: "caasSidebar"
      },
      {
        path: '/docs/caas/serialization',
        component: ComponentCreator('/docs/caas/serialization', '3c2'),
        exact: true,
        sidebar: "caasSidebar"
      },
      {
        path: '/docs/caas/versioning',
        component: ComponentCreator('/docs/caas/versioning', 'a4d'),
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
    component: ComponentCreator('/', 'a0b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
