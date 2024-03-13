import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get PIX devolution by ID

| GET       | /v3/pix/devolutions/{id}|
| --------- | ------------------------|


Enter the pix devolution's ID below and execute to get it's state and all information.


## Request <a href="https://sandbox.zro.com/api/api/" class="try-btn">Try it!</a>

### Header

| Title                      | Type       | Properties                       | Description |
| ---------------------------| :---------:|:-------------------------------: |----------------------------------------------------------------------------------------------------------------|
| x-wallet-uuid              | STRING     | Must be a **UUID**           | Sender Wallet UUID **(if empty, your default Wallet UUID will be settled)**                                    |
| nonce:small_orange_diamond:| STRING     | Must be a **UUID**           | The nonce ID is a UUID  used to uniquely identify the requisition. All requisitions must have an identifier|
:small_orange_diamond: *Required parameters on header*

### Parameters

| Title                    | Type       | Properties             |Description                                        |
| -------------------------| :---------:|:----------------------:| ------------------------------------------------- |
| id:small_orange_diamond: | STRING     | Must be a **UUID**     | Devolution ID                                     |
:small_orange_diamond: *Required parameters on header*



<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

const url = 'https://sandbox.zro.com/api/v3/pix/devolutions/e5c8e59d-6f37-4c55-8b9a-1366f378abfd';

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

url = "https://sandbox.zro.com/api/v3/pix/devolutions/e5c8e59d-6f37-4c55-8b9a-1366f378abfd"

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
  'https://sandbox.zro.com/api/v3/pix/devolutions/e5c8e59d-6f37-4c55-8b9a-1366f378abfd' \
  -H 'accept: application/json' \
  -H 'nonce: c63267ad-3f5c-487b-9f52-b73c9dd7a10d' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://sandbox.zro.com/api/v3/pix/devolutions/e5c8e59d-6f37-4c55-8b9a-1366f378abfd';

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

```json  title=/v3/pix/devolutions/{id}
{
  "success": true,
  "data": {
    "id": "e5c8e59d-6f37-4c55-8b9a-1366f378abfd",
    "state": "CONFIRMED",
    "description": "Devolution description",
    "operation_id": "b317c1fd-dc4a-4d11-8c18-c181fe0be147",
    "amount": 1000,
    "created_at": "2023-06-04T20:07:10.013Z"
  },
  "error": null
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/v3/pix/devolutions/{id}
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Access is denied."
}
```
</TabItem>
<TabItem value="422" label="422">

```json  title=/v3/pix/devolutions/{id}
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

| Title                                        | Type       |Properties                                                                           | Description                                                                                                                   |
| -------------------------------------------  |:----------:|:-----------------------------------------------------------------------------------:|-------------------------------------------------------------------------------------------------------------------------------|
| id:small_orange_diamond:                     | STRING     |**UUID**                                                                             | Payment UUID                                                                                                                  |
| amount:small_orange_diamond:                 | NUMBER     |-                                                                                    | Value in **R$ cents**                                                                                                         |
| description                                  | STRING     |-                                                                                    | User defined devolution description                                                                                           |
| failed_message                               | STRING     | Is nullable                                                                         | Error returned when devolution is reverted                                                                                    |
| state:small_orange_diamond:                  | STRING     |Available values : *PENDING, WAITING, CONFIRMED, ERROR, FAILED, CANCELED*            | Devolution state                                                                                                              |
| operation_id                                 | STRING     |**UUID**                                                                             | Operation UUID. Used to get receipt and track the transaction. **This will not be returned if the payment has been scheduled**|
| created_at:small_orange_diamond:             | STRING     |-                                                                                    | Devolution created date                                                                                                       |
:small_orange_diamond: *Required fields in the response*
