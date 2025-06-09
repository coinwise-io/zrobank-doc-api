import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Pagination

All of our search endpoints that may return a large scale of data have pagination.

With pagination, instead of returning all data at once, the response data is divided into pages. The page configuration is defined in the request, using the parameters listed below.

| Parameter | Description                                                               | Default Value | Maximum Length |
| --------- | ------------------------------------------------------------------------- | ------------- | -------------- |
| page      | Page number.                                                              | 1             | -              |
| size      | Page limit size.                                                          | 20            | 100            |
| sort      | Page sort attribute. The response data will be ordered by this attribute. | -             | -              |
| order     | Page order. Available values: asc, desc.                                  | asc           | -              |

:::note
All of the parameters listed above are optional. If not defined, their DEFAULT values will be considered.
:::

<Tabs>
  <TabItem value="200" label="200">

```json title="/v1/acquirer/transactions?size=20&page=2&sort=created_at&order=desc"
{
  "success": true,
  "data": {
  "page": 1,
  "page_size": 2,
  "page_total": 10,
  "total": 20,
  "data": [
    {
      "id": "b28163ec-3d28-4786-a154-7a28ab3600a6",
      "sales_channel": "INTEGRATION",
      "transaction_method": "CNP",
      "payment_method": "CREDIT",
      "amount_local": 100,
      "amount_original": 20,
      "amount_iof": 2,
      "currency_local": "BRL",
      "currency_original": "BRL",
      "currency_rate": 5,
      "status": "CONFIRMED",
      "buyer_name": "John Doe",
      "buyer_email": "john.doe@example.com",
      "buyer_address": {
        "street": "Main Street",
        "number": 123,
        "city": "São Paulo",
        "federative_unit": "SP",
        "zip_code": "01234-567",
        "country": "Brazil",
        "neighborhood": "Downtown"
      },
      "buyer_phone_number": "+5511999998888",
      "buyer_document_type": "CPF",
      "buyer_document": "08795487935",
      "card_last_numbers": "4456",
      "installments": 1,
      "refund_id": "b321ef4f-eb5b-40a6-b862-dc47d6861ccc",
      "chargeback_id": "9c5ea602-e41a-452c-9698-ab05b761b189",
      "creation_date": "2023-01-01T10:00:00.000Z",
      "last_update_date": "2023-01-01T11:00:00.000Z",
      "confirmation_date": "2023-01-01T12:00:00.000Z",
      "expected_settlement_date": "2023-01-02T12:00:00.000Z"
    },
    {
      "id": "b28163ec-3d28-4786-a154-7a28ab3600a6",
      "sales_channel": "INTEGRATION",
      "transaction_method": "CNP",
      "payment_method": "DEBIT",
      "amount_local": 200,
      "amount_original": 200,
      "amount_iof": 0,
      "currency_local": "BRL",
      "currency_original": "BRL",
      "currency_rate": 1,
      "status": "SETTLED",
      "buyer_name": "Sarah Doe",
      "buyer_email": "Sarah.doe@example.com",
      "buyer_address": {
        "street": "Main Street",
        "number": 123,
        "city": "São Paulo",
        "federativeUnit": "SP",
        "zipCode": "01234-567",
        "country": "Brazil",
        "neighborhood": "Downtown"
      },
      "buyer_phone_number": "+5511999998888",
      "buyer_document_type": "CPF",
      "buyer_document": "12345678901",
      "card_last_numbers": "1234",
      "installments": 1,
      "refund_id": "b321ef4f-eb5b-40a6-b862-dc47d6861ccc",
      "chargeback_id": "9c5ea602-e41a-452c-9698-ab05b761b189",
      "creation_date": "2023-02-15T14:30:00.000Z",
      "last_update_date": "2023-03-22T09:45:00.000Z",
      "confirmation_date": "2023-04-10T16:15:00.000Z",
      "expected_settlement_date": "2023-05-05T08:00:00.000Z"
    }
  ]
},
  "error": null
}
...
```

  </TabItem>
  <TabItem value="500" label="500">

```json title="/v1/acquirer/transactions?size=20&page=2&sort=created_at&order=desc"
{
    "success": false,
    "data": null,
    "error": "SYSTEM",
    "message": "Não foi possível processar o seu pedido. Por favor tente novamente.",
    "code": "UNKNOWN"
}
```

  </TabItem>


</Tabs>
