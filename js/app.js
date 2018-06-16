/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

//1. In the nav element, target the span element with the id of 'matCount' and change the number from 0 to 11.
var matCountDiv = document.getElementById('matCount');
matCountDiv.innerHTML = 11;
//2. In the nav element, target the span element with the id of 'msgCount' and change the number from 0 to 23.
var msgCountSpan = document.getElementById('msgCount');
msgCountSpan.innerHTML = 23;
//3. In the div id data section, target the div element with the id of 'fullname' and change Full Name to Ronald McDonald.
var getFullName = document.getElementById('fullname');
getFullName.innerHTML = 'Ronald McDonald';
//4. In the div id data section, target the div element with the id of 'age' and change Age to 63 Years Old.
var setAge = document.getElementById('age');
setAge.innerHTML = 'Age: 63 Years Old';
//5. In the div id data section, create a div with an id of job and give it the following information: Clown and Restauranteur.
var setJob = document.createElement('div');
setJob.className = 'job';
setJob.innerHTML = 'Job: Clown and Restauranteur';
setAge.appendChild(setJob);
//6. In the div id data section, create a div with an id of hobbies and give it the following information: Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.
var setHobby = document.createElement('div');
setHobby.id = 'hobbies';
setHobby.innerHTML = 'Hobbies: Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.';
setJob.appendChild(setHobby);
//7. In the div id data section, create a div with an id of location and give it the following information: Honolulu, HI.
var setLocation = document.createElement('div');
setLocation.id = 'location';
setLocation.innerHTML = 'Location: Honolulu, HI';
setHobby.appendChild(setLocation);
//8. In the div id data section, create a div with an id of wants and give it the following information: Looking for a Mrs. McDonald.
var setLooking = document.createElement('div');
setLooking.id = 'looking';
setLooking.innerHTML = 'Looking For: Mrs. McDonald';
setLocation.appendChild(setLooking);
//9. In the div id profile section, create a paragraph element with an id of pro2 and create a your own profile for Ronald (at least 2 sentences).
var setP = document.createElement('p');
setP.id = 'pro2';
setP.innerHTML = 'Taking order 24 hours a day. I can see dead people with my sixth sense.';
document.getElementById("profile").appendChild(setP);
//10. In the div id matches section, target the first div element with the class name of firstName and change Name to Wendy.
var firstNameClass = document.getElementsByClassName("firstName");
firstNameClass[0].innerHTML = "Wendy";
//11. In the div id matches section, target the first div element with the class name of otherAge and change Age to 48.
var otherAgeClass = document.getElementsByClassName("otherAge");
otherAgeClass[0].innerHTML = 48;
//12. In the div id matches section, target the first div element with the class name of status and change Status to Single Mother.
var statusClass = document.getElementsByClassName("status");
statusClass[0].innerHTML = "Single Mother";
//13. In the div id matches section, target the second div element with the class name of firstName and change Name to Peko Chan.
var firstNameClass = document.getElementsByClassName("firstName");
firstNameClass[1].innerHTML = "Peko Chan";
//14. In the div id matches section, target the second div element with the class name of otherAge and change Age to 68.
var otherAgeClass = document.getElementsByClassName("otherAge");
otherAgeClass[1].innerHTML = 68;
 //Final Boss Create your own profile into the page:
 //change image to match your profile
 //div with class name of firstName
 //div with class name of otherAge
 //div with class name of status
 //div with class anem of Motto

 var firstNameClass = document.getElementsByClassName("firstName");
 firstNameClass[2].innerHTML = "M";
 
 var otherAgeClass = document.getElementsByClassName("otherAge");
 otherAgeClass[2].innerHTML = 62;
 
 var statusClass = document.getElementsByClassName("status");
 statusClass[2].innerHTML = "Single";
 
 var mottoClass = document.getElementsByClassName("motto");
 mottoClass[2].innerHTML = "Alooooohhaaaaaaa!!!";


