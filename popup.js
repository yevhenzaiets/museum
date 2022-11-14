const body = document.querySelector("body");
const showPopup = document.querySelector(".buy-button");
const popupClose = document.querySelector(".close-popup");

let popup = document.getElementById('popup');

let unlock = true;

const timeout= 800;


showPopup.addEventListener("click", function () {
    popup.classList.add("open");
    chooseTicket();
});

popupClose.addEventListener("click", function () {
    popup.classList.remove("open");
});


/// get popup set elemets
const setDate = document.querySelector(".set-date");
const setTime = document.querySelector(".set-time");
const setTicket = document.querySelector(".set-ticket");
/// get full day and month name
let now = new Date();
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const numberOfMonth = now.getDate(); 
const day = days[now.getDay()];
const month = months[now.getMonth()];
/// string for display date and show it
let displayDate = `${day}, ${month} ${numberOfMonth}`;
setDate.textContent = displayDate;
/// get hours and minutes and show it
// let currentTime = `${now.getHours()}:${now.getMinutes()}`;
let minutes = String(now.getMinutes()).padStart(2, "0");
setTime.textContent = `${now.getHours()}:${minutes}`;

////get popup inputs
const inpDate = document.querySelector(".date");
const inpTime = document.querySelector(".time"); 
///object for correct data format
const options = { weekday: 'long', month: 'long', day: 'numeric', hour12: false };

inpDate.addEventListener("click", function () {
    const newDateInp = document.createElement('input');
    /// add type date + value + current Date
    newDateInp.setAttribute("type", "date");
    let today = new Date().toISOString().slice(0, 10);
    newDateInp.setAttribute("min", today);
    newDateInp.classList.add("date");
    // replace on input type date
    inpDate.parentNode.replaceChild(newDateInp, inpDate);
    /// show set up date
    newDateInp.onchange = () => {
        // delete time from correct value
        setDate.textContent = new Date(newDateInp.value).toLocaleTimeString('en-us', options).split('at')[0];
    }
}); 

inpTime.addEventListener("click", function () {
    const newTimeInp = document.createElement('input');
    /// add type time + value + current time
    newTimeInp.setAttribute("type", "time");
    /// set up value + style 
    newTimeInp.setAttribute("list", "data-time");
    newTimeInp.classList.add("time");
    // replace on input type time
    inpTime.parentNode.replaceChild(newTimeInp, inpTime);
    /// show set up date
    newTimeInp.onchange = () => {
        setTime.textContent = newTimeInp.value;
    }
}); 
//// option to choose type of ticket
function chooseTicket() {
    const ticketTypes = document.querySelectorAll('.ticket');
    ///choose on section ticket
    ticketTypes.forEach(e => {
        if(e.checked) {
            setTicket.textContent = e.closest(".tickets-type").textContent.trim();
        }
    });
    ///choose in popup
    document.querySelector('.choose-ticket-type').onchange = () => {
        setTicket.textContent = document.querySelector('.choose-ticket-type').value;
    }
};
