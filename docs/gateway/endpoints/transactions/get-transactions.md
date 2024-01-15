import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RequestComponent from '@site/src/components/RequestComponent'
import headerParams from '@site/docs/gateway/endpoints/transactions/params/GetTransactions/headerParams.ts'
import filterParams from '@site/docs/gateway/endpoints/transactions/params/GetTransactions/filterParams.ts'

# List all transactions data

| GET       | /api/transactions|
| --------- | -----------------|


List all transactions data

:::info
If no parameter is set, it will automatically select today’s date as the search parameter
:::

<RequestComponent headerParams={headerParams} filterParams={filterParams} endpoint="/api/trasaction" method="get">

## Request <a href="https://sandbox.zro.com/api/" class="try-btn">Try it!</a>

### Header

| Title                                | Type       | Description    |
| ------------------------------------ | :---------:|--------------- |
| x-api-key:small_orange_diamond:      | STRING     | Your x-api-key |
:small_orange_diamond: *Required parameters on header*

### Filter Parameters

| Title                        | Type       | Properties                                                 |Description                                        |
| -----------------------------| :---------:|:----------------------------------------------------------:| ------------------------------------------------- |
| start_date                   | STRING     | Date format - YYYY-MM-DD [HH:MM:SS]                        | Filter by created at start date                   |
| end_date                     | STRING     | Date format - YYYY-MM-DD [HH:MM:SS]                        | Page size                                         |
| page                         | NUMBER     | -                                                          | Filter by page number                             |
| limit                        | NUMBER     | -                                                          | Limit numbers of items by page                    |


<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

const url = 'https://sandbox-api-payments.zrobank.xyz/api/transactions?start_date=2023-05-19%2010%3A00%3A00&end_date=2023-05-19%2020%3A00%3A00&page=1&limit=1';

const headers = {
  accept: 'application/json'
  x-api-key: `${Your api key}`
  X-CSRF-TOKEN: ''
};

async function makeRequest() {
  try {
    const response = await axios.post(url, { headers });
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

url = 'https://sandbox-api-payments.zrobank.xyz/api/transactions?start_date=2023-05-19%2010%3A00%3A00&end_date=2023-05-19%2020%3A00%3A00&page=1&limit=1'

headers = {
    "accept: application/json
    "x-api-key: {Your api key}
    "X-CSRF-TOKEN:"
}

response = requests.get(url=url, headers=headers)

print(response)
```
</TabItem>
<TabItem value="shell" label="Shell">

```shell title=CURL
curl -X 'GET' \
  'https://sandbox-api-payments.zrobank.xyz/api/transactions?start_date=2023-05-19%2010%3A00%3A00&end_date=2023-05-19%2020%3A00%3A00&page=1&limit=1' \
  -H 'accept: application/json' \
  -H 'x-api-key: {Your api key}' \
  -H 'X-CSRF-TOKEN: '
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://sandbox-api-payments.zrobank.xyz/api/transactions?start_date=2023-05-19%2010%3A00%3A00&end_date=2023-05-19%2020%3A00%3A00&page=1&limit=1';

$headers = array(
  'accept: application/json'
  'x-api-key: {Your api key}'
  'X-CSRF-TOKEN: '
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

```json  title=/api/transactions
{
  "data": [
    {
      "id": "3000",
      "transaction_uuid": "7da0c9af-215e-4625-b484-b8cfc87aaa09",
      "status": "pending",
      "transaction_type": "withdraw",
      "value": "10.00",
      "client_document": "80064671020",
      "created_at": "2022-05-12 22:42:41",
      "process_status": "waiting",
      "merchant_id": "123456"
    }
  ],
  "links": {
    "first": "http://sandbox-api-payments.zrobank.xyz/api/transactions?page=1",
    "last": "http://sandbox-api-payments.zrobank.xyz/api/transactions?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": null,
    "last_page": 1,
    "links": [
      {
        "url": "null",
        "label": "Anterior",
        "active": false
      },
      {
        "url": "http://sandbox-api-payments.zrobank.xyz/api/transactions?page=1",
        "label": "1",
        "active": true
      },
      {
        "url": null,
        "label": "Próxima",
        "active": false
      }
    ],
    "path": "http://sandbox-api-payments.zrobank.xyz/api/transactions",
    "per_page": 10,
    "to": null,
    "total": 1
  }
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/api/transactions
{
  "message": "Invalid x-api-key",
}
```
</TabItem>

</Tabs>

### Data description

| Title            | Type     |Properties                                                                              | Description                                              |
| -----------------|:--------:|:---------------------------------------------------------------------------------------|--------------------------------------------------------- |
| data             | OBJECT[] |-                                                                                       | Array of transactions data                               |
| id               | STRING   |-                                                                                       | ID of the transaction                                    |
| transaction_uuid | STRING   |**UUID**                                                                                | Reference of the QrCode for conciliation                 |
| status           | STRING   |Available status: <br/> *pending, paid, canceled, paid_by_third_party, failed, awaiting*| Transaction status                                       |
| transaction_type | STRING   |Avaiable types:<br/>*transaction, withdraw, refund*                                     | Transaction type                                         |
| value            | STRING   |-                                                                                       | Value of the transaction                                 |
| client_document	 | STRING   |-                                                                                       | Document of the person who paid or received (CPF or CNPJ)|
| created_at       | STRING   |Timestamp with timezone                                                                 | Date when the transaction was created                    |
| process_status   | STRING   |Available status: <br/>*waiting, completed, failed*                                     | Transaction payment status                               |
| merchant_id      | STRING   |-                                                                                       | Merchant's ID for conciliation                           |
| first            | STRING   |-                                                                                       | Show first page link                                     |
| last             | STRING   |-                                                                                       | Show last page link                                      |
| prev             | STRING   |-                                                                                       | Show previous page link                                  |
| next             | STRING   |-                                                                                       | Show next page link                                      |
| current_page	   | NUMBER   |-                                                                                       | Current page number                                      |
| from             | NUMBER   |-                                                                                       | From page number                                         |
| last_page        | NUMBER   |-                                                                                       | Last page number                                         |
| path             | STRING   |-                                                                                       | Pagination path                                          |
| per_page         | NUMBER   |-                                                                                       | Pagination per_page number os items                      |
| to               | NUMBER   |-                                                                                       | Pagination to page                                       |
| total            | NUMBER   |-                                                                                       | Total number of itens per page                           |
</RequestComponent>