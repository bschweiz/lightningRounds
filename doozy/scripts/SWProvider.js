let entriesArray = []


export const getStarshipEntries = () => {
    return fetch("https://swapi.dev/api/starships/") // Fetch from the API
    .then(response => response.json())  // Parse as JSON
    .then(updatedEntries => {
        entriesArray = updatedEntries.results
        // What should happen when we finally have the array?
        console.log(entriesArray);
    })
}
export const useStarshipEntries = () => {
    console.log(entriesArray)
    return entriesArray.slice();
}