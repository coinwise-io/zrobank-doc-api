import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Serialization

## Snake case

Data serialization in the Z.ro Bank API requires all response requests to follow the snake case convention to ensure proper integration with the system.

## Request/Response

Both API requests and responses follow the JSON specification, in which request and response bodies are encoded in JSON. Some endpoints do not require the presence of a request body. Responses, in turn, are represented by a single JSON object containing the following keys:

| Key name | Values                                                                                                    |
| -------- | --------------------------------------------------------------------------------------------------------- |
| success  | Indicates whether the request was successful (true) or not (false).                                       |
| data     | Provides the response data in JSON format.                                                                |
| error    | Indicates the type of error that occurred in the request (for example, "AUTH" for authentication errors). |
| message  | Provides additional information about the error that occurred.                                            |

<Tabs>
<TabItem value='js' label='200'>

```json title="Example of JSON response:"
{
  "success": true,
  "data": {
  "id": "b28163ec-3d28-4786-a154-7a28ab3600a6",
  "sales_channel": "INTEGRATION",
  "transaction_method": "CP",
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
  "confirmation_date": "2023-01-01T12:00:00.000Z",
  "expected_settlement_date": "2023-01-02T12:00:00.000Z"
},
  "error": null
}
```

</TabItem>

<TabItem value='js1' label='401'>

```json title="Example of JSON response:"
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Access is denied."
}
```

</TabItem>
</Tabs>
