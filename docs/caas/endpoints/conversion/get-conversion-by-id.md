import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RequestComponent from '@site/src/components/RequestComponent'
import pathParam from '@site/docs/caas/endpoints/conversion/params/GetConversionById/pathParams.ts'
import headerParams from '@site/docs/caas/endpoints/conversion/params/GetConversionById/headerParams.ts'

# Get conversion by ID

| GET    | /otc/conversions/\{id\}|
| ------ | ---------------------|

Enter the conversion's ID and execute to get all it's information


## Request 

<RequestComponent headerParams={headerParams} pathParam={pathParam} endpoint="/otc/conversions/" method="get">

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

const url = 'https://sandbox.zro.com/api/otc/conversions/f6e2e084-29b9-4935-a059-5473b13033aa';

const headers = {
  accept: 'application/json',
  nonce: "c63267ad-3f5c-487b-9f52-b73c9dd7a10d",
  Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey",
  'Content-Type: application/json'
};

async function makeRequest(){
  try{
    const response = await axios.get(url, {headers});
    console.log(response.data);
  }
  catch(error){
    console.error('Solicitation error:', error.message);
  }
}

makeRequest();
```
</TabItem>
<TabItem value="py" label="Python">

```python title=Requests
import requests

url = "https://sandbox.zro.com/api/otc/conversions/f6e2e084-29b9-4935-a059-5473b13033aa"

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
  'https://sandbox.zro.com/api/otc/conversions/f6e2e084-29b9-4935-a059-5473b13033aa' \
  -H 'accept: application/json' \
  -H 'nonce: c63267ad-3f5c-487b-9f52-b73c9dd7a10d' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://sandbox.zro.com/api/otc/conversions/f6e2e084-29b9-4935-a059-5473b13033aa';

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

```json  title=/otc/conversions/\{id\}
{
  "success": true,
  "data": {
    "id": "f6e2e084-29b9-4935-a059-5473b13033aa",
    "operation_id": "126f7d3b-9462-4c6d-afdd-65f4b83d9efc",
    "quotation_id": "2d2c95b0-9b7a-47e8-8cb2-5b37ac33b89e",
    "price": 10000,
    "side": "buy",
    "quote_amount": 300000,
    "quote_currency_symbol": "BRL",
    "quote_currency_decimal": 2,
    "quote_currency_title": "Real",
    "base_amount": 25600,
    "base_currency_symbol": "BTC",
    "base_currency_decimal": 8,
    "base_currency_title": "Real",
    "created_at": "2023-06-07T14:15:35.131Z"
  },
  "error": null
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/otc/conversions/\{id\}
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Access is denied."
}
```
</TabItem>
<TabItem value="422" label="422">

```json  title=/otc/conversions/\{id\}
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

| Title                                         | Type   |Properties                          | Description                                                   |
| --------------------------------------------  |:------:|:----------------------------------:|---------------------------------------------------------------|
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
</RequestComponent>