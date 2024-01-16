import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RequestComponent from '@site/src/components/RequestComponent'
import pathParam from '@site/docs/caas/endpoints/conversion/params/GetQuotationById/pathParams.ts'
import headerParams from '@site/docs/caas/endpoints/conversion/params/GetQuotationById/headerParams.ts'

# Get quotation by conversion ID

| GET       |/otc/conversions/\{id\}/quotations|
| --------- | ------------------------------ |

Enter the conversion's ID and execute to get its related quotation


## Request 

<RequestComponent headerParams={headerParams} pathParam={pathParam} endpoint="/otc/conversions/" endpointComplement="/quotations" method="get">

### Header
| Title                                    | Type       | Properties         | Maximum Length  | Description                                                                                                                           |
| ---------------------------------------- | :---------:|--------------------|:--------------: |-------------------------------------------------------------------------------------------------------------------------------------- |
| nonce:small_orange_diamond:              | STRING     | Must be a **UUID** | -               | The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier                       |
:small_orange_diamond: *Required parameters on header*

### Parameters

| Title                    | Type       | Properties             |Description   |
| -------------------------| :---------:|:----------------------:|--------------|
| id:small_orange_diamond: | STRING     | Must be a **UUID**     |Conversion ID |
:small_orange_diamond: *Required parameters on path*



<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

const url = 'https://sandbox.zro.com/api/otc/conversions/338a58d3-80a6-406e-b726-48c0be9958f0/quotations';

const headers = {
    accept: 'application/json',
    nonce: "c63267ad-3f5c-487b-9f52-b73c9dd7a10d",
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

url = "https://sandbox.zro.com/api/otc/conversions/338a58d3-80a6-406e-b726-48c0be9958f0/quotations"

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
  'https://sandbox.zro.com/api/otc/conversions/338a58d3-80a6-406e-b726-48c0be9958f0/quotations' \
  -H 'accept: application/json' \
  -H 'nonce: c63267ad-3f5c-487b-9f52-b73c9dd7a10d' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://sandbox.zro.com/api/otc/conversions/338a58d3-80a6-406e-b726-48c0be9958f0/quotations';

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
<TabItem value="200" label="200">

```json  title=/otc/conversions/\{id\}/quotations
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
    "created_at": "2022-08-24T19:34:30.345Z"
  },
  "error": null
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/otc/conversions/\{id\}/quotations
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Access is denied."
}
```
</TabItem>
<TabItem value="422" label="422">

```json  title=/otc/conversions/\{id\}/quotations
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
| created_at                                    | STRING |Timestamp with timezone             | Quotation created date          |
:small_orange_diamond: *Required fields in the response*
</RequestComponent>