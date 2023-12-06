/*Crea una classe User per la creazione di oggetti di tipo “utente”. Il suo costruttore dovrà inizializzare ogni oggetto utente con i seguenti attributi:
- firstName
- lastName
- age
- location 

Aggiungi alla classe User anche un metodo che restituisca il confronto con l'età di un'altra persona. 
Ad esempio, date due istanze della classe utente “x” e “y” inizializzate con le proprietà sopra descritte, 
il metodo dovrà restituire una frase simile a “x è più vecchio di y” a seconda del risultato del confronto. 
Crea degli oggetti a partire dalla classe User e verifica che la comparazione tra le età funzioni correttamente. */

/*
class User {
    constructor (firstName,lastName, age, location){
    this.firstName =firstName;
    this.lastName = lastName;
    this.age = age;
    this.location= location;

}

confronto (persona){
    if(this.age > persona.age){
        return this.firstName + ' è più vecchio di ' + persona.firstName;
    } else if (this.age < persona.age){
        return persona.firstName + ' è più vecchio di ' + this.firstName;
    } else{
        return persona.firstName + ' ha la stessa età di ' + this.firstName;
    }
}
}

let m = new User('mario', 'rossi', 29, 'roma');
let g = new User ('giuseppe', 'verdi', 31, 'milano');
let f = new User ('francesca', 'neri', 29, 'napoli');
console.log (m.confronto (g));
console.log(f.confronto(m));
console.log(g.confronto(f));

*/

class Pet {
    constructor (petName, ownerName, species, breed){
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

  ownerNameTest (pet) {
      if (pet.ownerName === this.ownerName) {
      return true;
    } else {
     return false;
    }
  }
}

let p1 = new Pet ('bob', 'mario', 'cane', 'labrador');
let p2 = new Pet ('bill','giuseppe', 'gatto', 'sphynx');

  console.log (p1)
  console.log(p2)
  console.log (p1.ownerNameTest(p2));