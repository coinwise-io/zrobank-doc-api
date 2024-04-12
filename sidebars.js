/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */

// @ts-nocheck

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  overviewSidebar: [
    {
      type: 'category',
      label: 'Overview',
      items: [
        'overview/introduction',
        'overview/security',
        'overview/environments',
      ],
    },
  ],
  paasSidebar: [
    {
      type: 'category',
      label: 'API Overview',
      items: [
        'paas/api-overview/introduction',
        'paas/api-overview/authentication',
        'paas/api-overview/protocol',
        'paas/api-overview/idempotence',
        'paas/api-overview/rate-limiting',
        'paas/api-overview/request-id',
        'paas/api-overview/serialization',
        'paas/api-overview/pagination',
        'paas/api-overview/api-responses',
        'paas/api-overview/changelog',
      ],
    },
    {
      type: 'category',
      label: 'Endpoints',
      items: require('./docs/paas/endpoints/sidebar.js'),
    },
  ],
  caasSidebar: [
    {
      type: 'category',
      label: 'API Overview',
      items: [
        'caas/api-overview/introduction',
        'caas/api-overview/authentication',
        'caas/api-overview/protocol',
        'caas/api-overview/idempotence',
        'caas/api-overview/rate-limiting',
        'caas/api-overview/request-id',
        'caas/api-overview/serialization',
        'caas/api-overview/pagination',
        'caas/api-overview/api-responses',
        'caas/api-overview/changelog',
      ],
    },
    {
      type: 'category',
      label: 'Endpoints',
      items: require('./docs/caas/endpoints/sidebar.js'),
    },
  ],
  gatewaySidebar: [
    {
      type: 'category',
      label: 'API Overview',
      items: [
        'gateway/api-overview/introduction',
        'gateway/api-overview/authentication',
        'gateway/api-overview/protocol',
        'gateway/api-overview/serialization',
        'gateway/api-overview/errors',
        'gateway/api-overview/changelog',
      ],
    },
    {
      type: 'category',
      label: 'Endpoints',
      items: require('./docs/gateway/endpoints/sidebar.js'),
    },
  ],
}

module.exports = sidebars
