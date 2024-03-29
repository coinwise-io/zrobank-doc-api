import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RequestComponent from '@site/src/components/RequestComponent'
import pathParam from '@site/docs/paas/endpoints/operations/wallets/params/DeleteWalletById/pathParams.ts'
import bodyParams from '@site/docs/paas/endpoints/operations/wallets/params/DeleteWalletById/bodyParams.ts'
import headerParams from '@site/docs/paas/endpoints/operations/wallets/params/DeleteWalletById/headerParams.ts'


# Delete wallet

| DELETE    | /operations/wallets/\{id\}|
| --------- | ------------------------|

Delete a wallet


## Request 

<RequestComponent headerParams={headerParams} pathParam={pathParam} bodyParams={bodyParams} selectorBaseUrl="paas" endpoint="/operations/wallets/" method="delete">

### Header

| Title                      | Type       | Properties                       | Description |
| ---------------------------| :---------:|:-------------------------------: |----------------------------------------------------------------------------------------------------------------|
| nonce:small_orange_diamond:| STRING     | Must be a **UUID**           | The nonce ID is a UUID  used to uniquely identify the requisition. All requisitions must have an identifier|
:small_orange_diamond: *Required parameters on header*

### Parameters

| Title                    | Type       | Properties                          |Description             |
| -------------------------| :---------:|:-----------------------------------:| -----------------------|
| id:small_orange_diamond: | STRING     | Must be a **UUID**                  | Wallet ID              |
:small_orange_diamond: *Required parameters on path*

### Body

| Title                                  | Type       | Properties                         |Description             |
| ---------------------------------------| :---------:|:-----------------------------------| -----------------------|
| wallet_backup_id:small_orange_diamond: | STRING     | Is nullable                        | Wallet backup id. **If the wallet to delete has balance, have to pass a wallet backup id to transfer the balance** |
:small_orange_diamond: *Required parameters on body*


<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

const url =  'https://sandbox.zro.com/api/operations/wallets/f6e2e084-29b9-4935-a059-5473b13033aa';

const headers = {
  accept: 'application/json',
  nonce: "e5c8e59d-6f37-4c55-8b9a-1366f378abfd",
  Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey",
  'Content-Type: application/json'
};

const data = {
  wallet_backup_id: 'b4b48884-4d1c-46f9-9847-1a273c66ad10'
};


async function makeRequest() {
  try {
    const response = await axios.delete(url, data, { headers });
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

url = 'https://sandbox.zro.com/api/operations/wallets/f6e2e084-29b9-4935-a059-5473b13033aa'

params = {
    "wallet_backup_id": "b4b48884-4d1c-46f9-9847-1a273c66ad10"
}

headers = {
    "accept": "application/json",
    "nonce": "e5c8e59d-6f37-4c55-8b9a-1366f378abfd",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey",
    "Content-Type": "application/json"
}

response = requests.delete(url=url, headers=headers, json=params)

print(response)
```
</TabItem>
<TabItem value="shell" label="Shell">

```shell title=CURL
curl -X 'DELETE' \
  'https://sandbox.zro.com/api/operations/wallets/f6e2e084-29b9-4935-a059-5473b13033aa' \
  -H 'accept: application/json' \
  -H 'nonce: e5c8e59d-6f37-4c55-8b9a-1366f378abfd' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey'
  -d '{
    "wallet_backup_id": "b4b48884-4d1c-46f9-9847-1a273c66ad10"
  }'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://sandbox.zro.com/api/operations/wallets/f6e2e084-29b9-4935-a059-5473b13033aa';

$params = array(
    "wallet_backup_id" => "b4b48884-4d1c-46f9-9847-1a273c66ad10"
)


$headers = array(
  'accept: application/json',
  'nonce: e5c8e59d-6f37-4c55-8b9a-1366f378abfd',
  'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9',
  'Content-Type: application/json'
);

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_DELETE, true);
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
  "success": true,
  "error": null
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
  "message": "The id value must be an UUID.",
  "code": "VALIDATION"
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