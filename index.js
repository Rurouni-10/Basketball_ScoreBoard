let count = 0
let count2 = 0
let countPeriod = 0
let countFoul1 = 0
let countFoul2 = 0
let number = document.getElementById("number")
let number2 = document.getElementById("number2")
let numberPeriod = document.getElementById("number3")
let numberFoul = document.getElementById("number4")
let numberFoul2 = document.getElementById("number5")

function plusOneHome() {
    count += 1
    number.textContent = count
}
function plusTwoHome() {
    count += 2
    number.textContent = count
}
function plusThreeHome() {
    count += 3
    number.textContent = count
}
function plusOneAway() {
    count2 += 1
    number2.textContent = count2
}
function plusTwoAway() {
    count2 += 2
    number2.textContent = count2
}

function plusThreeAway() {
    count2 += 3
    number2.textContent = count2
}

function plusOne() {
    countPeriod += 1
    numberPeriod.textContent = countPeriod
    if (countPeriod > 4) {
        alert("End of period")
        countPeriod = 0
        numberPeriod.textContent = countPeriod
    }
}

function plusOneFoul1() {
    countFoul1 += 1
    numberFoul.textContent = countFoul1
    if (countFoul1 > 5) {
        alert("End of fouls")
        countFoul1 = 0
        numberFoul.textContent = countFoul1
    }
}

function plusOneFoul2() {
    countFoul2 += 1
    numberFoul2.textContent = countFoul2
    if (countFoul2 > 5) {
        alert("End of fouls")
        countFoul2 = 0
        numberFoul2.textContent = countFoul2
    }
}


function reset() {
    count = 0
    count2 = 0
    number.textContent = count
    number2.textContent = count2
}