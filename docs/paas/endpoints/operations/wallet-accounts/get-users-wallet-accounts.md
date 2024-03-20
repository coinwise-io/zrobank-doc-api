import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RequestComponent from '@site/src/components/RequestComponent'
import filterParams from '@site/docs/paas/endpoints/operations/wallet-accounts/params/GetUsersWalletAccounts/filterParams.ts'
import headerParams from '@site/docs/paas/endpoints/operations/wallet-accounts/params/GetUsersWalletAccounts/headerParams.ts'
import BASE_URL from "@site/src/config/index.ts"

# List user's wallet accounts

| GET       | /operations/wallet-accounts|
| --------- | ---------------------------|


Get a list of user's wallet accounts. You can include any of the filter parameters below to refine your search.


## Request 

<RequestComponent headerParams={headerParams} filterParams={filterParams} baseUrl={BASE_URL.paas} endpoint="/operations/wallet-accounts" method="get">

### Header

| Title                      | Type       | Properties                       | Description |
| ---------------------------| :---------:|:-------------------------------: |----------------------------------------------------------------------------------------------------------------|
| x-wallet-uuid              | STRING     | Must be a **UUID**               | Sender Wallet UUID **(if empty, your default Wallet UUID will be settled)**                                    |
| nonce:small_orange_diamond:| STRING     | Must be a **UUID(v4)**           | The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier|
:small_orange_diamond: *Required parameters on header*

### Filter Parameters

| Title                    | Type       | Properties                                                                          |Default value |Description                                        |
| -------------------------| :---------:|:-----------------------------------------------------------------------------------:|:------------:| ------------------------------------------------- |
| page                     | NUMBER     | -                                                                                   | 1            | Page number                                       |
| size                     | NUMBER     | **Max size is 100**                                                                 | 20           | Page size                                         |
| sort                     | STRING     | Available values : *currencySymbol*                                                 | -            | Page sort attribute                               |
| order                    | STRING     | Available values : *asc, desc*                                                      | asc          | Page order                                        |
| currency_symbol          | STRING     | -                                                                                   | -            | Wallet account currency symbol                    |



<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

const url = 'https://sandbox.zro.com/api/operations/wallet-accounts?page=1&size=20&order=asc&currency_symbol=BRL';

const headers = {
  accept: 'application/json',
  nonce: "c70177e8-4d0b-4236-bf5f-9bd501dbfd6a",
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

url = "https://sandbox.zro.com/api/operations/wallet-accounts?page=1&size=20&order=asc&currency_symbol=BRL"

headers = {
    "accept": "application/json",
    "nonce": "c70177e8-4d0b-4236-bf5f-9bd501dbfd6a",
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
  'https://sandbox.zro.com/api/operations/wallet-accounts?page=1&size=20&order=asc&currency_symbol=BRL' \
  -H 'accept: application/json' \
  -H 'nonce: c70177e8-4d0b-4236-bf5f-9bd501dbfd6a' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://sandbox.zro.com/api/operations/wallet-accounts?page=1&size=20&order=asc&currency_symbol=BRL';

$headers = array(
  'accept: application/json',
  'nonce: c70177e8-4d0b-4236-bf5f-9bd501dbfd6a',
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

```json  title=/operations/wallet-accounts
{
  "success": true,
  "data": {
    "page": 1,
    "page_size": 20,
    "page_total": 1,
    "total": 1,
    "data": [
      {
        "balance": 900222267,
        "pending_amount": 0,
        "currency_id": 1,
        "currency_title": "Real",
        "currency_decimal": 2,
        "currency_symbol": "BRL",
        "currency_symbol_align": "left"
      }
    ]
  },
  "error": null
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/operations/wallet-accounts
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
| page:small_orange_diamond:                   | NUMBER     |-                                                 | Page number                          |
| page_size:small_orange_diamond:              | NUMBER     |-                                                 | Page size                            |
| page_total:small_orange_diamond:             | NUMBER     |-                                                 | Page total                           |
| total:small_orange_diamond:                  | NUMBER     |-                                                 | Total of elements                    |
| balance:small_orange_diamond:                | NUMBER     |-                                                 | User's balance                       |
| pending_amount                               | NUMBER     |-                                                 | Pending amount                       |
| currency_id:small_orange_diamond:            | NUMBER     |-                                                 | Currency ID                          |
| currency_title                               | STRING     |-                                                 | Currency title                       |
| currency_decimal:small_orange_diamond:       | NUMBER     |-                                                 | Currency decimal value               |
| currency_symbol:small_orange_diamond:        | STRING     |-                                                 | Currency symbol                      |
| currency_symbol_align:small_orange_diamond:  | STRING     |Available values: *left, right*                   | Currency symbol align position       |

:small_orange_diamond: *Required fields in the response*
</RequestComponent>