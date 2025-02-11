import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Pagination

All of our search endpoints that may return a large scale of data have pagination.

With pagination, instead of returning all data at once, the response data is divided into pages. The page configuration is defined in the request, using the parameters listed below.

| Parameter | Description                                                               | Default Value | Maximum Length |
| --------- | ------------------------------------------------------------------------- | ------------- | -------------- |
| page      | Page number.                                                              | 1             | -              |
| size      | Page limit size.                                                          | 20            | 100            |
| sort      | Page sort attribute. The response data will be ordered by this attribute. | -             | -              |
| order     | Page order. Available values: asc, desc.                                  | asc           | -              |

:::note
All of the parameters listed above are optional. If not defined, their DEFAULT values will be considered.
:::

<Tabs>
  <TabItem value="200" label="200">

```json title="/v4/pix/payments?page=1&size=20&order=asc&states=SCHEDULED&states=CONFIRMED"
{
  "success": true,
  "data": {
    "page": 1,
    "page_size": 20,
    "page_total": 45,
    "total": 890,
    "data": [
      {
        "id": "0421a6f3-34dc-41c6-ae07-0178b0dee9b2",
        "operation_id": "6df60b59-0b02-4298-976a-aa85ce8eebf2",
        "type": "PAYMENT_COMPLETED",
        "state": "CONFIRMED",
        "end_to_end_id": null,
        "txid": null,
        "amount": 1299,
        "owner_name": "Zro Bolsão",
        "owner_person_type": "LEGAL_PERSON",
        "owner_document": "08715757001579",
        "owner_bank_name": "ZRO PAGAMENTOS S/A",
        "owner_bank_ispb": "26264220",
        "beneficiary_name": "Ramon teste fullname nome grande grande grande",
        "beneficiary_person_type": "NATURAL_PERSON",
        "beneficiary_document": "***887712**",
        "beneficiary_bank_name": "ZRO PAGAMENTOS S/A",
        "beneficiary_bank_ispb": "26264220",
        "created_at": "2023-05-15T13:20:29.804Z"
      },
      {
        "id": "4b4d61fa-bf5f-4c04-afa3-38c514de5eac",
        "operation_id": "dc115ead-69b2-4c91-8c81-f74bfda5e466",
        "type": "PAYMENT_COMPLETED",
        "state": "CONFIRMED",
        "end_to_end_id": null,
        "txid": null,
        "amount": 1000,
        "owner_name": "Zro Bolsão",
        "owner_person_type": "LEGAL_PERSON",
        "owner_document": "08715757001579",
        "owner_bank_name": "ZRO PAGAMENTOS S/A",
        "owner_bank_ispb": "26264220",
        "beneficiary_name": "Ramon teste fullname nome grande grande grande",
        "beneficiary_person_type": "NATURAL_PERSON",
        "beneficiary_document": "***887712**",
        "beneficiary_bank_name": "ZRO PAGAMENTOS S/A",
        "beneficiary_bank_ispb": "26264220",
        "created_at": "2023-05-18T15:02:07.735Z"
      },
      {
        "id": "fb17b4ed-023a-4abb-8533-793c70d18d83",
        "operation_id": "bde6b02c-6aa8-4606-9a9f-f33dff0dd25b",
        "type": "PAYMENT_COMPLETED",
        "state": "CONFIRMED",
        "end_to_end_id": null,
        "txid": null,
        "amount": 1000,
        "owner_name": "Zro Bolsão",
        "owner_person_type": "LEGAL_PERSON",
        "owner_document": "08715757001579",
        "owner_bank_name": "ZRO PAGAMENTOS S/A",
        "owner_bank_ispb": "26264220",
        "beneficiary_name": "Ramon teste fullname",
        "beneficiary_person_type": "NATURAL_PERSON",
        "beneficiary_document": "***887712**",
        "beneficiary_bank_name": "ZRO PAGAMENTOS S/A",
        "beneficiary_bank_ispb": "26264220",
        "created_at": "2023-05-19T06:28:16.289Z"
      },
      {
        "id": "0e84faf4-55f7-4150-907e-ca6ae6386fa4",
        "operation_id": "b739876f-d37b-4b4f-acc5-51962331b6fe",
        "type": "PAYMENT_COMPLETED",
        "state": "CONFIRMED",
        "end_to_end_id": null,
        "txid": null,
        "amount": 1000,
        "owner_name": "Zro Bolsão",
        "owner_person_type": "LEGAL_PERSON",
        "owner_document": "08715757001579",
        "owner_bank_name": "ZRO PAGAMENTOS S/A",
        "owner_bank_ispb": "26264220",
        "beneficiary_name": "Ramon teste fullname",
        "beneficiary_person_type": "NATURAL_PERSON",
        "beneficiary_document": "***887712**",
        "beneficiary_bank_name": "ZRO PAGAMENTOS S/A",
        "beneficiary_bank_ispb": "26264220",
        "created_at": "2023-05-22T07:49:47.644Z"
      },
      {
        "id": "4760a3db-8e39-495b-97dc-b80bd519f222",
        "operation_id": "80f3ac61-1512-4532-b2f0-2ee25b8529d7",
        "type": "PAYMENT_COMPLETED",
        "state": "CONFIRMED",
        "end_to_end_id": "E26264220202205280741zUcsAJ3wiBK",
        "txid": "5eba42da55414260ae81041a2c523d30",
        "amount": 21765,
        "owner_name": "Maria Testadora da Silva",
        "owner_person_type": "NATURAL_PERSON",
        "owner_document": "***024157**",
        "owner_bank_name": "ZRO PAGAMENTOS S/A",
        "owner_bank_ispb": "26264220",
        "beneficiary_name": "PIX",
        "beneficiary_person_type": "LEGAL_PERSON",
        "beneficiary_document": "11111111000191",
        "beneficiary_bank_name": "PIX TESTER",
        "beneficiary_bank_ispb": "99999008",
        "created_at": "2022-05-28T07:41:33.607Z"
      },
      {
        "id": "3bcdf999-b43d-45c2-8389-3b8c62bff114",
        "operation_id": "1d128a8c-8f77-4bc5-b54c-d1ccc63bd298",
        "type": "PAYMENT_COMPLETED",
        "state": "CONFIRMED",
        "end_to_end_id": null,
        "txid": null,
        "amount": 20,
        "owner_name": "Zro Bolsão",
        "owner_person_type": "LEGAL_PERSON",
        "owner_document": "08715757001579",
        "owner_bank_name": "ZRO PAGAMENTOS S/A",
        "owner_bank_ispb": "26264220",
        "beneficiary_name": "Ramon teste fullname nome grande grande grande",
        "beneficiary_person_type": "NATURAL_PERSON",
        "beneficiary_document": "***887712**",
        "beneficiary_bank_name": "ZRO PAGAMENTOS S/A",
        "beneficiary_bank_ispb": "26264220",
        "created_at": "2023-05-09T20:13:57.710Z"
      },
      {
        "id": "9b135e82-4020-4841-b0d2-5837bd07902d",
        "operation_id": "7e87d874-d275-49d6-8c08-543f40fbde24",
        "type": "PAYMENT_COMPLETED",
        "state": "CONFIRMED",
        "end_to_end_id": null,
        "txid": null,
        "amount": 20,
        "owner_name": "Zro Bolsão",
        "owner_person_type": "LEGAL_PERSON",
        "owner_document": "08715757001579",
        "owner_bank_name": "ZRO PAGAMENTOS S/A",
        "owner_bank_ispb": "26264220",
        "beneficiary_name": "Ramon teste fullname nome grande grande grande",
        "beneficiary_person_type": "NATURAL_PERSON",
        "beneficiary_document": "***887712**",
        "beneficiary_bank_name": "ZRO PAGAMENTOS S/A",
        "beneficiary_bank_ispb": "26264220",
        "created_at": "2023-05-09T20:13:58.223Z"
      },
      {
        "id": "926fe974-d833-419c-ae11-d2d48e17bdff",
        "operation_id": "68cfd14c-edd7-44ab-ab6b-4efeed0aca39",
        "type": "PAYMENT_COMPLETED",
        "state": "CONFIRMED",
        "end_to_end_id": null,
        "txid": "ZvuKVfwtljGH2qmkoFeU15gnz",
        "amount": 1,
        "owner_name": "Maria Testadora da Silva",
        "owner_person_type": "NATURAL_PERSON",
        "owner_document": "***024157**",
        "owner_bank_name": "ZRO PAGAMENTOS S/A",
        "owner_bank_ispb": "26264220",
        "beneficiary_name": "JOAO DA SILVA SAURO",
        "beneficiary_person_type": "NATURAL_PERSON",
        "beneficiary_document": "***594110**",
        "beneficiary_bank_name": "ZRO PAGAMENTOS S/A",
        "beneficiary_bank_ispb": "26264220",
        "created_at": "2022-06-07T00:30:39.204Z"
      }
    ]
  },
  "error": null
}
...
```

  </TabItem>
  <TabItem value="422" label="422">

```json title="/v4/pix/payments?page=1&size=20&order=asc&states=CONFIRMED&payment_date_period_end=2022-01-02"
{
  "success": false,
  "data": null,
  "error": "USER",
  "message": "The field payment_date_period_end must be after the start date.",
  "code": "VALIDATION"
}
```

  </TabItem>
</Tabs>
