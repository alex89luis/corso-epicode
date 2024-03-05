//esercizio 2//

function startCounter() {
    let startTime = 0;

    if (sessionStorage.getItem('startTime')) {
        startTime = parseInt(sessionStorage.getItem('startTime'));
    } else {
        startTime = new Date().getTime();
        // Se non c'è un valore salvato, inizia un nuovo contatore//
    };
    function updateCounter() {
        let currentTime = new Date().getTime();
        let elapsedTime = Math.floor((currentTime - startTime) / 1000); // calcola il tempo trascorso in secondi//
        sessionStorage.setItem("startTime", startTime.toString());
        document.getElementById('timer').innerText = "Tempo trascorso: " + elapsedTime + " secondi";
    }

    // Aggiorno il contatore ogni secondo//
    setInterval(updateCounter, 1000);
}

// Controllo se esiste un valore salvato in sessionStorage e inizia il contatore//

startCounter();




//esercizio 1//

function salva() {
    var name = document.getElementById('nomeInput').value;
    localStorage.setItem('userName', name);
    displaySavedName();
}

// Funzione per rimuovere il nome salvato da localStorage//
function cancella() {
    localStorage.removeItem('userName');
    displaySavedName();
}

// Funzione per mostrare il nome salvato sopra l'input field//
function displaySavedName() {
    let savedName = localStorage.getItem('userName');
    let savedNameDisplay = document.getElementById('salvaNome');
    if (savedName) {
        savedNameDisplay.textContent = "Nome Salvato: " + savedName;
    } else {
        savedNameDisplay.textContent = "";
    }
}

// Mostra il nome salvato quando carico la pagina //
displaySavedName();


