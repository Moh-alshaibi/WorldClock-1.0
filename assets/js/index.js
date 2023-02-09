'use strict';

let intervalId;

function ukTime() {
    clearInterval(intervalId);
    let currentTime = new Date().toLocaleTimeString("en-GB", {timeZone: "Europe/London"});
    document.getElementById("cTime").innerHTML = currentTime;
    intervalId = setInterval(ukTime, 1000);
}

function germanTime() {
    clearInterval(intervalId);
    let currentTime = new Date().toLocaleTimeString("de-DE");
    document.getElementById("cTime").innerHTML = currentTime;
    intervalId = setInterval(germanTime, 1000);
}

function yemenTime() {
    clearInterval(intervalId);
    let currentTime = new Date().toLocaleTimeString("ar-YE", {timeZone: "Asia/Aden"});
    document.getElementById("cTime").innerHTML = currentTime;
    intervalId = setInterval(yemenTime, 1000);
}

function chinaTime() {
    clearInterval(intervalId);
    let currentTime = new Date().toLocaleTimeString("zh-CN", {timeZone: "Asia/Shanghai"});
    document.getElementById("cTime").innerHTML = currentTime;
    intervalId = setInterval(chinaTime, 1000);
}

function usaTime() {
    clearInterval(intervalId);
    let currentTime = new Date().toLocaleTimeString("en-US", {timeZone: "America/New_York"});
    document.getElementById("cTime").innerHTML = currentTime;
    intervalId = setInterval(usaTime, 1000);
}

function egyptTime() {
    clearInterval(intervalId);
    let currentTime = new Date().toLocaleTimeString("ar-EG", {timeZone: "Africa/Cairo"});
    document.getElementById("cTime").innerHTML = currentTime;
    intervalId = setInterval(egyptTime, 1000);
}

function brazilTime() {
    clearInterval(intervalId);
    let currentTime = new Date().toLocaleTimeString("pt-BR", {timeZone: "America/Sao_Paulo"});
    document.getElementById("cTime").innerHTML = currentTime;
    intervalId = setInterval(brazilTime, 1000);
}

function japanTime() {
    clearInterval(intervalId);
    let currentTime = new Date().toLocaleTimeString("ja-JP", {timeZone: "Asia/Tokyo"});
    document.getElementById("cTime").innerHTML = currentTime;
    intervalId = setInterval(japanTime, 1000);
}