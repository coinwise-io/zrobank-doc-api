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

// @ts-check

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
        'overview/api-key',
        'overview/api-changelog',
      ],
    },
  ],
  paasSidebar: [
    {
      type: 'category',
      label: 'PaaS',
      items: ['paas/teste'],
    },
  ],
  caasSidebar: [
    {
      type: 'category',
      label: 'API Overview',
      items: [
        'caas/introduction',
        'caas/authentication',
        'caas/idempotence',
        'caas/pagination',
        'caas/protocol',
        'caas/rate_limiting',
        'caas/request_id',
        'caas/serialization',
        'caas/api_responses',
        'caas/change_log',
      ],
    },
    {
      type: 'category',
      label: 'Endpoints',
      items: [
        {
          type: 'category',
          label: 'Conversion',
          items: [
            'caas/conversion/otc_conversions_id_quotations',
            'caas/conversion/otc_conversions_id',
            'caas/conversion/v2_otc_conversions_credit-balance',
            'caas/conversion/v2_otc_conversions',
            'caas/conversion/v3_otc_conversions',
          ],
        },
        {
          type: 'category',
          label: 'Quotation',
          items: ['caas/quotation/v2_quotations_spot'],
        },
        {
          type: 'category',
          label: 'Authentication',
          items: [
            'caas/auth/auth_refresh-token',
            'caas/auth/auth_singin',
          ],
        },
      ],
    },
  ],
  gatewaySidebar: [
    {
      type: 'category',
      label: 'Gateway',
      items: ['gateway/teste'],
    },
  ],
};

module.exports = sidebars;
