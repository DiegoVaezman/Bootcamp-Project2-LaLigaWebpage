console.log(matches)


//Obtengo referencia del elemento tbody

var tbody = document.getElementById("tablebody")


//Creo filas (tr) y las imagenes que irán en cada fila. Por ultimo meto las filas en tbody

for (var i = 0; i < matches.matches.length; i++) {
    var fila = document.createElement("tr");

    var img1 = document.createElement("img");
    img1.src = "https://crests.football-data.org/" + matches.matches[i].homeTeam.id  + ".svg";
    img1.style.width = "30px"
    img1.id = "img1"
    var img2 = document.createElement("img");
    img2.src = "https://crests.football-data.org/" + matches.matches[i].awayTeam.id  + ".svg";
    img2.style.width = "30px"



    // Creo cada celda con la información que deben contener

    for (var j = 0; j < 4; j++) {
        var celda = document.createElement("td");
        celda.className = "td"
        var textoCelda = ""
        if (j==2){
            textoCelda = document.createTextNode(matches.matches[i].score.fullTime.homeTeam + " - " + matches.matches[i].score.fullTime.awayTeam)
            if (matches.matches[i].score.fullTime.homeTeam == null){
                textoCelda = document.createTextNode("Pendiente")
            }
            celda.appendChild(textoCelda);
        }
        if (j==3){
            celda.append(img2)
            textoCelda = document.createTextNode(matches.matches[i].awayTeam.name)
            celda.appendChild(textoCelda);
        }
        if (j==1){
            textoCelda = document.createTextNode(matches.matches[i].homeTeam.name)
            celda.appendChild(textoCelda);
            celda.append(img1)
        }
        if (j==0){
            textoCelda = document.createTextNode(matches.matches[i].utcDate.slice(0,10))
            celda.append(textoCelda)
            var br = document.createElement("br")
            celda.append(br)
            textoCelda = document.createTextNode(matches.matches[i].utcDate.slice(11,16))
            celda.append(textoCelda)
        }
        fila.appendChild(celda);
    }

    tbody.append(fila);
}


