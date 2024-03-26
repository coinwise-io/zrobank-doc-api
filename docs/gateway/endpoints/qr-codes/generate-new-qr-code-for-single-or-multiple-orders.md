import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RequestComponent from '@site/src/components/RequestComponent'
import headerParams from '@site/docs/gateway/endpoints/qr-codes/params/GenerateNewQrCodeForSingleOrMultipleOrders/headerParams.ts'
import bodyParams from '@site/docs/gateway/endpoints/qr-codes/params/GenerateNewQrCodeForSingleOrMultipleOrders/bodyParams.ts'


# Generate new dynamic QrCode with split

| POST      | /api/trasaction/generate_order_qr_code_pix |
| --------- | ----------- |

Generates a new dynamic QR code for an individual order or for multiple orders at once. The orders must be specified in an array of objects. For a single order, the array will be composed by one single object. For multiple orders, the array will be composed by multiple objects.


## Request

<RequestComponent headerParams={headerParams} selectorBaseUrl="gateway" bodyParams={bodyParams} endpoint="/api/trasaction/generate_order_qr_code_pix" method="post" hasOrdersProp={true} hasOrderFeeProp={true}>

### Header
| Title                                | Type       | Description    |
| ------------------------------------ | :---------:|--------------- |
| x-api-key:small_orange_diamond:      | STRING     | Your x-api-key |
:small_orange_diamond: *Required parameters on header*

### Body

#### General

| Title                                | Type       | Properties            | Maximum Length  | Description                                              |
| ------------------------------------ | :---------:|:---------------------:|:--------------: |--------------------------------------------------------- |
| value:small_orange_diamond:          | NUMBER     |-                      |    INT4         | Value to be paid                                         |
| description:small_orange_diamond:    | STRING     |-                      |    255          | Description of the transaction                           |
| client_document:small_orange_diamond:| STRING     |-                      |    255          | Document of the person whose charge is being designed to |
| merchant_id:small_orange_diamond:    | STRING     |Must be a **UUID**     |    -            | Reference of the store that solicitate the QrCode        |
:small_orange_diamond: *Required parameters on body*

#### Orders

| Title                                    | Type         | Properties         | Description                                 |
| ---------------------------------------- | :-----------:|:------------------:| ------------------------------------------- |
| fee:small_orange_diamond:                | NUMBER       | -                  | Percent of fee for the store                |
| value:small_orange_diamond:              | NUMBER       | -                  | Value for the store                         |
| company_identifier:small_orange_diamond: | STRING       | Must be a **UUID** | Identifier for the store(wallet identifier) |
:small_orange_diamond: *Required parameters on body*

<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

const url = 'https://sandbox-api-payments.zrobank.xyz/api/trasaction/generate_order_qr_code_pix';

const headers = {
  'x-api-key': '{your API key}',
  'Content-Type': 'application/json'
};

const data = {
  value: 300,
  description: "Qr code Zro Gateway",
  client_document: "81688771280",
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
};

async function makeRequest() {
  try {
    const response = await axios.post(url, data, { headers });
    console.log(response.data);
  } catch (error) {
    console.error('Solicitation error:', error.message);
  }
}

makeRequest();
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
    "client_document": "81688771280",
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
  "client_document": "81688771280",
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
<?php

$url = 'https://sandbox-api-payments.zrobank.xyz/api/trasaction/generate_qr_code_pix';
$api_key = '{your API key}';
$params = array(
  "value" => 300,
  "description" => "Qr code Zro Gateway",
  "client_document" => "81688771280",
  "merchant_id" => "7da0c9af-215e-4625-b484-b8cfc87aaa09",
  "orders" => array(
      array(
        "fee" => 10,
        "value" => 100,
        "company_identifier" => "f6e2e084-29b9-4935-a059-5473b13033aa",
      ),
      array(
        "fee" => 20,
        "value" => 100,
        "company_identifier" => "df1a24a0-8f4e-478e-84f9-326f48c1f2f2"
      ),
      array(
        "fee" => 10,
        "value" => 100,
        "company_identifier" => "74b00eb0-9784-421c-b24c-4f08a50f8466"
      )
    )
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


### Data description
| Title                                | Type       | Properties                                      | Description |
| ------------------------------------ | :---------:|:-----------------------------------------------:|--------------------------------------------------------- |
| code                                 | NUMBER     | Available codes:<br/> *200, 422, 404, 408, 500* | Response code                                            |
| status                               | STRING     | Available status:<br/> *pending, failed*        | Transaction status                                       |
| message                              | STRING     |-                                                | Message about the request                                |
| qr_code                              | STRING     |-                                                | PIX EMV QrCode                                           |
| transaction_uuid                     | STRING     |**UUID**                                         | Reference of the QrCode for conciliation                 |
| merchant_id                          | STRING     |**UUID**                                         | Reference of the store that solicitate the QrCode        |
</RequestComponent>