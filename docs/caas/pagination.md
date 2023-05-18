# Pagination

All of our search endpoints that may return a large scale of data have pagination.

With pagination, instead of returning all data at once, the response data is divided into pages. The page configuration is defined in the request, using the parameters listed below.

| Parameter       | Description                            |
| --------------- | -------------------------------------- |
| page  | Page number. **Default value : 1** |
| size  | Page limit size. Max size is 100. **Default value : 20** |
| sort  | Page sort attribute. The response data will be ordered by this attribute. |
| order | Page order. Available values : asc, desc. **Default value : asc**  |

:::note all of the parameters listed above are optional. If not defined, their DEFAULT values will be considered.
:::

```json title="Example of response with pagination where: page = 1, size = 5, sort = id, order = asc"
 {
  "success": true,
  "data": {
    "page": 1,
    "page_size": 5,
    "page_total": 3,
    "total": 14,
    "data": [
      {
        "id": 1,
        "title": "Real",
        "symbol": "BRL",
        "symbol_align": "left",
        "decimal": 2,
        "tag": "REAL",
        "state": "active"
      },
      {
        "id": 2,
        "title": "Bitcoin",
        "symbol": "BTC",
        "symbol_align": "right",
        "decimal": 8,
        "tag": "BTC",
        "state": "active"
      },
      {
        "id": 3,
        "title": "Dólar",
        "symbol": "USD",
        "symbol_align": "left",
        "decimal": 2,
        "tag": "USD",
        "state": "active"
      },
      {
        "id": 4,
        "title": "Euro",
        "symbol": "EUR",
        "symbol_align": "left",
        "decimal": 2,
        "tag": "EUR",
        "state": "active"
      },
      {
        "id": 5,
        "title": "Ether",
        "symbol": "ETH",
        "symbol_align": "right",
        "decimal": 8,
        "tag": "ETH",
        "state": "active"
      }
    ]
  },
  "error": null
}
```
