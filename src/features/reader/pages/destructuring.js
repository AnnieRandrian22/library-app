// Object destructuring, Array destructuring

// 1- Object destructuring
/*
    assigner facilement la valeur d'un ou plusieurs attributs/méthodes d'un objet à une ou des variables/constantes
    via le nom d'attribut
    
    Old JS:
        var etudiant = {
            nom: "annie",
            age: 24,
            adresse: "ampitakely",
            etudier: function() {
                console.log("j'étudie")
            }
        }

        var annie = {
            nom: "annie",
            age: 24,
            adresse: "ampitakely",
            etudier: function () {
                console.log(this.nom + " étudie");
            },
        };

        var nom = annie.nom
        var adresse = annie.adresse
    
    ******* New way (ES6) ********* (Object destructuring)
    let etudiant = {
        nom: "annie",
        age: 24,
        adresse: "ampitakely",
        etudier: function() {
            console.log("j'étudie")
        }
    }
    
    let { nom, adresse, age } = etudiant;


// 2- Array destructuring
assigner facilement la valeur d'un ou de plusieurs éléments d'un tableau à une ou des variables/constantes via son index

    Old way:
        var fruits = [{nom: "akondro", qte: 10}, "manga", "papay", "poma", mioty: function() { console.log("mioty tsika zao")}]
        var akondro = fruits[0]
        var manga = fruits[1]
        ......
        .....
        var mioty = fruits[4]

*/
// let etudiant = {
//   nom: "annie",
//   age: 24,
//   adresse: "ampitakely",
//   etudier: function () {
//     console.log("j'étudie");
//   },
// };

// const { nom, adresse, etudier } = etudiant;

// etudier();

// function getProduit() {
//   const nomProduit = "akondro";
//   return { nomProduit, dateExp: "juin" };
// }

// console.log(getProduit())

var fruits = [
  { nom: "akondro", qte: 10 },
  "manga",
  "papay",
  "poma",
  function () {
    console.log("mioty tsika zao");
  },
];
// var akondro = fruits[0];
// var manga = fruits[1];
// var mioty = fruits[4];

// mioty()
// console.log(akondro)

// const [akondro, manga, , , mioty] = fruits;

// mioty()
// console.log(akondro)

// const [nom, setNom] = [attribut, changeAttribut]