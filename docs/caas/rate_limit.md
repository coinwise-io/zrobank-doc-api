# Rate Limit

Rate limit é uma técnica utilizada em APIs para limitar o número de solicitações que um cliente pode fazer em um determinado período de tempo. Isso é feito para proteger o servidor contra sobrecarga e garantir a disponibilidade e o desempenho da API para todos os usuários.

* Para requisições de `/auth/refresh-token`, nós utilizamos um Rate Limit que permite até 1 solicitação por minuto;

* Para as demais requisições, nós utilizamos um Rate Limit padrão que permite até 400 solicitações por minuto.