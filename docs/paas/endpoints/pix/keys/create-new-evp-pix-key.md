import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RequestComponent from '@site/src/components/RequestComponent'
import headerParams from '@site/docs/paas/endpoints/pix/keys/params/CreateNewEvpPixKey/headerParams.ts'

# Create new EVP PIX key

| POST      | /pix/keys|
| --------- | ---------|

Create a new EVP key type (random key) to the user


## Request 

<RequestComponent headerParams={headerParams} baseUrl="https://paas.zrobank.xyz" endpoint="/pix/keys" method="post">

### Header

| Title                                    | Type       | Properties         | Maximum Length  | Description                                                                                                                           |
| ---------------------------------------- | :---------:|--------------------|:--------------: |-------------------------------------------------------------------------------------------------------------------------------------- |
| x-transaction-uuid:small_orange_diamond: | STRING     | Must be a **UUID** | -               | The transaction ID is a UUID (v4) used to uniquely identify the object that will be created. All requisitions must have an identifier |
| nonce:small_orange_diamond:              | STRING     | Must be a **UUID** | -               | The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier                       |
:small_orange_diamond: *Required parameters on header*


<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

const url = 'https://sandbox.zro.com/api/pix/keys';

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

url = "https://sandbox.zro.com/api/pix/keys"

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
  'https://sandbox.zro.com/api/pix/keys' \
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

$url = 'https://sandbox.zro.com/api/pix/keys';

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

```json  title=/pix/keys
 {
  "success": true,
  "data": {
    "id": "126f7d3b-9462-4c6d-afdd-65f4b83d9efc",
    "key": null,
    "type": "EVP",
    "state": "CONFIRMED",
    "created_at": "2023-06-05T01:43:33.662Z"
  },
  "error": null
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/pix/keys
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Access is denied."
}
```
</TabItem>
<TabItem value="422" label="422">

```json  title=/pix/keys
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Check the data format {\"isUuid\":\"id must be a UUID\"} and try again.",
  "code": "INVALID_FORMAT"
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