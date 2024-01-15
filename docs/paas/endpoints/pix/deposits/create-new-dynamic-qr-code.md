import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RequestComponent from '@site/src/components/RequestComponent'
import headerParams from '@site/docs/paas/endpoints/pix/deposits/params/CreateNewDynamicQrCode/headerParams.ts'
import bodyParam from '@site/docs/paas/endpoints/pix/deposits/params/CreateNewDynamicQrCode/bodyParams.ts'

# Create new dynamic QrCode

| POST      | /pix/deposits/qr-codes/dynamic/instant-billing|
| --------- | --------------------------------------------- |

Enter the PIX billing information on the requisition body below and execute to get a new dynamic QR Code.

<RequestComponent headerParams={headerParams} bodyParam={bodyParam} endpoint="/pix/deposits/qr-codes/dynamic/instant-billing" method="post">

## Request <a href="https://sandbox.zro.com/api/api/" class="try-btn">Try it!</a>

### Header

| Title                                    | Type       | Properties         | Maximum Length  | Description                                                                                                                           |
| ---------------------------------------- | :---------:|--------------------|:--------------: |-------------------------------------------------------------------------------------------------------------------------------------- |
| x-transaction-uuid:small_orange_diamond: | STRING     | Must be a **UUID** | -               | The transaction ID is a UUID (v4) used to uniquely identify the object that will be created. All requisitions must have an identifier |
| nonce:small_orange_diamond:              | STRING     | Must be a **UUID** | -               | The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier                       |
:small_orange_diamond: *Required parameters on header*

### Body

| Title                                | Type       | Properties                               | Maximum Length  | Description                        |
| -------------------------------------| :---------:|:----------------------------------------:|:--------------: |------------------------------------|
| key:small_orange_diamond:            | STRING     | -                                        | 255             | PIX key                            |
| document_value:small_orange_diamond: | NUMBER     | -                                        | INT8            | Value in **R$ cents**              |
| expiration_date                      | STRING     | Date Format must be <br/> **YYYY-MM-DD** | -               | Expiration date for generate qrCode|
| summary                              | STRING     | -                                        | 255             | User friendly QR code identifier   |
| description:small_orange_diamond:    | STRING     | -                                        | 255             | User defined payment description   |
| payer_request	                       | STRING     | -                                        | 255             | Payer request                      |
:small_orange_diamond: *Required parameters on body*


<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

const url = 'https://sandbox.zro.com/api/pix/deposits/qr-codes/dynamic/instant-billing';

const headers = {
  accept: 'application/json',
  x-transaction-uuid: '126f7d3b-9462-4c6d-afdd-65f4b83d9efc',
  nonce: 'e5c8e59d-6f37-4c55-8b9a-1366f378abfd',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ',
  'Content-Type: application/json'
};

const data = {
  key: "0ce45063-9c0c-413f-b5b3-b3aa48692ef3",
  document_value: 2300,
  expiration_date: "2023-06-12",
  summary: "party-payment",
  description: "Qr code to receive payment.",
  payer_request: "Send receipt to my email."
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

url = "https://sandbox.zro.com/api/pix/deposits/qr-codes/dynamic/instant-billing"
params = {
    "key": "0ce45063-9c0c-413f-b5b3-b3aa48692ef3",
    "document_value": 2300,
    "expiration_date": "2023-06-12",
    "summary": "party-payment",
    "description": "Qr code to receive payment.",
    "payer_request": "Send receipt to my email."
}

headers = {
    "accept": "application/json",
    "x-transaction-uuid": "126f7d3b-9462-4c6d-afdd-65f4b83d9efc",
    "nonce": "e5c8e59d-6f37-4c55-8b9a-1366f378abfd",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ",
    "Content-Type": "application/json"
}

response = requests.post(url=url, headers=headers, json=params)

print(response)
```
</TabItem>
<TabItem value="shell" label="Shell">

```shell title=CURL
curl -X 'POST' \
  'https://sandbox.zro.com/api/pix/deposits/qr-codes/dynamic/instant-billing' \
  -H 'accept: application/json' \
  -H 'x-transaction-uuid: 126f7d3b-9462-4c6d-afdd-65f4b83d9efc' \
  -H 'nonce: e5c8e59d-6f37-4c55-8b9a-1366f378abfd' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey' \
  -H 'Content-Type: application/json' \
  -d '{
  "key": "0ce45063-9c0c-413f-b5b3-b3aa48692ef3",
  "document_value": 2300,
  "expiration_date": "2023-06-12",
  "summary": "party-payment",
  "description": "Qr code to receive payment.",
  "payer_request": "Send receipt to my email."
}'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://sandbox.zro.com/api/pix/deposits/qr-codes/dynamic/instant-billing';
$params = array(
   "key" => "0ce45063-9c0c-413f-b5b3-b3aa48692ef3",
    "document_value" => 2300,
    "expiration_date" => "2023-06-12",
    "summary" => "party-payment",
    "description" => "Qr code to receive payment.",
    "payer_request" => "Send receipt to my email."
)

$headers = array(
  'accept: application/json',
  'nonce: e5c8e59d-6f37-4c55-8b9a-1366f378abfd',
  'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ',
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
<TabItem value="200" label="200">

```json  title=/pix/deposits/qr-codes/dynamic/instant-billing
  {
  "id": "ef44f622-6e02-4c8c-8f63-ff0c7dd4e12a",
  "txid": "6b928494640f4ee191b81b92efff7234",
  "emv": "00020001021226910014BR.GOV.BCB.PIX2569pix-h.bancotopazio.com.br/pix/v2/cob/6b928494640f4ee191b81b92efff7234520400005303986540523.005802BR5925RAMON TESTE FULLNAME NOME6006Recife62070503***630451F2",
  "key_id": "13efaf17-7651-496b-baa8-08c22dc4e4b9",
  "state": "PENDING",
  "summary": "party-payment",
  "description": "The party payment.",
  "expiration_date": "2023-06-10",
  "created_at": "2023-06-02T20:01:45.380Z"
  }
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/pix/deposits/qr-codes/dynamic/instant-billing
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Access is denied."
}
```
</TabItem>
<TabItem value="422" label="422">

```json  title=/pix/deposits/qr-codes/dynamic/instant-billing
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Pix key was not found. Please try again.",
  "code": "PIX_KEY_NOT_FOUND"
}
```
</TabItem>

</Tabs>

### Data description

| Title                             | Type       |Properties                                 | Description                        |
| --------------------------------  |:----------:|:-----------------------------------------:| ---------------------------------- |
| id:small_orange_diamond:          | STRING     | **UUID**                                  | Qr code ID                         |
| txid:small_orange_diamond:        | STRING     | **UUID**                                  | PIX Tx ID                          |
| emv:small_orange_diamond:         | STRING     | -                                         | EMV code                           |
| key_id:small_orange_diamond:      | STRING     | **UUID**                                  | Associated key UUID                |
| state:small_orange_diamond:       | STRING     | Available values: *PENDING, READY, ERROR* | Qr code state                      |
| summary                           | STRING     | -                                         | User defined payment ID            |
| description:small_orange_diamond: | STRING     | -                                         | User defined payment description   |
| expiration_date                   | STRING     | -                                         | Expiration date for generate qrCode|
| created_at:small_orange_diamond:  | STRING     | Timestamp with timezone                   | QrCode created date                |

:small_orange_diamond: *Required fields in the response*
</RequestComponent>