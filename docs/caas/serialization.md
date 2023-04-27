# Serialization

## Snake case

A serialização de dados na API ZroBank requer que todas as solicitações de resposta sigam a convenção de snake case para garantir uma integração adequada com o sistema.

## Data

Tanto as solicitações quanto as respostas da API são regidas pela especificação JSON, na qual os corpos de requisições e respostas são codificados em JSON. Para endpoints de listagem, busca e ação, a presença de um corpo de requisição não é obrigatória. As respostas, por sua vez, são representadas por um único objeto em JSON contendo as seguintes chaves:

| Key name | Values          |
| -------- | ---------------|
| success  | Indica se a solicitação foi bem-sucedida (true) ou não (false).         |
| data   | Fornece os dados da resposta em formato JSON.      |
| error  | Indica o tipo de erro ocorrido na solicitação (por exemplo, "AUTH" para erros de autenticação).         |
| message   | Fornece informações adicionais sobre o erro ocorrido.     |

Um exemplo de saída do json é:

```json<br>
{
"success": false,<br>
"data": null,<br>
"error": "USER",<br>
"message": "Access is denied."<br>
}```