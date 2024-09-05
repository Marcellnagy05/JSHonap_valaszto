"use strict"

let Months = {
    "31": ["January", "March", "May", "July", "August", "October", "December"],
    "30": ["April", "June", "September", "November"],
    "28": ["February"]
}

let Container = document.getElementById("Months_Container");
let main = document.getElementById("main")
let selectedMonth;
let selectedDays;
Container.addEventListener('change', () => {
    selectedMonth = Container.value;
    Months[31].forEach(element => {
        if (selectedMonth == element) {
            console.log(`True: The month has 31 days`);
            selectedDays = 31
        }
    });

    Months[30].forEach(element => {
        if (selectedMonth == element) {
            console.log(`True: The month has 30 days`);
            selectedDays = 30
        }
    });

    Months[28].forEach(element => {
        if (selectedMonth == element) {
            console.log(`True: The month has 28 days`);
            selectedDays = 28
        }
    });
    let table = document.createElement('table')
    for (let i = 0; i < selectedDays; i++) {
        main.innerHTML = ""
        let tr = document.createElement('tr')
        let td = document.createElement('td')
        let tdTextNode = document.createTextNode(i+1)
        let textBox = document.createElement('textarea')
        td.appendChild(tdTextNode)
        tr.appendChild(td)
        tr.appendChild(textBox)
        table.appendChild(tr)
        main.appendChild(table)
    }
})







