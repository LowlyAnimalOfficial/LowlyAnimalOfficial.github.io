

const targetDate = new Date('2024-02-06:10:10');

document.addEventListener("DOMContentLoaded", function()
{
    const currentTime = new Date();
    const difference = targetDate - currentTime;

    const days = Math.floor(-difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((-difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((-difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((-difference % (1000 * 60)) / 1000);

    timerAnim(seconds / 60 * 100, "Second");
    timerAnim(minutes / 60 * 100, "Minute");
    timerAnim(hours / 24 * 100, "Hour");
    timerAnim(days / 365 * 100, "Day");

    document.getElementById("days").innerText = CheckFormat(days);
    document.getElementById("hours").innerText = CheckFormat(hours);
    document.getElementById("minutes").innerText = CheckFormat(minutes);
    document.getElementById("seconds").innerText = CheckFormat(seconds);
});

setInterval(() =>
{
    const currentTime = new Date();
    const difference = targetDate - currentTime;

    const days = Math.floor(-difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((-difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((-difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((-difference % (1000 * 60)) / 1000);

    timerAnim(seconds / 60 * 100, "Second");
    timerAnim(minutes / 60 * 100, "Minute");
    timerAnim(hours / 24 * 100, "Hour");
    timerAnim(days / 365 * 100, "Day");

    document.getElementById("days").innerText = CheckFormat(days);
    document.getElementById("hours").innerText = CheckFormat(hours);
    document.getElementById("minutes").innerText = CheckFormat(minutes);
    document.getElementById("seconds").innerText = CheckFormat(seconds);

}, 1000);

function CheckFormat(time)
{
    if (time.toString().length == 1)
    {
        return "0" + time.toString();
    }
    else
    {
        return time.toString();
    }
}

function timerAnim(percentage, type)
{
    document.getElementById(`border${type}s`).style.backgroundImage = `conic-gradient(white ${percentage}%, rgba(232, 242, 249, 1) 0%)`;
}