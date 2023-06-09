import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get new SPOT quotation

| GET      | /v2/quotations/spot |
| ---------| ------------------- |

To create a new currency conversion, first, you need to create a **Quotation ID**. Enter a new SPOT quotation and execute it to get its ID. This ID is the `quotation_id` that will be required to **[create a new currency conversion](../conversion/create-new-conversion.md)**




## Request <a href="https://api-dev159sw.zrobank.biz:2083/api/" class="try-btn">Try it!</a>

### Header

| Title                      | Type       | Properties                       | Description |
| ---------------------------| :---------:|:-------------------------------: |----------------------------------------------------------------------------------------------------------------|
| nonce:small_orange_diamond:| STRING     | Must be a **UUID(v4)**           | The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier|
:small_orange_diamond: *Required parameters on header*

### Query Parameters

| Title                                 | Type       | Properties                          |Description              |
| -------------------------------------:|:-----------|:-----------------------------------:|------------------------ |
| base_currency:small_orange_diamond:   | STRING     | -                                   | Quotation currency      |
| amount_currency:small_orange_diamond: | STRING     | -                                   | Quotation currency quote|
| amount:small_orange_diamond:          | NUMBER     | -                                   | Quotation amount        |
| side:small_orange_diamond:            | STRING     | Available values:<br/> *buy, sell*  | Quotation side          |
:small_orange_diamond: *Required parameters on query request*


<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

axios({
  method: 'get',
  url: 'https://api-dev159sw.zrobank.biz:2083/v2/quotations/spot?base_currency=BTC&amount_currency=BRL&amount=1000&side=buy',
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

url = 'https://api-dev159sw.zrobank.biz:2083/v2/quotations/spot?base_currency=BTC&amount_currency=BRL&amount=1000&side=buy'

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
  'https://api-dev159sw.zrobank.biz:2083/v2/quotations/spot?base_currency=BTC&amount_currency=BRL&amount=1000&side=buy' \
  -H 'accept: application/json' \
  -H 'nonce: e5c8e59d-6f37-4c55-8b9a-1366f378abfd' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://api-dev159sw.zrobank.biz:2083/v2/quotations/spot?base_currency=BTC&amount_currency=BRL&amount=1000&side=buy';

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

```json  title=/v2/quotations/spot
{
  "success": true,
  "data": {
    "id": "fdb9a6b7-9eab-4ff4-ae3d-2e5e137f189d",
    "price_buy": 518,
    "price_sell": 504,
    "side": "buy",
    "quote_amount_buy": 3972,
    "quote_amount_sell": 3864,
    "quote_currency_symbol": "BRL",
    "quote_currency_decimal": 2,
    "quote_currency_title": "Real",
    "base_amount_buy": 7668975,
    "base_amount_sell": 7668975,
    "base_currency_symbol": "BTC",
    "base_currency_decimal": 8,
    "base_currency_title": "Bitcoin",
    "ttl": "2022-08-24T19:34:30.345Z"
  },
  "error": null
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/v2/quotations/spot
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Access is denied."
}
```
</TabItem>
<TabItem value="422" label="422">

```json  title=/v2/quotations/spot
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "The field amount must be a number",
  "code": "VALIDATION"
}
```
</TabItem>
</Tabs>

### Data description

| Title                                         | Type   |Properties                          | Description                     |
| --------------------------------------------  |:------:|:----------------------------------:|---------------------------------|
| id:small_orange_diamond:                      | STRING |**UUID**                            | Quotation ID                    |
| price_buy:small_orange_diamond:               | NUMBER |-                                   | Quotation price buy             |
| price_sell:small_orange_diamond:              | NUMBER |-                                   | Quotation price sell            |
| side:small_orange_diamond:                    | STRING |Available values: <br/>*buy, sell*  | Quotation side                  |
| quote_amount_buy:small_orange_diamond:        | NUMBER |-                                   | Quotation quote amount buy      |
| quote_amount_sell:small_orange_diamond:       | NUMBER |-                                   | Quotation quote amount sell     |
| quote_currency_symbol:small_orange_diamond:   | STRING |-                                   | Quotation quote currency symbol |
| quote_currency_decimal:small_orange_diamond:  | NUMBER |-                                   | Quotation quote currency decimal|
| quote_currency_title:small_orange_diamond:    | STRING |-                                   | Quotation quote currency title  |
| base_amount_buy:small_orange_diamond:         | NUMBER |-                                   | Quotation base amount buy       |
| base_amount_sell:small_orange_diamond:        | NUMBER |-                                   | Quotation base amount sell      |
| base_currency_symbol:small_orange_diamond:    | STRING |-                                   | Quotation base currency symbol  |
| base_currency_decimal:small_orange_diamond:   | NUMBER |-                                   | Quotation base currency decimal |
| base_currency_title:small_orange_diamond:     | STRING |-                                   | Quotation base currency title   |
| ttl                                           | STRING |Timestamp with timezone             | Quotation TTL date              |
:small_orange_diamond: *Required fields in the response*
