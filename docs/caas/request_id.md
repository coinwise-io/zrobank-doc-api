# Request ID (Nonce)

Request ID, nomeado em nossa API como **Nonce**, é um identificador único, do tipo UUID (versão 4), associado a cada nova requisição. 

Cada requisição deve possuir um parâmetro `nonce` **único**, o qual é utilizado para rastrear e correlacionar todas as atividades relacionadas a esta determinada requisição, desde o momento em que ela é recebida pela API, até a sua resposta.