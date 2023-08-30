const form = document.querySelector("form");
const successMessage = document.querySelector(".success");
const main = document.querySelector(".main");
const dismiss = document.querySelector("#buttontwo")
const subemail = document.querySelector(".emailarrival")

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    successMessage.style.display = "flex";
    main.style.display = "none";
    const email = form.querySelector("#mail");
    updateSuccessMessage(email.value);
})

function updateSuccessMessage(email){
    subemail.textContent = email;

}

dismiss.addEventListener("click", (e)=>{
location.reload();
})


