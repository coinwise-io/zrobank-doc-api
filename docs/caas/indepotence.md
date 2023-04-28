# Indepotence

Indepotência é um conceito fundamental em APIs, referente à garantia de que uma mesma requisição pode ser feita diversas vezes sem efeitos colaterais. Em nossa API, a ideia de indepotência é levada em consideração em todas as requisições, e ela é implementada automaticamente para garantir a consistência dos dados.

Quando uma requisição é feita em nossa API, nossa arquitetura automaticamente encaminha essa requisição para o Kafka, um sistema de mensagens distribuído que nos permite trabalhar com dados em tempo real e garantir a integridade dos mesmos. Com isso, podemos garantir que cada requisição seja tratada de forma independente e com total segurança, sem efeitos colaterais ou inconsistências nos dados.