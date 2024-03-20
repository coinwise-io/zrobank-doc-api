import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RequestComponent from '@site/src/components/RequestComponent'
import headerParams from '@site/docs/gateway/endpoints/qr-codes/params/GenerateNewQrCode/headerParams.ts'
import bodyParams from '@site/docs/gateway/endpoints/qr-codes/params/GenerateNewQrCode/bodyParams.ts'

# Generate a new QrCode without split


| POST      | /api/trasaction/generate_qr_code_pix |
| --------- | ------------------------------------ |

Generates a new dynamic QR Code.


## Request

<RequestComponent selectorBaseUrl="gateway" headerParams={headerParams} bodyParams={bodyParams} endpoint="/api/trasaction/generate_qr_code_pix" method="post">

### Header

| Title                                | Type       | Description    |
| ------------------------------------ | :---------:|--------------- |
| x-api-key:small_orange_diamond:      | STRING     | Your x-api-key |
:small_orange_diamond: *Required parameters on header*

### Body

| Title                                  | Type        |Properties                         | Maximum Length  | Description                                              |
| -------------------------------------- | :---------: |-----------------------------------|:---------------:| -------------------------------------------------------- |
| value:small_orange_diamond:            | NUMBER      | -                                 |   INT4          | Value to be paid                                         |
| description:small_orange_diamond:      | STRING      | -                                 |   255           | Description of the transaction                           |
| client_name:small_orange_diamond:      | STRING      | -                                 |   255           | Name of the person whose charge is being designed to     |
| client_email                           | STRING      | -                                 |   255           | Email of the person whose charge is being designed to    |
| client_document:small_orange_diamond:  | STRING      | -                                 |   255           | Document of the person whose charge is being designed to |
| merchant_id:small_orange_diamond:      | STRING      | Must be a **UUID**                |   -             | Reference of the store that solicitate the QrCode        |
:small_orange_diamond: *Required parameters on body*

<Tabs>
<TabItem value="js_axios" label="NodeJS">

```js title=Axios
const axios = require('axios');

const url = 'https://sandbox-api-payments.zrobank.xyz/api/trasaction/generate_qr_code_pix';

const headers = {
    'x-api-key': '{your API key}',
    'Content-Type': 'application/json'
};

const data = {
  value: 10,
  description: "Cobrança de deposito",
  client_name: "Johnny",
  client_email: "client@email.com",
  client_document: "81688771280",
  merchant_id: "271e4016-47de-45e0-9340-6f2560ce3a90"
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

url = "https://sandbox-api-payments.zrobank.xyz/api/trasaction/generate_qr_code_pix"
api_key = "{your API key}"
params = {
    "value': 10,
    "description": "Cobrança de deposito",
    "client_name": "Johnny",
    "client_email": "client@email.com",
    "client_document": "81688771280",
    "merchant_id": "271e4016-47de-45e0-9340-6f2560ce3a90"
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
curl -X POST https://sandbox-api-payments.zrobank.xyz/api/trasaction/generate_qr_code_pix \
     -H 'Content-Type: application/json' \
     -H 'x-api-key: {Your api key}' \
     -d $'{
            "value": 10,
            "description": "Cobrança de deposito",
            "client_name": "Johnny",
            "client_email": "client@email.com",
            "client_document": "81688771280",
            "merchant_id": "271e4016-47de-45e0-9340-6f2560ce3a90"
        }'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://sandbox-api-payments.zrobank.xyz/api/trasaction/generate_qr_code_pix';
$api_key = '{your API key}';
$params = array(
    "value" => 10,
    "description" => "Cobrança de deposito",
    "client_name" => "Johnny",
    "client_email" => "client@email.com",
    "client_document" => "81688771280"
    "merchant_id => ""271e4016-47de-45e0-9340-6f2560ce3a90""
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

```json  title=/api/trasaction/generate_qr_code_pix
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

```json  title=/api/trasaction/generate_qr_code_pix
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
| merchant_id                          | STRING     |  **UUID**                                       | Reference of the store that solicitate the QrCode        |
</RequestComponent>