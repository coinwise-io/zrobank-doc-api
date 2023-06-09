import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# List user's operations

| GET       | /operations     |
| --------- | ----------------|

Get a list of user's operations

## Request <a href="https://api-dev159sw.zrobank.biz:2083/api/" class="try-btn">Try it!</a>

### Header

| Title                      | Type       | Properties                       | Description |
| ---------------------------| :---------:|:-------------------------------: |----------------------------------------------------------------------------------------------------------------|
| x-wallet-uuid              | STRING     | Must be a **UUID(v4)**           | Sender Wallet UUID **(if empty, your default Wallet UUID will be settled)**                                    |
| nonce:small_orange_diamond:| STRING     | Must be a **UUID(v4)**           | The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier|
:small_orange_diamond: *Required parameters on header*

### Filter Parameters

| Title                    | Type       | Properties                      |Default value |Description                                        |
| -------------------------| :---------:|:-------------------------------:|:------------:| ------------------------------------------------- |
| page                     | NUMBER     | -                               | 1            | Page number                                       |
| size                     | NUMBER     | **Max size is 100**             | 20           | Page size                                         |
| sort                     | STRING     | Available values : *created_at* | -            | Page sort attribute                               |
| order                    | STRING     | Available values : *asc, desc*  | asc          | Page order                                        |
| currency_symbol          | STRING     | -                               | -            | Operation currency symbol                         |
| transaction_tag          | STRING     | -                               | -            | Operation transaction tag                         |
| created_at_start         | STRING     | Date format - *YYYY-MM-DD*      | -            | Operation created date start                      |
| created_at_end           | STRING     | Date format - *YYYY-MM-DD*      | -            | Operation created date end                        |


<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

axios({
  method: 'get',
  url: 'https://api-dev159sw.zrobank.biz:2083/operations?page=1&size=20&order=asc&currency_symbol=BRL&transaction_tag=PIXSEND',
  headers: {
    accept: 'application/json',
    nonce: "c70177e8-4d0b-4236-bf5f-9bd501dbfd6a",
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

url = "https://api-dev159sw.zrobank.biz:2083/operations?page=1&size=20&order=asc&currency_symbol=BRL&transaction_tag=PIXSEND"

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
  'https://api-dev159sw.zrobank.biz:2083/operations?page=1&size=20&order=asc&currency_symbol=BRL&transaction_tag=PIXSEND' \
  -H 'accept: application/json' \
  -H 'nonce: c70177e8-4d0b-4236-bf5f-9bd501dbfd6a' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://api-dev159sw.zrobank.biz:2083/operations?page=1&size=20&order=asc&currency_symbol=BRL&transaction_tag=PIXSEND';

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
<TabItem value="200" label="201">

```json  title=/operations
{
  "success": true,
  "data": {
    "page": 1,
    "page_size": 20,
    "page_total": 144,
    "total": 2878,
    "data": [
      {
        "id": "cf83aac7-5dc6-42ae-a99a-15ccdea0c352",
        "fee": 0,
        "state": "accepted",
        "description": "PIX_PAYMENT",
        "value": 18210,
        "created_at": "2022-03-29T18:32:03.711Z",
        "reverted_at": null,
        "currency_id": 1,
        "currency_symbol": "BRL",
        "transaction_id": 58,
        "transaction_tag": "PIXSEND",
        "owner_wallet_uuid": "941685ab-fd94-4387-8e24-8eb77b9dcdf2",
        "beneficiary_wallet_uuid": null,
        "operation_ref_id": null,
        "chargeback_id": null
      },
      {
        "id": "bec5d396-7e5e-40cf-9684-dd72a5e2b61b",
        "fee": 0,
        "state": "accepted",
        "description": "PIX_PAYMENT",
        "value": 16043,
        "created_at": "2022-03-30T13:51:44.966Z",
        "reverted_at": null,
        "currency_id": 1,
        "currency_symbol": "BRL",
        "transaction_id": 58,
        "transaction_tag": "PIXSEND",
        "owner_wallet_uuid": "941685ab-fd94-4387-8e24-8eb77b9dcdf2",
        "beneficiary_wallet_uuid": null,
        "operation_ref_id": null,
        "chargeback_id": null
      }
    ]
  },
  "error": null
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/operations
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Access is denied."
}
```
</TabItem>
<TabItem value="422" label="422">

```json  title=/operations
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "The field created_at_start has the wrong format.",
  "code": "VALIDATION"
}
```
</TabItem>
</Tabs>

### Data description

| Title                                | Type       |Properties                                                              | Description                 |
| -----------------------------------  |:----------:|:----------------------------------------------------------------------:|-----------------------------|
| page:small_orange_diamond:           | NUMBER     |-                                                                       | Page number                 |
| page_size:small_orange_diamond:      | NUMBER     |-                                                                       | Page size                   |
| page_total:small_orange_diamond:     | NUMBER     |-                                                                       | Page total                  |
| total:small_orange_diamond:          | NUMBER     |-                                                                       | Total of elements           |
| id:small_orange_diamond:             | STRING     |**UUID**                                                                | Operation ID                |
| fee                                  | NUMBER     |-                                                                       | Operation fee               |
| state:small_orange_diamond:          | STRING     |Available values:<br/> *accepted, declined, undone, pending, reverted*  | Operation state             |
| description:small_orange_diamond:    | STRING     |-                                                                       | Operation description       |
| value                                | NUMBER     |-                                                                       | Operation value             |
| created_at:small_orange_diamond:     | STRING     |Timestamp with timezone                                                 | Operation created date      |
| reverted_at                          | STRING     |Timestamp with timezone                                                 | Operation reverted date     |
| currency_id:small_orange_diamond:    | NUMBER     |-                                                                       | Currency ID                 |
| currency_symbol:small_orange_diamond:| STRING     |-                                                                       | Currency symbol             |
| transaction_id:small_orange_diamond: | NUMBER     |-                                                                       | Transaction id              |
| transaction_tag:small_orange_diamond:| STRING     |-                                                                       | Transaction tag             |
| owner_wallet_uuid                    | STRING     |**UUID**                                                                | Operation owner wallet      |
| beneficiary_wallet_uuid              | STRING     |**UUID**                                                                | Operation beneficiary wallet|
| operation_ref_id	                   | STRING     |**UUID**                                                                | Operation ref ID            |
| chargeback_id 	                   | STRING     |**UUID**                                                                | Operation chargeback ID     |

:small_orange_diamond: *Required fields in the response*
