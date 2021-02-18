console.log(standings)



function tablaClasificacion(){

//Obtengo referencia del elemento tbody

var tbody = document.getElementById("tablebody")


//Creo filas (tr) y las imagenes que irán en cada fila. Por ultimo meto las filas en tbody

for (var i = 0; i < standings.standings[0].table.length; i++) {
    var fila = document.createElement("tr");

    var img1 = document.createElement("img");
    img1.src = standings.standings[0].table[i].team.crestUrl;
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
                //var svg = document.createElement("svg");
                //var path = document.createElement("path");
                //svg.setAttribute("xmlns", "http://www.w3.org/2000/svg")
                //svg.setAttribute("width", "16" )
                //svg.setAttribute("height", "16" )
                //svg.setAttribute("fill", "currentColor" )
                //svg.setAttribute("class", "bi bi-shield-fill-x" )
                //svg.setAttribute("viewBox", "0 0 16 16")
                //path.setAttribute("d", "M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zM6.854 5.146L8 6.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 7l1.147 1.146a.5.5 0 0 1-.708.708L8 7.707 6.854 8.854a.5.5 0 1 1-.708-.708L7.293 7 6.146 5.854a.5.5 0 1 1 .708-.708z");
                //svg.appendChild(path)

                var icon = document.createElement("img");
                
                if (standings.standings[0].table[i].form[d]=="D"){
                    icon.src="../img/icon_grey.svg";
                    icon.className = "icons";
                }
                if (standings.standings[0].table[i].form[d]=="W"){
                    icon.src="../img/icon_green.svg";
                    icon.className = "icons"
                }
                if (standings.standings[0].table[i].form[d]=="L"){
                    icon.src="../img/icon_red.svg";
                    icon.className = "icons"
                }
                d = d+2;
                celdaTotales.append(icon);
            }
            
        }
        fila.appendChild(celdaTotales);
    }

    tbody.append(fila);
}

}

tablaClasificacion();