import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get PIX key by ID

| GET       | /pix/keys/{id}|
| --------- | --------------|


Enter the pix key ID below and execute to get it's state and all information.

:::note
Canceled keys are not returned **(422 error will be sent)**
:::


## Request <a href="https://sandbox.zro.com/api/api/" class="try-btn">Try it!</a>

### Header

| Title                      | Type       | Properties                       | Description |
| ---------------------------| :---------:|:-------------------------------: |----------------------------------------------------------------------------------------------------------------|
| nonce:small_orange_diamond:| STRING     | Must be a **UUID**           | The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier|
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

const url = 'https://sandbox.zro.com/api/pix/keys/9973c013-2eba-4b11-9828-1d458f30861e';

const headers = {
  accept: 'application/json',
  nonce: "c63267ad-3f5c-487b-9f52-b73c9dd7a10d",
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

url = "https://sandbox.zro.com/api/pix/keys/9973c013-2eba-4b11-9828-1d458f30861e"

headers = {
    "accept": "application/json",
    "nonce": "c63267ad-3f5c-487b-9f52-b73c9dd7a10d",
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
  'https://sandbox.zro.com/api/pix/keys/9973c013-2eba-4b11-9828-1d458f30861e' \
  -H 'accept: application/json' \
  -H 'nonce: c63267ad-3f5c-487b-9f52-b73c9dd7a10d' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://sandbox.zro.com/api/pix/keys/9973c013-2eba-4b11-9828-1d458f30861e';

$headers = array(
  'accept: application/json',
  'nonce: c63267ad-3f5c-487b-9f52-b73c9dd7a10d',
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

```json  title=/pix/keys/{id}
{
  "success": true,
  "data": {
    "id": "9973c013-2eba-4b11-9828-1d458f30861e",
    "key": "5df524a2-cb6c-43cb-b191-251008d40c52",
    "type": "EVP",
    "state": "ADD_KEY_READY",
    "created_at": "2023-03-03T23:16:12.994Z"
  },
  "error": null
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/pix/keys/{id}
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Access is denied."
}
```
</TabItem>
<TabItem value="422" label="422">

```json  title=/pix/keys/{id}
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "The id value must be an UUID.",
  "code": "VALIDATION"
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
| failed_message | STRING     | -                     | Pix Key failed message    |
:small_orange_diamond: *Required fields in the response*