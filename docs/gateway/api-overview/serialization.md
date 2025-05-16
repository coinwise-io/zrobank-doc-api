# Serialization

## Snake Case

Data serialization in the Gateway requires that all response requests follow the snake case convention to ensure proper integration with the system.

## Data

Our system's API uses JSON (JavaScript Object Notation) as the data serialization format for all HTTPS requests and responses. JSON is widely supported by different systems and is easy to read and manipulate. To access our API, you need to include the `x-api-key` header in all HTTPS requests, with the value of your unique API key. The `x-api-key` header should be set as a string that represents your API key.

### Request <a href="https://payments-api-hml.zrobank.xyz/api/documentation" class="try-btn">Try it!</a>

When sending a request to our API, it's important to set the `Content-Type` header to `application/json` to indicate that the data is in JSON format. Additionally, when receiving a response from the API, the `Content-Type` header will also be set as `application/json`. When making a request to our API, you can include the data in the request body as a JSON object. The format of the JSON object should follow our API specifications

### Response

When receiving a response from our API, you can expect a JSON object as a result. The returned JSON object will include the data requested by your request. Please note that for endpoints that retrieve or perform actions, such as POST, PUT, PATCH requests, the request should include a JSON object in the request body. However, for endpoints that only retrieve data, such as GET requests, the request body is optional.

```json title='Response Example'
{
  "code": 201,
  "status": "pending",
  "message": null,
  "transaction_uuid": "c808c55d-0110-4070-97ef-4459d9e2c595",
  "merchant_id": "7da0c9af-215e-4625-b484-b8cfc87aaa09"
}
```
