# Pagination

Todos os nossos endpoints de busca que possam retornar uma grande escala de dados possuem paginação.

Com a paginação, em vez de retornar todos os dados de uma só vez, os dados de resposta são divididos em páginas. A configuração das páginas é definida na requisição, a partir dos parâmetros listados abaixo.

| Parameter       | Description                            |
| --------------- | -------------------------------------- |
| page  | Page number. **Default value : 1** |
| size  | Page limit size. Max size is 100. **Default value : 20** |
| sort  | Page sort attribute. The response data will be ordered by this attribute. |
| order | Page order. Available values : asc, desc. **Default value : asc**  |

> Observação: todos estes parâmetros mencionados acima são opcionais. Caso não definidos, seus valores DEFAULT serão considerados.

Exemplo de response com paginação, onde `page = 1`, `size = 5`, `sort = id`, `order = asc`:  

```
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
