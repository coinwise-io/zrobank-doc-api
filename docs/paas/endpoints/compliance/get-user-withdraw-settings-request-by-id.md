import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get user withdraw settings request by ID

| GET       | /withdraw-settings-request/{id} |
| --------- | --------------------------------|


Endpoint to user get a withdraw settings request by id.


## Request <a href="https://sandbox.zro.com/api/api/" class="try-btn">Try it!</a>

### Header

| Title                      | Type       | Properties                   | Description                                                                                                    |
| ---------------------------| :---------:|:---------------------------: |----------------------------------------------------------------------------------------------------------------|
| x-wallet-uuid              | STRING     | Must be a **UUID**           | Sender Wallet UUID **(if empty, your default Wallet UUID will be settled)**                                    |
| nonce:small_orange_diamond:| STRING     | Must be a **UUID**           | The nonce ID is a UUID  used to uniquely identify the requisition. All requisitions must have an identifier|
:small_orange_diamond: *Required parameters on header*

### Parameters

| Title                    | Type       | Properties             |Description                        |
| -------------------------| :---------:|:----------------------:| ----------------------------------|
| id:small_orange_diamond: | STRING     | Must be a **UUID**     | User withdraw setting request id  |
:small_orange_diamond: *Required parameters on header*



<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

const url = 'https://sandbox.zro.com/api/withdraw-setting-request/b4b48884-4d1c-46f9-9847-1a273c66ad10';

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

url = "https://sandbox.zro.com/api/withdraw-setting-request/b4b48884-4d1c-46f9-9847-1a273c66ad10"

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
  'https://sandbox.zro.com/api/withdraw-setting-request/b4b48884-4d1c-46f9-9847-1a273c66ad10' \
  -H 'accept: application/json' \
  -H 'nonce: c63267ad-3f5c-487b-9f52-b73c9dd7a10d' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://sandbox.zro.com/api/withdraw-setting-request/b4b48884-4d1c-46f9-9847-1a273c66ad10';

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

```json  title=/withdraw-settings-request/{id}
{
  "id": "b4b48884-4d1c-46f9-9847-1a273c66ad10",
  "analysis_result": "APPROVED",
  "state": "PENDING",
  "wallet_id": "3267dfe0-73ee-4421-80e7-0c3a5372fa13",
  "transaction_type_tag": "PIXSEND",
  "pix_key_type": "EVP",
  "pix_key": "6fc0b20d-727a-4e76-b5b6-c7a97f2ef486",
  "pix_key_document": "81688771280",
  "type": "DAILY",
  "balance": 1000000,
  "day": 10,
  "week_day": "MONDAY",
  "created_at": "2023-06-02T20:01:45.414Z",
  "updated_at": "2023-06-03T12:00:42.414Z",
  "closed_at": "2023-06-03T12:00:45.414Z"
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/withdraw-settings-request/{id}
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Access is denied."
}
```
</TabItem>
<TabItem value="422" label="422">

```json  title=/withdraw-settings-request/{id}
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

| Title                                      | Type       | Properties                                                                            | Description                                                     |
| -------------------------------------------| :---------:|:------------------------------------------------------------------------------------: |-----------------------------------------------------------------|
| id:small_orange_diamond:                   | STRING     | **UUID**                                                                              | User withdraw settings request id                               |
| analysis_result:small_orange_diamond:      | STRING     | Available results:<br/> *APPROVED, REJECTED*                                          | User withdraw setting request analysis result                   |
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
| created_at:small_orange_diamond:           | STRING     | Timestamp with timezone                                                               | User withdraw setting request creation date                     |
| week_day:small_orange_diamond:             | STRING     | Timestamp with timezone                                                               | User withdraw setting request update date                       |
| week_day:small_orange_diamond:             | STRING     | Timestamp with timezone                                                               | User withdraw setting request close date                        |

:small_orange_diamond: *Required fields in the response*