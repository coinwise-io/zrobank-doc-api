# Changelog

##  May 19, 2023

### Release 0.5.0

:globe_with_meridians: **API**

---
#### :collision: Breaking changes
- Adding a unique identifier on the header of every endpoint (UUID v4)
- Removing chargebacks webhooks

#### :seedling: New feature
- Changing permissions on Admin Dashboard to allow some users to view only information regarding them
- Adding parent transaction id on the header of P2P transfers endpoint
- Sending wallet transactions report to clients via email everyday
- Adding “fee” field on the payload of every p2p transaction


#### :wrench: Fixes
- Correcting total amount for all transaction types on API Admin

<br/>

:chart_with_upwards_trend: **Admin Front-end**

---

#### :seedling: New feature
- Adding email field when adding a new company

#### :wrench: Fixes
- Removing option to make a transfer on admin dashboard withdraw screen

<br/>

:man: **Client Front-end**

---
#### :seedling: New feature
- Allowing user to select a wallet that is not necessarily connected to gateway
- Changing permissions according to the following rules:
  - Deposits screen must be accessed by master accounts
  - Orders screens must be accessed by master accounts that have sub accounts and its subaccounts
  - Other screens must be accessed by all users who have a wallet on gateway

#### :wrench: Fixes
- Correcting request on loop bug when getting an error response after calling GET wallets endpoint


##  May 24, 2023
### Release 0.6.0

:globe_with_meridians: **API**

---
#### :seedling: New feature
- List all transactions data endpoint

<br/>

:chart_with_upwards_trend: **Admin Front-end**

---
#### :wrench: Fixes
- Fixed bug where it was not possible to filter by date on dashboard page

##  May 31, 2023
### Release 0.6.1

:globe_with_meridians: **API**

---
#### :seedling: New feature
- Not allowing QR codes with value greater than R$50.000 to be created


## June 6, 2023
### Release 0.7.0

:globe_with_meridians: **API**

---
#### :seedling: New feature
- Charging merchants present in the order for QR code fee (25 cents).


<br/>

:chart_with_upwards_trend: **Admin Front-end**

---

#### :seedling: New feature
- New area allowing admin to configure QR codes by company, amount allowed for 3rd party payment, and time.
- New area allowing admin to configure an automatic chargeback webhook by company.
- Option to configure by company an automatic chargeback for deposits received where the operation owner is a legal person.

<br/>

:man: **Client Front-end**

---
#### :collision: Breaking changes
- Implemented permission check logic so now different users with different roles can have different access to our Client dashboard


#### :seedling: New feature
- Create an account flow
- (For allowed users only) My pix keys area allowing user to create, confirm, list and delete a pix key
- (For allowed users only) Allowing user to make a payment by pix key, where the receiver pix key type is detected automatically
- (For allowed users only) Allowing user to generate static QR codes
- Allowing user to create, edit and delete a wallet. User will be able to view wallet owner’s name and wallet status.