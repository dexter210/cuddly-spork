var login = false;

var TBATEgrades = [
  {
    name: "Armin Arlet",
    grade: 100
  },
  {
    name: "Hange Zoe",
    grade: 92
  },
  {
    name: "Conny Springer",
    grade: 76
  },
  {
    name: "Levi Ackerman",
    grade: 83
  },
  {
    name: "Sasha Braus",
    grade: 86
  },
  {
    name: "Erwin Swith",
    grade: 90
  }
];
function vroomVROOM(){
  if (login == true){
    var NAVpages = ["Home", "ADD Grade", "View Grades"];    
    nav(NAVpages);
  }else{
    loginNAV();
    renderList("login");
  }
}
function loginNAV(){
  var nav = document.createElement("nav");
  nav.classList.add("nav");
  var wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  document.body.appendChild(nav);
  document.body.appendChild(wrapper);
}
function nav(gradeNAVlist){
  for (var i = 0; i < gradeNAVlist.length; i++){
    var button = document.createElement("button");
    var val = gradeNAVlist[i];
    button.innerHTML = gradeNAVlist[i];
    button.addEventListener("click", function() {
      renderList(val);
    });
    document.body.querySelector(".nav").appendChild(button);
  }
}

function renderList(page){
  if (page === "login"){
    Login();
  }else if (page === "choosePAGE"){
    choosePAGE();
  }else if (page === "Add Grade"){
    addGrade();
  }else if (page === "Grade View"){
    gradeView();
  }
}
function Login(){
  var wrapper = document.querySelector(".wrapper");
//
  var username = document.createElement("input");
  username.id = "inputUser";
  username.placeholder = "cool...";
//
  var password = document.createElement("input");
  password.setAttribute("type", "text");
  password.id = "inputPass";
  password.placeholder = "password...";
//
  var submitButton = document.createElement("button");
  submitButton.innerHTML = "Log In";
  submitButton.className = "loginButton";
//
  var signinIdiot = document.createElement("h2");
  signinIdiot.innerHTML = "Sign in Now!";
  signinIdiot.id = "signinNow";
//
  wrapper.innerHTML = "";
  wrapper.appendChild(signinIdiot);
  wrapper.appendChild(username);
  wrapper.appendChild(password);
  wrapper.appendChild(submitButton);
//
  var inputUser = document.getElementById("inputUser");
  var inputPass = document.getElementById("inputPass");
//
  document.body.querySelector(".loginButton").addEventListener("click", function(){
      if (userValid(inputUser) && passValid(inputPass)){
        loggedIn = true;
        vroomVROOM();
        choosePAGE();
      }else{
        if (!userValid(inputUser) && passValid(inputPass)){
          window.alert("Wrong Username. Try 'cool'");
        }else if (userValid(inputUser) && !passValid(inputPass)){
          window.alert("Wrong password. Try 'password'");
        }else{
          window.alert(
            
          );
        }
      }
    });
  function userValid(ele){
    if (ele.value == "cool"){
      return true;
    }else{
      return false;
    }
  }
  function passValid(ele){
    if (ele.value == "password"){
      return true;
    }else{
      return false;
    }
  }
}
function choosePAGE(){
  var wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML = "";
//
  var homeInstructions = document.createElement("h2");
  homeInstructions.innerHTML = "Would you like to view your students' grades or add more grades? ";
  homeInstructions.id = "homeInstructions";
//
  var gradeButton1 = document.createElement("button");
  var addButton1 = document.createElement("button");
  gradeButton1.classList.add("fix");
//
  gradeButton1.innerHTML = "Grade View";
  gradeButton1.addEventListener("click", function(){
    gradeView();
  });
//
  addButton1.innerHTML = "Add Grade";
  addButton1.addEventListener("click", function(){
    renderList("Add Grade");
  });
//
  wrapper.appendChild(homeInstructions);
  document.body.querySelector(".wrapper").appendChild(gradeButton1);
  document.body.querySelector(".wrapper").appendChild(addButton1);
}
function addGrade(){
  var wrapper = document.querySelector(".wrapper");
//
  var SNinput = document.createElement("input");
  SNinput.id = "nameInput";
  SNinput.placeholder = "Student's name...";
//
  var gradeNUMBER = document.createElement("input");
  gradeNUMBER.setAttribute("type", "number");
  gradeNUMBER.setAttribute("min", "0");
  gradeNUMBER.setAttribute("max", "100");
  gradeNUMBER.id = "gradeInput";
  gradeNUMBER.placeholder = "Grade (0-100)";
//
  var AGButton = document.createElement("button");
  AGButton.innerHTML = "Add Grade";
  AGButton.className = "submitButton";
//
  var stupidGrades = document.createElement("h2");
  stupidGrades.innerHTML = "Adding Grades? First, type the student's first and last name. Then, type or click the arrow to add grade from 0-100. Then, click 'submit.'";
  stupidGrades.id = "stupidGrades";
//
  wrapper.innerHTML = "";
  wrapper.appendChild(stupidGrades);
  wrapper.appendChild(SNinput);
  wrapper.appendChild(gradeNUMBER);
  wrapper.appendChild(AGButton);
//
  var nameInput = document.getElementById("nameInput");
  var gradeInput = document.getElementById("gradeInput");
//
  var GB2 = document.createElement("button");
  GB2.classList.add("goToGrades");
  GB2.innerHTML = "Grade View";
  GB2.addEventListener("click", function(){
    gradeView();
  });
  document.body.querySelector(".wrapper").appendChild(GB2);
    document.body.querySelector(".submitButton").addEventListener("click", function(){
      if (inputValid(nameInput) && gradeValid(gradeInput)){
        submission();
        window.alert("Grade Submitted.");
        gradeView();
      }else{
        if (!inputValid(nameInput) && gradeValid(gradeInput)){
          window.alert("Type the student's name.");
        }else if (inputValid(nameInput) && !gradeValid(gradeInput)){
          window.alert("Use a number 0-100 without a % sign or anything else.");
        }else{
          window.alert(
            "Are you even trying to add grades ?");
        }
      }
    });
  function submission(){
    var arrObject = {
      name: nameInput.value,
      grade: Number(gradeInput.value)
    };
    TBATEgrades.push(arrObject);
  }
  function inputValid(ele){
    if (ele.value !== ""){
      return true;
    }else{
      return false;
    }
  }
  function gradeValid(ele){
    if (Number(ele.value) && ele.value >= 0 && ele.value < 101){
      return true;
    }else{
      return false;
    }
  }
}
function gradeView(){
  var wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML = "";
  for (var i = 0; i < TBATEgrades.length; i++){
    var ele = document.createElement("div");
    ele.classList.add("borderBottom");
//
   TBATEgrades[i].name = '<span class="gradeNameStyle">' + TBATEgrades[i].name + '</span>'; 
   TBATEgrades[i].grade = '<span class="gradeGradeStyle">' + TBATEgrades[i].grade + '</span>';
//
    ele.innerHTML = TBATEgrades[i].name + "'s grade is: " + TBATEgrades[i].grade + "%";
    wrapper.appendChild(ele);
  }
//
  var addButton2 = document.createElement("button");
  addButton2.classList.add("goToAddGrades");
  addButton2.innerHTML = "Add another grade";
  addButton2.addEventListener("click", function(){
    addGrade();
  });
  document.body.querySelector(".wrapper").appendChild(addButton2);
}
//
vroomVROOM();