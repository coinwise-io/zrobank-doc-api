import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RequestComponent from '@site/src/components/RequestComponent'
import headerParams from '@site/docs/paas/endpoints/pix/keys/params/DismissPixKeyById/headerParams.ts'
import pathParam from '@site/docs/paas/endpoints/pix/keys/params/DismissPixKeyById/pathParams.ts'

# Dismiss PIX key by ID

| POST      | /pix/keys/\{id\}/dismiss|
| --------- | ----------------------|

Set key to do not be shown anymore. The key state will be changed to: **CLAIM_PENDING, CANCELED or READY :**


|If key state is                   | key state will change to |
|----------------------------------|--------------------------|
|CLAIM_NOT_CONFIRMED               |CLAIM_PENDING             |
|PORTABILITY_REQUEST_AUTO_CONFIRMED|CANCELED                  |
|PORTABILITY_CANCELED              |CANCELED                  |
|OWNERSHIP_CANCELED                |CANCELED                  |
|OWNERSHIP_CONFLICT                |CANCELED                  |
|PORTABILITY_READY                 |READY                     |
|OWNERSHIP_READY                   |READY                     |
|ADD_KEY_READY                     |READY                     |
|DELETED                           |CANCELED                  |
|NOT_CONFIRMED                     |CANCELED                  |


Returns user's pix key which state is **CLAIM_PENDING, CANCELED or READY**


## Request 

<RequestComponent headerParams={headerParams} pathParam={pathParam} endpoint="/pix/keys/" selectorBaseUrl="paas" endpointComplement="/dismiss" method="post">

### Header

| Title                                    | Type       | Properties         | Maximum Length  | Description                                                                                                                           |
| ---------------------------------------- | :---------:|--------------------|:--------------: |-------------------------------------------------------------------------------------------------------------------------------------- |
| nonce:small_orange_diamond:              | STRING     | Must be a **UUID** | -               | The nonce ID is a UUID  used to uniquely identify the requisition. All requisitions must have an identifier                       |
:small_orange_diamond: *Required parameters on header*

### Parameters

| Title                    | Type       | Properties             |Description                                        |
| -------------------------| :---------:|:----------------------:| ------------------------------------------------- |
| id:small_orange_diamond: | STRING     | Must be a **UUID**     | PIX key ID                                        |
:small_orange_diamond: *Required parameters on header*



<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

const url = 'https://sandbox.zro.com/api/pix/keys/fdb9a6b7-9eab-4ff4-ae3d-2e5e137f189d/dismiss';

const headers = {
  accept: 'application/json',
  x-transaction-uuid: '126f7d3b-9462-4c6d-afdd-65f4b83d9efc',
  nonce: 'e5c8e59d-6f37-4c55-8b9a-1366f378abfd',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ',
  'Content-Type: application/json'
};

async function makeRequest() {
  try {
    const response = await axios.post(url, { headers });
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

url = "https://sandbox.zro.com /pix/keys/fdb9a6b7-9eab-4ff4-ae3d-2e5e137f189d/dismiss"

headers = {
    "accept": "application/json",
    "x-transaction-uuid": "126f7d3b-9462-4c6d-afdd-65f4b83d9efc",
    "nonce": "e5c8e59d-6f37-4c55-8b9a-1366f378abfd",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ",
    "Content-Type": "application/json"
}

response = requests.post(url=url, headers=headers)

print(response)
```
</TabItem>
<TabItem value="shell" label="Shell">

```shell title=CURL
curl -X 'POST' \
  'https://sandbox.zro.com /pix/keys/fdb9a6b7-9eab-4ff4-ae3d-2e5e137f189d/dismiss' \
  -H 'accept: application/json' \
  -H 'x-transaction-uuid: 126f7d3b-9462-4c6d-afdd-65f4b83d9ef' \
  -H 'nonce: e5c8e59d-6f37-4c55-8b9a-1366f378abfd' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey' \
  -d ''
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://sandbox.zro.com /pix/keys/fdb9a6b7-9eab-4ff4-ae3d-2e5e137f189d/dismiss';

$headers = array(
  'accept: application/json',
  'nonce: e5c8e59d-6f37-4c55-8b9a-1366f378abfd',
  'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ',
  'Content-Type: application/json'
);

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_POST, true);
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

```json  title= /pix/keys
 {
  "id": "fdb9a6b7-9eab-4ff4-ae3d-2e5e137f189d",
  "key": "8b1ef3a5-6d03-421e-8321-6d88ab5de8a0",
  "type": "EMAIL",
  "state": "READY",
  "created_at": "2023-06-02T20:01:45.410Z"
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title= /pix/keys
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Access is denied."
}
```
</TabItem>
<TabItem value="422" label="422">

```json  title= /pix/keys
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

| Title                             | Type       |Properties                                       | Description                        |
| --------------------------------  |:----------:|-----------------------------------------------| ---------------------------------- |
| id:small_orange_diamond:          | STRING     | **UUID**                                        | PIX key ID                         |
| key:small_orange_diamond:         | STRING     | -                                               | PIX key                            |
| type:small_orange_diamond:        | STRING     | Available values: *CNPJ, CPF, PHONE, EMAIL, EVP* | PIX Key type                       |
| state:small_orange_diamond:       | STRING     | Available values: *PENDING, CONFIRMED, NOT_CONFIRMED, ADD_KEY_READY, READY, CANCELED, ERROR, DELETING, DELETED, PORTABILITY_PENDING, PORTABILITY_OPENED, PORTABILITY_STARTED, PORTABILITY_READY, PORTABILITY_CONFIRMED, PORTABILITY_CANCELED, PORTABILITY_REQUEST_PENDING, PORTABILITY_REQUEST_CANCEL_OPENED, PORTABILITY_REQUEST_CANCEL_STARTED, PORTABILITY_REQUEST_CONFIRM_OPENED, PORTABILITY_REQUEST_CONFIRM_STARTED, PORTABILITY_REQUEST_AUTO_CONFIRMED, OWNERSHIP_PENDING, OWNERSHIP_OPENED, OWNERSHIP_STARTED, OWNERSHIP_CONFIRMED, OWNERSHIP_READY, OWNERSHIP_CANCELED, OWNERSHIP_WAITING, OWNERSHIP_CONFLICT, CLAIM_NOT_CONFIRMED, CLAIM_PENDING, CLAIM_CLOSING, CLAIM_DENIED, CLAIM_CLOSED*       | PIX key state                      |
| created_at:small_orange_diamond:  | STRING     | Timestamp with timezone                         | PIX key created date               |
:small_orange_diamond: *Required fields in the response*
</RequestComponent>