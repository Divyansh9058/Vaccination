let form = document.querySelector("form");

form.addEventListener("submit",function(event){

    event.preventDefault();

    let uniqueId = form.elements["unique-id"].value;
    let name = form.elements["name"].value;
    let age = form.elements["age"].value;
    let designation = form.elements["designation"].value;
    let priority = form.elements["priority"].value;
    let vaccine = form.elements["vaccine"].value;

    let OTP = Math.floor(Math.random() * 9999);

    if (!uniqueId || !name || !age || !designation || !priority || !vaccine) {
        alert("All fields are required");
        return;
    }

    //check age between 18-40
    if (age < 18 || age > 40) {
        alert("Age should be between 18 to 40");
        return;
    }

    // create object of data fetch from page
    let registrationData = {uniqueId, name, age, designation, priority, vaccine ,OTP};

    // getting the data from LS
    let data = JSON.parse(localStorage.getItem("register")) || [];



    // check for unique ID
    let count =0;
    data.forEach(function(item,i){
        if(item.uniqueId == uniqueId ){
            alert("Unique Id already exists, Please choose another");
          count++;
        }
    });

    let vacdata = JSON.parse(localStorage.getItem("vaccinated")) || [];
    
    vacdata.forEach(function(item,i){
        if(item.uniqueId == uniqueId ){
            alert("Unique Id already exists, Please choose another");
          count++;
        }
    });

    data.push(registrationData)

    if(count == 0){
        localStorage.setItem("register", JSON.stringify(data))
        alert("Registration Successfull !!")
        window.location.href = "dashboard.html";
    }

});