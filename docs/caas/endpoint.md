# Endpoint

## Otc | Conversions

### /v2/quotations/spot

To create a new currency conversion, first you need to create a Quotation ID. Enter a new SPOT quotation below and execute to get its ID. This ID is the quotation_id which will be required to create a new currency conversion.

**Método HTTP:** GET.

#### Parâmetros

| Parâmetro | Tipo | Obrigatório | Descrição |
| --- | --- | --- | --- |
| base_currency  | string | sim | Quotation currency. |
| amount_currency  | string | sim | Quotation currency quote. |
| amount  | string | sim | Quotation amount. |
| side  | string | sim | Quotation side.|

#### Corpo da requisição

```json
{
  "id": "f6e2e084-29b9-4935-a059-5473b13033aa",
  "price_buy": 0,
  "price_sell": 0,
  "side": "buy",
  "quote_amount_buy": 0,
  "quote_amount_sell": 0,
  "quote_currency_symbol": "BRL",
  "quote_currency_decimal": 2,
  "quote_currency_title": "Real",
  "base_amount_buy": 0,
  "base_amount_sell": 0,
  "base_currency_symbol": "BTC",
  "base_currency_decimal": 8,
  "base_currency_title": "Real",
  "ttl": "2023-05-05T13:41:52.775Z"
}
```

#### Respostas

| Código de status | Descrição | Corpo da resposta |
| --- | --- | --- |
| 200 | OK | `{ "message": "exemplo." }` |
| 400 | Bad Request | `{ "message": "exemplo." }` |
| 401 | Unauthorized | `{ "message": "exemplo." }` |