//A RANDOM PLANT NAME GENERATOR (aka - What is your plant name?!?!?)

//#1 - app namespace object:
const app = {};

//#5 - Save useful info HERE
//save proxy server URL
app.proxyServer = 'http://proxy.hackeryou.com';
//save plant api URL
app.apiUrl = `https://trefle.io`;
//save API key
app.apiKey = '713L-97vXJ7otpbTYEMNTdKcclaGFBLtmXL9r6iiNF8';




//#6 - Function to call the API to get plant information
app.getPlants = () => {
    $.ajax({
        url: app.proxyServer,
        dataType: 'JSON',
        method: 'GET',
        data: {
            reqUrl: `${app.apiUrl}/api/v1/plants`,
            params: {
                token: app.apiKey,
                // page: 4,
            },
            xmlToJSON: false,
            useCache: false,
        }
    })
    .then(response => {
            //#7 - Create a varibale that will store an array with only the common name of the plants (thanks for the help Lauren!)
            plantName = response.data.map(function(plantObject) {
                return (plantObject.common_name);
            });
            //#8 - Get random plant name using the array we just created
            const randomPlant = Math.floor(Math.random() * plantName.length);
                // console.log(plantName[randomPlant]);
                // return plantName[randomPlant];
            return plantName[randomPlant];
        });
};
//this gets me an array of twenty plant names
app.getPlants();





//#8 - Method to get random plant names! So that we can display a random one on the page!
app.getRandomPlantName = () => {
    //#9 - call the method that returns the promise from our AJAX API request
    //save it as a variable
    let plant = app.getPlants();
    //Use .done method to return data from successful promise 
        plant.done((result) => {
            //#10 + #12 -create a variable for the random result that we're going to get from passing our array(plantInfo) in the randomizer function
            let randomPlantFirstName = app.randomizer(result);
            //#13 -Return the variable
            // return randomPlantFirstName;
            console.log(randomPlantFirstName);
    }); 
};
//this should get me a single random plant name
app.getRandomPlantName();







// //#14 - Create a function to display the information on the page 
// //HOW DO I PUT THIS INSIDE OF app.getPlantNames
app.displayPlantFirstName = () => {
    $('.plantFirst').text(randomPlantFirstName);
};
//I will want to call this on click
// app.displayPlantFirstName();



//#11 - Randomize the plant names! (taken from karaoke code along)
app.randomizer = (array) => {
        //use Math functions which will give you a random whole number (AKA an integer) which never exceeds the last index available in any array that is passed into this randomizer function
        const randomIndex = Math.floor(Math.random() * array.length);
        //pass the random number generated above into the array used in this function using bracket notation (to choose a random data point within the array)
        return array[randomIndex];
    };





// //#3 - initialize our app
app.init = () => {
    console.log('initiallized!')
    //#15 - Create an event listener to tell the app when to display the info in the init
    $('form').on('submit', function(e) {
        e.preventDefault();
        app.displayPlantFirstName();
    });
    
}

//#2 - document ready
$(function(){
    //#4
    app.init();
    console.log(`I'm ready!`);
});




// //LEVEL UP BONUS FOR MAX XP - Match plant name's first letter (first and last) to user's!!!!

// //Sort plant name arrays by alphabetical order

// //User inputs their first and last name in a form
// //On submit get object of name
// //const userName = {
// //  Name: firstName, value: "Pilea",
// //  Name: lastName, value:  "Evergreen",
// //};
// const userName = () => {
//     $('form').submit(function(e) {
//         console.log($(this).serializeArray() );
//         e.preventDefault();
//     });
// };
// userName();

// //The value of the first letter of their first name is stored
// const firstNameLetter 

// //The value of the first letter of their last name is stored
// const firstLastNameLetter

// //Check for plant names that start with the first letter of the first name and return a random result

// //Check for plant names that start with the first letter of the last name and return a random result



