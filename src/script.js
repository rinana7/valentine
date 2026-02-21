const sections = ["first", "second", "third", "fourth"];

function showEnding(sectionId, bgClass) {
    // Hide all sections
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = "none";
    });

    // Show selected section
    document.getElementById(sectionId).style.display = "block";

    // Change background
    document.body.className = bgClass;
}

//only one option allowed
function disableAllButtons() {
    document.querySelectorAll("button").forEach(btn => {
        btn.disabled = true;
    });
}

// Title → show hidden special option
const title = document.getElementById("title");
const box = document.getElementById("box");

title.addEventListener("click", function () {
    box.style.display = "block";
});


// Click1
document.querySelector(".click1").addEventListener("click", function () {
    document.getElementById("first").style.display = "block";
});

document.querySelector(".option").addEventListener("click", function () {
    document.getElementById("option1").style.display = "block";
    showEnding("first", "sad");
})


// Click2
document.querySelector(".click2").addEventListener("click", function () {
    document.getElementById("second").style.display = "block";
    showEnding("second", "bad");
    setTimeout(() => {
        document.body.style.opacity = "0";
    }, 2000);

    setTimeout(() => {
        location.reload();
    }, 3500);
});


// Click3
document.querySelector(".click3").addEventListener("click", function () {
    document.getElementById("third").style.display = "block";
    showEnding("third", "happy");
});


// Click4 (inside hidden box)
document.querySelector(".click4").addEventListener("click", function () {
    document.getElementById("fourth").style.display = "block";
    showEnding("fourth", "happy");
});

