# Authentication

All API requests require HTTP Bearer Authentication security authentication through an **Access Token**. 

 If your API keys were accidentally shared, please contact our support immediately at 

É importante ressaltar que todas as requisições à API devem ser feitas por HTTPS, já que chamadas realizadas por HTTP simples não serão aceitas. Além disso, é fundamental que as solicitações à API sejam autenticadas, caso contrário elas não serão executadas com sucesso.

## Como gerar um novo Access Token?
Para gerar um novo Access Token, basta fornecer o seu `API ID` e `API Key` no corpo de requisição do endpoint `/auth/signin`. Esta requisição irá retornar um Access Token, que é justamente o Baerer Token necessário para a autenticação das demais requisições. 

> Caso o seu Access Token pare de funcionar, insira-o no endpoint `/auth/refresh-token`, e um novo Access Token válido será retornado.
