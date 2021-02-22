
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





function tablaClasificacion(data){

//Obtengo referencia del elemento tbody

var tbody = document.getElementById("tablebody")


//Creo filas (tr) y las imagenes que irán en cada fila. Por ultimo meto las filas en tbody

for (var i = 0; i < data.standings[0].table.length; i++) {
    var fila = document.createElement("tr");

    var img1 = document.createElement("img");
    img1.src = data.standings[0].table[i].team.crestUrl;
    img1.style.width = "40px"



    // Creo cada celda con la información que deben contener

    for (var j = 0; j < 11; j++) {

        var celdaTotales = document.createElement("td");
        var textoCeldaTotales = "";
        //if (j==2 || j==9){
        //var celdaEncasa = document.createElement("td");
        //var celdaFuera = document.createElement("td");
        //var textoCeldaEncasa = "";
        //var textoCeldaFuera = "";

        if (j==0){
            textoCeldaTotales = document.createTextNode(data.standings[0].table[i].position)
            celdaTotales.appendChild(textoCeldaTotales);
        }
        if (j==1){
            celdaTotales.append(img1)
            textoCeldaTotales = document.createTextNode(data.standings[0].table[i].team.name)
            celdaTotales.appendChild(textoCeldaTotales);
        }
        if (j==2){
            textoCeldaTotales = document.createTextNode(data.standings[0].table[i].playedGames)
            celdaTotales.appendChild(textoCeldaTotales);
        }
        if (j==3){
            textoCeldaTotales = document.createTextNode(data.standings[0].table[i].playedGames - data.standings[0].table[i].lost)
            celdaTotales.append(textoCeldaTotales)
        }
        if (j==4){
            textoCeldaTotales = document.createTextNode(data.standings[0].table[i].draw)
            celdaTotales.append(textoCeldaTotales)
        }
        if (j==5){
            textoCeldaTotales = document.createTextNode(data.standings[0].table[i].lost)
            celdaTotales.append(textoCeldaTotales)
        }
        if (j==6){
            textoCeldaTotales = document.createTextNode(data.standings[0].table[i].goalsFor)
            celdaTotales.append(textoCeldaTotales)
        }
        if (j==7){
            textoCeldaTotales = document.createTextNode(data.standings[0].table[i].goalsAgainst)
            celdaTotales.append(textoCeldaTotales)
        }
        if (j==8){
            textoCeldaTotales = document.createTextNode(data.standings[0].table[i].goalDifference)
            celdaTotales.append(textoCeldaTotales)
        }
        if (j==9){
            textoCeldaTotales = document.createTextNode(data.standings[0].table[i].points)
            celdaTotales.append(textoCeldaTotales)
        }
        if (j==10){
            var d=0;
            for (m=0;m<5;m++){

                var icon = document.createElement("img");
                
                if (data.standings[0].table[i].form[d]=="D"){
                    icon.src="../img/icon_grey.svg";
                    icon.className = "icons";
                }
                if (data.standings[0].table[i].form[d]=="W"){
                    icon.src="../img/icon_green.svg";
                    icon.className = "icons"
                }
                if (data.standings[0].table[i].form[d]=="L"){
                    icon.src="../img/icon_red.svg";
                    icon.className = "icons"
                }
                d = d+2;
                celdaTotales.append(icon);
                celdaTotales.classList.add("iconsdiv");
            }
            
        }
        fila.appendChild(celdaTotales);
    }

    tbody.append(fila);
}

}

