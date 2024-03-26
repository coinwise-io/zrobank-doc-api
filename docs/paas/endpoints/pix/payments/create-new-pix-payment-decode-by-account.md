import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RequestComponent from '@site/src/components/RequestComponent'
import bodyParams from '@site/docs/paas/endpoints/pix/payments/params/CreateNewPixPaymentDecodeByAccount/bodyParams.ts'
import headerParams from '@site/docs/paas/endpoints/pix/payments/params/CreateNewPixPaymentDecodeByAccount/headerParams.ts'


# Create new decoded PIX account ID

| POST      | /pix/payment/decode/by-account |
| --------- | ------------------------------ |

Enter the bank account's information on the requisition body below and execute to get its ID. This ID is the `decoded_pix_account_id` which will be required to **[create a pix payment by a bank account](./create-new-pix-payment-by-bank-account)**.


## Request 

<RequestComponent headerParams={headerParams} bodyParams={bodyParams} selectorBaseUrl="paas" endpoint="/pix/payment/decode/by-account" method="post">

### Header

| Title                                | Type       | Properties                       | Maximum Length  | Description |
| ------------------------------------ | :---------:|--------------------------------  |:--------------: |-------------------------------------------------------------------------------------------------------------------------------------- |
| x-transaction-uuid:small_orange_diamond:| STRING     | Must be a **UUID**           | -               | The transaction ID is a UUID  used to uniquely identify the object that will be created. All requisitions must have an identifier |
| nonce:small_orange_diamond:          | STRING     | Must be a **UUID**           | -               | The nonce ID is a UUID  used to uniquely identify the requisition. All requisitions must have an identifier                       |
:small_orange_diamond: *Required parameters on header*

### Body

| Title                           | Type       | Properties                                                         | Maximum Length |Minimum Length| Description                                                                  |
| --------------------------------| :---------:|:------------------------------------------------------------------:|:--------------:|:------------:|----------------------------------------------------------------------------- |
| person_type	                    | STRING     | Available values:<br/> *NATURAL_PERSON, LEGAL_PERSON*               | -              |-             | Person type: **NATURAL_PERSON | LEGAL_PERSON**                               |
| document:small_orange_diamond:  | STRING     | -                                                                  | 255            |-             | Person's document **(CPF or CNPJ)**                                          |
| bank_ispb                       | STRING     | -                                                                  | 8 digits       |-             | Bank ISPB code                                                               |
| branch                          | STRING     | -                                                                  | 4 digits       |-             | Account branch                                                               |
| account_number                  | STRING     | -                                                                  | 255            | 4 digits     | Account number                                                               |
| account_type                    | STRING     | Available values:<br/> *CACC, CASH, CHAR, CISH, COMM, CPAC, LLSV, LOAN, MGLD, MOMA, NREX, ODFT, ONDP, OTHR, SACC, SLRY, SVGS, TAXE, TRAN, TRAS, CC* | - | - | Account type|
:small_orange_diamond: *Required parameters on body*


<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

const url = 'https://sandbox.zro.com/api/pix/payment/decode/by-account';

const headers =  {
  accept: 'application/json',
  x-transaction-uuid: "f1668901-de1e-4b1a-862b-e871a0099b89",
  nonce: "a5c11013-a4f1-4a85-921e-c26d3fca762c",
  Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9",
  'Content-Type: application/json'
};

const data = {
  person_type: "NATURAL_PERSON",
  document: "81688771280",
  bank_ispb: "68900810",
  branch: "0001",
  account_number: "12345",
  account_type: "CACC"
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

url = "https://sandbox.zro.com/api/pix/payment/decode/by-account"
params = {
    "person_type": "NATURAL_PERSON",
    "document": "81688771280",
    "bank_ispb": "68900810",
    "branch": "0001",
    "account_number": "12345",
    "account_type": "CACC"
}

headers = {
    "accept": "application/json",
    "x-transaction-uuid": "f1668901-de1e-4b1a-862b-e871a0099b89",
    "nonce": "a5c11013-a4f1-4a85-921e-c26d3fca762c",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9",
    "Content-Type": "application/json"
}

response = requests.post(url=url, headers=headers, json=params)

print(response)
```
</TabItem>
<TabItem value="shell" label="Shell">

```shell title=CURL
curl -X 'POST https://sandbox.zro.com/api/pix/payment/decode/by-account' \
  -H 'accept: application/json' \
  -H 'x-transaction-uuid: f1668901-de1e-4b1a-862b-e871a0099b89' \
  -H 'nonce: a5c11013-a4f1-4a85-921e-c26d3fca762c' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9' \
  -H 'Content-Type: application/json' \
  -d '{
  "person_type": "NATURAL_PERSON",
  "document": "81688771280",
  "bank_ispb": "68900810",
  "branch": "0001",
  "account_number": "12345",
  "account_type": "CACC"
  }'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://sandbox.zro.com/api/pix/payment/decode/by-account';
$params = array(
    "person_type" => "NATURAL_PERSON",
    "document" => "81688771280",
    "branch" => "0001",
    "account_number" => "12345",
    "account_type" => "CACC"
)

$headers = array(
  'accept: application/json',
  'x-transaction-uuid: f1668901-de1e-4b1a-862b-e871a0099b89',
  'nonce: a5c11013-a4f1-4a85-921e-c26d3fca762c',
  'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9',
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

```json  title=/pix/payment/decode/by-account
{
  "success": true,
  "data": {
    "id": "2572db53-8953-4aa9-a2a2-0ca72feb7c7b",
    "name": "Ramon dos Santos",
    "trade_name": null
  },
  "error": null
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/pix/payment/decode/by-account
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Access is denied."
}
```
</TabItem>
<TabItem value="422" label="422">

```json  title=/pix/payment/decode/by-account
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Bank not available. Please check data and try again.",
  "code": "BANK_NOT_FOUND"
}
```
</TabItem>
</Tabs>

### Data description

| Title                     | Type       |Properties | Description                          |
| ------------------------- |:----------:|:--------: | -------------------------------------|
| id:small_orange_diamond:  | STRING     | **UUID**  | Pix decoded account ID               |
| name:small_orange_diamond:| STRING     |     -     | Person full name or company tax name |
| trade_name                | STRING     |     -     | Company trade name                   |
:small_orange_diamond: *Required fields in the response*
</RequestComponent>