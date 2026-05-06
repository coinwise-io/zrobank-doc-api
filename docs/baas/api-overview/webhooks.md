import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Webhooks

Your account can be configured so that when certain events occur on your account, a HTTP POST request containing JSON data pertaining to that event is sent to one or more URLs of your choosing. These URLs can be configured inside your settings making a request to our team. Notifications of all events listed below are sent to all the configured URLs.
<br />

## Types of webhooks

| Type                           | Description                                                                  |
| ------------------------------ | ---------------------------------------------------------------------------- |
| PAYMENT                        | When you send a pix payment.                                                 |
| PAYMENT FAILED                 | When you send a pix payment and it fails.                                    |
| DEVOLUTION                     | When you send a pix devolution.                                              |
| DEVOLUTION FAILED              | When you send a pix devolution and it fails.                                 |
| DEVOLUTION RECEIVED            | When receive a pix devolution.                                               |
| DEPOSIT                        | When receive a pix deposit.                                                  |
| ONBOARDING FINISHED            | When you create a new user onboarding and it is approved.                    |
| ONBOARDING REJECTED            | When you create a new user onboarding and it is rejected.                    |
| ONBOARDING FAILED              | When onboarding processing fails due to an internal or provider-side error.  |
| MERCHANT ONBOARDING KYC STATUS | When merchant onboarding KYC status is updated.                              |
| COMPANY REGISTRATION ONBOARDING STATUS UPDATED | When company registration changes status, including states that require new documents or corrections. |
| COMPANY REGISTRATION ONBOARDING APPROVED | When company registration is approved and becomes active.                  |
| WALLET ACCOUNT BALANCE UPDATED | When the balance is updated.                                                 |
| JUDICIAL BLOCK ACCOUNT         | When a court order blocks the user's account entirely.                       |
| JUDICIAL BLOCK ACCOUNT BALANCE | When a court order blocks a specific amount from the user's account balance. |
| JUDICIAL UNBLOCK ACCOUNT       | When a court order unblocks the user's account.                              |
| JUDICIAL UNBLOCK ACCOUNT BALANCE | When a court order releases a previously blocked balance amount.            |

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
  "owner_name": "Z.ro Bolsao",
  "owner_person_type": "CNPJ",
  "owner_document": "00000000000000",
  "beneficiary_name": "Name",
  "beneficiary_person_type": "CPF",
  "beneficiary_document": "***000000**",
  "beneficiary_bank_name": "ZERO IP S/A",
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
  "owner_name": "Z.ro Bolsao",
  "owner_person_type": "CNPJ",
  "owner_document": "00000000000000",
  "beneficiary_name": "Name",
  "beneficiary_person_type": "CPF",
  "beneficiary_document": "***000000**",
  "beneficiary_bank_name": "ZERO IP S/A",
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
  "owner_bank_name": "ZERO IP S/A",
  "beneficiary_name": "Z.ro Bolsao",
  "beneficiary_document": "00000000000000",
  "beneficiary_bank_name": "ZERO IP S/A",
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
  "owner_bank_name": "ZERO IP S/A",
  "beneficiary_name": "Z.ro Bolsao",
  "beneficiary_document": "00000000000000",
  "beneficiary_bank_name": "ZERO IP S/A",
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
  "owner_bank_name": "ZERO IP S/A",
  "owner_bank_ispb": "26264220",
  "beneficiary_name": "Z.ro Bolsao",
  "beneficiary_document": "00000000000000",
  "beneficiary_bank_name": "ZERO IP S/A",
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
  "owner_name": "Z.ro Bolsao",
  "owner_document": "00000000000",
  "owner_bank_name": "ZERO IP S/A",
  "owner_bank_ispb": "26264220",
  "beneficiary_name": "Name",
  "beneficiary_account_number": "000000",
  "beneficiary_document": "***000000**",
  "beneficiary_bank_name": "ZERO IP S/A",
  "beneficiary_bank_ispb": "26264220",
  "created_at": "2024-04-17T13:33:41.071Z"
}
```

  </TabItem>

  <TabItem value="Onboarding Finished">

```json
{
  "id": "9c4af5a2-6a6b-4e4e-8af8-e03a331b9c5a",
  "user_id": "c324fb70-db23-482c-a85e-ec3eb58d5941",
  "type": "ONBOARDING_FINISHED",
  "name": "John",
  "full_name": "John Doe",
  "genre": "M",
  "mother_name": "Jane Doe",
  "birth_date": "1984-11-03",
  "document": "11122233344",
  "phone_number": "5511955551234",
  "email": "new-user@zro.global",
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
  "failed_code": null,
  "failed_message": null
}
```

  </TabItem>

  <TabItem value="Onboarding Rejected">

```json
{
  "id": "4b344f93-68fb-4ddc-83b4-6288eb7c63ce",
  "user_id": "a379d727-5409-4b9f-9cae-902aed13efcd",
  "type": "ONBOARDING_REJECTED",
  "name": "John",
  "full_name": "John Doe",
  "genre": "M",
  "mother_name": "Jane Doe",
  "birth_date": "1984-11-03",
  "document": "11122233344",
  "phone_number": "5511955551234",
  "email": "new-user@zro.global",
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
  "email": "new-user@zro.global",
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
  "failed_code": "ONBOARDING_FAILED",
  "failed_message": "Unexpected onboarding processing error."
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
  "action": "credit",
  "value": 100,
  "old_balance": 1000,
  "new_balance": 1100,
  "created_at": "2024-06-20T12:34:56.071Z"
}
```

> `action` possible values: `credit` or `debit`.

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
  <TabItem value="Company Registration Onboarding Status Updated">

```json
{
  "id": "8fc58500-b12e-49d7-892c-dfd704b94c2d",
  "user_id": "c324fb70-db23-482c-a85e-ec3eb58d5941",
  "status": "WAITING_DOCUMENTS",
  "cnpj": "12345678000190",
  "origin": "COMPANIES_KYC",
  "note": "Additional company documents required.",
  "updated_at": "2025-04-15T14:30:00.000Z"
}
```

> Possible `status` values include `WAITING_ANALYSIS`, `WAITING_DOCUMENTS`, `WAITING_CORRECTIONS`, `ACTIVE`, `DECLINED`, and `CANCELED`. For terminal statuses such as `DECLINED` or `CANCELED`, the payload can also include `failed_code` and `failed_message`.

> `ACTIVE` can appear in this webhook before final approval is confirmed through alias bank account readiness. For the final approval signal, use `COMPANY_REGISTRATION_ONBOARDING_APPROVED`.

  </TabItem>
  <TabItem value="Company Registration Onboarding Approved">

```json
{
  "id": "8fc58500-b12e-49d7-892c-dfd704b94c2d",
  "user_id": "c324fb70-db23-482c-a85e-ec3eb58d5941",
  "status": "ACTIVE",
  "cnpj": "12345678000190",
  "bank_number": "655",
  "bank_account_status": "ACTIVE",
  "alias_created_date": "2025-01-15T10:00:00Z",
  "updated_at": "2025-04-15T16:45:00.000Z"
}
```

> This is the final approval event for clients that depend on the company registration plus alias bank account activation.

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
  "owner_bank_name": "ZERO IP S/A",
  "owner_bank_ispb": "26264220",
  "beneficiary_name": "Name",
  "beneficiary_account_number": "000000",
  "beneficiary_branch_number": "0000",
  "beneficiary_document": "***000000**",
  "beneficiary_bank_name": "ZERO IP S/A",
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
  "owner_name": "Z.ro Bolsao",
  "owner_document": "00000000000",
  "owner_bank_name": "ZERO IP S/A",
  "owner_bank_ispb": "26264220",
  "beneficiary_name": "Name",
  "beneficiary_account_number": "000000",
  "beneficiary_branch_number": "0000",
  "beneficiary_document": "***000000**",
  "beneficiary_bank_name": "ZERO IP S/A",
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
  "owner_name": "Z.ro Bolsao",
  "owner_person_type": "CNPJ",
  "owner_document": "00000000000000",
  "beneficiary_name": "Name",
  "beneficiary_person_type": "CPF",
  "beneficiary_document": "***000000**",
  "beneficiary_bank_name": "ZERO IP S/A",
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
  "owner_bank_name": "ZERO IP S/A",
  "beneficiary_name": "Z.ro Bolsao",
  "beneficiary_document": "00000000000000",
  "beneficiary_bank_name": "ZERO IP S/A",
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
  "owner_name": "Z.ro Bolsao",
  "owner_document": "00000000000",
  "owner_bank_name": "ZERO IP S/A",
  "owner_bank_ispb": "26264220",
  "owner_branch_number": "0000",
  "owner_account_number": "000000",
  "beneficiary_name": "Name",
  "beneficiary_account_number": "000000",
  "beneficiary_branch_number": "0000",
  "beneficiary_document": "***000000**",
  "beneficiary_bank_name": "ZERO IP S/A",
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
  "owner_name": "Z.ro Bolsao",
  "owner_person_type": "CNPJ",
  "owner_document": "00000000000000",
  "beneficiary_name": "Name",
  "beneficiary_person_type": "CPF",
  "beneficiary_document": "***000000**",
  "beneficiary_account_type": "CACC",
  "beneficiary_account_number": "000000",
  "beneficiary_branch_number": "0000",
  "beneficiary_bank_name": "ZERO IP S/A",
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
  "owner_name": "Z.ro Bolsao",
  "owner_document": "00000000000",
  "owner_bank_name": "ZERO IP S/A",
  "owner_bank_ispb": "26264220",
  "owner_branch_number": "0000",
  "owner_account_number": "000000",
  "owner_account_type": "CACC",
  "beneficiary_name": "Name",
  "beneficiary_account_number": "000000",
  "beneficiary_branch_number": "0000",
  "beneficiary_document": "***000000**",
  "beneficiary_bank_name": "ZERO IP S/A",
  "beneficiary_bank_ispb": "26264220",
  "created_at": "2024-04-17T13:33:41.071Z"
}
```

  </TabItem>
</Tabs>

## Judicial Webhooks

Judicial webhooks are triggered by court-ordered operations on user accounts. You can register multiple URLs for the same event type — all registered URLs will receive the notification independently. This is useful if you operate multiple products (e.g., PaaS and Gateway) and need each one to receive the event.

### Payloads (Version 1)

<Tabs>
  <TabItem value="Judicial Block Account">

Triggered when a court order blocks the user's account entirely.

```json
{
  "idJudicialBlockAccount": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  "userId": "9d77c248-c5b5-4f6d-9d12-d1463dc49bd9",
  "accountNumber": "000001",
  "branchNumber": "0001",
  "processNumber": "0001234-56.2026.8.26.0100",
  "courtName": "1ª Vara Cível de São Paulo",
  "createdAt": "2024-04-17T17:30:00.020Z"
}
```

> `processNumber` and `courtName` are optional — they are only present when provided in the court order.

  </TabItem>
  <TabItem value="Judicial Block Account Balance">

Triggered when a court order blocks a specific amount from the user's account balance. The `requestedAmount` field is included only when provided by the court order.

```json
{
  "idJudicialBlockAccount": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  "userId": "9d77c248-c5b5-4f6d-9d12-d1463dc49bd9",
  "accountNumber": "000001",
  "branchNumber": "0001",
  "isTotalValue": false,
  "requestedAmount": 150000,
  "processNumber": "0001234-56.2026.8.26.0100",
  "courtName": "1ª Vara Cível de São Paulo",
  "createdAt": "2024-04-17T17:30:00.020Z"
}
```

> When `isTotalValue` is `true`, the entire available balance is blocked. `requestedAmount` is optional and only present when informed in the court order. `processNumber` and `courtName` are also optional.

  </TabItem>
  <TabItem value="Judicial Unblock Account">

Triggered when a court order lifts a full account block.

```json
{
  "idJudicialUnblockAccount": "c3e9b7f1-12ab-4d88-9e4f-1a2b3c4d5e6f",
  "userId": "9d77c248-c5b5-4f6d-9d12-d1463dc49bd9",
  "accountNumber": "000001",
  "branchNumber": "0001",
  "processNumber": "0001234-56.2026.8.26.0100",
  "courtName": "1ª Vara Cível de São Paulo",
  "createdAt": "2024-04-17T17:35:00.020Z"
}
```

> `processNumber` and `courtName` are optional — they are only present when provided in the court order.

  </TabItem>
  <TabItem value="Judicial Unblock Account Balance">

Triggered when a court order releases a previously blocked balance amount.

```json
{
  "idJudicialUnblockAccount": "c3e9b7f1-12ab-4d88-9e4f-1a2b3c4d5e6f",
  "userId": "9d77c248-c5b5-4f6d-9d12-d1463dc49bd9",
  "blockAccountBalanceId": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  "accountNumber": "000001",
  "branchNumber": "0001",
  "processNumber": "0001234-56.2026.8.26.0100",
  "courtName": "1ª Vara Cível de São Paulo",
  "requestedAmount": 150000,
  "createdAt": "2024-04-17T17:35:00.020Z"
}
```

> `blockAccountBalanceId` references the original `JUDICIAL_BLOCK_ACCOUNT_BALANCE` event that is being released.

  </TabItem>
</Tabs>
