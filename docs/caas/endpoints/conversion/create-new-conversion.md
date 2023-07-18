import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create a new currency conversion

| POST      | /v2/otc/conversions |
| --------- | ------------------- |

To create a new currency conversion, first, you need to **[create a Quotation ID](../quotation/v2-quotations-spot.md)**. After the `quotation_id` is created, enter its information in the requisition body and execute it.

## Request <a href="https://sandbox.zro.com/api/api/" class="try-btn">Try it!</a>

### Header

| Title                                    | Type       | Properties         | Maximum Length  | Description                                                                                                                           |
| ---------------------------------------- | :---------:|--------------------|:--------------: |-------------------------------------------------------------------------------------------------------------------------------------- |
| x-transaction-uuid:small_orange_diamond: | STRING     | Must be a **UUID** | -               | The transaction ID is a UUID (v4) used to uniquely identify the object that will be created. All requisitions must have an identifier |
| nonce:small_orange_diamond:              | STRING     | Must be a **UUID** | -               | The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier                       |
:small_orange_diamond: *Required parameters on header*

### Body

| Title                                | Type       | Properties                               | Maximum Length  | Description                        |
| -------------------------------------| :---------:|:----------------------------------------:|:--------------: |------------------------------------|
| quotation_id:small_orange_diamond:   | STRING     | Must be a **UUID**                       | -               | Quotation ID to convert            |
:small_orange_diamond: *Required parameters on body*


<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

const url = 'https://sandbox.zro.com/api/v2/otc/conversions';

const headers = {
  accept: 'application/json',
  x-transaction-uuid: '126f7d3b-9462-4c6d-afdd-65f4b83d9efc',
  nonce: 'e5c8e59d-6f37-4c55-8b9a-1366f378abfd',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ',
  'Content-Type: application/json',
};

const data = {
  quotation_id: "0ce45063-9c0c-413f-b5b3-b3aa48692ef3"
};

async function makeRequest(){
  try{
    const response = await axios.post(url, data, {headers});
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

url = "https://sandbox.zro.com/api/v2/otc/conversions"
params = {
    "quotation_id": "0ce45063-9c0c-413f-b5b3-b3aa48692ef3"
}

headers = {
    "accept": "application/json",
    "x-transaction-uuid": "126f7d3b-9462-4c6d-afdd-65f4b83d9efc",
    "nonce": "e5c8e59d-6f37-4c55-8b9a-1366f378abfd",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ",
    "Content-Type": "application/json"
}

response = requests.post(url=url, headers=headers, json=params)

print(response)
```
</TabItem>
<TabItem value="shell" label="Shell">

```shell title=CURL
curl -X 'POST' \
  'https://sandbox.zro.com/api/v2/otc/conversions' \
  -H 'accept: application/json' \
  -H 'x-transaction-uuid: 126f7d3b-9462-4c6d-afdd-65f4b83d9efc' \
  -H 'nonce: e5c8e59d-6f37-4c55-8b9a-1366f378abfd' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey' \
  -H 'Content-Type: application/json' \
  -d '{
  "quotation_id": "0ce45063-9c0c-413f-b5b3-b3aa48692ef3"
}'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://sandbox.zro.com/api/v2/otc/conversions';
$params = array(
   "quotation_id" => "0ce45063-9c0c-413f-b5b3-b3aa48692ef3"
)

$headers = array(
  'accept: application/json',
  'nonce: e5c8e59d-6f37-4c55-8b9a-1366f378abfd',
  'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ',
  'Content-Type: application/json'
);

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($params));
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

```json  title=/v2/otc/conversions
 {
  "success": true,
  "data": {
     "id": "c63267ad-3f5c-487b-9f52-b73c9dd7a10d",
    "operation_id": "295564a9-c5fd-4e73-9abb-72e0383f2dfb",
    "created_at": "2023-06-07T14:15:35.133Z"
  },
  "error": null
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/v2/otc/conversions
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Access is denied."
}
```
</TabItem>
<TabItem value="422" label="422">

```json  title=/v2/otc/conversions
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

| Title                             | Type       |Properties                                 | Description                                 |
| --------------------------------  |:----------:|:-----------------------------------------:| ------------------------------------------- |
| id:small_orange_diamond:          | STRING     | **UUID**                                  | Conversion ID                               |
| operation_id:small_orange_diamond:| STRING     | **UUID**                                  | Operation ID. Used to track the conversion  |
| created_at:small_orange_diamond:  | STRING     | Timestamp with timezone                   | Conversion created date                     |

:small_orange_diamond: *Required fields in the response*
