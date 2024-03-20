import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RequestComponent from '@site/src/components/RequestComponent'
import headerParams from '@site/docs/caas/endpoints/conversion/params/GetUsersCreditBalanceAndLiability/headerParams.ts'

# Get user's liability and credit balance

| GET       | /v2/otc/conversions/credit-balance |
| --------- | ---------------------------------- |


## Request

<RequestComponent selectorBaseUrl="caas" headerParams={headerParams} endpoint="/v2/otc/conversions/credit-balance" method="get">

### Header
| Title                                    | Type       | Properties         | Maximum Length  | Description                                                                                                                           |
| ---------------------------------------- | :---------:|--------------------|:--------------: |-------------------------------------------------------------------------------------------------------------------------------------- |
| nonce:small_orange_diamond:              | STRING     | Must be a **UUID** | -               | The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier                       |
:small_orange_diamond: *Required parameters on header*

<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

const url = 'https://sandbox.zro.com/api/v2/otc/conversions/credit-balance';

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

url = "https://sandbox.zro.com/api/v2/otc/conversions/credit-balance"

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
  'https://sandbox.zro.com/api/v2/otc/conversions/credit-balance' \
  -H 'accept: application/json' \
  -H 'nonce: c63267ad-3f5c-487b-9f52-b73c9dd7a10d' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://sandbox.zro.com/api/v2/otc/conversions/credit-balance';

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

```json  title=/v2/otc/conversions/credit-balance
{
  "success": true,
  "data": {
    "liability": -1000,
    "credit_balance": 10000
  },
  "error": null
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/v2/otc/conversions/credit-balance
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

| Title                                | Type   |Properties  | Description                                                        |
| -------------------------------------|:------:|:----------:|--------------------------------------------------------------------|
| liability:small_orange_diamond:      | NUMBER |-           | Libability (Sum of all negative balances of all active currencies) |
| credit_balance:small_orange_diamond: | NUMBER |-           | Credit balance for user                                            |
:small_orange_diamond: *Required fields in the response*
</RequestComponent>