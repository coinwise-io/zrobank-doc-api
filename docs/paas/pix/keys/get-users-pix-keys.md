import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# List user's PIX keys

| GET       | /pix/keys          |
| --------- | -------------------|


Get a list of user's pix keys, **except for canceled keys**


## Request <a href="https://api-dev159sw.zrobank.biz:2083/api/" class="try-btn">Try it!</a>

### Header

| Title                      | Type       | Properties                       | Description |
| ---------------------------| :---------:|:-------------------------------: |----------------------------------------------------------------------------------------------------------------|
| nonce:small_orange_diamond:| STRING     | Must be a **UUID(v4)**           | The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier|
:small_orange_diamond: *Required parameters on header request*


<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

axios({
  method: 'get',
  url: 'https://api-dev159sw.zrobank.biz:2083/pix/keys',
  headers: {
    accept: 'application/json',
    nonce: "9d15cfea-231d-4e22-852c-6f167e42f7bc",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey",
    'Content-Type: application/json'
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

url = 'https://api-dev159sw.zrobank.biz:2083/pix/keys'

headers = {
    "accept": "application/json",
    "nonce": "9d15cfea-231d-4e22-852c-6f167e42f7bc",
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
  'https://api-dev159sw.zrobank.biz:2083/pix/keys' \
  -H 'accept: application/json' \
  -H 'nonce: 9d15cfea-231d-4e22-852c-6f167e42f7bc' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://api-dev159sw.zrobank.biz:2083/pix/keys';

$headers = array(
  'accept: application/json',
  'nonce: 9d15cfea-231d-4e22-852c-6f167e42f7bc',
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
<TabItem value="200" label="201">

```json  title=/pix/keys
{
  "success": true,
  "data": [
    {
      "id": "9973c013-2eba-4b11-9828-1d458f30861e",
      "key": "5df524a2-cb6c-43cb-b191-251008d40c52",
      "type": "EVP",
      "state": "ADD_KEY_READY",
      "state_description": "Ready to be used",
      "created_at": "2023-03-03T23:16:12.994Z"
    },
    {
      "id": "5b518ade-cf88-478a-889d-ff29d3edb8b1",
      "key": "mail@mail.com",
      "type": "EMAIL",
      "state": "ADD_KEY_READY",
      "state_description": "Ready to be used",
      "created_at": "2023-04-20T12:32:19.357Z"
    },
    {
      "id": "694d718a-2645-4df8-a5fd-a17054db4c88",
      "key": "mail2@mail.com",
      "type": "EMAIL",
      "state": "ADD_KEY_READY",
      "state_description": "Ready to be used",
      "created_at": "2023-04-20T12:33:19.363Z"
    }
  ],
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
| type:small_orange_diamond:        | STRING     | Available types: *CNPJ, CPF, PHONE, EMAIL, EVP* | PIX Key type                       |
| state:small_orange_diamond:       | STRING     | Available states: *PENDING, CONFIRMED, NOT_CONFIRMED, ADD_KEY_READY, READY, CANCELED, ERROR, DELETING, DELETED, PORTABILITY_PENDING, PORTABILITY_OPENED, PORTABILITY_STARTED, PORTABILITY_READY, PORTABILITY_CONFIRMED, PORTABILITY_CANCELED, PORTABILITY_REQUEST_PENDING, PORTABILITY_REQUEST_CANCEL_OPENED, PORTABILITY_REQUEST_CANCEL_STARTED, PORTABILITY_REQUEST_CONFIRM_OPENED, PORTABILITY_REQUEST_CONFIRM_STARTED, PORTABILITY_REQUEST_AUTO_CONFIRMED, OWNERSHIP_PENDING, OWNERSHIP_OPENED, OWNERSHIP_STARTED, OWNERSHIP_CONFIRMED, OWNERSHIP_READY, OWNERSHIP_CANCELED, OWNERSHIP_WAITING, OWNERSHIP_CONFLICT, CLAIM_NOT_CONFIRMED, CLAIM_PENDING, CLAIM_CLOSING, CLAIM_DENIED, CLAIM_CLOSED*       | PIX key state                      |
| state_description:small_orange_diamond:  | STRING     | -                         | Pix key state translated    |
| created_at:small_orange_diamond:  | STRING     | Timestamp with timezone                         | PIX key created date               |

:small_orange_diamond: *Required fields on response*