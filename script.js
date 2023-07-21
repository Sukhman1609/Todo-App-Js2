
var todos = document.getElementById("todos");
var popup = document.getElementById("popup");
var popup1 = document.getElementById("popup1");
var todoDes;
var newTodo;


function applyBlur() {
    document.getElementById('todos').classList.add('blur');
    document.getElementById('headings').classList.add('blur');
  }
  
  function removeBlur() {
    document.getElementById('todos').classList.remove('blur');
    document.getElementById('headings').classList.remove('blur');
  }

  function checkNoCards() {
    var todosContainer = document.getElementById('todos');
    var noCardsMessage = document.getElementById('noCardsMessage');
    
    if (todosContainer.childElementCount === 1) {
      noCardsMessage.style.display = 'block';
    } else {
      noCardsMessage.style.display = 'none';
    }
  }
  function toggleCard(card) {
   
    var allCards = document.getElementsByClassName("todocard");
    var headingText = card.querySelector("h1").innerHTML;
    document.getElementById("heading").innerHTML = headingText;

    for (var i = 0; i < allCards.length; i++) {
        var currentCard = allCards[i];
        currentCard.classList.add("hidden");
        newTodo.classList.add("hidden");
            }
        
            card.classList.remove("hidden"); 
        
    card.style.margin="auto"
    // currentCard.style.justifyContent = "center";
   
    document.getElementById("list1").style.display="none";
    document.getElementById("addItem1").style.marginTop="-60px";
    if (headingText === "") {
      heading.style.display = "block";
    } else {
    //   heading.style.display = "inline";
    //   heading.style.justifyContent = "center";
    //   heading.style.alignItems = "center";
      heading.style.color = "white";
      heading.style.margin = "auto";
      heading.style.position = "absolute";
      heading.style.top = "50px";
      heading.style.left= "650px";
      heading.style.opacity = "1";
    heading.style.display = "grid";
heading.style.placeItems = "center";

if (window.innerWidth <= 768) {
  heading.style.top = "60px";
  heading.style.right = "100px";
  heading.style.left = "auto";
  heading.style.placeItems = "center";
}
    }
    heading.innerHTML = headingText;
    backButton.style.display = "inline"; 
    
    heading.style.display = backButton.style.display = addItem1.style.display = "inline";   
    // document.getElementById("todos").style.justifyContent="space-evenly";
    if (window.innerWidth <= 768) {
        backButton.style.position = "relative";
        backButton.style.top = "-90px";
        backButton.style.left = "-60px";
        document.getElementById("list1").style.margin = "-70px 0px 0px 220px"
        document.getElementById("addItem1").style.marginTop = "-85px";
        document.getElementById("addItem1").style.marginLeft = "0px";
        document.getElementById("popup").style.position = "fixed";
        document.getElementsByClassName("s").style.marginLeft = "50px";
        heading.style.fontSize= "29pt";
        // document.getElementsByClassName("todocard").style.marginLeft = "110px";
        card.style.marginLeft="25px"
        currentCard.style.justifyContent = "center";
       
        // heading.style.justifyContent= "center";
        
      }
}


var backButton = document.createElement("button");
backButton.innerHTML = "Back";
backButton.classList.add("back-button");
backButton.style.display = "none"; // Initially hide the back button
backButton.style.fontSize = "35pt"; 
backButton.style.color= "white"; 
backButton.style.backgroundColor= "black"; 
backButton.style.border= "none"; 
backButton.style.margin= "90px 0px 0px 100px"; 


document.body.insertBefore(backButton, document.body.firstChild);


  var todoCount=0;
function createshow() {
    todoCount++;

newTodo = document.createElement("div");
var todoHeading = document.createElement("h1");
var hr = document.createElement("hr");
todoDes = document.createElement("div");
var buttonContainer = document.createElement("div");
var delTodo = document.createElement("button");
var addItem = document.createElement("button");

todos.appendChild(newTodo);
newTodo.appendChild(todoHeading);
newTodo.appendChild(hr);
newTodo.appendChild(todoDes);
newTodo.appendChild(buttonContainer);

todoHeading.innerHTML = taskname.value;
todoHeading.id="todoHeading";
todoHeading.style.color = "rgb(228, 81, 81)";

hr.style.border = "none";
hr.style.borderTop = "1px solid black";
hr.style.margin = "-20px  0 0 0";
hr.style.padding = "20px  0 0 0";
newTodo.classList.add("todocard");
newTodo.classList.add("new-card");
todoDes.classList.add("list");
delTodo.innerHTML='&#128465;';
delTodo.style.backgroundColor = "red";
delTodo.style.color = "white";
delTodo.style.width = "35px";
delTodo.style.height = "35px";
delTodo.style.borderRadius = "50%";
delTodo.style.fontSize= "30px";
delTodo.style.fontWeight = "bolder";
delTodo.style.border = "none";
delTodo.style.height="35px";
delTodo.style.width="35px";
addItem.innerHTML = "+";
addItem.style.fontSize="25pt";
addItem.style.color="white";
addItem.style.backgroundColor="blue";
addItem.style.height="35px";
addItem.style.width="35px";
addItem.style.borderRadius = "50%";
addItem.style.fontWeight="bolder";
addItem.style.border = "none";
buttonContainer.classList.add("button-container");

buttonContainer.appendChild(addItem);
buttonContainer.appendChild(delTodo);


addItem.addEventListener("click", function () {
  showPopup1();
  todoDes = this.parentNode.parentNode.querySelector(".list"); 
});

 delTodo.addEventListener("click", function () {
  this.parentNode.parentNode.remove(); 
  checkNoCards();
});

// checkNoCards();


// var backButton = document.createElement("button");
// backButton.innerHTML = "Back";
// backButton.classList.add("back-button");
// backButton.style.display = "none"; // Initially hide the back button
var allCards = document.getElementsByClassName("todocard");
var body = document.body;
todoHeading.addEventListener("click", function() {
  // body.classList.add("hide-scrollbar");
  toggleCard(this.parentNode);
  backButton.style.display = "inline"; // Show the back button
});

// backButton.addEventListener("click", function() {
//     backButton.style.display = "none"; // Hide the back button
//     var allCards = document.getElementsByClassName("todocard");
//     document.getElementById("todoHeading").style.display = "none";
//     document.getElementById("heading").innerHTML = "Tasks";
//     document.getElementById("list1").innerHTML = " List";
//     document.getElementById("heading").style.display = "inline";
//     document.getElementById("list1").style.display = "inline";
//     document.getElementById("heading").style.margin = "0px 0px 0px 0px";
//     document.getElementById("list1").style.margin = "0px 0px 0px 130px"
//     document.getElementById("heading").style.position = "absolute";
//     document.getElementById("heading").style.top= "100px";
//     document.getElementById("heading").style.left= "100px";
//     document.getElementById("list1").style.position = "absolute";
//     document.getElementById("list1").style.top= "100px";
//     // document.getElementById("heading").style.opacity= "2";
//     // document.getElementById("heading").style.color = "white";
//     document.getElementById("addItem1").style.marginTop = "70px";
    
//     var todoHeading = document.querySelector("#todoHeading");
//     var hr = document.querySelector("hr");
    
// //  document.getElementById("heading").style.display = "block";
//   // Show all cards
//   for (var i = 0; i < allCards.length; i++) {
//     var currentCard = allCards[i];
//     currentCard.classList.remove("hidden");
//   }
 
 
//  backButton.style.display = "none";
  
//   todoHeading.style.display = "block"; // Show the todoHeading
//   hr.style.display = "block"; // Show the hr

backButton.addEventListener("click", function() {
    backButton.style.display = "none"; // Hide the back button
    var allCards = document.getElementsByClassName("todocard");
    document.getElementById("todoHeading").style.display = "none";
    document.getElementById("heading").innerHTML = "Tasks";
    document.getElementById("list1").innerHTML = " List";
    document.getElementById("heading").style.display = "inline";
    document.getElementById("list1").style.display = "inline";
    document.getElementById("heading").style.margin = "17px auto auto -457px";
    document.getElementById("list1").style.margin = "35px auto auto 219px";
    // document.getElementById("list1").style.marginTop="10px";
    document.getElementById("todos").style.justifyContent = "center";
    document.getElementById("addItem1").style.marginTop = "17px";
    var todoHeading = document.querySelector("#todoHeading");
    var hr = document.querySelector("hr");

    // Show all cards
    for (var i = 0; i < allCards.length; i++) {
        var currentCard = allCards[i];
        currentCard.classList.remove("hidden");
        currentCard.style.margin = "10px";
    }

    backButton.style.display = "none";
    todoHeading.style.display = "block"; // Show the todoHeading
    hr.style.display = "block"; // Show the hr


  // body.classList.add("hide-scrollbar");
  currentCard.style.marginLeft="0px"
  document.getElementById("todos").style.justifyContent="space-between";


  if (window.innerWidth <= 768) {
    
    document.getElementById("heading").style.margin = "-70px 0px 0px 240px";
    document.getElementById("list1").style.margin = "-70px 0px 0px 240px"
    document.getElementById("heading").style.position = "relative";
    document.getElementById("heading").style.top= "50px";
    document.getElementById("heading").style.left= "-150px";
    document.getElementById("heading").style.fontSize= "50px";
    document.getElementById("list1").style.position = "relative";
    document.getElementById("list1").style.top= "-10px";
    document.getElementById("list1").style.left= "-20px";
    document.getElementById("addItem1").style.marginTop = "10px";
    document.getElementById("addItem1").style.marginLeft = "100px";
    // document.getElementsByClassName("todocard").style.marginLeft = "40px";
    document.getElementById("todos").style.justifyContent = "center";
  }
});

backButton.classList.add("center");

document.body.insertBefore(backButton, document.body.firstChild);
checkNoCards();
}

function showPopup() {
  popup.classList.add("show");
  applyBlur();
}

function showPopup1() {
  popup1.classList.add("show");
  applyBlur();
}

function hidePopup() {
  popup.classList.remove("show");
  popup1.classList.remove("show");
  removeBlur();
}

function addItemToList() {
createshow();
hidePopup();
}

function addItemToListToDes() {
  var newItem = document.createElement("div");
  newItem.innerHTML = taskname1.value;
  newItem.classList.add("item-container");

  var doneButton = document.createElement("button");
  doneButton.innerHTML = "Done";
  doneButton.classList.add("done-button");
  doneButton.addEventListener("click", function () {
      newItem.classList.add("done");
      doneButton.style.display="none";
      doneButton.style.color="red";

  });

  todoDes.appendChild(newItem);
  newItem.appendChild(doneButton);

  hidePopup();
}



