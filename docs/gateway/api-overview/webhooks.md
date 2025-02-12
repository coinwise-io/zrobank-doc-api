import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Webhooks

Your account can be configured so that when certain events occur on your account, a HTTP POST request containing JSON data pertaining to that event is sent to one or more URLs of your choosing. These URLs can be configured inside your settings making a request to our team. Notifications of all events listed below are sent to all the configured URLs.
<br />

## Payloads

<Tabs>
  <TabItem value="Webbook V1">

```json
{
  "status": "paid",
  "webhook_type": "transaction",
  "transaction_uuid": "7da0c9af-215e-4625-b484-b8cfc87aaa09",
  "status_reason": null,
  "value": "10.0",
  "payment_date": "2023-01-01T12:11:39.090",
  "cpf_cnpj": "80064671020",
  "end_to_end_id": "E1234567820232152928tWRD01e2fXX",
  "merchant_id": "3f49f95d-6c0e-4d2c-bdd0-40c20f372c42"
}
```

  </TabItem>
  <TabItem value="Webbook V2">

```json
{
  "status": "paid",
  "webhook_type": "transaction",
  "transaction_uuid": "7da0c9af-215e-4625-b484-b8cfc87aaa09",
  "status_reason": null,
  "value": "10.0",
  "payment_date": "2023-01-01T12:11:39.090",
  "cpf_cnpj": "80064671020",
  "end_to_end_id": "E1234567820232152928tWRD01e2fXX",
  "merchant_id": "3f49f95d-6c0e-4d2c-bdd0-40c20f372c42",
  "refund": {
    "transaction_parent_uuid": "fb81f2f5-a8bc-4416-823a-abe5e213cd00"
  }
}
```

  </TabItem>
  <TabItem value="Webbook V3">

```json
{
  "status": "paid",
  "webhook_type": "transaction",
  "transaction_uuid": "7da0c9af-215e-4625-b484-b8cfc87aaa09",
  "status_reason": null,
  "value": "10.0",
  "payment_date": "2023-01-01T12:11:39.090",
  "cpf_cnpj": "80064671020",
  "end_to_end_id": "E1234567820232152928tWRD01e2fXX",
  "merchant_id": "3f49f95d-6c0e-4d2c-bdd0-40c20f372c42",
  "client": {
    "name": "Jhonny",
    "cpf_cnpj": "20697282007"
  },
  "payer": {
    "name": "Joseph",
    "cpf_cnpj": "***252670**",
    "bank_name": "Zro Pagamento S.A.",
    "bank_ispb": "26264220",
    "paid_by_client": false
  },
  "receiver": {
    "name": "Jonathan",
    "cpf_cnpj": "69878431045",
    "bank_name": "Zro Pagamento S.A.",
    "bank_ispb": "26264220"
  },
  "refund": {
    "transaction_parent_uuid": "fb81f2f5-a8bc-4416-823a-abe5e213cd00"
  }
}
```

  </TabItem>
  <TabItem value="Webbook V4">

```json
{
  "status": "paid",
  "webhook_type": "transaction",
  "transaction_uuid": "7da0c9af-215e-4625-b484-b8cfc87aaa09",
  "status_reason": null,
  "value": "10.0",
  "payment_date": "2023-01-01T12:11:39.090",
  "cpf_cnpj": "80064671020",
  "end_to_end_id": "E1234567820232152928tWRD01e2fXX",
  "merchant_id": "3f49f95d-6c0e-4d2c-bdd0-40c20f372c42",
  "client": {
    "name": "Jhonny",
    "cpf_cnpj": "20697282007"
  },
  "payer": {
    "name": "Joseph",
    "cpf_cnpj": "***252670**",
    "bank_name": "Zro Pagamento S.A.",
    "bank_ispb": "26264220",
    "paid_by_client": false
  },
  "receiver": {
    "name": "Jonathan",
    "cpf_cnpj": "69878431045",
    "bank_name": "Zro Pagamento S.A.",
    "bank_ispb": "26264220"
  },
  "refund": {
    "transaction_parent_uuid": "fb81f2f5-a8bc-4416-823a-abe5e213cd00"
  },
  "bank_account_data": {
    "bank_name": "Zro Pagamento S.A.",
    "bank_ispb": "26264220",
    "account_number": "56841",
    "account_branch": "0001",
    "account_type": "CACC"
  }
}
```

  </TabItem>
  <TabItem value="Webhook Pix Without QrCode">

```json
{
  "status": "paid",
  "webhook_type": "transaction",
  "transaction_uuid": "7da0c9af-215e-4625-b484-b8cfc87aaa09",
  "description": null,
  "value": "10.0",
  "payment_date": "2023-01-01T12:11:39.090",
  "merchant_id": "3f49f95d-6c0e-4d2c-bdd0-40c20f372c42",
  "end_to_end_id": "E1234567820232152928tWRD01e2fXX",
  "client": {
    "name": "Jhonny",
    "cpf_cnpj": "20697282007"
  },
  "bank_account_data": {
    "bank_name": "Zro Pagamento S.A.",
    "bank_ispb": "26264220"
  }
}
```

  </TabItem>
  <TabItem value="Kyc Webhook">

```json
{
  "name": null,
  "document": "***12345**",
  "ofLegalAge": null,
  "age": null,
  "suspectedDeath": null,
  "pep": null
}
```

  </TabItem>
</Tabs>
