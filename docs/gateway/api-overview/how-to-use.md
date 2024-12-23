# How to use

## Customer Bank Account Registration

The Zro Gateway has a feature that limits the bank accounts authorized for deposits and/or withdrawals made by customers.

By default, this protection is disabled and can be activated upon request to our team.

Once activated, customers will only be able to make deposits and/or withdrawals to bank accounts that have been previously registered. The management of these accounts can be done in two ways, which are detailed below.

According to BACEN regulations, there is a limit of up to 3 accounts per customer.

## QR Code Generation

One of the ways to manage bank accounts is through the QR Code generation endpoint. In this process, all permitted accounts must be provided in each request.

Example:

URI:

```http
POST /api/transaction/generate_qr_code_pix
```

Body:

```json
{
  "value": 10,
  "description": "Cobrança de deposito",
  "client_name": "Johnny",
  "client_email": "client@email.com",
  "client_document": "00000000000",
  "merchant_id": "271e4016-47de-45e0-9340-6f2560ce3a90",
  "expiration_date": "2024-01-25T18:25:43.000Z",
  "client_bank_accounts": [
    {
      "bank_ispb": "11111111",
      "account_number": "111111",
      "account_branch": "1111"
    },
    {
      "bank_ispb": "22222222",
      "account_number": "222222",
      "account_branch": "2222"
    }
  ]
}
```

In the example above, the customer with document number 00000000000 will be authorized to make deposits and/or withdrawals to accounts 111111 and 222222. If the deposit is made through an account other than the registered ones, the transaction will be reversed. And if a different account is provided in the withdrawal request, the transaction will not be processed.

The list of accounts sent will always replace the previous one. For example, if the next QR Code generated for this customer only includes account 111111, that will be the only account authorized for withdrawals, while account 222222 will be removed.

## Customer Bank Account Management Endpoints

Customer bank account management can be done through different endpoints provided by the API. The system will always consider the last account submission, whether through the QR Code generation endpoint or the endpoints listed below.

Here are the main operations:

### List Bank Accounts of a Customer

Returns all bank accounts registered for the customer.

```http
GET /api/clients/{document}/bank-accounts
```

> **document** (required): Customer's document (CPF).

### Define Bank Accounts

Adds new bank accounts to the customer. The provided accounts will replace the previous ones. This endpoint behaves the same as the one used for QR Code generation.

```http
PUT /api/clients/{document}/bank-accounts
```

> **document** (required): Customer's document (CPF).

### Register Bank Accounts

This endpoint allows registering one bank account at a time for the customer.

```http
POST /api/clients/{document}/bank-accounts
```

> **document** (required): Customer's document (CPF).

### Delete Bank Account

Removes a specific bank account associated with the customer.

```http
DELETE /api/clients/{document}/bank-accounts/{bankAccountId}
```

> **document** (required): Customer's document (CPF).

> **bankAccountId**: ID of the bank account to be removed.
