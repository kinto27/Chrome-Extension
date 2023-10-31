
let myLeads = [];
const inputBtn = document.getElementById("input-btn"); 
const ulEL = document.getElementById("ul-el");
const inputEl = document.getElementById("input-el");
const deletebtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")


if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

tabBtn.addEventListener("click", function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
  })
  //console.log(tabs[0].url)
  myLeads.push(tabs[0].url)
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)
})

function render(leads) {
  let listItems = "";
  for (let i = 0; i<leads.length; i++) {
    listItems += `<li>
    <a target = '_blank' href = '${leads[i]}'>${leads[i]}  
    </a>
    </li>`
  }
  ulEL.innerHTML = listItems;
}

deletebtn.addEventListener("dblclick", function() {
  localStorage.clear(); 
  myLeads = []
  render(myLeads)
})

inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  console.log(myLeads)
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads);
  console.log(localStorage.getItem("myLeads"))
})

// let listItems = "";
// for (let i = 0; i<myLeads.length; i++) {
//   listItems += "<li>" + myLeads[i] + "</li>"  
// }
// ulEL.innerHTML = listItems;
 
