const body = document.querySelector("body");
const showPopup = document.querySelector(".buy-button");
const popupClose = document.querySelector(".close-popup");

let popup = document.getElementById('popup');

let unlock = true;

const timeout= 800;


showPopup.addEventListener("click", function () {
    popup.classList.add("open");
});

popupClose.addEventListener("click", function () {
    popup.classList.remove("open");
});




////get popup inputs
const inpDate = document.querySelector(".date");
const inpTime = document.querySelector(".time"); 
let today = new Date().toISOString().slice(0, 10);
/// get popup set elemets
const setDate = document.querySelector(".set-date");
const setTime = document.querySelector(".set-time");
const setTicket = document.querySelector(".set-ticket");

inpDate.addEventListener("click", function () {
    const newDateInp = document.createElement('input');
    /// add type date + value + current Date
    newDateInp.setAttribute("type", "date");
    newDateInp.value = today;
    newDateInp.setAttribute("min", today);
    newDateInp.classList.add("date");
    newDateInp.draggable = true;
    // replace on input type date
    inpDate.parentNode.replaceChild(newDateInp, inpDate);
    /// show set up date
    setDate.textContent = newDateInp.value;
    newDateInp.onchange = () => {
        setDate.textContent = newDateInp.value;
    }
}); 

inpTime.addEventListener("click", function () {
    const newTimeInp = document.createElement('input');
    /// add type time + value + current time
    newTimeInp.setAttribute("type", "time");
    /// set up value + style 
    newTimeInp.setAttribute("list", "data-time");
    newTimeInp.value = "09:00";
    newTimeInp.classList.add("time");
    // replace on input type time
    inpTime.parentNode.replaceChild(newTimeInp, inpTime);
    /// show set up date
    setTime.textContent = newTimeInp.value;
    newTimeInp.onchange = () => {
        setTime.textContent = newTimeInp.value;
    }
}); 

const ticketTypes = document.querySelectorAll('.label-radio');

ticketTypes.forEach(e => {
    if(e.checked) {
        console.log(e.textContent);
    }
})

console.log(ticketTypes)



// setDate.textContent = 'conta';

// console.log(setTime);
// console.log(setTicket)