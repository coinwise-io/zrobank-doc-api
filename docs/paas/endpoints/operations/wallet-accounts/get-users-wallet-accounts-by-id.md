import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get user's wallet account by ID

| GET       | /operations/wallet-accounts/{id}   |
| --------- | -----------------------------------|


Get a user's wallet account by id

## Request <a href="https://api-dev159sw.zrobank.biz:2083/api/" class="try-btn">Try it!</a>

### Header

| Title                      | Type       | Properties                   | Description                                                                                                    |
| ---------------------------| :---------:|:---------------------------: |----------------------------------------------------------------------------------------------------------------|
| x-wallet-uuid              | STRING     | Must be a **UUID**           | Sender Wallet UUID **(if empty, your default Wallet UUID will be settled)**                                    |
| nonce:small_orange_diamond:| STRING     | Must be a **UUID**           | The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier|
:small_orange_diamond: *Required parameters on header*

### Parameters

| Title                    | Type       | Properties             |Description        |
| -------------------------| :---------:|:----------------------:| ------------------|
| id:small_orange_diamond: | STRING     | Must be a **UUID**     | Wallet account ID |
:small_orange_diamond: *Required parameters on header*



<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

axios({
  method: 'get',
  url: 'https://api-dev159sw.zrobank.biz:2083/operations/wallet-accounts/f6e2e084-29b9-4935-a059-5473b13033aa',
  headers: {
    accept: 'application/json',
    nonce: "c63267ad-3f5c-487b-9f52-b73c9dd7a10d",
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

url = "https://api-dev159sw.zrobank.biz:2083/operations/wallet-accounts/f6e2e084-29b9-4935-a059-5473b13033aa"

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
  'https://api-dev159sw.zrobank.biz:2083/operations/wallet-accounts/f6e2e084-29b9-4935-a059-5473b13033aa' \
  -H 'accept: application/json' \
  -H 'nonce: c63267ad-3f5c-487b-9f52-b73c9dd7a10d' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://api-dev159sw.zrobank.biz:2083/operations/wallet-accounts/f6e2e084-29b9-4935-a059-5473b13033aa';

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
<TabItem value="200" label="201">

```json  title=/operations/wallet-accounts/{id}
{
  "id": "f6e2e084-29b9-4935-a059-5473b13033aa",
  "balance": 10000,
  "pending_amount": 5000,
  "state": "active",
  "account_number": "12345678",
  "branch_number": "0001",
  "wallet_id": "e7952c10-d6f2-4dd0-9a82-2b7dd791f2d3",
  "currency_id": 27,
  "currency_title": "Real",
  "currency_decimal": 2,
  "currency_symbol": "BRL",
  "currency_symbol_align": "right"
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/operations/wallet-accounts/{id}
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

| Title                                        | Type       |Properties                                        | Description                          |
| -------------------------------------------  |:----------:|:------------------------------------------------:|--------------------------------------|
| id:small_orange_diamond:                     | STRING     |**UUID**                                          | Wallet Account ID                    |
| balance:small_orange_diamond:                | NUMBER     |-                                                 | User's balance                       |
| pending_amount                               | NUMBER     |-                                                 | Pending amount                       |
| state:small_orange_diamond:                  | STRING     |Available values: *pending, active, deactive*     | Wallet account state                 |
| account_number                               | STRING     |-                                                 | Wallet account number                |
| branch_number                                | STRING     |-                                                 | Wallet account branch number         |
| wallet_id:small_orange_diamond:              | STRING     |**UUID**                                          | Wallet account wallet ID             |
| currency_id:small_orange_diamond:            | NUMBER     |-                                                 | Currency ID                          |
| currency_title                               | STRING     |-                                                 | Currency title                       |
| currency_decimal:small_orange_diamond        | NUMBER     |-                                                 | Currency decimal value               |
| currency_symbol:small_orange_diamond:        | STRING     |-                                                 | Currency symbol                      |
| currency_symbol_align:small_orange_diamond:  | STRING     |Available values: *left, right*                   | Currency symbol align position       |
:small_orange_diamond: *Required fields in the response*