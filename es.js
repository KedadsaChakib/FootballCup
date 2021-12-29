// tempalate literals

const nom = "nom";
const prenom ="prenom";
console.log("nom:");
console.log(`${nom},${prenom}`);

//arrow function 

const sum = (x,y) => x+y;

//spread operators

const array = [1,2,3,4,5,6];
let array2 =[...array,7,8,9];
console.log(array2);


//destructuring
const object = {
    nom: "nom",

}

console.log ("nom"+ object.nom);

const {nom: new_name} =object;

console.log(new_name);

//sets 

const set = new Set([1,2,3,4,5,6]);
console.log (set.has[3]);

//default parameters
const sum = (x, y, z =12)

//for of loop 
const arrat = [1,2,3,4];
for (let element of array);