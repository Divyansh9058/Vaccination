let vaccineData = JSON.parse(localStorage.getItem("vaccinated")) || [];

let usersTable = document.querySelector("tbody");
//console.log(vaccineData);

vac(vaccineData);

function vac(vaccine){
usersTable.innerHTML = null;
vaccine.forEach(function(user){
    let row = document.createElement("tr");


  row.innerHTML = `
  <td>${user.uniqueId}</td>
  <td>${user.name}</td>
  <td>${user.age}</td>
  <td>${user.designation}</td>
  <td>${user.priority}</td>
  <td>${user.vaccine}</td>
  `;

    //console.log(user);
    usersTable.append(row);
   
})
}


let selected = document.getElementById("filter-vaccine")

selected.addEventListener("change",()=>{
  selectVaccine(vaccineData)
})

function selectVaccine(vaccineData) {
  let v = document.getElementById("filter-vaccine").value
  //console.log(v)
  let filter_vaccine = []
  if (v == "Covishield") {
    filter_vaccine = vaccineData.filter((el) => {
      return el.vaccine == "Covishield"
    })
    vac(filter_vaccine)
  }
  else if (v == "Covaxin") {
    filter_vaccine = vaccineData.filter((el) => {
      return el.vaccine == "Covaxin"
    })
    vac(filter_vaccine)
  }
  else if (v == "Sputnik") {
    filter_vaccine = vaccineData.filter((el) => {
      return el.vaccine == "Sputnik"
    })
    vac(filter_vaccine)
  }
  else {
    vac(vaccineData)
  }
}




let  Prio= document.getElementById("filter-priority")

Prio.addEventListener("change",()=>{
  selectPriority(vaccineData)
})

function selectPriority(vaccineData) {
  let p = document.getElementById("filter-priority").value
  //console.log(v)
  let filter_priority = []
  if (p == "p0") {
    filter_priority = vaccineData.filter((el) => {
      return el.priority == "p0"
    })
    vac(filter_priority)
  }
  else if (p == "p1") {
    filter_priority = vaccineData.filter((el) => {
      return el.priority == "p1"
    })
    vac(filter_priority)
  }
  else if (p == "p2") {
    filter_priority = vaccineData.filter((el) => {
      return el.priority == "p2"
    })
    vac(filter_priority)
  }
  else if (p == "p3") {
    filter_priority = vaccineData.filter((el) => {
      return el.priority == "p3"
    })
    vac(filter_priority)
  }
  else {
    vac(vaccineData)
  }
}




let  sort= document.getElementById("sort-age")

sort.addEventListener("change",()=>{
  selectSort(vaccineData)
})

function selectSort(vaccineData) {
  let s = document.getElementById("sort-age").value
  
  if (s == "low") {
    
    let newData = vaccineData.sort((a, b) => +a.age - +b.age);
     vac(newData);

  }
  else if (s == "high") {
    
    let newData = vaccineData.sort((a, b) => +b.age - +a.age);
     vac(newData);

  }
  
  else {
    vac(vaccineData)
  }
}

