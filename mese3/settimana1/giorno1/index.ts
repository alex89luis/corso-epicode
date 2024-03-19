interface Smartphone {
  credito: number;
  numeroChiamate: number;
  ricarica(ammontare: number): void;
  chiamata(minuti: number): void;
  chiama404(): number;
  getNumeroChiamata(): number;
  azzeraChiamate(): void;
}

class User implements Smartphone {
  nome: string;
  cognome: string;
  credito: number;
  numeroChiamate: number;

  constructor(nome: string, cognome: string) {
    this.nome = nome;
    this.cognome = cognome;
    this.credito = 0; // Inizialmente senza credito
    this.numeroChiamate = 0;
  }

  ricarica(ammontare: number): void {
    this.credito += ammontare;
  }

  chiamata(minuti: number): void {
    const costoChiamata = minuti * 20; // Costo di 20 centesimi al minuto
    if (costoChiamata <= this.credito) {
      this.credito -= costoChiamata;
      this.numeroChiamate += 1; // Aggiorniamo il numero di chiamate di 1 per ogni chiamata effettuata
    } else {
      console.log("Credito insufficiente per effettuare la chiamata.");
    }
  }



  chiama404(): number {
    return this.credito;
  }

  getNumeroChiamata(): number {
    return this.numeroChiamate;
  }

  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}

// Esempio di utilizzo
const utente = new User("Mario", "Rossi");
console.log("Saldo residuo:", utente.chiama404()); // Output: Saldo residuo: 0
console.log("Numero chiamate:", utente.getNumeroChiamata()); // Output: Numero chiamate: 0

utente.ricarica(10); // Ricarica di 10 euro
console.log("Saldo residuo dopo la ricarica:", utente.chiama404()); // Output: Saldo residuo dopo la ricarica: 10

utente.chiamata(1); // Effettua una chiamata di 3 minuti
console.log("Saldo residuo dopo la chiamata:", utente.chiama404()); // Output: Saldo residuo dopo la chiamata: 9.4

console.log("Numero chiamate:", utente.getNumeroChiamata()); // Output: Numero chiamate: 3 

utente.azzeraChiamate(); // Azzera il numero di chiamate
console.log("Numero chiamate dopo l'azzeramento:", utente.getNumeroChiamata()); // Output: Numero chiamate dopo l'azzeramento: 0
