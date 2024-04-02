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
            {
              type: 'doc',
              id: 'paas/endpoints/auth/auth-singin',
              className: 'menu-badge post',
            },
            {
              type: 'doc',
              id: 'paas/endpoints/auth/auth-refresh-token',
              className: 'menu-badge post',
            },
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
                {
                  type: 'doc',
                  id: 'paas/endpoints/pix/payments/create-new-pix-payment-decode-by-account',
                  className: 'menu-badge post',
                },
                {
                  type: 'doc',
                  id: 'paas/endpoints/pix/payments/create-new-pix-payment-by-bank-account',
                  className: 'menu-badge post',
                },
                {
                  type: 'doc',
                  id: 'paas/endpoints/pix/payments/create-new-pix-payment-decode-by-key',
                  className: 'menu-badge get',
                },
                {
                  type: 'doc',
                  id: 'paas/endpoints/pix/payments/create-new-pix-payment-by-pix-key',
                  className: 'menu-badge post',
                },
                {
                  type: 'doc',
                  id: 'paas/endpoints/pix/payments/get-users-pix-payments',
                  className: 'menu-badge get',
                },
                {
                  type: 'doc',
                  id: 'paas/endpoints/pix/payments/get-pix-payment-by-id',
                  className: 'menu-badge get',
                },
              ],
            },
            {
              type: 'category',
              label: 'Devolutions',
              items: [
                {
                  type: 'doc',
                  id: 'paas/endpoints/pix/devolutions/crete-new-pix-devolution',
                  className: 'menu-badge post',
                },
                {
                  type: 'doc',
                  id: 'paas/endpoints/pix/devolutions/get-users-pix-devolutions',
                  className: 'menu-badge get',
                },
                {
                  type: 'doc',
                  id: 'paas/endpoints/pix/devolutions/get-users-pix-devolutions-received',
                  className: 'menu-badge get',
                },
                {
                  type: 'doc',
                  id: 'paas/endpoints/pix/devolutions/get-pix-devolution-by-id',
                  className: 'menu-badge get',
                },
                {
                  type: 'doc',
                  id: 'paas/endpoints/pix/devolutions/get-pix-devolution-received-by-id',
                  className: 'menu-badge get',
                },
              ],
            },
            {
              type: 'category',
              label: 'Deposits',
              items: [
                {
                  type: 'doc',
                  id: 'paas/endpoints/pix/deposits/create-new-dynamic-qr-code',
                  className: 'menu-badge post',
                },
                {
                  type: 'doc',
                  id: 'paas/endpoints/pix/deposits/get-dynamic-qr-code-by-id',
                  className: 'menu-badge get',
                },
                {
                  type: 'doc',
                  id: 'paas/endpoints/pix/deposits/get-users-pix-deposits',
                  className: 'menu-badge get',
                },
                {
                  type: 'doc',
                  id: 'paas/endpoints/pix/deposits/get-pix-deposit-by-id',
                  className: 'menu-badge get',
                },
              ],
            },
            {
              type: 'category',
              label: 'Keys',
              items: [
                {
                  type: 'doc',
                  id: 'paas/endpoints/pix/keys/create-new-evp-pix-key',
                  className: 'menu-badge post',
                },
                {
                  type: 'doc',
                  id: 'paas/endpoints/pix/keys/get-users-pix-keys',
                  className: 'menu-badge get',
                },
                {
                  type: 'doc',
                  id: 'paas/endpoints/pix/keys/get-pix-key-by-id',
                  className: 'menu-badge get',
                },
                {
                  type: 'doc',
                  id: 'paas/endpoints/pix/keys/delete-pix-key-by-id',
                  className: 'menu-badge delete',
                },
                {
                  type: 'doc',
                  id: 'paas/endpoints/pix/keys/dismiss-pix-key-by-id',
                  className: 'menu-badge post',
                },
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
                {
                  type: 'doc',
                  id: 'paas/endpoints/operations/operation/get-users-operations',
                  className: 'menu-badge get',
                },
                {
                  type: 'doc',
                  id: 'paas/endpoints/operations/operation/get-user-operation-by-id',
                  className: 'menu-badge get',
                },
                {
                  type: 'doc',
                  id: 'paas/endpoints/operations/operation/get-receipt-by-operation-id',
                  className: 'menu-badge get',
                },
              ],
            },
            {
              type: 'category',
              label: 'P2P transfers',
              items: [
                {
                  type: 'doc',
                  id: 'paas/endpoints/operations/p2p-transfers/create-new-p2p-transfers',
                  className: 'menu-badge post',
                },
              ],
            },
            {
              type: 'category',
              label: 'Currency',
              items: [
                {
                  type: 'doc',
                  id: 'paas/endpoints/operations/currency/get-currencies',
                  className: 'menu-badge get',
                },
              ],
            },
            {
              type: 'category',
              label: 'Wallets',
              items: [
                {
                  type: 'doc',
                  id: 'paas/endpoints/operations/wallets/create-new-wallet',
                  className: 'menu-badge post',
                },
                {
                  type: 'doc',
                  id: 'paas/endpoints/operations/wallets/get-users-wallets',
                  className: 'menu-badge get',
                },
                {
                  type: 'doc',
                  id: 'paas/endpoints/operations/wallets/update-operation-wallet-by-id',
                  className: 'menu-badge put',
                },
                {
                  type: 'doc',
                  id: 'paas/endpoints/operations/wallets/delete-wallet-by-id',
                  className: 'menu-badge delete',
                },
                {
                  type: 'doc',
                  id: 'paas/endpoints/operations/wallets/get-wallet-by-id',
                  className: 'menu-badge get',
                },
              ],
            },
            {
              type: 'category',
              label: 'Wallet Accounts',
              items: [
                {
                  type: 'doc',
                  id: 'paas/endpoints/operations/wallet-accounts/get-users-wallet-accounts',
                  className: 'menu-badge get',
                },
                {
                  type: 'doc',
                  id: 'paas/endpoints/operations/wallet-accounts/get-users-wallet-accounts-by-id',
                  className: 'menu-badge get',
                },
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
            {
              type: 'doc',
              id: 'paas/endpoints/compliance/create-user-withdraw-settings-request',
              className: 'menu-badge post',
            },
            {
              type: 'doc',
              id: 'paas/endpoints/compliance/get-user-withdraw-settings-request-by-id',
              className: 'menu-badge get',
            },
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
            {
              type: 'doc',
              id: 'caas/endpoints/auth/auth-singin',
              className: 'menu-badge post',
            },
            {
              type: 'doc',
              id: 'caas/endpoints/auth/auth-refresh-token',
              className: 'menu-badge post',
            },
          ],
        },
        {
          type: 'category',
          label: 'Conversion',
          items: [
            {
              type: 'doc',
              id: 'caas/endpoints/conversion/get-quotation-by-id',
              className: 'menu-badge get',
            },
            {
              type: 'doc',
              id: 'caas/endpoints/conversion/get-conversion-by-id',
              className: 'menu-badge get',
            },
            {
              type: 'doc',
              id: 'caas/endpoints/conversion/get-users-credit-balance-and-liability',
              className: 'menu-badge get',
            },
            {
              type: 'doc',
              id: 'caas/endpoints/conversion/create-new-conversion',
              className: 'menu-badge post',
            },
            {
              type: 'doc',
              id: 'caas/endpoints/conversion/get-conversions',
              className: 'menu-badge get',
            },
          ],
        },
        {
          type: 'category',
          label: 'Quotation',
          items: [
            {
              type: 'doc',
              id: 'caas/endpoints/quotation/v2-quotations-spot',
              className: 'menu-badge get',
            },
          ],
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
            {
              type: 'doc',
              id: 'gateway/endpoints/qr-codes/generate-new-qr-code-for-single-or-multiple-orders',
              className: 'menu-badge post',
            },
            {
              type: 'doc',
              id: 'gateway/endpoints/qr-codes/generate-new-qr-code',
              className: 'menu-badge post',
            },
          ],
        },
        {
          type: 'category',
          label: 'Refunds',
          items: [
            {
              type: 'doc',
              id: 'gateway/endpoints/refunds/generate-complete-or-parcial-refund',
              className: 'menu-badge post',
            },
          ],
        },
        {
          type: 'category',
          label: 'Transactions',
          items: [
            {
              type: 'doc',
              id: 'gateway/endpoints/transactions/search-by-uuid',
              className: 'menu-badge get',
            },
            {
              type: 'doc',
              id: 'gateway/endpoints/transactions/update-transaction-status',
              className: 'menu-badge put',
            },
            {
              type: 'doc',
              id: 'gateway/endpoints/transactions/get-transactions',
              className: 'menu-badge get',
            },
          ],
        },
        {
          type: 'category',
          label: 'Withdrawals',
          items: [
            {
              type: 'doc',
              id: 'gateway/endpoints/withdrawals/create-withdraw',
              className: 'menu-badge post',
            },
            {
              type: 'doc',
              id: 'gateway/endpoints/withdrawals/search-withdraw-transaction-by-merchant-id',
              className: 'menu-badge get',
            },
          ],
        },
      ],
    },
  ],
}

module.exports = sidebars
