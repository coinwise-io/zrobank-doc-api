# Errors

Our system includes error handling to ensure that requests are processed smoothly and any errors that occur are handled in a clear and consistent manner.

To facilitate this, we have created a list of common error codes and messages that can be returned by our API. These error codes and messages are designed to help you quickly identify and resolve any issues that may arise when using our API.

The error codes and messages are returned as a JSON object in the response body, with the HTTPS status code indicating the overall status of the request. By analyzing the error codes and messages returned, you can take the appropriate action to resolve the issue and ensure that your requests are processed successfully.


| Code | Description |
| --- | --- |
| 400 | Bad Request |
| 401 | Unauthenticated |
| 408 | Request timeout |
| 422 | Missing or invalid data request |
| 500 | Server error |



```json title='Example response'
{
  "code": 401,
  "message": "Invalid x-api-key",
}
```