const passwordInput = document.querySelector(".password-box input"),
    copyIcon = document.querySelector(".password-box i"),
    rangeInput = document.querySelector(".range-box input"),
    rangeNumber = document.querySelector(".range-box span"),
    generateButton = document.querySelector(".generate-button");


const characteres = "abzdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&()=?¡¿|{}[]<>+-*/.,";

function generatePassword() {
    let newPassword = "";

    for(let i = 0; i < rangeInput.value; i++) {
        let randomNum = Math.floor(Math.random() * characteres.length);
        newPassword += characteres[randomNum];
    }
    
    passwordInput.value = newPassword;
    copyIcon.classList.replace("bx-list-check", "bx-copy-alt")
}

rangeInput.addEventListener("input", () => {
    rangeNumber.textContent = rangeInput.value;
});

copyIcon.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordInput.value);
    copyIcon.classList.replace("bx-copy-alt", "bx-list-check");
    alert("🧡 Password copied √√√")
});

generateButton.addEventListener("click", generatePassword);

generatePassword()