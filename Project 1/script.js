let tl = gsap.timeline();

let pageoneAnimation_1 = () =>{
    tl.from("nav .logo,nav h4,nav button",{
        y:-40,
        opacity:0,
        delay:0.7,
        duration:0.5,
        stagger:0.2
    })
    
    tl.from(".center .center-1 h1",{
        opacity:0,
        x:-200,
        duration:0.5,
    })
    
    tl.from(".center .center-1 p",{
        opacity:0,
        x:-100,
        duration:0.4,
    })
    
    tl.from(".center .center-1 button",{
        opacity:0,
        duration:0.4,
    })
    
    tl.from(".center .center-2 img",{
        opacity:0,
        duration:0.6,
        x:200
    },"-=0.4")
    
    tl.from(".section-bottom",{
        opacity:0,
        duration:0.6,
        y:15,
        stagger:0.3
    })
    tl.from(".section-bottom img",{
        opacity:0,
        duration:0.6,
        y:15,
        stagger:0.3
    })

}

let t2 = gsap.timeline({
    scrollTrigger:{
        trigger:".sec-2",
        scroller:"body",
        start:"top 50%",
        end:"top 0%",
        scrub:3
    }
})

let pageoneAnimation_2 = () =>{
    t2.from(".sec-2 .services",{
        y:40,
        opacity:0,
    })

    t2.from(".sec-2 .box.left.line-1",{
        x:-300,
        opacity:0,
        duration:1
    },"line-1")

    t2.from(".sec-2 .box.right.line-1",{
        x:300,
        opacity:0,
        duration:1
    },"line-1")

    t2.from(".sec-2 .box.left.line-2",{
        x:-300,
        opacity:0,
        duration:1
    },"line-2")

    t2.from(".sec-2 .box.right.line-2",{
        x:300,
        opacity:0,
        duration:1
    },"line-2")
}

t3 = gsap.timeline()

let pageoneAnimation_3 = () =>{

    t3.from(".first",{
        opacity:0,
        duration:1,
        x:-200,
        scrollTrigger:{
            trigger:".first",
            scroller:"body",
            // markers:true,
            start:"top 60%",
            end:"top 30%",
            scrub:3
        }
    })
    
    t3.from(".bottom-f",{
        opacity:0,
        duration:1,
        x:200,
        scrollTrigger:{
            trigger:".bottom-f",
            scroller:"body",
            // markers:true,
            start:"top 90%",
            end:"top 60%",
            scrub:3
        }
    })
    
    t3.from(".middle",{
        opacity:0,
        y:30,
        scrollTrigger:{
            trigger:".middle",
            scroller:"body",
            start:"top 60%",    
            end:"top 80%",
            scrub:2
        }
    })
    
    t3.from(".card p,.card h4",{
        opacity:0,
        y:20,
        duration:1,
        stagger:0.4,
        scrollTrigger:{
            trigger:".card p",
            scroller:"body",
            start:"top 80%",
            end:"top 73%",
            scrub:2
        }
    })
}
    
pageoneAnimation_1()
pageoneAnimation_2()
pageoneAnimation_3()

document.addEventListener("DOMContentLoaded", () => {
    const logoutBtn = document.getElementById("logoutBtn");
    const userEmail = document.getElementById("userEmail");

    // Redirect if not logged in
    if (!localStorage.getItem("userLoggedIn")) {
        alert("You must log in first!");
        window.location.href = "..";
    } else {
        const loggedInUser = localStorage.getItem("loggedInUser");
    }

    // Handle Logout
    logoutBtn.addEventListener("click", () => {
        gsap.to("body", { opacity: 0, duration: 0.5, onComplete: () => {
            alert("Logging out...");
            localStorage.removeItem("userLoggedIn"); // Remove session
            localStorage.removeItem("loggedInUser"); // Remove user data
            window.location.href = "../index.html"; // Redirect to login page
        }});
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".slider");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentIndex = 0;

    function updateSlider() {
        gsap.to(sliders, { x: `-${currentIndex * 100}%`, duration: 0.5, ease: "power2.out" });
    }

    nextBtn.addEventListener("click", () => {
        if (currentIndex < sliders.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });
});
