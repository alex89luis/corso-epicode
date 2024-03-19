var User = /** @class */ (function () {
    function User(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
        this.credito = 0; // Inizialmente senza credito
        this.numeroChiamate = 0;
    }
    User.prototype.ricarica = function (ammontare) {
        this.credito += ammontare;
    };
    User.prototype.chiamata = function (minuti) {
        var costoChiamata = minuti * 20; // Costo di 20 centesimi al minuto
        if (costoChiamata <= this.credito) {
            this.credito -= costoChiamata;
            this.numeroChiamate += 1; // Aggiorniamo il numero di chiamate di 1 per ogni chiamata effettuata
        }
        else {
            console.log("Credito insufficiente per effettuare la chiamata.");
        }
    };
    User.prototype.chiama404 = function () {
        return this.credito;
    };
    User.prototype.getNumeroChiamata = function () {
        return this.numeroChiamate;
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return User;
}());
// Esempio di utilizzo
var utente = new User("Mario", "Rossi");
console.log("Saldo residuo:", utente.chiama404()); // Output: Saldo residuo: 0
console.log("Numero chiamate:", utente.getNumeroChiamata()); // Output: Numero chiamate: 0
utente.ricarica(10); // Ricarica di 10 euro
console.log("Saldo residuo dopo la ricarica:", utente.chiama404()); // Output: Saldo residuo dopo la ricarica: 10
utente.chiamata(3); // Effettua una chiamata di 3 minuti
console.log("Saldo residuo dopo la chiamata:", utente.chiama404()); // Output: Saldo residuo dopo la chiamata: 9.4
console.log("Numero chiamate:", utente.getNumeroChiamata()); // Output: Numero chiamate: 3 
utente.azzeraChiamate(); // Azzera il numero di chiamate
console.log("Numero chiamate dopo l'azzeramento:", utente.getNumeroChiamata()); // Output: Numero chiamate dopo l'azzeramento: 0
