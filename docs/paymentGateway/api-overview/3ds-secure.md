# 3DS Secure Integration - Documentation

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

This project eliminates the need to implement all the communication logic with 3DS APIs directly in your backend, providing intermediate endpoints (proxy) that handle complex communication while your frontend only needs to call simpler local APIs.

## About the Proxy API

The proxy API was created to **avoid CORS (Cross-Origin Resource Sharing) errors** when making requests from the frontend directly to the 3DS gateway endpoints. Therefore, an internal server was created that acts as an intermediary between your frontend and the gateway APIs.

### When to use the Proxy

Use the proxy endpoints (`/api/proxy/v2/...`) when:
- You are making direct calls from the frontend (JavaScript in the browser)
- You encounter CORS errors when calling the gateway directly
- You need an intermediate access point

### Calling 3DS Endpoints Directly

If the proxy is not necessary (for example, if you're making calls from the backend or if the gateway allows CORS), you can call the 3DS endpoints directly:

**Proxy Endpoints (with internal server):**
- `POST /api/proxy/v2/threeds-authentication-setup`
- `POST /api/proxy/v2/threeds-authentication`
- `POST /api/proxy/v2/threeds-challenge-result`

**Direct 3DS Endpoints (without proxy):**
- `POST {THREEDS_BASE_URL}/v2/threeds-authentication-setup`
- `POST {THREEDS_BASE_URL}/v2/threeds-authentication`
- `POST {THREEDS_BASE_URL}/v2/threeds-challenge-result`

**How to use:** Simply use the correct `THREEDS_BASE_URL` (configured in `.env` or directly: `https://example.threeds.tech`) and **remove the `/api/proxy` prefix** from the path.

**Example:**
- With proxy: `http://localhost:3030/api/proxy/v2/threeds-authentication-setup`
- Without proxy: `https://example.threeds.tech/v2/threeds-authentication-setup`

## Integration Flow

### Sequence of Endpoints that should be implemented in the frontend:

1. **Get Transactional Token**
   - Call the ZroBank API to get an authentication token

2. **POST `{baseUrl}/v2/threeds-authentication-setup`**
   - Starts the 3DS authentication process
   - Receives device data collection information
   - **With proxy:** `POST /api/proxy/v2/threeds-authentication-setup`
   - **Without proxy:** `POST {THREEDS_BASE_URL}/v2/threeds-authentication-setup`

3. **Device Data Collection**
   - Performs automatic collection via iframe/form as per the setup response

4. **POST `{baseUrl}/v2/threeds-authentication`**
   - Sends collected data for authentication
   - May return:
     - `ACCEPTED`: Authentication approved without challenge
     - `WAITING_3DS_AUTHENTICATION`: Requires cardholder challenge
   - **With proxy:** `POST /api/proxy/v2/threeds-authentication`
   - **Without proxy:** `POST {THREEDS_BASE_URL}/v2/threeds-authentication`

5. **POST `{baseUrl}/v2/threeds-challenge-result`** (if necessary)
   - Only if step 4 returned `WAITING_3DS_AUTHENTICATION`
   - Called after the cardholder completes the challenge (e.g., enters bank password)
   - Receives return data via `GET /api/3ds-return`
   - **With proxy:** `POST /api/proxy/v2/threeds-challenge-result`
   - **Without proxy:** `POST {THREEDS_BASE_URL}/v2/threeds-challenge-result`

### Support Endpoints:

- **GET `/api/3ds-return`**: Queries data returned from the 3DS gateway after challenge
- **POST `/api/3ds-return`**: Endpoint that receives the gateway callback (do not call directly)
- **DELETE `/api/3ds-return`**: Clears stored return data

## How to get started?

### Step 1: Download the Project

Download or clone the project to your local environment.

### Step 2: Run the Project

Follow the detailed instructions in the **README.md** file inside the project, which contains:
- Dependency installation
- Environment variable configuration
- ngrok installation and configuration
- How to start the server

⚠️ **Important**: This project **only works with ngrok** to expose port 3030. It's necessary to configure ngrok before use.

### Step 3: Implement in Frontend

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

## Questions?

If you have questions about:
- **Installation and configuration**: Consult the project's README.md
- **Integration and implementation**: Contact the responsible team
- **Technical problems**: Check the troubleshooting section in README.md or contact support

---

**Note**: This project is intended for homologation (HML) environment. For production, adjust URLs and configurations as needed.

**Note 2**: Contact the team to provide the necessary URLs and credentials.
