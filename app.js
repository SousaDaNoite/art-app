// What are we doing in our app???

// Create an app object (to make use of namespacing)
const artApp = {};

// Save information which will be reused (e.g. API key) within properties on the app object
artApp.apiKey = `rtliWmhr`;
artApp.apiUrl = `https://www.rijksmuseum.nl/api/en/collection`;

// Create a method which will make a call to the API and get some data back
    // THEN we will take that data and put it on the page
artApp.getArt = function() {
    
    // use the URL constructor to format the API endpoint to which we will be making our request
    const url = new URL( artApp.apiUrl );

    console.log(url);

    // format and add our parameters to our URL:
    url.search = new URLSearchParams({
        // include the API parameters here:
        key: artApp.apiKey,
        q: 'monkey',
        imgonly: true
    });

    // now it is finally time to FETCH some data from the beautiful API endpoint we have just constructed
    fetch(url)
        .then( function(apiResponse) {
            // take the Promise that is returned and parse it into json
            return apiResponse.json()
        } )
        .then( function(artFromTheApi) {
            // this gives us back the whole object from the API
            console.log(artFromTheApi)

            // let's navigate into the property of the whole object which provides us with JUST the art data
            console.log(artFromTheApi.artObjects);
        } )

}

// Create an initialization method which will kickstart our app
artApp.init = function() {
    console.log('App is initialized!');

    // call the method which will get us our art data
    artApp.getArt();
}

// Call the initialization method (at the end of our code)
artApp.init();