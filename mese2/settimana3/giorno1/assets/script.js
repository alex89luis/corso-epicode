
// Esercizio Numero 1 //

class User {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
    }


    confrontaEta(persona) {
        if (this.age > persona.age) {
            return `${this.firstName} è più grande `;
        } else if (this.age === persona.age) {
            return `${this.firstName} ${persona.firstName} hanno la stessa età`;
        } else {
            return `${this.firstName}è più piccolo di ${persona.firstName}`;
        }
    }
}

const persona1 = new User('Alessio', 'Luise', 34, 'Napoli');
const persona2 = new User('Peppe', 'Rossi', 25, 'Roma');

console.log(persona1.confrontaEta(persona2));


// Esercizio Numero 2//


const petName = document.getElementById('petName').value;
const ownerName = document.getElementById('ownerName').value;
const species = document.getElementById('species').value;
const breed = document.getElementById('breed').value;



class User {
    constructor(_petName, _ownerName, _species, _breed) {
        this.petName = _petName;
        this.ownerName = _ownerName;
        this.species = _species;
        this.breed = _breed;
    }
    stessoPadrone(animale) {
        if (this.ownerName === animale.ownerName) {
            return true;
        }
    }

}

class User {
    constructor(_petName, _ownerName, _species, _breed) {
        this.petName = _petName;
        this.ownerName = _ownerName;
        this.species = _species;
        this.breed = _breed;
    }
    lista(){
        console.log(`${this.petName} ${this.ownerName} ${this.species} ${this.breed}`);
    }
}