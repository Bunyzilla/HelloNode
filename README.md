# HelloNode
# Repositorios administrados

Practica para crear un servidor en node.js con un Hola Mundo utilizando HTTP e implementado en Dockerfile

## Getting Started

Este archivo es creado para entender los conceptos de servidor en node.js

### Prerequisites

Se requerira tener instalado git en la computadora para el caso de linux ejecutar lo siguiente

    sudo apt update
    sudo apt install git
    sudo apt-get install docker-ce

Se requieren conocimientos de javascript y node


## Running the tests

Los siguientes comandos sirven para la subida de archivos y commits para

    - [GitHub]  
        git init
        git add README.md
        git commit -m "first commit"
        git remote rename origin github-origin
        git remote add origin git@github.com:Bunyzilla/HelloNode.git
        git push -u origin master

El siguiente comando sirve para dockerizar la aplicacion

	-	docker run -p 49160:1111 -d hana/node-web-server-app



## Built With

* [VisualStudioCode](https://code.visualstudio.com/) - Code editing.Redefined.

## Authors

* **Flor Alejandra Legarda Araujo** - *Initial work* - [HelloNode](https://github.com/Bunyzilla/HelloNode)

## License

This project is licensed under the MIT License.
