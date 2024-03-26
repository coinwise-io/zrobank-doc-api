import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RequestComponent from '@site/src/components/RequestComponent'
import headerParams from '@site/docs/paas/endpoints/pix/devolutions/params/GetPixDevolutionReceivedById/headerParams.ts'
import pathParam from '@site/docs/paas/endpoints/pix/devolutions/params/GetPixDevolutionReceivedById/pathParams.ts'


# Get received PIX devolution by ID

| GET       | /v3/pix/devolutions-received/\{id\}|
| --------- | ---------------------------------|


Enter the received pix devolution's ID below and execute to get it's state and all information.


## Request 

<RequestComponent headerParams={headerParams} pathParam={pathParam} selectorBaseUrl="paas" endpoint="/v3/pix/devolutions-received/" method="get">

### Header

| Title                      | Type       | Properties                       | Description |
| ---------------------------| :---------:|:-------------------------------: |----------------------------------------------------------------------------------------------------------------|
| x-wallet-uuid              | STRING     | Must be a **UUID**           | Sender Wallet UUID **(if empty, your default Wallet UUID will be settled)**                                    |
| nonce:small_orange_diamond:| STRING     | Must be a **UUID**           | The nonce ID is a UUID  used to uniquely identify the requisition. All requisitions must have an identifier|
:small_orange_diamond: *Required parameters on header*

### Parameters

| Title                    | Type       | Properties             |Description                                        |
| -------------------------| :---------:|:----------------------:| ------------------------------------------------- |
| id:small_orange_diamond: | STRING     | Must be a **UUID**     | Devolution Received ID                            |
:small_orange_diamond: *Required parameters on header*



<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

const url = 'https://sandbox.zro.com/api/pix/devolutions-received/f6e2e084-29b9-4935-a059-5473b13033aa';

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

url = "https://sandbox.zro.com/api/v3/pix/devolutions/f6e2e084-29b9-4935-a059-5473b13033aa"

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
  'https://sandbox.zro.com/api/pix/devolutions-received/f6e2e084-29b9-4935-a059-5473b13033aa' \
  -H 'accept: application/json' \
  -H 'nonce: c63267ad-3f5c-487b-9f52-b73c9dd7a10d' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://sandbox.zro.com/api/pix/devolutions-received/f6e2e084-29b9-4935-a059-5473b13033aa';

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

```json  title=/v3/pix/devolutions-received/\{id\}
{
  "id": "f6e2e084-29b9-4935-a059-5473b13033aa",
  "description": "The party devolution received.",
  "state": "READY",
  "operation_id": "f6e2e084-29b9-4935-a059-5473b13033aa",
  "end_to_end_id": "string",
  "txid": "f6e2e084-29b9-4935-a059-5473b13033aa",
  "amount": 1299,
  "owner_name": "string",
  "owner_person_type": "CPF",
  "owner_document": "string",
  "owner_bank_name": "string",
  "beneficiary_name": "string",
  "beneficiary_person_type": "CPF",
  "beneficiary_document": "string",
  "beneficiary_bank_name": "string",
  "created_at": "2023-06-02T20:01:45.383Z"
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/v3/pix/devolutions-received/\{id\}
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Access is denied."
}
```
</TabItem>
<TabItem value="422" label="422">

```json  title=/v3/pix/devolutions-received/\{id\}
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


| Title                                         | Type   |Properties                                                                                        | Description                                                  |
| --------------------------------------------  |:------:|:------------------------------------------------------------------------------------------------:|------------------------------------------------------------- |
| id:small_orange_diamond:                      | STRING |**UUID**                                                                                          | Devolution ID                                                |
| description                                   | STRING |-                                                                                                 | User defined devolution description                          |
| state:small_orange_diamond:                   | STRING |Available values: *READY, ERROR*                                                                  | Devolution received state                                    |
| operation_id:small_orange_diamond:            | STRING |**UUID**                                                                                          | Operation UUID. Used to get receipt and track the transaction|
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
| created_at:small_orange_diamond:              | STRING |Timestamp with timezone                                                                           | Devolution received created date                             |
:small_orange_diamond: *Required fields in the response*
</RequestComponent>