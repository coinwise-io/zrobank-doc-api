import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Refresh token

| POST      | /auth/refresh-token|
| --------- | ------------------ |

User should inform authorization old access token in header and a new access token will be generated.

## Request

### Header

 Title                               | Type       | Properties             |Description                                              |
| -----------------------------------| :---------:|:----------------------:|---------------------------------------------------------|
| access_token:small_orange_diamond: | STRING     | -                      |Send expired jwt access token with refresh token inside  |


<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

const url = 'https://sandbox.zro.com/api/auth/refresh-token';

const headers = {
  'Content-Type': 'application/json'
};

const data = {
  api_id: 'b6bf15b4-e00f-4d03-8e2b-7ed8829c8ff6',
  api_key: 'abcd1234'
};


async function makeRequest(){
  try{
    const response = await axios.post(url, data, {headers});
    console.log(response.data);
  }
  catch(error){
    console.error('Solicitation error:', error.message);
  }
}

makeRequest();

```
</TabItem>
<TabItem value="py" label="Python">

```python title=Requests
import requests

url = 'https://sandbox.zro.com/api/auth/refresh-token'

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
  'https://sandbox.zro.com/api/auth/signin' \
  -H 'accept: application/json' \
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


## Response

<Tabs>
<TabItem value="200" label="200">

```json  title=/auth/refresh-token
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey",
}
```
</TabItem>
<TabItem value="401" label="401">

```json  title=/auth/refresh-token
{
  {
  "code": 401,
  "message": "User authentication failed"
  }
}
```
</TabItem>
</Tabs>


 Title                               | Type       | Properties             |Description                                                    |
| -----------------------------------| :---------:|:----------------------:|---------------------------------------------------------------|
| access_token:small_orange_diamond: | STRING     | -                      |JWT access token. Token used to access all protected endpoints |
