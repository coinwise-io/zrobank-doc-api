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
        'overview/support',
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
        'paas/api-overview/replay',
        'paas/api-overview/pagination',
        'paas/api-overview/api-responses',
        'paas/api-overview/changelog',
        'paas/api-overview/webhooks',
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
        'caas/api-overview/replay',
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
        'gateway/api-overview/how-to-use',
        'gateway/api-overview/api-responses',
        'gateway/api-overview/duplication-prevention',
        'gateway/api-overview/changelog',
        'gateway/api-overview/webhooks',
      ],
    },
    {
      type: 'category',
      label: 'Endpoints',
      items: require('./docs/gateway/endpoints/sidebar.js'),
    },
  ],
  baasSidebar: [
    {
      type: 'category',
      label: 'API Overview',
      items: [
        'baas/api-overview/introduction',
        'baas/api-overview/authentication',
        'baas/api-overview/protocol',
        'baas/api-overview/idempotence',
        'baas/api-overview/rate-limiting',
        'baas/api-overview/request-id',
        'baas/api-overview/serialization',
        'baas/api-overview/replay',
        'baas/api-overview/pagination',
        'baas/api-overview/api-responses',
        'baas/api-overview/changelog',
        'baas/api-overview/webhooks',
      ],
    },
    {
      type: 'category',
      label: 'Endpoints',
      items: require('./docs/baas/endpoints/sidebar.js'),
    },
  ],
    paymentGatewaySidebar: [
    {
      type: 'category',
      label: 'API Overview',
      items: [
        'paymentGateway/api-overview/introduction',
        'paymentGateway/api-overview/authentication',
        'paymentGateway/api-overview/protocol',
        'paymentGateway/api-overview/idempotence',
        'paymentGateway/api-overview/rate-limiting',
        'paymentGateway/api-overview/request-id',
        'paymentGateway/api-overview/serialization',
        'paymentGateway/api-overview/replay',
        'paymentGateway/api-overview/pagination',
        'paymentGateway/api-overview/api-responses',
        'paymentGateway/api-overview/changelog',
        'paymentGateway/api-overview/webhooks',
        'paymentGateway/api-overview/3ds-secure',
      ],
    },
    {
      type: 'category',
      label: 'Endpoints',
      items: require('./docs/paymentGateway/endpoints/sidebar.js'),
    },
  ],
}

module.exports = sidebars
