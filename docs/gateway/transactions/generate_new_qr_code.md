import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Generate a new QrCode

| POST      | /api/trasaction/generate_qr_code_pix |
| --------- | ----------- |

Generates a new dynamic QR Code.

## Data description

| Title            | Type        | Description |
| ---------------- | ----------- | ----------- |
| value🔸          | number      | Value to be paid |
| description🔸    | string      | Description of the transaction |
| client_name🔸    | string      | Name of the person whose charge is being designed to |
| client_email     | string      | Email of the person whose charge is being designed to |
| client_document🔸| string      | Document of the person whose charge is being designed to |
| merchant_id🔸    | string      | Reference of the store that solicitate the QrCode |
| code             | integer     | Response code|
| status           | string      | Transaction status |
| message          | string      | Message about the request |
| qr_code          | string      | PIX EMV QrCode |
| transaction_uuid | string      | Reference of the QrCode for conciliation |
🔸 *Required parameters to request*


## Request

<Tabs>
<TabItem value="js" label="Javascript">
<Tabs>
<TabItem value="js_axios" label="Axios">

```js
const axios = require('axios');

axios({
  method: 'post',
  url: 'https://sandbox-api-payments.zrobank.xyz/api/trasaction/generate_qr_code_pix',
  headers: {
    'x-api-key': '{your API key}',
    'Content-Type': 'application/json'
  },
  data: {
        value: 10,
        description: "Cobrança de deposito",
        client_name: "Johnny",
        client_email: "client@email.com",
        client_document: "80064671020",
        merchant_id: "271e4016-47de-45e0-9340-6f2560ce3a90"
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

<TabItem value="js_fetch" label="Fetch">

```js
const fetch = require('node-fetch');

const url = 'https://sandbox-api-payments.zrobank.xyz/api/trasaction/generate_qr_code_pix';
const apiKey = '{Your API key}';

fetch(url, {
  method: 'POST',
  headers: {
    'x-api-key': apiKey,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    value: 10,
    description: "Cobrança de deposito",
    client_name: "Johnny",
    client_email: "client@email.com",
    client_document: "80064671020",
    merchant_id: "271e4016-47de-45e0-9340-6f2560ce3a90"
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
```
</TabItem>
</Tabs>
</TabItem>
<TabItem value="py" label="Python">
<Tabs>
<TabItem value="py_request" label="Requests">

```python
import requests

url = "https://sandbox-api-payments.zrobank.xyz/api/trasaction/generate_qr_code_pix"
api_key = "{your API key}"
params = {
    "value': 10,
    "description": "Cobrança de deposito",
    "client_name": "Johnny",
    "client_email": "client@email.com",
    "client_document": "80064671020",
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
</Tabs>
</TabItem>
<TabItem value="shell" label="Shell">

<Tabs>
<TabItem value="curl" label="CURL">

```shell
curl -X POST https://sandbox-api-payments.zrobank.xyz/api/trasaction/generate_qr_code_pix \
     -H 'Content-Type: application/json' \
     -H 'x-api-key: {Your api key}' \
     -d $'{
            "value": 10,
            "description": "Cobrança de deposito",
            "client_name": "Johnny",
            "client_email": "client@email.com",
            "client_document": "80064671020",
            "merchant_id": "271e4016-47de-45e0-9340-6f2560ce3a90"
        }'
```
</TabItem>
</Tabs>
</TabItem>
<TabItem value="php" label="PHP">
<Tabs>
<TabItem value="php_curl" label="CURL">

```shell
<?php

$url = 'https://sandbox-api-payments.zrobank.xyz/api/trasaction/generate_qr_code_pix';
$api_key = '{your API key}';
$params = array(
    "value" => 10,
    "description" => "Cobrança de deposito",
    "client_name" => "Johnny",
    "client_email" => "client@email.com",
    "client_document" => "80064671020"
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
