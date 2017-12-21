/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
   // searchFirstName(people);
   // searchLastName(people);
    var foundPerson = searchByName(people);
    displayPerson(foundPerson);
    break;
    case 'no':
   people = searchByGender(people);
   people = searchByHeight(people);
   people = searchByWeight(people);
   people = searchByEyeColor(people);
    break;
    default:
    app(people);
    break;
  }
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    displayInformation(person);
    alert(result);
    break;
    case "family":
    displayFamily(person, people);
    break;
    case "descendants":
    displayDescendants(person, people);
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);

  var foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  var person = foundPerson[0];
  return person;
}
  function searchByGender(people){
  var gender = promptFor("Is the person male or female?", chars);

  var foundPeople = people.filter(function(person){
    if(person.gender === gender){
      return true;
    }
    else{
      return false;
    }
  })
  return foundPeople;
}

  function searchByHeight(people){
  var height = promptFor("How tall is the person?", chars);

  var foundPeople = people.filter(function(person){
    if(person.height === height){
      return true;
    }
    else{
      return false;
    }
  })
  return foundPeople;
}

  function searchWeight(people){
  var weight = promptFor("What does the person weigh?", chars);

  var foundPeople = people.filter(function(person){
    if(person.weight === weight){
      return true;
    }
    else{
      return false;
    }
  })
  return foundPeople;
}

  function searchByDateofBirth(people){
  var dob = promptFor("When was the person born", chars);

  var foundPeople = people.filter(function(person){
    if(person.dob === dob){
      return true;
    }
    else{
      return false;
    }
  })
  return foundPeople;
}

  function searchOccupation(people){
  var occupation = promptFor("What does the person do for a living?", chars);

  var foundPeople = people.filter(function(person){
    if(person.occupation === occupation){
      return true;
    }
    else{
      return false;
    }
  })
  return foundPeople;
}

  function searchByEyeColor(people){
  var eyeColor = promptFor("What color eyes do they have?", chars);

  var foundPeople = people.filter(function(person){
    if(person.eyeColor === eyeColor){
      return true;
    }
    else{
      return false;
    }
  })
  return foundPeople;
}
// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  var personInfo = "First Name : " + person.firstName + "\n";
  personInfo += "Last Name : " + person.lastName + "\n";
  personInfo += "Gender" + person.gender + "\n";
  personInfo += "Date of Birth" + person.dob + "\n";
  personInfo += "Height" + person.height + "\n";
  personInfo += "Weight" + person.weight + "\n";
  personInfo += "Eye Color" + person.eyeColor + "\n";
  personInfo += "Occupation" + person.occupation + "\n";

    alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}
 


  