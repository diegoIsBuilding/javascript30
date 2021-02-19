document.addEventListener("DOMContentLoaded", () => {

const searchInput = document.querySelector('.search');
console.log('Checking Input Form', searchInput);
const suggestions = document.querySelector('.suggestions')
console.log(suggestions);
// the change event will only fire when you click of the input search bar
searchInput.addEventListener('change', displayMatches);
// we can also listen to the event with keyup
searchInput.addEventListener('keyup', displayMatches);

})
// shortened the json data url 
const endpoint = "https://tinyurl.com/j8t8snkp";
const locationsDataArray = [];
// fetch the endpoint
// then turn the raw data into json 
// then push the json data into the 
// locationsDataArray
fetch(endpoint)
    .then(response => response.json())
    .then(data => locationsDataArray.push(...data));
// Check if there is data in the array
// console.log(locationDataArray);
function findTextMatch (textToMatch, locationsDataArray) {
  // check if the search query matches any location in the dataset
  return locationsDataArray.filter((location) => {
    // create a dynamic regular expression that checks user input
    //check location data
    // run in chrome dev tools
    const regex = new RegExp(textToMatch, 'gi');
    return location.city.match(regex) || location.state.match(regex);
  });
}
function displayMatches (suggestions) {
    //console.log(this.value);
    const matchArray = findTextMatch(this.value, locationsDataArray);
    console.log(matchArray);
    const html = matchArray.map(location => {
      return `
        <li>
        <span class="name">${location.city}, ${location.state}</span>
        <span class="population">${location.population}</span>
        </li>
      `;
    }).join('');
    suggestions.innerHTML = html;
}

