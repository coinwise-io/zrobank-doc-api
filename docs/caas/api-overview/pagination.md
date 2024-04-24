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

```json title="/v3/otc/conversions?page=1&size=20&order=asc&conversion_type=buy"
{
  "success": true,
  "data": {
    "page": 1,
    "page_size": 20,
    "page_total": 13,
    "total": 246,
    "data": [
      {
        "id": "338a58d3-80a6-406e-b726-48c0be9958f0",
        "operation_id": "a98c8772-d938-4966-a7cb-2fb32c60ac64",
        "quotation_id": "466ebc77-2273-457c-af02-a0d2ac0a2c07",
        "price": 518,
        "side": "buy",
        "quote_amount": 3972,
        "quote_currency_symbol": null,
        "quote_currency_decimal": null,
        "quote_currency_title": null,
        "base_amount": 7668975,
        "base_currency_symbol": null,
        "base_currency_decimal": null,
        "base_currency_title": null,
        "created_at": "2022-08-24T19:34:30.439Z"
      },
      {
        "id": "568ddf70-7b2d-4228-9281-a4e05f70372f",
        "operation_id": "87b34037-4c47-434b-b905-042a56131a74",
        "quotation_id": "ca77de9b-a9d8-44ea-80ea-3dc9324cf336",
        "price": 11236429,
        "side": "buy",
        "quote_amount": 8905,
        "quote_currency_symbol": null,
        "quote_currency_decimal": null,
        "quote_currency_title": null,
        "base_amount": 79252,
        "base_currency_symbol": null,
        "base_currency_decimal": null,
        "base_currency_title": null,
        "created_at": "2022-08-24T20:35:03.307Z"
      },
      {
        "id": "678265d7-a9f1-4c10-84af-49a3daba14a1",
        "operation_id": "2b50729b-74b8-493d-b15c-923752b37467",
        "quotation_id": "ea2da27c-7526-4f53-bd33-3a54b2a757d8",
        "price": 11232320,
        "side": "buy",
        "quote_amount": 17804,
        "quote_currency_symbol": null,
        "quote_currency_decimal": null,
        "quote_currency_title": null,
        "base_amount": 158504,
        "base_currency_symbol": null,
        "base_currency_decimal": null,
        "base_currency_title": null,
        "created_at": "2022-08-24T20:35:40.219Z"
      }
    ]
  },
  "error": null
}
...
```

</TabItem>
<TabItem value="422" label="422">

```json title="/v3/otc/conversions?page=1&size=20&order=asc&conversion_type=buy&created_at_start=2022-01-01"
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "The  field created_at_start must be before the end date.",
  "code": "VALIDATION"
}
```

</TabItem>
</Tabs>
