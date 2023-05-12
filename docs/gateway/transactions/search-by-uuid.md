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
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

const transactionUuid = "7da0c9af-215e-4625-b484-b8cfc87aaa09" ;

axios({
  method: 'get',
  url: `https://sandbox-api-payments.zrobank.xyz/api/trasaction/${transactionUuid}/status`,
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
<TabItem value="py" label="Python">

```python title=Requests
import requests

transactionUuid = '7da0c9af-215e-4625-b484-b8cfc87aaa09'
url = f'https://sandbox-api-payments.zrobank.xyz/api/trasaction/{transactionUuid}/status'

headers = {
    'x-api-key':'your API key'
}

response = requests.get(url, headers=headers)

data = response.json()

print(data)
```
</TabItem>
<TabItem value="shell" label="Shell">

```shell title=CURL
curl -X GET https://sandbox-api-payments.zrobank.xyz/api/trasaction/{transactionUuid}/status\
     -H 'Content-Type: application/json' \
     -H 'x-api-key: {Your api key}'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
$api_key = 'ypur API key';
$transactionUuid = '7da0c9af-215e-4625-b484-b8cfc87aaa09';
$url = 'https://sandbox-api-payments.zrobank.xyz/api/trasaction/' . $transactionUuid . '/status';

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

## Response

<Tabs>
<TabItem value="201" label="201">

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
</TabItem>
<TabItem value="401" label="401">

```json  title=/api/trasaction/{transactionUuid}/status
{
  "message": "Invalid x-api-key",
}
```
</TabItem>
</Tabs>