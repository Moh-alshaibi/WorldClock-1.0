'use strict';

let intervalId;

function ukTime() {
    clearInterval(intervalId);
    let currentDate = new Date().toLocaleDateString("en-GB", {timeZone: "Europe/London"});
    let currentTime = new Date().toLocaleTimeString("en-GB", {timeZone: "Europe/London"});
    document.getElementById("cTime").innerHTML = currentDate + ' ★ ' + currentTime;
    intervalId = setInterval(ukTime, 1000);
}

function germanTime() {
    clearInterval(intervalId);
    let currentDate = new Date().toLocaleDateString("en-GB", {timeZone: "Europe/Berlin"});
    let currentTime = new Date().toLocaleTimeString("en-GB", {timeZone: "Europe/Berlin"});
    document.getElementById("cTime").innerHTML = currentDate + ' ★ ' + currentTime;
    intervalId = setInterval(germanTime, 1000);
}

function yemenTime() {
    clearInterval(intervalId);
    let currentDate = new Date().toLocaleDateString("en-GB", {timeZone: "Asia/Aden"});
    let currentTime = new Date().toLocaleTimeString("en-GB", {timeZone: "Asia/Aden"});
    document.getElementById("cTime").innerHTML = currentDate + ' ★ ' + currentTime;
    intervalId = setInterval(yemenTime, 1000);
}

function chinaTime() {
    clearInterval(intervalId);
    let currentDate = new Date().toLocaleDateString("en-GB", {timeZone: "Asia/Shanghai"});
    let currentTime = new Date().toLocaleTimeString("en-GB", {timeZone: "Asia/Shanghai"});
    document.getElementById("cTime").innerHTML = currentDate + ' ★ ' + currentTime;
    intervalId = setInterval(chinaTime, 1000);
}

function usaTime() {
    clearInterval(intervalId);
    let currentDate = new Date().toLocaleDateString("en-GB", {timeZone: "America/New_York"});
    let currentTime = new Date().toLocaleTimeString("en-GB", {timeZone: "America/New_York"});
    document.getElementById("cTime").innerHTML = currentDate + ' ★ ' + currentTime;
    intervalId = setInterval(usaTime, 1000);
}

function egyptTime() {
    clearInterval(intervalId);
    let currentDate = new Date().toLocaleDateString("en-GB", {timeZone: "Africa/Cairo"});
    let currentTime = new Date().toLocaleTimeString("en-GB", {timeZone: "Africa/Cairo"});
    document.getElementById("cTime").innerHTML = currentDate + ' ★ ' + currentTime;
    intervalId = setInterval(egyptTime, 1000);
}

function brazilTime() {
    clearInterval(intervalId);
    let currentDate = new Date().toLocaleDateString("en-GB", {timeZone: "America/Sao_Paulo"});
    let currentTime = new Date().toLocaleTimeString("en-GB", {timeZone: "America/Sao_Paulo"});
    document.getElementById("cTime").innerHTML = currentDate + ' ★ ' + currentTime;
    intervalId = setInterval(brazilTime, 1000);
}

function japanTime() {
    clearInterval(intervalId);
    let currentDate = new Date().toLocaleDateString("en-GB", {timeZone: "Asia/Tokyo"});
    let currentTime = new Date().toLocaleTimeString("en-GB", {timeZone: "Asia/Tokyo"});
    document.getElementById("cTime").innerHTML = currentDate + ' ★ ' + currentTime;
    intervalId = setInterval(japanTime, 1000);
}
