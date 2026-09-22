# Changelog

Contract changes of the BaaS API, one section per platform release, grouped by endpoint. Entries are generated from the OpenAPI specification of each release, so only changes visible in the API contract are listed.

⚠️ marks changes that may require action on your side, such as new enum values in responses or removed fields.

## v1.91.0 (2026-09-15)

### `POST /v1/banking/billet-payments/decode`
- added the required property 'beneficiary_document' to the response with the '201' status

### `GET /v1/pix/compliance/infraction-notifications`
- endpoint added

### `GET /v1/pix/compliance/infraction-notifications/{id}`
- endpoint added

### `GET /v1/pix/fund-recovery-requests`
- endpoint added

### `POST /v1/pix/fund-recovery-requests`
- endpoint added

### `GET /v1/pix/fund-recovery-requests/{id}`
- endpoint added

### `DELETE /v1/pix/fund-recovery-requests/{id}/cancel`
- endpoint added

### `PATCH /v1/pix/fund-recovery-requests/{id}/files/upload`
- endpoint added

### `GET /v1/reports/client-activity/{client_id}`
- endpoint added

### `GET /v1/storage/files`
- ⚠️ **Attention:** added the new 'ONBOARDING_LIVENESS_VIDEOS' enum value to the 'data/items/type' response property for the response status '200'

### `POST /v1/storage/upload`
- added the new 'ONBOARDING_LIVENESS_VIDEOS' enum value to the request property 'file_type'

### `GET /v1/users/onboardings/with-steps`
- ⚠️ **Attention:** added the new 'LIVENESS' enum value to the 'data/items/steps/items/name' response property for the response status '200'

### `POST /v2/banking/billet-payments/decode`
- added the required property 'beneficiary_document' to the response with the '201' status

### `POST /v2/users/onboardings/{id}/legal-representatives/{legal_representative_id}/liveness/video`
- endpoint added

### `GET /v2/users/onboardings/{id}/legal-representatives/liveness`
- endpoint added

### `GET /v2/users/onboardings/{id}/liveness`
- endpoint added

### `POST /v2/users/onboardings/{id}/liveness/video`
- endpoint added
