# Changelog

##  April 16, 2024
### Release 1.20.0
### :door: Gateway
#### :seedling: New features
- New endpoint for full or partial refund requests: /api/refunds
#### :hammer_and_wrench: Fixes
- Handling 'document not informed' error in withdrawl request
- Fixed the Schema of the PUT endpoint of api/transactions, which was repeating the 'pending' status and did not have the 'paid' status

##  April 30, 2024
### Release 1.21.0
### :door: Gateway
#### :hammer_and_wrench: Fixes
- Handling error that allowed several reversal attempts using the same UUID
- Treatment carried out to return 422 instead of 500 when the client tries to generate a new QR Code without changing the merchant_id

##  June 17, 2024
### Release 1.23.0
### :door: Gateway
#### :seedling: New features
- Webhook sending for reversed withdrawls

