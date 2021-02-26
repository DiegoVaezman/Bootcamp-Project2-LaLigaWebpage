# La Liga Webpage v0.1

![Laliga_logo](/img/laliga_logo.png)

La Liga Resultados es una página web de consulta de información de La Liga. Pertenece al segundo proyecto del bootcamp Let's Coder de programación. 


## Descripción Funcional

A través de La Liga Resultados el usuario puede consultar de manera actualizada los resultados de los partidos acontecidos hasta la fecha en la temporada actual, la clasificación de los equipos de fútbol y un ranking de estadísticas de juego de cada equipo. Además incluye un filtro en la visualización de los resultados donde se puede seleccionar la información para un equipo concreto.

Las características principales de la página web son las siguientes:
- Visualización de los resultados de todos los partidos de la temporada(jugados y pendientes) junto con fecha y hora.
- Filtrado de todos los partidos para un equipo concreto y selección de parámetros como partidos ganados, perdidos, empatados y pendientes.
- Visualización de la clasificación actual de la temporada con información acumulada de cada equipo.
- Visualización de dos rankings de cinco mejores equipos según estadísticas de los resultados: Mejor media de goles a favor y Menos goles en contra como visitante.

### Casos de uso

![Casos de uso](docs/laliga_diagram.png)


## Descripción técnica

- addOptions(selectId, array) -> Toma como parámetros la "Id" de input de texto y una array con los equipos de fútbol (teamList(data)). Genera una lista desplegable con todos los equipos para seleccionar en el filtro por equipos.
- teamList(data) -> Toma como parámetro el objeto .json transformado a .js. Devuelve una array con todos los equipos.
- resultTable(data) -> Toma como parámetro el objeto .json transformado a .js. Genera la tabla de resultados según los filtros aplicados.
- filters(data) -> Toma como parámetro "data" de resultTable (función interna). Devuelve una array de objetos "filteredTable" que será usada por resultTable para generar la tabla.

 - tablaClasificacion(data) Toma como parámetro el objeto .json transformado a .js. Genera la tabla de clasificación a partir de los datos de "data".

- estadistica(data) Toma como parámetro el objeto .json transformado a .js. Genera dos arrays (arrayaverage y arraygolesCvisit) con información estadística a partir de "data" que serán usadas para crear las tablas con statisticsTable().
- statisticsTable(orderedArrayAverage, orderedArrayGolesCVisit) -> Toma como parámetros las arrays generadas en estadística(data) y monta las tablas con los datos. Se ejecuta en estadística(data).



## Tecnologías 

- HTML
- CSS (Bootstrap)
- Vanilla JS


## Versiones

v0.1 Proyecto presentado


## TO-DO

- Añadir sección "Equipos" con información de cada equipo.
- Añadir una Home page principal.

