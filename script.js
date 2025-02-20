document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const showSignup = document.getElementById("showSignup");
    const showLogin = document.getElementById("showLogin");
    const container = document.querySelector(".container");
    const formBox = document.querySelector(".form-box");

    // Initial animations
    gsap.from(container, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out"
    });

    gsap.from(".form-header", {
        opacity: 0,
        y: -20,
        duration: 0.6,
        delay: 0.3
    });


    // Redirect if already logged in
    if (localStorage.getItem("userLoggedIn")) {
        window.location.href = "Project 1/index.html";
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Switch to Signup Form
    showSignup.addEventListener("click", () => {
        gsap.to(loginForm, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            onComplete: () => {
                loginForm.classList.add("hidden");
                signupForm.classList.remove("hidden");
                gsap.fromTo(signupForm, 
                    { opacity: 0, y: 20 }, 
                    { opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.7)" }
                );
            }
        });
    });


    // Switch to Login Form
    showLogin.addEventListener("click", () => {
        gsap.to(signupForm, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            onComplete: () => {
                signupForm.classList.add("hidden");
                loginForm.classList.remove("hidden");
                gsap.fromTo(loginForm, 
                    { opacity: 0, y: 20 }, 
                    { opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.7)" }
                );
            }
        });
    });


    // Handle Signup
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("signupName").value;
        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;

        // Animate form submission
        gsap.to(signupForm, {
            scale: 0.95,
            y: 5,
            duration: 0.2,
            ease: "power1.inOut",
            onComplete: () => {
                gsap.to(signupForm, {
                    scale: 1,
                    y: 0,
                    duration: 0.2
                });
            }
        });


        if (name.length < 3) {
            alert("Name must be at least 3 characters long.");
            return;
        }
        if (!email.includes("@")) {
            alert("Enter a valid email.");
            return;
        }
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        // Store user in localStorage
        users.push({ email, password });
        localStorage.setItem("users", JSON.stringify(users));

        alert("Signup Successful! Please Login.");
        signupForm.reset();
        showLogin.click();
    });

    // Handle Login
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        // Animate form submission
        gsap.to(loginForm, {
            scale: 0.95,
            y: 5,
            duration: 0.2,
            ease: "power1.inOut",
            onComplete: () => {
                gsap.to(loginForm, {
                    scale: 1,
                    y: 0,
                    duration: 0.2
                });
            }
        });


        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            localStorage.setItem("userLoggedIn", "true"); // Store session
            localStorage.setItem("loggedInUser", email); // Save logged-in user

            gsap.to(loginForm, {
                scale: 0.9,
                opacity: 0,
                y: -20,
                duration: 0.3,
                onComplete: () => {
                    gsap.to(container, {
                        scale: 0.9,
                        opacity: 0,
                        duration: 0.3,
                        onComplete: () => {
                            alert("Login Successful! Redirecting...");
                            window.location.href = "Project 1/index.html"; // Redirect to main page
                        }
                    });
                }
            });
        } else {
            // Shake animation for invalid login
            gsap.to(loginForm, {
                x: [-10, 10, -10, 10, 0],
                duration: 0.3,
                onComplete: () => {
                    alert("Invalid Email or Password.");
                }
            });
        }

    });
});
