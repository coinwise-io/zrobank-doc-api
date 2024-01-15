import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RequestComponent from '@site/src/components/RequestComponent'
import bodyParams from '@site/docs/paas/endpoints/operations/wallets/params/CreateNewWallet/bodyParams.ts'
import headerParams from '@site/docs/paas/endpoints/operations/wallets/params/CreateNewWallet/headerParams.ts'

# Create new wallet

| POST      | /operations/wallets|
| --------- | -------------------|

To create a new wallet with optional wallet name

<RequestComponent headerParams={headerParams} bodyParams={bodyParams} endpoint="/operations/wallets" method="post">

## Request <a href="https://sandbox.zro.com/api/api/" class="try-btn">Try it!</a>

### Header

| Title                                    | Type       | Properties         | Maximum Length  | Description                                                                                                                           |
| ---------------------------------------- | :---------:|--------------------|:--------------: |-------------------------------------------------------------------------------------------------------------------------------------- |
| x-transaction-uuid:small_orange_diamond: | STRING     | Must be a **UUID** | -               | The transaction ID is a UUID (v4) used to uniquely identify the object that will be created. All requisitions must have an identifier |
| nonce:small_orange_diamond:              | STRING     | Must be a **UUID** | -               | The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier                       |
:small_orange_diamond: *Required parameters on header*

### Body

| Title                                | Type       | Properties | Maximum Length  | Description |
| -------------------------------------| :---------:|:----------:|:--------------: |-------------|
| name:small_orange_diamond:           | STRING     | -          | 255             | Wallet name |
:small_orange_diamond: *Required parameters on body*


<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

const url = 'https://sandbox.zro.com/api/operations/wallets';

const headers =  {
  accept: 'application/json',
  x-transaction-uuid: '126f7d3b-9462-4c6d-afdd-65f4b83d9efc',
  nonce: 'e5c8e59d-6f37-4c55-8b9a-1366f378abfd',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ',
  'Content-Type: application/json'
};

const data = {
    name: 'Test wallet name'
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

url = "https://sandbox.zro.com/api/operations/wallets"
params = {
   "name":"Test wallet name"
}

headers = {
    "accept": "application/json",
    "x-transaction-uuid": "126f7d3b-9462-4c6d-afdd-65f4b83d9efc",
    "nonce": "e5c8e59d-6f37-4c55-8b9a-1366f378abfd",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ",
    "Content-Type": "application/json"
}

response = requests.post(url=url, headers=headers, json=params)

print(response)
```
</TabItem>
<TabItem value="shell" label="Shell">

```shell title=CURL
curl -X 'POST' \
  'https://sandbox.zro.com/api/operations/wallets' \
  -H 'accept: application/json' \
  -H 'x-transaction-uuid: 126f7d3b-9462-4c6d-afdd-65f4b83d9efc' \
  -H 'nonce: e5c8e59d-6f37-4c55-8b9a-1366f378abfd' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey' \
  -H 'Content-Type: application/json' \
  -d '{
    "name":"Test wallet name"

}'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://sandbox.zro.com/api/operations/wallets';
$params = array(
   "name" => "Test wallet name"
   )

$headers = array(
  'accept: application/json',
  'nonce: e5c8e59d-6f37-4c55-8b9a-1366f378abfd',
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

```json  title=/operations/wallets
{
  "id": "f6e2e084-29b9-4935-a059-5473b13033aa",
  "name": "Test wallet name",
  "default": false,
  "state": "active",
  "created_at": "2023-06-02T20:01:45.352Z"
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/operations/wallets
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Access is denied."
}
```
</TabItem>
<TabItem value="422" label="422">

```json  title=/operations/wallets
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