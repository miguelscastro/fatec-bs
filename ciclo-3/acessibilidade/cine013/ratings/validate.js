const form = document.querySelector(".formulario");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");
const emailRegex = /^\w+([-+.']\w+)@\w+([-.]\w+).\w+([-.]\w+)*$/;


form.addEventListener('submit', (e) => {
    e.preventDefault();
    nameValidator();
    emailValidator();
    filmeValidator();
});


function showError(index) {
    campos[index].style.border = "2px solid #e63636";
    spans[index].style.display = "block";
}

function removeError(index) {
    campos[index].style.border = "";
    spans[index].style.display = "none";
}

function nameValidator() {
    const name = campos[0].value.trim();
    const regex = /^[a-zA-Z]+$/;

    if (name.length < 3 || !regex.test(name)) {
        showError(0);
    } else {
        removeError(0);
    }
}


function emailValidator() {
    if (!emailRegex.test(campos[1].value)) {
        showError(1);
    }
    else {
        removeError(1);
    }
}

function filmeValidator() {
    if (campos[2].value == "") {
        showError(2);
    }
    else {
        removeError(2);
    }
}