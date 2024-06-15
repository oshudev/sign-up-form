const form = document.getElementById("create-account");
const inputFirstName = document.getElementById("first-name");
const inputLastName = document.getElementById("last-name");
const inputEmail = document.getElementById("email");
const inputPhoneNumber = document.getElementById("phone-number");
const inputPassword = document.getElementById("password");
const inputPasswordConfirmation = document.getElementById("confirm-password");
const inputs = [
    inputFirstName,
    inputLastName,
    inputEmail,
    inputPhoneNumber,
    inputPassword,
    inputPasswordConfirmation,
];
let isFormValid = true;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    inputs.forEach((input) => {
        const inputContainer = input.parentElement;
        inputContainer.classList.remove("invalid");
    });

    if (!inputFirstName.value) {
        isFormValid = false;
        invalidateElm(inputFirstName, "First name cannot be empty");
    }

    if (!inputLastName.value) {
        isFormValid = false;
        invalidateElm(inputLastName, "Last name cannot be empty");
    }

    if (!isValidEmail(inputEmail.value)) {
        isFormValid = false;
        invalidateElm(inputEmail, "Looks like this is not an email");
    }

    if (!inputPhoneNumber.value) {
        isFormValid = false;
        invalidateElm(inputPhoneNumber, "Phone number cannot be empy");
    }

    if (!inputPassword.value) {
        isFormValid = false;
        invalidateElm(inputPassword, "Password cannot be empty");
    }

    if (
        !inputPasswordConfirmation.value ||
        inputPasswordConfirmation.value !== inputPassword.value
    ) {
        isFormValid = false;
        invalidateElm(inputPasswordConfirmation, "Password does not match");
    }

    if (isFormValid) {
        form.submit();
    }
});

function invalidateElm(elm, message) {
    const inputContainer = elm.parentElement;
    inputContainer.classList.add("invalid");

    const err = inputContainer.querySelector(".err-msg");
    err.textContent = message;
}

function isValidEmail(email) {
    const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLocaleLowerCase());
}
