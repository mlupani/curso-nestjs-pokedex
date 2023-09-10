<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar
```
yarn install
```
3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```

4. Levantar la base de datos
```
docker-compose up -d
```

5. clonar el archivo ´´´.env.template´´´ a ´´´.env´´´

6. LLenar las variables de entorno definidas en el ´´´.env´´´

7. Levantar la app en modo development
```
yarn start:dev
```

8. Insertar pokemons seed
```
http://localhost:3000/api/v2/seed
```

## Stack usado
* MongoDB
* Nest