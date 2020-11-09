import { getStarshipEntries, useStarshipEntries } from "./SWProvider.js"
console.log("Welcome to the main module")

const contentTarget = document.getElementById("starships")



const StarshipList = () => {
    getStarshipEntries()
        .then(() => {
            const allEntries = useStarshipEntries()
            render(allEntries)
        })
}
const render = (entriesArray) => {
    contentTarget.innerHTML = entriesArray.map(entry => {
    
        return ` 

        <h3>Concepts: ${entry.name}</h3><br>
        
        `
    }).join(" ")
}

StarshipList()






// let colorArray = ["roy","g","biv"]

// const ColorList = (arrayOfColors) => {
//     const listTarget = document.querySelector(".rainbow")
//     const list = arrayOfColors.map((color) => {
//         return `<ul> ${color} </ul>`
//     }).join(" ")
//     listTarget.innerHTML = `${list}`   
// }

// // import { mathOps } from "./Operations.js"

// // let test1 = mathOps (2,4,"multiplication");
// // console.log(test1)

// ColorList(colorArray)