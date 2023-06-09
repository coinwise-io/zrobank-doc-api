import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Generate complete or partial refund

| POST      | /api/trasaction/generate_refund |
| --------- | ------------------------------- |

Generates a new complete or a partial refund.

- **For partial refund of an individual order or for multiple orders at once, the orders must be specified in an array of objects**
- **For a single order, the array will be composed by one single object**
- **For multiple orders, the array will be composed by multiple objects**
- **For complete refund, orders is not required**


## Request <a href="https://sandbox-api-payments.zrobank.xyz/api/documentation" class="try-btn">Try it!</a>

### Header
| Title                                | Type       | Description    |
| ------------------------------------ | :---------:|--------------- |
| x-api-key:small_orange_diamond:      | STRING     | Your x-api-key |
:small_orange_diamond: *Required parameters on header*


### Body

#### General

| Title                                    | Type       |Properties        |Maximum Length  | Description                                              |
| ---------------------------------------- | :---------:|:----------------:|:-------------: | -------------------------------------------------------- |
| description:small_orange_diamond:        | STRING     |-                 |  255           | Description of the return                                |
| merchant_id:small_orange_diamond:        | STRING     |Must be a **UUID**|   -            | Reference of the store that solicitate the return        |
| transaction_uuid:small_orange_diamond:   | STRING     |Must be a **UUID**|   -            | Reference of the transaction that should be returned     |
| client_document:small_orange_diamond:    | STRING     |-                 |  255           | Client's document (CPF or CNPJ)                          |
:small_orange_diamond: *Required parameters on body*

#### Orders

| Title                                    | Type        |Properties        |Maximum Length     | Description                                                             |
| ---------------------------------------- | :----------:|:----------------:|:---------------:  | ----------------------------------------------------------------------- |
| value:small_orange_diamond:              | NUMBER      |-                 |  INT4             | Value that should be returned to the store                              |
| company_identifier:small_orange_diamond: | STRING      |Must be a **UUID**|  -                | Identifier for the store that should return the value(wallet identifier)|
:small_orange_diamond: *Required parameters on body*

<Tabs>
<TabItem value="js_axios" label="NodeJS">

```js title=Axios
const axios = require('axios');

axios({
  method: 'post',
  url: 'https://sandbox-api-payments.zrobank.xyz/api/transaction/generate_refund',
  headers: {
    'x-api-key': '{your API key}',
    'Content-Type': 'application/json'
  },
  data: {
    description: "Return example",
    merchant_id: "7da0c9af-215e-4625-b484-b8cfc87aaa09",
    transaction_uuid: "1a3259d0-f3b9-40dd-ab60-f594996a6453",
    client_document: "13813438058",
    orders: [
      {
        value: 100,
        company_identifier: "f6e2e084-29b9-4935-a059-5473b13033aa"
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

url = "https://sandbox-api-payments.zrobank.xyz/api/transaction/generate_refund"
api_key = "{your API key}"
params = {
  "description": "Return example",
  "merchant_id": "7da0c9af-215e-4625-b484-b8cfc87aaa09",
  "transaction_uuid": "1a3259d0-f3b9-40dd-ab60-f594996a6453",
  "client_document": "13813438058",
  "orders": [
    {
      "value": 100,
      "company_identifier": "f6e2e084-29b9-4935-a059-5473b13033aa"
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
curl -X POST https://sandbox-api-payments.zrobank.xyz/api/transaction/generate_refund \
     -H 'Content-Type: application/json' \
     -H 'x-api-key: {Your api key}' \
     -d $'{
        "description": "Return example",
        "merchant_id": "7da0c9af-215e-4625-b484-b8cfc87aaa09",
        "transaction_uuid": "1a3259d0-f3b9-40dd-ab60-f594996a6453",
        "client_document": "13813438058",
        "orders": [
          {
            "value": 100,
            "company_identifier": "f6e2e084-29b9-4935-a059-5473b13033aa"
          }
        ]
      }'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://sandbox-api-payments.zrobank.xyz/api/transaction/generate_refund';
$api_key = '{your API key}';
$params = array(
    "description" => "Return example",
    "merchant_id" => "7da0c9af-215e-4625-b484-b8cfc87aaa09",
    "transaction_uuid" => "1a3259d0-f3b9-40dd-ab60-f594996a6453",
    "client_document" => "13813438058",
    "orders" => array(
        "value" => 100,
        "company_identifier" => "f6e2e084-29b9-4935-a059-5473b13033aa"
    )
);

$headers = array(
    'x-api-key: ' . $api_key,
    'Content-Type: application/json'
);

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($params));
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);

$response = curl_exec($curl);

$data = json_decode($response, true);

print_r($data);

curl_close($curl);
```
</TabItem>
</Tabs>

## Response

<Tabs>
<TabItem value="201" label="201">

```json  title=/api/transaction/generate_refund
{
  "code": 201,
  "status": "pending",
  "message": null,
  "qr_code": "00020101021126330014br.gov.bcb.pix0111082853887515204000053039865406100.005802BR5912API DE TESTE6009SAO PAULO620605022163045927",
  "transaction_uuid": "7da0c9af-215e-4625-b484-b8cfc87aaa09",
  "merchant_id": "271e4016-47de-45e0-9340-6f2560ce3a90"
}
```
</TabItem>

<TabItem value="401" label="401">

```json  title=/api/transaction/generate_refund
{
  "message": "Invalid x-api-key",
}
```
</TabItem>
</Tabs>

### Data description

| Title                                | Type       | Properties                                      | Description |
| ------------------------------------ | :---------:|:-----------------------------------------------:|--------------------------------------------------------- |
| code                                 | NUMBER     | Available codes:<br/> *200, 422, 404, 408, 500* | Response code                                            |
| status                               | STRING     | Available status:<br/> *pending, failed*        | Transaction status                                       |
| message                              | STRING     | -                                               | Message about the request                                |
| qr_code                              | STRING     | -                                               | PIX EMV QrCode                                           |
| transaction_uuid                     | STRING     | **UUID**                                        | Reference of the QrCode for conciliation                 |
| merchant_id                          | STRING     | **UUID**                                        | Reference of the store that solicitate the QrCode        |
