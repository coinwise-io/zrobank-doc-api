import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# List user's PIX deposits

| GET       | /v4/pix/deposits|
| --------- | ----------------|


Get a list of user's pix deposits. You can include any of the filter parameters below to refine your search.

## Request <a href="https://sandbox.zro.com/api/api/" class="try-btn">Try it!</a>

### Header

| Title                      | Type       | Properties                       | Description |
| ---------------------------| :---------:|:-------------------------------: |----------------------------------------------------------------------------------------------------------------|
| x-wallet-uuid              | STRING     | Must be a **UUID(v4)**           | Sender Wallet UUID **(if empty, your default Wallet UUID will be settled)**                                    |
| nonce:small_orange_diamond:| STRING     | Must be a **UUID(v4)**           | The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier|
:small_orange_diamond: *Required parameters on header*

### Filter Parameters

| Title                    | Type       | Properties                                                 |Default value |Description                                        |
| -------------------------| :---------:|:----------------------------------------------------------:|:------------:| ------------------------------------------------- |
| page                     | NUMBER     | -                                                          | 1            | Page number                                       |
| size                     | NUMBER     | **Max size is 100**                                        | 20           | Page size                                         |
| sort                     | STRING     | Available values : *created_at*                            | -            | Page sort attribute                               |
| order                    | STRING     | Available values : *asc, desc*                             | asc          | Page order                                        |
| created_at_period_start  | STRING     | Date format - *YYYY-MM-DD*                                 | -            | created at period date start for any transaction  |
| created_at_period_end    | STRING     | Date format - *YYYY-MM-DD*                                 | -            | Created at period date end for any transaction    |
| end_to_end_id            | STRING     | -                                                          | -            | PIX deposit end to end ID                         |
| states                   | STRING[]   | Available values: *NEW, RECEIVED, WAITING, ERROR, BLOCKED* | -            | PIX deposit state                                 |


<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

const url = 'https://sandbox.zro.com/api/v4/pix/deposits?page=1&size=20&order=desc&states=ERROR&states=RECEIVED';

const headers = {
  accept: 'application/json',
  nonce: "e5c8e59d-6f37-4c55-8b9a-1366f378abfd",
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

url = 'https://sandbox.zro.com/api/v4/pix/deposits?page=1&size=20&order=desc&states=ERROR&states=RECEIVED'

headers = {
    "accept": "application/json",
    "nonce": "e5c8e59d-6f37-4c55-8b9a-1366f378abfd",
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
  'https://sandbox.zro.com/api/v4/pix/deposits?page=1&size=20&order=desc&states=ERROR&states=RECEIVED' \
  -H 'accept: application/json' \
  -H 'nonce: e5c8e59d-6f37-4c55-8b9a-1366f378abfd' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://sandbox.zro.com/api/v4/pix/deposits?page=1&size=20&order=desc&states=ERROR&states=RECEIVED';

$headers = array(
  'accept: application/json',
  'nonce: e5c8e59d-6f37-4c55-8b9a-1366f378abfd',
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

```json  title=/v4/pix/deposits
{
  "success": true,
  "data": {
    "page": 1,
    "page_size": 20,
    "page_total": 95,
    "total": 1883,
    "data": [
      {
        "id": "726ce668-c64a-411c-83ec-4f5efda68863",
        "operation_id": "67fa0b2c-2d98-4398-ba3f-479306659128",
        "type": "DEPOSIT_RECEIVED",
        "state": "RECEIVED",
        "end_to_end_id": null,
        "txid": null,
        "amount": 20000,
        "available_amount": 20000,
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
      {
        "id": "1569bf58-9577-4e89-ae30-a0083101eb1e",
        "operation_id": "b08da125-84e9-4e36-aa66-dd2f70ce5822",
        "type": "DEPOSIT_RECEIVED",
        "state": "RECEIVED",
        "end_to_end_id": null,
        "txid": "4a61c4aa2b2b41b79601fbc476ae3a45",
        "amount": 100,
        "available_amount": 100,
        "owner_name": "CADU TESTE",
        "owner_person_type": "CPF",
        "owner_document": "***198228**",
        "owner_bank_name": "ZRO PAGAMENTOS S/A",
        "owner_bank_ispb": "26264220",
        "beneficiary_name": "ZRO BOLSAO",
        "beneficiary_person_type": "CNPJ",
        "beneficiary_document": "08715757001579",
        "beneficiary_bank_name": "ZRO PAGAMENTOS S/A",
        "beneficiary_bank_ispb": "26264220",
        "created_at": "2023-05-25T20:03:11.924Z"
      }
    ]
  },
  "error": null
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/v4/pix/deposits
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Access is denied."
}
```
</TabItem>
<TabItem value="422" label="422">

```json  title=/v4/pix/deposits
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

| Title                                         | Type   |Properties                                                                                        | Description                     |
| --------------------------------------------  |:------:|:------------------------------------------------------------------------------------------------:|-------------------------------- |
| page:small_orange_diamond:                    | NUMBER |-                                                                                                 | Page number                     |
| page_size:small_orange_diamond:               | NUMBER |-                                                                                                 | Page size                       |
| page_total:small_orange_diamond:              | NUMBER |-                                                                                                 | Page total                      |
| total:small_orange_diamond:                   | NUMBER |-                                                                                                 | Total of elements               |
| id:small_orange_diamond:                      | STRING |**UUID**                                                                                          | Deposit ID                      |
| operation_id:small_orange_diamond:            | STRING |**UUID**                                                                                          | Operation ID                    |
| type:small_orange_diamond:                    | STRING |Available values: *DEVOLUTION_COMPLETED, DEVOLUTION_RECEIVED, DEPOSIT_RECEIVED, PAYMENT_COMPLETED* | Transaction type                |
| state:small_orange_diamond:                   | STRING |Available values: *NEW, RECEIVED, WAITING, ERROR, BLOCKED*                                        | Deposit state                   |
| end_to_end_id                                 | STRING |-                                                                                                 | end to end ID                   |
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
