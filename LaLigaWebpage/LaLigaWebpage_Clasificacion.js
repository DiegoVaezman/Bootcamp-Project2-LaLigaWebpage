console.log(standings)
console.log(standings.standings[0].table[0].form[2])
//Obtengo referencia del elemento tbody

var tbody = document.getElementById("tablebody")


//Creo filas (tr) y las imagenes que irán en cada fila. Por ultimo meto las filas en tbody

for (var i = 0; i < standings.standings[0].table.length; i++) {
    var fila = document.createElement("tr");

    var img1 = document.createElement("img");
    img1.src = standings.standings[0].table[i].team.crestUrl;
    img1.style.width = "30px"



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
            textoCeldaTotales = document.createTextNode(standings.standings[0].table[i].position)
            celdaTotales.appendChild(textoCeldaTotales);
        }
        if (j==1){
            celdaTotales.append(img1)
            textoCeldaTotales = document.createTextNode(standings.standings[0].table[i].team.name)
            celdaTotales.appendChild(textoCeldaTotales);
        }
        if (j==2){
            textoCeldaTotales = document.createTextNode(standings.standings[0].table[i].playedGames)
            celdaTotales.appendChild(textoCeldaTotales);
        }
        if (j==3){
            textoCeldaTotales = document.createTextNode(standings.standings[0].table[i].playedGames - standings.standings[0].table[i].lost)
            celdaTotales.append(textoCeldaTotales)
        }
        if (j==4){
            textoCeldaTotales = document.createTextNode(standings.standings[0].table[i].draw)
            celdaTotales.append(textoCeldaTotales)
        }
        if (j==5){
            textoCeldaTotales = document.createTextNode(standings.standings[0].table[i].lost)
            celdaTotales.append(textoCeldaTotales)
        }
        if (j==6){
            textoCeldaTotales = document.createTextNode(standings.standings[0].table[i].goalsFor)
            celdaTotales.append(textoCeldaTotales)
        }
        if (j==7){
            textoCeldaTotales = document.createTextNode(standings.standings[0].table[i].goalsAgainst)
            celdaTotales.append(textoCeldaTotales)
        }
        if (j==8){
            textoCeldaTotales = document.createTextNode(standings.standings[0].table[i].goalDifference)
            celdaTotales.append(textoCeldaTotales)
        }
        if (j==9){
            textoCeldaTotales = document.createTextNode(standings.standings[0].table[i].points)
            celdaTotales.append(textoCeldaTotales)
        }
        if (j==10){
            var d=0;
            for (m=0;m<5;m++){
                var icon = document.createElement("div");
                icon.className = "icons"
                if (standings.standings[0].table[i].form[d]=="D"){
                    icon.style.backgroundColor = "grey";
                }
                if (standings.standings[0].table[i].form[d]=="W"){
                    icon.style.backgroundColor = "green";
                }
                if (standings.standings[0].table[i].form[d]=="L"){
                    icon.style.backgroundColor = "red";
                }
                d = d+2;
                celdaTotales.append(icon)
            }
            celdaTotales.className = "td_icons";
            
        }
        fila.appendChild(celdaTotales);
    }

    tbody.append(fila);
}