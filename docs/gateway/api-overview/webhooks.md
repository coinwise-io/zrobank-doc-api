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
- **Returned Withdraw**: URL to receive returned withdraw events.
- **KYC**: URL to receive KYC events.

All URLs can be the same or different, depending on your requirements.

## Webhook Security

By default, all webhooks are sent without any authentication. If you need to secure your webhooks, you can use the

### OAuth2 Client Credentials Flow

If all the URLs provided are an authenticated URL, we support the **OAuth2 Client Credentials** flow for authentication.

- You need to provide the `client_id`, `client_secret` and `token endpoint` (commonly `/oauth/token`) to the ZroBank
  Integration Team.
- We will call the token endpoint to get the access token.
- All the next webhooks will include the access token in the `Authorization` header.

You can read more about the OAuth2 Client Credentials
flow [here](https://www.oauth.com/oauth2-servers/access-tokens/client-credentials/).

## Webhook Payloads

This section provides examples of the latest webhook payload versions. If you are using an outdated version, we
recommend updating or contacting our [Support Team](/overview/support) for assistance.

### Transactional Webhooks

Transactional Webhooks notify merchants of payment-related events, including payments, withdrawals, and
refunds. Below, you will find different webhook versions and their respective payload structures, along with a detailed
explanation of each field.

<Tabs>
  <TabItem value="V7 (Transactions)">

```json
{
  "status": "paid",
  "webhook_type": "transaction",
  "transaction_uuid": "e2e30fe2-f7cf-4310-808e-faa60d70e9ee",
  "description": "Payment Description",
  "value": "1.16",
  "payment_date": "2025-02-12T19:29:22.000000",
  "end_to_end_id": "E26264220202502121929xKDMdFWi5Q5",
  "merchant_id": "c50539dc-94de-495b-958a-324edf76b348",
  "client": {
    "name": "José da Silva",
    "cpf_cnpj": "12345678900"
  },
  "payer": {
    "name": "Maria Ferreira Da Silva",
    "cpf_cnpj": "***004714**",
    "bank_name": "Zro Pagamento S.A",
    "bank_ispb": "26264220",
    "paid_by_client": false,
    "kyc": {
      "ofLegalAge": true,
      "birthdate": "1955-01-16T00:00:00",
      "suspectedDeath": false,
      "pep": null,
      "age": 70
    }
  },
  "receiver": null,
  "refund": null,
  "bank_account_data": {
    "bank_name": "ZRO PAGAMENTOS S.A.",
    "bank_ispb": "26264220",
    "account_number": "5684",
    "account_digit": "1",
    "account_branch": "0001",
    "account_type": "CACC"
  }
}
```

  </TabItem>
  <TabItem value="V6/V5/V4 (Transactions)">

```json
{
  "status": "paid",
  "webhook_type": "transaction",
  "transaction_uuid": "e2e30fe2-f7cf-4310-808e-faa60d70e9ee",
  "description": "Payment Description",
  "value": "1.16",
  "payment_date": "2025-02-12T19:29:22.000000",
  "end_to_end_id": "E26264220202502121929xKDMdFWi5Q5",
  "merchant_id": "c50539dc-94de-495b-958a-324edf76b348",
  "client": {
    "name": "José da Silva",
    "cpf_cnpj": "12345678900"
  },
  "payer": {
    "name": "Maria Ferreira Da Silva",
    "cpf_cnpj": "***004714**",
    "bank_name": "Zro Pagamento S.A",
    "bank_ispb": "26264220",
    "paid_by_client": false,
    "kyc": {
      "ofLegalAge": true,
      "birthdate": "1955-01-16T00:00:00",
      "suspectedDeath": false,
      "pep": null,
      "age": 70
    }
  },
  "receiver": null,
  "refund": null,
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
  <TabItem value="V3 (Transactions)">

```json
{
  "status": "paid",
  "webhook_type": "transaction",
  "transaction_uuid": "e2e30fe2-f7cf-4310-808e-faa60d70e9ee",
  "description": "Payment Description",
  "value": "1.16",
  "payment_date": "2025-02-12T19:29:22.000000",
  "end_to_end_id": "E26264220202502121929xKDMdFWi5Q5",
  "merchant_id": "c50539dc-94de-495b-958a-324edf76b348",
  "client": {
    "name": "José da Silva",
    "cpf_cnpj": "12345678900"
  },
  "payer": {
    "name": "Maria Ferreira Da Silva",
    "cpf_cnpj": "***004714**",
    "bank_name": "Zro Pagamento S.A",
    "bank_ispb": "26264220",
    "paid_by_client": false,
    "kyc": {
      "ofLegalAge": true,
      "birthdate": "1955-01-16T00:00:00",
      "suspectedDeath": false,
      "pep": null,
      "age": 70
    }
  },
  "receiver": null,
  "refund": null
}
```

  </TabItem>
  <TabItem value="V7 (Withdraw)">

```json
{
  "status": "paid",
  "webhook_type": "withdraw",
  "transaction_uuid": "01dea582-a6ad-59f8-8ec4-7dfedf23fd50",
  "description": "Payment Description",
  "value": "1.01",
  "payment_date": "2025-02-12T19:29:22.000000",
  "end_to_end_id": "E26264220202502121929xKDMdFWi5Q5",
  "merchant_id": "2b541929-6ea2-4259-913e-45edd05178d0",
  "client": {
    "name": "Maria Ferreira Da Silva",
    "cpf_cnpj": "12345678900"
  },
  "payer": null,
  "receiver": {
    "name": "Maria Ferreira Da Silva",
    "cpf_cnpj": "12345678900",
    "bank_name": "Zro Pagamento S.A",
    "bank_ispb": "26264220"
  },
  "refund": null,
  "bank_account_data": {
    "bank_name": "Zro Pagamento S.A",
    "bank_ispb": "26264220",
    "account_number": "8720077",
    "account_digit": "7",
    "account_branch": "0001",
    "account_type": "CACC"
  }
}
```

  </TabItem>
  <TabItem value="V6/V5/V4 (Withdraw)">

```json
{
  "status": "paid",
  "webhook_type": "withdraw",
  "transaction_uuid": "01dea582-a6ad-59f8-8ec4-7dfedf23fd50",
  "description": "Payment Description",
  "value": "1.01",
  "payment_date": "2025-02-12T19:29:22.000000",
  "end_to_end_id": "E26264220202502121929xKDMdFWi5Q5",
  "merchant_id": "2b541929-6ea2-4259-913e-45edd05178d0",
  "client": {
    "name": "Maria Ferreira Da Silva",
    "cpf_cnpj": "12345678900"
  },
  "payer": null,
  "receiver": {
    "name": "Maria Ferreira Da Silva",
    "cpf_cnpj": "12345678900",
    "bank_name": "Zro Pagamento S.A",
    "bank_ispb": "26264220"
  },
  "refund": null,
  "bank_account_data": {
    "bank_name": "Zro Pagamento S.A",
    "bank_ispb": "26264220",
    "account_number": "8720077",
    "account_branch": "0001",
    "account_type": "CACC"
  }
}
```

  </TabItem>
  <TabItem value="V6/V5 (Refund)">

```json
{
  "status": "paid",
  "webhook_type": "refund",
  "transaction_uuid": "1f1a1031-2cb7-474e-ad13-deb5a8f92d27",
  "description": "Refund Description",
  "value": "1.00",
  "payment_date": "2025-02-12T21:30:51.000000",
  "end_to_end_id": "D26264220202502122130unPayQe0TZA",
  "merchant_id": "f157244c-0d1f-4fd8-9329-e3222a981e76",
  "client": {
    "name": "José da Silva",
    "cpf_cnpj": "12345678900"
  },
  "payer": null,
  "receiver": {
    "name": "José da Silva",
    "cpf_cnpj": "12345678900",
    "bank_name": "FACTA S.A. CFI",
    "bank_ispb": "15581638"
  },
  "refund": {
    "transaction_parent_uuid": "dbbb6c6f-a7d5-4162-9569-4aa0de58c6e2",
    "transaction_parent_merchant_id": "07d464eb-df1c-45a0-9e43-b275cec7b1da",
    "error_code": "INVALID_PAYER_DOCUMENT"
  },
  "bank_account_data": {
    "bank_name": "FACTA S.A. CFI",
    "bank_ispb": "15581638",
    "account_number": "152",
    "account_branch": "5856",
    "account_type": ""
  }
}
```

  </TabItem>
 <TabItem value="V4 (Refund)">

```json
{
  "status": "paid",
  "webhook_type": "refund",
  "transaction_uuid": "1f1a1031-2cb7-474e-ad13-deb5a8f92d27",
  "description": "Refund Description",
  "value": "1.00",
  "payment_date": "2025-02-12T21:30:51.000000",
  "end_to_end_id": "D26264220202502122130unPayQe0TZA",
  "merchant_id": "f157244c-0d1f-4fd8-9329-e3222a981e76",
  "client": {
    "name": "José da Silva",
    "cpf_cnpj": "12345678900"
  },
  "payer": null,
  "receiver": {
    "name": "José da Silva",
    "cpf_cnpj": "12345678900",
    "bank_name": "FACTA S.A. CFI",
    "bank_ispb": "15581638"
  },
  "refund": {
    "transaction_parent_uuid": "dbbb6c6f-a7d5-4162-9569-4aa0de58c6e2"
  },
  "bank_account_data": {
    "bank_name": "FACTA S.A. CFI",
    "bank_ispb": "15581638",
    "account_number": "152",
    "account_branch": "5856",
    "account_type": ""
  }
}
```

  </TabItem>
</Tabs>

#### Fields Description

| Field                                   | Possible Values/Format                                                                                                                                               | Description                                                                        |
|-----------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| `status`                                | `"paid"`, `"failed"`                                                                                                                                                 | The status of the transaction.                                                     |
| `webhook_type`                          | `"transaction"`, `"withdraw"`, `"refund"`                                                                                                                            | The type of the webhook event.                                                     |
| `transaction_uuid`                      | String (UUID format)                                                                                                                                                 | A unique identifier for the transaction.                                           |
| `description`                           | String                                                                                                                                                               | A description of the payment.                                                      |
| `value`                                 | Numeric String (e.g., `"10.75"`)                                                                                                                                     | The transaction amount in the respective currency.                                 |
| `payment_date`                          | String (ISO 8601 format, e.g., `"2023-01-01T12:11:39.090"`)                                                                                                          | The date and time when the payment was processed.                                  |
| `end_to_end_id`                         | String (alphanumeric)                                                                                                                                                | A unique identifier for tracking the transaction.                                  |
| `merchant_id`                           | String                                                                                                                                                               | A unique identifier passed by merchant to identify the transaction.                |
| `client`                                | Object                                                                                                                                                               | The client who generated the QR code, requested withdraw or received refund.       |
| `client.name`                           | String                                                                                                                                                               | The name of the client associated with the transaction.                            |
| `client.cpf_cnpj`                       | Numeric String (CPF: 11 digits, CNPJ: 14 digits)                                                                                                                     | The unmasked CPF or CNPJ of the client.                                            |
| `payer`                                 | (nullable) Object                                                                                                                                                    | The payer's data. Null when the `webhook_type` is **not** `transaction`.           |
| `payer.name`                            | String                                                                                                                                                               | The name of the payer.                                                             |
| `payer.cpf_cnpj`                        | String (CPF: 11 digits, CNPJ: 14 digits)                                                                                                                             | The payer’s CPF or CNPJ. May be masked.                                            |
| `payer.bank_name`                       | String                                                                                                                                                               | The name of the payer’s bank.                                                      |
| `payer.bank_ispb`                       | Numeric String (8-digit ISPB code)                                                                                                                                   | The ISPB (bank identifier) of the payer’s bank.                                    |
| `payer.paid_by_client`                  | Boolean: `true`, `false`                                                                                                                                             | Indicates if the payer is the client who generated the QR code.                    |
| `payer.kyc`                             | Object or Empty Object                                                                                                                                               | KYC (Know Your Customer) data for the payer. May be an empty object.               |
| `payer.kyc.ofLegalAge`                  | (nullable) Boolean                                                                                                                                                   | Indicates if the client is of legal age.                                           |
| `payer.kyc.birthdate`                   | (nullable) String (ISO format)                                                                                                                                       | The client’s birth date.                                                           |
| `payer.kyc.age`                         | (nullable) Integer                                                                                                                                                   | The client’s age.                                                                  |
| `payer.kyc.pep`                         | (nullable) Boolean                                                                                                                                                   | Indicates if the client is a PEP (Politically Exposed Person).                     |
| `payer.kyc.suspectedDeath`              | (nullable) Boolean                                                                                                                                                   | Indicates if the client is suspected to have passed away.                          |
| `receiver`                              | (nullable) Object                                                                                                                                                    | The receiver's data. Null when the `webhook_type` is not `withdraw` or `refund`.   |
| `receiver.name`                         | String                                                                                                                                                               | The name of the receiver.                                                          |
| `receiver.cpf_cnpj`                     | Numeric String (CPF: 11 digits, CNPJ: 14 digits)                                                                                                                     | The unmasked CPF or CNPJ of the receiver.                                          |
| `receiver.bank_name`                    | String                                                                                                                                                               | The name of the receiver’s bank.                                                   |
| `receiver.bank_ispb`                    | Numeric String (8-digit ISPB code)                                                                                                                                   | The ISPB (bank identifier) of the receiver’s bank.                                 |
| `refund`                                | (nullable) Object                                                                                                                                                    | Refund data. Null when the `webhook_type` is **not** `refund`.                     |
| `refund.transaction_parent_uuid`        | String (UUID format)                                                                                                                                                 | The UUID of the original transaction if this is a refund.                          |
| `refund.transaction_parent_merchant_id` | String (UUID format)                                                                                                                                                 | The merchant ID of the original transaction if this is a refund.                   |
| `refund.error_code`                     | ISPB_NOT_IN_PERMISSION_LIST", "INVALID_PAID_VALUE", "INVALID_PAYER_DOCUMENT", "KYC_RESTRICTION", "INVALID_PAYER_BANK_ACCOUNT", "INVALID_DEPOSIT_FROM_JURIDIC_PERSON" | Error code when an automatic (due to company policies validations) refund happens. |
| `bank_account_data`                     | Object                                                                                                                                                               | Payer's bank account data.                                                         |
| `bank_account_data.bank_name`           | String                                                                                                                                                               | The name of the bank where the QR code was paid.                                   |
| `bank_account_data.bank_ispb`           | Numeric String (8-digit ISPB code)                                                                                                                                   | The ISPB code of the bank.                                                         |
| `bank_account_data.account_number`      | Numeric String (may be empty)                                                                                                                                        | The account number from which the payment originated.                              |
| `bank_account_data.account_digit`       | Numeric String (may be empty)                                                                                                                                        | The account number digit from which the payment originated.                        |
| `bank_account_data.account_branch`      | Numeric String (may be empty)                                                                                                                                        | The branch number of the payer’s bank account.                                     |
| `bank_account_data.account_type`        | `"CACC"`, `"SVGS"`, `"SLRY"`, `"CASH"`, `"TRAN"`, `"TAXE"`, `"OTHR"` (may be empty)                                                                                  | The type of account.                                                               |

### KYC Webhook

The KYC (Know Your Customer) Webhook provides real-time verification data for payers involved in transactions (when
enabled). Below is the JSON payload structure returned by the webhook.

<Tabs>
  <TabItem value="V1">

```json
{
  "name": "José da Silva",
  "document": "12345678900",
  "age": 54,
  "ofLegalAge": true,
  "suspectedDeath": false,
  "pep": null,
  "merchantId": "761f802a-1635-4b21-acd0-858277cc5c45",
  "transactionUuid": "215e8f33-183f-4fd7-8ec1-346ca9999184"
}
```

  </TabItem>
</Tabs>

#### Fields Description

| Field             | Possible Values/Format | Description                                                     |
|-------------------|------------------------|-----------------------------------------------------------------|
| `name`            | String                 | Full name of the individual.                                    |
| `document`        | String Numbers Only    | Identification document number (e.g., CPF in Brazil).           |
| `age`             | Integer                | The age of the individual.                                      |
| `ofLegalAge`      | Boolean                | Indicates whether the individual is of legal age (18 or older). |
| `suspectedDeath`  | Boolean                | Indicates if there is suspicion of the individual’s death.      |
| `pep`             | (nullable) Boolean     | Politically Exposed Person status; `null` if not applicable.    |
| `merchantId`      | String (UUID format)   | Unique identifier for the merchant.                             |
| `transactionUuid` | String (UUID format)   | Unique identifier for the transaction.                          |

## Support

It’s always a pleasure to help you! If you need assistance with the integration or have any questions, please feel free
to use our documentation and do not hesitate to [contact us](/overview/support).
