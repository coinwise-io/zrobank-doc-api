# Rate Limiting

Nós utilizamos limitação de taxa para proteger a estabilidade da nossa API, garantindo que ela não seja sobrecarregada com um grande número de solicitações. Para isso, aplicamos um limitador de taxa geral para todos os endpoints, limitando o número de solicitações por unidade de tempo.  Nosso limitador de taxa permite até *insira aqui o valor* solicitações por minuto.

Além disso, alguns endpoints podem exigir uma limitação de taxa mais específica, que também é definida.
