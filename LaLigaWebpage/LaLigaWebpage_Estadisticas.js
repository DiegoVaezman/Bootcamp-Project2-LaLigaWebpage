console.log(standings)

//------------------PRUEBA-------------------

var arrayprueba = [{id:1, name:"carlos"},{id:2, name:"pablo"},{id:4, name:"antonio"}]

if ((arrayprueba.find(num => num["id"] == 3)) == undefined){
    arrayprueba.push({id:3, name:"pedro"})
}
console.log(arrayprueba)
console.log("despues")
var arrayaordenar = arrayprueba.slice(0)
arrayaordenar.sort(function(a, b){return b.id-a.id});
console.log(arrayaordenar)


//-----------------PRUEBA-------------------

var countaway = 0
var counthome = 0
for (i=0;i<matches.matches.length;i++){
    if (matches.matches[i].status == "FINISHED"){
        if (matches.matches[i].awayTeam.id == 79){
            countaway ++
        }
        if (matches.matches[i].homeTeam.id == 79){
            counthome ++
        }
    }
}
console.log(counthome)
console.log(countaway)
console.log(counthome+countaway)






//CREO UNA ARRAY DE OJETOS CON LA INFO DE CADA EQUIPO MOSTRADO EN JSON MATCHES, EVITANDO LOS PARTIDOS SIN JUGAR,
    var array = [];

    for (i=0;i<matches.matches.length;i++){

        var hometeaminArray = array.find(equipo => equipo["id"] == matches.matches[i].homeTeam.id);
        var awayteaminArray = array.find(equipo => equipo["id"] == matches.matches[i].awayTeam.id);

        if (matches.matches[i].status == "FINISHED"){
            if (hometeaminArray == undefined){
                array.push({
                    id: matches.matches[i].homeTeam.id, 
                    name: matches.matches[i].homeTeam.name, 
                    goalshomeTeam: matches.matches[i].score.fullTime.homeTeam, 
                    goalsFvisitTeam: 0, 
                    goalsCvisitTeam: 0, 
                    matches: 1
                })
            }
            else {
                hometeaminArray.goalshomeTeam += matches.matches[i].score.fullTime.homeTeam;
                hometeaminArray.matches ++;
            }


            if (awayteaminArray == undefined){
                array.push({
                    id:matches.matches[i].awayTeam.id, 
                    name:matches.matches[i].awayTeam.name, 
                    goalshomeTeam:0, 
                    goalsFvisitTeam:matches.matches[i].score.fullTime.awayTeam, 
                    goalsCvisitTeam:matches.matches[i].score.fullTime.homeTeam, 
                    matches:1
                })
            }
            else{
                awayteaminArray.goalsFvisitTeam += matches.matches[i].score.fullTime.awayTeam;
                awayteaminArray.goalsCvisitTeam += matches.matches[i].score.fullTime.homeTeam;
                awayteaminArray.matches ++;
            }
        }
    }

    for (j=0;j<array.length;j++){
        var average = (array[j].goalshomeTeam+array[j].goalsFvisitTeam)/array[j].matches;
        array[j].avg = average;
    }
    console.log(array);


    //CREO DOS ARRAYS NUEVAS ORDENANDO UNA DE MAYOR A MENOR AVG Y OTRA DE MENOR A MAYOR GOLES EN CONTRA COMO VISITANTE

    var arrayaverage = array.slice(0);    //DEBO "COPIAR" LA ARRAY ANTES DE ORDENARLA MEDIANTE SLICE(0) PARA QUE NO AFECTE A LA ORIGINAL....  <-------
    arrayaverage.sort(function(a, b){return b.avg-a.avg});
    console.log(arrayaverage);

    var arraygolesCvisit = array.slice(0);
    arraygolesCvisit.sort(function(a, b){return a.goalsCvisitTeam-b.goalsCvisitTeam});
    console.log(arraygolesCvisit);

