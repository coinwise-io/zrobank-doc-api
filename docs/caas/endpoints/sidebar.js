module.exports = [{"type":"doc","id":"caas/endpoints/z-ro-bank-paas-api"},{"type":"category","label":"Authentication","items":[{"type":"doc","id":"caas/endpoints/login-auth-rest-controller-execute","label":"Create an Access Token to log user in.","className":"api-method post"},{"type":"doc","id":"caas/endpoints/refresh-token-auth-rest-controller-execute","label":"Refresh token user.","className":"api-method post"}]},{"type":"category","label":"Pix | Keys","items":[{"type":"doc","id":"caas/endpoints/create-pix-key-rest-controller-execute","label":"Create new random key.","className":"api-method post"},{"type":"doc","id":"caas/endpoints/get-all-pix-key-rest-controller-execute","label":"List user's pix keys.","className":"api-method get"},{"type":"doc","id":"caas/endpoints/get-by-id-pix-key-rest-controller-execute","label":"Get pix key by ID.","className":"api-method get"},{"type":"doc","id":"caas/endpoints/delete-by-id-pix-key-rest-controller-execute","label":"Delete pix key by ID.","className":"api-method delete"},{"type":"doc","id":"caas/endpoints/dismiss-by-id-pix-key-rest-controller-execute","label":"Dismiss pix key by ID.","className":"api-method post"},{"type":"doc","id":"caas/endpoints/v-2-create-qr-code-dynamic-instant-billing-rest-controller-execute","label":"Create an instant-billing dynamic QR Code.","className":"api-method post"},{"type":"doc","id":"caas/endpoints/v-2-create-qr-code-dynamic-due-date-rest-controller-execute","label":"Create a dynamic due date QR Code.","className":"api-method post"},{"type":"doc","id":"caas/endpoints/v-2-get-qr-code-dynamic-by-id-rest-controller-execute","label":"Get dynamic QR Code by ID.","className":"api-method get"},{"type":"doc","id":"caas/endpoints/v-2-create-qr-code-static-rest-controller-execute","label":"Create a static QR Code.","className":"api-method post"},{"type":"doc","id":"caas/endpoints/v-2-get-all-qr-code-static-rest-controller-execute","label":"Get all static QR Codes.","className":"api-method get"},{"type":"doc","id":"caas/endpoints/v-2-get-by-qr-code-static-id-rest-controller-execute","label":"Get static QR Code by ID.","className":"api-method get"},{"type":"doc","id":"caas/endpoints/v-2-delete-by-qr-code-static-id-rest-controller-execute","label":"Delete a static QR Code.","className":"api-method delete"}]},{"type":"category","label":"Pix | Payments","items":[{"type":"doc","id":"caas/endpoints/create-decoded-pix-key-rest-controller-execute","label":"Create new Decoded Pix Key ID.","className":"api-method get"},{"type":"doc","id":"caas/endpoints/create-decoded-pix-account-rest-controller-execute","label":"Create new Decoded Pix Account ID.","className":"api-method post"},{"type":"doc","id":"caas/endpoints/create-by-account-payment-rest-controller-execute","label":"Create new pix payment by bank account.","className":"api-method post"},{"type":"doc","id":"caas/endpoints/v-2-create-by-account-payment-rest-controller-execute","label":"Create new pix payment by bank account.","className":"api-method post"},{"type":"doc","id":"caas/endpoints/create-by-pix-key-payment-rest-controller-execute","label":"Create new pix payment by pix key.","className":"api-method post"},{"type":"doc","id":"caas/endpoints/get-all-payment-rest-controller-execute","label":"List user's payments.","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"caas/endpoints/v-2-get-all-payment-rest-controller-execute","label":"List user's payments.","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"caas/endpoints/v-3-get-all-payment-rest-controller-execute","label":"List user's pix payments.","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"caas/endpoints/v-4-get-all-payment-rest-controller-execute","label":"List user's pix payments.","className":"api-method get"},{"type":"doc","id":"caas/endpoints/get-payment-by-id-rest-controller-execute","label":"Get a PIX payment status.","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"caas/endpoints/v-2-get-payment-by-id-rest-controller-execute","label":"Get pix payment by ID.","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"caas/endpoints/v-3-get-payment-by-id-rest-controller-execute","label":"Get pix payment by ID.","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"caas/endpoints/v-4-get-payment-by-id-rest-controller-execute","label":"Get pix payment by ID.","className":"api-method get"},{"type":"doc","id":"caas/endpoints/get-receipt-by-operation-id-rest-controller-execute","label":"Get receipt by its operation id.","className":"menu__list-item--deprecated api-method get"}]},{"type":"category","label":"Pix | Deposits","items":[{"type":"doc","id":"caas/endpoints/create-qr-code-dynamic-instant-billing-rest-controller-execute","label":"Create new dynamic QR Code.","className":"menu__list-item--deprecated api-method post"},{"type":"doc","id":"caas/endpoints/create-qr-code-dynamic-due-date-rest-controller-execute","label":"Create new dynamic Due Date QR Code.","className":"menu__list-item--deprecated api-method post"},{"type":"doc","id":"caas/endpoints/get-qr-code-dynamic-by-id-rest-controller-execute","label":"Get dinamic QR code by ID.","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"caas/endpoints/create-qr-code-static-rest-controller-execute","label":"Create a static QR Code.","className":"menu__list-item--deprecated api-method post"},{"type":"doc","id":"caas/endpoints/get-all-qr-code-static-rest-controller-execute","label":"List user's QR codes.","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"caas/endpoints/get-by-qr-code-static-id-rest-controller-execute","label":"Get a user's QR code by id.","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"caas/endpoints/delete-by-qr-code-static-id-rest-controller-execute","label":"Delete user's QR code.","className":"menu__list-item--deprecated api-method delete"},{"type":"doc","id":"caas/endpoints/get-all-pix-deposit-rest-controller-execute","label":"List user's deposits.","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"caas/endpoints/v-2-get-all-pix-deposit-rest-controller-execute","label":"List user's deposits.","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"caas/endpoints/v-3-get-all-pix-deposit-rest-controller-execute","label":"List user's pix deposits.","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"caas/endpoints/v-4-get-all-pix-deposit-rest-controller-execute","label":"List user's pix deposits.","className":"api-method get"},{"type":"doc","id":"caas/endpoints/get-pix-deposit-by-id-rest-controller-execute","label":"Get pix deposit by ID.","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"caas/endpoints/v-2-get-pix-deposit-by-id-rest-controller-execute","label":"Get pix deposit by ID.","className":"api-method get"}]},{"type":"category","label":"Pix | Devolutions","items":[{"type":"doc","id":"caas/endpoints/create-pix-devolution-rest-controller-execute","label":"Create new pix devolution.","className":"api-method post"},{"type":"doc","id":"caas/endpoints/get-all-pix-devolution-rest-controller-execute","label":"List user's devolutions.","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"caas/endpoints/v-2-get-all-pix-devolution-rest-controller-execute","label":"List user's devolutions.","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"caas/endpoints/v-3-get-all-pix-devolution-rest-controller-execute","label":"List user's pix devolutions.","className":"api-method get"},{"type":"doc","id":"caas/endpoints/get-all-pix-devolution-received-rest-controller-execute","label":"List user's devolutions received.","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"caas/endpoints/v-2-get-all-pix-devolution-received-rest-controller-execute","label":"List user's devolutions received.","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"caas/endpoints/v-3-get-all-pix-devolution-received-rest-controller-execute","label":"List user's received pix devolutions.","className":"api-method get"},{"type":"doc","id":"caas/endpoints/get-by-pix-devolution-id-rest-controller-execute","label":"Get a PIX devolution by id.","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"caas/endpoints/v-2-get-by-pix-devolution-id-rest-controller-execute","label":"Get pix devolution by ID.","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"caas/endpoints/v-3-get-by-pix-devolution-id-rest-controller-execute","label":"Get pix devolution by ID.","className":"api-method get"},{"type":"doc","id":"caas/endpoints/get-by-id-pix-devolution-received-rest-controller-execute","label":"Get received pix devolution by ID.","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"caas/endpoints/v-2-get-by-id-pix-devolution-received-rest-controller-execute","label":"Get received pix devolution by ID.","className":"api-method get"}]},{"type":"category","label":"Otc | Conversions","items":[{"type":"doc","id":"caas/endpoints/create-conversion-rest-controller-execute","label":"Create a conversion.","className":"menu__list-item--deprecated api-method post"},{"type":"doc","id":"caas/endpoints/get-all-conversion-rest-controller-execute","label":"List user's conversions.","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"caas/endpoints/v-2-create-conversion-rest-controller-execute","label":"Create new currency conversion.","className":"api-method post"},{"type":"doc","id":"caas/endpoints/v-2-get-all-conversion-rest-controller-execute","label":"List user's conversions.","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"caas/endpoints/v-3-get-all-conversion-rest-controller-execute","label":"List user's conversions.","className":"api-method get"},{"type":"doc","id":"caas/endpoints/get-conversion-credit-by-user-rest-controller-execute","label":"Conversions.","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"caas/endpoints/v-2-get-conversion-credit-by-user-rest-controller-execute","label":"Get user's credit balance and liability.","className":"api-method get"},{"type":"doc","id":"caas/endpoints/get-quotation-by-conversion-id-rest-controller-execute","label":"Get quotation by Conversion ID.","className":"api-method get"},{"type":"doc","id":"caas/endpoints/get-conversion-by-id-rest-controller-execute","label":"Get conversion by ID.","className":"api-method get"}]},{"type":"category","label":"Quotations | Conversions","items":[{"type":"doc","id":"caas/endpoints/get-quotation-rest-controller-execute","label":"Get a quotation.","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"caas/endpoints/v-2-get-quotation-rest-controller-execute","label":"Get new SPOT quotation.","className":"api-method get"}]},{"type":"category","label":"Operations | P2P Transfers","items":[{"type":"doc","id":"caas/endpoints/create-p-2-p-transfer-rest-controller-execute","label":"Create new P2P transfer.","className":"api-method post"},{"type":"doc","id":"caas/endpoints/get-p-2-p-transfer-by-id-rest-controller-execute","label":"Get P2P transfer by ID.","className":"api-method get"}]},{"type":"category","label":"Operations | Wallets","items":[{"type":"doc","id":"caas/endpoints/create-wallet-rest-controller-execute","label":"Create a new wallet.","className":"api-method post"},{"type":"doc","id":"caas/endpoints/get-all-wallet-rest-controller-execute","label":"List user's wallets.","className":"api-method get"},{"type":"doc","id":"caas/endpoints/update-wallet-rest-controller-execute","label":"Update a wallet data.","className":"api-method put"},{"type":"doc","id":"caas/endpoints/delete-wallet-rest-controller-execute","label":"Delete a wallet.","className":"api-method delete"},{"type":"doc","id":"caas/endpoints/get-wallet-by-id-rest-controller-execute","label":"Get wallet by ID.","className":"api-method get"}]},{"type":"category","label":"Operations | Wallet Accounts","items":[{"type":"doc","id":"caas/endpoints/get-all-wallet-account-rest-controller-execute","label":"List user's wallet accounts.","className":"api-method get"},{"type":"doc","id":"caas/endpoints/get-wallet-account-by-id-rest-controller-execute","label":"Get user's wallet account by id.","className":"api-method get"}]},{"type":"category","label":"Operations | Currency","items":[{"type":"doc","id":"caas/endpoints/get-all-currency-rest-controller-execute","label":"List currencies.","className":"api-method get"}]},{"type":"category","label":"Operations | Operation","items":[{"type":"doc","id":"caas/endpoints/get-all-operations-rest-controller-execute","label":"List user's operations.","className":"api-method get"},{"type":"doc","id":"caas/endpoints/get-statement-rest-controller-execute","label":"User statement.","className":"api-method get"},{"type":"doc","id":"caas/endpoints/get-operation-by-id-rest-controller-execute","label":"Get user's operation.","className":"api-method get"},{"type":"doc","id":"caas/endpoints/get-operation-receipt-by-id-rest-controller-execute","label":"Get receipt by its operation id.","className":"api-method get"},{"type":"doc","id":"caas/endpoints/get-all-report-statement-rest-controller-execute","label":"User statement.","className":"api-method get"}]},{"type":"category","label":"Banking","items":[{"type":"doc","id":"caas/endpoints/get-all-bank-ted-rest-controller-execute","label":"List banks that support TED operations.","className":"api-method get"},{"type":"doc","id":"caas/endpoints/get-all-banking-ted-rest-controller-execute","label":"List user's TED operations.","className":"api-method get"},{"type":"doc","id":"caas/endpoints/create-banking-ted-rest-controller-execute","label":"Create new TED operation.","className":"api-method post"},{"type":"doc","id":"caas/endpoints/get-banking-ted-by-id-rest-controller-execute","label":"Get TED operation by ID.","className":"api-method get"}]},{"type":"category","label":"Compliance | Withdraw setting request","items":[{"type":"doc","id":"caas/endpoints/create-user-withdraw-setting-request-rest-controller-execute","label":"Create user withdraw settings request.","className":"api-method post"},{"type":"doc","id":"caas/endpoints/get-user-withdraw-setting-request-by-id-controller-execute","label":"Get user withdraw settings request.","className":"api-method get"}]},{"type":"category","label":"Utils | User Withdraw Settings","items":[{"type":"doc","id":"caas/endpoints/get-all-user-withdraw-setting-rest-controller-execute","label":"List user's withdraw settings.","className":"api-method get"},{"type":"doc","id":"caas/endpoints/delete-user-withdraw-setting-rest-controller-execute","label":"Delete an user withdraw setting","className":"api-method delete"}]},{"type":"category","label":"Health","items":[{"type":"doc","id":"caas/endpoints/health-controller-execute","label":"Health check path.","className":"api-method get"}]},{"type":"category","label":"NuPay | Checkout","items":[{"type":"doc","id":"caas/endpoints/nu-pay-cancel-payment-controller-execute","label":"Cancel payment.","className":"api-method post"},{"type":"doc","id":"caas/endpoints/nu-pay-create-payment-controller-execute","label":"Create new payment.","className":"api-method post"},{"type":"doc","id":"caas/endpoints/nu-pay-get-all-payment-controller-execute","label":"Get all payments.","className":"api-method get"},{"type":"doc","id":"caas/endpoints/nu-pay-get-by-id-payment-controller-execute","label":"Get payment by id.","className":"api-method get"},{"type":"doc","id":"caas/endpoints/nu-pay-create-refund-controller-execute","label":"Create refund.","className":"api-method post"}]},{"type":"category","label":"NuPay | Pre-Checkout","items":[{"type":"doc","id":"caas/endpoints/pre-checkout-controller-execute","label":"Pre Checkout.","className":"api-method post"}]},{"type":"category","label":"PicPay | Checkout","items":[{"type":"doc","id":"caas/endpoints/create-refund-controller-execute","label":"Create PicPay payment refund.","className":"api-method post"},{"type":"doc","id":"caas/endpoints/create-payment-controller-execute","label":"Create a new PicPay payment.","className":"api-method post"},{"type":"doc","id":"caas/endpoints/get-payment-status-controller-execute","label":"Get PicPay payment statyus.","className":"api-method get"}]},{"type":"category","label":"PicPay | Pre-Checkout","items":[{"type":"doc","id":"caas/endpoints/create-pre-checkout-controller-execute","label":"Create new Picpay Pre-Checkout payment.","className":"api-method post"}]},{"type":"category","label":"Cielo | Checkout","items":[{"type":"doc","id":"caas/endpoints/credit-transaction-controller-execute","label":"Create new credit transaction.","className":"api-method post"},{"type":"doc","id":"caas/endpoints/capture-payment-controller-execute","label":"Capture notification hook.","className":"api-method post"},{"type":"doc","id":"caas/endpoints/non-authenticated-debit-transaction-controller-execute","label":"Create new non authenticated debit transaction.","className":"api-method post"},{"type":"doc","id":"caas/endpoints/authenticated-debit-transaction-controller-execute","label":"Create new authenticated debit transaction.","className":"api-method post"},{"type":"doc","id":"caas/endpoints/get-payment-controller-execute","label":"Get checkout info.","className":"api-method get"},{"type":"doc","id":"caas/endpoints/cancel-transaction-controller-execute","label":"Request a refund.","className":"api-method put"}]},{"type":"category","label":"Cielo | Pre-Checkout","items":[{"type":"doc","id":"caas/endpoints/create-cielo-pre-checkout-controller-execute","label":"Create new pre checkout.","className":"api-method post"}]},{"type":"category","label":"Reports","items":[{"type":"doc","id":"caas/endpoints/generate-statement-export-rest-controller-execute","label":"Request statement export file.","className":"api-method post"},{"type":"doc","id":"caas/endpoints/generate-pix-statement-export-rest-controller-execute","label":"Request pix statement export file.","className":"api-method post"},{"type":"doc","id":"caas/endpoints/get-all-report-pix-statement-rest-controller-execute","label":"Get all report pix statement.","className":"api-method get"}]},{"type":"category","label":"Storage","items":[{"type":"doc","id":"caas/endpoints/get-statement-file-by-date-rest-controller-execute","label":"Request statement file by date.","className":"api-method get"},{"type":"doc","id":"caas/endpoints/download-file-by-id-rest-controller-execute","label":"Download file by ID.","className":"api-method get"}]}];