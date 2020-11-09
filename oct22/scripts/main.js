import { getChores, useChores} from "./chores/ChoreProvider.js"

const contentTarget = document.getElementById("container")

const render = () => {

    const choreArray = useChores();
    console.log(choreArray)
}





getChores()
.then(() => render())