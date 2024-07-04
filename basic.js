
document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".container");
    const signupButton = document.querySelector(".signup-link");
    const loginButton = document.querySelector(".login-link");

    signupButton.addEventListener("click", function(e) {
        e.preventDefault();
        container.classList.add("active");
    });

    loginButton.addEventListener("click", function(e) {
        e.preventDefault();
        container.classList.remove("active");
    });

    
    const showHidePwIcons = document.querySelectorAll(".showHidePw");
    showHidePwIcons.forEach(icon => {
        icon.addEventListener("click", function() {
            const pwField = this.previousElementSibling;
            if (pwField.type === "password") {
                pwField.type = "text";
                this.classList.replace("uil-eye-slash", "uil-eye");
            } else {
                pwField.type = "password";
                this.classList.replace("uil-eye", "uil-eye-slash");
            }
        });
    });
});
