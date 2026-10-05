@'
# Laboratorio 4 - Contenedores y Despliegue con Docker

Aplicación web en Node.js (Express) empaquetada en un contenedor Docker.

## Endpoints
- `GET /` -> mensaje de bienvenida
- `GET /sumar/:a/:b` -> suma de dos números (JSON)

## Ejecutar localmente
docker build -t miapp-docker:v1 .
docker run -d -p 3000:3000 --name miapp miapp-docker:v1

## Ejecutar desde Docker Hub
docker pull vanesa02/miapp-docker:v1
docker run -d -p 3000:3000 vanesa02/miapp-docker:v1

Imagen: https://hub.docker.com/r/vanesa02/miapp-docker

## Integrantes
- VANESA HERRERA MARULANDA
'@ | Set-Content -Encoding utf8 README.md