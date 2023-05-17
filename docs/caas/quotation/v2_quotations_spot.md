import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create a new currency conversion

| GET      | /v2/quotations/spot |
| --------- | ----------- |

To create a new currency conversion, first, you need to create a **Quotation ID**. Enter a new SPOT quotation below and execute it to get its ID. This ID is the `quotation_id` that will be required to create a new currency conversion.


### Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| base_currency  | string | yes | Quotation currency. |
| amount_currency  | string | yes | Quotation currency quote. |
| amount  | string | yes | Quotation amount. |
| side  | string | yes | Quotation side.|

### Request

<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

const url = 'https://api.example.com/endpoint';

axios.get(url)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Erro na solicitação:', error.message);
  });

```
</TabItem>
<TabItem value="py" label="Python">

```python title=Requests
import requests

url = 'https://api.example.com/endpoint'

data = {
    'id': 'f6e2e084-29b9-4935-a059-5473b13033aa',
    'price_buy': 0,
    'price_sell': 0,
    'side': 'buy',
    'quote_amount_buy': 0,
    'quote_amount_sell': 0,
    'quote_currency_symbol': 'BRL',
    'quote_currency_decimal': 2,
    'quote_currency_title': 'Real',
    'base_amount_buy': 0,
    'base_amount_sell': 0,
    'base_currency_symbol': 'BTC',
    'base_currency_decimal': 8,
    'base_currency_title': 'Real',
    'ttl': '2023-05-05T13:41:52.775Z'
}

response = requests.get(url, params=data)

if response.status_code == 200:
    response_data = response.json()
    print(response_data)
else:
    print('Erro na solicitação. Código de status:', response.status_code)
```
</TabItem>
<TabItem value="shell" label="Shell">

```shell title=CURL
curl -X GET \
  -H 'Content-Type: application/json' \
  -d '{
    "id": "f6e2e084-29b9-4935-a059-5473b13033aa",
    "price_buy": 0,
    "price_sell": 0,
    "side": "buy",
    "quote_amount_buy": 0,
    "quote_amount_sell": 0,
    "quote_currency_symbol": "BRL",
    "quote_currency_decimal": 2,
    "quote_currency_title": "Real",
    "base_amount_buy": 0,
    "base_amount_sell": 0,
    "base_currency_symbol": "BTC",
    "base_currency_decimal": 8,
    "base_currency_title": "Real",
    "ttl": "2023-05-05T13:41:52.775Z"
  }' \
  'https://api.example.com/endpoint'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://api.example.com/endpoint';

$data = array(
    'id' => 'f6e2e084-29b9-4935-a059-5473b13033aa',
    'price_buy' => 0,
    'price_sell' => 0,
    'side' => 'buy',
    'quote_amount_buy' => 0,
    'quote_amount_sell' => 0,
    'quote_currency_symbol' => 'BRL',
    'quote_currency_decimal' => 2,
    'quote_currency_title' => 'Real',
    'base_amount_buy' => 0,
    'base_amount_sell' => 0,
    'base_currency_symbol' => 'BTC',
    'base_currency_decimal' => 8,
    'base_currency_title' => 'Real',
    'ttl' => '2023-05-05T13:41:52.775Z'
);

$options = array(
    'http' => array(
        'method'  => 'GET',
        'header'  => 'Content-type: application/json',
        'content' => json_encode($data)
    )
);

$context = stream_context_create($options);
$response = file_get_contents($url, false, $context);

if ($response !== false) {
    $response_data = json_decode($response, true);
    print_r($response_data);
} else {
    echo 'Erro na solicitação.';
}
```
</TabItem>
</Tabs>


### Response

<Tabs>
<TabItem value="200" label="200">

```json  title=/v2/quotations/spot
{
  "message": "exemple.",
}
```
</TabItem>
<TabItem value="400" label="400">

```json  title=/v2/quotations/spot
{
    "message": "exemple."
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/v2/quotations/spot
{
    "message": "exemple."
}
```
</TabItem>
</Tabs>