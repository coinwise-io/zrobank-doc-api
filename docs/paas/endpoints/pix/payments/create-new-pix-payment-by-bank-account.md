import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RequestComponent from '@site/src/components/RequestComponent'
import bodyParams from '@site/docs/paas/endpoints/pix/payments/params/CreateNewPixPaymentByBankAccount/bodyParams.ts'
import headerParams from '@site/docs/paas/endpoints/pix/payments/params/CreateNewPixPaymentByBankAccount/headerParams.ts'

# Create new PIX payment by bank account

| POST      | /pix/payments/by-account/instant-billing |
| --------- | ---------------------------------------- |

To create a new pix payment by a bank account, first you need to create a Decoded Pix Account ID at the endpoint: **[Create new decoded pix account Id](./create-new-pix-payment-decode-by-account)**. Make your request with the created `decoded_pix_account_id`


## Request 

<RequestComponent headerParams={headerParams} bodyParams={bodyParams} selectorBaseUrl="paas" endpoint="/pix/payments/by-account/instant-billing" method="post">

### Header

| Title                                | Type       | Properties                       | Maximum Length  | Description |
| ------------------------------------ | :---------:|--------------------------------|:--------------: |-------------------------------------------------------------------------------------------------------------------------------------- |
| x-wallet-uuid                        | STRING     | Must be a **UUID**           | -               | Sender Wallet UUID. **If empty, your default Wallet UUID will be settled**                                                            |
| x-transaction-uuid:small_orange_diamond: | STRING     | Must be a **UUID**           | -               | The transaction ID is a UUID  used to uniquely identify the object that will be created. All requisitions must have an identifier |
| nonce:small_orange_diamond:          | STRING     | Must be a **UUID**           | -               | The nonce ID is a UUID  used to uniquely identify the requisition. All requisitions must have an identifier                       |
:small_orange_diamond: *Required parameters on header*

### Body

| Title                                           | Type       | Properties                               | Maximum Length  | Description                                                                 |
| ------------------------------------------------| :---------:|----------------------------------------|:--------------: |---------------------------------------------------------------------------- |
| decoded_pix_account_id:small_orange_diamond:    | STRING     | Must be a **UUID**                   | -               | Decoded pix account ID                                                      |
| value:small_orange_diamond:                     | NUMBER     | -                                        | INT8            | Value in **R$ cents**                                                       |
| payment_date                                    | STRING     | Date Format must be <br/> **YYYY-MM-DD** | -               | Schedule a day to execute payment. **Use `null` to send payment right now.**|
| description                                     | STRING     | -                                        | 255             | User defined payment description                                            |
:small_orange_diamond: *Required parameters on body*


<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

const url = 'https://sandbox.zro.com/api/pix/payments/by-account/instant-billing';

const headers = {
  accept: 'application/json',
  x-transaction-uuid: 'aebc8924-3a4f-4f36-ae12-918d32e4088a',
  nonce: '23a88363-449b-4e5c-92c7-5e624c8dc22f',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ',
  'Content-Type: application/json'
};

const data = {
  decoded_pix_account_id: "2572db53-8953-4aa9-a2a2-0ca72feb7c7b",
  value: 1299,
  description: "Payment test"
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

url = "https://sandbox.zro.com/api/pix/payments/by-account/instant-billing"
params = {
    "decoded_pix_account_id": "2572db53-8953-4aa9-a2a2-0ca72feb7c7b",
    "value": 1299,
    "description": "Payment test"
}

headers = {
    "accept": "application/json",
    "x-transaction-uuid": "aebc8924-3a4f-4f36-ae12-918d32e4088a",
    "nonce": "23a88363-449b-4e5c-92c7-5e624c8dc22f",
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
 'https://sandbox.zro.com/api/pix/payments/by-account/instant-billing' \
  -H 'accept: application/json' \
  -H 'x-transaction-uuid: aebc8924-3a4f-4f36-ae12-918d32e4088a',
  -H 'nonce: 23a88363-449b-4e5c-92c7-5e624c8dc22f' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ' \
  -H 'Content-Type: application/json' \
  -d '{
    "decoded_pix_account_id": "2572db53-8953-4aa9-a2a2-0ca72feb7c7b",
    "value": 1299,
    "description": "Payment test"
}'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://sandbox.zro.com/api/pix/payments/by-account/instant-billing';
$params = array(
    "decoded_pix_account_id" => "2572db53-8953-4aa9-a2a2-0ca72feb7c7b",
    "value" => 1299,
    "description" => "Test pix payment"
)

$headers = array(
  'accept: application/json',
  'nonce: 23a88363-449b-4e5c-92c7-5e624c8dc22f',
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

```json  title=/pix/payments/by-account/instant-billing
  {
  "success": true,
  "data": {
    "id": "2572db53-8953-4aa9-a2a2-0ca72feb7c7b",
    "operation_id": "4b20f7ab-7627-45e6-96ae-ac037cd9cfe0",
    "state": "PENDING",
    "value": 1299,
    "payment_date": null,
    "description": "Payment test",
    "created_at": "2023-05-30T18:24:51.462Z"
  },
  "error": null
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/pix/payments/by-account/instant-billing
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Access is denied."
}
```
</TabItem>
<TabItem value="422" label="422">

```json  title=/pix/payments/by-account/instant-billing
{
  "success": false,
  "data": null,
  "error": "DECODED_PIX_ACCOUNT_NOT_FOUND",
  "message": "Account data not found. Please try again."
}
```
</TabItem>

</Tabs>

### Data description
<!-- TODO - Ask about priority of response parameters -->

| Title                            | Type       |Properties                                                                                      | Description |
| -------------------------------- |:----------:|----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------|
| id:small_orange_diamond:         | STRING     | **UUID**                                                                                       | Payment UUID                                                                                                                  |
| operation_id                     | STRING     | **UUID**                                                                                       | Operation UUID. Used to get receipt and track the transaction. **This will not be returned if the payment has been scheduled**|
| state:small_orange_diamond:      | STRING     | Available values:<br/> *PENDING, WAITING, CONFIRMED, ERROR, FAILED, CANCELED, SCHEDULED*       | Payment state                                                                                                                 |
| value:small_orange_diamond:      | NUMBER     | -                                                                                              | Value in **R$ cents**                                                                                                         |
| payment_date                     | STRING     | Is nullable                                                                                    | Payment date                                                                                                                  |
| description                      | STRING     | -                                                                                              | User defined payment description                                                                                              |
| created_at:small_orange_diamond: | STRING     | Timestamp with timezone                                                                        | Payment created date                                                                                                          |
:small_orange_diamond: *Required parameters on body*
</RequestComponent>