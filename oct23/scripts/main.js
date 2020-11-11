// using a for...of loop, iterate the following:
const welcomeMessage = "Welcome to Dollywood!"
const dollyPrint = (array) => {
    for (let i = 0; i < array.length; i++) {
        // const element = array[i];
        console.log(welcomeMessage[i])
        
    }
}
dollyPrint(welcomeMessage)
/* output each letter individually and consecutively to the console like this:
    W
    e
    l
    c
    o
    m
    e
    ... etc.
*/
const rollerCoasters = ["Wild Eagle", "Tennessee Tornado", "Firechaser Express", "Mystery Mine", "Lightning Rod", "Thunderhead", "Dragonflier"]
// output each string in the array to the console
/* For example:
    Wild Eagle
    Tennessee Tornado
    Firechaser Express ...etc.
*/

const coasterPrint = (array) => {
    for (let i = 0; i < array.length; i++) {
        // const element = array[i];
        console.log(rollerCoasters[i])
        
    }
}
coasterPrint(rollerCoasters)
const ride = {
    name: "Wild Eagle",
    type: "roller coaster",
    location: "Dollywood",
    state: "Tennessee"
}

const ridePrint = (obj) => {
    for (const [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`);
    }
   
}
ridePrint(ride)
// output each key/value pair in a single line to the console
/* For example:
    name: Wild Eagle
    type: roller coaster
    location: Dollywood
    state: Tennessee
*/
// Next, do the same for all of the above using the .forEach() - array method
// ! BONUS show the index position of the array and the rollercoaster in the rollercoasters array using  .forEach() and for...of
/* For example:
    Index 0: Wild Eagle
    Index 1: Tennessee Tornado ...etc.
*/
// !! DOUBLE BONUS - render each iteration to the DOM






































/*
    1. Define a variable called zooAnimals and its value is an array of strings, each string being an 
    animal you would find at a zoo. Name at least 5.
*/
// const zooAnimals = [
//     "zebra",
//     "goat",
//     "giraffe",
//     "panda",
//     "otter"
// ]
/* 
    2. Iterate through the zooAnimals array using the .forEach() method, and print each one to the console.
    :sparkles:EXTRA FUN:sparkles:: for funsies make your console.log look like this: console.log(`%c {the animal you're printing}`, 'color: blue');
*/

// zooAnimals.forEach(animal => {console.log(animal)
    
// });
// console.log(`%c {the animal you're printing}`, 'color: blue');

/*
    3. Using .map(), iterate over the zooAnimal array and convert each animal string to an animal object. 
    Each object should have a property of 'name' (and its value is the animal's name), 
    and a property of 'id' and its value is a number that gets incremented with each animal.
    (TIP: you'll need another variable for that last part, but where to put it? )
*/

// let index = 0
// const mappedZooAnimals = zooAnimals.map(animal => {
//     let animalObj = {
//     ["name"]: animal,
//     ["id"]: ++index
// }
//     return animalObj

// })

// console.log(mappedZooAnimals);
/*
    4. Since .map() returns a brand new array, store what you did in section 3 in a variable called 'completedZoo'
*/
/*
    5. Iterate through the new array using .forEach() and print each animal object to the console.
// */

// mappedZooAnimals.forEach( animalObj => {console.log(animalObj);})