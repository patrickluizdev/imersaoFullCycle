# challengeFullcycleGO

Este é um desafio proposto pela FullCycle para publicar uma imagem no Docker Hub que exiba a mensagem "Full Cycle Rocks!!" utilizando a linguagem Go Lang e conceitos de conteinerização. 
##### OBSERVAÇÃO: A imagem deve ter menos de 2MB e para atingir o objetivo foi utilizando técnicas de multistage builder.

## Instruções para execução

Para executar o programa, siga as seguintes instruções:

1. Rode o comando abaixo para utilizar a imagem e criar um container com o nome "rocks":

    ```
    $ docker run --name rocks jatabara/fullcycle:go
    ```
       
2. Pode-se visualizar novamente o output do programa através do seguinte comando:

    ```
    $ docker logs rocks
    ```


## Repositório da imagem no Docker Hub

A imagem resultante deste desafio está disponível no Docker Hub através do link na imagem ↓:
[![Imagem do Docker Hub](https://github.com/patrickluizdev/challengeFullcycleGO/blob/main/docker.hub.jpg)](https://hub.docker.com/layers/jatabara/fullcycle/go/images/sha256-c73af584b7f469efbf40ab394e3fac42d168dfee0a1dcc31cbd628e9b05108ee?context=repo)


## Repositório do curso
https://github.com/patrickluizdev/integrationSystem

