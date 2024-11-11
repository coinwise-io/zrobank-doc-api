# Changelog

##  May 24, 2024
### Release 1.34.3
### Pix
#### Fixes
- Error handling in route GET v3/pix/devolutions/{id}

##  June 11, 2024
### Release 1.35.0
### Pix
#### New features
- The field beneficiary_branch_number info was added on deposits and devolution_received webhook
- A new pix limit was created for same ownership transactions
- Now filtering deposits by TXID is allowed
- The field beneficiary_branch_number was added in deposit list response
#### Fixes
- Handling error when trying to register a duplicated pix key

## July 19, 2024
### Release 1.38.0
### Wallets
#### New Features
- Now the pix key registration is linked to the pix account number, which allows it to have specific pix keys for wallets.
- Now the pix deposit flow is linked to the pix account number, which allows wallets to receive pix by branch and account ,pix key and QR code.
- Using data from the wallet owner user to register and issue pix payment receipts via static and dynamic QR codes.

## July 23, 2024
### Release 1.39.0
### General
#### Fixes
- Now users that received an internal transaction can view the transaction's data in its statement.

---------
## Release 1.40.1
### General
#### Fixes
- Adjustment in the cancellation of infractions received by the PSP. Now, when a breach is cancelled, the cancellation is reflected in both Z.ro Bank and JD.

### Release 1.40.3
### General
#### Fixes
- Inclusion of information in metrics to identify corporate users in the Paas application.

## September 18, 2024
### Release 1.41.0
### General
- New extract and export of operations extract
### Subaccounts
- It is now possible to receive pix returns directly in a subaccount
- It is now possible to cashout directly from the subaccount as an admin

