# Request ID (Nonce)

Request ID, named in our API as **Nonce**, is a unique identifier, of type UUID (version 4), associated with each new request.

Each request must have a **unique** `nonce` parameter, which is used to track and correlate all activities related to this particular request, from the moment it is received by the API until its response.
