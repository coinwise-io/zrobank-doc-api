import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get receipt by operation ID

| GET       | /operations/{id}/receipt|
| --------- | ------------------------|

Get receipt by it's operation ID

## Request <a href="https://api-dev159sw.zrobank.biz:2083/api/" class="try-btn">Try it!</a>

### Header

| Title                      | Type       | Properties                       | Description |
| ---------------------------| :---------:|:-------------------------------: |----------------------------------------------------------------------------------------------------------------|
| x-wallet-uuid              | STRING     | Must be a **UUID(v4)**           | Sender Wallet UUID **(if empty, your default Wallet UUID will be settled)**                                    |
| nonce:small_orange_diamond:| STRING     | Must be a **UUID(v4)**           | The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier|
:small_orange_diamond: *Required parameters on header request*

### Parameters

| Title                    | Type       | Properties                      |Description   |
| -------------------------| :---------:|:-------------------------------:| -------------|
| id:small_orange_diamond: | STRING     | Must be a **UUID**              | Operation ID |
:small_orange_diamond:*Required parameters on path request*

<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

axios({
  method: 'get',
  url: 'https://api-dev159sw.zrobank.biz:2083/operations/cf83aac7-5dc6-42ae-a99a-15ccdea0c352/receipt',
  headers: {
    accept: 'application/json',
    nonce: "c70177e8-4d0b-4236-bf5f-9bd501dbfd6a",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey",
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

url = "https://api-dev159sw.zrobank.biz:2083/operations/cf83aac7-5dc6-42ae-a99a-15ccdea0c352/receipt"

headers = {
    "accept": "application/json",
    "nonce": "c70177e8-4d0b-4236-bf5f-9bd501dbfd6a",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey",
    "Content-Type": "application/json"
}

response = requests.get(url=url, headers=headers)

print(response)
```
</TabItem>
<TabItem value="shell" label="Shell">

```shell title=CURL
curl -X 'GET' \
  'https://api-dev159sw.zrobank.biz:2083/operations/cf83aac7-5dc6-42ae-a99a-15ccdea0c352/receipt' \
  -H 'accept: application/json' \
  -H 'nonce: c70177e8-4d0b-4236-bf5f-9bd501dbfd6a' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://api-dev159sw.zrobank.biz:2083/operations/cf83aac7-5dc6-42ae-a99a-15ccdea0c352/receipt';

$headers = array(
  'accept: application/json',
  'nonce: c70177e8-4d0b-4236-bf5f-9bd501dbfd6a',
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

```json  title=/operations/{id}/receipt
{
  "success": true,
  "data": {
    "payment_data": [
      {
        "Dados do envio": [
          {
            "ID/Transação": "E12345678202203291531A2203291531"
          },
          {
            "Valor enviado": "R$ 182,10"
          },
          {
            "Data/hora": "29/03/2022 - 15:32:03"
          }
        ]
      },
      {
        "Informações do destinatário": [
          {
            "Instituição": "PIX TESTER"
          },
          {
            "CNPJ": "11.111.111/0001-91"
          },
          {
            "Nome": "Pix"
          }
        ]
      },
      {
        "Informações do pagador": [
          {
            "Instituição": "ZRO PAGAMENTOS S.A."
          },
          {
            "Nome": "Maria"
          },
          {
            "CPF": "***.024.157-**"
          }
        ]
      }
    ],
    "payment_title": "Você enviou um Pix",
    "operation_id": "cf83aac7-5dc6-42ae-a99a-15ccdea0c352",
    "is_scheduled": false,
    "active_devolution": false
  },
  "error": null
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/operations/{id}/receipt
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Access is denied."
}
```
</TabItem>
<TabItem value="422" label="422">

```json  title=/operations/{id}/receipt
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "The id value must be an UUID.",
  "code": "VALIDATION"
}
```
</TabItem>

</Tabs>

### Data description

| Title                                  | Type          |Properties | Description                     |
| -------------------------------------  |:-------------:|:---------:|---------------------------------|
| payment_data:small_orange_diamond:     | ObjectString[]|-          | Payment description             |
| payment_title:small_orange_diamond:    | STRING        |-          | Payment title                   |
| operation_id:small_orange_diamond:     | STRING        |**UUID**   | Related operation ID            |
| is_scheduled:small_orange_diamond:     | BOOLEAN       |-          | If payment state is scheduled   |
| active_devolution:small_orange_diamond:| BOOLEAN       |-          | If payment state can be returned|


:small_orange_diamond: *Required fields in the response*
