import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Update a transaction status

| PUT       | /api/trasactions                         |
| --------- | ---------------------------------------- |

:::caution
Only available for **development environment**
:::

Update the status of a transaction to trigger the receipt of webhooks for testing purposes.

## Request <a href="https://sandbox-api-payments.zrobank.xyz/api/documentation" class="try-btn">Try it!</a>

### Header
| Title                                | Type       | Description    |
| ------------------------------------ | :---------:|--------------- |
| x-api-key:small_orange_diamond:      | STRING     | Your x-api-key |
:small_orange_diamond: *Required parameters on header*


### Body
| Title                                  | Type  | Property                                                                               |Description                                                 |
| ---------------------------------------|:-----:| :------------------------------------------------------------------------------------: | ---------------------------------------------------------- |
| transaction_uuid:small_orange_diamond: | STRING| Must be a **UUID**                                                                     | Reference of the QrCode for conciliation                   |
| status:small_orange_diamond:           | STRING|Available status:<br/> *pending, paid, canceled, paid_by_third_party, failed, awaiting* | Transaction status                                         |

<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

axios({
  method: 'put',
  url: `https://sandbox-api-payments.zrobank.xyz/api/trasactions`,
  headers: {
    'x-api-key': '{your API key}',
    'Content-Type': 'application/json'
  },
  data: {
    transaction_uuid : '7da0c9af-215e-4625-b484-b8cfc87aaa09',
    status : 'pending'
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
url = "https://sandbox-api-payments.zrobank.xyz/api/trasactions"
api_key = "{your API key}"
params = {
    "transaction_uuid": "7da0c9af-215e-4625-b484-b8cfc87aaa09",
    "status" : "pending"
}

headers = {
    "x-api-key": api_key,
    "Content-Type": "application/json"
}

response = requests.put(url=url, headers=headers, json=params)

print(response)
```
</TabItem>
<TabItem value="shell" label="Shell">

```shell title=CURL
curl -X PUT https://sandbox-api-payments.zrobank.xyz/api/trasactions \
     -H 'Content-Type: application/json' \
     -H 'x-api-key: {Your api key}' \
     -d $'{
            "transaction_uuid": "7da0c9af-215e-4625-b484-b8cfc87aaa09",
            "status": "pending"
        }'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://sandbox-api-payments.zrobank.xyz/api/trasactions';
$api_key = '{your API key}';
$params = array(
    "transaction_uuid" => "7da0c9af-215e-4625-b484-b8cfc87aaa09",
    "status" => "pending",
);

$headers = array(
    'x-api-key: ' . $api_key,
    'Content-Type: application/json'
);

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_PUT, true);
curl_setopt($curl, CURLOPT_PUTFIELDS, json_encode($params));
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

```json  title=/api/trasactions
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

```json  title=/api/trasactions
{
  "message": "Invalid x-api-key",
}
```
</TabItem>
</Tabs>

## Data description

| Title             | Type  | Property                                                                                |Description                                                 |
| ------------------|-------|:--------------------------------------------------------------------------------------: | ---------------------------------------------------------- |
| id                | STRING| **UUID**                                                                                | ID of the transaction                                      |
| transaction_uuid  | STRING| **UUID**                                                                                | Reference of the QrCode for conciliation                   |
| status            | STRING| Available status:<br/> *pending, paid, canceled, paid_by_third_party, failed, awaiting* | Transaction status                                         |
| transaction_type  | STRING| Available types: <br/> *transaction, withdraw, refund*                                  | Transaction type                                           |
| value             | STRING| -                                                                                       |  Value of the transaction                                  |
| client_document   | STRING| -                                                                                       |  Document of the person who paid or received (CPF or CNPJ) |
| created_at        | STRING| Timestamp with timezone                                                                 |  Date when the transaction was created                     |
| process_status    | STRING| Available status: <br/> *waiting, completed, failed*                                    |  Transaction payment status                                |
| merchant_id       | STRING| **UUID**                                                                                |  Merchant's ID for conciliation                            |
