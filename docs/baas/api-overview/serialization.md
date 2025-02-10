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
    "id": "926fe974-d833-419c-ae11-d2d48e17bdff",
    "operation_id": "68cfd14c-edd7-44ab-ab6b-4efeed0aca39",
    "type": "PAYMENT_COMPLETED",
    "state": "CONFIRMED",
    "end_to_end_id": null,
    "txid": "ZvuKVfwtljGH2qmkoFeU15gnz",
    "amount": 1,
    "owner_name": "Test User",
    "owner_person_type": "NATURAL_PERSON",
    "owner_document": "***024157**",
    "owner_bank_name": "ZRO PAGAMENTOS S/A",
    "owner_bank_ispb": "26264220",
    "beneficiary_name": "JOAO DA SILVA SAURO",
    "beneficiary_person_type": "NATURAL_PERSON",
    "beneficiary_document": "***594110**",
    "beneficiary_bank_name": "ZRO PAGAMENTOS S/A",
    "beneficiary_bank_ispb": "26264220",
    "created_at": "2022-06-07T00:30:39.204Z"
  },
  "error": null
}
```

</TabItem>

<TabItem value='js1' label='400'>

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
