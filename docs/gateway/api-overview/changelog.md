# Changelog

##  April 16, 2024
### Release 1.20.0
### Gateway
#### New features
- New endpoint for full or partial refund requests: /api/refunds
#### Fixes
- Handling 'document not informed' error in withdrawl request
- Fixed the Schema of the PUT endpoint of api/transactions, which was repeating the 'pending' status and did not have the 'paid' status

##  April 30, 2024
### Release 1.21.0
### Gateway
#### Fixes
- Handling error that allowed several reversal attempts using the same UUID
- Treatment carried out to return 422 instead of 500 when the client tries to generate a new QR Code without changing the merchant_id

##  June 17, 2024
### Release 1.23.0
### Gateway
#### New features
- Webhook sending for reversed withdrawls

## July 1, 2024
### Release 1.24.0
### API Gateway
- New table created to centralize P2Ps
- Filter implemented by transaction type in GET api/v2/transactions
#### Fixes
- Fixed to red the status color of disapproved payment requests
- Conversions are now working normally

##  July 18, 2024
### Release 1.26.0
### API Gateway
- Implemented telemetry to monitor usage, errors and system performance
- Transaction summation was migrated to Prometheus
### Fixes
- Document validation on the payment request screen is now working correctly

## August 22, 2024
### Release 1.27.0
### API Gateway
- Disable third-party deposit via API
- Create, delete and list Pix keys in Asaas via API
- Accept deposits via Pix key, if enabled in company policies
### Fixes
- Added ‘payment_rejected’ status to swagger documentation
- The system is now saving webhooks data resent for all statuses in the logs
- Random KYC verification queries have been optimized to reduce costs
- Fixed an error that prevented the customer from changing their PIN
- Fixed the file types that can be imported when requesting payments to only accept PDF

## September 12, 2024
### Release 1.28.0 
### Fixes
- Fixed the number of decimal places displayed in the updated balance after a cryptocurrency conversion, ensuring the value is displayed correctly depending on the currency
- Fixed the message displayed when deleting a card, which was showing incorrect information
- Fixed the error that prevented the correct display of receipts for conversion operations, allowing the customer to view the receipts for transactions
- Fixed the display of customer information in incoming transactions, hiding unnecessary fields when the operation does not involve the use of a QR Code
- Fixed the ‘Client’ nomenclature when displaying details of operations by Pix key

## October 30, 2024 
### Release 1.29.1
### API Gateway
- Removed the rule that prevented withdrawal requests with fields sent in capital letters
- Adjusted the code so that the gateway recognizes failed payment and refund events sent in the Z.ro webhook
