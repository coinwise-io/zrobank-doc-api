import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get PIX deposit by ID

| GET       | /v2/pix/deposits/{id}   |
| --------- | ------------------------|


Enter the PIX deposit's ID below and execute to get it's state and all information.


## Request <a href="https://sandbox.zro.com/api/api/" class="try-btn">Try it!</a>

### Header

| Title                      | Type       | Properties                   | Description                                                                                                    |
| ---------------------------| :---------:|:---------------------------: |----------------------------------------------------------------------------------------------------------------|
| x-wallet-uuid              | STRING     | Must be a **UUID**           | Sender Wallet UUID **(if empty, your default Wallet UUID will be settled)**                                    |
| nonce:small_orange_diamond:| STRING     | Must be a **UUID**           | The nonce ID is a UUID  used to uniquely identify the requisition. All requisitions must have an identifier|
:small_orange_diamond: *Required parameters on header*

### Parameters

| Title                    | Type       | Properties             |Description |
| -------------------------| :---------:|:----------------------:| -----------|
| id:small_orange_diamond: | STRING     | Must be a **UUID**     | Deposit ID |
:small_orange_diamond: *Required parameters on path*



<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

const url = 'https://sandbox.zro.com/api/v2/pix/deposits/726ce668-c64a-411c-83ec-4f5efda68863';

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

url = "https://sandbox.zro.com/api/v2/pix/deposits/726ce668-c64a-411c-83ec-4f5efda68863"

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
  'https://sandbox.zro.com/api/v2/pix/deposits/726ce668-c64a-411c-83ec-4f5efda68863' \
  -H 'accept: application/json' \
  -H 'nonce: c63267ad-3f5c-487b-9f52-b73c9dd7a10d' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://sandbox.zro.com/api/v2/pix/deposits/726ce668-c64a-411c-83ec-4f5efda68863';

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

```json  title=/v2/pix/deposits/{id}
{
  "success": true,
  "data": {
    "id": "726ce668-c64a-411c-83ec-4f5efda68863",
    "operation_id": "67fa0b2c-2d98-4398-ba3f-479306659128",
    "state": "RECEIVED",
    "end_to_end_id": null,
    "txid": null,
    "amount": 20000,
    "owner_name": "Ramon teste",
    "owner_person_type": "CPF",
    "owner_document": "***887712**",
    "owner_bank_name": "ZRO BANK",
    "owner_bank_ispb": "26264220",
    "beneficiary_name": "Maria Testadora da Silva",
    "beneficiary_person_type": "CPF",
    "beneficiary_document": "***024157**",
    "beneficiary_bank_name": "ZRO BANK",
    "beneficiary_bank_ispb": "26264220",
    "created_at": "2022-04-07T15:18:34.956Z"
  },
  "error": null
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/v2/pix/deposits/{id}
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Access is denied."
}
```
</TabItem>
<TabItem value="422" label="422">

```json  title=/v2/pix/deposits/{id}
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

| Title                                         | Type   |Properties                                                                           | Description                                  |
| --------------------------------------------  |:------:|:-----------------------------------------------------------------------------------:|----------------------------------------------|
| id:small_orange_diamond:                      | STRING |**UUID**                                                                                          | Deposit ID                      |
| operation_id:small_orange_diamond:            | STRING |**UUID**                                                                                          | Operation ID                    |
| state:small_orange_diamond:                   | STRING |Available values: *NEW, RECEIVED, WAITING, ERROR, BLOCKED*                                        | Deposit state                   |
| end_to_end_id:small_orange_diamond:           | STRING |-                                                                                                 | end to end ID                   |
| txid                                          | STRING |**UUID**                                                                                          | Payment txid identifier         |
| amount:small_orange_diamond:                  | NUMBER |-                                                                                                 | Value in **R$ cents**           |
| available_amount:small_orange_diamond:        | NUMBER |-                                                                                                 | Deposit available amount        |
| owner_name                                    | STRING |-                                                                                                 | Payment owner name              |
| owner_person_type:small_orange_diamond:       | STRING |Available values: *CPF, CNPJ*                                                                     | Payment owner person type       |
| owner_document                                | STRING |-                                                                                                 | Payment owner document          |
| owner_bank_name:small_orange_diamond:         | STRING |-                                                                                                 | Payment owner bank name         |
| beneficiary_name                              | STRING |-                                                                                                 | Payment beneficiary name        |
| beneficiary_person_type:small_orange_diamond: | STRING |Available values: *CPF, CNPJ*                                                                     | Payment beneficiary person type |
| beneficiary_document                          | STRING |-                                                                                                 | Payment beneficiary document    |
| beneficiary_bank_name:small_orange_diamond:   | STRING |-                                                                                                 | Payment beneficiary bank name   |
| created_at:small_orange_diamond:              | STRING |Timestamp with timezone                                                                           | Deposit created date            |
:small_orange_diamond: *Required fields in the response*