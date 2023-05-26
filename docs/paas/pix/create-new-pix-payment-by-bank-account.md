import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create new pix payment by bank account

| POST      | /pix/payments/by-account/instant-billing |
| --------- | ---------------------------------------- |

To create a new pix payment by a bank account, first you need to create a Decoded Pix Account ID at the endpoint: **[Create new decoded pix account Id](../pix/create-new-pix-payment-decode-by-account)**. Make your request with the created `decoded_pix_account_id`

## Request <a href="https://api-dev159sw.zrobank.biz:2083/api/" class="try-btn">Try it!</a>

### Header

| Title                                | Type       | Properties                       | Maximum Length  | Description |
| ------------------------------------ | :---------:|--------------------------------|:--------------: |-------------------------------------------------------------------------------------------------------------------------------------- |
| x-wallet-uuid                        | STRING     | Must be a **UUID(v4)**           | -               | Sender Wallet UUID. **If empty, your default Wallet UUID will be settled**                                                            |
| x-transaction-uuid                   | STRING     | Must be a **UUID(v4)**           | -               | The transaction ID is a UUID (v4) used to uniquely identify the object that will be created. All requisitions must have an identifier |
| nonce:small_orange_diamond:          | STRING     | Must be a **UUID(v4)**           | -               | The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier                       |
:small_orange_diamond: *Required parameters on header request*

### Body

| Title                                           | Type       | Properties                               | Maximum Length  | Description                                                                 |
| ------------------------------------------------| :---------:|----------------------------------------|:--------------: |---------------------------------------------------------------------------- |
| decoded_pix_account_id:small_orange_diamond:    | STRING     | Must be a **UUID(v4)**                   | -               | Decoded pix account ID                                                      |
| value:small_orange_diamond:                     | NUMBER     | -                                        | INT8            | Value in **R$ cents**                                                       |
| payment_date                                    | STRING     | Date Format must be <br/> **YYYY-MM-DD** | -               | Schedule a day to execute payment. **Use `null` to send payment right now.**|
| description                                     | STRING     | -                                        | 255             | User defined payment description                                            |
:small_orange_diamond: *Required parameters on body request*


<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

axios({
  method: 'post',
  url: 'https://api-dev159sw.zrobank.biz:2083/pix/payments/by-account/instant-billing',
  headers: {
    accept: 'application/json',
    x-transaction-uuid: 'aebc8924-3a4f-4f36-ae12-918d32e4088a',
    nonce: '23a88363-449b-4e5c-92c7-5e624c8dc22f',
    Authorization: `Bearer ${Your acess token}`,
    'Content-Type: application/json'
  },
  data: {
    decoded_pix_account_id: 'abb8e578-6540-4104-8fa9-90a854ab0d1c',
    value: 1299,
    payment_date: '2023-05-23',
    description: 'Test pix payment'
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

url = "https://api-dev159sw.zrobank.biz:2083/pix/payments/by-account/instant-billing"
params = {
    "decoded_pix_account_id": "abb8e578-6540-4104-8fa9-90a854ab0d1c",
    "value": 1299,
    "payment_date": "2023-05-23",
    "description": "Test pix payment"
}

headers = {
    "accept": "application/json",
    "x-transaction-uuid": "aebc8924-3a4f-4f36-ae12-918d32e4088a",
    "nonce": "23a88363-449b-4e5c-92c7-5e624c8dc22f",
    "Authorization": "Bearer {Access token}",
    "Content-Type": "application/json"
}

response = requests.post(url=url, headers=headers, json=params)

print(response)
```
</TabItem>
<TabItem value="shell" label="Shell">

```shell title=CURL
curl -X 'POST' 'https://api-dev159sw.zrobank.biz:2083/pix/payments/by-account/instant-billing' \
  -H 'accept: application/json' \
  -H 'nonce: 23a88363-449b-4e5c-92c7-5e624c8dc22f' \
  -H 'Authorization: Bearer { Access token}' \
  -H 'Content-Type: application/json' \
  -d '{
  "decoded_pix_account_id": "abb8e578-6540-4104-8fa9-90a854ab0d1c",
  "value": 1299,
  "payment_date": "2023-05-23",
  "description": "string"
}'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://api-dev159sw.zrobank.biz:2083/pix/payments/by-account/instant-billing';
$params = array(
    "decoded_pix_account_id" => "abb8e578-6540-4104-8fa9-90a854ab0d1c",
    "value" => 1299,
    "payment_date" => "2023-05-23",
    "description" => "Test pix payment"
)

$headers = array(
  'accept: application/json',
  'nonce: 23a88363-449b-4e5c-92c7-5e624c8dc22f',
  'Authorization: Bearer <Access token>',
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

### Data description
<!-- TODO - Ask about priority of response parameters -->

| Title        | Type       |Properties                                                                                      | Description |
| ------------ |:----------:|----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------|
| id           | STRING     | **UUID**                                                                                       | Payment UUID                                                                                                                  |
| operation_id | STRING     | **UUID**                                                                                       | Operation UUID. Used to get receipt and track the transaction. **This will not be returned if the payment has been scheduled**|
| state        | ENUM       | Available Pix payment states: *PENDING, WAITING, CONFIRMED, ERROR, FAILED, CANCELED, SCHEDULED*| Payment state                                                                                                                 |
| value        | NUMBER     | -                                                                                              | Value in **R$ cents**                                                                                                         |
| payment_date | STRING     | Is nullable                                                                                    | Payment date                                                                                                                  |
| description  | STRING     | -                                                                                              | User defined payment description                                                                                              |
| created_at   | STRING     | Timestamp with timezone                                                                        | Payment created date                                                                                                          |

<Tabs>
<TabItem value="200" label="201">

```json  title=/pix/payments/by-account/instant-billing
  {
  "id": "f6e2e084-29b9-4935-a059-5473b13033aa",
  "operation_id": "f6e2e084-29b9-4935-a059-5473b13033aa",
  "state": "PENDING",
  "value": 1299,
  "payment_date": null,
  "description": "string",
  "created_at": "2023-05-23T19:35:46.508Z"
}
```
</TabItem>
<TabItem value="400" label="400">

```json  title=/pix/payments/by-account/instant-billing
{
  "success": false,
  "data": null,
  "error": "DECODED_PIX_ACCOUNT_NOT_FOUND",
  "message": "Account data not found. Please try again."
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
</Tabs>