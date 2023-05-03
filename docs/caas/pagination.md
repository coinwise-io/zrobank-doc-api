# Pagination

Para garantir que solicitações consecutivas de páginas não sejam afetadas por objetos recém-criados, implementamos a paginação utilizando um cursor. Ao listar um recurso, a resposta incluirá uma lista de objetos que pode ter um tamanho máximo especificado.   Todos os nossos endpoints de busca geral tem paginação.

| Parameter       | Description                            |
| --------------- | -------------------------------------- |
| base_currency   | Quotation currency.                    |
| amount_currency | Quotation currency quote.              |
| amount          | Quotation amount.                      |
| side            | Quotation side. (buy or sell)          |
| page  | Page number. Default value : 1 |
| size  | Page size. Max size is 100. Default value : 20 |
| sort  | Page sort attribute.  |
| order  | Page order. Available values : asc, desc. Default value : asc  |
| operation_id  |  Operation ID for conversion. |
| currency_symbol  |  Currency Symbol for conversion. |
| quotation_id  |  Quotation ID for conversion. |
| conversion_type  | Conversion type.Available values : buy, sell  |
| created_at_start | Created at start for any conversion.  |
| created_at_end  | Created at end for any conversion.   |

Exemplos de saída: 

`curl -X 'GET' \
  'https://api-dev159sw.zrobank.biz:2083/v2/quotations/spot?base_currency=BTC&amount_currency=BRL&amount=1&side=buy' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer 2'`

  ```{
  "page": 1,
  "page_size": 20,
  "page_total": 20,
  "total": 100,
  "data": [
    {
      "id": "f6e2e084-29b9-4935-a059-5473b13033aa",
      "operation_id": "f6e2e084-29b9-4935-a059-5473b13033aa",
      "quotation_id": "f6e2e084-29b9-4935-a059-5473b13033aa",
      "price": 0,
      "side": "buy",
      "quote_amount": 0,
      "quote_currency_symbol": "BRL",
      "quote_currency_decimal": 2,
      "quote_currency_title": "Real",
      "base_amount": 0,
      "base_currency_symbol": "BTC",
      "base_currency_decimal": 8,
      "base_currency_title": "Real",
      "created_at": "2023-05-03T15:20:49.508Z"
    } ```



