import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RequestComponent from '@site/src/components/RequestComponent'
import headerParams from '@site/docs/gateway/endpoints/withdrawals/params/CreateWithdraw/headerParams.ts'
import bodyParams from '@site/docs/gateway/endpoints/withdrawals/params/CreateWithdraw/bodyParams.ts'

# Create new withdraw


| POST      | /api/withdraw |
| --------- | ------------------------------------ |

Creates a new withdraw request using PIX as the payment method.


## Request

<RequestComponent headerParams={headerParams} bodyParams={bodyParams} endpoint="/api/trasaction/" endpointComplement="/status" method="get">

### Header
| Title                                | Type       | Description    |
| ------------------------------------ | :---------:|--------------- |
| x-api-key:small_orange_diamond:      | STRING     | Your x-api-key |
:small_orange_diamond: *Required parameters on header*


### Body


| Title                                  | Type        |Properties                                             |Maximum Length         | Description                                          |
| -------------------------------------- |:-----------:|:-----------------------------------------------------:|:-----------------:| -------------------------------------------------------- |
| value :small_orange_diamond:           | NUMBER      | -                                                     |  INT4             | Value to be paid                                         |
| type_key_pix :small_orange_diamond:    | STRING      | Available values: <br/> *cpf, cnpj, email, email, evp* | -                 | PIX key type                                             |
| key :small_orange_diamond:             | STRING      | -                                                     |  255              | PIX key                                                  |
| description :small_orange_diamond:     | STRING      | -                                                     |  255              | Description of the payment                               |
| client_name :small_orange_diamond:     | STRING      | -                                                     |  255              | Client's name                                            |
| client_email                           | STRING      | -                                                     |  255              | Client's email                                           |
| client_document :small_orange_diamond: | STRING      | -                                                     |  255              | Client's document (CPF or CNPJ)                          |
| merchant_id :small_orange_diamond:     | STRING      | Must be a **UUID**                                    |  -                | Merchant's ID for conciliation                           |
:small_orange_diamond: *Required parameters on body*

<Tabs>
<TabItem value="js_axios" label="NodeJS">

```js title=Axios
const axios = require('axios');

const url = 'https://sandbox-api-payments.zrobank.xyz/api/withdraw',

const headers: {
  'x-api-key': '{your API key}',
  'Content-Type': 'application/json'
};

const data = {
  value: 10,
  type_key_pix: "email",
  key: "ramonzin@gmail.com",
  description: "Payment to client",
  client_name: "John",
  client_email: "client@email.com",
  client_document: "81688771280",
  merchant_id: "123456"
};

async function makeRequest() {
  try {
    const response = await axios.post(url, data, { headers });
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

url = "https://sandbox-api-payments.zrobank.xyz/api/withdraw"
api_key = "{your API key}"
params = {
    "value": 10,
    "type_key_pix": "email",
    "key": "ramonzin@gmail.com",
    "description": "Payment to client",
    "client_name": "John",
    "client_email": "client@email.com",
    "client_document": "81688771280",
    "merchant_id": "123456"
}

headers = {
    "x-api-key": api_key,
    "Content-Type": "application/json"
}

response = requests.post(url=url, headers=headers, json=params)

print(response)

```
</TabItem>
<TabItem value="shell" label="Shell">

```shell title=CURL
curl -X POST https://sandbox-api-payments.zrobank.xyz/api/withdraw \
     -H 'Content-Type: application/json' \
     -H 'x-api-key: {Your api key}' \
     -d $'{
        "value": 10,
        "type_key_pix": "email",
        "key": "ramonzin@gmail.com",
        "description": "Payment to client",
        "client_name": "John",
        "client_email": "client@email.com",
        "client_document": "81688771280",
        "merchant_id": "123456"
        }'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://sandbox-api-payments.zrobank.xyz/api/withdraw';
$api_key = '{your API key}';
$params = array(
    "value" => 10,
    "type_key_pix" => "email",
    "key" => "ramonzin@gmail.com",
    "description" => "Payment to client",
    "client_name" => "John",
    "client_email" => "client@email.com",
    "client_document" => "81688771280"
    "merchant_id => "123456"
);

$headers = array(
    'x-api-key: ' . $api_key,
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
<TabItem value="201" label="201">

```json  title=/api/withdraw
{
  "status": "pending",
  "message": "Transação de saída realizada",
  "transaction_uuid": "7da0c9af-215e-4625-b484-b8cfc87aaa09"
}
```
</TabItem>

<TabItem value="401" label="401">

```json  title=/api/withdraw
{
  "message": "Invalid x-api-key",
}
```
</TabItem>
</Tabs>

### Data description

| Title           | Type        |Properties                                              | Description                                              |
| ----------------|:-----------:|:------------------------------------------------------:| -------------------------------------------------------- |
| status          | STRING      |-                                                       | Transaction status                                       |
| message         | STRING      |-                                                       | Message about the request                                |
| value           | NUMBER      |-                                                       | Value to be paid                                         |
| type_key_pix    | STRING      | Available values: <br/> *cpf, cnpj, email, email, evp*  | PIX key type                                             |
| key             | STRING      |-                                                       | PIX key                                                  |
| description     | STRING      |-                                                       | Description of the payment                               |
| client_name     | STRING      |-                                                       | Client's name                                            |
| client_email    | STRING      |-                                                       | Client's email                                           |
| client_document | STRING      |-                                                       | Client's document (CPF or CNPJ)                          |
| merchant_id     | STRING      | **UUID**                                               | Merchant's ID for conciliation                           |
</RequestComponent>