import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Search transaction by UUID

| GET      | /api/trasaction/{transactionUuid}/status |
| --------- | ----------- |

Returns the found transaction data.

## Data description

| Title            | Type        | Description |
| ---------------- | ----------- | ----------- |
| id                   | string      | ID of the transaction |
| transaction_uuid     | string      | Reference of the QrCode for conciliation |
| status               | string      | Transaction status |
| transaction_type     | string      | Transaction type |
| value                | string      | Value of the transaction |
| client_document      | string      | Document of the person who paid or received (CPF or CNPJ) |
| created_at           | string      | Date when the transaction was created |
| process_status       | string      | Transaction payment status |
| merchant_id          | string      |  Merchant's ID for conciliation |


## Request

<Tabs>
<TabItem value="js" label="Javascript">
<Tabs>
<TabItem value="js_axios" label="Axios">

```js
const axios = require('axios');

const transactionUuid = "d3052397-b29a-4d13-9c68-1bb0e95a0ca8" ;

axios({
  method: 'get',
  url: `https://zrotest.com/api/trasaction/${transactionUuid}/status`,
  headers: {
    'x-api-key': '{your API key}',
    'Content-Type': 'application/json'
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

<TabItem value="js_fetch" label="Fetch">

```js
const apiKey = '{your API key}';
const transactionUuid = 'd3052397-b29a-4d13-9c68-1bb0e95a0ca8';

fetch(`https://zrotest.com/api/trasaction/generate_qr_code_pix
`, {
  method: 'GET',
  headers: {
    'x-api-key': apiKey
  }
})
.then(response => {
  return response.json();
})
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error(error);
});
```
</TabItem>
</Tabs>
</TabItem>
<TabItem value="py" label="Python">
<Tabs>
<TabItem value="py_request" label="Requests">

```python
import requests

transactionUuid = 'd3052397-b29a-4d13-9c68-1bb0e95a0ca8'
url = f'https://zrotest.com/api/trasaction/{transactionUuid}/status'

headers = {
    'x-api-key':'your API key'
}

response = requests.get(url, headers=headers)

data = response.json()

print(data)
```
</TabItem>
</Tabs>
</TabItem>
<TabItem value="shell" label="Shell">

<Tabs>
<TabItem value="curl" label="CURL">

```shell
curl -X GET https://zrotest.com/api/trasaction/{transactionUuid}/status\
     -H 'Content-Type: application/json' \
     -H 'x-api-key: {Your api key}'
```
</TabItem>
</Tabs>
</TabItem>
<TabItem value="php" label="PHP">
<Tabs>
<TabItem value="php_curl" label="CURL">

```shell
$api_key = 'ypur API key';
$transactionUuid = 'd3052397-b29a-4d13-9c68-1bb0e95a0ca8';
$url = 'https://zrotest.com/api/trasaction/' . $transactionUuid . '/status';

$headers = array(
    'x-api-key: ' . $api_key,
);

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);

$response = curl_exec($curl);

$data = json_decode($response, true);

print_r($data);

curl_close($curl);
```
</TabItem>
</Tabs>

</TabItem>
</Tabs>

## Response
```json  title=/api/trasaction/{transactionUuid}/status
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
```