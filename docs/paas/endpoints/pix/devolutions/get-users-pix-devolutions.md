import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RequestComponent from '@site/src/components/RequestComponent'
import headerParams from '@site/docs/paas/endpoints/pix/devolutions/params/GetUsersPixDevolutions/headerParams.ts'
import filterParams from '@site/docs/paas/endpoints/pix/devolutions/params/GetUsersPixDevolutions/filterParams.ts'

# List user's PIX devolutions

| GET       | /v3/pix/devolutions|
| --------- | -------------------|


Get a list of user's PIX devolutions. You can include any of the filter parameters below to refine your search.

<RequestComponent headerParams={headerParams} filterParams={filterParams} endpoint="/v3/pix/devolutions" method="get">

## Request <a href="https://sandbox.zro.com/api/api/" class="try-btn">Try it!</a>

### Header

| Title                      | Type       | Properties                       | Description |
| ---------------------------| :---------:|:-------------------------------: |----------------------------------------------------------------------------------------------------------------|
| x-wallet-uuid              | STRING     | Must be a **UUID(v4)**           | Sender Wallet UUID **(if empty, your default Wallet UUID will be settled)**                                    |
| nonce:small_orange_diamond:| STRING     | Must be a **UUID(v4)**           | The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier|
:small_orange_diamond: *Required parameters on header*

### Filter Parameters

| Title                    | Type       | Properties                                                                          |Default value |Description                                        |
| -------------------------| :---------:|:-----------------------------------------------------------------------------------:|:------------:| ------------------------------------------------- |
| page                     | NUMBER     | -                                                                                   | 1            | Page number                                       |
| size                     | NUMBER     | **Max size is 100**                                                                 | 20           | Page size                                         |
| sort                     | STRING     | Available values : *created_at*                                                     | -            | Page sort attribute                               |
| order                    | STRING     | Available values : *asc, desc*                                                      | asc          | Page order                                        |
| created_at_period_start  | STRING     | Date format - *YYYY-MM-DD*                                                          | -            | created at period date start for any transaction  |
| created_at_period_end    | STRING     | Date format - *YYYY-MM-DD*                                                          | -            | Created at period date end for any transaction                             |
| end_to_end_id            | STRING     | -                                                                                   | -            | PIX devolution end to end ID                      |
| states                   | STRING[]   | Available values : *PENDING, WAITING, CONFIRMED, ERROR, FAILED, CANCELED*           | -            | Devolution State                                  |


<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

const url = 'https://sandbox.zro.com/api/v3/pix/devolutions?page=1&size=20&order=asc&states=CONFIRMED';

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

url = 'https://sandbox.zro.com/api/v3/pix/devolutions?page=1&size=20&order=asc&states=CONFIRMED'

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
  'https://sandbox.zro.com/api/v3/pix/devolutions?page=1&size=20&order=asc&states=CONFIRMED' \
  -H 'accept: application/json' \
  -H 'nonce: e5c8e59d-6f37-4c55-8b9a-1366f378abfd' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://sandbox.zro.com/api/v3/pix/devolutions?page=1&size=20&order=asc&states=CONFIRMED';

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

```json  title=/v3/pix/devolutions
{
  "success": true,
  "data": {
    "page": 1,
    "page_size": 20,
    "page_total": 4,
    "total": 80,
    "data": [
      {
        "id": "06f21c34-9dad-4725-99f0-e4f775b230a4",
        "state": "CONFIRMED",
        "description": "The party payment.",
        "operation_id": "774752c5-d2b1-4d8e-bff4-bda18f77be7b",
        "type": "DEVOLUTION_COMPLETED",
        "end_to_end_id": null,
        "txid": "30e36845152246a0be6795e5b6db3ee9",
        "amount": 1000,
        "owner_name": "ZRO BOLSAO",
        "owner_person_type": "CNPJ",
        "owner_document": "08715757001579",
        "owner_bank_name": "ZRO PAGAMENTOS S/A",
        "beneficiary_name": "JCPM",
        "beneficiary_person_type": "CNPJ",
        "beneficiary_document": "11820047000118",
        "beneficiary_bank_name": "ZRO PAGAMENTOS S/A",
        "created_at": "2023-05-08T21:24:06.637Z"
      },
      {
        "id": "e5c8e59d-6f37-4c55-8b9a-1366f378abfd",
        "state": "CONFIRMED",
        "description": "Devolution description",
        "operation_id": "b317c1fd-dc4a-4d11-8c18-c181fe0be147",
        "type": "DEVOLUTION_COMPLETED",
        "end_to_end_id": null,
        "txid": "uclavwOk74XjYHZ6PArs2x9UR",
        "amount": 1000,
        "owner_name": "ZRO BOLSAO",
        "owner_person_type": "CNPJ",
        "owner_document": "08715757001579",
        "owner_bank_name": "ZRO PAGAMENTOS S/A",
        "beneficiary_name": "JCPM",
        "beneficiary_person_type": "CNPJ",
        "beneficiary_document": "11820047000118",
        "beneficiary_bank_name": "ZRO PAGAMENTOS S/A",
        "created_at": "2023-06-04T20:07:10.013Z"
      }
    ]
  },
  "error": null
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/v3/pix/devolutions
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Access is denied."
}
```
</TabItem>
<TabItem value="422" label="422">

```json  title=/v3/pix/devolutions
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
| failed_message	                            | STRING |Is nullable                                                                                       | Error returned when devolution is reverted                   |
| operation_id:small_orange_diamond:            | STRING |**UUID**                                                                                          | Operation UUID. Used to get receipt and track the transaction|
| type:small_orange_diamond:                    | STRING |Available values: *DEVOLUTION_COMPLETED / DEVOLUTION_RECEIVED / DEPOSIT_RECEIVED / PAYMENT_COMPLETED*| Transaction type                                             |
| end_to_end_id                                 | STRING |-                                                                                                 | end to end ID                                                |
| txid                                          | STRING |**UUID**                                                                                          | Payment txid identifier                                      |
| amount:small_orange_diamond:                  | NUMBER |-                                                                                                 | Value in **R$ cents**                                        |
| state:small_orange_diamond:                   | STRING |Available values: *PENDING / WAITING / CONFIRMED / ERROR / FAILED / CANCELED*                          | Devolution state                                             |
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
</RequestComponent>