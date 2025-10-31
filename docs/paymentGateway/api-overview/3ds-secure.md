# 3DS Secure 

## What is 3DS Secure?

**3DS Secure (3D Secure)** is an authentication protocol designed to add an extra layer of security to online credit and debit card transactions. The name "3D" refers to the three domains involved in the authentication process:

1. **Acquirer Domain**: The merchant's payment processor
2. **Issuer Domain**: The cardholder's bank
3. **Interoperability Domain**: The payment networks (Visa, Mastercard, etc.)

3DS Secure protects both merchants and cardholders by requiring additional authentication during online purchases. When a transaction requires 3DS authentication, the cardholder is redirected to their bank's authentication page where they must verify their identity (typically through a password, SMS code, or biometric authentication).

This protocol helps reduce fraud and chargebacks, as authenticated transactions shift liability from the merchant to the issuer, providing better protection for all parties involved in the payment process.

**Important:** 3DS Secure can be used for both **credit** and **debit** card transactions. For **Brazil**, the use of 3DS is **mandatory for debit card transactions** as required by Brazilian payment.

---

This page contains an **example project** that demonstrates how to implement 3DS Secure integration in your application. Below you will find details about this project and how to use it.

## What is this project?

This project is an example application and development environment for integration with **3DS Secure (3D Secure)**, an online payment authentication protocol that adds an extra layer of security to credit and debit card transactions.

The project provides:
- **Proxy server** for communication with the gateway's 3DS APIs (created to avoid CORS errors)
- **REST endpoints** to manage the 3DS authentication flow
- **JavaScript services** ready for frontend integration
- **Example web interface** for testing and validation

**Note:** The endpoints can also be called directly on the 3DS gateway (without proxy), if it's not necessary to avoid CORS or if the calls are made from the backend.

## What is it for?

To perform a 3DS integration in your system, you will need to:

1. **Download and run this project** to have the necessary endpoints running
2. **Implement in your frontend** the sequence of endpoints that make up the 3DS flow
3. **Configure ngrok** to expose the application publicly (required to receive gateway callbacks)

## Integration Flow

### Sequence of Endpoints that should be implemented in the frontend:

1. **Get Transactional Token**
   - Call the ZroBank API to get an authentication token

2. **POST `{baseUrl}/v2/threeds-authentication-setup`**
   - Starts the 3DS authentication process
   - Receives device data collection information
   - `POST {BASE_URL}/v2/threeds-authentication-setup`

3. **Device Data Collection**
   - Performs automatic collection via iframe/form as per the setup response

4. **POST `{baseUrl}/v2/threeds-authentication`**
   - Sends collected data for authentication
   - May return:
     - `ACCEPTED`: Authentication approved without challenge
     - `WAITING_3DS_AUTHENTICATION`: Requires cardholder challenge
     - `POST {BASE_URL}/v2/threeds-authentication`

5. **POST `{baseUrl}/v2/threeds-challenge-result`** (if necessary)
   - Only if step 4 returned `WAITING_3DS_AUTHENTICATION`
   - Called after the cardholder completes the challenge (e.g., enters bank password)
   - Receives return data via `GET /api/3ds-return`
   - `POST {BASE_URL}/v2/threeds-challenge-result`

### Support Endpoints:

- **GET `/api/3ds-return`**: Queries data returned from the 3DS gateway after challenge
- **POST `/api/3ds-return`**: Endpoint that receives the gateway callback (do not call directly)
- **DELETE `/api/3ds-return`**: Clears stored return data

## How to get started?

### Step 1: Download the Project

Download the project using the below:

**Download Link:**
- [Download Project ZIP](https://zro-image-temp.s3.us-east-2.amazonaws.com/acquirer-3ds-hml-doc.zip) - Download the project as a ZIP file

After downloading, extract the files (if downloaded as ZIP) to your local environment.

### Step 2: Run the Project

Follow the detailed instructions in the **README.md** file inside the project, which contains:
- Dependency installation
- Environment variable configuration
- ngrok installation and configuration
- How to start the server

### Examples

## Payload Example

```json
{
    "cardInfo":{
        "cardNumber":"4000000000002503",
        "cardExpirationDate":"122025",
        "cardHolderName":"JOHN SILVA SANTOS",
        "type":"DEBIT"
    },
    "billTo":{
        "firstName":"John",
        "lastName":"Silva Santos",
        "address1":"Rua das Flores, 123, Apt 45",
        "locality":"Recife",
        "administrativeArea":"PE",
        "country":"BR",
        "postalCode":"52021030",
        "email":"john.silva.santos@example.com",
        "phoneNumber":"+5581987654321"
    },
    "amountDetails":{
        "currency":"BRL",
        "totalAmount":149.99
    }
}
```

## Authentication Response

After completing the flow, you will receive 3DS data in the format:

```json
{
  "xid": "string",
  "cavv": "string",
  "secure_version": "2.0",
  "directory_server_transaction_id": "string",
  "three_ds_server_transaction_id": "string"
}
```

This data should be sent along with the payment authorization in the gateway.

## Project Structure

The project contains:

- **`server.js`**: Express server with proxy endpoints and 3DS return management
- **`public/js/3ds-service.js`**: JavaScript class that implements all 3DS flow logic
- **`public/js/zrobank-token-service.js`**: Service for transactional token acquisition
- **`public/index.html`**: Example interface for testing
- **`public/settings.html`**: Variable configuration page
- **`.env`**: Environment variable configuration file (create manually)

## Main Files for Integration

If you want to integrate into your frontend without using the example interface:

1. **`public/js/3ds-service.js`** - Main 3DS logic
2. **`public/js/zrobank-token-service.js`** - Token acquisition
3. **`public/js/config.js`** - Helper functions

You can adapt these files as needed or use them only as a reference to implement in your own code.

## Reference Documentation

Inside the project you will find:

- **README.md**: Complete installation and execution guide
- **API_ENDPOINTS.md**: Detailed documentation of all endpoints
- **ENV_VARIABLES.md**: Description of required environment variables
- **README-Docker.md**: Docker deployment instructions

## Using 3DS Results in Payment

After completing the 3DS authentication flow, you will receive authentication data that must be included in the payment authorization request.

### Payin Endpoint

The 3DS authentication result should be sent to the payin endpoint when creating a payment:

**Endpoint:**
https://docs.zrobank.io/paymentGateway/endpoints/v-1-create-payin-rest-controller-execute-v-1


**Important:** Include the 3DS authentication data (xid, cavv, secure_version, directory_server_transaction_id, three_ds_server_transaction_id) in the payment payload when calling this endpoint.

**Example:**
The 3DS response data should be included in the payment request body along with the other payment information:

```json
{
  // ... other payment fields ...
  "threeDSData": {
    "xid": "string",
    "cavv": "string",
    "secure_version": "2.0",
    "directory_server_transaction_id": "string",
    "three_ds_server_transaction_id": "string"
  }
}
```

This ensures that the payment gateway validates the transaction with the authentication results from the 3DS Secure flow.

---

**Note**: This project is intended for homologation (HML) environment. For production, adjust URLs and configurations as needed.

**Note 2**: Contact the team to provide the necessary URLs and credentials.

---

## Questions?

If you have questions about:
- **Installation and configuration**: Consult the project's README.md
- **Integration and implementation**: Contact the responsible team
- **Technical problems**: Check the troubleshooting section in README.md or contact support
