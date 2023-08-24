import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# List user's received PIX devolutions

| GET       | /v3/pix/devolutions-received|
| --------- | ----------------------------|


Get a list of user's received PIX devolutions. You can include any of the filter parameters below to refine your search.


## Request <a href="https://sandbox.zro.com/api/api/" class="try-btn">Try it!</a>

### Header

| Title                      | Type       | Properties                       | Description |
| ---------------------------| :---------:|:-------------------------------: |----------------------------------------------------------------------------------------------------------------|
| x-wallet-uuid              | STRING     | Must be a **UUID(v4)**           | Sender Wallet UUID **(if empty, your default Wallet UUID will be settled)**                                    |
| nonce:small_orange_diamond:| STRING     | Must be a **UUID(v4)**           | The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier|
:small_orange_diamond: *Required parameters on header*

### Filter Parameters

| Title                    | Type       | Properties                        |Default value |Description                                        |
| -------------------------| :---------:|:----------------------------------|:------------:| ------------------------------------------------- |
| page                     | NUMBER     | -                                 | 1            | Page number                                       |
| size                     | NUMBER     | **Max size is 100**               | 20           | Page size                                         |
| sort                     | STRING     | Available values : *created_at*   | -            | Page sort attribute                               |
| order                    | STRING     | Available values : *asc, desc*    | asc          | Page order                                        |
| created_at_period_start  | STRING     | Date format - *YYYY-MM-DD*        | -            | created at period date start for any transaction  |
| created_at_period_end    | STRING     | Date format - *YYYY-MM-DD*        | -            | Created at period date end for any transaction                             |
| end_to_end_id            | STRING     | -                                 | -            | PIX devolution end to end ID                      |
| states                   | STRING[]   | Available values : *READY, ERROR* | -            | Devolution State                                  |


<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

const url = 'https://sandbox.zro.com/api/v3/pix/devolutions-received?page=1&size=20&order=desc&states=READY&states=ERROR';

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

url = 'https://sandbox.zro.com/api/v3/pix/devolutions-received?page=1&size=20&order=desc&states=READY&states=ERROR'

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
  'https://sandbox.zro.com/api/v3/pix/devolutions-received?page=1&size=20&order=desc&states=READY&states=ERROR' \
  -H 'accept: application/json' \
  -H 'nonce: c63267ad-3f5c-487b-9f52-b73c9dd7a10d' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://sandbox.zro.com/api/v3/pix/devolutions-received?page=1&size=20&order=desc&states=READY&states=ERROR';

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

```json  title=/v3/pix/devolutions-received
{
  "success": true,
  "data": {
    "page": 1,
    "page_size": 20,
    "page_total": 3,
    "total": 43,
    "data": [
      {
        "id": "17ffb598-437d-4445-a8d0-857670aeca54",
        "state": "READY",
        "description": "",
        "operation_id": "fd6b328d-caf1-44b4-9447-04d8a7472453",
        "type": "DEVOLUTION_RECEIVED",
        "end_to_end_id": null,
        "txid": null,
        "amount": 1100,
        "owner_name": "Ramon teste fullname",
        "owner_person_type": "CNPJ",
        "owner_document": "81688771280",
        "owner_bank_name": "ZRO PAGAMENTOS S/A",
        "beneficiary_name": "Zro Bolsão",
        "beneficiary_person_type": "CNPJ",
        "beneficiary_document": "08715757001579",
        "beneficiary_bank_name": "ZRO PAGAMENTOS S/A",
        "created_at": "2023-05-11T20:43:01.778Z"
      },
      {
        "id": "1ad13f30-b24e-4df6-95cc-76f904184449",
        "state": "READY",
        "description": "",
        "operation_id": "808259d8-549b-4298-9200-5e09697ff484",
        "type": "DEVOLUTION_RECEIVED",
        "end_to_end_id": null,
        "txid": null,
        "amount": 1100,
        "owner_name": "João da Silva sauro",
        "owner_person_type": "CNPJ",
        "owner_document": "31459411005",
        "owner_bank_name": "ZRO PAGAMENTOS S/A",
        "beneficiary_name": "Maria Testadora da Silva",
        "beneficiary_person_type": "CPF",
        "beneficiary_document": "***024157**",
        "beneficiary_bank_name": "ZRO PAGAMENTOS S/A",
        "created_at": "2022-07-11T14:47:57.392Z"
      }
    ]
  },
  "error": null
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/v3/pix/devolutions-received
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Access is denied."
}
```
</TabItem>
<TabItem value="422" label="422">

```json  title=/v3/pix/devolutions-received
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "The  field created_at_period_start must be before the end date.",
  "code": "VALIDATION"
}
```
</TabItem>
</Tabs>

### Data description

| Title                                         | Type   |Properties                                                                                        | Description                                                  |
| --------------------------------------------  |:------:|:------------------------------------------------------------------------------------------------:|------------------------------------------------------------- |
| page:small_orange_diamond:                    | NUMBER |-                                                                                                 | Page number                                                  |
| page_size:small_orange_diamond:               | NUMBER |-                                                                                                 | Page size                                                    |
| page_total:small_orange_diamond:              | NUMBER |-                                                                                                 | Page total                                                   |
| total:small_orange_diamond:                   | NUMBER |-                                                                                                 | Total of elements                                            |
| id:small_orange_diamond:                      | STRING |**UUID**                                                                                          | Devolution ID                                                |
| description                                   | STRING |-                                                                                                 | User defined devolution description                          |
| state:small_orange_diamond:                   | STRING |Available values: *PENDING, WAITING, CONFIRMED, ERROR, FAILED, CANCELED*                          | Devolution state                                             |
| operation_id:small_orange_diamond:            | STRING |**UUID**                                                                                          | Operation UUID. Used to get receipt and track the transaction|
| type:small_orange_diamond:                    | STRING |Available values: *DEVOLUTION_COMPLETED, DEVOLUTION_RECEIVED, DEPOSIT_RECEIVED, PAYMENT_COMPLETED*| Transaction type                                             |
| end_to_end_id                                 | STRING |-                                                                                                 | end to end ID                                                |
| txid                                          | STRING |**UUID**                                                                                          | Payment txid identifier                                      |
| amount:small_orange_diamond:                  | NUMBER |-                                                                                                 | Value in **R$ cents**                                        |
| owner_name                                    | STRING |-                                                                                                 | Payment owner name                                           |
| owner_person_type:small_orange_diamond:       | STRING |Available values: *CPF, CNPJ*                                                                     | Payment owner person type                                    |
| owner_document                                | STRING |-                                                                                                 | Payment owner document                                       |
| owner_bank_name:small_orange_diamond:         | STRING |-                                                                                                 | Payment owner bank name                                      |
| beneficiary_name                              | STRING |-                                                                                                 | Payment beneficiary name                                     |
| beneficiary_person_type:small_orange_diamond: | STRING |Available values: *CPF, CNPJ*                                                                     | Payment beneficiary person type                              |
| beneficiary_document                          | STRING |-                                                                                                 | Payment beneficiary document                                 |
| beneficiary_bank_name:small_orange_diamond:   | STRING |-                                                                                                 | Payment beneficiary bank name                                |
| created_at:small_orange_diamond:              | STRING |Timestamp with timezone                                                                           | Devolution created date                                      |
:small_orange_diamond: *Required fields in the response*
