const clock = document.querySelector('.clock');
const date = document.querySelector('.date');

const DATE = new Date();

function getClock (){
    const hour = String(DATE.getHours()).padStart(2, '0');
    const mins = String(DATE.getMinutes()).padStart(2, '0');
    clock.innerText = `${hour}:${mins}`;
};
function getToday(){
    const day = String(DATE.getDate()).padStart(2, '0');
    const month = String(DATE.getMonth()).padStart(2, '0');
    const year = DATE.getFullYear();
    date.innerText = `${year}/${month}/${day}`;
};

getClock();
getToday();
setInterval(getClock, 1000);