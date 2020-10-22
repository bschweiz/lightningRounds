



const jisie = {
    firstName: "Jisie",
    lastName: "David",
    cohort: 44,
    favSnack: "Spicy tapioca chips"
  }

  console.log(`${jisie["firstName"]}'s favorite snack is ${jisie["favSnack"]}.`)
  //1. Use bracket notation to console log the the string "Name_of_instructor's favorite snack is name_of_snack"
  const keyFName = "firstName"
  const keyLName = "lastName"
  const keyCohort = "cohort"
  const keySnack = "favSnack"

  //2. Create three more objects to represent the other three instructors in the cohort (Madi likes goldfish. Bryan usually goes for zebra popcorn. Scott loves hot cheetos.) Use the four variables defined above for the keys. (Hint: Object bracket notation)
  const madi = {
    [keyFName]: "Madi",
    [keyLName]: "Pepper",
    [keyCohort]: 44,
    [keySnack]: "Goldfish"
  }
  console.log(`${madi["firstName"]}'s favorite snack is ${madi["favSnack"]}.`)

  const scott = {
    [keyFName]: "Scott",
    [keyLName]: "Silver",
    [keyCohort]: 44,
    [keySnack]: "Hot Cheetos"
  }
  console.log(`${scott["firstName"]}'s favorite snack is ${scott["favSnack"]}.`)

  const bryan = {
    [keyFName]: "Bryan",
    [keyLName]: "Nilsen",
    [keyCohort]: 44,
    [keySnack]: "Zebra popcorn"
  }
  console.log(`${bryan["firstName"]}'s favorite snack is ${bryan["favSnack"]}.`)
  //3. Using bracket notation and the variables, console log the the string "Name_of_instructor's favorite snack is name_of_snack" for the three instructors you just created.
  //4. Use dot notation to console log the the string "Name_of_instructor's favorite snack is name_of_snack" for the instructors.
  //5. In Zoom, click on the caret symbol(^) next to your "Start Video" button. Pick "Choose video filter" and pick a fun filter! 
  