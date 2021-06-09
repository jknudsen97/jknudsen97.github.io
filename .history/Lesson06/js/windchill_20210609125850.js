let temp = document.querySelector('#temp');
let speed = document.querySelector('#speed');

function windChill(t, s)
{
    let wChill = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t) * (Math.pow(s, 0.16));
    return Math.round(wChill);
}

if (temp <= 50 && speed >= 3)
{
    let wc = windChill(temp, speed);
    document.querySelector('#WC').textContent = wc;
}

else
{
    let wc = "N/A";
    document.querySelector("#WC").textContent = wc;
}