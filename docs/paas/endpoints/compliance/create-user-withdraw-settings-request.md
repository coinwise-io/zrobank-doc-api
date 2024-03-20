import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RequestComponent from '@site/src/components/RequestComponent'
import bodyParams from '@site/docs/paas/endpoints/compliance/params/CreateUserWithdrawSettingsRequest/bodyParams.ts'
import headerParams from '@site/docs/paas/endpoints/compliance/params/CreateUserWithdrawSettingsRequest/headerParams.ts'
import BASE_URL from "@site/src/config/index.ts"

# Create user withdraw settings request

| POST      | /withdraw-settings-request|
| --------- | --------------------------|

Endpoint to user create a withdraw settings request


## Request 

<RequestComponent headerParams={headerParams} bodyParams={bodyParams} baseUrl={BASE_URL.paas} endpoint="/withdraw-settings-request" method="post">

### Header

| Title                                    | Type       | Properties         | Maximum Length  | Description                                                                                                                           |
| ---------------------------------------- | :---------:|--------------------|:--------------: |-------------------------------------------------------------------------------------------------------------------------------------- |
| x-transaction-uuid:small_orange_diamond: | STRING     | Must be a **UUID** | -               | The transaction ID is a UUID (v4) used to uniquely identify the object that will be created. All requisitions must have an identifier |
| nonce:small_orange_diamond:              | STRING     | Must be a **UUID** | -               | The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier                       |
:small_orange_diamond: *Required parameters on header*

### Body

| Title                                      | Type       | Properties                                                                       | Maximum Length  | Description                                                     |
| -------------------------------------------| :---------:|:--------------------------------------------------------------------------------:|:--------------: |-----------------------------------------------------------------|
| wallet_id:small_orange_diamond:            | STRING     | Must be a **UUID**                                                               | -               | User wallet id                                                  |
| transaction_type_tag:small_orange_diamond: | STRING     | -                                                                                | 255             | Transaction type tag                                            |
| pix_key_type:small_orange_diamond:         | STRING     | Available values: *CNPJ, CPF, PHONE, EMAIL, EVP*                                 | -               | Pix key type                                                    |
| pix_key:small_orange_diamond:              | STRING     | -                                                                                | 255             | Pix key                                                         |
| pix_key_document	                         | STRING     | -                                                                                | 255             | Pix key document related (CPF or CNPJ)                          |
| type:small_orange_diamond:                 | STRING     | Available values: *DAILY, WEEKLY, MONTHLY, BALANCE*                              | 255             | Withdraw settings type                                          |
| balance:small_orange_diamond:              | NUMBER     | -                                                                                | INT8            | Withdraw settings balance                                       |
| day                                        | NUMBER     | -                                                                                | INT4            | Month day of withdraw **(if withdraw settings type is MONTHLY)**|
| week_day                                   | STRING     | Available values: *MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY* | 255             | Week day of withdraw **(if withdraw settings type is WEEKLY)**  |

:small_orange_diamond: *Required parameters on body*


<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

const url = 'https://sandbox.zro.com/api/withdraw-settings-request';

const headers = {
  accept: 'application/json',
  x-transaction-uuid: '126f7d3b-9462-4c6d-afdd-65f4b83d9efc',
  nonce: 'e5c8e59d-6f37-4c55-8b9a-1366f378abfd',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ',
  'Content-Type: application/json'
};

const data = {
  id: "b4b48884-4d1c-46f9-9847-1a273c66ad10",
  state: "PENDING",
  wallet_id: "3267dfe0-73ee-4421-80e7-0c3a5372fa13",
  transaction_type_tag: "PIXSEND",
  pix_key_type: "EVP",
  pix_key: "6fc0b20d-727a-4e76-b5b6-c7a97f2ef486",
  pix_key_document: "81688771280",
  type: "DAILY",
  balance: 1000000,
  day: 10,
  week_day: "MONDAY"
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

url = "https://sandbox.zro.com/api/withdraw-settings-request"
params = {
    "id": "b4b48884-4d1c-46f9-9847-1a273c66ad10",
    "state": "PENDING",
    "wallet_id": "3267dfe0-73ee-4421-80e7-0c3a5372fa13",
    "transaction_type_tag": "PIXSEND",
    "pix_key_type": "EVP",
    "pix_key": "6fc0b20d-727a-4e76-b5b6-c7a97f2ef486",
    "pix_key_document": "81688771280",
    "type": "DAILY",
    "balance": 1000000,
    "day": 10,
    "week_day": "MONDAY"
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
  'https://sandbox.zro.com/api/withdraw-settings-request' \
  -H 'accept: application/json' \
  -H 'x-transaction-uuid: 126f7d3b-9462-4c6d-afdd-65f4b83d9efc' \
  -H 'nonce: e5c8e59d-6f37-4c55-8b9a-1366f378abfd' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey' \
  -H 'Content-Type: application/json' \
  -d '{
  {
  "id": "b4b48884-4d1c-46f9-9847-1a273c66ad10",
  "state": "PENDING",
  "wallet_id": "3267dfe0-73ee-4421-80e7-0c3a5372fa13",
  "transaction_type_tag": "PIXSEND",
  "pix_key_type": "EVP",
  "pix_key": "6fc0b20d-727a-4e76-b5b6-c7a97f2ef486",
  "pix_key_document": "81688771280",
  "type": "DAILY",
  "balance": 1000000,
  "day": 10,
  "week_day": "MONDAY"
}'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://sandbox.zro.com/api/withdraw-settings-request';
$params = array(
    "id" => "b4b48884-4d1c-46f9-9847-1a273c66ad10",
    "state" => "PENDING",
    "wallet_id" => "3267dfe0-73ee-4421-80e7-0c3a5372fa13",
    "transaction_type_tag" => "PIXSEND",
    "pix_key_type" => "EVP",
    "pix_key" => "6fc0b20d-727a-4e76-b5b6-c7a97f2ef486",
    "pix_key_document" => "81688771280",
    "type" => "DAILY",
    "balance" => 1000000,
    "day" => 10,
    "week_day" => "MONDAY"
)

$headers = array(
  'accept: application/json',
  'x-transaction-uuid: 126f7d3b-9462-4c6d-afdd-65f4b83d9efc',
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

```json  title=/withdraw-settings-request
 {
  "id": "b4b48884-4d1c-46f9-9847-1a273c66ad10",
  "state": "PENDING",
  "wallet_id": "3267dfe0-73ee-4421-80e7-0c3a5372fa13",
  "transaction_type_tag": "PIXSEND",
  "pix_key_type": "EVP",
  "pix_key": "6fc0b20d-727a-4e76-b5b6-c7a97f2ef486",
  "pix_key_document": "81688771280",
  "type": "DAILY",
  "balance": 1000000,
  "day": 10,
  "week_day": "MONDAY"
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/withdraw-settings-request
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Access is denied."
}
```
</TabItem>
<TabItem value="422" label="422">

```json  title=/withdraw-settings-request
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

| Title                                      | Type       | Properties                                                                            | Description                                                     |
| -------------------------------------------| :---------:|:------------------------------------------------------------------------------------: |-----------------------------------------------------------------|
| id:small_orange_diamond:                   | STRING     | **UUID**                                                                              | User withdraw settings request id                               |
| state:small_orange_diamond:                | STRING     | Available values:<br/> *PENDING, OPEN, CLOSED, FAILED*                                | User withdraw settings request state                            |
| wallet_id:small_orange_diamond:            | STRING     | **UUID**                                                                              | User wallet id                                                  |
| transaction_type_tag:small_orange_diamond: | STRING     | -                                                                                     | Transaction type tag                                            |
| pix_key_type:small_orange_diamond:         | STRING     | Available values:<br/> *CNPJ, CPF, PHONE, EMAIL, EVP*                                  | Pix key type                                                    |
| pix_key:small_orange_diamond:              | STRING     | -                                                                                     | Pix key                                                         |
| pix_key_document	                         | STRING     | -                                                                                     | Pix key document related (CPF or CNPJ)                          |
| type:small_orange_diamond:                 | STRING     | Available values:<br/> *DAILY, WEEKLY, MONTHLY, BALANCE*                               | Withdraw settings type                                          |
| balance:small_orange_diamond:              | NUMBER     | -                                                                                     | Withdraw settings balance                                       |
| day                                        | NUMBER     | -                                                                                     | Month day of withdraw **(if withdraw settings type is MONTHLY)**|
| week_day                                   | STRING     | Available values:<br/> *MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY* | Week day of withdraw **(if withdraw settings type is WEEKLY)**  |

:small_orange_diamond: *Required fields in the response*
</RequestComponent>