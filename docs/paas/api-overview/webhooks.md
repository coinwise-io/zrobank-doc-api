import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Webhooks

Your account can be configured so that when certain events occur on your account, a HTTP POST request containing JSON data pertaining to that event is sent to one or more URLs of your choosing. These URLs can be configured inside your settings making a request to our team. Notifications of all events listed below are sent to all the configured URLs.
<br />

## Types of webhooks

| Type                           | Description                                  |
| ------------------------------ | -------------------------------------------- |
| PAYMENT                        | When you send a pix payment.                 |
| PAYMENT FAILED                 | When you send a pix payment and it fails.    |
| DEVOLUTION                     | When you send a pix devolution.              |
| DEVOLUTION FAILED              | When you send a pix devolution and it fails. |
| DEVOLUTION RECEIVED            | When receive a pix devolution.               |
| DEPOSIT                        | When receive a pix deposit.                  |
| WALLET ACCOUNT BALANCE UPDATED | When the balance is updated.                 |

<br /><br />

## Credentials (Not required)

Each webhook registration can have one credential. You generate the credential value and share it with our team through a secure channel when you register the webhook. We send it in an HTTP header on every request to that webhook, exactly as registered.

| Type                   | Header we send             | Value                         |
| ---------------------- | -------------------------- | ----------------------------- |
| Authorization Basic    | `Authorization`            | base64 of `username:password` |
| Authorization Bearer   | `Authorization`            | API key or token              |
| Signature Verification | `zro-signature`            | Shared secret key             |
| Custom header          | Header name of your choice | API key or token              |

No prefix such as `Basic ` or `Bearer ` is added. If your server expects one, include it in the value you register.

<br /><br />

## Verifying Webhook Requests

Webhook requests are authenticated only by the credential header:

- The value is static: it is the same on every request and carries no timestamp or nonce.
- No signature, such as an HMAC, is computed, and the payload is not signed. With the `Signature Verification` type, the `zro-signature` header carries the shared secret key itself.
- The same mechanism applies to every webhook type. The credential is configured per webhook registration.

To verify a request, compare the header value with the credential you registered and reject the request if they differ:

```js
const crypto = require('node:crypto');

const expected = Buffer.from(process.env.WEBHOOK_CREDENTIAL);

function isAuthenticWebhook(request) {
  // Use `zro-signature`, `authorization` or your custom header name.
  const received = Buffer.from(request.headers['zro-signature'] ?? '');

  return (
    received.length === expected.length &&
    crypto.timingSafeEqual(received, expected)
  );
}
```

<br /><br />

## Retry Policy

A delivery succeeds when your endpoint responds with a `2xx` status. A delivery fails when:

- the response has any other status, including `4xx` and `5xx`;
- no response arrives within the request timeout;
- the connection fails (for example, DNS, TLS or connection refused).

The request timeout is defined per webhook.

Failed deliveries are retried only if a retry policy is configured for your webhook. Otherwise, each event is sent once. Ask our team to set or confirm the policy when you register or update the webhook. The policy defines:

- **Maximum attempts:** the total number of deliveries, including the first one.
- **Initial interval and multiplier:** the wait between attempts starts from the initial interval and grows exponentially, with a small random variation.
- **Maximum interval:** the longest wait between two attempts. Once it is reached, the remaining attempts use this interval.

There is no setting for the total retry period. It results from the maximum attempts and the intervals.

When the last attempt fails, the event is not sent again. Use the query endpoints to reconcile events you did not receive.

The same event can arrive more than once, for example when your endpoint processes it but responds after the timeout. Process webhooks idempotently.

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
  "owner_branch_number": null,
  "owner_account_number": null,
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
