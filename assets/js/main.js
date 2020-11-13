const birthDay = "16 Feb 2021";

const day = document.getElementById('days');
const hour = document.getElementById('hours');
const min = document.getElementById('mins');
const sec = document.getElementById('seconds');


const countdown = () => {
    const birthDayDate = new Date(birthDay);
    const currentDate = new Date();
    const seconds = (birthDayDate - currentDate) / 1000;

    const days = Math.floor(seconds / 3600 / 24);
    const hours = Math.floor(seconds / 3600) % 24;
    const mins = Math.floor(seconds / 60) % 60;
    const secs = Math.floor(seconds % 60);

    day.innerHTML = days;
    hour.innerHTML = formatTime(hours);
    min.innerHTML = formatTime(mins);
    sec.innerHTML = formatTime(secs);
}

const formatTime = time => {
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);