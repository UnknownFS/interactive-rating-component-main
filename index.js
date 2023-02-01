const submitBtn = document.getElementById("submit-btn");
const span = document.getElementById("select-rate");
const thankDiv = document.getElementById("thankyou");
const formDiv = document.getElementById("form");
const ratingBtn = document.getElementById("rating-btn");

let rate = 0;
let prevBtn = null;
//formDiv.style.display = "none";
thankDiv.style.display = "none";

ratingBtn.addEventListener("click", e => {

    rate = e.target.textContent;

    e.target.classList.add("selected");

    if(prevBtn !== null) {
        prevBtn.classList.remove("selected");
    }

    prevBtn = e.target;

    submitForm();
      
});

function submitForm() {
    submitBtn.addEventListener("click", e => {
        formDiv.style.display = "none";
        thankDiv.style.display = "inline";

        span.textContent = rate;
    });
}
    