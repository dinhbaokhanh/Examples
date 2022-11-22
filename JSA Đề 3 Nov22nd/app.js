function visibility() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}


// Sign in

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

        if (localStorage.getItem("users")) {
            let users = JSON.parse(localStorage.getItem("users"));

            users.push({
            email,
            password,
            });

            localStorage.setItem("users", JSON.stringify(users));
        } else {
            localStorage.setItem(
            "users",
            JSON.stringify([
                {
                email,
                password,
                },
            ])
            );
        }
        location.href = "https://www.youtube.com/";
    }
);
