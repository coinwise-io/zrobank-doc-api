# Idempotence

A indepotência é um conceito fundamental em nossa API, pois garante que uma mesma requisição possa ser feita várias vezes sem causar efeitos colaterais indesejados, mantendo a consistência dos dados.

Ao fazer uma requisição em nossa API, ela é encaminhada automaticamente para o Kafka, um sistema de mensagens distribuído que nos permite trabalhar com dados em tempo real e garantir a integridade dos mesmos. Dessa forma, podemos assegurar que cada requisição seja tratada de forma independente e com total segurança, sem causar efeitos colaterais ou inconsistências nos dados.


