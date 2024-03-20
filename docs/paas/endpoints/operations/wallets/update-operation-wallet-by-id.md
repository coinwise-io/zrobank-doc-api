import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RequestComponent from '@site/src/components/RequestComponent'
import pathParam from '@site/docs/paas/endpoints/operations/wallets/params/UpdateOperationWalletById/pathParams.ts'
import bodyParams from '@site/docs/paas/endpoints/operations/wallets/params/UpdateOperationWalletById/bodyParams.ts'
import headerParams from '@site/docs/paas/endpoints/operations/wallets/params/UpdateOperationWalletById/headerParams.ts'
import BASE_URL from "@site/src/config/index.ts"

# Update wallet data

| PUT      | /operations/wallets/\{id\}|
| -------- | ------------------------|

To update a wallet name with new one


## Request 

<RequestComponent headerParams={headerParams} pathParam={pathParam} bodyParams={bodyParams} baseUrl={BASE_URL.paas} endpoint="/operations/wallets/" method="put">

### Header

| Title                                    | Type       | Properties         | Maximum Length  | Description                                                                                                                           |
| ---------------------------------------- | :---------:|--------------------|:--------------: |-------------------------------------------------------------------------------------------------------------------------------------- |
| nonce:small_orange_diamond:              | STRING     | Must be a **UUID** | -               | The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier                       |
:small_orange_diamond: *Required parameters on header*

### Parameters

| Title                                | Type       | Properties         | Description |
| -------------------------------------| :---------:|:-----------------: |-------------|
| id:small_orange_diamond:             | STRING     | Must be a **UUID** | Wallet ID   |
:small_orange_diamond: *Required parameters on path*


### Body

| Title                                | Type       | Properties | Maximum Length  | Description |
| -------------------------------------| :---------:|:----------:|:--------------: |-------------|
| name:small_orange_diamond:           | STRING     | -          | 255             | Wallet name |
:small_orange_diamond: *Required parameters on body*


<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

const url = 'https://sandbox.zro.com/api/operations/wallets/6fc0b20d-727a-4e76-b5b6-c7a97f2ef486';

const headers = {
  accept: 'application/json',
  x-transaction-uuid: '8b1ef3a5-6d03-421e-8321-6d88ab5de8a0',
  nonce: '5430a3e4-d8db-4c71-bd8f-d5f982a1aeec',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ',
  'Content-Type: application/json'
};

const data = {
  name: 'New wallet name'
};

async function makeRequest() {
  try {
    const response = await axios.put(url, data, { headers });
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

url = "https://sandbox.zro.com/api/operations/wallets/\{id\}/6fc0b20d-727a-4e76-b5b6-c7a97f2ef486"
params = {
   "name":"New wallet name"
}

headers = {
    "accept": "application/json",
    "x-transaction-uuid": "8b1ef3a5-6d03-421e-8321-6d88ab5de8a0",
    "nonce": "5430a3e4-d8db-4c71-bd8f-d5f982a1aeec",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ",
    "Content-Type": "application/json"
}

response = requests.put(url=url, headers=headers, json=params)

print(response)
```
</TabItem>
<TabItem value="shell" label="Shell">

```shell title=CURL
curl -X 'PUT' \
  'https://sandbox.zro.com/api/operations/wallets/\{id\}/6fc0b20d-727a-4e76-b5b6-c7a97f2ef486' \
  -H 'accept: application/json' \
  -H 'x-transaction-uuid: 8b1ef3a5-6d03-421e-8321-6d88ab5de8a0' \
  -H 'nonce: 5430a3e4-d8db-4c71-bd8f-d5f982a1aeec' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey' \
  -H 'Content-Type: application/json' \
  -d '{
    "name":"New wallet name"

}'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://sandbox.zro.com/api/operations/wallets/\{id\}/6fc0b20d-727a-4e76-b5b6-c7a97f2ef486';
$params = array(
   "name" => "New wallet name"
   )

$headers = array(
  'accept: application/json',
  'nonce: 5430a3e4-d8db-4c71-bd8f-d5f982a1aeec',
  'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ',
  'Content-Type: application/json'
);

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_PUT, true);
curl_setopt($curl, CURLOPT_PUTFIELDS, json_encode($params));
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

```json  title=/operations/wallets/\{id\}
{
  "id": "f6e2e084-29b9-4935-a059-5473b13033aa",
  "name": "New wallet name",
  "default": false,
  "state": "active",
  "created_at": "2023-06-02T20:01:45.352Z"
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/operations/wallets/\{id\}
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Access is denied."
}
```
</TabItem>
<TabItem value="422" label="422">

```json  title=/operations/wallets/\{id\}
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Required mandatory data: Name.",
  "code": "MISSING_DATA"
}
```
</TabItem>
</Tabs>

### Data description

| Title                             | Type       |Properties                                            | Description                        |
| --------------------------------  |:----------:|:----------------------------------------------------:| ---------------------------------- |
| id:small_orange_diamond:          | STRING     | **UUID**                                             | Wallet ID                          |
| name:small_orange_diamond:        | STRING     | -                                                    | Wallet name                        |
| default:small_orange_diamond:     | STRING     | -                                                    | Wallet default flag                |
| state:small_orange_diamond:       | STRING     | Available values:<br/> *pending, active, deactivate* | Wallet state                       |
| created_at:small_orange_diamond:  | STRING     | Timestamp with timezone                              | Wallet created date                |

:small_orange_diamond: *Required fields in the response*
</RequestComponent>