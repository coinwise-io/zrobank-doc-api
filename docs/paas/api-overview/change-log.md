# Change Log

## Keys

:seedling: New feature

:shamrock: Improvement

:wrench: Fix

:fire: Breaking change

:lock: Security-related

------
### Release 1.10.0:

:wrench: Automatically returning to origin pix deposits for deleted accounts.

:wrench: Allowing legal person to have up to 20 pix keys. Before, the limit was 5 for both legal and natural people.

:fire: Adding a unique identifier on the header of every PaaS endpoint.

:fire: Added on API PaaS the parameter wallet on all sending pix endpoints. So now user has to choose from what wallet the money will be debited.

:shamrock: Adding fee field to the payload of p2p transactions endpoint to inform the fee amount on that transaction

