# Rate Limiting

Rate limiting is a technique used in APIs to limit the number of requests a client can make in a certain period of time. This is done to protect the server against overload and ensure the availability and performance of the API for all users.

**For requests to `/auth/refresh-token`, we use a Rate Limit that allows up to 1 request per minute**

**For all other requests, we use a default Rate Limit that allows up to 400 requests per minute**
