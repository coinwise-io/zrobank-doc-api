# Rate Limiting

Nós utilizamos limitação de taxa para proteger a estabilidade da nossa API, garantindo que ela não seja sobrecarregada com um grande número de solicitações. Para isso, aplicamos um limitador de taxa geral para todos os endpoints, limitando o número de solicitações por unidade de tempo.  Nosso limitador de taxa permite até 400 solicitações por minuto.

Além disso, alguns endpoints podem exigir uma limitação de taxa mais específica, que também é definida.

Na nossa API, as variáveis que guardam essa informação é a:

```
{
    
    ttl: configService.get<number>('APP_GLOBAL_THROTTLE_TTL'),
    
    limit: configService.get<number>('APP_GLOBAL_THROTTLE_LIMIT')
}```
``

Onde:
**ttl:** é o time to leave (tempo)
**limit:**  quantidade de vezes que pode ser feita a solicitação.