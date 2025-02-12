# Webhooks

Webhooks enable real-time communication by automatically sending HTTP requests when events occur. Unlike APIs that
require polling, webhooks push data to a specified URL, improving efficiency. Common uses include payment processing,
notifications, and automation.

The ZroBank API supports webhooks for various events, such as **payment status updates**, **withdraws**, **refunds** and
**KYC** (Know Your
Customer).

## Webhooks URLs

All webhook URLs must be **HTTPS** and publicly accessible. The ZroBank API sends a `POST` request to the URL with a JSON
payload (example below).
These URLs must be provided to ZroBank Integration Team to enable the webhooks.

The URLs we need:

- **Payment Status Update**: URL to receive payment status updates.
- **Withdraw**: URL to receive withdraw events.
- **Refund**: URL to receive refund events.
- **KYC**: URL to receive KYC events.
- **Returned Withdraw**: URL to receive returned withdraw events.

All URLs can be the same or different, depending on your requirements.

## Webhook Security

### OAuth2 Client Credentials Flow

If all the URLs provided are an authenticated URL, we support the **OAuth2 Client Credentials** flow for authentication.

- You need to provide the `client_id`, `client_secret` and `token endpoint` (commonly `/oauth/token`) to the ZroBank
  Integration Team.
- We will call the token endpoint to get the access token.
- All the next webhooks will include the access token in the `Authorization` header.

You can read more about the OAuth2 Client Credentials
flow [here](https://www.oauth.com/oauth2-servers/access-tokens/client-credentials/).

