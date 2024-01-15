import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RequestComponent from '@site/src/components/RequestComponent'
import bodyParams from '@site/docs/paas/endpoints/operations/p2p-transfers/params/CreateNewP2pTransfers/bodyParams.ts'
import headerParams from '@site/docs/paas/endpoints/operations/p2p-transfers/params/CreateNewP2pTransfers/headerParams.ts'

# Create new P2P transfer

| POST      | /operations/p2p-transfers|
| --------- | -------------------------|

Transfer funds from one wallet to another within your organization **(Master Account and Sub-account wallets are permitted)**. Insert the UUID of the wallet you want to send from under the header section `x-wallet-uuid`. Enter the destination wallet and all transaction information on the request body and execute to conclude the transaction

:::info
If you leave the `x-wallet-uuid` param empty, your default wallet will be settled.
:::

<RequestComponent headerParams={headerParams} bodyParams={bodyParams} endpoint="/operations/p2p-transfers" method="post">

## Request <a href="https://sandbox.zro.com/api/api/" class="try-btn">Try it!</a>

### Header

| Title                                | Type       | Properties                       | Maximum Length  | Description |
| ------------------------------------ | :---------:|--------------------------------|:--------------: |-------------------------------------------------------------------------------------------------------------------------------------- |
| x-transaction-uuid:small_orange_diamond: | STRING     | Must be a **UUID**           | -               | The transaction ID is a UUID (v4) used to uniquely identify the object that will be created. All requisitions must have an identifier |
| x-wallet-uuid                        | STRING     | Must be a **UUID**           | -               | Sender Wallet UUID. **If empty, your default Wallet UUID will be settled**                                                            |
| nonce:small_orange_diamond:          | STRING     | Must be a **UUID**           | -               | The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier                       |
:small_orange_diamond: *Required parameters on header*


### Body

| Title                                      | Type       | Properties                               | Maximum Length  | Description                        |
| -------------------------------------------| :---------:|:----------------------------------------:|:--------------: |------------------------------------|
| destination_wallet_id:small_orange_diamond:| STRING     | Must be a **UUID**                       | -               | Destination wallet UUID            |
| amount_currency:small_orange_diamond:      | STRING     | -                                        | 255             | Transfer currency amount symbol    |
| amount:small_orange_diamond:               | NUMBER     | -                                        | INT8            | Value in **R$ cents**              |
| fee:small_orange_diamond:                  | NUMBER     | -                                        | INT8            | Transfer fee                       |
| description                                | STRING     | -                                        | 255             | Transfer description               |
:small_orange_diamond: *Required parameters on body*


<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

const url = 'https://sandbox.zro.com/api/operations/p2p-transfers';

const headers = {
  accept: 'application/json',
  x-transaction-uuid: '126f7d3b-9462-4c6d-afdd-65f4b83d9efc',
  nonce: 'e5c8e59d-6f37-4c55-8b9a-1366f378abfd',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ',
  'Content-Type: application/json'
};

const data = {
  destination_wallet_id : "7a3a4e86-7497-4a6b-9b45-14df23815f21",
  amount_currency : "BRL",
  amount : 1299,
  fee : 19,
  description  : "User defined description"
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

url = "https://sandbox.zro.com/api/operations/p2p-transfers"
params = {
  "destination_wallet_id": "7a3a4e86-7497-4a6b-9b45-14df23815f21",
  "amount_currency": "BRL",
  "amount": 1299,
  "fee": 19,
  "description": "User defined description"
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
  'https://sandbox.zro.com/api/operations/p2p-transfers' \
  -H 'accept: application/json' \
  -H 'x-transaction-uuid: 126f7d3b-9462-4c6d-afdd-65f4b83d9efc' \
  -H 'nonce: e5c8e59d-6f37-4c55-8b9a-1366f378abfd' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey' \
  -H 'Content-Type: application/json' \
  -d '{
    "destination_wallet_id" : "7a3a4e86-7497-4a6b-9b45-14df23815f21",
    "amount_currency" : "BRL",
    "amount" : 1299,
    "fee" : 19,
    "description" : "User defined description"
}'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://sandbox.zro.com/api/operations/p2p-transfers';
$params = array(
  "destination_wallet_id" => "7a3a4e86-7497-4a6b-9b45-14df23815f21",
  "amount_currency" => "BRL",
  "amount" => 1299,
  "fee" => 19,
  "description" => "User defined description"

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

```json  title=/operations/p2p-transfer
  {
  "id": "f6e2e084-29b9-4935-a059-5473b13033aa",
  "operation_id": "f6b7a9d4-05c7-4a49-942b-3a5b6fc9328d",
  "amount_currency": "BRL",
  "amount": 1299,
  "fee": 10,
  "description": "User defined description",
  "created_at": "2023-06-02T20:01:45.350Z"
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/operations/p2p-transfer
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Access is denied."
}
```
</TabItem>
<TabItem value="422" label="422">

```json  title=/operations/p2p-transfer
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "The destination_wallet_id value must be an UUID.",
  "code": "VALIDATION"
}
```
</TabItem>

</Tabs>

### Data description

| Title                                      | Type       | Properties | Description                                      |
| -------------------------------------------| :---------:|:------------------------:|------------------------------------|
| id:small_orange_diamond:                   | STRING     | **UUID**                 | Transfer ID                        |
| operation_id:small_orange_diamond:         | STRING     | **UUID**                 | Transfer Operation ID              |
| amount_currency:small_orange_diamond:      | STRING     | -                        | Transfer currency amount symbol    |
| amount:small_orange_diamond:               | NUMBER     | -                        | Value in **R$ cents**              |
| fee:small_orange_diamond:                  | NUMBER     | -                        | Transfer fee                       |
| description                                | STRING     | -                        | Transfer description               |
| created_at                                 | STRING     | Timestamp with timezone  | Transfer created date              |


:small_orange_diamond: *Required fields in the response*
</RequestComponent>