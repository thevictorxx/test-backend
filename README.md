# Test Backend

Una aplicación básica de backend construida con Node.js y Express.

## Requisitos Previos

- Node.js instalado en tu sistema.
- Docker (opcional, para despliegue).

## Instalación

1.  Clona este repositorio o descarga los archivos.
2.  Abre una terminal en la carpeta del proyecto.
3.  Instala las dependencias ejecutando:

```bash
npm install
```

## Uso

### Modo Desarrollo

Para ejecutar la aplicación en modo desarrollo con recarga automática (usando `nodemon`):

```bash
npm run dev
```

### Modo Producción Local

Para ejecutar la aplicación normalmente:

```bash
npm start
```

### Docker / Dokploy

El proyecto incluye configuración para Docker.

**Usando Docker Compose:**

```bash
docker-compose up -d --build
```

**Para Dokploy:**

1.  Asegúrate de que tu repositorio tenga el `Dockerfile` y `docker-compose.yml`.
2.  En Dokploy, selecciona el tipo de despliegue "Docker" o "Docker Compose".
3.  Configura las variables de entorno si es necesario.
4.  Despliega.

La aplicación se iniciará en `http://localhost:3000`.

## Endpoints Disponibles

- `GET /`: Retorna un mensaje JSON.
