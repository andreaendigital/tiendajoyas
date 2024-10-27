# Tienda Joyas

## Descripción del Proyecto :scroll:

La tienda de joyas My Precious Spa necesita cambiar su aplicación de escritorio por una moderna y dinámica. Para realizar esta tarea, contactó a un desarrollador Full Stack Developer que desarrolle la API REST de una aplicación cliente para satisfacer las necesidades puntuales de sus usuarios de una forma eficiente, mantenible y eficaz. Deberás crear una API REST que permita:

1.- Límite de recursos
2.- Filtro de recursos por campos
3.- Paginación
4.- Ordenamiento
5.- Estructura de datos HATEOAS


## Sobre el proyecto 🚀

### ✨ Requerimientos ✨

👌 1. Crear una ruta GET /joyas que: a. Devuelva la estructura HATEOAS de todas las joyas almacenadas en la base de datos. b. Reciba en la query string los parámetros (2 puntos): i. limits: Limita la cantidad de joyas a devolver por página ii. page: Define la página iii. order_by: Ordena las joyas según el valor de este parámetro, ejemplo: stock_ASC

👌 2. Crear una ruta GET /joyas/filtros que reciba los siguientes parámetros en la query string: (3.5 puntos) a. precio_max: Filtrar las joyas con un precio mayor al valor recibido b. precio_min: Filtrar las joyas con un precio menor al valor recibido. c. categoria: Filtrar las joyas por la categoría d. metal: Filtrar las joyas por la categoría

👌 3. Implementar middlewares para generar informes o reportes de alguna actividad o evento específico que ocurra en cada una de las rutas.

👌 4. Usar try catch para capturar los posibles errores durante una consulta y la lógica de cada ruta creada.

👌 5. Usar las consultas parametrizadas para evitar el SQL Injection en la consulta a la base de datos relacionada con la ruta GET /joyas/filtros


## Visuales :mage_woman:

Se agregan registros a la bbdd:

![Captura de pantalla 2024-10-27 151032](https://github.com/user-attachments/assets/2d4dc4b3-8223-4485-9ebf-8894f00d0db2)

Probando rutas GET por thunderClient:

![Captura de pantalla 2024-10-27 151056](https://github.com/user-attachments/assets/2095802c-8396-4f31-8471-c48eff5f4a5a)

![Captura de pantalla 2024-10-27 151525](https://github.com/user-attachments/assets/5d699ea1-eb12-48d3-a668-3131513fe278)

![Captura de pantalla 2024-10-27 151746](https://github.com/user-attachments/assets/2fc807ad-12fa-480c-a8af-edc59b275ea4)

## Construido Con 🛠️

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - El lenguaje utilizado
- [Node](https://nodejs.org/en)- Node.js
- [Express]([https://nodejs.org/en](https://expressjs.com/es/))- Express
- [Nodemon](https://www.npmjs.com/package/nodemon)- Nodemon
- [PG](https://www.npmjs.com/package/pg)- PG
- [PG-FORMAT](https://www.npmjs.com/package/pg-format)- PG-FORMAT
- [CORS](https://developer.mozilla.org/es/docs/Web/HTTP/CORS)- CORS

## Autora ⚡ 

- **Andrea Rosero** ⚡  - [Andrea Rosero](https://github.com/andreaendigital)


