import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Generate new dynamic QrCode for single or multiple orders

| POST      | /api/trasaction/generate_order_qr_code_pix |
| --------- | ----------- |

Generates a new dynamic QR code for an individual order or for multiple orders at once. The orders must be specified in an array of objects. For a single order, the array will be composed by one single object. For multiple orders, the array will be composed by multiple objects.

## Data description

### General

| Title            | Type        | Description |
| ---------------- | ----------- | ----------- |
| value:small_orange_diamond:          | number      | Value to be paid |
| description:small_orange_diamond:    | string      | Description of the transaction |
| client_document:small_orange_diamond:| string      | Document of the person whose charge is being designed to |
| merchant_id:small_orange_diamond:    | string      | Reference of the store that solicitate the QrCode |
| code             | integer     | Response code|
| status           | string      | Transaction status |
| message          | string      | Message about the request |
| qr_code          | string      | PIX EMV QrCode |
| transaction_uuid | string      | Reference of the QrCode for conciliation |
:small_orange_diamond: *Required parameters to request*


### Orders

| Title                | Type        | Description |
| -------------------- | ----------- | ----------- |
| fee:small_orange_diamond:                | number      | Percent of fee for the store |
| value:small_orange_diamond:              | number      | Value for the store|
| company_identifier:small_orange_diamond: | string      | Identifier for the store(wallet identifier) |

:small_orange_diamond: *Required parameters to request*



## Request

<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

axios({
  method: 'post',
  url: 'https://sandbox-api-payments.zrobank.xyz/api/trasaction/generate_order_qr_code_pix',
  headers: {
    'x-api-key': '{your API key}',
    'Content-Type': 'application/json'
  },
  data: {
    value: 300,
    description: "Qr code Zro Gateway",
    client_document: "80064671020",
    merchant_id: "7da0c9af-215e-4625-b484-b8cfc87aaa09",
    orders: [
      {
        fee: 10,
        value: 100,
        company_identifier: "f6e2e084-29b9-4935-a059-5473b13033aa"
      },
      {
        fee: 20,
        value: 100,
        company_identifier: "df1a24a0-8f4e-478e-84f9-326f48c1f2f2"
      },
      {
        fee: 10,
        value: 100,
        company_identifier: "74b00eb0-9784-421c-b24c-4f08a50f8466"
      }
    ]
  }
})
.then((response) => {
  console.log(response.data);
})
.catch((error) => {
  console.error(error);
});
```
</TabItem>
<TabItem value="py" label="Python">

```python title=Requests
import requests

url = "https://sandbox-api-payments.zrobank.xyz/api/trasaction/generate_order_qr_code_pix"
api_key = "{your API key}"
params = {
    "value": 300,
    "description": "Qr code Zro Gateway",
    "client_document": "80064671020",
    "merchant_id": "7da0c9af-215e-4625-b484-b8cfc87aaa09",
    "orders": [
      {
        "fee": 10,
        "value": 100,
        "company_identifier": "f6e2e084-29b9-4935-a059-5473b13033aa"
      },
      {
        "fee": 20,
        "value": 100,
        "company_identifier": "df1a24a0-8f4e-478e-84f9-326f48c1f2f2"
      },
      {
        "fee": 10,
        "value": 100,
        "company_identifier": "74b00eb0-9784-421c-b24c-4f08a50f8466"
      }
    ]
}

headers = {
    "x-api-key": api_key,
    "Content-Type": "application/json"
}

response = requests.post(url=url, headers=headers, json=params)

print(response)
```
</TabItem>
<TabItem value="shell" label="Shell">

```shell title=CURL
curl -X POST 'https://sandbox-api-payments.zrobank.xyz/api/transaction/generate_order_qr_code_pix' \
  -H 'x-api-key: {your API key}' \
  -H 'Content-Type: application/json' \
  -d '{
  "value": 300,
  "description": "Qr code Zro Gateway",
  "client_document": "80064671020",
  "merchant_id": "7da0c9af-215e-4625-b484-b8cfc87aaa09",
  "orders": [
    {
      "fee": 10,
      "value": 100,
      "company_identifier": "f6e2e084-29b9-4935-a059-5473b13033aa"
    },
    {
      "fee": 20,
      "value": 100,
      "company_identifier": "df1a24a0-8f4e-478e-84f9-326f48c1f2f2"
    },
    {
      "fee": 10,
      "value": 100,
      "company_identifier": "74b00eb0-9784-421c-b24c-4f08a50f8466"
    }
  ]
}'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
//TODO - Make req for PHP case
```
</TabItem>
</Tabs>

## Response

<Tabs>
<TabItem value="201" label="201">

```json  title=/api/trasaction/generate_order_qr_code_pix
{
  {
  "code": 200,
  "status": "pending",
  "message": null,
  "qr_code": "00020101021126330014br.gov.bcb.pix0111082853887515204000053039865406100.005802BR5912API DE TESTE6009SAO PAULO620605022163045927",
  "transaction_uuid": "4807e6e8-b693-4235-aeba-f119b0d32fc0",
  "merchant_id": "7da0c9af-215e-4625-b484-b8cfc87aaa09"
  }
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/api/trasaction/generate_order_qr_code_pix
{
  "message": "Invalid x-api-key",
}
```
</TabItem>
</Tabs>