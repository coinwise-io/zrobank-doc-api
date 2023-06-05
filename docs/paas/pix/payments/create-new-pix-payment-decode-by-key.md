import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create new decoded PIX key ID

| GET       | /pix/payment/decode/by-key |
| --------- | -------------------------- |


Enter the pix key's information on the requisition body below and execute to get its ID. This ID is the `decoded_pix_key_id` which will be required to **[create a pix payment by a pix key](./create-new-pix-payment-by-pix-key)**


## Request <a href="https://api-dev159sw.zrobank.biz:2083/api/" class="try-btn">Try it!</a>

### Header

| Title                                | Type       | Properties                       | Maximum Length  | Description |
| ------------------------------------ | :---------:|:-------------------------------:  |:--------------: |-------------------------------------------------------------------------------------------------------------------------------------- |
| x-transaction-uuid:small_orange_diamond:| STRING     | Must be a **UUID**           | -               | The transaction ID is a UUID (v4) used to uniquely identify the object that will be created. All requisitions must have an identifier |
| nonce:small_orange_diamond:          | STRING     | Must be a **UUID**           | -               | The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier                       |
:small_orange_diamond: *Required parameters on header request*

### Query Parameters

| Title                           | Type       | Properties                                                         | Maximum Length | Description                                                                    |
| --------------------------------| :---------:|:------------------------------------------------------------------:|:--------------:|------------------------------------------------------------------------------- |
| key:small_orange_diamond:       | STRING     | -                                                                  | 255            | PIX key                                                                        |
| type:small_orange_diamond:      | STRING     | Available values: *CNPJ, CPF, PHONE, EMAIL, EVP*                   | -              | PIX Key state                                                                  |
| endToEndId                      | STRING     | -                                                                  | 255            | If one is not provided, it'll be generated by DICT and returned in the response|

:small_orange_diamond: *Required parameters on request query*


<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

axios({
  method: 'get',
  url: 'https://api-dev159sw.zrobank.biz:2083/pix/payment/decode/by-key?key=ramonzin%40gmail.com&type=EMAIL',
  headers: {
    accept: 'application/json',
    x-transaction-uuid: "ad544389-6ff4-4e08-b67a-c79cfc727e42",
    nonce: "5ac11357-5fd2-4fa2-9708-e92d4b7985dc",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9",
    'Content-Type: application/json'
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

url = "https://api-dev159sw.zrobank.biz:2083/pix/payment/decode/by-key?key=ramonzin%40gmail.com&type=EMAIL"

headers = {
    "accept": "application/json",
    "x-transaction-uuid": "ad544389-6ff4-4e08-b67a-c79cfc727e42",
    "nonce": "5ac11357-5fd2-4fa2-9708-e92d4b7985dc",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9",
    "Content-Type": "application/json"
}

response = requests.get(url=url, headers=headers)

print(response)
```
</TabItem>
<TabItem value="shell" label="Shell">

```shell title=CURL
curl -X 'GET' \
  'https://api-dev159sw.zrobank.biz:2083/pix/payment/decode/by-key?key=ramonzin%40gmail.com&type=EMAIL' \
  -H 'accept: application/json' \
  -H 'x-transaction-uuid: ad544389-6ff4-4e08-b67a-c79cfc727e42' \
  -H 'nonce: 5ac11357-5fd2-4fa2-9708-e92d4b7985dc' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://api-dev159sw.zrobank.biz:2083/pix/payment/decode/by-key?key=ramonzin%40gmail.com&type=EMAIL';

$headers = array(
  'accept: application/json',
  'x-transaction-uuid: ad544389-6ff4-4e08-b67a-c79cfc727e42',
  'nonce: 5ac11357-5fd2-4fa2-9708-e92d4b7985dc',
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
<TabItem value="200" label="201">

```json  title=/pix/payment/decode/by-key
{
  "success": true,
  "data": {
    "id": "7041a0d4-e733-49fb-8193-7fda6caeec2d",
    "type": "EMAIL",
    "person_type": "NATURAL_PERSON",
    "key": "ramonzin@gmail.com",
    "document": "***887712**",
    "name": "Ramon Test",
    "ispb": "26264220"
  },
  "error": null
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/pix/payment/decode/by-key
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Access is denied."
}
```
</TabItem>
<TabItem value="422" label="422">

```json  title=/pix/payment/decode/by-key
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "The entered phone has an invalid format.",
  "code": "INVALID_PHONE_NUMBER_FORMAT"
}
```
</TabItem>
</Tabs>

### Data description

| Title                               | Type       |Properties                                        | Description                          |
| ----------------------------------  |:----------:|:------------------------------------------------:|--------------------------------------|
| id:small_orange_diamond:            | STRING     | **UUID**                                         | Unique decoded pix key UUID          |
| type:small_orange_diamond:          | STRING     |Available values: *CNPJ, CPF, PHONE, EMAIL, EVP*  | PIX Key state                        |
| person_type:small_orange_diamond:   | STRING     |Available values: *NATURAL_PERSON, LEGAL_PERSON*  | Person type                          |
| key:small_orange_diamond:           | STRING     |-                                                 | PIX key                              |
| document:small_orange_diamond:      | STRING     |-                                                 | Person's document number             |
| name:small_orange_diamond:          | STRING     |-                                                 | Person's name                        |
| trade_name                          | STRING     |-                                                 | Company's trade name                 |
| end_to_end_id                       | STRING     |-                                                 | end to end ID                        |
| ispb                                | STRING     |-                                                 | Bank ISPB                            |
:small_orange_diamond: *Required fields in the response*