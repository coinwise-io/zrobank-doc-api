import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# List user's conversions

| GET    | /v3/otc/conversions |
| ------ | ------------------- |

Get a list of user's conversions. You can include any of the filter parameters below to refine your search.

## Request <a href="https://sandbox.zro.com/api/api/" class="try-btn">Try it!</a>

### Header

| Title                      | Type       | Properties                       | Description |
| ---------------------------| :---------:|:-------------------------------: |----------------------------------------------------------------------------------------------------------------|
| nonce:small_orange_diamond:| STRING     | Must be a **UUID(v4)**           | The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier|
:small_orange_diamond: *Required parameters on header*

### Filter Parameters

| Title                    | Type       | Properties                          |Default value |Description                                        |
| -------------------------| :---------:|:------------------------------------|--------------|-------------------------------------------------- |
| page                     | NUMBER     | -                                   | 1            | Page number                                       |
| size                     | NUMBER     | **Max size is 100**                 | 20           | Page size                                         |
| sort                     | STRING     | Available values:<br/> *created_at* | -            | Page sort attribute                               |
| order                    | STRING     | Available values:<br/> *asc, desc*  | asc          | Page order                                        |
| operation_id             | STRING     | Must be a **UUID**                  | -            | Operation ID for conversion                       |
| currency_symbol          | STRING     | -                                   | -            | Currency symbol for conversion                    |
| quotation_id             | STRING     | Must be a **UUID**                  | -            | Quotation ID for conversion                       |
| conversion_type          | STRING     | Available values:<br/> *buy, sell*  | -            | Conversion type                                   |
| created_at_start         | STRING     | Date format - *YYYY-MM-DD*          | -            | Created at start for any conversion               |
| created_at_end           | STRING     | Date format - *YYYY-MM-DD*          | -            | Created at end for any conversion                 |

<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

const url = 'https://sandbox.zro.com/api/v3/otc/conversions?page=1&size=20&order=asc&conversion_type=buy';

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

url = 'https://sandbox.zro.com/api/v3/otc/conversions?page=1&size=20&order=asc&conversion_type=buy'

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
  'https://sandbox.zro.com/api/v3/otc/conversions?page=1&size=20&order=asc&conversion_type=buy' \
  -H 'accept: application/json' \
  -H 'nonce: e5c8e59d-6f37-4c55-8b9a-1366f378abfd' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://sandbox.zro.com/api/v3/otc/conversions?page=1&size=20&order=asc&conversion_type=buy';

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

```json  title=/v3/otc/conversions
{
  "success": true,
  "data": {
    "page": 1,
    "page_size": 20,
    "page_total": 13,
    "total": 246,
    "data": [
      {
        "id": "338a58d3-80a6-406e-b726-48c0be9958f0",
        "operation_id": "a98c8772-d938-4966-a7cb-2fb32c60ac64",
        "quotation_id": "466ebc77-2273-457c-af02-a0d2ac0a2c07",
        "price": 518,
        "side": "buy",
        "quote_amount": 3972,
        "quote_currency_symbol": null,
        "quote_currency_decimal": null,
        "quote_currency_title": null,
        "base_amount": 7668975,
        "base_currency_symbol": null,
        "base_currency_decimal": null,
        "base_currency_title": null,
        "created_at": "2022-08-24T19:34:30.439Z"
      },
      {
        "id": "568ddf70-7b2d-4228-9281-a4e05f70372f",
        "operation_id": "87b34037-4c47-434b-b905-042a56131a74",
        "quotation_id": "ca77de9b-a9d8-44ea-80ea-3dc9324cf336",
        "price": 11236429,
        "side": "buy",
        "quote_amount": 8905,
        "quote_currency_symbol": null,
        "quote_currency_decimal": null,
        "quote_currency_title": null,
        "base_amount": 79252,
        "base_currency_symbol": null,
        "base_currency_decimal": null,
        "base_currency_title": null,
        "created_at": "2022-08-24T20:35:03.307Z"
      },
      {
        "id": "678265d7-a9f1-4c10-84af-49a3daba14a1",
        "operation_id": "2b50729b-74b8-493d-b15c-923752b37467",
        "quotation_id": "ea2da27c-7526-4f53-bd33-3a54b2a757d8",
        "price": 11232320,
        "side": "buy",
        "quote_amount": 17804,
        "quote_currency_symbol": null,
        "quote_currency_decimal": null,
        "quote_currency_title": null,
        "base_amount": 158504,
        "base_currency_symbol": null,
        "base_currency_decimal": null,
        "base_currency_title": null,
        "created_at": "2022-08-24T20:35:40.219Z"
      }
    ]
  },
  "error": null
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/v3/otc/conversions
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Access is denied."
}
```
</TabItem>
<TabItem value="422" label="422">

```json  title=/v3/otc/conversions
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "The  field created_at_start must be before the end date.",
  "code": "VALIDATION"
}
```
</TabItem>
</Tabs>

### Data description

| Title                                         | Type   |Properties                          | Description                                                   |
| --------------------------------------------  |:------:|:-----------------------------------|----------------------------------------------- -------------- |
| page:small_orange_diamond:                    | NUMBER |-                                   | Page number                                                   |
| page_size:small_orange_diamond:               | NUMBER |-                                   | Page size                                                     |
| page_total:small_orange_diamond:              | NUMBER |-                                   | Page total                                                    |
| total:small_orange_diamond:                   | NUMBER |-                                   | Total of elements                                             |
| id:small_orange_diamond:                      | STRING |**UUID**                            | Conversion ID                                                 |
| operation_id:small_orange_diamond:            | STRING |**UUID**                            | Operation ID. Used to track the conversion                    |
| quotation_id                                  | STRING |**UUID**                            | Quotation ID. Used to track the quotation for this conversion |
| price:small_orange_diamond:                   | NUMBER |Available values: <br/>*buy, sell*  | Conversion price                                              |
| side:small_orange_diamond:                    | STRING |Available values: <br/>*buy, sell*  | Conversion side                                               |
| quote_amount:small_orange_diamond:            | NUMBER |-                                   | Conversion quote amount                                       |
| quote_currency_symbol:small_orange_diamond:   | STRING |-                                   | Conversion quote currency symbol                              |
| quote_currency_decimal:small_orange_diamond:  | NUMBER |-                                   | Conversion quote currency decimal                             |
| quote_currency_title:small_orange_diamond:    | STRING |-                                   | Conversion quote currency title                               |
| base_amount:small_orange_diamond:             | NUMBER |-                                   | Conversion base amount                                        |
| base_currency_symbol:small_orange_diamond:    | STRING |-                                   | Conversion base currency symbol                               |
| base_currency_decimal:small_orange_diamond:   | NUMBER |-                                   | Conversion base currency decimal                              |
| base_currency_title:small_orange_diamond:     | STRING |-                                   | Conversion base currency title                                |
| created_at                                    | STRING |Timestamp with timezone             | Conversion created date                                       |


:small_orange_diamond: *Required fields in the response*
