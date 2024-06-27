# Changelog

##  May 24, 2024
### Release 1.34.3
### :large_blue_diamond: Pix
#### :hammer_and_wrench: Fixes
- Error handling in route GET v3/pix/devolutions/{id}

##  June 11, 2024
### Release 1.35.0
### :large_blue_diamond: Pix
#### :seedling: New features
- The field beneficiary_branch_number info was added on deposits and devolution_received webhook
- A new pix limit was created for same ownership transactions
- Now filtering deposits by TXID is allowed
- The field beneficiary_branch_number was added in deposit list response
#### :hammer_and_wrench: Fixes
- Handling error when trying to register a duplicated pix key
