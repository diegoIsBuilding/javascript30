document.addEventListener("DOMCcontentLoaded", () => {
    const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
    const cityData = [];

    fetch(endpoint)
    .then((response) => response.json())
    .then(data => cityData.push(...data));

    function findCityDataMatches (textToMatch, cityData) {
        // When the user types/inputs a string of a location 
        // in the form 
        // the output should be a list of locations matching the 
        // the input string 
        return cityData.filter(location => {
            // filter the location by city OR state
            const textMatch = new RegExp(textToMatch, 'gi');
            return location.city(textMatch) || location.state(textMatch);
        })
    }
})
