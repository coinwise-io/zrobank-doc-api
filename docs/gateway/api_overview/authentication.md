# Authentication


Our API uses x-api-key to authenticate and authorize API requests. To access our API, you will need to obtain a unique API key, which will be used to authenticate all requests.

To send an API request using x-api-key, you must include the x-api-key header in your HTTP request with the value of the API key. The x-api-key header should be set as a string that represents your unique API key. If you try to access our API without a valid API key or with an invalid key, you will receive an authorization error message.

## How to get a API key?

To obtain a unique API key, you will need to contact the system administrator for more information about the authentication and authorization process. Once you have a valid API key, you can start sending requests to our API using the x-api-key header.

:::caution
Remember that your API key is confidential and should be stored securely. Do not share your API key with unauthorized third parties. If you believe your API key has been compromised, contact the system administrator immediately to have the key revoked and a new key issued.
:::