import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create new PIX payment by PIX key

| POST      | /pix/payments/by-key/instant-billing |
| --------- | ------------------------------------ |

To create a new pix payment by a pix key, first you need to create a decoded PIX key ID at the endpoint: **[Create new decoded PIX key id](./create-new-pix-payment-decode-by-key)**. With the `decoded_pix_key_id` created, enter the pix payment's information to make a requisition.



## Request <a href="https://api-dev159sw.zrobank.biz:2083/api/" class="try-btn">Try it!</a>

### Header

| Title                                | Type       | Properties                       | Maximum Length  | Description |
| ------------------------------------ | :---------:|--------------------------------|:--------------: |-------------------------------------------------------------------------------------------------------------------------------------- |
| x-wallet-uuid                        | STRING     | Must be a **UUID**           | -               | Sender Wallet UUID. **If empty, your default Wallet UUID will be settled**                                                            |
| x-transaction-uuid:small_orange_diamond: | STRING     | Must be a **UUID**           | -               | The transaction ID is a UUID (v4) used to uniquely identify the object that will be created. All requisitions must have an identifier |
| nonce:small_orange_diamond:          | STRING     | Must be a **UUID**           | -               | The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier                       |
:small_orange_diamond: *Required parameters on header*

### Body

| Title                                   | Type       | Properties                               | Maximum Length  | Description                                                                 |
| ----------------------------------------| :---------:|------------------------------------------|:--------------: |-----------------------------------------------------------------------------|
| decoded_pix_key_id:small_orange_diamond:| STRING     | Must be a **UUID**                   | -               | Decoded pix account ID                                                      |
| value:small_orange_diamond:             | NUMBER     | -                                        | INT8            | Value in **R$ cents**                                                       |
| payment_date                            | STRING     | Date Format must be <br/> **YYYY-MM-DD** | -               | Schedule a day to execute payment. **Use `null` to send payment right now.**|
| description                             | STRING     | -                                        | 255             | User defined payment description                                            |
:small_orange_diamond: *Required parameters on body*


<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

axios({
  method: 'post',
  url: 'https://api-dev159sw.zrobank.biz:2083/pix/payments/by-key/instant-billing',
  headers: {
    accept: 'application/json',
    x-transaction-uuid: 'a014d840-ed9d-4196-b1f2-e3ba28f2d8ae',
    nonce: '17cce13f-c6bc-4e6c-b30c-a323380449eb',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ',
    'Content-Type: application/json'
  },
  data: {
    decode_pix_key_id: "7041a0d4-e733-49fb-8193-7fda6caeec2d",
    value: 1299,
    description: "Payment test"
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

url = "https://api-dev159sw.zrobank.biz:2083/pix/payments/by-key/instant-billing"
params = {
    "decode_pix_key_id": "7041a0d4-e733-49fb-8193-7fda6caeec2d",
    "value": 1299,
    "description": "Payment test"
}

headers = {
    "accept": "application/json",
    "x-transaction-uuid": "a014d840-ed9d-4196-b1f2-e3ba28f2d8ae",
    "nonce": "17cce13f-c6bc-4e6c-b30c-a323380449eb",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ",
    "Content-Type": "application/json"
}

response = requests.post(url=url, headers=headers, json=params)

print(response)
```
</TabItem>
<TabItem value="shell" label="Shell">

```shell title=CURL
curl -X 'POST' 'https://api-dev159sw.zrobank.biz:2083/pix/payments/by-key/instant-billing' \
  -H 'accept: application/json' \
  -H 'x-transaction-uuid: a014d840-ed9d-4196-b1f2-e3ba28f2d8ae',
  -H 'nonce: 17cce13f-c6bc-4e6c-b30c-a323380449eb' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ' \
  -H 'Content-Type: application/json' \
  -d '{
    "decode_pix_key_id": "7041a0d4-e733-49fb-8193-7fda6caeec2d",
    "value": 1299,
    "description": "Payment test"
}'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://api-dev159sw.zrobank.biz:2083/pix/payments/by-key/instant-billing';
$params = array(
    "decode_pix_key_id" => "7041a0d4-e733-49fb-8193-7fda6caeec2d",
    "value" => 1299,
    "description" => "Payment test"
)

$headers = array(
  'accept: application/json',
  'nonce: 17cce13f-c6bc-4e6c-b30c-a323380449eb',
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
<TabItem value="200" label="201">

```json  title=/pix/payments/by-key/instant-billing
  {
  "success": true,
  "data": {
    "id": "ad544389-6ff4-4e08-b67a-c79cfc727e42",
    "operation_id": "b10ec974-0a39-46b4-8070-5e547eb6c62f",
    "state": "PENDING",
    "value": 1299,
    "payment_date": null,
    "description": "Test",
    "created_at": "2023-06-01T18:21:50.439Z"
  },
  "error": null
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/pix/payments/by-key/instant-billing
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Access is denied."
}
```
</TabItem>
<TabItem value="422" label="422">

```json  title=/pix/payments/by-key/instant-billing
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "The decoded_pix_key_id value must be an UUID.",
  "code": "VALIDATION"
}
```
</TabItem>
</Tabs>

### Data description
<!-- TODO - Ask about priority of response parameters -->

| Title                           | Type       |Properties                                                                                      | Description |
| ------------------------------- |:----------:|----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------|
| id:small_orange_diamond:        | STRING     | **UUID**                                                                                       | Payment UUID                                                                                                                  |
| operation_id                    | STRING     | **UUID**                                                                                       | Operation UUID. Used to get receipt and track the transaction. **This will not be returned if the payment has been scheduled**|
| state:small_orange_diamond:     | ENUM       | Available Pix payment states: *PENDING, WAITING, CONFIRMED, ERROR, FAILED, CANCELED, SCHEDULED*| Payment state                                                                                                                 |
| value:small_orange_diamond:     | NUMBER     | -                                                                                              | Value in **R$ cents**                                                                                                         |
| payment_date                    | STRING     | -                                                                                              | Payment date                                                                                                                  |
| description                     | STRING     | -                                                                                              | User defined payment description                                                                                              |
| created_at:small_orange_diamond:| STRING     | Timestamp with timezone                                                                        | Payment created date                                                                                                          |
:small_orange_diamond: *Required fields in the response*
