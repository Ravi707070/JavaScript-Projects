const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "0123456789";
const symbolSet = "!@#$%^&*()_+";

const passBox = document.getElementById("pass-box");
const totalchar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");

const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
}

const generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += getRandomData(upperSet);
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerSet);
    }
    if (numberInput.checked) {
        password += getRandomData(numberSet);
    }
     if (symbolInput.checked) {
        password += getRandomData(symbolSet);
    }
    for (let i = password.length; i < totalchar.value; i++) {
        const sets = [];
        if (upperInput.checked) sets.push(upperSet);
        if (lowerInput.checked) sets.push(lowerSet);
        if (numberInput.checked) sets.push(numberSet);
        if (symbolInput.checked) sets.push(symbolSet);
        if (sets.length === 0) break;
        password += getRandomData(sets[Math.floor(Math.random() * sets.length)]);
    }
    passBox.innerText = password;
}

document.getElementById("btn").addEventListener("click", function () {
    generatePassword();
});

