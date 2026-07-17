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
| PIX REFUND OPEN                | When a Pix refund request is opened by the receiving PSP.                    |
| PIX REFUND PENDING             | When a Pix refund request is pending processing.                             |
| PIX REFUND WAITING             | When a Pix refund request is waiting for the PSP's response.                 |
| PIX REFUND CLOSED              | When a Pix refund request is closed and the funds are returned.              |
| PIX REFUND CANCELED            | When a Pix refund request is canceled.                                       |
| PIX REFUND FAILED              | When a Pix refund request fails.                                             |
| PIX FUND RECOVERY REQUEST CREATED | When a Pix fund recovery request is created.                              |
| PIX FUND RECOVERY REQUEST ANALYSED | When a Pix fund recovery request has been analysed.                      |
| PIX FUND RECOVERY REQUEST COMPLETED APPROVED | When a Pix fund recovery request is completed and approved.    |
| PIX FUND RECOVERY REQUEST COMPLETED REJECTED | When a Pix fund recovery request is completed and rejected.    |
| PIX FUND RECOVERY REQUEST CANCELED | When a Pix fund recovery request is canceled.                            |
| PIX FUND RECOVERY REQUEST FAILED | When a Pix fund recovery request fails.                                    |
| PIX AUTOMATIC RECURRENCE CREATED | When a Pix automatic recurrence is created.                               |
| PIX AUTOMATIC RECURRENCE FAILED | When a Pix automatic recurrence creation fails.                            |
| PIX AUTOMATIC RECURRENCE APPROVED | When a Pix automatic recurrence is approved.                             |
| PIX AUTOMATIC RECURRENCE REJECTED | When a Pix automatic recurrence is rejected.                             |
| PIX AUTOMATIC RECURRENCE CANCELED | When a Pix automatic recurrence is canceled.                             |
| PIX AUTOMATIC RECURRENCE CANCELED FAILED | When a Pix automatic recurrence cancellation fails.               |
| PIX AUTOMATIC RECURRENCE EXPIRED | When a Pix automatic recurrence expires after the request expiration date. |
| PIX AUTOMATIC RECURRENCE FINISHED | When a Pix automatic recurrence reaches its end date.                    |
| PIX AUTOMATIC AUTHORIZATION PENDING | When a Pix automatic authorization is pending user approval.           |
| PIX AUTOMATIC AUTHORIZATION APPROVED | When a Pix automatic authorization is approved.                       |
| PIX AUTOMATIC AUTHORIZATION REJECTED | When a Pix automatic authorization is rejected.                       |
| PIX AUTOMATIC AUTHORIZATION CANCELED | When a Pix automatic authorization is canceled.                       |
| PIX AUTOMATIC AUTHORIZATION FINISHED | When a Pix automatic authorization is finished.                       |
| PIX AUTOMATIC AUTHORIZATION APPROVED FAILED | When a Pix automatic authorization approval fails.               |
| PIX AUTOMATIC AUTHORIZATION REJECTED FAILED | When a Pix automatic authorization rejection fails.              |
| PIX AUTOMATIC AUTHORIZATION CANCELED FAILED | When a Pix automatic authorization cancellation fails.           |
| PIX AUTOMATIC AUTHORIZATION UPDATED CONFIRMED | When a Pix automatic authorization max value update is confirmed. |
| PIX AUTOMATIC AUTHORIZATION UPDATED FAILED | When a Pix automatic authorization max value update fails.       |
| PIX AUTOMATIC CHARGE CREATED   | When a Pix automatic charge is created.                                      |
| PIX AUTOMATIC CHARGE CREATED FAILED | When a Pix automatic charge creation fails.                             |
| PIX AUTOMATIC CHARGE PAID      | When a Pix automatic charge is paid.                                         |
| PIX AUTOMATIC CHARGE NOT PAID  | When a Pix automatic charge is not paid.                                     |
| PIX AUTOMATIC CHARGE CANCELED  | When a Pix automatic charge is canceled.                                     |
| PIX AUTOMATIC CHARGE CANCELED FAILED | When a Pix automatic charge cancellation fails.                       |
| PIX AUTOMATIC PAYMENT CREATED  | When a Pix automatic payment is created.                                     |
| PIX AUTOMATIC PAYMENT CANCELLATION FAILED | When a Pix automatic payment cancellation fails.                  |
| PIX AUTOMATIC PAYMENT CANCELED | When a Pix automatic payment is canceled.                                    |
| BANKING BILLET PIX DEPOSIT CREATED CONFIRMED | When a Bolepix is created and the Pix QR code is confirmed.        |
| BANKING BILLET PIX DEPOSIT CREATED FAILED | When a Bolepix creation fails during billet registration or QR code generation. |
| BANKING BILLET PIX DEPOSIT RECEIVED | When a Bolepix payment is received.                                        |
| BANKING BILLET PIX DEPOSIT BATCH REJECTED | When a batch of Bolepix is rejected during validation.               |
| BANKING BILLET PIX DEPOSIT BATCH GENERATED | When a batch of Bolepix is successfully generated.                 |
| BANKING BILLET PIX DEPOSIT BATCH FAILED | When a batch of Bolepix fails to process.                            |
| BANKING TED RECEIVED           | When you receive a TED (bank transfer) into your account.                    |
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
  <TabItem value="Banking TED Received">

```json
{
  "id": "10b66e97-c747-4dcb-92ad-da1420a0a6b9",
  "user_id": "9d77c248-c5b5-4f6d-9d12-d1463dc49bd9",
  "operation_id": "7da84c17-d40c-5bc1-9b69-867d1460736b",
  "type": "BANKING_TED_RECEIVED",
  "amount": 150000,
  "owner_name": "Name",
  "owner_document": "***000000**",
  "owner_bank_code": "237",
  "owner_bank_name": "BANCO BRADESCO S/A",
  "owner_bank_ispb": "60746948",
  "owner_bank_account": "000000",
  "owner_bank_branch": "0000",
  "owner_account_type": "CACC",
  "transaction_id": "STR20260417173300000000000000001",
  "finality_code": 10,
  "created_at": "2024-04-17T13:33:41.071Z",
  "updated_at": "2024-04-17T13:33:41.071Z"
}
```

> `owner_*` fields describe the sender of the TED and are only present when informed by the originating bank. `owner_document` is delivered masked. `transaction_id` and `finality_code` are optional.

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

## Pix Refund Webhooks

Triggered when a Pix refund request changes status. All states share the same payload structure; optional fields (`analysis_result`, `rejection_reason`, `failed_code`, `failed_message`) are only present when applicable to the current state.

> Possible `reason` values: `FRAUD`, `PSP_ERROR`, `PIX_AUTOMATIC`.<br />
> Possible `analysis_result` values: `TOTALLY_APPROVED`, `PARTIALLY_APPROVED`, `REJECTED`.<br />
> Possible `rejection_reason` values: `NO_BALANCE`, `ACCOUNT_CLOSURE`, `OTHER`, `INVALID_REQUEST`, `INFRACTION_DISAGREED`.

### Payloads (Version 1)

<Tabs>
  <TabItem value="Open">

Triggered when a refund request is opened by the receiving PSP.

```json
{
  "id": "3d4e5f6a-7b8c-9d0e-1f2a-3b4c5d6e7f8a",
  "status": "OPEN",
  "previous_status": null,
  "contested": false,
  "reason": "FRAUD",
  "amount": 10000,
  "returned_amount": 0,
  "description": "Transação contestada pelo usuário.",
  "solicitation_psp_id": "RR26264220202404171333Hq7F9SWyvUE",
  "analysis_result": null,
  "rejection_reason": null,
  "transaction_end_to_end_id": "E26264220202404171333Hq7F9SWyvUE",
  "failed_code": null,
  "failed_message": null,
  "wallet_id": "f08e96c8-b659-40bf-a1bd-5225ef4e5632",
  "event_timestamp": "2024-04-17T17:30:00.020Z",
  "event_id": "3d4e5f6a-7b8c-9d0e-1f2a-3b4c5d6e7f8a_OPEN_1713375000020"
}
```

  </TabItem>
  <TabItem value="Pending">

Triggered when a refund request is pending processing after being opened.

```json
{
  "id": "3d4e5f6a-7b8c-9d0e-1f2a-3b4c5d6e7f8a",
  "status": "PENDING",
  "previous_status": "OPEN",
  "contested": false,
  "reason": "FRAUD",
  "amount": 10000,
  "returned_amount": 0,
  "description": "Transação contestada pelo usuário.",
  "solicitation_psp_id": "RR26264220202404171333Hq7F9SWyvUE",
  "analysis_result": null,
  "rejection_reason": null,
  "transaction_end_to_end_id": "E26264220202404171333Hq7F9SWyvUE",
  "failed_code": null,
  "failed_message": null,
  "wallet_id": "f08e96c8-b659-40bf-a1bd-5225ef4e5632",
  "event_timestamp": "2024-04-17T18:00:00.000Z",
  "event_id": "3d4e5f6a-7b8c-9d0e-1f2a-3b4c5d6e7f8a_PENDING_1713376800000"
}
```

  </TabItem>
  <TabItem value="Waiting">

Triggered when a refund request is waiting for the PSP's response.

```json
{
  "id": "3d4e5f6a-7b8c-9d0e-1f2a-3b4c5d6e7f8a",
  "status": "WAITING",
  "previous_status": "PENDING",
  "contested": false,
  "reason": "FRAUD",
  "amount": 10000,
  "returned_amount": 0,
  "description": "Transação contestada pelo usuário.",
  "solicitation_psp_id": "RR26264220202404171333Hq7F9SWyvUE",
  "analysis_result": null,
  "rejection_reason": null,
  "transaction_end_to_end_id": "E26264220202404171333Hq7F9SWyvUE",
  "failed_code": null,
  "failed_message": null,
  "wallet_id": "f08e96c8-b659-40bf-a1bd-5225ef4e5632",
  "event_timestamp": "2024-04-17T20:00:00.000Z",
  "event_id": "3d4e5f6a-7b8c-9d0e-1f2a-3b4c5d6e7f8a_WAITING_1713384000000"
}
```

  </TabItem>
  <TabItem value="Closed">

Triggered when a refund request is closed and the funds are returned.

```json
{
  "id": "3d4e5f6a-7b8c-9d0e-1f2a-3b4c5d6e7f8a",
  "status": "CLOSED",
  "previous_status": "WAITING",
  "contested": false,
  "reason": "FRAUD",
  "amount": 10000,
  "returned_amount": 10000,
  "description": "Transação contestada pelo usuário.",
  "solicitation_psp_id": "RR26264220202404171333Hq7F9SWyvUE",
  "analysis_result": "TOTALLY_APPROVED",
  "rejection_reason": null,
  "transaction_end_to_end_id": "E26264220202404171333Hq7F9SWyvUE",
  "failed_code": null,
  "failed_message": null,
  "wallet_id": "f08e96c8-b659-40bf-a1bd-5225ef4e5632",
  "event_timestamp": "2024-04-18T10:00:00.000Z",
  "event_id": "3d4e5f6a-7b8c-9d0e-1f2a-3b4c5d6e7f8a_CLOSED_1713434400000"
}
```

  </TabItem>
  <TabItem value="Canceled">

Triggered when a refund request is canceled.

```json
{
  "id": "3d4e5f6a-7b8c-9d0e-1f2a-3b4c5d6e7f8a",
  "status": "CANCELED",
  "previous_status": "PENDING",
  "contested": false,
  "reason": "FRAUD",
  "amount": 10000,
  "returned_amount": 0,
  "description": "Transação contestada pelo usuário.",
  "solicitation_psp_id": "RR26264220202404171333Hq7F9SWyvUE",
  "analysis_result": null,
  "rejection_reason": null,
  "transaction_end_to_end_id": "E26264220202404171333Hq7F9SWyvUE",
  "failed_code": null,
  "failed_message": null,
  "wallet_id": "f08e96c8-b659-40bf-a1bd-5225ef4e5632",
  "event_timestamp": "2024-04-18T08:00:00.000Z",
  "event_id": "3d4e5f6a-7b8c-9d0e-1f2a-3b4c5d6e7f8a_CANCELED_1713427200000"
}
```

  </TabItem>
  <TabItem value="Failed">

Triggered when a refund request fails due to a processing error.

```json
{
  "id": "3d4e5f6a-7b8c-9d0e-1f2a-3b4c5d6e7f8a",
  "status": "FAILED",
  "previous_status": "WAITING",
  "contested": false,
  "reason": "FRAUD",
  "amount": 10000,
  "returned_amount": 0,
  "description": "Transação contestada pelo usuário.",
  "solicitation_psp_id": "RR26264220202404171333Hq7F9SWyvUE",
  "analysis_result": null,
  "rejection_reason": null,
  "transaction_end_to_end_id": "E26264220202404171333Hq7F9SWyvUE",
  "failed_code": "PIX_REFUND_FAILED",
  "failed_message": "Internal error during refund processing.",
  "wallet_id": "f08e96c8-b659-40bf-a1bd-5225ef4e5632",
  "event_timestamp": "2024-04-18T10:00:00.000Z",
  "event_id": "3d4e5f6a-7b8c-9d0e-1f2a-3b4c5d6e7f8a_FAILED_1713434400000"
}
```

  </TabItem>
</Tabs>

## Pix Fund Recovery Request Webhooks

Triggered when a Pix fund recovery request changes status. A fund recovery request is used to recover funds in cases of fraud or erroneous transactions.

> Possible `reason` values: `FRAUD`, `CANCEL_DEVOLUTION`, `PIX_AUTOMATIC_FRAUD`, `PIX_AUTOMATIC_PSP_ERROR`.<br />
> Possible `fraud_reason` values: `SCAM`, `MULE`, `SCAM_MULE`, `OTHER`. Present only when `reason` is `FRAUD` and the analysis identifies the fraud type.

### Payloads (Version 1)

<Tabs>
  <TabItem value="Created">

Triggered when a fund recovery request is created.

```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "status": "CREATED",
  "previous_status": null,
  "reason": "FRAUD",
  "description": "Solicitação de devolução por suspeita de fraude.",
  "transaction_end_to_end_id": "E26264220202404171333Hq7F9SWyvUE",
  "fraud_reason": null,
  "wallet_id": "f08e96c8-b659-40bf-a1bd-5225ef4e5632",
  "event_timestamp": "2024-04-17T17:30:00.020Z",
  "event_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890_CREATED_1713375000020"
}
```

  </TabItem>
  <TabItem value="Analysed">

Triggered when a fund recovery request has been analysed and is awaiting completion.

```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "status": "ANALYSED",
  "previous_status": "CREATED",
  "reason": "FRAUD",
  "description": "Solicitação analisada, aguardando conclusão.",
  "transaction_end_to_end_id": "E26264220202404171333Hq7F9SWyvUE",
  "fraud_reason": "SCAM",
  "wallet_id": "f08e96c8-b659-40bf-a1bd-5225ef4e5632",
  "event_timestamp": "2024-04-17T20:00:00.000Z",
  "event_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890_ANALYSED_1713384000000"
}
```

  </TabItem>
  <TabItem value="Completed Approved">

Triggered when a fund recovery request is completed and the funds are approved for return.

```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "status": "COMPLETED_APPROVED",
  "previous_status": "ANALYSED",
  "reason": "FRAUD",
  "description": "Solicitação de devolução aprovada.",
  "transaction_end_to_end_id": "E26264220202404171333Hq7F9SWyvUE",
  "fraud_reason": "SCAM",
  "wallet_id": "f08e96c8-b659-40bf-a1bd-5225ef4e5632",
  "event_timestamp": "2024-04-18T10:00:00.000Z",
  "event_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890_COMPLETED_APPROVED_1713434400000"
}
```

  </TabItem>
  <TabItem value="Completed Rejected">

Triggered when a fund recovery request is completed but the return is rejected.

```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "status": "COMPLETED_REJECTED",
  "previous_status": "ANALYSED",
  "reason": "FRAUD",
  "description": "Solicitação de devolução rejeitada.",
  "transaction_end_to_end_id": "E26264220202404171333Hq7F9SWyvUE",
  "fraud_reason": null,
  "wallet_id": "f08e96c8-b659-40bf-a1bd-5225ef4e5632",
  "event_timestamp": "2024-04-18T10:00:00.000Z",
  "event_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890_COMPLETED_REJECTED_1713434400000"
}
```

  </TabItem>
  <TabItem value="Canceled">

Triggered when a fund recovery request is canceled before completion.

```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "status": "CANCELED",
  "previous_status": "CREATED",
  "reason": "FRAUD",
  "description": "Solicitação de devolução cancelada.",
  "transaction_end_to_end_id": "E26264220202404171333Hq7F9SWyvUE",
  "fraud_reason": null,
  "wallet_id": "f08e96c8-b659-40bf-a1bd-5225ef4e5632",
  "event_timestamp": "2024-04-18T08:00:00.000Z",
  "event_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890_CANCELED_1713427200000"
}
```

  </TabItem>
  <TabItem value="Failed">

Triggered when a fund recovery request fails due to a processing error.

```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "status": "FAILED",
  "previous_status": "CREATED",
  "reason": "FRAUD",
  "description": "Falha no processamento da solicitação de devolução.",
  "transaction_end_to_end_id": "E26264220202404171333Hq7F9SWyvUE",
  "fraud_reason": null,
  "failed_code": "PIX_FUND_RECOVERY_REQUEST_FAILED",
  "failed_message": "Internal error during fund recovery processing.",
  "wallet_id": "f08e96c8-b659-40bf-a1bd-5225ef4e5632",
  "event_timestamp": "2024-04-18T08:00:00.000Z",
  "event_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890_FAILED_1713427200000"
}
```

  </TabItem>
</Tabs>

## Pix Automatic Recurrence Webhooks

Triggered when a Pix automatic recurrence (recurring payment agreement) changes status. The recurrence represents the contract between payer and receiver for recurring Pix payments.

> Possible `status` values: `CREATED`, `FAILED`, `APPROVED`, `REJECTED`, `CANCELED`, `EXPIRED`, `FINISHED`.<br />
> Possible `state` values: `CREATED_CONFIRMED`, `CREATED_FAILED`, `APPROVED_CONFIRMED`, `REJECTED_CONFIRMED`, `CANCELED_CONFIRMED`, `CANCELED_FAILED`, `EXPIRED_CONFIRMED`, `FINISHED_CONFIRMED`.<br />
> Possible `frequency` values: `WEEKLY`, `MONTHLY`, `QUARTERLY`, `SEMI_ANNUALLY`, `ANNUALLY`.<br />
> Possible `journey` values: `JOURNEY_1`, `JOURNEY_2`, `JOURNEY_3`, `JOURNEY_4`, `JOURNEY_4_STATIC`.<br />
> Possible `cancellation.reason` values: `ACCOUNT_CANCELED`, `RECEIVER_COMPANY_CLOSURE`, `OWNER_DEATH`, `CONFIRMATION_ERROR`, `FRAUD_SUSPICION`, `RECURRENCE_ALREADY_CONFIRMED`, `RECEIVER_REQUEST`, `PAYER_REQUEST`, `RECEIVER_PSP_REQUEST`.

### Payloads (Version 1)

<Tabs>
  <TabItem value="Created">

Triggered when a recurrence agreement is successfully created after registration with the PSP.

```json
{
  "id": "b2c3d4e5-f6a7-8901-bcde-f01234567890",
  "contract_number": "CONTRACT-001",
  "status": "CREATED",
  "previous_status": "PENDING",
  "state": "CREATED_CONFIRMED",
  "journey": "JOURNEY_1",
  "frequency": "MONTHLY",
  "start_date": "2024-05-01",
  "end_date": "2025-05-01",
  "request_expiration_date": "2024-04-24T17:30:00.020Z",
  "value": 10000,
  "floor_max_value": null,
  "beneficiary": {
    "ispb": "26264220",
    "document": "00000000000000",
    "name": "Z.ro Bolsao"
  },
  "owner": {
    "ispb": "26264220",
    "document": "***000000**",
    "name": "Name",
    "person_type": "CPF",
    "bank_branch": "0001",
    "bank_account": "000001"
  },
  "debtor": {
    "document": "***000000**",
    "person_type": "CPF",
    "name": "Name"
  },
  "next_charge": {
    "due_date": "2024-05-01",
    "value": 10000
  },
  "contract_description": "Assinatura mensal",
  "tags": ["tag1"],
  "created_at": "2024-04-17T17:30:00.020Z",
  "updated_at": "2024-04-17T17:30:00.020Z",
  "event_timestamp": "2024-04-17T17:30:00.020Z",
  "event_id": "b2c3d4e5-f6a7-8901-bcde-f01234567890_CREATED_1713375000020"
}
```

  </TabItem>
  <TabItem value="Failed">

Triggered when a recurrence creation fails during registration with the PSP.

```json
{
  "id": "b2c3d4e5-f6a7-8901-bcde-f01234567890",
  "contract_number": "CONTRACT-001",
  "status": "FAILED",
  "previous_status": "PENDING",
  "state": "CREATED_FAILED",
  "journey": "JOURNEY_1",
  "frequency": "MONTHLY",
  "start_date": "2024-05-01",
  "end_date": "2025-05-01",
  "value": 10000,
  "floor_max_value": null,
  "beneficiary": {
    "ispb": "26264220",
    "document": "00000000000000",
    "name": "Z.ro Bolsao"
  },
  "contract_description": "Assinatura mensal",
  "failed_code": "PIX_AUTOMATIC_RECURRENCE_FAILED",
  "failed_message": "Internal error during recurrence creation.",
  "created_at": "2024-04-17T17:30:00.020Z",
  "updated_at": "2024-04-17T17:30:00.020Z",
  "event_timestamp": "2024-04-17T17:30:00.020Z",
  "event_id": "b2c3d4e5-f6a7-8901-bcde-f01234567890_FAILED_1713375000020"
}
```

  </TabItem>
  <TabItem value="Approved">

Triggered when a recurrence agreement is approved by the payer.

```json
{
  "id": "b2c3d4e5-f6a7-8901-bcde-f01234567890",
  "contract_number": "CONTRACT-001",
  "status": "APPROVED",
  "previous_status": "CREATED",
  "state": "APPROVED_CONFIRMED",
  "journey": "JOURNEY_1",
  "frequency": "MONTHLY",
  "start_date": "2024-05-01",
  "end_date": "2025-05-01",
  "value": 10000,
  "floor_max_value": null,
  "beneficiary": {
    "ispb": "26264220",
    "document": "00000000000000",
    "name": "Z.ro Bolsao"
  },
  "owner": {
    "ispb": "26264220",
    "document": "***000000**",
    "name": "Name",
    "person_type": "CPF",
    "bank_branch": "0001",
    "bank_account": "000001"
  },
  "next_charge": {
    "due_date": "2024-05-01",
    "value": 10000
  },
  "contract_description": "Assinatura mensal",
  "created_at": "2024-04-17T17:30:00.020Z",
  "updated_at": "2024-04-20T09:00:00.000Z",
  "event_timestamp": "2024-04-20T09:00:00.000Z",
  "event_id": "b2c3d4e5-f6a7-8901-bcde-f01234567890_APPROVED_1713603600000"
}
```

  </TabItem>
  <TabItem value="Rejected">

Triggered when a recurrence agreement is rejected by the payer.

```json
{
  "id": "b2c3d4e5-f6a7-8901-bcde-f01234567890",
  "contract_number": "CONTRACT-001",
  "status": "REJECTED",
  "previous_status": "CREATED",
  "state": "REJECTED_CONFIRMED",
  "journey": "JOURNEY_1",
  "frequency": "MONTHLY",
  "start_date": "2024-05-01",
  "end_date": "2025-05-01",
  "value": 10000,
  "beneficiary": {
    "ispb": "26264220",
    "document": "00000000000000",
    "name": "Z.ro Bolsao"
  },
  "owner": {
    "ispb": "26264220",
    "document": "***000000**",
    "name": "Name",
    "person_type": "CPF",
    "bank_branch": "0001",
    "bank_account": "000001"
  },
  "contract_description": "Assinatura mensal",
  "created_at": "2024-04-17T17:30:00.020Z",
  "updated_at": "2024-04-18T08:00:00.000Z",
  "event_timestamp": "2024-04-18T08:00:00.000Z",
  "event_id": "b2c3d4e5-f6a7-8901-bcde-f01234567890_REJECTED_1713427200000"
}
```

  </TabItem>
  <TabItem value="Canceled">

Triggered when a recurrence agreement is successfully canceled.

```json
{
  "id": "b2c3d4e5-f6a7-8901-bcde-f01234567890",
  "contract_number": "CONTRACT-001",
  "status": "CANCELED",
  "previous_status": "APPROVED",
  "state": "CANCELED_CONFIRMED",
  "journey": "JOURNEY_1",
  "frequency": "MONTHLY",
  "start_date": "2024-05-01",
  "end_date": "2025-05-01",
  "value": 10000,
  "beneficiary": {
    "ispb": "26264220",
    "document": "00000000000000",
    "name": "Z.ro Bolsao"
  },
  "cancellation": {
    "id": "cancel-001",
    "reason": "PAYER_REQUEST"
  },
  "contract_description": "Assinatura mensal",
  "created_at": "2024-04-17T17:30:00.020Z",
  "updated_at": "2024-06-01T10:00:00.000Z",
  "event_timestamp": "2024-06-01T10:00:00.000Z",
  "event_id": "b2c3d4e5-f6a7-8901-bcde-f01234567890_CANCELED_1717232400000"
}
```

  </TabItem>
  <TabItem value="Canceled Failed">

Triggered when a cancellation attempt fails during communication with the PSP.

```json
{
  "id": "b2c3d4e5-f6a7-8901-bcde-f01234567890",
  "contract_number": "CONTRACT-001",
  "status": "CANCELED",
  "previous_status": "APPROVED",
  "state": "CANCELED_FAILED",
  "journey": "JOURNEY_1",
  "frequency": "MONTHLY",
  "start_date": "2024-05-01",
  "end_date": "2025-05-01",
  "value": 10000,
  "beneficiary": {
    "ispb": "26264220",
    "document": "00000000000000",
    "name": "Z.ro Bolsao"
  },
  "contract_description": "Assinatura mensal",
  "failed_code": "PIX_AUTOMATIC_RECURRENCE_CANCELED_FAILED",
  "failed_message": "Internal error during recurrence cancellation.",
  "created_at": "2024-04-17T17:30:00.020Z",
  "updated_at": "2024-06-01T10:00:00.000Z",
  "event_timestamp": "2024-06-01T10:00:00.000Z",
  "event_id": "b2c3d4e5-f6a7-8901-bcde-f01234567890_CANCELED_FAILED_1717232400000"
}
```

  </TabItem>
  <TabItem value="Expired">

Triggered when a recurrence expires after the request expiration date without being approved or rejected by the payer.

```json
{
  "id": "b2c3d4e5-f6a7-8901-bcde-f01234567890",
  "contract_number": "CONTRACT-001",
  "status": "EXPIRED",
  "previous_status": "CREATED",
  "state": "EXPIRED_CONFIRMED",
  "journey": "JOURNEY_1",
  "frequency": "MONTHLY",
  "start_date": "2024-05-01",
  "end_date": "2025-05-01",
  "request_expiration_date": "2024-04-24T17:30:00.020Z",
  "value": 10000,
  "beneficiary": {
    "ispb": "26264220",
    "document": "00000000000000",
    "name": "Z.ro Bolsao"
  },
  "contract_description": "Assinatura mensal",
  "created_at": "2024-04-17T17:30:00.020Z",
  "updated_at": "2024-04-24T17:30:00.020Z",
  "event_timestamp": "2024-04-24T17:30:00.020Z",
  "event_id": "b2c3d4e5-f6a7-8901-bcde-f01234567890_EXPIRED_1713980400020"
}
```

  </TabItem>
  <TabItem value="Finished">

Triggered when a recurrence reaches its configured end date.

```json
{
  "id": "b2c3d4e5-f6a7-8901-bcde-f01234567890",
  "contract_number": "CONTRACT-001",
  "status": "FINISHED",
  "previous_status": "APPROVED",
  "state": "FINISHED_CONFIRMED",
  "journey": "JOURNEY_1",
  "frequency": "MONTHLY",
  "start_date": "2024-05-01",
  "end_date": "2025-05-01",
  "value": 10000,
  "beneficiary": {
    "ispb": "26264220",
    "document": "00000000000000",
    "name": "Z.ro Bolsao"
  },
  "owner": {
    "ispb": "26264220",
    "document": "***000000**",
    "name": "Name",
    "person_type": "CPF",
    "bank_branch": "0001",
    "bank_account": "000001"
  },
  "contract_description": "Assinatura mensal",
  "created_at": "2024-04-17T17:30:00.020Z",
  "updated_at": "2025-05-01T00:00:00.000Z",
  "event_timestamp": "2025-05-01T00:00:00.000Z",
  "event_id": "b2c3d4e5-f6a7-8901-bcde-f01234567890_FINISHED_1746057600000"
}
```

  </TabItem>
</Tabs>

## Pix Automatic Authorization Webhooks

Triggered when a Pix automatic authorization changes status. The authorization represents the payer's consent to allow recurring Pix debits from their account.

> Possible `status` values: `PENDING`, `APPROVED`, `REJECTED`, `CANCELED`, `FINISHED`.<br />
> Possible `state` values: `PENDING_CONFIRMED`, `APPROVED_CONFIRMED`, `REJECTED_CONFIRMED`, `APPROVED_FAILED`, `REJECTED_FAILED`, `CANCELED_CONFIRMED`, `CANCELED_FAILED`, `FINISHED_CONFIRMED`, `UPDATED_CONFIRMED`, `UPDATED_FAILED`.<br />
> Possible `frequency` values: `WEEKLY`, `MONTHLY`, `QUARTERLY`, `SEMI_ANNUALLY`, `ANNUALLY`.<br />
> Possible `journey` values: `JOURNEY_1`, `JOURNEY_2`, `JOURNEY_3`, `JOURNEY_4`.<br />
> Possible `rejection_reason` values: `UNRECOGNIZED_RECEIVER`, `NOT_INTERESTED`, `UNAVAILABLE_FOR_LEGAL_PERSON`.

### Payloads (Version 1)

<Tabs>
  <TabItem value="Pending">

Triggered when an authorization request is pending user approval.

```json
{
  "id": "c3d4e5f6-a7b8-9012-cdef-012345678901",
  "user_id": "9d77c248-c5b5-4f6d-9d12-d1463dc49bd9",
  "wallet_id": "f08e96c8-b659-40bf-a1bd-5225ef4e5632",
  "status": "PENDING",
  "previous_status": null,
  "state": "PENDING_CONFIRMED",
  "previous_state": null,
  "journey": "JOURNEY_1",
  "frequency": "MONTHLY",
  "start_date": "2024-05-01",
  "end_date": "2025-05-01",
  "value": 10000,
  "floor_max_value": null,
  "payment_max_value": 15000,
  "beneficiary": {
    "ispb": "26264220",
    "document": "00000000000000",
    "name": "Z.ro Bolsao"
  },
  "owner": {
    "document": "***000000**",
    "name": "Name"
  },
  "contract_number": "CONTRACT-001",
  "contract_description": "Assinatura mensal",
  "recurrence_id": "b2c3d4e5-f6a7-8901-bcde-f01234567890",
  "request_expiration_date": "2024-04-24T17:30:00.020Z",
  "rejection_reason": null,
  "created_at": "2024-04-17T17:30:00.020Z",
  "updated_at": "2024-04-17T17:30:00.020Z",
  "event_timestamp": "2024-04-17T17:30:00.020Z",
  "event_id": "c3d4e5f6-a7b8-9012-cdef-012345678901_PENDING_1713375000020"
}
```

  </TabItem>
  <TabItem value="Approved">

Triggered when the user approves the authorization.

```json
{
  "id": "c3d4e5f6-a7b8-9012-cdef-012345678901",
  "user_id": "9d77c248-c5b5-4f6d-9d12-d1463dc49bd9",
  "wallet_id": "f08e96c8-b659-40bf-a1bd-5225ef4e5632",
  "status": "APPROVED",
  "previous_status": "PENDING",
  "state": "APPROVED_CONFIRMED",
  "previous_state": "PENDING_CONFIRMED",
  "journey": "JOURNEY_1",
  "frequency": "MONTHLY",
  "start_date": "2024-05-01",
  "end_date": "2025-05-01",
  "value": 10000,
  "payment_max_value": 15000,
  "beneficiary": {
    "ispb": "26264220",
    "document": "00000000000000",
    "name": "Z.ro Bolsao"
  },
  "owner": {
    "document": "***000000**",
    "name": "Name"
  },
  "contract_number": "CONTRACT-001",
  "contract_description": "Assinatura mensal",
  "recurrence_id": "b2c3d4e5-f6a7-8901-bcde-f01234567890",
  "created_at": "2024-04-17T17:30:00.020Z",
  "updated_at": "2024-04-20T09:00:00.000Z",
  "event_timestamp": "2024-04-20T09:00:00.000Z",
  "event_id": "c3d4e5f6-a7b8-9012-cdef-012345678901_APPROVED_1713603600000"
}
```

  </TabItem>
  <TabItem value="Rejected">

Triggered when the user rejects the authorization.

```json
{
  "id": "c3d4e5f6-a7b8-9012-cdef-012345678901",
  "user_id": "9d77c248-c5b5-4f6d-9d12-d1463dc49bd9",
  "wallet_id": "f08e96c8-b659-40bf-a1bd-5225ef4e5632",
  "status": "REJECTED",
  "previous_status": "PENDING",
  "state": "REJECTED_CONFIRMED",
  "previous_state": "PENDING_CONFIRMED",
  "journey": "JOURNEY_1",
  "frequency": "MONTHLY",
  "start_date": "2024-05-01",
  "beneficiary": {
    "ispb": "26264220",
    "document": "00000000000000",
    "name": "Z.ro Bolsao"
  },
  "contract_number": "CONTRACT-001",
  "recurrence_id": "b2c3d4e5-f6a7-8901-bcde-f01234567890",
  "rejection_reason": "NOT_INTERESTED",
  "created_at": "2024-04-17T17:30:00.020Z",
  "updated_at": "2024-04-18T08:00:00.000Z",
  "event_timestamp": "2024-04-18T08:00:00.000Z",
  "event_id": "c3d4e5f6-a7b8-9012-cdef-012345678901_REJECTED_1713427200000"
}
```

  </TabItem>
  <TabItem value="Canceled">

Triggered when an authorization is successfully canceled.

```json
{
  "id": "c3d4e5f6-a7b8-9012-cdef-012345678901",
  "user_id": "9d77c248-c5b5-4f6d-9d12-d1463dc49bd9",
  "wallet_id": "f08e96c8-b659-40bf-a1bd-5225ef4e5632",
  "status": "CANCELED",
  "previous_status": "APPROVED",
  "state": "CANCELED_CONFIRMED",
  "previous_state": "APPROVED_CONFIRMED",
  "journey": "JOURNEY_1",
  "frequency": "MONTHLY",
  "start_date": "2024-05-01",
  "end_date": "2025-05-01",
  "value": 10000,
  "payment_max_value": 15000,
  "beneficiary": {
    "ispb": "26264220",
    "document": "00000000000000",
    "name": "Z.ro Bolsao"
  },
  "contract_number": "CONTRACT-001",
  "recurrence_id": "b2c3d4e5-f6a7-8901-bcde-f01234567890",
  "created_at": "2024-04-17T17:30:00.020Z",
  "updated_at": "2024-06-01T10:00:00.000Z",
  "event_timestamp": "2024-06-01T10:00:00.000Z",
  "event_id": "c3d4e5f6-a7b8-9012-cdef-012345678901_CANCELED_1717232400000"
}
```

  </TabItem>
  <TabItem value="Finished">

Triggered when an authorization is finished after the recurrence reaches its end date.

```json
{
  "id": "c3d4e5f6-a7b8-9012-cdef-012345678901",
  "user_id": "9d77c248-c5b5-4f6d-9d12-d1463dc49bd9",
  "wallet_id": "f08e96c8-b659-40bf-a1bd-5225ef4e5632",
  "status": "FINISHED",
  "previous_status": "APPROVED",
  "state": "FINISHED_CONFIRMED",
  "previous_state": "APPROVED_CONFIRMED",
  "journey": "JOURNEY_1",
  "frequency": "MONTHLY",
  "start_date": "2024-05-01",
  "end_date": "2025-05-01",
  "value": 10000,
  "payment_max_value": 15000,
  "beneficiary": {
    "ispb": "26264220",
    "document": "00000000000000",
    "name": "Z.ro Bolsao"
  },
  "owner": {
    "document": "***000000**",
    "name": "Name"
  },
  "contract_number": "CONTRACT-001",
  "contract_description": "Assinatura mensal",
  "recurrence_id": "b2c3d4e5-f6a7-8901-bcde-f01234567890",
  "created_at": "2024-04-17T17:30:00.020Z",
  "updated_at": "2025-05-01T00:00:00.000Z",
  "event_timestamp": "2025-05-01T00:00:00.000Z",
  "event_id": "c3d4e5f6-a7b8-9012-cdef-012345678901_FINISHED_1746057600000"
}
```

  </TabItem>
  <TabItem value="Approved Failed">

Triggered when the approval confirmation fails during communication with the PSP.

```json
{
  "id": "c3d4e5f6-a7b8-9012-cdef-012345678901",
  "user_id": "9d77c248-c5b5-4f6d-9d12-d1463dc49bd9",
  "wallet_id": "f08e96c8-b659-40bf-a1bd-5225ef4e5632",
  "status": "APPROVED",
  "previous_status": "PENDING",
  "state": "APPROVED_FAILED",
  "previous_state": "PENDING_CONFIRMED",
  "journey": "JOURNEY_1",
  "frequency": "MONTHLY",
  "start_date": "2024-05-01",
  "end_date": "2025-05-01",
  "value": 10000,
  "payment_max_value": 15000,
  "beneficiary": {
    "ispb": "26264220",
    "document": "00000000000000",
    "name": "Z.ro Bolsao"
  },
  "owner": {
    "document": "***000000**",
    "name": "Name"
  },
  "contract_number": "CONTRACT-001",
  "contract_description": "Assinatura mensal",
  "recurrence_id": "b2c3d4e5-f6a7-8901-bcde-f01234567890",
  "failed_code": "PIX_AUTOMATIC_AUTHORIZATION_APPROVED_FAILED",
  "failed_message": "Internal error during authorization approval.",
  "created_at": "2024-04-17T17:30:00.020Z",
  "updated_at": "2024-04-20T09:00:00.000Z",
  "event_timestamp": "2024-04-20T09:00:00.000Z",
  "event_id": "c3d4e5f6-a7b8-9012-cdef-012345678901_APPROVED_FAILED_1713603600000"
}
```

  </TabItem>
  <TabItem value="Rejected Failed">

Triggered when the rejection confirmation fails during communication with the PSP.

```json
{
  "id": "c3d4e5f6-a7b8-9012-cdef-012345678901",
  "user_id": "9d77c248-c5b5-4f6d-9d12-d1463dc49bd9",
  "wallet_id": "f08e96c8-b659-40bf-a1bd-5225ef4e5632",
  "status": "REJECTED",
  "previous_status": "PENDING",
  "state": "REJECTED_FAILED",
  "previous_state": "PENDING_CONFIRMED",
  "journey": "JOURNEY_1",
  "frequency": "MONTHLY",
  "start_date": "2024-05-01",
  "beneficiary": {
    "ispb": "26264220",
    "document": "00000000000000",
    "name": "Z.ro Bolsao"
  },
  "contract_number": "CONTRACT-001",
  "recurrence_id": "b2c3d4e5-f6a7-8901-bcde-f01234567890",
  "rejection_reason": "NOT_INTERESTED",
  "failed_code": "PIX_AUTOMATIC_AUTHORIZATION_REJECTED_FAILED",
  "failed_message": "Internal error during authorization rejection.",
  "created_at": "2024-04-17T17:30:00.020Z",
  "updated_at": "2024-04-18T08:00:00.000Z",
  "event_timestamp": "2024-04-18T08:00:00.000Z",
  "event_id": "c3d4e5f6-a7b8-9012-cdef-012345678901_REJECTED_FAILED_1713427200000"
}
```

  </TabItem>
  <TabItem value="Canceled Failed">

Triggered when the cancellation confirmation fails during communication with the PSP.

```json
{
  "id": "c3d4e5f6-a7b8-9012-cdef-012345678901",
  "user_id": "9d77c248-c5b5-4f6d-9d12-d1463dc49bd9",
  "wallet_id": "f08e96c8-b659-40bf-a1bd-5225ef4e5632",
  "status": "CANCELED",
  "previous_status": "APPROVED",
  "state": "CANCELED_FAILED",
  "previous_state": "APPROVED_CONFIRMED",
  "journey": "JOURNEY_1",
  "frequency": "MONTHLY",
  "start_date": "2024-05-01",
  "end_date": "2025-05-01",
  "value": 10000,
  "payment_max_value": 15000,
  "beneficiary": {
    "ispb": "26264220",
    "document": "00000000000000",
    "name": "Z.ro Bolsao"
  },
  "contract_number": "CONTRACT-001",
  "recurrence_id": "b2c3d4e5-f6a7-8901-bcde-f01234567890",
  "failed_code": "PIX_AUTOMATIC_AUTHORIZATION_CANCELED_FAILED",
  "failed_message": "Internal error during authorization cancellation.",
  "created_at": "2024-04-17T17:30:00.020Z",
  "updated_at": "2024-06-01T10:00:00.000Z",
  "event_timestamp": "2024-06-01T10:00:00.000Z",
  "event_id": "c3d4e5f6-a7b8-9012-cdef-012345678901_CANCELED_FAILED_1717232400000"
}
```

  </TabItem>
  <TabItem value="Updated Confirmed">

Triggered when a max value update is successfully confirmed by the PSP.

```json
{
  "id": "c3d4e5f6-a7b8-9012-cdef-012345678901",
  "user_id": "9d77c248-c5b5-4f6d-9d12-d1463dc49bd9",
  "wallet_id": "f08e96c8-b659-40bf-a1bd-5225ef4e5632",
  "status": "APPROVED",
  "previous_status": "APPROVED",
  "state": "UPDATED_CONFIRMED",
  "previous_state": "APPROVED_CONFIRMED",
  "journey": "JOURNEY_1",
  "frequency": "MONTHLY",
  "start_date": "2024-05-01",
  "end_date": "2025-05-01",
  "value": 12000,
  "payment_max_value": 18000,
  "beneficiary": {
    "ispb": "26264220",
    "document": "00000000000000",
    "name": "Z.ro Bolsao"
  },
  "owner": {
    "document": "***000000**",
    "name": "Name"
  },
  "contract_number": "CONTRACT-001",
  "contract_description": "Assinatura mensal",
  "recurrence_id": "b2c3d4e5-f6a7-8901-bcde-f01234567890",
  "created_at": "2024-04-17T17:30:00.020Z",
  "updated_at": "2024-07-01T10:00:00.000Z",
  "event_timestamp": "2024-07-01T10:00:00.000Z",
  "event_id": "c3d4e5f6-a7b8-9012-cdef-012345678901_UPDATED_CONFIRMED_1719828000000"
}
```

  </TabItem>
  <TabItem value="Updated Failed">

Triggered when a max value update fails during communication with the PSP.

```json
{
  "id": "c3d4e5f6-a7b8-9012-cdef-012345678901",
  "user_id": "9d77c248-c5b5-4f6d-9d12-d1463dc49bd9",
  "wallet_id": "f08e96c8-b659-40bf-a1bd-5225ef4e5632",
  "status": "APPROVED",
  "previous_status": "APPROVED",
  "state": "UPDATED_FAILED",
  "previous_state": "APPROVED_CONFIRMED",
  "journey": "JOURNEY_1",
  "frequency": "MONTHLY",
  "start_date": "2024-05-01",
  "end_date": "2025-05-01",
  "value": 12000,
  "payment_max_value": 18000,
  "beneficiary": {
    "ispb": "26264220",
    "document": "00000000000000",
    "name": "Z.ro Bolsao"
  },
  "contract_number": "CONTRACT-001",
  "recurrence_id": "b2c3d4e5-f6a7-8901-bcde-f01234567890",
  "failed_code": "PIX_AUTOMATIC_AUTHORIZATION_UPDATED_FAILED",
  "failed_message": "Internal error during authorization max value update.",
  "created_at": "2024-04-17T17:30:00.020Z",
  "updated_at": "2024-07-01T10:00:00.000Z",
  "event_timestamp": "2024-07-01T10:00:00.000Z",
  "event_id": "c3d4e5f6-a7b8-9012-cdef-012345678901_UPDATED_FAILED_1719828000000"
}
```

  </TabItem>
</Tabs>

## Pix Automatic Charge Webhooks

Triggered when a Pix automatic charge (individual debit attempt within a recurrence) changes status.

> Possible `status` values: `CREATED`, `CREATED_FAILED`, `PAID`, `NOT_PAID`, `CANCELED`, `CANCELED_FAILED`.<br />
> Possible `scheduling_purpose` values: `SCHEDULING` (first attempt), `NEW_ATTEMPT` (after expiration), `RESEND` (after settlement error).<br />
> Possible `cancellation_reason` values: `ACCOUNT_CLOSED`, `ACCOUNT_BLOCKED`, `RECURRENCE_CANCELED`, `SETTLEMENT_FAILURE`, `OTHER_REASON_BY_PARTICIPANT`, `REQUESTED_BY_PAYER`, `REQUESTED_BY_RECEIVER`.

### Payloads (Version 1)

<Tabs>
  <TabItem value="Created">

Triggered when a charge is created and registered with the PSP.

```json
{
  "id": "d4e5f6a7-b8c9-0123-defa-123456789012",
  "user_id": "9d77c248-c5b5-4f6d-9d12-d1463dc49bd9",
  "pix_automatic_recurrence_id": "b2c3d4e5-f6a7-8901-bcde-f01234567890",
  "pix_automatic_recurrence_user_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "contract_number": "CONTRACT-001",
  "type": "PIX_AUTOMATIC_CHARGE_CREATED",
  "status": "CREATED",
  "scheduling_purpose": "SCHEDULING",
  "due_date": "2024-05-01",
  "value": 10000,
  "created_at": "2024-04-17T17:30:00.020Z",
  "updated_at": "2024-04-17T17:30:00.020Z"
}
```

  </TabItem>
  <TabItem value="Paid">

Triggered when a charge is successfully paid.

```json
{
  "id": "d4e5f6a7-b8c9-0123-defa-123456789012",
  "user_id": "9d77c248-c5b5-4f6d-9d12-d1463dc49bd9",
  "pix_automatic_recurrence_id": "b2c3d4e5-f6a7-8901-bcde-f01234567890",
  "pix_automatic_recurrence_user_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "contract_number": "CONTRACT-001",
  "type": "PIX_AUTOMATIC_CHARGE_PAID",
  "status": "PAID",
  "scheduling_purpose": "SCHEDULING",
  "due_date": "2024-05-01",
  "value": 10000,
  "created_at": "2024-04-17T17:30:00.020Z",
  "updated_at": "2024-05-01T08:00:00.000Z"
}
```

  </TabItem>
  <TabItem value="Not Paid">

Triggered when a charge is not paid (e.g., insufficient funds, account blocked).

```json
{
  "id": "d4e5f6a7-b8c9-0123-defa-123456789012",
  "user_id": "9d77c248-c5b5-4f6d-9d12-d1463dc49bd9",
  "pix_automatic_recurrence_id": "b2c3d4e5-f6a7-8901-bcde-f01234567890",
  "pix_automatic_recurrence_user_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "contract_number": "CONTRACT-001",
  "type": "PIX_AUTOMATIC_CHARGE_NOT_PAID",
  "status": "NOT_PAID",
  "scheduling_purpose": "SCHEDULING",
  "due_date": "2024-05-01",
  "value": 10000,
  "created_at": "2024-04-17T17:30:00.020Z",
  "updated_at": "2024-05-01T08:00:00.000Z"
}
```

  </TabItem>
  <TabItem value="Canceled">

Triggered when a charge is canceled before payment.

```json
{
  "id": "d4e5f6a7-b8c9-0123-defa-123456789012",
  "user_id": "9d77c248-c5b5-4f6d-9d12-d1463dc49bd9",
  "pix_automatic_recurrence_id": "b2c3d4e5-f6a7-8901-bcde-f01234567890",
  "pix_automatic_recurrence_user_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "contract_number": "CONTRACT-001",
  "type": "PIX_AUTOMATIC_CHARGE_CANCELED",
  "status": "CANCELED",
  "scheduling_purpose": "SCHEDULING",
  "due_date": "2024-05-01",
  "value": 10000,
  "cancellation_reason": "REQUESTED_BY_PAYER",
  "created_at": "2024-04-17T17:30:00.020Z",
  "updated_at": "2024-04-30T15:00:00.000Z"
}
```

  </TabItem>
  <TabItem value="Created Failed">

Triggered when a charge creation fails during registration with the PSP.

```json
{
  "id": "d4e5f6a7-b8c9-0123-defa-123456789012",
  "user_id": "9d77c248-c5b5-4f6d-9d12-d1463dc49bd9",
  "pix_automatic_recurrence_id": "b2c3d4e5-f6a7-8901-bcde-f01234567890",
  "pix_automatic_recurrence_user_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "contract_number": "CONTRACT-001",
  "type": "PIX_AUTOMATIC_CHARGE_CREATED_FAILED",
  "status": "CREATED_FAILED",
  "scheduling_purpose": "SCHEDULING",
  "due_date": "2024-05-01",
  "value": 10000,
  "failed_code": "PIX_AUTOMATIC_CHARGE_CREATED_FAILED",
  "failed_message": "Internal error during charge creation.",
  "created_at": "2024-04-17T17:30:00.020Z",
  "updated_at": "2024-04-17T17:30:00.020Z"
}
```

  </TabItem>
  <TabItem value="Canceled Failed">

Triggered when a charge cancellation attempt fails during communication with the PSP.

```json
{
  "id": "d4e5f6a7-b8c9-0123-defa-123456789012",
  "user_id": "9d77c248-c5b5-4f6d-9d12-d1463dc49bd9",
  "pix_automatic_recurrence_id": "b2c3d4e5-f6a7-8901-bcde-f01234567890",
  "pix_automatic_recurrence_user_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "contract_number": "CONTRACT-001",
  "type": "PIX_AUTOMATIC_CHARGE_CANCELED_FAILED",
  "status": "CANCELED_FAILED",
  "scheduling_purpose": "SCHEDULING",
  "due_date": "2024-05-01",
  "value": 10000,
  "cancellation_reason": "REQUESTED_BY_PAYER",
  "failed_code": "PIX_AUTOMATIC_CHARGE_CANCELED_FAILED",
  "failed_message": "Internal error during charge cancellation.",
  "created_at": "2024-04-17T17:30:00.020Z",
  "updated_at": "2024-04-30T15:00:00.000Z"
}
```

  </TabItem>
</Tabs>

## Pix Automatic Payment Webhooks

Triggered when a Pix automatic payment (settled transaction within an authorization) changes status. Unlike the charge, the payment represents the actual financial movement.

> Possible `status` values: `CREATED`, `CANCELLATION_FAILED`, `CANCELED`.<br />
> Possible `scheduling_purpose` values: `SCHEDULING`, `NEW_ATTEMPT`, `RESEND`.

### Payloads (Version 1)

<Tabs>
  <TabItem value="Created">

Triggered when a payment is successfully created and settled.

```json
{
  "id": "e5f6a7b8-c9d0-1234-efab-234567890123",
  "user_id": "9d77c248-c5b5-4f6d-9d12-d1463dc49bd9",
  "pix_automatic_authorization_id": "c3d4e5f6-a7b8-9012-cdef-012345678901",
  "type": "PIX_AUTOMATIC_PAYMENT_CREATED",
  "status": "CREATED",
  "previous_status": null,
  "scheduling_purpose": "SCHEDULING",
  "due_date": "2024-05-01",
  "value": 10000,
  "end_to_end_id": "E26264220202405011730XyzAbc12345",
  "conciliation_receiver_id": "RR26264220202405011730XyzAbc12345",
  "recurrence_id": "b2c3d4e5-f6a7-8901-bcde-f01234567890",
  "cancellation_id": null,
  "created_at": "2024-05-01T17:30:00.020Z",
  "updated_at": "2024-05-01T17:30:00.020Z",
  "event_timestamp": "2024-05-01T17:30:00.020Z",
  "event_id": "e5f6a7b8-c9d0-1234-efab-234567890123_CREATED_1714583400020"
}
```

  </TabItem>
  <TabItem value="Canceled">

Triggered when a payment is canceled.

```json
{
  "id": "e5f6a7b8-c9d0-1234-efab-234567890123",
  "user_id": "9d77c248-c5b5-4f6d-9d12-d1463dc49bd9",
  "pix_automatic_authorization_id": "c3d4e5f6-a7b8-9012-cdef-012345678901",
  "type": "PIX_AUTOMATIC_PAYMENT_CANCELED",
  "status": "CANCELED",
  "previous_status": "CREATED",
  "scheduling_purpose": "SCHEDULING",
  "due_date": "2024-05-01",
  "value": 10000,
  "end_to_end_id": "E26264220202405011730XyzAbc12345",
  "conciliation_receiver_id": "RR26264220202405011730XyzAbc12345",
  "recurrence_id": "b2c3d4e5-f6a7-8901-bcde-f01234567890",
  "cancellation_id": "cancel-abc-123",
  "created_at": "2024-05-01T17:30:00.020Z",
  "updated_at": "2024-05-02T09:00:00.000Z",
  "event_timestamp": "2024-05-02T09:00:00.000Z",
  "event_id": "e5f6a7b8-c9d0-1234-efab-234567890123_CANCELED_1714640400000"
}
```

  </TabItem>
  <TabItem value="Cancellation Failed">

Triggered when a payment cancellation attempt fails.

```json
{
  "id": "e5f6a7b8-c9d0-1234-efab-234567890123",
  "user_id": "9d77c248-c5b5-4f6d-9d12-d1463dc49bd9",
  "pix_automatic_authorization_id": "c3d4e5f6-a7b8-9012-cdef-012345678901",
  "type": "PIX_AUTOMATIC_PAYMENT_CANCELLATION_FAILED",
  "status": "CANCELLATION_FAILED",
  "previous_status": "CREATED",
  "scheduling_purpose": "SCHEDULING",
  "due_date": "2024-05-01",
  "value": 10000,
  "end_to_end_id": "E26264220202405011730XyzAbc12345",
  "conciliation_receiver_id": "RR26264220202405011730XyzAbc12345",
  "recurrence_id": "b2c3d4e5-f6a7-8901-bcde-f01234567890",
  "cancellation_id": "cancel-abc-123",
  "created_at": "2024-05-01T17:30:00.020Z",
  "updated_at": "2024-05-02T09:00:00.000Z",
  "event_timestamp": "2024-05-02T09:00:00.000Z",
  "event_id": "e5f6a7b8-c9d0-1234-efab-234567890123_CANCELLATION_FAILED_1714640400000"
}
```

  </TabItem>
</Tabs>

## Bolepix Deposit Webhooks

Triggered when a Bolepix (banking billet with embedded Pix QR code) changes state. A Bolepix is a bank slip that also contains an embedded Pix QR code, allowing the payer to settle it via either method.

> Possible `state` values: `CREATED_CONFIRMED`, `CREATED_FAILED`, `RECEIVED`.<br />
> Possible `status` values: `CREATED_BILLET_PENDING`, `CREATED_BILLET_WAITING`, `CREATED_BILLET_CONFIRMED`, `CREATED_BILLET_FAILED`, `CREATED_QRCODE_PENDING`, `CREATED_QRCODE_CONFIRMED`, `CREATED_QRCODE_FAILED`.<br />
> Possible `qr_code_type` values: `PIX_AUTOMATIC`, `PIX_QRCODE_DYNAMIC`.

### Payloads (Version 1)

<Tabs>
  <TabItem value="Created Confirmed">

Triggered when a Bolepix is successfully created and the Pix QR code is confirmed.

```json
{
  "id": "a7b8c9d0-e1f2-3456-abcd-ef0123456789",
  "user_id": "9d77c248-c5b5-4f6d-9d12-d1463dc49bd9",
  "wallet_id": "f08e96c8-b659-40bf-a1bd-5225ef4e5632",
  "operation_id": "cb835846-47b2-4bad-abd3-56e8b0d65ffe",
  "tx_id": "TX0001234567890",
  "state": "CREATED_CONFIRMED",
  "previous_state": "CREATED_WAITING",
  "status": "CREATED_QRCODE_CONFIRMED",
  "emv": "00020101021226890014br.gov.bcb.pix2567qrcode.example.com/v2/a7b8c9d0-e1f2-3456-abcd-ef01234567895204000053039865802BR5913Z.ro Bolsao6009Sao Paulo62070503***6304ABCD",
  "payment_link_url": "https://pay.example.com/bolepix/a7b8c9d0",
  "due_date": "2024-05-10T00:00:00.000Z",
  "limit_due_date": "2024-05-20T00:00:00.000Z",
  "amount": 15000,
  "amount_received": null,
  "interest_perc_value": 1.00,
  "fine_value": 200,
  "discount_value": null,
  "beneficiary": {
    "name": "Z.ro Bolsao",
    "document": "00000000000000",
    "city": "São Paulo"
  },
  "pix_key": {
    "key": "00000000000000"
  },
  "payer": {
    "person_type": "CPF",
    "document": "***000000**",
    "name": "Name"
  },
  "qr_code_id": "b2c3d4e5-f6a7-8901-bcde-f01234567890",
  "qr_code_type": "PIX_QRCODE_DYNAMIC",
  "description": "Fatura Maio 2024",
  "recipient_city": "São Paulo",
  "external_id": "EXT-001",
  "transaction_tag": "TAG-001",
  "allow_update": true,
  "allow_update_change": false,
  "allow_update_withdrawal": false,
  "failure": null,
  "confirmed_at": null,
  "event_timestamp": "2024-04-17T17:30:00.020Z"
}
```

  </TabItem>
  <TabItem value="Created Failed">

Triggered when a Bolepix creation fails during billet registration or QR code generation.

```json
{
  "id": "a7b8c9d0-e1f2-3456-abcd-ef0123456789",
  "user_id": "9d77c248-c5b5-4f6d-9d12-d1463dc49bd9",
  "wallet_id": "f08e96c8-b659-40bf-a1bd-5225ef4e5632",
  "operation_id": "cb835846-47b2-4bad-abd3-56e8b0d65ffe",
  "state": "CREATED_FAILED",
  "previous_state": "CREATED_WAITING",
  "status": "CREATED_BILLET_FAILED",
  "due_date": "2024-05-10T00:00:00.000Z",
  "limit_due_date": "2024-05-20T00:00:00.000Z",
  "amount": 15000,
  "beneficiary": {
    "name": "Z.ro Bolsao",
    "document": "00000000000000",
    "city": "São Paulo"
  },
  "payer": {
    "person_type": "CPF",
    "document": "***000000**",
    "name": "Name"
  },
  "description": "Fatura Maio 2024",
  "failure": [
    {
      "code": "BANKING_BILLET_PIX_DEPOSIT_CREATED_FAILED",
      "message": "Internal error during billet registration."
    }
  ],
  "confirmed_at": null,
  "event_timestamp": "2024-04-17T17:30:00.020Z"
}
```

  </TabItem>
  <TabItem value="Received">

Triggered when the Bolepix payment is received (paid by the payer).

```json
{
  "id": "a7b8c9d0-e1f2-3456-abcd-ef0123456789",
  "user_id": "9d77c248-c5b5-4f6d-9d12-d1463dc49bd9",
  "wallet_id": "f08e96c8-b659-40bf-a1bd-5225ef4e5632",
  "operation_id": "cb835846-47b2-4bad-abd3-56e8b0d65ffe",
  "tx_id": "TX0001234567890",
  "state": "RECEIVED",
  "previous_state": "CREATED_CONFIRMED",
  "status": "CREATED_QRCODE_CONFIRMED",
  "emv": "00020101021226890014br.gov.bcb.pix2567qrcode.example.com/v2/a7b8c9d0-e1f2-3456-abcd-ef01234567895204000053039865802BR5913Z.ro Bolsao6009Sao Paulo62070503***6304ABCD",
  "payment_link_url": "https://pay.example.com/bolepix/a7b8c9d0",
  "due_date": "2024-05-10T00:00:00.000Z",
  "limit_due_date": "2024-05-20T00:00:00.000Z",
  "amount": 15000,
  "amount_received": 15000,
  "beneficiary": {
    "name": "Z.ro Bolsao",
    "document": "00000000000000",
    "city": "São Paulo"
  },
  "pix_key": {
    "key": "00000000000000"
  },
  "payer": {
    "person_type": "CPF",
    "document": "***000000**",
    "name": "Name"
  },
  "qr_code_id": "b2c3d4e5-f6a7-8901-bcde-f01234567890",
  "qr_code_type": "PIX_QRCODE_DYNAMIC",
  "description": "Fatura Maio 2024",
  "recipient_city": "São Paulo",
  "external_id": "EXT-001",
  "transaction_tag": "TAG-001",
  "confirmed_at": "2024-05-08T10:30:00.000Z",
  "event_timestamp": "2024-05-08T10:30:00.000Z"
}
```

  </TabItem>
</Tabs>

## Bolepix Deposit Batch Webhooks

Triggered when a batch of Bolepix (banking billet with embedded Pix QR code) changes status. A batch groups multiple billets for bulk generation and distribution by email.

> Possible `status` values: `REJECTED`, `GENERATED`, `FAILED`.

### Payloads (Version 1)

<Tabs>
  <TabItem value="Generated">

Triggered when a batch is successfully processed and all billets are generated.

```json
{
  "id": "c9d0e1f2-a3b4-5678-cdef-012345678901",
  "batch_name": "Lote Maio 2024",
  "status": "GENERATED",
  "previous_status": "VALIDATED",
  "items_count": 150,
  "personalized": false,
  "email_send_date": "2024-05-01T08:00:00.000Z",
  "event_timestamp": "2024-04-30T17:30:00.020Z"
}
```

  </TabItem>
  <TabItem value="Rejected">

Triggered when a batch fails validation and is rejected before generation.

```json
{
  "id": "c9d0e1f2-a3b4-5678-cdef-012345678901",
  "batch_name": "Lote Maio 2024",
  "status": "REJECTED",
  "previous_status": "UNDER_ANALYSIS",
  "items_count": 150,
  "personalized": false,
  "email_send_date": null,
  "event_timestamp": "2024-04-30T17:30:00.020Z"
}
```

  </TabItem>
  <TabItem value="Failed">

Triggered when a batch fails during processing due to an internal error.

```json
{
  "id": "c9d0e1f2-a3b4-5678-cdef-012345678901",
  "batch_name": "Lote Maio 2024",
  "status": "FAILED",
  "previous_status": "VALIDATED",
  "items_count": 150,
  "personalized": false,
  "email_send_date": null,
  "event_timestamp": "2024-04-30T17:30:00.020Z"
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
