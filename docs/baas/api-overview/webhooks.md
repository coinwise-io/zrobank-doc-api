import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Webhooks

Your account can be configured so that when certain events occur on your account, a HTTP POST request containing JSON data pertaining to that event is sent to one or more URLs of your choosing. These URLs can be configured inside your settings making a request to our team. Notifications of all events listed below are sent to all the configured URLs.
<br />

## Types of webhooks

| Type                           | Description                                         |
| ------------------------------ | --------------------------------------------------- |
| PAYMENT                        | When you send a pix payment.                        |
| PAYMENT FAILED                 | When you send a pix payment and it fails.           |
| DEVOLUTION                     | When you send a pix devolution.                     |
| DEVOLUTION FAILED              | When you send a pix devolution and it fails.        |
| DEVOLUTION RECEIVED            | When receive a pix devolution.                      |
| DEPOSIT                        | When receive a pix deposit.                         |
| ONBOARDING                     | When you create a new user onboarding               |
| ONBOARDING FAILED              | When you create a new user onboarding and it fails. |
| MERCHANT ONBOARDING KYC STATUS | When merchant onboarding KYC status is updated.     |
| WALLET ACCOUNT BALANCE UPDATED | When the balance is updated.                        |

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
  <TabItem value="Payment">

```json
{
  "id": "4b344f93-68fb-4ddc-83b4-6288eb7c63ce",
  "type": "PAYMENT",
  "end_to_end_id": "E26264220202404171729SrlHOwU3HqB",
  "txid": null,
  "operation_id": "0f0aca83-8ea1-5ecb-9fe9-d31782ef06fb",
  "amount": "270",
  "owner_name": "Zro Bolsao",
  "owner_person_type": "CNPJ",
  "owner_document": "00000000000000",
  "beneficiary_name": "Name",
  "beneficiary_person_type": "CPF",
  "beneficiary_document": "***000000**",
  "beneficiary_bank_name": "ZRO IP S/A",
  "beneficiary_bank_ispb": "26264220",
  "created_at": "2024-04-17T17:30:00.020Z"
}
```

  </TabItem>
  <TabItem value="Payment Failed">

```json
{
  "id": "77198133-185e-4c08-8252-f47c9b15785b",
  "type": "PAYMENT",
  "end_to_end_id": "E26264220202404171336mckyTdpt5VZ",
  "txid": null,
  "operation_id": null,
  "amount": "3",
  "owner_name": "Zro Bolsao",
  "owner_person_type": "CNPJ",
  "owner_document": "00000000000000",
  "beneficiary_name": "Name",
  "beneficiary_person_type": "CPF",
  "beneficiary_document": "***000000**",
  "beneficiary_bank_name": "ZRO IP S/A",
  "beneficiary_bank_ispb": "26264220",
  "error_code": "NOT_ENOUGH_FUNDS",
  "error_description": "Não há saldo disponível.",
  "created_at": "2024-04-17T13:36:21.188Z"
}
```

  </TabItem>
  <TabItem value="Devolution">

```json
{
  "id": "0a1d863e-98bd-49a3-916d-840a1ec0609f",
  "type": "DEVOLUTION",
  "end_to_end_id": "D26264220202404171733p6FuxQmuCKp",
  "operation_id": "fbfe1a0f-011f-5edb-a01d-19e669a6d853",
  "amount": "270",
  "owner_name": "Name",
  "owner_document": "***000000**",
  "owner_bank_ispb": "26264220",
  "owner_bank_name": "ZRO IP S/A",
  "beneficiary_name": "Zro Bolsao",
  "beneficiary_document": "00000000000000",
  "beneficiary_bank_name": "ZRO IP S/A",
  "beneficiary_bank_ispb": "26264220",
  "created_at": "2024-04-17T17:33:05.523Z"
}
```

  </TabItem>
  <TabItem value="Devolution Failed">

```json
{
  "id": "0a1d863e-98bd-49a3-916d-840a1ec0609f",
  "type": "DEVOLUTION",
  "end_to_end_id": "D26264220202404171733p6FuxQmuCKp",
  "operation_id": null,
  "amount": "270",
  "owner_name": "Name",
  "owner_document": "***000000**",
  "owner_bank_ispb": "26264220",
  "owner_bank_name": "ZRO IP S/A",
  "beneficiary_name": "Zro Bolsao",
  "beneficiary_document": "00000000000000",
  "beneficiary_bank_name": "ZRO IP S/A",
  "beneficiary_bank_ispb": "26264220",
  "error_code": "AB03",
  "error_description": "Liquidação da transação interrompida devido a timeout no SPI.",
  "created_at": "2024-04-17T17:33:05.523Z"
}
```

  </TabItem>
  <TabItem value="Devolution Received">

```json
{
  "id": "10b66e97-c747-4dcb-92ad-da1420a0a6b9",
  "type": "DEVOLUTION_RECEIVED",
  "end_to_end_id": "D26264220202404171733p6FuxQmuCKp",
  "txid": null,
  "operation_id": "fbfe1a0f-011f-5edb-a01d-19e669a6d853",
  "original_id": "4b344f93-68fb-4ddc-83b4-6288eb7c63ce",
  "original_end_to_end_id": "E26264220202404171729SrlHOwU3HqB",
  "amount": "270",
  "owner_name": "Name",
  "owner_document": "***000000**",
  "owner_bank_name": "ZRO IP S/A",
  "owner_bank_ispb": "26264220",
  "beneficiary_name": "Zro Bolsao",
  "beneficiary_document": "00000000000000",
  "beneficiary_bank_name": "ZRO IP S/A",
  "beneficiary_bank_ispb": "26264220",
  "created_at": "2024-04-17T17:33:05.712Z"
}
```

  </TabItem>
  <TabItem value="Deposit">

```json
{
  "id": "a839f358-0e39-409e-b9a5-5a56b18ba3f2",
  "type": "DEPOSIT",
  "end_to_end_id": "E26264220202404171333Hq7F9SWyvUE",
  "txid": null,
  "operation_id": "7da84c17-d40c-5bc1-9b69-867d1460736b",
  "amount": "63",
  "owner_name": "Zro Bolsao",
  "owner_document": "00000000000",
  "owner_bank_name": "ZRO IP S/A",
  "owner_bank_ispb": "26264220",
  "beneficiary_name": "Name",
  "beneficiary_account_number": "000000",
  "beneficiary_document": "***000000**",
  "beneficiary_bank_name": "ZRO IP S/A",
  "beneficiary_bank_ispb": "26264220",
  "created_at": "2024-04-17T13:33:41.071Z"
}
```

  </TabItem>

  <TabItem value="Onboarding">

```json
{
  "id": "9c4af5a2-6a6b-4e4e-8af8-e03a331b9c5a",
  "user_id": "c324fb70-db23-482c-a85e-ec3eb58d5941",
  "type": "ONBOARDING",
  "name": "John",
  "full_name": "John Doe",
  "genre": "M",
  "mother_name": "Jane Doe",
  "birth_date": "1984-11-03",
  "document": "11122233344",
  "phone_number": "5511955551234",
  "email": "new-user@zrobank.com.br",
  "active": true,
  "person_type": "LEGAL_PERSON",
  "legal_person_type": "LTDA",
  "address": {
    "zip_code": "96075858",
    "street": "Alameda",
    "number": 10,
    "neighborhood": "Alphaville",
    "city": "São Paulo",
    "federative_unit": "SP",
    "country": "Brasil",
    "complement": "flat 1201"
  },
  "nationality": "Brasileiro",
  "pep": true,
  "pep_since": "2015-02-18T18:38:09.412Z",
  "occupation_cbo_code": 0,
  "occupation_income": 0,
  "patrimony": 1299
}
```

  </TabItem>

  <TabItem value="Onboarding Failed">

```json
{
  "id": "4b344f93-68fb-4ddc-83b4-6288eb7c63ce",
  "user_id": "a379d727-5409-4b9f-9cae-902aed13efcd",
  "type": "ONBOARDING_FAILED",
  "name": "John",
  "full_name": "John Doe",
  "genre": "M",
  "mother_name": "Jane Doe",
  "birth_date": "1984-11-03",
  "document": "11122233344",
  "phone_number": "5511955551234",
  "email": "new-user@zrobank.com.br",
  "active": true,
  "person_type": "LEGAL_PERSON",
  "legal_person_type": "LTDA",
  "address": {
    "zip_code": "96075858",
    "street": "Alameda",
    "number": 10,
    "neighborhood": "Alphaville",
    "city": "São Paulo",
    "federative_unit": "SP",
    "country": "Brasil",
    "complement": "flat 1201"
  },
  "nationality": "Brasileiro",
  "pep": true,
  "pep_since": "2015-02-18T18:38:09.412Z",
  "occupation_cbo_code": 0,
  "occupation_income": 0,
  "patrimony": 1299,
  "failed_code": "DOCUMENT_INVALID",
  "failed_message": "Failed document onboarding."
}
```

  </TabItem>
  <TabItem value="Balance updated">

```json
{
  "id": "d3558873-388a-4a98-a185-578a03bce8e2",
  "user_id": "9d77c248-c5b5-4f6d-9d12-d1463dc49bd9",
  "wallet_uuid": "f08e96c8-b659-40bf-a1bd-5225ef4e5632",
  "wallet_name": "DEFAULT",
  "operation_id": "cb835846-47b2-4bad-abd3-56e8b0d65ffe",
  "type": "WALLET_ACCOUNT_BALANCE_UPDATED",
  "action": "credit" | "debit",
  "value": 100,
  "old_balance": 1000,
  "new_balance": 1100,
  "created_at": "2024-06-20T12:34:56.071Z"
}
```

  </TabItem>
  <TabItem value="Merchant Onboarding KYC Status">

```json
{
  "slug_merchant": "0897A2E2022D4B68AD15DB6204C11BE7",
  "document_id": "12345678000195",
  "dt_insert": "2025-02-04T10:30:00Z",
  "risk_analysis_status": "PENDING",
  "dt_risk_analysis_status": "2025-02-04T12:00:00Z",
  "risk_analysis_status_justification": "Documents pending for risk review"
}
```

  </TabItem>
</Tabs>

## Payloads (Version 2)

<Tabs>
  <TabItem value="Devolution Received">

```json
{
  "id": "10b66e97-c747-4dcb-92ad-da1420a0a6b9",
  "type": "DEVOLUTION_RECEIVED",
  "end_to_end_id": "D26264220202404171733p6FuxQmuCKp",
  "txid": null,
  "operation_id": "fbfe1a0f-011f-5edb-a01d-19e669a6d853",
  "original_id": "4b344f93-68fb-4ddc-83b4-6288eb7c63ce",
  "original_end_to_end_id": "E26264220202404171729SrlHOwU3HqB",
  "amount": "270",
  "owner_name": "Name",
  "owner_document": "***000000**",
  "owner_bank_name": "ZRO IP S/A",
  "owner_bank_ispb": "26264220",
  "beneficiary_name": "Name",
  "beneficiary_account_number": "000000",
  "beneficiary_branch_number": "0000",
  "beneficiary_document": "***000000**",
  "beneficiary_bank_name": "ZRO IP S/A",
  "beneficiary_bank_ispb": "26264220",
  "created_at": "2024-04-17T17:33:05.712Z"
}
```

  </TabItem>
  <TabItem value="Deposit">

```json
{
  "id": "a839f358-0e39-409e-b9a5-5a56b18ba3f2",
  "type": "DEPOSIT",
  "end_to_end_id": "E26264220202404171333Hq7F9SWyvUE",
  "txid": null,
  "operation_id": "7da84c17-d40c-5bc1-9b69-867d1460736b",
  "amount": "63",
  "owner_name": "Zro Bolsao",
  "owner_document": "00000000000",
  "owner_bank_name": "ZRO IP S/A",
  "owner_bank_ispb": "26264220",
  "beneficiary_name": "Name",
  "beneficiary_account_number": "000000",
  "beneficiary_branch_number": "0000",
  "beneficiary_document": "***000000**",
  "beneficiary_bank_name": "ZRO IP S/A",
  "beneficiary_bank_ispb": "26264220",
  "created_at": "2024-04-17T13:33:41.071Z"
}
```

  </TabItem>
  <TabItem value="Payment Failed">

```json
{
  "id": "77198133-185e-4c08-8252-f47c9b15785b",
  "type": "PAYMENT_FAILED",
  "end_to_end_id": "E26264220202404171336mckyTdpt5VZ",
  "txid": null,
  "operation_id": null,
  "amount": "3",
  "owner_name": "Zro Bolsao",
  "owner_person_type": "CNPJ",
  "owner_document": "00000000000000",
  "beneficiary_name": "Name",
  "beneficiary_person_type": "CPF",
  "beneficiary_document": "***000000**",
  "beneficiary_bank_name": "ZRO IP S/A",
  "beneficiary_bank_ispb": "26264220",
  "error_code": "NOT_ENOUGH_FUNDS",
  "error_description": "Não há saldo disponível.",
  "created_at": "2024-04-17T13:36:21.188Z"
}
```

  </TabItem>
  <TabItem value="Devolution Failed">

```json
{
  "id": "0a1d863e-98bd-49a3-916d-840a1ec0609f",
  "type": "DEVOLUTION_FAILED",
  "end_to_end_id": "D26264220202404171733p6FuxQmuCKp",
  "operation_id": null,
  "amount": "270",
  "owner_name": "Name",
  "owner_document": "***000000**",
  "owner_bank_ispb": "26264220",
  "owner_bank_name": "ZRO IP S/A",
  "beneficiary_name": "Zro Bolsao",
  "beneficiary_document": "00000000000000",
  "beneficiary_bank_name": "ZRO IP S/A",
  "beneficiary_bank_ispb": "26264220",
  "error_code": "AB03",
  "error_description": "Liquidação da transação interrompida devido a timeout no SPI.",
  "created_at": "2024-04-17T17:33:05.523Z"
}
```

  </TabItem>
</Tabs>

## Payloads (Version 3)

<Tabs>
  <TabItem value="Deposit">

```json
{
  "id": "a839f358-0e39-409e-b9a5-5a56b18ba3f2",
  "type": "DEPOSIT",
  "end_to_end_id": "E26264220202404171333Hq7F9SWyvUE",
  "txid": null,
  "operation_id": "7da84c17-d40c-5bc1-9b69-867d1460736b",
  "amount": "63",
  "owner_name": "Zro Bolsao",
  "owner_document": "00000000000",
  "owner_bank_name": "ZRO IP S/A",
  "owner_bank_ispb": "26264220",
  "owner_branch_number": "0000",
  "owner_account_number": "000000",
  "beneficiary_name": "Name",
  "beneficiary_account_number": "000000",
  "beneficiary_branch_number": "0000",
  "beneficiary_document": "***000000**",
  "beneficiary_bank_name": "ZRO IP S/A",
  "beneficiary_bank_ispb": "26264220",
  "created_at": "2024-04-17T13:33:41.071Z"
}
```

  </TabItem>
  <TabItem value="Payment Failed">

```json
{
  "id": "77198133-185e-4c08-8252-f47c9b15785b",
  "type": "PAYMENT_FAILED",
  "end_to_end_id": "E26264220202404171336mckyTdpt5VZ",
  "txid": null,
  "operation_id": null,
  "amount": "3",
  "owner_name": "Zro Bolsao",
  "owner_person_type": "CNPJ",
  "owner_document": "00000000000000",
  "beneficiary_name": "Name",
  "beneficiary_person_type": "CPF",
  "beneficiary_document": "***000000**",
  "beneficiary_account_type": "CACC",
  "beneficiary_account_number": "000000",
  "beneficiary_branch_number": "0000",
  "beneficiary_bank_name": "ZRO IP S/A",
  "beneficiary_bank_ispb": "26264220",
  "error_code": "NOT_ENOUGH_FUNDS",
  "error_description": "Não há saldo disponível.",
  "created_at": "2024-04-17T13:36:21.188Z"
}
```

  </TabItem>
</Tabs>

## Payloads (Version 4)

<Tabs>
  <TabItem value="Deposit">

```json
{
  "id": "a839f358-0e39-409e-b9a5-5a56b18ba3f2",
  "type": "DEPOSIT",
  "end_to_end_id": "E26264220202404171333Hq7F9SWyvUE",
  "txid": null,
  "operation_id": "7da84c17-d40c-5bc1-9b69-867d1460736b",
  "amount": "63",
  "owner_name": "Zro Bolsao",
  "owner_document": "00000000000",
  "owner_bank_name": "ZRO IP S/A",
  "owner_bank_ispb": "26264220",
  "owner_branch_number": "0000",
  "owner_account_number": "000000",
  "owner_account_type": "CACC",
  "beneficiary_name": "Name",
  "beneficiary_account_number": "000000",
  "beneficiary_branch_number": "0000",
  "beneficiary_document": "***000000**",
  "beneficiary_bank_name": "ZRO IP S/A",
  "beneficiary_bank_ispb": "26264220",
  "created_at": "2024-04-17T13:33:41.071Z"
}
```

  </TabItem>
</Tabs>
