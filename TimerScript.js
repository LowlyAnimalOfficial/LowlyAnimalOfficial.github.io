const targetDate = new Date(1707199810000);

const millisecondsPerSecond = 1000;
const millisecondsPerMinute = millisecondsPerSecond * 60;
const millisecondsPerHour = millisecondsPerMinute * 60;
const millisecondsPerDay = millisecondsPerHour * 24;

document.addEventListener("DOMContentLoaded", () => {
    calculateTime();

    setInterval(() => {
        calculateTime();

    }, 1000);
});

function calculateTime() {
    const currentTime = new Date();
    const difference = targetDate - currentTime;

    const days = Math.floor(-difference / millisecondsPerDay);
    const hours = Math.floor((-difference % millisecondsPerDay) / millisecondsPerHour);
    const minutes = Math.floor((-difference % millisecondsPerHour) / millisecondsPerMinute);
    const seconds = Math.floor((-difference % millisecondsPerMinute) / millisecondsPerSecond);

    timerAnim(seconds / 60, "Second");
    timerAnim(minutes / 60, "Minute");
    timerAnim(hours / 24, "Hour");
    timerAnim(days / 365, "Day");

    document.getElementById("days").innerText = CheckFormat(days);
    document.getElementById("hours").innerText = CheckFormat(hours);
    document.getElementById("minutes").innerText = CheckFormat(minutes);
    document.getElementById("seconds").innerText = CheckFormat(seconds);
}

function CheckFormat(time) {
    if (time.toString().length == 1) {
        return "0" + time.toString();
    }
    return time.toString();
}

function timerAnim(ratio, type) {
    document.getElementById(`border${type}s`).style.backgroundImage = `conic-gradient(white ${ratio * 100}%, rgba(232, 242, 249, 1) 0%)`;
}