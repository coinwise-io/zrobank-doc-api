# Changelog

##  March 29, 2023
### Release 1.7.0
#### :seedling: New features
- New pix key ownership time process from 14 days max to 30 days max following central bank resolution
- New version of refresh token
- New operation receipt for Subaccounts
- New endpoint to list a wallet account by its id
- New endpoint to delete logged user permission to access a certain wallet
- New endpoint to delete another user access to a certain wallet of mine

##  April 3, 2023
### Release 1.8.0
#### :seedling: New feature
- Adding cache for pix keys decode
- Allowing users to delete a pix key on error status
#### :shamrock: Improvement
- Limiting amount of pix key decodes by user


##  April 17, 2023
### Release 1.9.0
#### :seedling: New feature
- Masking all document fields for natural person on PaaS payloads

##  May 8, 2023
### Release 1.10.0

#### :collision: Breaking changes
- Adding a unique identifier on the header of every PaaS endpoint
- Added on API PaaS the parameter wallet on all sending pix endpoints

#### :shamrock: Improvement
- Adding fee field to the payload of p2p transactions endpoint to inform the fee amount on that transaction
- Added on API PaaS the parameter wallet on all sending pix endpoints

#### :wrench: Fixes
- Allowing legal person to have up to 20 pix keys
- Automatically returning to origin pix deposits for deleted accounts

## May 23, 2023
### Release 1.11.1

#### :wrench: Fixes
- Allowing P2P transfers between the same wallet

## June 6, 2023
### Release 1.11.2

#### :shamrock: Improvement
- Changing confirmation code wait time from 60s to 30s when creating a pix key