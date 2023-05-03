# Request ID

Request ID, ou identificador de requisição, é um identificador único associado a cada requisição feita a uma API. Ele é usado para rastrear e correlacionar todas as atividades relacionadas a uma determinada requisição, desde o momento em que ela é recebida pela API até a sua resposta.

O Request ID é gerado pela API para cada nova requisição e é incluído na resposta da API como um cabeçalho HTTP. Isso permite que os desenvolvedores possam rastrear todas as requisições feitas a API e correlacioná-las com suas respectivas respostas.

Toda solicitação feita à API ZroBank Caas possui um identificador único associado criado automaticamente quando executado um *Request* e não é retornado.

Um exemplo:

 ```{
  "quotation_id": "abb8e578-6540-4104-8fa9-90a854ab0d1c"
}```