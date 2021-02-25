//FUNCIÓN LLAMADA A LA API

function getDataFetch(){
    displayLoader();
    const url = "https://api.football-data.org/v2/competitions/2014/teams";
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
        console.log(data);
        hideLoader();
        createTeams(data);
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


function createTeams(data){

    const divTeams = document.getElementById("divTeams");

    for (i=0;i<data.teams.length;i++){
        var link = document.createElement("a");
        link.href= data.teams[i].website;
        var team = document.createElement("div")
        var img = document.createElement("img");
        img.src = data.teams[i].crestUrl;

        var teamName = document.createTextNode(data.teams[i].name);
        team.append(img);
        team.append(teamName);
        link.append(team);
        divTeams.append(link);
    }
}