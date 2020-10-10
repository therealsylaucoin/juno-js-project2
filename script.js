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
            },
            xmlToJSON: false,
            useCache: false,
        }
    }).then((response) => {
         //#7 - Create a variable that will store an array with only the common name of the plants (Thanks for the help Lauren!)
        plantFirstName = response.data.map(function(result) {
            //#12 - Split the results! to get single word results instead of two (for example: Nettle instead of Stinging Nettle - Thanks for the help Darshana!)
            let plantFirstSingleWord = (result.common_name).split(" ")[1];
            return plantFirstSingleWord;
        });
        plantLastName = response.data.map(function(result) {
            let plantLastSingleWord = (result.family_common_name).split(" ")[0];
            return plantLastSingleWord;
        });
        //#15 Get images
        plantImage = response.data.map(function(result) {
            let plantImgUrl = (result.image_url);
            return plantImgUrl;
        });
        //#16 Get plant facts!
        plantFacts = response.data.map(function(result) {
            let plantInfoFacts= (`This plant is a ${result.scientific_name}, also called ${result.common_name}. It belongs to the ${result.family_common_name} family (scientific name: ${result.family}).`);
            return plantInfoFacts;
        });
        //#10 get a single random result (use randomizer)
        displayFirstName(randomizer(plantFirstName));
        displayLastName(randomizer(plantLastName));
        displayPlantAdj(randomizer(plantAdjArray));
        //#18 Create a variable that will hold a random number from 0 to 19, which be used for the index of the plant image and plant
        let randomFactIndex = Math.floor(Math.random() * 20);
        displayImage(plantImage[randomFactIndex]);
        displayFacts(plantFacts[randomFactIndex]);
    });
}

// #20 Make another API call function to have the random fact and image loaded up right away
// QUESTION - How could I have combined them together? 
app.getPlantFactsOnLoad = () => {
    $.ajax({
        url: app.proxyServer,
        dataType: 'JSON',
        method: 'GET',
        data: {
            reqUrl: `${app.apiUrl}/api/v1/plants`,
            params: {
                token: app.apiKey,
            },
            xmlToJSON: false,
            useCache: false,
        }
    }).then((response) => {
        //Get images
        plantImage = response.data.map(function(result) {
            let plantImgUrl = (result.image_url);
            return plantImgUrl;
        });
        //Get plant facts!
        plantFacts = response.data.map(function(result) {
            let plantInfoFacts= (`This plant is a ${result.scientific_name}, also called ${result.common_name}. It belongs to the ${result.family_common_name} family (scientific name: ${result.family}).`);
            return plantInfoFacts;
        });
        //Create a variable that will hold a random number from 0 to 19, which be used for the index of the plant image and plant
        let randomFactIndex = Math.floor(Math.random() * 20);
        displayImage(plantImage[randomFactIndex]);
        displayFacts(plantFacts[randomFactIndex]);
    });
}

//#8 Create a function to display names on our page
const displayFirstName = (data) => {
    $('.plantFirst').text(data);
    $('.yourPlantName').text(`Your plant name is:`);
}
const displayLastName = (data) => {
    $('.plantLast').text(data);
}
//#14 Create a function to get a random adjective from plantAdjArray and display it on the page
const displayPlantAdj = (array) => {
    $('.plantAdjective').text(array);
}
//#16 Create a function to display images and display it on the page
const displayImage = (data) => {
    $('.plantPic').attr("src", data);
}
//#17 Create a function to display fun facts and display it on the page!
const displayFacts = (data) => {
    $('.plantInfo').text(data);
    //#18 Prepend some HTML to our page once the content loads!
}

//#13 Create an array of plant addjectives to add to the whimsy of the plant name
const plantAdjArray = [ "lush", "potted", "ornamental", "herbaceous", "feathery", "hardy", "poisenous", "thorny", "perenial", "aromatic", "fruitful"];

//#9 - Randomize the plant names! (taken from karaoke code along)
const randomizer = (array) => {
    //use Math functions which will give you a random whole number (AKA an integer) which never exceeds the last index available in any array that is passed into this randomizer function
    const randomIndex = Math.floor(Math.random() * array.length);
    //pass the random number generated above into the array used in this function using bracket notation (to choose a random data point within the array)
    return array[randomIndex];
};

//#19 When button is clicked, scroll down and change some text!
$('.button').click(function(){
    $('.button').text('Get new plant name (and facts)!');
    $(window).scrollTop($('#plantName').offset().top);
    $('.yourPlantNameInstructions').text('Pretty cool, eh? Scroll up and try it again!')
    $('.plantLast').css('color', 'black');
    $('.plantFirst').css('color', 'black');
    $('.plantAdjective').css('color', 'black');
});

//#3 - initialize our app
app.init = () => {
    // //#21 call the function that will display facts on the page right away
    app.getPlantFactsOnLoad();
    //#11 - Create an event listener to tell the app when to display the info in the init
    $('form').on('submit', function(e) {
        e.preventDefault();
        app.getPlants();
    });
}

//#2 - document ready
$(function(){
    //#4 call init in doc ready
    app.init();
});



//TO DO LATER!!!!!!!
// LEVEL UP BONUS FOR MAX XP - Match plant name's first letter (first and last) to user's!!!!
// User inputs their first and last name in a form

// On submit get object of name
// const userName = {
//   Name: firstName, value: "Pilea",
//   Name: lastName, value:  "Evergreen",
// };
// const userName = () => {
//     $('form').submit(function(e) {
//         console.log($(this).serializeArray() );
//         e.preventDefault();
//     });
// };
// userName();

// The value of the first letter of their first name is stored
// const firstNameLetter 

// The value of the first letter of their last name is stored
// const firstLastNameLetter

//Check for plant names that start with the first letter of the first name and return a random result

//Check for plant names that start with the first letter of the last name and return a random result

//Clear form and name when user clicks start over
//   $('startOver').on('click', function() {
//     $('form')[0].reset();
// });