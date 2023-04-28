# Pagination

Para garantir que solicitações consecutivas de páginas não sejam afetadas por objetos recém-criados, implementamos a paginação utilizando um cursor. Ao listar um recurso, a resposta incluirá uma lista de objetos que pode ter um tamanho máximo especificado.   Todos os nossos endpoints de busca geral tem paginação.

| Parameter       | Description                            |
| --------------- | -------------------------------------- |
| base_currency   | Quotation currency.                    |
| amount_currency | Quotation currency quote.              |
| amount          | Quotation amount.                      |
| side            | Quotation side. (buy or sell)          |

`curl -X 'GET' \
  'https://api-dev159sw.zrobank.biz:2083/v2/quotations/spot?base_currency=BTC&amount_currency=BRL&amount=1&side=buy' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer 2'`


