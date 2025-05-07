# Authentication

There are two types of authentication methods available for the Z.ro Gateway API:

- Using PaaS Token
- Using `x-api-key` (DEPRECATED)

## Using PaaS Token

The PaaS Token is a JWT (JSON Web Token) issued by our PaaS system. This token may be used to authenticate your requests
to the Z.ro Gateway API and the PaaS API.

To obtain your PaaS Token, you need to perform the authorization as described in the [PaaS Authorization section](/paas/api-overview/authentication).

After you have obtained your PaaS Token, you can use it to authenticate your requests to the Z.ro Gateway API. To do this,
you need to include the PaaS Token in the request header as a Bearer Token in the `Authorization` header. Example:

```shell
curl --request GET \
  --url https://payments-api-hml.zrobank.xyz/api/v2/transactions \
  --header 'Authorization: Bearer <YOUR-PAAS-TOKEN>'
```

## Using `x-api-key` (DEPRECATED)

The `x-api-key` is a unique identifier that allows you to authenticate your requests to the Z.ro Gateway API.

To obtain your `x-api-key`, you need to contact our support team. Once your `x-api-key` is created, you are ready to
start the integration.

To authenticate the requests you make to the Z.ro Gateway API, you need to include the `x-api-key` in the request
header. Example:

```shell
curl --request GET \
  --url https://payments-api-hml.zrobank.xyz/api/v2/transactions \
  --header 'x-api-key: <YOUR-X-API-KEY>'
```

:::caution
Remember that your API key is confidential and should be stored securely. Do not share your API key with unauthorized
third parties. If you believe your API key has been compromised, contact the system administrator immediately to have
the key revoked and a new key issued.
:::

:::warning
We are currently in the process of deprecating the `x-api-key` authentication method. We recommend using the PaaS Token
authentication method for all new integrations.
:::
