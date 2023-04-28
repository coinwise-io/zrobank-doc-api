# Errors

## HTTP Errors

As respostas de nossa API utilizam os códigos de status HTTP padrão, onde códigos na faixa 2xx indicam sucesso na requisição, códigos na faixa 3xx indicam que algo mais precisa ser feito ou precisou ser feito para completar a solicitação e códigos na faixa 4xx indicam que a solicitação não pode ser concluída ou contém a sintaxe incorreta O corpo da resposta contém uma lista de erros com título e detalhes.

| HTTP Status | Description |
| --- | --- |
| DEFAULT | Unable to process your request. Please try again. |
| HTTP_STATUS_100 | Continue, server is ready to receive request. |
| HTTP_STATUS_101 | Your TCP connection is about to be switched to a different protocol. |
| HTTP_STATUS_103 | Please perform initialization and/or preload resources for the server. |
| HTTP_STATUS_200 | Your request was successfully processed. |
| HTTP_STATUS_201 | Request created successfully. |
| HTTP_STATUS_202 | Your request was accepted. |
| HTTP_STATUS_203 | Unauthorized information. |
| HTTP_STATUS_204 | Your request was successful. |
| HTTP_STATUS_205 | Please reset document display. |
| HTTP_STATUS_206 | Your request was successfully processed, only part of the resource sent by the client was delivered. |
| HTTP_STATUS_300 | More than one representation for the requested resource was found. |
| HTTP_STATUS_301 | This and all future requests must be directed to the URL. |
| HTTP_STATUS_302 | Your request was redirected. |
| HTTP_STATUS_303 | Your request was redirected. |
| HTTP_STATUS_304 | Your request has not been modified. |
| HTTP_STATUS_307 | Requested resource was temporarily redirected. |
| HTTP_STATUS_308 | Requested resource has been permanently redirected. |
| HTTP_STATUS_400 | Your request could not be processed. Please check the data and try again. |
| HTTP_STATUS_401 | Access is denied. |
| HTTP_STATUS_402 | Payment failed. |
| HTTP_STATUS_403 | Access denied to requested resource. User may not have sufficient permission. |
| HTTP_STATUS_404 | Requested resource was not found. |
| HTTP_STATUS_405 | Unsupported method. |
| HTTP_STATUS_406 | Request not accepted. |
| HTTP_STATUS_407 | Proxy authentication required. |
| HTTP_STATUS_408 | Request timed out. |
| HTTP_STATUS_409 | Request could not be processed. |
| HTTP_STATUS_410 | Resource is no longer available on the origin server. |
| HTTP_STATUS_411 | The URI used in the request does not contain defined Content-Length. |
| HTTP_STATUS_412 | Access to the specified resource was denied. |
| HTTP_STATUS_413 | The request is larger than it can handle. |
| HTTP_STATUS_414 | The requested resource is larger than the supported size. |
| HTTP_STATUS_415 | This resource type is not supported. |
| HTTP_STATUS_416 | The URI used in the request does not contain the Content-Range with a satisfactory string. |
| HTTP_STATUS_417 | The request sent in the request failed. |
| HTTP_STATUS_422 | Request could not be processed. |
| HTTP_STATUS_425 | The server could not process this request. |
| HTTP_STATUS_426 | Upgrade Required. It is necessary to update the protocol to a new version. |
| HTTP_STATUS_428 | The origin server requires the request to be conditional. |
| HTTP_STATUS_429 | The app has been restricted and should not attempt to retry the request before a certain time interval. |
| HTTP_STATUS_431 | Processing was not performed due to the size of the header, please reduce the size and repeat the request. |
| HTTP_STATUS_451 | Error accessing illegal protocol. |
| HTTP_STATUS_500 | We are unable to process your request. Please try again in a moment. |
| HTTP_STATUS_501 | The requested feature has not been implemented. |
| HTTP_STATUS_502 | An invalid response was obtained. |
| HTTP_STATUS_503 | The service is temporarily unavailable for maintenance or is overloaded.|
| HTTP_STATUS_504 | The server did not receive a response in a timely manner to complete the request. |
| HTTP_STATUS_505 | The version used in the request is not supported. |
| HTTP_STATUS_506 | Internal configuration error. Endpoint not suitable for this process.|
| HTTP_STATUS_507 | The maximum storage quota has been reached.|
| HTTP_STATUS_508 | An infinite loop was detected while processing the request.|
| HTTP_STATUS_510 | The request received with the extension declaration is not supported by the server.|
| HTTP_STATUS_511 | You must authenticate to the network to proceed.

Exemplo de Error **HTTP_STATUS_401**:

```json
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "Access is denied."
}
```

## Default Errors

Nossa API também possui erros padrão da aplicação. A seguir, apresentamos uma tabela com os tipos de erro e suas respectivas descrições.

| Default Status | Description |
|------|---------|
| DEFAULT | Unable to process your request. Please try again. |
| FORBIDDEN | Access Denied. |
| UNAUTHORIZED | Access is denied. |
| MISSING_DATA | Required mandatory data: {}. |
| USER_NOT_FOUND | User not found. |
| INVALID_FORMAT | `"{\\"one\\": \\"Check the data format {invalidList} and try again.\\", \\"other\\": \\"Check the data format {invalidList} and try again.\\"}"`|
| INVALID_EVP_FORMAT | The random key provided has an invalid format. |
| INVALID_CPF_FORMAT | The CPF provided has an invalid format. |
| INVALID_CNPJ_FORMAT | The CNPJ provided has an invalid format. |
| INVALID_DOCUMENT_FORMAT | The document provided has an invalid format. |
| INVALID_EMAIL_FORMAT | The email provided has an invalid format. |
| INVALID_PHONE_NUMBER_FORMAT | The entered phone has an invalid format. |
| BANK_NOT_FOUND | Bank not available. Please check data and try again. |
| ONBOARDING_NOT_FOUND | Onboarding not found. |
| NOT_ENOUGH_FUNDS | No balance available. |
| NOT_ENOUGH_LIMIT | No limit available. |
| PAYMENT_INVALID_DATE | Date not allowed or over 3 months, please select a valid date and try again. |
| DECODED_PIX_ACCOUNT_NOT_FOUND | Account data not found. Please try again. |
| DECODED_PIX_ACCOUNT_INVALID_STATE | Account data not processed. Please try again. |
| DECODED_PIX_ACCOUNT_DOCUMENT_AND_PERSON_TYPE_CONFLICT | Check the document format and try again. |
| QR_CODE_NOT_FOUND | QR Code data not found. Please try again. |
| DECODED_QR_CODE_INVALID_STATE | QrCode data not processed. Please try again. |
| DECODED_PIX_KEY_NOT_FOUND | Key data not found. Please try again. |
| DECODED_PIX_KEY_INVALID_STATE | Key data not processed. Please try again. |
| PAYMENT_VALUE_IS_NOT_POSITIVE | Payment amount must be greater than 0. |
| PAYMENT_VALUE_EXCEEDS_PERIOD_LIMIT | Payment amount exceeded the time limit. |
| PAYMENT_NOT_FOUND | Payment not found. |
| PAYMENT_INVALID_STATE | Payment status is invalid for transaction. Please try again. |
| PIX_DEVOLUTION_MAX_NUMBER | Maximum number of returns made. |
| PIX_DEVOLUTION_AMOUNT_OVERFLOW | Amount to be returned greater than the deposit amount. |
| PIX_DEPOSIT_EXPIRED_DEVOLUTION_TIME | It is not possible to return this deposit because the deadline has expired. |
| CURRENCY_NOT_FOUND | Currency not found. Please check and try again. |
| CURRENCY_NOT_ACTIVE | Inactive currency. Please check and try again. |
| WALLET_NOT_ACTIVE | Inactive wallet. Please check and try again. |
| WALLET_NOT_FOUND | Wallet not found. Please check and try again. |
| WALLET_CANNOT_BE_DELETED | Wallet cannot be deleted. Please check and try again. |
| WALLET_MAX_NUMBER | Maximum number of wallets created. |
| WALLET_ACCOUNT_NOT_ACTIVE | Inactive account data. Please check and try again. |
| WALLET_ACCOUNT_NOT_FOUND | Account data not found. Please verify your registration and try again. |
| WALLET_ACCOUNT_HAS_BALANCE | Wallet account balance has some value. Please verify your wallet and try again. |
| DATA_INCONSISTENT | Incorrect information. Please check and try again. |
| NOT_ENOUGH_AVAILABLE_LIMIT | Insufficient available limit. |
| OPERATION_BETWEEN_SAME_WALLET |  Operation performed between the same wallet. Please check and try again. |
| OPERATION_INVALID_STATE | Invalid Operation. Please check and try again. |
| OPERATION_NOT_FOUND | Operation not found. Please check and try again. |
| OPERATION_NOT_REVERSIBLE | The operation is not reversible. |
| TRANSACTION_TYPE_NOT_ACTIVE | This transaction type is not active. Please check and try again. |
| TRANSACTION_TYPE_TAG_NOT_FOUND | This transaction type is not allowed. Please check and try again. |
| VALUE_IS_ABOVE_MAX_AMOUNT_LIMIT | The value is above the maximum limit. Please check and try again. |
| VALUE_IS_ABOVE_MIN_AMOUNT_LIMIT | The value is below the minimum threshold. Please check and try again. |
| ORDER_QUANTITY_CURRENCY_NOT_FOUND | Currency not found. Please check and try again. |
| DECODED_PIX_KEY_OWNED_BY_USER | Unable to make payment for a key owned by yourself. Please check and try again. |
| MAX_DECODED_PIX_KEY_REQUESTS_PER_DAY_REACHED | Maximum number of payments for keys not made has been reached. |
| MAX_NUMBER_OF_KEYS_REACHED | Maximum number of keys has been reached. |
| PSP_ERROR | This operation could not be performed. Please try again later. |
| PSP_OFFLINE | This operation could not be performed. Please try again later. |
| ADDRESS_NOT_FOUND | Address not found. Please check and try again. |
| DECODED_QR_CODE_EXPIRED | Unable to make payment, QR Code is expired. |
| KEY_OPERATION_TIME_OVERFLOW | Operation not allowed at this time. |
| INVALID_FORMAT_KEY_PSP | Please check the data format and try again. |
| PIX_KEY_NOT_FOUND_PSP | Pix key not found. Please check and try again. |
| NIGHTTIME_INTERVAL_INVALID | Invalid night time interval. |
| DAILY_LIMIT_EXCEEDED | Daily limit exceeded. |
| MONTHLY_LIMIT_EXCEEDED | Monthly limit exceeded. |
| YEARLY_LIMIT_EXCEEDED | Yearly limit exceeded. |
| NIGHTLY_LIMIT_EXCEEDED | Nightly limit exceeded. |
| REPLAY | Our fault, but your operation may have completed! Please check your statement before trying again. |
| MAX_AMOUNT_LIMIT_EXCEEDED | Limit per operation exceeded. |
| MAX_AMOUNT_NIGHTLY_LIMIT_EXCEEDED | Nightly limit per operation exceeded. |
| MIN_AMOUNT_LIMIT_BELOW | Minimum limit not reached. |
| MIN_AMOUNT_NIGHTLY_LIMIT_BELOW | Minimum night limit not reached. |
| VALUE_IS_ABOVE_MAX_AMOUNT_NIGHTLY_LIMIT | The value is above the maximum night limit. Please check and try again. |
| VALUE_IS_UNDER_MIN_AMOUNT_NIGHTLY_LIMIT | The value is below the minimum night limit. Please check and try again. |
| USER_LIMIT_NOT_FOUND | The limit was not found. |
| QUOTATION_AMOUNT_UNDER_MIN_AMOUNT | Amount is below the minimum threshold. |
| STREAM_QUOTATION_NOT_FOUND | Currency for quote was not found. |
| QUOTATION_NOT_FOUND | Quote was not found. Please try again. |
| SPREAD_NOT_FOUND | Spread was not found. Please try again. |
| TAX_NOT_FOUND | Tax was not found. Please try again. |
| PIX_KEY_NOT_FOUND | Pix key was not found. Please try again. |
| PIX_KEY_DECODE_LIMIT_NOT_FOUND | Pix key decode limit was not found. |
| CONVERSION_CREDIT_BALANCE_OVERFLOW | There is no credit available to perform this operation. |
| QR_CODE_DYNAMIC_NOT_FOUND | QR Code was not found. Please try again. |
| BANKING_TED_WEEKDAY_INVALID | Unable to make ted. This operation is not permitted in weekends. |
| BANKING_TED_HOLIDAY_INVALID | Unable to make ted. This operation is not permitted in holidays. |
| BANKING_TED_INTERVAL_INVALID | Unable to make ted. This operation is outside permitted time. |
| BANK_TED_NOT_FOUND | Bank not found. |
| USER_WALLET_ALREADY_EXISTS | User is already associated to the wallet. Please check your data and try again. |
| USER_WALLET_NOT_FOUND | User's association with the wallet is not found. Please check your data and try again. |
| WALLET_ACCOUNTS_NOT_FOUND | No account details found. Please verify your registration and try again. |

## Validation Erros

Nossa API também possui erros de validação de dados. A seguir, apresentamos uma tabela com os tipos de erro e suas respectivas descrições.

| Validation Status | Description |
| --- | --- |
| DEFAULT | Unable to process your order. Please try again. |
| IS_UUID | The {property} value must be an UUID. |
| IS_ENUM | The value {value} is not accepted in param {property}. |
| IS_BOOLEAN | The value {property} should be a boolean. |
| IS_STRING | The value {property} should be a string. |
| LENGTH | The {property} must be equal {value}. |
| MAX_LENGTH | The {constraints.maxLength}. |
| MIN_LENGTH | The {constraints.minLength}. |
| IS_NOT_EMPTY | The param value {property} cannot be empty. |
| IS_POSITIVE | The {property} must be a positive value. |
| IS_INT | The {property} must be a integer value. |
| IS_ARRAY | The {property} must be um array. |
| IS_DATE_STRING | The {property} must be a string date. |
| IS_NUMBER | The {property} must be a number. |
| IS_DATE | The field {property} must be a date. |
| EQUALS | The param {property} is not the same as expected. |
| IS_DEFINED | The field {property} was not informed. |
| ARRAY_MIN_SIZE | The {property} must be longer than or equal {constraints.minLength}. |
| IS_OBJECT | The field {property} must be an object. |
| MATCHES | The param value {property} wasn't informed according to expected mask. |
| IS_EMAIL | The param value {property} must be an e-mail. |
| IS_PHONE_NUMBER | The param value {property} must be a phone number. |
| IS_NUMBER_STRING | The param value {property} should contain only numbers. |
| IS_CPF_OR_CNPJ | The param value {property} is not a valid document (CPF or CNPJ). |
| IS_LENGTH | The size of the field {property} wasn't the expected. |
| IS_ISO_STRING_DATE_FORMAT | The field {property} has the wrong format. |
| IS_DATE_BEFORE_THAN | The  field {property} must be before the end date. |
| IS_DATE_AFTER_THAN | The field {property} must be after the start date. |
| IS_DATE_AFTER_THAN_NOW | The field {property} must be after now date. |
| IS_IN | The {property} value is not valid. |
