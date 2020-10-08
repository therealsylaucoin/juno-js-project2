
//map()
//forEach()
//look up .done() method
//split method to get just one word


//Steps:
//Step 1: Create two method to get arrays of plant names (common_name and scientific_name). Common name will be used for first name, family for last name.
app.getPlanFirsttNames = (plants) => {
    plants.forEach()((plant) => {
        
        
    });
};

app.getPlantLastNames = (plants) => {
    plants.forEach()((plant) => {
        
        
    });
};



//Step 2: get random plant names for first and last
const generatedFirst = () => {
    //math.random(getPlantFirstName)
    };
const generatedLast = () => {
    //math.random(getPlantLastName)
    };



//Step 3: create a new variable to store generated fuull name and display
const RandomFirstLast = (`${generatedFirst} ${generatedLast}`);



//Step 3: User clicks on "get my plant name"
//.on('submit')
//Display results - Results = html. Boom! That is your plant name
$('form').on('submit', function(e) {
    e.preventDefault();
    //display name on page (html)
});



//Step 4: Start over button - empty form, etc.
$('#startOver').on('click',function(){
    //when "start over" button is clicked, forms and generated name is cleared:
    $('.plantNameContainer').empty();
    $('form')[0].reset();
});





















