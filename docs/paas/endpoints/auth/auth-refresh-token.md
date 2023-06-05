import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Refresh token user

| POST      | /auth/refresh-token|
| --------- | ----------- |

User should inform authorization old access token in header and a new access token will be generated.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- | --- |
| x-access-token:small_orange_diamond:  | string | yes | Send expired jwt access token with refresh token inside. |

:small_orange_diamond: *Required parameters to request*

### Request

<Tabs>
<TabItem value="js" label="NodeJS">

```js title=Axios
const axios = require('axios');

const url = 'https://api-dev159sw.zrobank.biz:2083/auth/refresh-token';

const headers = {
  'Content-Type': 'application/json',
  x-acess-token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9udW1iZXIiOi"
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

url = 'https://api-dev159sw.zrobank.biz:2083/auth/refresh-token'

headers = {
    'accept': 'application/json',
    'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9udW1iZXIiOi'
}

response = requests.post(url, headers=headers)

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
  'https://api-dev159sw.zrobank.biz:2083/auth/refresh-token' \
  -H 'accept: application/json' \
  -H 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9udW1iZXIiOi'
```
</TabItem>
<TabItem value="php" label="PHP">

```shell title=CURL
<?php

$url = 'https://api-dev159sw.zrobank.biz:2083/auth/refresh-token';

$headers = array(
    'accept: application/json',
    'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9udW1iZXIiOi'
);

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($curl);
$status_code = curl_getinfo($curl, CURLINFO_HTTP_CODE);

// Verificar o código de status da resposta
if ($status_code == 200) {
    $response_data = json_decode($response, true);
    print_r($response_data);
} else {
    echo 'Erro na solicitação. Código de status: ' . $status_code;
}

curl_close($curl);
```
</TabItem>
</Tabs>

### Responses

<Tabs>
<TabItem value="200" label="200">

```json  title=/auth/refresh-token
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9udW1iZXIiOiI1NTgxOTk1NjU3Nzc3IiwiaWQiOiJiMjgxNjNlYy0",
}
```
</TabItem>
<TabItem value="400" label="400">

```json  title=/auth/refresh-token
{
  {
  "code": 400,
  "message": "The value x-acess-token should be a string."
  }
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
<TabItem value="500" label="500">

```json  title=/auth/refresh-token
{
  {
  "code": 500,
  "message": "Internal server error"
  }
}
```
</TabItem>
</Tabs>