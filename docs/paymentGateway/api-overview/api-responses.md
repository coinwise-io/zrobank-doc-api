import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# API Responses

Our API responses use standard HTTP status codes.

In case of application error responses, the response body will contain the `code` and `message` fields, respectively specifying and detailing the error that occurred.

Below are listed the types of HTTP Status Codes, API Error Codes, and Data Validation Errors.

## HTTP Status Codes

| HTTP Status Code | Description                                                                                                |
| ---------------- | ---------------------------------------------------------------------------------------------------------- |
| 100              | Continue, server is ready to receive request.                                                              |
| 101              | Your TCP connection is about to be switched to a different protocol.                                       |
| 103              | Please perform initialization and/or preload resources for the server.                                     |
| 200              | Your request was successfully processed.                                                                   |
| 201              | Request created successfully.                                                                              |
| 202              | Your request was accepted.                                                                                 |
| 203              | Unauthorized information.                                                                                  |
| 204              | Your request was successful.                                                                               |
| 205              | Please reset document display.                                                                             |
| 206              | Your request was successfully processed, only part of the resource sent by the client was delivered.       |
| 300              | More than one representation for the requested resource was found.                                         |
| 301              | This and all future requests must be directed to the URL.                                                  |
| 302              | Your request was redirected.                                                                               |
| 303              | Your request was redirected.                                                                               |
| 304              | Your request has not been modified.                                                                        |
| 307              | Requested resource was temporarily redirected.                                                             |
| 308              | Requested resource has been permanently redirected.                                                        |
| 400              | Your request could not be processed. Please check the data and try again.                                  |
| 401              | Access is denied.                                                                                          |
| 402              | Payment failed.                                                                                            |
| 403              | Access denied to requested resource. User may not have sufficient permission.                              |
| 404              | Requested resource was not found.                                                                          |
| 405              | Unsupported method.                                                                                        |
| 406              | Request not accepted.                                                                                      |
| 407              | Proxy authentication required.                                                                             |
| 408              | Request timed out.                                                                                         |
| 409              | Request could not be processed.                                                                            |
| 410              | Resource is no longer available on the origin server.                                                      |
| 411              | The URI used in the request does not contain defined Content-Length.                                       |
| 412              | Access to the specified resource was denied.                                                               |
| 413              | The request is larger than it can handle.                                                                  |
| 414              | The requested resource is larger than the supported size.                                                  |
| 415              | This resource type is not supported.                                                                       |
| 416              | The URI used in the request does not contain the Content-Range with a satisfactory string.                 |
| 417              | The request sent in the request failed.                                                                    |
| 422              | Request could not be processed.                                                                            |
| 425              | The server could not process this request.                                                                 |
| 426              | Upgrade Required. It is necessary to update the protocol to a new version.                                 |
| 428              | The origin server requires the request to be conditional.                                                  |
| 429              | The app has been restricted and should not attempt to retry the request before a certain time interval.    |
| 431              | Processing was not performed due to the size of the header, please reduce the size and repeat the request. |
| 451              | Error accessing illegal protocol.                                                                          |
| 500              | We are unable to process your request. Please try again in a moment.                                       |
| 501              | The requested feature has not been implemented.                                                            |
| 502              | An invalid response was obtained.                                                                          |
| 503              | The service is temporarily unavailable for maintenance or is overloaded.                                   |
| 504              | The server did not receive a response in a timely manner to complete the request.                          |
| 505              | The version used in the request is not supported.                                                          |
| 506              | Internal configuration error. Endpoint not suitable for this process.                                      |
| 507              | The maximum storage quota has been reached.                                                                |
| 508              | An infinite loop was detected while processing the request.                                                |
| 510              | The request received with the extension declaration is not supported by the server.                        |
| 511              | You must authenticate to the network to proceed.                                                           |

<Tabs>
  <TabItem value="200" label="200">

```json title="Request success to endpoint 'Create transaction'"
{
  "success": true,
  "data": {
    "id": "b28163ec-3d28-4786-a154-7a28ab3600a6",
    "status": "AUTHORIZED",
    "created_at": "2025-06-06T19:34:32.395Z",
    "updated_at": "2025-06-06T19:34:32.395Z"
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

| Code                                                  | Description                                                                                        |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| DEFAULT                                               | Unable to process your request. Please try again.                                                  |
| FORBIDDEN                                             | Access Denied.                                                                                     |
| UNAUTHORIZED                                          | Access is denied.                                                                                  |
| MISSING_DATA                                          | Required mandatory data: {}.                                                                       |
| USER_NOT_FOUND                                        | User not found.                                                                                    |
| VALIDATION                                            | Ex.: The quotation_id value must be an UUID.                                                       |
| INVALID_FORMAT                                        | Check the data format {} and try again.                                                            |
| INVALID_EVP_FORMAT                                    | The random key provided has an invalid format.                                                     |
| INVALID_CPF_FORMAT                                    | The CPF provided has an invalid format.                                                            |
| INVALID_CNPJ_FORMAT                                   | The CNPJ provided has an invalid format.                                                           |
| INVALID_DOCUMENT_FORMAT                               | The document provided has an invalid format.                                                       |
| INVALID_EMAIL_FORMAT                                  | The email provided has an invalid format.                                                          |
| INVALID_PHONE_NUMBER_FORMAT                           | The entered phone has an invalid format.                                                           |
| BANK_NOT_FOUND                                        | Bank not available. Please check data and try again.                                               |
| ONBOARDING_NOT_FOUND                                  | Onboarding not found.                                                                              |
| NOT_ENOUGH_FUNDS                                      | No balance available.                                                                              |
| NOT_ENOUGH_LIMIT                                      | No limit available.                                                                                |
| PAYMENT_INVALID_DATE                                  | Date not allowed or over 3 months, please select a valid date and try again.                       |
| QR_CODE_NOT_FOUND                                     | QR Code data not found. Please try again.                                                          |
| DECODED_QR_CODE_INVALID_STATE                         | QrCode data not processed. Please try again.                                                       |
| PAYMENT_VALUE_IS_NOT_POSITIVE                         | Payment amount must be greater than 0.                                                             |
| PAYMENT_VALUE_EXCEEDS_PERIOD_LIMIT                    | Payment amount exceeded the time limit.                                                            |
| PAYMENT_NOT_FOUND                                     | Payment not found.                                                                                 |
| PAYMENT_INVALID_STATE                                 | Payment status is invalid for transaction. Please try again.                                       |
| CURRENCY_NOT_FOUND                                    | Currency not found. Please check and try again.                                                    |
| CURRENCY_NOT_ACTIVE                                   | Inactive currency. Please check and try again.                                                     |
| WALLET_NOT_ACTIVE                                     | Inactive wallet. Please check and try again.                                                       |
| WALLET_NOT_FOUND                                      | Wallet not found. Please check and try again.                                                      |
| WALLET_CANNOT_BE_DELETED                              | Wallet cannot be deleted. Please check and try again.                                              |
| WALLET_MAX_NUMBER                                     | Maximum number of wallets created.                                                                 |
| WALLET_ACCOUNT_NOT_ACTIVE                             | Inactive account data. Please check and try again.                                                 |
| WALLET_ACCOUNT_NOT_FOUND                              | Account data not found. Please verify your registration and try again.                             |
| WALLET_ACCOUNT_HAS_BALANCE                            | Wallet account balance has some value. Please verify your wallet and try again.                    |
| DATA_INCONSISTENT                                     | Incorrect information. Please check and try again.                                                 |
| NOT_ENOUGH_AVAILABLE_LIMIT                            | Insufficient available limit.                                                                      |
| OPERATION_BETWEEN_SAME_WALLET                         | Operation performed between the same wallet. Please check and try again.                           |
| OPERATION_INVALID_STATE                               | Invalid Operation. Please check and try again.                                                     |
| OPERATION_NOT_FOUND                                   | Operation not found. Please check and try again.                                                   |
| OPERATION_NOT_REVERSIBLE                              | The operation is not reversible.                                                                   |
| TRANSACTION_TYPE_NOT_ACTIVE                           | This transaction type is not active. Please check and try again.                                   |
| TRANSACTION_TYPE_TAG_NOT_FOUND                        | This transaction type is not allowed. Please check and try again.                                  |
| VALUE_IS_ABOVE_MAX_AMOUNT_LIMIT                       | The value is above the maximum limit. Please check and try again.                                  |
| VALUE_IS_ABOVE_MIN_AMOUNT_LIMIT                       | The value is below the minimum threshold. Please check and try again.                              |
| ORDER_QUANTITY_CURRENCY_NOT_FOUND                     | Currency not found. Please check and try again.                                                    |
| MAX_DECODED_PIX_KEY_REQUESTS_PER_DAY_REACHED          | Maximum number of payments for keys not made has been reached.                                     |
| MAX_NUMBER_OF_KEYS_REACHED                            | Maximum number of keys has been reached.                                                           |
| PSP_ERROR                                             | This operation could not be performed. Please try again later.                                     |
| PSP_OFFLINE                                           | This operation could not be performed. Please try again later.                                     |
| ADDRESS_NOT_FOUND                                     | Address not found. Please check and try again.                                                     |
| DECODED_QR_CODE_EXPIRED                               | Unable to make payment, QR Code is expired.                                                        |
| INVALID_FORMAT_KEY_PSP                                | Please check the data format and try again.                                                        |
| NIGHTTIME_INTERVAL_INVALID                            | Invalid night time interval.                                                                       |
| DAILY_LIMIT_EXCEEDED                                  | Daily limit exceeded.                                                                              |
| MONTHLY_LIMIT_EXCEEDED                                | Monthly limit exceeded.                                                                            |
| YEARLY_LIMIT_EXCEEDED                                 | Yearly limit exceeded.                                                                             |
| NIGHTLY_LIMIT_EXCEEDED                                | Nightly limit exceeded.                                                                            |
| REPLAY                                                | Our fault, but your operation may have completed! Please check your statement before trying again. |
| MAX_AMOUNT_LIMIT_EXCEEDED                             | Limit per operation exceeded.                                                                      |
| MAX_AMOUNT_NIGHTLY_LIMIT_EXCEEDED                     | Nightly limit per operation exceeded.                                                              |
| MIN_AMOUNT_LIMIT_BELOW                                | Minimum limit not reached.                                                                         |
| MIN_AMOUNT_NIGHTLY_LIMIT_BELOW                        | Minimum night limit not reached.                                                                   |
| VALUE_IS_ABOVE_MAX_AMOUNT_NIGHTLY_LIMIT               | The value is above the maximum night limit. Please check and try again.                            |
| VALUE_IS_UNDER_MIN_AMOUNT_NIGHTLY_LIMIT               | The value is below the minimum night limit. Please check and try again.                            |
| USER_LIMIT_NOT_FOUND                                  | The limit was not found.                                                                           |
| QUOTATION_AMOUNT_UNDER_MIN_AMOUNT                     | Amount is below the minimum threshold.                                                             |
| STREAM_QUOTATION_NOT_FOUND                            | Currency for quote was not found.                                                                  |
| QUOTATION_NOT_FOUND                                   | Quote was not found. Please try again.                                                             |
| SPREAD_NOT_FOUND                                      | Spread was not found. Please try again.                                                            |
| TAX_NOT_FOUND                                         | Tax was not found. Please try again.                                                               |
| CONVERSION_CREDIT_BALANCE_OVERFLOW                    | There is no credit available to perform this operation.                                            |
| QR_CODE_DYNAMIC_NOT_FOUND                             | QR Code was not found. Please try again.                                                           |
| BANKING_TED_WEEKDAY_INVALID                           | Unable to make ted. This operation is not permitted in weekends.                                   |
| BANKING_TED_HOLIDAY_INVALID                           | Unable to make ted. This operation is not permitted in holidays.                                   |
| BANKING_TED_INTERVAL_INVALID                          | Unable to make ted. This operation is outside permitted time.                                      |
| BANK_TED_NOT_FOUND                                    | Bank not found.                                                                                    |
| USER_WALLET_ALREADY_EXISTS                            | User is already associated to the wallet. Please check your data and try again.                    |
| USER_WALLET_NOT_FOUND                                 | User's association with the wallet is not found. Please check your data and try again.             |
| WALLET_ACCOUNTS_NOT_FOUND                             | No account details found. Please verify your registration and try again.                           |

<Tabs>
  <TabItem value="422" label="422">

```json title="Example containing the code: VALIDATION"
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "The field created_at_start has the wrong format.",
  "code": "VALIDATION"
}
```

  </TabItem>
</Tabs>

## Data Validation Errors

| Validation Types          | Description                                                              |
| ------------------------- | ------------------------------------------------------------------------ |
| IS_UUID                   | The \{property\} value must be an UUID.                                  |
| IS_ENUM                   | The value \{value\} is not accepted in param \{property\}.               |
| IS_BOOLEAN                | The value \{property\} should be a boolean.                              |
| IS_STRING                 | The value \{property\} should be a string.                               |
| LENGTH                    | The \{property\} must be equal \{value\}.                                |
| MAX_LENGTH                | The \{constraints.maxLength\}.                                           |
| MIN_LENGTH                | The \{constraints.minLength\}.                                           |
| IS_NOT_EMPTY              | The param value \{property\} cannot be empty.                            |
| IS_POSITIVE               | The \{property\} must be a positive value.                               |
| IS_INT                    | The \{property\} must be a integer value.                                |
| IS_ARRAY                  | The \{property\} must be um array.                                       |
| IS_DATE_STRING            | The \{property\} must be a string date.                                  |
| IS_NUMBER                 | The \{property\} must be a number.                                       |
| IS_DATE                   | The field \{property\} must be a date.                                   |
| EQUALS                    | The param \{property\} is not the same as expected.                      |
| IS_DEFINED                | The field \{property\} was not informed.                                 |
| ARRAY_MIN_SIZE            | The \{property\} must be longer than or equal \{constraints.minLength\}. |
| IS_OBJECT                 | The field \{property\} must be an object.                                |
| MATCHES                   | The param value \{property\} wasn't informed according to expected mask. |
| IS_EMAIL                  | The param value \{property\} must be an e-mail.                          |
| IS_PHONE_NUMBER           | The param value \{property\} must be a phone number.                     |
| IS_NUMBER_STRING          | The param value \{property\} should contain only numbers.                |
| IS_CPF_OR_CNPJ            | The param value \{property\} is not a valid document (CPF or CNPJ).      |
| IS_LENGTH                 | The size of the field \{property\} wasn't the expected.                  |
| IS_ISO_STRING_DATE_FORMAT | The field \{property\} has the wrong format.                             |
| IS_DATE_BEFORE_THAN       | The field \{property\} must be before the end date.                      |
| IS_DATE_AFTER_THAN        | The field \{property\} must be after the start date.                     |
| IS_DATE_AFTER_THAN_NOW    | The field \{property\} must be after now date.                           |
| IS_IN                     | The \{property\} value is not valid.                                     |

<Tabs>
  <TabItem value="422" label="422">

```json title="Example containing the code: IS_STRING"
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "The value id should be a string.",
  "code": "IS_STRING"
}
```

  </TabItem>
</Tabs>

## SPI Error Codes

| Code | Source           | Description                                                                                                                                                                                                                                                                    |
|------|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| AB03 | SPI              | Settlement of interrupted transaction due to timeout in SPI.                                                                                                                                                                                                                   |
| AB09 | Receiver PSP     | Transaction interrupted due to error in the receiver user participant.                                                                                                                                                                                                         |
| AB11 | SPI              | Timeout of the order sender participant.                                                                                                                                                                                                                                       |
| AC03 | Receiver PSP     | Nonexistent or invalid agency and/or transactional account number of the receiver user.                                                                                                                                                                                        |
| AC06 | Receiver PSP     | Transactional account of the receiver user is blocked.                                                                                                                                                                                                                         |
| AC07 | Receiver PSP     | Transactional account number of the receiver user has been closed.                                                                                                                                                                                                             |
| AC14 | Receiver PSP     | Incorrect type for the transactional account of the receiver user.                                                                                                                                                                                                             |
| AG03 | Receiver PSP     | Transaction type not supported/authorized in the transactional account of the receiver user. Example: transfer to salary account.                                                                                                                                              |
| AG12 | SPI              | Payment/order return is not allowed in SPI where resources are transferred from one transactional account to another within the same participating institution or between participants that use the settlement service of the same settling participant in SPI (booktransfer). |
| AG13 | SPI              | It is not allowed to return the return of an instant payment.                                                                                                                                                                                                                  |
| AGNT | SPI              | Direct participant is not a settler of the payer user participant.                                                                                                                                                                                                             |
| AM01 | SPI              | Instant payment order with zero value.                                                                                                                                                                                                                                         |
| AM02 | Receiver PSP     | Order/payment return in a value that exceeds the permitted limit for the type of credited transactional account.                                                                                                                                                               |
| AM04 | SPI              | Insufficient balance in the PI account of the payer user participant.                                                                                                                                                                                                          |
| AM09 | Receiver PSP     | Payment return in a value that exceeds the value of the corresponding instant payment order.                                                                                                                                                                                   |
| AM12 | SPI              | Discrepancy between the sum of the values of the 'valorDaTarifaOuDinheiroOuCompra' block and the 'value' field.                                                                                                                                                                |
| AM18 | SPI              | Invalid transaction quantity.                                                                                                                                                                                                                                                  |
| BE01 | Receiver PSP     | CPF/CNPJ of the receiver user is not consistent with the specified transactional account holder.                                                                                                                                                                               |
| BE05 | SPI              | Initiator CNPJ of payment not registered in the Pix arrangement.                                                                                                                                                                                                               |
| BE17 | Receiver PSP     | QR Code rejected by the receiver user participant.                                                                                                                                                                                                                             |
| CH11 | Receiver PSP     | Incorrect CPF/CNPJ of the receiver user.                                                                                                                                                                                                                                       |
| CH16 | SPI              | Incorrect or incompatible message content with business rules.                                                                                                                                                                                                                 |
| DS04 | Receiver PSP     | Order rejected by the receiver user participant.                                                                                                                                                                                                                               |
| DS0G | SPI              | The participant who signed the message is not authorized to perform the operation in the debited PI account. In cases where the participant who signed the message is neither the holder of the debited PI account nor the settler in the SPI of the payer user participant.   |
| DS24 | Receiver PSP     | Order rejected due to exceeding the time elapsed between sending the pain.013 and receiving the corresponding pacs.008 by the receiver user participant.                                                                                                                       |
| DS27 | SPI              | Participant is not registered or has not yet started the operation in SPI.                                                                                                                                                                                                     |
| DT02 | SPI              | Invalid date and time of message transmission.                                                                                                                                                                                                                                 |
| DT05 | SPI              | Transaction exceeds the maximum deadline for instant payment return regulated by the Pix arrangement.                                                                                                                                                                          |
| ED05 | SPI/Receiver PSP | Error in instant payment processing (generic error).                                                                                                                                                                                                                           |
| FF07 | SPI              | Inconsistency between the transaction purpose and the filling of the SPI block elements Structured (Strd).                                                                                                                                                                     |
| FF08 | SPI              | Malformatted operation identifier.                                                                                                                                                                                                                                                                                                                    |
| RC09 | SPI              | ISPB of the payer user participant is invalid or does not exist.                                                                                                                                                                                                               |
| RC10 | SPI              | ISPB of the receiver user participant is invalid or does not exist.                                                                                                                                                                                                            |
| RR04 | SPI              | Payment order in which the payer user is sanctioned by a resolution of the United Nations Security Council (UNSC). In cases where the receiver user is sanctioned, the payment order should not be rejected.                                                      |
