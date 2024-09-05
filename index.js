"use strict"

let Months = {
    "31": ["January", "March", "May", "July", "August", "October", "December"],
    "30": ["April", "June", "September", "November"],
    "28": ["February"]
}

let Container = document.getElementById("Months_Container");
let selectedMonth
Container.addEventListener('change', () =>{
    selectedMonth = Container.value;
})

for(let prop in Months){
    console.log(prop);
    for(item in prop){
        console.log(item);
    }
}






