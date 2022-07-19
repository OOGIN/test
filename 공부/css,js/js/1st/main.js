const daysE1 = document.querySelector('#days');
const hoursE1 = document.querySelector('#hours');
const minsE1 = document.querySelector('#mins');
const secondsE1 = document.querySelector('#seconds');
const newyears ='1 jan 2023';

console.log(daysE1, hoursE1, minsE1)

function countdown() {
    const newyearsDate = new Date(newyears);
    const currentDate = new Date();

    const secodens = (newyearsDate - currentDate) / 1000;

    const days = Math.floor(secodens / 3600 / 24);
    const hours = Math.floor(secodens / 3600)%24;
    const mins = Math.floor(secodens / 60) %60;
    const seconds = Math.floor(secodens) % 60;

    daysE1.innerHTML = sex(days);
    hoursE1.innerHTML = sex(hours);
    minsE1.innerHTML = sex(mins);
    secondsE1.innerHTML = sex(seconds);

}

const sex = (time) => {
    return time < 10 ?  `0${time}`:time;
};

countdown();

setInterval(countdown, 1000); 