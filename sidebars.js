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
        'paas/api-overview/change-log',
      ],
    },
    {
      type: 'category',
      label: 'Endpoints',
      items: [
        {
          type: 'category',
          label: 'Authentication',
          items: ['paas/auth/auth-singin', 'paas/auth/auth-refresh-token'],
        },
        {
          type: 'category',
          label: 'Pix | Payments',
          items: [
            'paas/pix/payments/create-new-pix-payment-decode-by-account',
            'paas/pix/payments/create-new-pix-payment-by-bank-account',
            'paas/pix/payments/create-new-pix-payment-decode-by-key',
            'paas/pix/payments/create-new-pix-payment-by-pix-key',
            'paas/pix/payments/get-users-pix-payments',
            'paas/pix/payments/get-pix-payment-by-id',
          ],
        },
        {
          type: 'category',
          label: 'Pix | Devolutions',
          items: [
            'paas/pix/devolutions/crete-new-pix-devolution',
            'paas/pix/devolutions/get-users-pix-devolutions',
            'paas/pix/devolutions/get-users-pix-devolutions-received',
            'paas/pix/devolutions/get-pix-devolution-by-id',
            'paas/pix/devolutions/get-pix-devolution-received-by-id',
          ],
        },
        {
          type: 'category',
          label: 'Pix | Deposits',
          items: [
            'paas/pix/deposits/create-new-dynamic-qr-code',
            'paas/pix/deposits/get-dynamic-qr-code-by-id',
            'paas/pix/deposits/get-users-pix-deposits',
            'paas/pix/deposits/get-pix-deposit-by-id',
          ],
        },
        {
          type: 'category',
          label: 'Pix | Keys',
          items: [
            'paas/pix/keys/create-new-evp-pix-key',
            'paas/pix/keys/get-users-pix-keys',
            'paas/pix/keys/get-pix-key-by-id',
            'paas/pix/keys/delete-pix-key-by-id',
            'paas/pix/keys/dismiss-pix-key-by-id',
          ],
        },

        {
          type: 'category',
          label: 'Operations | P2P transfers',
          items: ['paas/operations/p2p-transfers/create-new-p2p-transfers'],
        },
        {
          type: 'category',
          label: 'Operations | Currency',
          items: ['paas/operations/currency/get-currencies'],
        },
        {
          type: 'category',
          label: 'Operations | Wallet Accounts',
          items: [
            'paas/operations/wallet-accounts/get-users-wallet-accounts',
            'paas/operations/wallet-accounts/get-users-wallet-accounts-by-id',
          ],
        },
        {
          type: 'category',
          label: 'Compliance',
          items: [
            'paas/compliance/create-user-withdraw-settings-request',
            'paas/compliance/get-user-withdraw-settings-request-by-id',
          ],
        },
      ],
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
        'caas/api_responses',
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
          items: ['caas/auth/auth_refresh-token', 'caas/auth/auth_singin'],
        },
      ],
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
      items: [
        {
          type: 'category',
          label: 'QrCodes',
          items: [
            'gateway/qr-codes/generate-new-qr-code-for-single-or-multiple-orders',
            'gateway/qr-codes/generate-new-qr-code',
          ],
        },
        {
          type: 'category',
          label: 'Refunds',
          items: ['gateway/refunds/generate-complete-or-parcial-refund'],
        },
        {
          type: 'category',
          label: 'Transactions',
          items: [
            'gateway/transactions/search-by-uuid',
            'gateway/transactions/update-transaction-status',
          ],
        },
        {
          type: 'category',
          label: 'Withdrawals',
          items: [
            'gateway/withdrawals/withdraw',
            'gateway/withdrawals/search-withdraw-transaction-by-merchant-id',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
