import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RequestComponent from '@site/src/components/RequestComponent'
import pathParams from '@site/docs/paas/endpoints/pix/payments/params/GetPixPaymentById/pathParams.ts'
import headerParams from '@site/docs/paas/endpoints/pix/payments/params/GetPixPaymentById/headerParams.ts'

# Get PIX payment by ID

| GET       | /v3/pix/payments/\{id\}|
| --------- | ---------------------|


Enter the pix payment's ID and execute to get it's state and all information.


## Request 

<RequestComponent headerParams={headerParams} pathParam={pathParams} selectorBaseUrl="paas" endpoint="/v3/pix/payments/" method="get">

### Header

| Title                      | Type       | Properties                       | Description |
| ---------------------------| :---------:|:-------------------------------: |----------------------------------------------------------------------------------------------------------------|
| x-wallet-uuid              | STRING     | Must be a **UUID**           | Sender Wallet UUID **(if empty, your default Wallet UUID will be settled)**                                    |
| nonce:small_orange_diamond:| STRING     | Must be a **UUID**           | The nonce ID is a UUID  used to uniquely identify the requisition. All requisitions must have an identifier|
:small_orange_diamond: *Required parameters on header*

### Parameters

| Title                    | Type       | Properties             |Description                                        |
| -------------------------| :---------:|:----------------------:| ------------------------------------------------- |
| id:small_orange_diamond: | STRING     | Must be a **UUID**     | Payment ID                                        |
:small_orange_diamond: *Required parameters on header*



<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');


const url = 'https://sandbox.zro.com/api/v3/pix/payments/ad544389-6ff4-4e08-b67a-c79cfc727e42';

const headers = {
  accept: 'application/json',
  nonce: "efd746f7-1e64-437d-9364-116242399fc3",
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

url = "https://sandbox.zro.com/api/v3/pix/payments/ad544389-6ff4-4e08-b67a-c79cfc727e42"

headers = {
    "accept": "application/json",
    "nonce": "efd746f7-1e64-437d-9364-116242399fc3",
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
  'https://sandbox.zro.com/api/v3/pix/payments/ad544389-6ff4-4e08-b67a-c79cfc727e42' \
  -H 'accept: application/json' \
  -H 'nonce: efd746f7-1e64-437d-9364-116242399fc3' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://sandbox.zro.com/api/v3/pix/payments/ad544389-6ff4-4e08-b67a-c79cfc727e42';

$headers = array(
  'accept: application/json',
  'nonce: efd746f7-1e64-437d-9364-116242399fc3',
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

```json  title=/v3/pix/payments/\{id\}
{
  "success": true,
  "data": {
    "id": "ad544389-6ff4-4e08-b67a-c79cfc727e42",
    "operation_id": "b10ec974-0a39-46b4-8070-5e547eb6c62f",
    "state": "CONFIRMED",
    "end_to_end_id": null,
    "txid": null,
    "amount": 1299,
    "owner_name": "Zro Bolsão",
    "owner_person_type": "LEGAL_PERSON",
    "owner_document": "08715757001579",
    "beneficiary_name": "Ramon teste fullname nome grande grande grande",
    "beneficiary_person_type": "NATURAL_PERSON",
    "beneficiary_document": "***887712**",
    "beneficiary_bank_name": "ZRO PAGAMENTOS S/A",
    "beneficiary_bank_ispb": "26264220",
    "payment_date": null,
    "description": "Test",
    "created_at": "2023-06-01T18:21:50.439Z"
  },
  "error": null
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/v3/pix/payments/\{id\}
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Access is denied."
}
```
</TabItem>
<TabItem value="422" label="422">

```json  title=/v3/pix/payments/\{id\}
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

| Title                                        | Type       |Properties                                                                           | Description                                                                                                                   |
| -------------------------------------------  |:----------:|:-----------------------------------------------------------------------------------:|-------------------------------------------------------------------------------------------------------------------------------|
| id:small_orange_diamond:                     | STRING     |**UUID**                                                                             | Payment UUID                                                                                                                  |
| operation_id                                 | STRING     |**UUID**                                                                             | Operation UUID. Used to get receipt and track the transaction. **This will not be returned if the payment has been scheduled**|
| state:small_orange_diamond:                  | STRING     |Available values : *PENDING, WAITING, CONFIRMED, ERROR, FAILED, CANCELED, SCHEDULED* | Payment state                                                                                                                 |
| end_to_end_id:small_orange_diamond:          | STRING     |**UUID**                                                                             | end to end ID.                                                                                                                |
| txid                                         | STRING     |**UUID**                                                                             | Payment txid identifier                                                                                                       |
| amount:small_orange_diamond:                 | NUMBER     |-                                                                                    | Value in **R$ cents**                                                                                                         |
| owner_name                                   | STRING     |-                                                                                    | The payment owner name                                                                                                        |
| owner_person_type:small_orange_diamond:      | STRING     |Available values: *NATURAL_PERSON, LEGAL_PERSON*                                     | The payment owner person type                                                                                                 |
| owner_document	                             | STRING     |-                                                                                    | The payment owner document                                                                                                    |
| beneficiary_name                             | STRING     |-                                                                                    | The payment beneficiary name                                                                                                  |
| beneficiary_person_type:small_orange_diamond:| STRING     |Available values: *NATURAL_PERSON, LEGAL_PERSON*                                     | The payment beneficiary person type                                                                                           |
| beneficiary_document                         | STRING     |-                                                                                    | The payment beneficiary document                                                                                              |
| beneficiary_bank_name:small_orange_diamond:  | STRING     |-                                                                                    | The payment beneficiary bank name                                                                                             |
| beneficiary_bank_ispb                        | STRING     |-                                                                                    | The payment beneficiary bank ispb                                                                                             |
| payment_date  	                             | STRING     | Is nullable                                                                         | Payment date                                                                                                                  |
| description                                  | STRING     | Is nullable                                                                         | User defined payment description                                                                                              |
| failed_message                               | STRING     | Is nullable                                                                         | Error returned when payment is reverted                                                                                       |
| created_at:small_orange_diamond:             | STRING     |-                                                                                    | Payment created date                                                                                                          |
:small_orange_diamond: *Required fields in the response*
</RequestComponent>