import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RequestComponent from '@site/src/components/RequestComponent'
import filterParams from '@site/docs/paas/endpoints/pix/payments/params/GetUsersPixPayments/filterParams.ts'
import headerParams from '@site/docs/paas/endpoints/pix/payments/params/GetUsersPixPayments/headerParams.ts'

# List user's PIX payments

| GET       | /v4/pix/payments|
| --------- | ----------------|


Enter the PIX payment's ID below and execute to get it's state and all information.


## Request 

<RequestComponent headerParams={headerParams} filterParams={filterParams} selectorBaseUrl="paas" endpoint="/v4/pix/payments" method="get">

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
| states                   | STRING[]   | Available values : *PENDING, WAITING, CONFIRMED, ERROR, FAILED, CANCELED, SCHEDULED*| -            | Payment State                                     |
| payment_date_period_start| STRING     | Date format - *YYYY-MM-DD*                                                          | -            | Transaction period date start for any transaction |
| payment_date_period_end  | STRING     | Date format - *YYYY-MM-DD*                                                          | -            | Transaction period date end for any transaction   |
| created_at_period_start  | STRING     | Date format - *YYYY-MM-DD*                                                          | -            | created at period date start for any transaction  |
| created_at_period_end    | STRING     | Date format - *YYYY-MM-DD*                                                          | -            | Created at period date end for any transaction                             |
| end_to_end_id            | STRING     | -                                                                                   | -            | Payment end to end ID                             |


<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

const url = 'https://sandbox.zro.com/api/v4/pix/payments?page=1&size=20&order=asc&states=CONFIRMED&payment_date_period_start=2022-01-01&payment_date_period_end=2022-04-01';

const headers = {
  accept: 'application/json',
  nonce: "c70177e8-4d0b-4236-bf5f-9bd501dbfd6a",
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

url = "https://sandbox.zro.com/api/v4/pix/payments?page=1&size=20&order=asc&states=CONFIRMED&payment_date_period_start=2022-01-01&payment_date_period_end=2022-04-01"

headers = {
    "accept": "application/json",
    "nonce": "c70177e8-4d0b-4236-bf5f-9bd501dbfd6a",
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
  'https://sandbox.zro.com/api/v4/pix/payments?page=1&size=20&order=asc&states=CONFIRMED&payment_date_period_start=2022-01-01&payment_date_period_end=2022-04-01' \
  -H 'accept: application/json' \
  -H 'nonce: c70177e8-4d0b-4236-bf5f-9bd501dbfd6a' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://sandbox.zro.com/api/v4/pix/payments?page=1&size=20&order=asc&states=CONFIRMED&payment_date_period_start=2022-01-01&payment_date_period_end=2022-04-01';

$headers = array(
  'accept: application/json',
  'nonce: c70177e8-4d0b-4236-bf5f-9bd501dbfd6a',
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

```json  title=/v4/pix/payments
{
  "success": true,
  "data": {
    "page": 1,
    "page_size": 20,
    "page_total": 1,
    "total": 9,
    "data": [
      {
        "id": "18366b0d-894b-4f4f-9fd6-f26b283e03a3",
        "operation_id": "013f4cc5-53d1-44e0-81b5-b8056ab6772b",
        "type": "PAYMENT_COMPLETED",
        "state": "CONFIRMED",
        "end_to_end_id": "E12345678202203301031A2203301031",
        "txid": "b7d5259ee3e14e64877121047f1d2ccd",
        "amount": 16043,
        "owner_name": "Maria",
        "owner_person_type": "NATURAL_PERSON",
        "owner_document": "***024157**",
        "owner_bank_name": "ZRO PAGAMENTOS S/A",
        "owner_bank_ispb": "26264220",
        "beneficiary_name": "Pix",
        "beneficiary_person_type": "LEGAL_PERSON",
        "beneficiary_document": "11111111000191",
        "beneficiary_bank_name": "PIX TESTER",
        "beneficiary_bank_ispb": "99999008",
        "created_at": "2022-03-30T13:32:58.074Z"
      },
      {
        "id": "c72cf208-aa8d-414b-b6b2-9d9c602af878",
        "operation_id": "bec5d396-7e5e-40cf-9684-dd72a5e2b61b",
        "type": "PAYMENT_COMPLETED",
        "state": "CONFIRMED",
        "end_to_end_id": "E12345678202203301050A2203301050",
        "txid": "b7d5259ee3e14e64877121047f1d2ccd",
        "amount": 16043,
        "owner_name": "Maria",
        "owner_person_type": "NATURAL_PERSON",
        "owner_document": "***024157**",
        "owner_bank_name": "ZRO PAGAMENTOS S/A",
        "owner_bank_ispb": "26264220",
        "beneficiary_name": "Pix",
        "beneficiary_person_type": "LEGAL_PERSON",
        "beneficiary_document": "11111111000191",
        "beneficiary_bank_name": "PIX TESTER",
        "beneficiary_bank_ispb": "99999008",
        "created_at": "2022-03-30T13:51:44.930Z"
      },
      {
        "id": "1e9608e4-e7b6-4755-83ee-dd1573496038",
        "operation_id": "06286c95-c221-403f-9101-d237215b8e94",
        "type": "PAYMENT_COMPLETED",
        "state": "CONFIRMED",
        "end_to_end_id": "E12345678202203301557A2203301557",
        "txid": "96ca7a146322425fbb802b07df39b389",
        "amount": 1,
        "owner_name": "Maria",
        "owner_person_type": "NATURAL_PERSON",
        "owner_document": "***024157**",
        "owner_bank_name": "ZRO PAGAMENTOS S/A",
        "owner_bank_ispb": "26264220",
        "beneficiary_name": "Pix",
        "beneficiary_person_type": "LEGAL_PERSON",
        "beneficiary_document": "11111111000191",
        "beneficiary_bank_name": "PIX TESTER",
        "beneficiary_bank_ispb": "99999008",
        "created_at": "2022-03-30T18:58:28.171Z"
      },
    ]
  },
  "error": null
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/v4/pix/payments
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Access is denied."
}
```
</TabItem>
<TabItem value="422" label="422">

```json  title=/v4/pix/payments
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "The field payment_date_period_start has the wrong format.",
  "code": "VALIDATION"
}
```
</TabItem>
</Tabs>

### Data description

| Title                               | Type       |Properties                                        | Description                          |
| ----------------------------------  |:----------:|:------------------------------------------------:|--------------------------------------|
| page:small_orange_diamond:          | NUMBER     |-                                                 | Page number                          |
| page_size:small_orange_diamond:     | NUMBER     |-                                                 | Page size                            |
| page_total:small_orange_diamond:    | NUMBER     |-                                                 | Page total                           |
| total:small_orange_diamond:         | NUMBER     |-                                                 | Total of elements                    |
| id:small_orange_diamond:            | STRING     | **UUID**                                         | Unique decoded pix key UUID          |
| type:small_orange_diamond:          | STRING     |Available values: *CNPJ, CPF, PHONE, EMAIL, EVP*  | PIX Key state                        |
| person_type:small_orange_diamond:   | STRING     |Available values: *NATURAL_PERSON, LEGAL_PERSON*  | Person type                          |
| key:small_orange_diamond:           | STRING     |-                                                 | PIX key                              |
| document:small_orange_diamond:      | STRING     |-                                                 | Person's document number             |
| name:small_orange_diamond:          | STRING     |-                                                 | Person's name                        |
| trade_name                          | STRING     |-                                                 | Company's trade name                 |
| end_to_end_id                       | STRING     |-                                                 | end to end ID                        |
| ispb                                | STRING     |-                                                 | Bank ISPB                            |
:small_orange_diamond: *Required fields in the response*
</RequestComponent>