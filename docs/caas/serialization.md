# Serialization

## Snake case

Data serialization in the ZroBank API requires all response requests to follow the snake case convention to ensure proper integration with the system.

## Data

Both API requests and responses follow the JSON specification, in which request and response bodies are encoded in JSON. Some endpoints do not require the presence of a request body. Responses, in turn, are represented by a single JSON object containing the following keys:

| Key name | Values          |
| -------- | ---------------|
| success  | Indicates whether the request was successful (true) or not (false).         |
| data   | Provides the response data in JSON format.      |
| error  | Indicates the type of error that occurred in the request (for example, "AUTH" for authentication errors).         |
| message   | Provides additional information about the error that occurred.    |

Example of JSON response:

```json
{
  "success": false,<br>
  "data": null,<br>
  "error": "USER",<br>
  "message": "Access is denied."<br>
}
```
