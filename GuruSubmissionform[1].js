let nameElement = document.getElementById("name");
let emailElement = document.getElementById("email");
let messagesElement = document.getElementById("messages");
let errorMessageElement = document.getElementById("errorMessage");

let nameErrMsge1 = document.getElementById("nameErrMsg");
nameErrMsge1.classList.add("nameErr");

let messagesErrMsg1 = document.getElementById("messagesErrMsg");
messagesErrMsg1.classList.add("nameErr");

let emailErrMsg1 = document.getElementById("emailErrMsg");
emailErrMsg1.classList.add("nameErr");

let onSubmitButton = document.getElementById("form-details");
let userDetailsContainerE = document.getElementById("user-details-container");


nameElement.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsge1.textContent = "Required*";
    } else {
        nameErrMsge1.textContent = "";
    }
});
emailElement.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsg1.textContent = "Required*";
    } else {
        emailErrMsg1.textContent = "";
    }

});
messagesElement.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        messagesErrMsg1.textContent = "Required*";
    } else {
        messagesErrMsg1.textContent = "";
    }

});

function validateFormData(userName, mail, mesg) {
    if (userName === "") {
        nameErrMsge1.textContent = "Required*";
    } else {
        nameErrMsge1.textContent = "";
    }

    if (mail === "") {
        emailErrMsg1.textContent = "Required*";
    } else {
        emailErrMsg1.textContent = "";
    }

    if (mesg === "") {
        messagesErrMsg1.textContent = "Required*";
    } else {
        messagesErrMsg1.textContent = "";
    }

    if (userName === "" || mail === "" || mesg === "") {
        errorMessageElement.textContent = "Fill in the missing details ";
        errorMessageElement.classList.add("nameErr");
    } else {
        let userDetailsContainerItem = document.createElement("div");
        userDetailsContainerItem.classList.add("d-flex", "flex-column", "ContainerItem");
        userDetailsContainerE.appendChild(userDetailsContainerItem);

        let addE1 = document.createElement("p");
        addE1.textContent = "Name : " + userName;
        addE1.classList.add("addE1");
        userDetailsContainerItem.appendChild(addE1);

        let addE2 = document.createElement("p");
        addE2.textContent = "Email : " + mail;
        addE2.classList.add("addE1");
        userDetailsContainerItem.appendChild(addE2);

        let addE3 = document.createElement("p");
        addE3.textContent = "Message : " + mesg;
        addE3.classList.add("addE1");
        userDetailsContainerItem.appendChild(addE3);

        nameElement.value = "";
        emailElement.value = "";
        messagesElement.value = "";
        errorMessageElement.textContent = "";

    }

}
onSubmitButton.addEventListener("submit", function(event) {
    event.preventDefault();
    validateFormData(nameElement.value, emailElement.value, messagesElement.value);
});