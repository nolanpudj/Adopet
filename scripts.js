//Fixed position navigation bar
window.addEventListener("scroll", () => {
    if(this.scrollY > 0){
        document.querySelector("header").style.backgroundColor = "white"
        document.querySelector("header").style.boxShadow = "#5e5e5e 0px 0px 8px"
    }else{
        document.querySelector("header").style.backgroundColor = "#00000000"
        document.querySelector("header").style.boxShadow = "none"
    }
}, false)

// Adding functionality to close the dropdown menu when clicking outside
document.addEventListener('click', function(event) {
    var isClickInside = document.querySelector('.navbar').contains(event.target);
    if (!isClickInside) {
      var dropdownMenus = document.getElementsByClassName('dropdown-menu');
      for (var i = 0; i < dropdownMenus.length; i++) {
        dropdownMenus[i].style.display = 'none';
      }
    }
  });
  

//Burger Navbar
let burger = document.getElementById("burger")
let navbar = document.getElementById("navigation-bar")
let navbarHidden = true

if(burger != null) burger.addEventListener("click", () => {
    console.log("hey")
    if(navbarHidden) navbar.style.display = "inline"
    if(!navbarHidden) navbar.style.display = "none"
    navbarHidden = !navbarHidden
})

//onresize
window.addEventListener("resize", () => {
    let phoneSize = window.matchMedia("(max-width: 550px)").matches
    if(!phoneSize) navbar.style.display = "inline"
    if(navbarHidden && phoneSize) navbar.style.display = "none"
})

//Register page validation
regForm = document.getElementById("regForm")
if(regForm != null) regForm.onsubmit = () => {return validate()}

//Login page validation
logForm = document.getElementById("logForm")
if(logForm != null) logForm.onsubmit = () => {return validate_login()}

//Login
function validate_login()
{
   if(!validate_login_email()) return false;
   if(!validate_login_password()) return false;
   alert("Log-in Successfull");
   return true;
}

//Register
function validate(){
    if(!validate_name()) return false;
    if(!validate_email()) return false;
    if(!validate_password()) return false;
    if(!validate_address()) return false;
    if(!validate_gender()) return false;
    if(!validate_terms()) return false;
    alert("Account has been registered, Welcome to our community!!");
    return true;
}

function validate_name(){
    let name = document.forms["regForm"]["name"].value
    if (name == ""){
        document.getElementById("name").style.backgroundColor = "#ffe0ee"
        alert("Name should not be empty.")
        return false
    }else if (name.length <= 2){
        document.getElementById("name").style.backgroundColor = "#ffe0ee"
        alert("Name is too short!")
        return false
    }
    document.getElementById("name").style.backgroundColor = "white"
    return true
}

function validate_email(){ //x@x.x
    let email = document.forms["regForm"]["email"].value
    let adSym = email.indexOf("@");
    if (email == ""){ //is empty
        document.getElementById("email").style.backgroundColor = "#ffe0ee"
        alert("Email should not be empty.");
        return false
    }else if ( adSym == -1 || adSym == 0 || email.startsWith(".")){ // Begins with "@" or does not exist, Begins with "."
        document.getElementById("email").style.backgroundColor = "#ffe0ee"
        alert("Invalid email.");
        return false
    }else if (email.substring(adSym+1) == "" || email.substring(adSym+1).indexOf("@") != -1){ // Ends with "@" or exist multiple
        document.getElementById("email").style.backgroundColor = "#ffe0ee"
        alert("Invalid email.");
        return false
    }
    document.getElementById("email").style.backgroundColor = "white"
    return true
}

function validate_password(){
    let password = document.forms["regForm"]["password"].value;

    if (password.length < 8){
        document.getElementById("password").style.backgroundColor = "#ffe0ee"
        alert("Password should consist of at least 8 characters or numbers")
        return false
    }
    let upper = false
    let number = false
    for(let i=0; i<password.length; i++){
        let asc = password.charCodeAt(i);
        if (asc >= 48 && asc <= 57){
            number = true
        }
        else if (asc >= 65 && asc <= 90){
            upper = true
        }
    }
    if (!upper){
        document.getElementById("password").style.backgroundColor = "#ffe0ee"
        alert("Password should have capital letter(s)")
        return false
    }
    if (!number){
        document.getElementById("password").style.backgroundColor = "#ffe0ee"
        alert("Password should have number(s)")
        return false
    }
    document.getElementById("password").style.backgroundColor = "white"
    return true
}

function validate_address(){
    let address = document.forms["regForm"]["address"].value
    if (address == ""){
        document.getElementById("address").style.backgroundColor = "#ffe0ee"
        alert("Address should not be empty")
        return false
    }
    else if (address.length <= 8){
        document.getElementById("address").style.backgroundColor = "#ffe0ee"
        alert("Address should have at least 8 characters)")
        return false
    }
    document.getElementById("address").style.backgroundColor = "white"
    return true
}

function validate_gender(){
    let gender = document.querySelectorAll("input[name='gender']")
    if(gender[0].checked || gender[1].checked) return true;
    alert("Gender should be selected.")
    return false
}

function validate_terms(){
    if(!document.forms["regForm"]["terms"].checked){
        alert("You need to agree to our terms and conditions.")
        return false
    }
    return true
}

//Log-in page validation
function validate_login_email(){ //x@x.x
    let email = document.forms["logForm"]["email"].value
    let adSym = email.indexOf("@");
    if (email == ""){ //is empty
        document.getElementById("email").style.backgroundColor = "#ffe0ee"
        alert("Email should not be empty.");
        return false
    }else if ( adSym == -1 || adSym == 0 || email.startsWith(".")){ // Begins with "@" or does not exist, Begins with "."
        document.getElementById("email").style.backgroundColor = "#ffe0ee"
        alert("Invalid email.");
        return false
    }else if (email.substring(adSym+1) == "" || email.substring(adSym+1).indexOf("@") != -1){ // Ends with "@" or exist multiple
        document.getElementById("email").style.backgroundColor = "#ffe0ee"
        alert("Invalid email.");
        return false
    }
    document.getElementById("email").style.backgroundColor = "white"
    return true
}

function validate_login_password(){
    let password = document.forms["logForm"]["password"].value;
    
    if (password.length < 8){
        document.getElementById("password").style.backgroundColor = "#ffe0ee"
        alert("Password should consist of at least 8 characters or numbers")
        return false
    }
    let upper = false
    let number = false
    for(let i=0; i<password.length; i++){
        let asc = password.charCodeAt(i);
        if (asc >= 48 && asc <= 57){
            number = true
        }
        else if (asc >= 65 && asc <= 90){
            upper = true
        }
    }
    if (!upper){
        document.getElementById("password").style.backgroundColor = "#ffe0ee"
        alert("Password should have capital letter(s)")
        return false
    }
    if (!number){
        document.getElementById("password").style.backgroundColor = "#ffe0ee"
        alert("Password should have number(s)")
        return false
    }
    document.getElementById("password").style.backgroundColor = "white"
    return true
}

//Motorcycles page view more button
let toggleSeeMore = true;
let motorbike = document.getElementById("bikes").innerHTML;

document.getElementById("view-more").addEventListener("click", () => {
    console.log("new")
    if(toggleSeeMore){
        document.getElementById("bikes").innerHTML = motorbike + 
        `<div class="motorcycle-card">
            <img src="Assets/motor (11).png"/>
            <div class="motorcycle-desc">
                <div class="motorcycle-series-price">
                    <h2>Ducati</h2>
                    <h5>429.90</h5>
                </div>
                <h4>SDCCS2</h4>
            </div>
        </div>
        <div class="motorcycle-card">
            <img src="Assets/motor (12).png"/>
            <div class="motorcycle-desc">
                <div class="motorcycle-series-price">
                    <h2>BMW</h2>
                    <h5>258.30</h5>
                </div>
                <h4>EER523</h4>
            </div>
        </div>
        <div class="motorcycle-card">
            <img src="Assets/motor (13).png"/>
            <div class="motorcycle-desc">
                <div class="motorcycle-series-price">
                    <h2>Yamada</h2>
                    <h5>539.90</h5>
                </div>
                <h4>XXTW65</h4>
            </div>
        </div>`;
        document.getElementById("view-more").innerHTML = "View Less"
    } else{
        document.getElementById("bikes").innerHTML = motorbike
        document.getElementById("view-more").innerHTML = "View More"
    }
    toggleSeeMore = !toggleSeeMore;
});

//drop down list for when others is selected
function showModelInput() 
{
    var selected_Ocp = document.getElementById("drop-down-list").value;
    var modelInputContainer = document.getElementById("model-input-container");

    // Clear any existing model input field
    modelInputContainer.innerHTML = "";
    if(selected_Ocp === "Other")
    {
        // Create and append the new model input field
        var modelInputLabel = document.createElement("label");
        modelInputLabel.textContent = "Specify your occupation:";
        var modelInput = document.createElement("input");
        modelInput.type = "text";
        modelInput.name = "model";
        modelInput.required = true;

        modelInputContainer.appendChild(modelInputLabel);
        modelInputContainer.appendChild(modelInput);
    }
  }

const dropdowns =  document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');       


    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () =>{
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');  
            });
            option.classList.add('active');
        });
    });
});