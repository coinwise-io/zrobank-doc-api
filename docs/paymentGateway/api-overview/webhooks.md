import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Webhooks

Your account can be configured so that when certain events occur on your account, a HTTP POST request containing JSON data pertaining to that event is sent to one or more URLs of your choosing. These URLs can be configured inside your settings making a request to our team. Notifications of all events listed below are sent to all the configured URLs.
<br />

## Types of webhooks

| Type                | Description                                        |
| ------------------- | ---------------------------------------------------|
| TRANSACTION_UPDATE  | Is triggered when the status of a transaction has changed |

## Transaction Status 

| Status                | Description                                        |
| -------------------   | ---------------------------------------------------|
| PENDING               | The transaction is pending authorization. If the sale is refused, the status will change to CANCELLED, otherwise to AUTHORIZED. |
| AUTHORIZED            | The transaction was Authorized. |
| CANCELLED             | The transaction was Not Authorized. |
| SETTLED               | The transaction was Settled. |
| REVERTED              | The transaction was Canceled, due to a chargeback or refund.  |



<br /><br />

## Credentials (Not required)

| Type                   | Description                                                        |
| ---------------------- | ------------------------------------------------------------------ |
| Authorization Basic    | base64<username:password>                                          |
| Authorization Bearer   | API key or token.                                                  |
| Signature Verification | Shared secret key.                                                 |
| Custom header          | Header name is not previous defined , using with api key or token. |
| mTLS                   | TLS certificate.                                                   |

<br /><br />

## Payloads (Version 1)

<Tabs>
  <TabItem value="TRANSACTION UPDATE">

```json
{
  "payment_id": "4b344f93-68fb-4ddc-83b4-6288eb7c63ce",
  "operation": "payment_status_change",
  "status": "SETTLED",
  "sales_channel": "INTEGRATION",
  "transaction_method": "CP",
  "payment_method": "CREDIT",
  "amount_local": 100,
  "amount_original": 20,
  "amount_iof": 2,
  "currency_local": "BRL",
  "currency_original": "BRL",
  "currency_rate": 5,
  "buyer_name": "John Doe",
  "buyer_email": "john.doe@example.com",
  "buyer_address": {
    "street": "Main Street",
    "number": 123,
    "city": "São Paulo",
    "federativeUnit": "SP",
    "zipCode": "01234-567",
    "country": "Brazil",
    "neighborhood": "Downtown",
    "complement": "Apt 456"
  },
  "buyer_phone_number": "+5511999998888",
  "buyer_document_type": "CPF",
  "buyer_document": "12345678901",
  "card_last_numbers": "1234",
  "installments": 1,
  "refund_id": "b321ef4f-eb5b-40a6-b862-dc47d6861ccc",
  "chargeback_id": "9c5ea602-e41a-452c-9698-ab05b761b189",
  "creation_date": "2023-01-01T10:00:00.000Z",
  "last_update_date": "2023-01-01T11:00:00.000Z",
  "confirmation_date": "2023-01-01T11:00:00.000Z",
  "expected_settlement_date": "2023-02-02T12:00:00.000Z"
}
```

  </TabItem>
</Tabs>
