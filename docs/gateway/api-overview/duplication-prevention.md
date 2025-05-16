# Duplication Prevention

This document provides an overview of the duplication prevention mechanisms implemented in the Z.ro Gateway API.

The API is designed to ensure that duplicate requests are not processed, which helps maintain data integrity and
consistency.

## Withdrawal request duplication prevention

Currently, we have implemented some duplication prevention mechanisms for the withdrawal request.

The disableable rules are configurable and can be turned on or off based on the client's needs. If you need to disable
any of these rules, please contact our support team.

The following rules are applied:

### Block due duplicated payment data

Controls the restriction of repeated withdrawals based on payment data.

Blocks repeated withdrawals considering the following data:

- Regular withdrawal: `value`, `key`, and `client_document`
- Account withdrawal: `value`, `account_number`, `account_type`, `branch`, `ispb`, `client_document`

| Disableable | Enabled by default | Default TTL |
|-------------|--------------------|-------------|
| Yes         | Yes                | 2 hours     |

### Block due client document rate limit

Controls the restriction of repeated withdrawals based on the client's document (CPF or CNPJ).

| Disableable | Enabled by default | Default TTL |
|-------------|--------------------|-------------|
| Yes         | Yes                | 1 hour      |

### Block due duplicated Merchant ID

Controls the restriction of repeated withdrawals based on the `merchant_id`.

| Disableable | Enabled by default | Default TTL |
|-------------|--------------------|-------------|
| Yes         | No                 | 2 hours     |

:::note
Although this lock can be disabled, the system still prevents transaction duplication based on `merchant_id`. This
restriction ensures improved and standardized error handling for duplicated `merchant_id` cases.
:::

### Block due repeating all payload

Controls the restriction of repeated withdrawals based on the all payload.

| Disableable | TTL     |
|-------------|---------|
| No          | 2 hours |

:::note
This lock cannot be disabled. It is a mandatory rule to prevent duplicate requests.
:::
