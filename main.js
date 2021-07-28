function AddPlayer(){

    Player1 = document.getElementById("Player1Name").value;

    Player2 = document.getElementById("Player2Name").value;

    localStorage.setItem("Player1",Player1);

    localStorage.setItem("Player2",Player2);

    window.location = "index2.html";

}

function AddPlayers(){

    document.getElementById("Player1Name").innerHTML = localStorage.getItem("Player1") + " : ";

    document.getElementById("Player2Name").innerHTML = localStorage.getItem("Player2") + " : ";

}