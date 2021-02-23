//FUNCIÓN LLAMADA A LA API

function getDataFetch(){
    displayLoader();
    const url = "https://api.football-data.org/v2/competitions/2014/matches";
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
        estadistica(data);
    })
}


//FUNCIÓN PARA OCULTAR LOADER
function displayLoader(){
    const loaderdiv = document.getElementById("loaderimg");
    const loaderdiv1 = document.getElementById("loaderimg1");
    loaderdiv.classList.add("display");
    loaderdiv1.classList.add("display");
    //timeout???
}
//FUNCIÓN PARA MOSTRAR LOADER
function hideLoader(){
    const loaderdiv = document.getElementById("loaderimg");
    const loaderdiv1 = document.getElementById("loaderimg1");
    loaderdiv.classList.remove("display");
    loaderdiv1.classList.remove("display");
}



//LLAMADA DE API AL CARGAR EL HTML
document.addEventListener("DOMContentLoaded", function() {
    getDataFetch();
  });



//FUNCIÓN PARA LAS ESTADÍSTICAS A PARTIR DEL DOCUMENTO MATCHES

function estadistica(data){

//CREO UNA ARRAY DE OJETOS CON LA INFO DE CADA EQUIPO MOSTRADO EN JSON MATCHES, EVITANDO LOS PARTIDOS SIN JUGAR,

var array = [];

for (i=0;i<data.matches.length;i++){

    var hometeaminArray = array.find(equipo => equipo["id"] == data.matches[i].homeTeam.id);
    var awayteaminArray = array.find(equipo => equipo["id"] == data.matches[i].awayTeam.id);

    if (data.matches[i].status == "FINISHED"){
        if (hometeaminArray == undefined){
            array.push({
                id: data.matches[i].homeTeam.id, 
                name: data.matches[i].homeTeam.name, 
                goalshomeTeam: data.matches[i].score.fullTime.homeTeam, 
                goalsFvisitTeam: 0, 
                goalsCvisitTeam: 0, 
                matches: 1
            })
        }
        else {
            hometeaminArray.goalshomeTeam += data.matches[i].score.fullTime.homeTeam;
            hometeaminArray.matches ++;
        }


        if (awayteaminArray == undefined){
            array.push({
                id:data.matches[i].awayTeam.id, 
                name:data.matches[i].awayTeam.name, 
                goalshomeTeam:0, 
                goalsFvisitTeam:data.matches[i].score.fullTime.awayTeam, 
                goalsCvisitTeam:data.matches[i].score.fullTime.homeTeam, 
                matches:1
            })
        }
        else{
            awayteaminArray.goalsFvisitTeam += data.matches[i].score.fullTime.awayTeam;
            awayteaminArray.goalsCvisitTeam += data.matches[i].score.fullTime.homeTeam;
            awayteaminArray.matches ++;
        }
    }
}

for (j=0;j<array.length;j++){
    var goalsTotal = array[j].goalshomeTeam + array[j].goalsFvisitTeam;
    array[j].goalsTotal = goalsTotal;
    var average = goalsTotal / array[j].matches;
    array[j].avg = average;
}



//CREO DOS ARRAYS NUEVAS ORDENANDO UNA DE MAYOR A MENOR AVG Y OTRA DE MENOR A MAYOR GOLES EN CONTRA COMO VISITANTE

var arrayaverage = Array.from(array);    //DEBO "COPIAR" LA ARRAY ANTES DE ORDENARLA MEDIANTE Array.from PARA QUE NO AFECTE A LA ORIGINAL....  <-------
arrayaverage.sort(function(a, b){return b.avg-a.avg});


var arraygolesCvisit = Array.from(array);
arraygolesCvisit.sort(function(a, b){return a.goalsCvisitTeam-b.goalsCvisitTeam});



//EJECUTO LA FUNCION PARA CREAR LAS TABLAS CON LAS ARRAY ORDENADAS

statisticsTable(arrayaverage, arraygolesCvisit)

//FIN ESTADISTICA()
}




//CREO LAS TABLAS PARA MOSTRAR LOS 5 PRIMEROS DE ARRAYAVERAGE Y ARRAYGOLESCVISIT

function statisticsTable(orderedArrayAverage, orderedArrayGolesCVisit){

var tbodyaverage = document.getElementById("tablebodyestadistica1");
var tbodygoalsCvisit = document.getElementById("tablebodyestadistica2")


for (r=0;r<5;r++){
    var filaaverage = document.createElement("tr");
    var filagoalsCvisit = document.createElement("tr");

    var imgaverage = document.createElement("img");
    imgaverage.src = "https://crests.football-data.org/" + orderedArrayAverage[r].id  + ".svg";
    imgaverage.style.width = "30px"
    var imggoalsCvisit = document.createElement("img");
    imggoalsCvisit.src = "https://crests.football-data.org/" + orderedArrayGolesCVisit[r].id  + ".svg";
    imggoalsCvisit.style.width = "30px"


    for (t=0;t<4;t++){
        var celdaaverage = document.createElement("td");
        var celdagoalsCvisit = document.createElement("td");
        var textoCeldaaverage = "";
        var textoCeldagoalsCvisit = "";

        if (t==0){
            textoCeldaaverage = document.createTextNode(r+1);
            textoCeldagoalsCvisit = document.createTextNode(r+1);
            celdaaverage.appendChild(textoCeldaaverage);
            celdagoalsCvisit.appendChild(textoCeldagoalsCvisit);
        }
        if (t==1){
            textoCeldaaverage = document.createTextNode(orderedArrayAverage[r].name);
            textoCeldagoalsCvisit = document.createTextNode(orderedArrayGolesCVisit[r].name);
            celdaaverage.appendChild(imgaverage);
            celdaaverage.appendChild(textoCeldaaverage);
            celdagoalsCvisit.appendChild(imggoalsCvisit);
            celdagoalsCvisit.appendChild(textoCeldagoalsCvisit);
        }
        if (t==2){
            textoCeldaaverage = document.createTextNode((orderedArrayAverage[r].avg).toFixed(2));
            textoCeldagoalsCvisit = document.createTextNode(orderedArrayGolesCVisit[r].goalsCvisitTeam);
            celdaaverage.appendChild(textoCeldaaverage);
            celdagoalsCvisit.appendChild(textoCeldagoalsCvisit);
        }
        if (t==3){
            textoCeldaaverage = document.createTextNode(orderedArrayAverage[r].matches);
            textoCeldagoalsCvisit = document.createTextNode(orderedArrayGolesCVisit[r].matches);
            celdaaverage.appendChild(textoCeldaaverage);
            celdagoalsCvisit.appendChild(textoCeldagoalsCvisit);
        }
        filaaverage.appendChild(celdaaverage);
        filagoalsCvisit.appendChild(celdagoalsCvisit);
    }

    tbodyaverage.appendChild(filaaverage);
    tbodygoalsCvisit.appendChild(filagoalsCvisit);
}

//FIN STATISTICSTABLE()
}

