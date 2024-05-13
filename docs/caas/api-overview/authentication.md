# Authentication

All API requests require HTTP Bearer Authentication security authentication through an **Access Token**.

It is important to note that all API requests must be made via HTTPS, as calls made by simple HTTP will not be accepted. In addition, it is essential that API requests be authenticated, otherwise they will not be successfully executed.

## How to generate a new Access Token?

**[To generate a new Access Token](../endpoints/login-auth-rest-controller-execute.api.mdx)**, simply provide your `API ID` and `API Key` in the request body of the `/auth/signin` endpoint. This request will return an Access Token, which is precisely the Bearer Token required for authentication of all requests.

:::info
If your Access Token stops working or you have accidentally shared it, insert it into the ["Refresh token"](../endpoints/refresh-token-auth-rest-controller-execute.api.mdx) endpoint and a new valid Access Token will be returned, ready to be used.
:::
