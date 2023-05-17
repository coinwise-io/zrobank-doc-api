import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


| POST      | /v2/otc/conversions |
| --------- | ----------- |

To create a new currency conversion, first, you need to create a **Quotation ID** at the endpoint `/v2/quotations/spot`. After the `quotation_id` is created, enter its information in the requisition body below and execute it.

### Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| nonce  | string | yes | The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier. |

### Request

<Tabs>
<TabItem value="js" label="NodeJS">


```js title=Axios
const axios = require('axios');

const url = 'https://api.example.com/endpoint';

const data = {
  quotation_id: 'abb8e578-6540-4104-8fa9-90a854ab0d1c'
};

axios.post(url, data)
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
    'quotation_id': 'abb8e578-6540-4104-8fa9-90a854ab0d1c'
}

response = requests.post(url, json=data)

if response.status_code == 200:
    response_data = response.json()
    print(response_data)
else:
    print('Erro na solicitação. Código de status:', response.status_code)
```
</TabItem>
<TabItem value="shell" label="Shell">

```shell title=CURL
curl -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "quotation_id": "abb8e578-6540-4104-8fa9-90a854ab0d1c"
  }' \
  'https://api.example.com/endpoint'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://api.example.com/endpoint';

$data = array(
    'quotation_id' => 'abb8e578-6540-4104-8fa9-90a854ab0d1c'
);

$options = array(
    'http' => array(
        'method'  => 'POST',
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

### Responses

<Tabs>
<TabItem value="200" label="200">

```json  title=/v2/otc/conversions
{
   "id": "f6e2e084-29b9-4935-a059-5473b13033aa",
    "operation_id": "295564a9-c5fd-4e73-9abb-72e0383f2dfb",
    "created_at": "2023-05-08T14:10:01.430Z"
  
}
```
</TabItem>
<TabItem value="400" label="400">

```json  title=/v2/otc/conversionst
{
    "message": "exemple."
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/v2/otc/conversionst
{
    "message": "exemple."
}
```
</TabItem>
<TabItem value="422" label="422">

```json  title=/v2/otc/conversionst
{
    "message": "exemple."
}
```
</TabItem>
</Tabs>