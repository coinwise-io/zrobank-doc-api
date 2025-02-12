import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Webhooks

Webhooks enable real-time communication by automatically sending HTTP requests when events occur. Unlike APIs that
require polling, webhooks push data to a specified URL, improving efficiency. Common uses include payment processing,
notifications, and automation.

The ZroBank API supports webhooks for various events, such as **payment status updates**, **withdraws**, **refunds** and
**KYC** (Know Your
Customer).

## Webhooks URLs

All webhook URLs must be **HTTPS** and publicly accessible. The ZroBank API sends a `POST` request to the URL with a
JSON
payload (example below).
These URLs must be provided to ZroBank Integration Team to enable the webhooks.

The URLs we need:

- **Payment Status Update**: URL to receive payment status updates.
- **Withdraw**: URL to receive withdraw events.
- **Refund**: URL to receive refund events.
- **KYC**: URL to receive KYC events.
- **Returned Withdraw**: URL to receive returned withdraw events.

All URLs can be the same or different, depending on your requirements.

## Webhook Security

### OAuth2 Client Credentials Flow

If all the URLs provided are an authenticated URL, we support the **OAuth2 Client Credentials** flow for authentication.

- You need to provide the `client_id`, `client_secret` and `token endpoint` (commonly `/oauth/token`) to the ZroBank
  Integration Team.
- We will call the token endpoint to get the access token.
- All the next webhooks will include the access token in the `Authorization` header.

You can read more about the OAuth2 Client Credentials
flow [here](https://www.oauth.com/oauth2-servers/access-tokens/client-credentials/).

## Webhook Payloads

<Tabs>
  <TabItem value="V5">

```json
{
  "status": "paid",
  "webhook_type": "transaction",
  "transaction_uuid": "123e4567-e89b-12d3-a456-426614174000",
  "description": "Payment Description",
  "value": 10.75,
  "payment_date": "2023-01-01T12:11:39.090",
  "end_to_end_id": "E1234567820232152928tWRD01e2fXX",
  "merchant_id": "3f49f95d-6c0e-4d2c-bdd0-40c20f372c42",
  "client": {
    "name": "Alice Smith",
    "cpf_cnpj": "000000000"
  },
  "payer": {
    "name": "Jose da Silva",
    "cpf_cnpj": " ***252670** ",
    "bank_name": "Zro Pagamento S.A",
    "bank_ispb": "26264220",
    "paid_by_client": false
  },
  "receiver": {
    "name": "RECEIVER11223",
    "cpf_cnpj": "XYZ Store",
    "bank_name": "contact@xyzstore.com",
    "bank_ispb": "+1-555-123-4567"
  },
  "refund": {
    "transaction_parent_uuid": "fb81f2f5-a8bc-4416-823a-abe5e213cd00",
    "transaction_parent_merchant_id": "aa5b2496-9929-4f4d-a2aa-ca15763bba61"
  },
  "bank_account_data": {
    "bank_name": "ZRO PAGAMENTOS S.A.",
    "bank_ispb": "26264220",
    "account_number": "56841",
    "account_branch": "0001",
    "account_type": "CACC"
  }
}
```

  </TabItem>
</Tabs>

### Fields Description

| Field                                   | Possible Values/Format                                                              | Description                                                                     |
|-----------------------------------------|-------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| `status`                                | `"paid"`, `"failed"`                                                                | The status of the transaction.                                                  |
| `webhook_type`                          | `"transaction"`, `"withdraw"`, `"refund"`                                           | The type of the webhook event.                                                  |
| `transaction_uuid`                      | String (UUID format)                                                                | A unique identifier for the transaction.                                        |
| `description`                           | String                                                                              | A description of the payment.                                                   |
| `value`                                 | Numeric String (e.g., `"10.75"`)                                                    | The transaction amount in the respective currency.                              |
| `payment_date`                          | String (ISO 8601 format, e.g., `"2023-01-01T12:11:39.090"`)                         | The date and time when the payment was processed.                               |
| `end_to_end_id`                         | Alphanumeric String                                                                 | A unique identifier for tracking the transaction.                               |
| `merchant_id`                           | String                                                                              | A unique identifier passed by merchant to identify the transaction.             |
| `client`                                | Object                                                                              | The client who generated the QR code, requested withdraw or received refund.    |
| `client.name`                           | String                                                                              | The name of the client associated with the transaction.                         |
| `client.cpf_cnpj`                       | Numeric String (CPF: 11 digits, CNPJ: 14 digits)                                    | The unmasked CPF or CNPJ of the client.                                         |
| `payer`                                 | (nullable) Object                                                                   | The payer's data. Null when the `webhook_type` is **not** `transaction`.        |
| `payer.name`                            | String                                                                              | The name of the payer.                                                          |
| `payer.cpf_cnpj`                        | String (CPF: 11 digits, CNPJ: 14 digits)                                            | The payer’s CPF or CNPJ. May be masked.                                         |
| `payer.bank_name`                       | String                                                                              | The name of the payer’s bank.                                                   |
| `payer.bank_ispb`                       | Numeric String (8-digit ISPB code)                                                  | The ISPB (bank identifier) of the payer’s bank.                                 |
| `payer.paid_by_client`                  | Boolean: `true`, `false`                                                            | Indicates if the payer is the client who generated the QR code.                 |
| `payer.kyc`                             | Object or Empty Object                                                              | KYC (Know Your Customer) data for the payer. May be an empty object.            |
| `payer.kyc.ofLegalAge`                  | (nullable) Boolean                                                                  | Indicates if the client is of legal age.                                        |
| `payer.kyc.birthdate`                   | (nullable) String (ISO format)                                                      | The client’s birth date.                                                        |
| `payer.kyc.age`                         | (nullable) Integer                                                                  | The client’s age.                                                               |
| `payer.kyc.pep`                         | (nullable) Boolean                                                                  | Indicates if the client is a PEP (Politically Exposed Person).                  |
| `payer.kyc.suspectedDeath`              | (nullable) Boolean                                                                  | Indicates if the client is suspected to have passed away.                       |
| `receiver`                              | (nullable) Object                                                                   | The receiver's data. Null when the `webhook_type` is not `withdraw` or `refund`. |
| `receiver.name`                         | Full name or business name                                                          | The name of the receiver.                                                       |
| `receiver.cpf_cnpj`                     | Numeric String (CPF: 11 digits, CNPJ: 14 digits)                                    | The unmasked CPF or CNPJ of the receiver.                                       |
| `receiver.bank_name`                    | String                                                                              | The name of the receiver’s bank.                                                |
| `receiver.bank_ispb`                    | Numeric String (8-digit ISPB code)                                                  | The ISPB (bank identifier) of the receiver’s bank.                              |
| `refund`                                | (nullable) Object                                                                   | Refund data. Null when the `webhook_type` is **not** `refund`.                  |
| `refund.transaction_parent_uuid`        | String (UUID format)                                                                | The UUID of the original transaction if this is a refund.                       |
| `refund.transaction_parent_merchant_id` | String (UUID format)                                                                | The merchant ID of the original transaction if this is a refund.                |
| `bank_account_data`                     | Object                                                                              | Payer's bank account data.                                                      |
| `bank_account_data.bank_name`           | String                                                                              | The name of the bank where the QR code was paid.                                |
| `bank_account_data.bank_ispb`           | Numeric String (8-digit ISPB code)                                                  | The ISPB code of the bank.                                                      |
| `bank_account_data.account_number`      | Numeric String (may be empty)                                                       | The account number from which the payment originated.                           |
| `bank_account_data.account_branch`      | Numeric String (may be empty)                                                       | The branch number of the payer’s bank account.                                  |
| `bank_account_data.account_type`        | `"CACC"`, `"SVGS"`, `"SLRY"`, `"CASH"`, `"TRAN"`, `"TAXE"`, `"OTHR"` (may be empty) | The type of account.                                                            |
