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
      items: [
        {
          type: 'category',
          label: 'Authentication',
          items: [
            'paas/endpoints/auth/auth-singin',
            'paas/endpoints/auth/auth-refresh-token',
          ],
        },
        {
          type: 'category',
          label: 'PIX',
          items: [
            {
              type: 'category',
              label: 'Payments',
              items: [
                'paas/endpoints/pix/payments/create-new-pix-payment-decode-by-account',
                'paas/endpoints/pix/payments/create-new-pix-payment-by-bank-account',
                'paas/endpoints/pix/payments/create-new-pix-payment-decode-by-key',
                'paas/endpoints/pix/payments/create-new-pix-payment-by-pix-key',
                'paas/endpoints/pix/payments/get-users-pix-payments',
                'paas/endpoints/pix/payments/get-pix-payment-by-id',
              ],
            },
            {
              type: 'category',
              label: 'Devolutions',
              items: [
                'paas/endpoints/pix/devolutions/crete-new-pix-devolution',
                'paas/endpoints/pix/devolutions/get-users-pix-devolutions',
                'paas/endpoints/pix/devolutions/get-users-pix-devolutions-received',
                'paas/endpoints/pix/devolutions/get-pix-devolution-by-id',
                'paas/endpoints/pix/devolutions/get-pix-devolution-received-by-id',
              ],
            },
            {
              type: 'category',
              label: 'Deposits',
              items: [
                'paas/endpoints/pix/deposits/create-new-dynamic-qr-code',
                'paas/endpoints/pix/deposits/get-dynamic-qr-code-by-id',
                'paas/endpoints/pix/deposits/get-users-pix-deposits',
                'paas/endpoints/pix/deposits/get-pix-deposit-by-id',
              ],
            },
            {
              type: 'category',
              label: 'Keys',
              items: [
                'paas/endpoints/pix/keys/create-new-evp-pix-key',
                'paas/endpoints/pix/keys/get-users-pix-keys',
                'paas/endpoints/pix/keys/get-pix-key-by-id',
                'paas/endpoints/pix/keys/delete-pix-key-by-id',
                'paas/endpoints/pix/keys/dismiss-pix-key-by-id',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Operations',
          items: [
            {
              type: 'category',
              label: 'Operation',
              items: [
                'paas/endpoints/operations/operation/get-users-operations',
                'paas/endpoints/operations/operation/get-user-operation-by-id',
                'paas/endpoints/operations/operation/get-receipt-by-operation-id',
              ],
            },
            {
              type: 'category',
              label: 'P2P transfers',
              items: [
                'paas/endpoints/operations/p2p-transfers/create-new-p2p-transfers',
              ],
            },
            {
              type: 'category',
              label: 'Currency',
              items: ['paas/endpoints/operations/currency/get-currencies'],
            },
            {
              type: 'category',
              label: 'Wallets',
              items: [
                'paas/endpoints/operations/wallets/create-new-wallet',
                'paas/endpoints/operations/wallets/get-users-wallets',
                'paas/endpoints/operations/wallets/update-operation-wallet-by-id',
                'paas/endpoints/operations/wallets/delete-wallet-by-id',
                'paas/endpoints/operations/wallets/get-wallet-by-id',
              ],
            },
            {
              type: 'category',
              label: 'Wallet Accounts',
              items: [
                'paas/endpoints/operations/wallet-accounts/get-users-wallet-accounts',
                'paas/endpoints/operations/wallet-accounts/get-users-wallet-accounts-by-id',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Compliance',
          items: [
            'paas/endpoints/compliance/create-user-withdraw-settings-request',
            'paas/endpoints/compliance/get-user-withdraw-settings-request-by-id',
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
      items: [
        {
          type: 'category',
          label: 'Authentication',
          items: [
            'caas/endpoints/auth/auth-singin',
            'caas/endpoints/auth/auth-refresh-token',
          ],
        },
        {
          type: 'category',
          label: 'Conversion',
          items: [
            'caas/endpoints/conversion/get-quotation-by-id',
            'caas/endpoints/conversion/get-conversion-by-id',
            'caas/endpoints/conversion/get-users-credit-balance-and-liability',
            'caas/endpoints/conversion/create-new-conversion',
            'caas/endpoints/conversion/get-conversions',
          ],
        },
        {
          type: 'category',
          label: 'Quotation',
          items: ['caas/endpoints/quotation/v2-quotations-spot'],
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
            'gateway/endpoints/qr-codes/generate-new-qr-code-for-single-or-multiple-orders',
            'gateway/endpoints/qr-codes/generate-new-qr-code',
          ],
        },
        {
          type: 'category',
          label: 'Refunds',
          items: [
            'gateway/endpoints/refunds/generate-complete-or-parcial-refund',
          ],
        },
        {
          type: 'category',
          label: 'Transactions',
          items: [
            'gateway/endpoints/transactions/search-by-uuid',
            'gateway/endpoints/transactions/update-transaction-status',
            'gateway/endpoints/transactions/get-transactions',
          ],
        },
        {
          type: 'category',
          label: 'Withdrawals',
          items: [
            'gateway/endpoints/withdrawals/create-withdraw',
            'gateway/endpoints/withdrawals/search-withdraw-transaction-by-merchant-id',
          ],
        },
      ],
    },
  ],
}

module.exports = sidebars
