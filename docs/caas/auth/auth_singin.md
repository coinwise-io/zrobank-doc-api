import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Generate access token from API ID and API Key

| POST      | /auth/singin |
| --------- | ----------- |

Enter your API ID and API Key on the requisition body below and execute to get your Access Token. Your Access Token is necessary to log in under the Authorize section.

### Parameters

No parameters.

### Request

<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

const url = 'https://api.example.com/endpoint';

const headers = {
  'Content-Type': 'application/json'
};

const data = {
  api_id: 'b6bf15b4-e00f-4d03-8e2b-7ed8829c8ff6',
  api_key: 'abcd1234'
};

axios.post(url, data, { headers })
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

headers = {
    'Content-Type': 'application/json'
}

data = {
    'api_id': 'b6bf15b4-e00f-4d03-8e2b-7ed8829c8ff6',
    'api_key': 'abcd1234'
}

response = requests.post(url, headers=headers, json=data)

if response.status_code == 200:
    response_data = response.json()
    print(response_data)
else:
    print('Erro na solicitação. Código de status:', response.status_code)

```
</TabItem>
<TabItem value="shell" label="Shell">

```shell title=CURL
curl -X 'POST' \
  'https://api.example.com/endpoint' \
  -H 'Content-Type: application/json' \
  -d '{
    "api_id": "b6bf15b4-e00f-4d03-8e2b-7ed8829c8ff6",
    "api_key": "abcd1234"
}'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$json = '{
  "api_id": "b6bf15b4-e00f-4d03-8e2b-7ed8829c8ff6",
  "api_key": "abcd1234"
}';

$data = json_decode($json, true);

$apiId = $data['api_id'];
$apiKey = $data['api_key'];
?>

```
</TabItem>
</Tabs>


### Responses

<Tabs>
<TabItem value="200" label="200">

```json  title=/auth/singin
{
  "access_token": "string",
}
```
</TabItem>
<TabItem value="400" label="400">

```json  title=/auth/singin
{
  {
  "code": 400,
  "message": "If any required params are missing or has invalid format or type."
  }
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/auth/singin
{
  {
  "code": 401,
  "message": "User authentication failed"
  }
}
```
</TabItem>
</Tabs>
