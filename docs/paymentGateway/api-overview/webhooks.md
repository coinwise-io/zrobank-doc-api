import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Webhooks

Your account can be configured so that when certain events occur on your account, a HTTP POST request containing JSON data pertaining to that event is sent to one or more URLs of your choosing. These URLs can be configured inside your settings making a request to our team. Notifications of all events listed below are sent to all the configured URLs.
<br />

## Types of webhooks

| Type                              | Description                                      |
| --------------------------------- | -------------------------------------------------|
| ACQUIRING_TRANSACTION_AUTHORIZED  | Is triggered when the transaction is authorized. |
| ACQUIRING_TRANSACTION_DECLINED    | Is triggered when the transaction is declined.   |
| ACQUIRING_TRANSACTION_FAILED      | Is triggered when the transaction is failed.     |

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
  <TabItem value="Authorized">

```json
{
  "id": "0197f06f-cb13-78fd-9396-6e66fa7db8ae",
  "user_id": "df4fbd15-6c3e-4327-9bb2-1cfd7f5d6b43",
  "operation_id": null,
  "wallet_id": "5a78db37-95e0-48b5-b3f7-e8f4c1e3ed9f",
  "type": "ACQUIRING_TRANSACTION_AUTHORIZED",
  "status": "AUTHORIZED",
  "sales_channel": "INTEGRATION",
  "payment_method": "CREDIT",
  "amount": 12990,
  "currency_tag": "BRL",
  "third_part_name": "João Silva",
  "third_part_email": "joao.silva@example.com",
  "third_part_phone_number": "+551191234-5678",
  "third_part_document_type": "CPF",
  "third_part_document": "12345678900",
  "third_part_address_street": "Rua das Flores",
  "third_part_address_number": 123,
  "third_part_address_city": "São Paulo",
  "third_part_address_federativeUnit": "SP",
  "third_part_address_zipCode": "01234567",
  "third_part_address_country": "BR",
  "third_part_address_neighborhood": "Jardins",
  "third_part_address_complement": "Apto 45",
  "card_last_numbers": "1234",
  "installments": 3,
  "authorized_date": "2025-07-09T14:00:00Z",
  "declined_date": null,
  "cancelled_date": null,
  "settlement_date": null,
  "scheduled_settlement_date": "2025-07-10T00:00:00Z",
  "cancelled_max_date": "2025-07-11T23:59:59Z"
}
```

  </TabItem>

  <TabItem value="Declined">

```json
{
  "id": "0197f06f-cb13-78fd-9396-6e66fa7db8ae",
  "user_id": "df4fbd15-6c3e-4327-9bb2-1cfd7f5d6b43",
  "operation_id": null,
  "wallet_id": "5a78db37-95e0-48b5-b3f7-e8f4c1e3ed9f",
  "type": "ACQUIRING_TRANSACTION_DECLINED",
  "status": "DECLINED",
  "sales_channel": "INTEGRATION",
  "payment_method": "CREDIT",
  "amount": 12990,
  "currency_tag": "BRL",
  "third_part_name": "João Silva",
  "third_part_email": "joao.silva@example.com",
  "third_part_phone_number": "+551191234-5678",
  "third_part_document_type": "CPF",
  "third_part_document": "12345678900",
  "third_part_address_street": "Rua das Flores",
  "third_part_address_number": 123,
  "third_part_address_city": "São Paulo",
  "third_part_address_federativeUnit": "SP",
  "third_part_address_zipCode": "01234567",
  "third_part_address_country": "BR",
  "third_part_address_neighborhood": "Jardins",
  "third_part_address_complement": "Apto 45",
  "card_last_numbers": "1234",
  "installments": 3,
  "authorized_date": null,
  "declined_date": "2025-07-09T14:00:00Z",
  "cancelled_date": null,
  "settlement_date": null,
  "scheduled_settlement_date": null,
  "cancelled_max_date": null
}
```

  </TabItem>

  <TabItem value="Failed">

```json
{
  "id": "0197f06f-cb13-78fd-9396-6e66fa7db8ae",
  "user_id": "df4fbd15-6c3e-4327-9bb2-1cfd7f5d6b43",
  "operation_id": null,
  "wallet_id": "5a78db37-95e0-48b5-b3f7-e8f4c1e3ed9f",
  "type": "ACQUIRING_TRANSACTION_FAILED",
  "status": "FAILED",
  "sales_channel": "INTEGRATION",
  "payment_method": "CREDIT",
  "amount": 12990,
  "currency_tag": "BRL",
  "third_part_name": "João Silva",
  "third_part_email": "joao.silva@example.com",
  "third_part_phone_number": "+551191234-5678",
  "third_part_document_type": "CPF",
  "third_part_document": "12345678900",
  "third_part_address_street": "Rua das Flores",
  "third_part_address_number": 123,
  "third_part_address_city": "São Paulo",
  "third_part_address_federativeUnit": "SP",
  "third_part_address_zipCode": "01234567",
  "third_part_address_country": "BR",
  "third_part_address_neighborhood": "Jardins",
  "third_part_address_complement": "Apto 45",
  "card_last_numbers": "1234",
  "installments": 3,
  "authorized_date": null,
  "declined_date": null,
  "cancelled_date": null,
  "settlement_date": null,
  "scheduled_settlement_date": null,
  "cancelled_max_date": null,
  "failed_code": "ACQUIRING_TRANSACTION_NOT_FOUND",
  "failed_message": "Transação de adquirência não encontrada."
}
```

  </TabItem>
</Tabs>
