import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get wallet by ID

| GET       | /operations/wallets{id}|
| --------- | -----------------------|


Enter the wallet's ID and execute to get it's state and all information


## Request <a href="https://api-dev159sw.zrobank.biz:2083/api/" class="try-btn">Try it!</a>

### Header

| Title                      | Type       | Properties                       | Description |
| ---------------------------| :---------:|:-------------------------------: |----------------------------------------------------------------------------------------------------------------|
| nonce:small_orange_diamond:| STRING     | Must be a **UUID(v4)**           | The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier|
:small_orange_diamond: *Required parameters on header*

### Filter Parameters

| Title                   | Type       | Properties                          |Description             |
| ------------------------| :---------:|:-----------------------------------:| -----------------------|
| id:small_orange_diamond:| STRING     | Must be a **UUID**                  | Wallet ID              |
:small_orange_diamond: *Required parameters on path*


<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

axios({
  method: 'get',
  url: 'https://api-dev159sw.zrobank.biz:2083/operations/wallets/f6e2e084-29b9-4935-a059-5473b13033aa',
  headers: {
    accept: 'application/json',
    nonce: "e5c8e59d-6f37-4c55-8b9a-1366f378abfd",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey",
    'Content-Type: application/json'
  }
})
.then((response) => {
  console.log(response.data);
})
.catch((error) => {
  console.error(error);
});
```
</TabItem>
<TabItem value="py" label="Python">

```python title=Requests
import requests

url = 'https://api-dev159sw.zrobank.biz:2083/operations/wallets/f6e2e084-29b9-4935-a059-5473b13033aa'

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
  'https://api-dev159sw.zrobank.biz:2083/operations/wallets/f6e2e084-29b9-4935-a059-5473b13033aa' \
  -H 'accept: application/json' \
  -H 'nonce: e5c8e59d-6f37-4c55-8b9a-1366f378abfd' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://api-dev159sw.zrobank.biz:2083/operations/wallets/f6e2e084-29b9-4935-a059-5473b13033aa';

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
<TabItem value="200" label="201">

```json  title=/operations/wallets{id}
{
  "id": "f6e2e084-29b9-4935-a059-5473b13033aa",
  "name": "BTC",
  "default": false,
  "state": "active",
  "permission_types": [
    "CLIENT"
  ],
  "owner_id": "f6e2e084-29b9-4935-a059-5473b13033aa",
  "owner_name": "James Bond",
  "created_at": "2023-06-02T20:01:45.351Z"
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/operations/wallets{id}
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Access is denied."
}
```
</TabItem>
<TabItem value="422" label="422">

```json  title=/operations/wallets/{id}
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

| Title                                  | Type       |Properties                                            | Description                                              |
| -------------------------------------  |:----------:|:----------------------------------------------------:| -------------------------------------------------------- |
| id:small_orange_diamond:               | STRING     | **UUID**                                             | Wallet ID                                                |
| name:small_orange_diamond:             | STRING     | -                                                    | Wallet name                                              |
| default:small_orange_diamond:          | STRING     | -                                                    | Wallet default flag                                      |
| state:small_orange_diamond:            | STRING     | Available states:<br/> *pending, active, deactivate* | Wallet state                                             |
| permission_types:small_orange_diamond: | STRING     | -                                                    | Wallet permission type that defines what the user can do |
| owner_id:small_orange_diamond:         | STRING     | **UUID**                                             | Wallet owner ID                                          |
| owner_name:small_orange_diamond:       | STRING     | -                                                    | Wallet owner name                                        |
| created_at:small_orange_diamond:       | STRING     | Timestamp with timezone                              | Wallet created date                                      |
:small_orange_diamond: *Required fields on response*
