
let registrationData = JSON.parse(localStorage.getItem("register")) || [];

let usersTable = document.querySelector("tbody");
//console.log(registrationData);

dash(registrationData);

function dash(registrationData){

usersTable.innerHTML = null;

registrationData.forEach(function(user){

    let row = document.createElement("tr");

  row.innerHTML = `
  <td>${user.uniqueId}</td>
  <td>${user.name}</td>
  <td>${user.age}</td>
  <td>${user.designation}</td>
  <td>${user.priority}</td>
  <td>${user.vaccine}</td>
  <td>${user.OTP}</td>
    <td>
        <button class="btn-delete" onClick="deleteUser(event)">Delete</button>
        <button class="btn-vaccinate" onClick="promptOTP(event)">Vaccinate</button>
    </td>`;

    //console.log(user);
    usersTable.append(row);
   
})
}
// Function to delete a user from the table and LocalStorage
function deleteUser(event) {
    let row = event.target.parentNode.parentNode;

    let uniqueId = row.children[0].innerHTML;

    registrationData = registrationData.filter(user => user.uniqueId !== uniqueId);

    localStorage.setItem("register", JSON.stringify(registrationData));

    row.remove();
}

// Function to prompt the user to enter the OTP
function promptOTP(event) {

    let row = event.target.parentNode.parentNode;

    let uniqueId = row.children[0].innerHTML;
    
    let user = registrationData.find(user => user.uniqueId == uniqueId);

    let OTP = window.prompt("Please enter the OTP:");

    if (OTP == user.OTP) {

        window.alert(`${user.name} added to queue`);

        setTimeout(() => {
            alert(`Vaccinating ${user.vaccine}`);
        }, 5000);

        setTimeout(() => {

           alert(`${user.name} vaccinated`);

            deleteUser(event);

            let vaccinatedData = JSON.parse(localStorage.getItem("vaccinated")) || [];

            vaccinatedData.push(user);

            localStorage.setItem("vaccinated", JSON.stringify(vaccinatedData));

        }, 15000);

    } else {
        window.alert("Incorrect OTP!");
    }
}



let select = document.getElementById("filter-vaccine")

select.addEventListener("change",()=>{
  selectVaccine(registrationData)
})

function selectVaccine(registrationData) {
  let v = document.getElementById("filter-vaccine").value
  //console.log(v)
  let filter_vaccine = []
  if (v == "Covishield") {
    filter_vaccine = registrationData.filter((el) => {
      return el.vaccine == "Covishield"
    })
    dash(filter_vaccine)
  }
  else if (v == "Covaxin") {
    filter_vaccine = registrationData.filter((el) => {
      return el.vaccine == "Covaxin"
    })
    dash(filter_vaccine)
  }
  else if (v == "Sputnik") {
    filter_vaccine = registrationData.filter((el) => {
      return el.vaccine == "Sputnik"
    })
    dash(filter_vaccine)
  }
  else {
    dash(registrationData)
  }
}


let  Prio= document.getElementById("filter-priority")

Prio.addEventListener("change",()=>{
  selectPriority(registrationData)
})

function selectPriority(registrationData) {
  let p = document.getElementById("filter-priority").value
  
  let filter_priority = []
  if (p == "p0") {
    filter_priority = registrationData.filter((el) => {
      return el.priority == "p0"
    })
    dash(filter_priority)
  }
  else if (p == "p1") {
    filter_priority = registrationData.filter((el) => {
      return el.priority == "p1"
    })
    dash(filter_priority)
  }
  else if (p == "p2") {
    filter_priority = registrationData.filter((el) => {
      return el.priority == "p2"
    })
    dash(filter_priority)
  }
  else if (p == "p3") {
    filter_priority = registrationData.filter((el) => {
      return el.priority == "p3"
    })
    dash(filter_priority)
  }
  else {
    dash(registrationData)
  }
}





let  sort= document.getElementById("sort-age")

sort.addEventListener("change",()=>{
  selectSort(registrationData)
})

function selectSort(registrationData) {
  let s = document.getElementById("sort-age").value
  
  if (s == "low") {
    
    let newData = registrationData.sort((a, b) => +a.age - +b.age);
     dash(newData);

  }
  else if (s == "high") {
    
    let newData = registrationData.sort((a, b) => +b.age - +a.age);
     dash(newData);

  }
  
  else {
    dash(registrationData)
  }
}




