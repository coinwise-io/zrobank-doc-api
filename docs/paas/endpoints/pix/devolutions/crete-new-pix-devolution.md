import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RequestComponent from '@site/src/components/RequestComponent'
import headerParams from '@site/docs/paas/endpoints/pix/devolutions/params/CreateNewPixDevolution/headerParams.ts'
import bodyParams from '@site/docs/paas/endpoints/pix/devolutions/params/CreateNewPixDevolution/bodyParams.ts'
import BASE_URL from "@site/src/config/index.ts"

# Create new PIX devolution

| POST      | /pix/devolutions |
| --------- | ---------------- |

Enter the PIX devolution's information to create a new pix devolution.


## Request 

<RequestComponent headerParams={headerParams} bodyParams={bodyParams} baseUrl={BASE_URL.paas} endpoint="/pix/devolutions" method="post">

### Header

| Title                                    | Type       | Properties                   | Maximum Length  | Description                                                                                                                           |
| ---------------------------------------- | :---------:|------------------------------|:--------------: |-------------------------------------------------------------------------------------------------------------------------------------- |
| x-wallet-uuid                            | STRING     | Must be a **UUID**           | -               | Sender Wallet UUID. **If empty, your default Wallet UUID will be settled**                                                            |
| x-transaction-uuid:small_orange_diamond: | STRING     | Must be a **UUID**           | -               | The transaction ID is a UUID (v4) used to uniquely identify the object that will be created. All requisitions must have an identifier |
| nonce:small_orange_diamond:              | STRING     | Must be a **UUID**           | -               | The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier                       |
:small_orange_diamond: *Required parameters on header*

### Body

| Title                                           | Type       | Properties                                                        | Maximum Length | Description                                             |
| ------------------------------------------------| :---------:|-------------------------------------------------------------------|:--------------:|---------------------------------------------------------|
| operation_id:small_orange_diamond:              | STRING     | Must be a **UUID**                                                | -              | This ID is used to get receipt and track the transaction|
| amount:small_orange_diamond:                    | NUMBER     | **Should be less or equal then credit transaction(minimum is 1)** | INT8           | Value in **R$ cents**                                   |
| description                                     | STRING     | -                                                                 | 255            | User defined payment description                        |
:small_orange_diamond: *Required parameters on body*


<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

const url = 'https://sandbox.zro.com/api/pix/devolutions';

const headers = {
  accept: 'application/json',
  x-transaction-uuid: 'e5c8e59d-6f37-4c55-8b9a-1366f378abfd',
  nonce: 'c63267ad-3f5c-487b-9f52-b73c9dd7a10d',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ',
  'Content-Type: application/json'
};

const data = {
  operation_id: "013f4cc5-53d1-44e0-81b5-b8056ab6772b",
  amount:  1000,
  description: "Devolution description"
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

url = "https://sandbox.zro.com/api/pix/devolutions"
params = {
  "operation_id": "013f4cc5-53d1-44e0-81b5-b8056ab6772b",
  "amount": 1000,
  "description": "User defined description"
}

headers = {
    "accept": "application/json",
    "x-transaction-uuid": "e5c8e59d-6f37-4c55-8b9a-1366f378abfd",
    "nonce": "c63267ad-3f5c-487b-9f52-b73c9dd7a10d",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ",
    "Content-Type": "application/json"
}

response = requests.post(url=url, headers=headers, json=params)

print(response)
```
</TabItem>
<TabItem value="shell" label="Shell">

```shell title=CURL
curl -X 'POST' 'https://sandbox.zro.com/api/pix/devolutions' \
  -H 'accept: application/json' \
  -H 'x-transaction-uuid: e5c8e59d-6f37-4c55-8b9a-1366f378abfd',
  -H 'nonce: c63267ad-3f5c-487b-9f52-b73c9dd7a10d' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ' \
  -H 'Content-Type: application/json' \
  -d '{
  "operation_id": "013f4cc5-53d1-44e0-81b5-b8056ab6772b",
  "amount": 1000,
  "description": "Devolution description"
}'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://sandbox.zro.com/api/pix/devolutions';
$params = array(
    "operation_id" => "013f4cc5-53d1-44e0-81b5-b8056ab6772b",
    "amount" => 1000,
    "description" => "Devolution description"
)

$headers = array(
  'accept: application/json',
  'nonce: c63267ad-3f5c-487b-9f52-b73c9dd7a10d',
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

```json  title=/pix/devolutions
{
  "success": true,
  "data": {
    "id": "e5c8e59d-6f37-4c55-8b9a-1366f378abfd",
    "amount": 1000,
    "description": "Devolution description",
    "state": "PENDING",
    "created_at": "2023-06-04T20:07:10.013Z"
  },
  "error": null
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/pix/devolutions
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Access is denied."
}
```
</TabItem>
<TabItem value="422" label="422">

```json  title=/pix/devolutions
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "The operation_id value must be an UUID.",
  "code": "VALIDATION"
}
```
</TabItem>

</Tabs>

### Data description

| Title                           | Type       |Properties                                                                                      | Description                      |
| ------------------------------- |:----------:|----------------------------------------------------------------------------------------------- | ---------------------------------|
| id:small_orange_diamond:        | STRING     | **UUID**                                                                                       | Devolution ID                    |
| amount :small_orange_diamond:   | NUMBER     | -                                                                                              | Value in **R$ cents**            |
| description                     | STRING     | -                                                                                              | User defined payment description |
| state:small_orange_diamond:     | STRING     | Available values: *PENDING, WAITING, CONFIRMED, ERROR, FAILED, CANCELED, SCHEDULED*            | Devolution state                 |
| created_at:small_orange_diamond:| STRING     | Timestamp with timezone                                                                        | Payment created date             |
:small_orange_diamond: *Required parameters on response*

</RequestComponent>