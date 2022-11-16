// get div with number input 
const counters = document.querySelectorAll('.block');
/// get input type radio
const typeOfTickets = document.querySelectorAll('[type="radio"]');
/// set up inputs data-attribite (tickets costs)
let basicAmount = document.querySelector('#basic');
let seniorAmount = document.querySelector('#senior');
const permanentTicket = document.getElementById("r1");
const temporaryTicket = document.getElementById("r2");
const combinedTicket = document.getElementById("r3");
const permanent = permanentTicket.setAttribute('data-price', '20');
const temporary = temporaryTicket.setAttribute('data-price', '25');
const combined = combinedTicket.setAttribute('data-price', '40');
/// get elem for output price
const beforePriceItem = document.querySelector(".text");
let totalPrice = 0;

function setPrice() {
    if(typeOfTickets) {
        typeOfTickets.forEach(e => {
            if(e.checked) {
                totalPrice = (+e.dataset.price * basicAmount.value) + (+e.dataset.price * seniorAmount.value / 2);
                /// create elem for add current price
                let span = document.createElement('span');
                /// add value for this elem //// 
                let currentPrice = document.createTextNode(`${totalPrice}`);
                /// add node and class
                span.appendChild(currentPrice);
                span.classList.add('show-price');
                /// paste on the page
                beforePriceItem.appendChild(currentPrice);
            }
            /// refresh price onclick
            e.addEventListener('click', () => {
                beforePriceItem.removeChild(beforePriceItem.lastChild);
                setPrice();
            })
        });
    }
}

///// counters
if(counters) {
    setPrice();
    counters.forEach(counter => {
        counter.addEventListener('click', e => {
            /// get elem on click
            const target = e.target;
            /// find out closest button
            if(target.closest('.ticket__button')) {
                /// get closest input and value
                let quantity = parseInt(target.closest('.block').querySelector('input').value);
                /// check the button that is pressed 
                if(target.classList.contains('ticket__button_add')){
                    quantity === 20 ? quantity : quantity++;
                }else{
                    quantity === 0 ? quantity : --quantity;
                }
                /// get the new value for input
                target.closest('.block').querySelector('input').value = quantity;
                /// delete output prise
                beforePriceItem.removeChild(beforePriceItem.lastChild);
                /// show new price 
                setPrice();
            }
        })
    })
}

