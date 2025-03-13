import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# API Responses

Our API responses use standard HTTP status codes.

In case of application error responses, the response body will contain the `code` and `message` fields, respectively specifying and detailing the error that occurred.

Below are listed the types of HTTP Status Codes, API Error Codes, and Data Validation Errors.

## HTTP Status Codes

| HTTP Status Code | Description |
| -- | --|
| 100 | Continue, server is ready to receive request. |
| 101 | Your TCP connection is about to be switched to a different protocol. |
| 103 | Please perform initialization and/or preload resources for the server. |
| 200 | Your request was successfully processed. |
| 201 | Request created successfully. |
| 202 | Your request was accepted. |
| 203 | Unauthorized information. |
| 204 | Your request was successful. |
| 205 | Please reset document display. |
| 206 | Your request was successfully processed, only part of the resource sent by the client was delivered. |
| 300 | More than one representation for the requested resource was found. |
| 301 | This and all future requests must be directed to the URL. |
| 302 | Your request was redirected. |
| 303 | Your request was redirected. |
| 304 | Your request has not been modified. |
| 307 | Requested resource was temporarily redirected. |
| 308 | Requested resource has been permanently redirected. |
| 400 | Your request could not be processed. Please check the data and try again. |
| 401 | Access is denied. |
| 402 | Payment failed. |
| 403 | Access denied to requested resource. User may not have sufficient permission. |
| 404 | Requested resource was not found. |
| 405 | Unsupported method. |
| 406 | Request not accepted. |
| 407 | Proxy authentication required. |
| 408 | Request timed out. |
| 409 | Request could not be processed. |
| 410 | Resource is no longer available on the origin server. |
| 411 | The URI used in the request does not contain defined Content-Length. |
| 412 | Access to the specified resource was denied. |
| 413 | The request is larger than it can handle. |
| 414 | The requested resource is larger than the supported size. |
| 415 | This resource type is not supported. |
| 416 | The URI used in the request does not contain the Content-Range with a satisfactory string. |
| 417 | The request sent in the request failed. |
| 422 | Request could not be processed. |
| 425 | The server could not process this request. |
| 426 | Upgrade Required. It is necessary to update the protocol to a new version. |
| 428 | The origin server requires the request to be conditional. |
| 429 | The app has been restricted and should not attempt to retry the request before a certain time interval. |
| 431 | Processing was not performed due to the size of the header, please reduce the size and repeat the request. |
| 451 | Error accessing illegal protocol. |
| 500 | We are unable to process your request. Please try again in a moment. |
| 501 | The requested feature has not been implemented. |
| 502 | An invalid response was obtained. |
| 503 | The service is temporarily unavailable for maintenance or is overloaded. |
| 504 | The server did not receive a response in a timely manner to complete the request. |
| 505 | The version used in the request is not supported. |
| 506 | Internal configuration error. Endpoint not suitable for this process. |
| 507 | The maximum storage quota has been reached. |
| 508 | An infinite loop was detected while processing the request. |
| 510 | The request received with the extension declaration is not supported by the server. |
| 511 | You must authenticate to the network to proceed. |

<Tabs>
  <TabItem value="200" label="200">

```json title="Request success to endpoint 'Create new EVP PIX key'"
{
  "success": true,
  "data": {
    "id": "126f7d3b-9462-4c6d-afdd-65f4b83d9efc",
    "key": null,
    "type": "EVP",
    "state": "CONFIRMED",
    "created_at": "2023-06-05T01:43:33.662Z"
  },
  "error": null
}
```

  </TabItem>
  <TabItem value="401" label="401">

```json title="Request error when access is denied"
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Access is denied."
}
```

  </TabItem>
  <TabItem value="422" label="422">

```json title="Validation error"
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "The id value must be an UUID.",
  "code": "VALIDATION"
}
```

</TabItem>
</Tabs>

## API Error Codes

| Code | Description |
|--|--|
| BANK_ACCOUNT_NOT_FOUND | Bank not found. |
| BANK_ACCOUNT_CANNOT_WORK_FOR_THIS_OPERATION | Bank account not allowed for this type of operation. |
| CLIENT_TEMPORARILY_BLOCKED | Customer temporarily blocked, please try again in a few minutes. |
| UNAVAILABLE_WITHDRAWAL | Withdrawal unavailable, please try again in a few minutes. |
| UNABLE_TO_DECODE | Unable to decode the PIX key. |
| WITHDRAWAL_LIMIT_PER_CPF_PER_HOUR_REACHED | Withdrawal limit per CPF/hour reached. |
| PIX_KEY_DOES_NOT_BELONGS_TO_USER | Customer's document is different from the key's document. |
| FORBIDDEN_FINANCIAL_INSTITUTION | The institution is blocked for this operation. |
| UNAVAILABILITY_AT_THE_BANK | Unavailability at the bank. |
| CLIENT_IS_BLOCKLISTED | This document is blocked from performing operations. |
| CLIENT_HAS_KYC_RESTRICTION | This document is restricted from performing operations. |
| BANK_ACCOUNT_UNAUTHORIZED | Customer's account is not authorized for withdrawal. |
| BANK_ACCOUNT_DOES_NOT_EXIST | Bank not found. |
| BANK_ACCOUNT_CAN_NOT_WORK_FOR_THIS_OPERATION | Bank account not allowed for this type of operation. |
| INVALID_EXPIRATION_DATE | The expiration date of the QR Code is earlier than its creation date. |
| LESS_THAN_ONE_ACCOUNT_PROVIDED | At least one bank account must be provided. |
| MIN_ACCOUNTS_REQUIRED | The minimum required number of bank accounts must be provided. |
| MAX_ACCOUNTS_REQUIRED | The number of provided accounts exceeds the maximum allowed. |
| QRCODE_GENERATION_FAILED | QR Code generation failed. |
| UNABLE_TO_FIND_ORIGINAL_TRANSACTION | Unable to find the original transaction to perform the reversal. |
| INVALID_TRANSACTION | This type of transaction cannot be reversed. |
| TRANSACTION_IS_NOT_PAID | This transaction has not been paid yet. |
| P2P_NOT_COMPLETED | The original transaction's P2P was not successfully executed. |
| INCORRECT_VALUE | It is not possible to reverse a value greater than what is available. |

<Tabs>
  <TabItem value="422" label="422">

```json title="Example containing the code: VALIDATION"
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "It is not possible to reverse a value greater than what is available.",
  "code": "INCORRECT_VALUE"
}
```

  </TabItem>
</Tabs>
