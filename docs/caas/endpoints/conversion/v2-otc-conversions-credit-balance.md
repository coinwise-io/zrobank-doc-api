import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get user's liability and credit balance

| GET    | /v2/otc/conversions/credit-balance |
| --------- | ----------- |

Get user's liability (the sum in BRL of all negative balances of all active currencies) and credit balance.

### Parameters

| Parameter | Type |  Description |
| --- | --- |  --- |
| nonce:small_orange_diamond:   | string |  The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier. |
:small_orange_diamond: *Required parameters to request*

### Request

<Tabs>
<TabItem value="js" label="NodeJS">


```js title=Axios
const axios = require('axios');

const url = 'https://api-dev159sw.zrobank.biz:2083/v2/otc/conversions/credit-balance';
const headers = {
  'accept': 'application/json',
  'nonce': 'qui1876209'
};

axios.get(url, { headers })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Erro na solicitação:', error.message);
  });
```
</TabItem>
<TabItem value="py" label="Python">


```python title=Requests
import requests

url = 'https://api-dev159sw.zrobank.biz:2083/v2/otc/conversions/credit-balance'
headers = {
    'accept': 'application/json',
    'nonce': 'qui1876209'
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    response_data = response.json()
    print(response_data)
else:
    print('Erro na solicitação. Código de status:', response.status_code)
```
</TabItem>
<TabItem value="shell" label="Shell">

```shell title=CURL
  curl -X 'GET' \
    'https://api-dev159sw.zrobank.biz:2083/v2/otc/conversions/credit-balance' \
    -H 'accept: application/json' \
    -H 'nonce: qui1876209'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://api-dev159sw.zrobank.biz:2083/v2/otc/conversions/credit-balance';

$headers = array(
    'accept: application/json',
    'nonce: qui1876209'
);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);

if ($response !== false) {
    $response_data = json_decode($response, true);
    print_r($response_data);
} else {
    echo 'Erro na solicitação. Erro: ' . curl_error($ch);
}

curl_close($ch);
```
</TabItem>
</Tabs>

### Responses

<Tabs>
<TabItem value="200" label="200">

```json  title=/v2/otc/conversions/credit-balance
{
  "liability": -1000,
  "credit_balance": 1000,
}
```
</TabItem>
<TabItem value="400" label="400">

```json  title=/v2/otc/conversions/credit-balance
{
    "message": "exemple."
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/v2/otc/conversions/credit-balance
{
    "message": "exemple."
}
```
</TabItem>
<TabItem value="422" label="422">

```json  title=/v2/otc/conversions/credit-balance
{
    "message": "exemple."
}
```
</TabItem>
</Tabs>