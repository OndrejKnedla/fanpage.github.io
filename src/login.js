function showPassword() {
    var passwordType = document.getElementById("myInput");
    var show = document.getElementById("show");
    var hide = document.getElementById("hide");
    if (passwordType.type === "password") {
        passwordType.type = "text";
        hide.classList.remove("hidden");
        show.classList.add("hidden");
    } else {
        passwordType.type = "password";
        hide.classList.add("hidden");
        show.classList.remove("hidden");
    }
}