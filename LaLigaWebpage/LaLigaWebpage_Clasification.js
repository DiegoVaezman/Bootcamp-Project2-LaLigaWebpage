
//FUNCIÓN LLAMADA A LA API

function getDataFetch(){
    displayLoader();
    const url = "https://api.football-data.org/v2/competitions/2014/standings";
    fetch(url, {
        method: "GET",
        headers: {
            "X-Auth-Token": "a9a0dfd78a8244f791860c965905d84f"
        }
    })
    .then(response => {
        if (response.ok);
        return response.json();
    })
    .then(data => {
        hideLoader();
        tablaClasificacion(data);
    })
}


//FUNCIÓN PARA OCULTAR LOADER
function displayLoader(){
    const loaderdiv = document.getElementById("loaderimg");
    loaderdiv.classList.add("display");
    //timeout???
}
//FUNCIÓN PARA MOSTRAR LOADER
function hideLoader(){
    const loaderdiv = document.getElementById("loaderimg");
    loaderdiv.classList.remove("display");
}



//LLAMADA DE API AL CARGAR EL HTML

document.addEventListener("DOMContentLoaded", function() {
    getDataFetch();
  });



//FUNCIÓN QUE CREA LA TABLA DE CLASIFICACION

function tablaClasificacion(data){

    //Obtengo referencia del elemento tbody y creo una array donde recogeré toda la info que necesito. (array de arrays)

    var tbody = document.getElementById("tablebody")
    var arrayInfo = [];

    //Agrego a la array la información que voy a necesitar

    for (var i = 0; i < data.standings[0].table.length; i++) {

        var tableInfo = data.standings[0].table;
        arrayInfo.push([
            tableInfo[i].position,
            [tableInfo[i].team.name, tableInfo[i].team.crestUrl],
            tableInfo[i].playedGames,
            tableInfo[i].playedGames - data.standings[0].table[i].lost,
            tableInfo[i].draw,
            tableInfo[i].lost,
            tableInfo[i].goalsFor,
            tableInfo[i].goalsAgainst,
            tableInfo[i].goalDifference,
            tableInfo[i].points,
            tableInfo[i].form
        ])
    }


    //Coloco la información de la array en celdas dentro de filas y estas dentro de tbody. Agrego img al nombre e iconos de cinco últimos.
    
    for (j=0; j<arrayInfo.length; j++){
        var fila = document.createElement("tr");

        for (h=0; h<arrayInfo[j].length; h++){
            var celdaTotales = document.createElement("td");

            if (h==10){
                var d=0;
                for (m=0;m<5;m++){
                    var icon = document.createElement("img");
                    var ultimos = arrayInfo[j][10];

                    if (ultimos[d]=="D"){
                        icon.src="../img/icon_grey.svg";
                        icon.className = "icons";
                    }
                    if (ultimos[d]=="W"){
                        icon.src="../img/icon_green.svg";
                        icon.className = "icons"
                    }
                    if (ultimos[d]=="L"){
                        icon.src="../img/icon_red.svg";
                        icon.className = "icons"
                    }
                    d = d+2;
                    celdaTotales.append(icon);
                    fila.append(celdaTotales);
                    celdaTotales.classList.add("iconsdiv");
                }
            }
            else if (h==1){
                    var img1 = document.createElement("img");
                    img1.src = arrayInfo[j][1][1];
                    img1.className = "imgTeam";
                    celdaTotales.append(img1);
                    celdaTotales.append(arrayInfo[j][h][0])
                    fila.append(celdaTotales);
            }
            else{
                celdaTotales.append(arrayInfo[j][h]);
                fila.append(celdaTotales);
            }
        }
        tbody.append(fila);
    }
}

