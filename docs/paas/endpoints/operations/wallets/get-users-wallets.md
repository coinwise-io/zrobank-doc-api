import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RequestComponent from '@site/src/components/RequestComponent'
import filterParams from '@site/docs/paas/endpoints/operations/wallets/params/GetUsersWallets/filterParams.ts'
import headerParams from '@site/docs/paas/endpoints/operations/wallets/params/GetUsersWallets/headerParams.ts'

# List user's wallets

| GET       | /operations/wallets|
| --------- | -------------------|


Get a list of user's wallets. You can include any of the filter parameters below to refine your search.


## Request 

<RequestComponent headerParams={headerParams} filterParams={filterParams} endpoint="/operations/wallets" method="get">

### Header

| Title                      | Type       | Properties                       | Description |
| ---------------------------| :---------:|:-------------------------------: |----------------------------------------------------------------------------------------------------------------|
| nonce:small_orange_diamond:| STRING     | Must be a **UUID(v4)**           | The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier|
:small_orange_diamond: *Required parameters on header*

### Filter Parameters

| Title | Type       | Properties                          |Description             |
| ------| :---------:|:-----------------------------------:| -----------------------|
| owner | STRING     | Available values:<br/>*USER, OTHER* | User wallet owner type |


<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

const url = 'https://sandbox.zro.com/api/operations/wallets?owner=USER';

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

url = 'https://sandbox.zro.com/api/operations/wallets?owner=USER'

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
  'https://sandbox.zro.com/api/operations/wallets?owner=USER' \
  -H 'accept: application/json' \
  -H 'nonce: e5c8e59d-6f37-4c55-8b9a-1366f378abfd' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://sandbox.zro.com/api/operations/wallets?owner=USER';

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

```json  title=/operations/wallets
{
  "success": true,
  "data": [
    {
      "id": "941685ab-fd94-4387-8e24-8eb77b9dcdf2",
      "name": "DEFAULT",
      "default": true,
      "state": "active",
      "permission_types": [
        "ROOT"
      ],
      "owner_id": "b28163ec-3d28-4786-a154-7a28ab3600a6",
      "owner_name": "Zro Bolsão",
      "created_at": "2022-03-29T14:07:10.045Z"
    },
    {
      "id": "474a72bc-dbb5-4ef1-acd5-6dd89aa480ba",
      "name": "Wallet 4",
      "default": false,
      "state": "active",
      "permission_types": [
        "ROOT"
      ],
      "owner_id": "b28163ec-3d28-4786-a154-7a28ab3600a6",
      "owner_name": "Zro Bolsão",
      "created_at": "2022-01-27T14:07:10.045Z"
    }
  ],
  "error": null
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
</Tabs>

### Data description

| Title                                  | Type       |Properties                                            | Description                                              |
| -------------------------------------  |:----------:|:----------------------------------------------------:| -------------------------------------------------------- |
| id:small_orange_diamond:               | STRING     | **UUID**                                             | Wallet ID                                                |
| name:small_orange_diamond:             | STRING     | -                                                    | Wallet name                                              |
| default:small_orange_diamond:          | STRING     | -                                                    | Wallet default flag                                      |
| state:small_orange_diamond:            | STRING     | Available values:<br/> *pending, active, deactivate* | Wallet state                                             |
| permission_types:small_orange_diamond: | STRING     | -                                                    | Wallet permission type that defines what the user can do |
| owner_id:small_orange_diamond:         | STRING     | **UUID**                                             | Wallet owner ID                                          |
| owner_name:small_orange_diamond:       | STRING     | -                                                    | Wallet owner name                                        |
| created_at:small_orange_diamond:       | STRING     | Timestamp with timezone                              | Wallet created date                                      |
:small_orange_diamond: *Required fields in the response*
</RequestComponent>