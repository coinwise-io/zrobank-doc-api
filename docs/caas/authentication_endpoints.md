# Authentication Endpoints

## /auth/singin

Enter your API ID and API Key on the requisition body below and execute to get your Access Token. Your Access Token is necessary to log in under the Authorize section.

**HTTP Method:** POST.

### Parameters

No parameters.

### Requisition Body

```json
{
  "api_id": "b6bf15b4-e00f-4d03-8e2b-7ed8829c8ff6",
  "api_key": "abcd1234"
}
```

### Responses

| Status Code | Description | Response |
| --- | --- | --- |
| 200 | User authenticated successfully. | `{"access_token": "string"}` |
| 400 | If any required params are missing or has invalid format or type. | None |
| 401 | User authentication failed. | None |

## /auth/refresh-token

User should inform authorization old access token in header and a new access token will be generated.

**HTTP Method:** POST.

### Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| x-access-token | string | yes | Send expired jwt access token with refresh token inside. |

### Requisition Body

```json
{curl -X 'POST' \
  'https://api-dev159sw.zrobank.biz:2083/auth/refresh-token' \
  -H 'accept: application/json' \
  -H 'x-access-token: x1231' \
  -d ''
}
```

### Responses

| Status Code | Description | Response |
| --- | --- | --- |
| 500 | Error: response status is 500 | `{ "statusCode": 500,\n"message": "Internal server error"}` |
| 200 | User authenticated successfully. | `{"access_token": "string"}`|
| 400 | If any required params are missing or has invalid format or type.  | None |
| 401 | 	
User authentication failed. | None |