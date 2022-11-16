// get pupup, buttons 
const showPopup = document.querySelector(".buy-button");
const popupClose = document.querySelector(".close-popup");
const popup = document.getElementById('popup');

showPopup.addEventListener("click", function () {
    popup.classList.add("open");
    chooseTicket();
    transferTicketsCount();
    refreshPrice();
});

popupClose.addEventListener("click", function () {
    popup.classList.remove("open");
});

/// get popup set elemets
const setDate = document.querySelector(".set-date");
const setTime = document.querySelector(".set-time");
const setTicket = document.querySelector(".set-ticket");
/// get current date
let now = new Date();
///object for correct data format
const options = { weekday: 'long', month: 'long', day: 'numeric', hour12: false };
/// string for display date and show it
let displayDate = now.toLocaleTimeString('en-us', options).split('at')[0];
setDate.textContent = displayDate;
/// get hours and minutes and show it
let minutes = String(now.getMinutes()).padStart(2, "0");
setTime.textContent = `${now.getHours()}:${minutes}`;
////get popup inputs
const inpDate = document.querySelector(".date");
const inpTime = document.querySelector(".time"); 

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
        /// change and the ticket type in overview
        refreshPrice();
    }
};
/// transfer count of tickets to popup
function transferTicketsCount() {
    /// set up the new value for POPUP inputs
    document.querySelector(".popup-basic").value = basicAmount.value;
    document.querySelector("#basic-count").value = basicAmount.value;
    document.querySelector(".popup-senior").value = seniorAmount.value;
    document.querySelector("#senior-count").value = seniorAmount.value;
}

const changeTicketPopup = document.querySelectorAll('.change-ticket-numb');

console.log(changeTicketPopup);

if(changeTicketPopup) {
    refreshPrice();
    changeTicketPopup.forEach(typeTicket => {
        typeTicket.addEventListener('click', e => {
            /// get target elem on click
            const ticket = e.target;
            /// find out closest button
            if(ticket.closest('.overview')) {
                /// get closest input and value
                let ticketInp = parseInt(ticket.closest('.change-ticket-numb').querySelector('input').value);
                /// check the button that is pressed 
                if(ticket.classList.contains('add-ticket-popup')){
                    ticketInp === 20 ? ticketInp : ticketInp++;
                }else{
                    ticketInp === 0 ? ticketInp : --ticketInp;
                }
                /// get closest input near the target and set up it value
                let currentTicket = ticket.closest('.change-ticket-numb').querySelector('input');
                currentTicket.value = ticketInp;
                /// find out how type of tickets was it
                if(currentTicket.classList.contains('popup-basic')) {
                    document.querySelector("#basic-count").value = ticketInp;
                }else {
                    document.querySelector("#senior-count").value = ticketInp;
                }
                refreshPrice();
            }
        })
    })
}

function refreshPrice() {    
    let ticketOption = document.querySelector(".set-ticket").textContent;

    let permanentTicket = document.getElementById("r1").value;
    let temporaryTicket = document.getElementById("r2").value;
    let combinedTicket = document.getElementById("r3").value;

    let basicCost = document.querySelector(".basic-cost");
    let seniorCost = document.querySelector(".senior-cost");
    let allCost = document.querySelector(".all-cost");

    switch (ticketOption) {
        case "Permanent exhibition":
            document.querySelector(".overview-basic").textContent = `Basic (${permanentTicket} €)`;
            document.querySelector(".overview-senior").textContent = `Senior (${permanentTicket / 2} €)`;
            basicCost.textContent = `${document.querySelector("#basic-count").value * permanentTicket} €`;
            seniorCost.textContent = `${document.querySelector("#senior-count").value * permanentTicket / 2} €`;
            allCost.textContent = Number(basicCost.textContent.match(/[+-]?\d+(\.\d+)?/g)) + Number(seniorCost.textContent.match(/[+-]?\d+(\.\d+)?/g)) + ' €';
            break;
        case "Temporary exhibition":
            document.querySelector(".overview-basic").textContent = `Basic (${temporaryTicket} €)`;
            document.querySelector(".overview-senior").textContent = `Senior (${temporaryTicket / 2} €)`;
            basicCost.textContent = `${document.querySelector("#basic-count").value * temporaryTicket} €`;
            seniorCost.textContent = `${document.querySelector("#senior-count").value * temporaryTicket / 2} €`;
            allCost.textContent = Number(Number(basicCost.textContent.match(/[+-]?\d+(\.\d+)?/g))) + Number(seniorCost.textContent.match(/[+-]?\d+(\.\d+)?/g)) + ' €';
            break;
        case "Combined Admission":
            document.querySelector(".overview-basic").textContent = `Basic (${combinedTicket} €)`;
            document.querySelector(".overview-senior").textContent = `Senior (${combinedTicket / 2} €)`;
            basicCost.textContent = `${document.querySelector("#basic-count").value * combinedTicket} €`;
            seniorCost.textContent = `${document.querySelector("#senior-count").value * combinedTicket / 2} €`;
            allCost.textContent = Number(basicCost.textContent.match(/[+-]?\d+(\.\d+)?/g)) + Number(seniorCost.textContent.match(/[+-]?\d+(\.\d+)?/g)) + ' €';
            break;
        default:
            return null;
    }
}
