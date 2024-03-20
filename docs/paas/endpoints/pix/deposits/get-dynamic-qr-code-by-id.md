import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RequestComponent from '@site/src/components/RequestComponent'
import headerParams from '@site/docs/paas/endpoints/pix/deposits/params/GetDynamicQrCodeById/headerParams.ts'
import pathParam from '@site/docs/paas/endpoints/pix/deposits/params/GetDynamicQrCodeById/pathParams.ts'


# Get dynamic QrCode by ID

| GET       | /v3/pix/deposits/qr-codes/dynamic/\{id\}|
| --------- | --------------------------------------|


Enter the pix dinamic QR code's ID below and execute to get its state and all information


## Request 

<RequestComponent headerParams={headerParams} pathParam={pathParam} selectorBaseUrl="paas" endpoint="/v3/pix/deposits/qr-codes/dynamic/" method="get">

### Header

| Title                      | Type       | Properties                       | Description |
| ---------------------------| :---------:|:-------------------------------: |----------------------------------------------------------------------------------------------------------------|
| nonce:small_orange_diamond:| STRING     | Must be a **UUID**           | The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier|
:small_orange_diamond: *Required parameters on header*

### Parameters

| Title                    | Type       | Properties             |Description                                        |
| -------------------------| :---------:|:----------------------:| ------------------------------------------------- |
| id:small_orange_diamond: | STRING     | Must be a **UUID**     | QrCode ID                                         |
:small_orange_diamond: *Required parameters on header*



<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');


const url = 'https://sandbox.zro.com/api/pix/deposits/qr-codes/dynamic/abf6c3c6-f54b-4fbf-83ee-75ecf5f36c66';

const headers = {
  accept: 'application/json',
  nonce: "efd746f7-1e64-437d-9364-116242399fc3",
  Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey",
  'Content-Type: application/json'
};

async function makeRequest() {
  try {
    const response = await axios.get(url, { headers });
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

url = "'https://sandbox.zro.com/api/pix/deposits/qr-codes/dynamic/abf6c3c6-f54b-4fbf-83ee-75ecf5f36c66"

headers = {
    "accept": "application/json",
    "nonce": "efd746f7-1e64-437d-9364-116242399fc3",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey",
    "Content-Type": "application/json"
}

response = requests.get(url=url, headers=headers)

print(response)
```
</TabItem>
<TabItem value="shell" label="Shell">

```shell title=CURL
curl -X 'GET' \
  'https://sandbox.zro.com/api/pix/deposits/qr-codes/dynamic/abf6c3c6-f54b-4fbf-83ee-75ecf5f36c66' \
  -H 'accept: application/json' \
  -H 'nonce: efd746f7-1e64-437d-9364-116242399fc3' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://sandbox.zro.com/api/pix/deposits/qr-codes/dynamic/abf6c3c6-f54b-4fbf-83ee-75ecf5f36c66';

$headers = array(
  'accept: application/json',
  'nonce: efd746f7-1e64-437d-9364-116242399fc3',
  'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9',
  'Content-Type: application/json'
);

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_GET, true);
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

```json  title=/v3/pix/deposits/qr-codes/dynamic/\{id\}
{
  "id": "abf6c3c6-f54b-4fbf-83ee-75ecf5f36c66",
  "txid": "f6e2e084-29b9-4935-a059-5473b13033aa",
  "emv": "00020001021226910014br.gov.bcb.pix2569bankaddress.com.br/pix/v2/cob/8b358702141e4162bd68eedfe7fb45f4520400005303986540523.005802BR5924USER",
  "expiration_date": "2023-06-02T20:01:45.380Z",
  "key_id": "f6e2e084-29b9-4935-a059-5473b13033aa",
  "value": 1299,
  "description": "Qr code to receive payment.",
  "state": "READY",
  "created_at": "2023-06-02T20:01:45.381Z"
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/v3/pix/deposits/qr-codes/dynamic/\{id\}
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Access is denied."
}
```
</TabItem>
<TabItem value="422" label="422">

```json  title=/v3/pix/deposits/qr-codes/dynamic/\{id\}
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "QR Code was not found. Please try again.",
  "code": "QR_CODE_DYNAMIC_NOT_FOUND"
}
```
</TabItem>
</Tabs>

### Data description

| Title                                |Type       |Properties                                | Description                            |
| -------------------------------------|:---------:|:-----------------------------------------|----------------------------------------|
| id:small_orange_diamond:             |STRING     |**UUID**                                  | Qr code ID                             |
| txid:small_orange_diamond:           |STRING     |**UUID**                                  | Qr code txID                           |
| emv:small_orange_diamond:            |STRING     |-                                         | EMV code                               |
| expiration_date:small_orange_diamond:|STRING     |-                                         | Qr Code expiration date                |
| key_id:small_orange_diamond:         |STRING     |**UUID**                                  | Associated key UUID                    |
| value                                |NUMBER     |-                                         | Value in **R$ cents**                  |
| description:small_orange_diamond:    |STRING     |-                                         | User defined payment description       |
| state:small_orange_diamond:          |STRING     |Available values : *PENDING, READY, ERROR*| Qr Code state                          |
| created_at:small_orange_diamond:     |STRING     |-                                         | Qr Code created date                   |
:small_orange_diamond: *Required fields in the response*
</RequestComponent>