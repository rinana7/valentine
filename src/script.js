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

const dialogue = document.getElementById("dialogue")

function typeWriter(text, speed = 35){

    dialogue.textContent = ""
    let i = 0

    function typing(){
        if(i < text.length){
            dialogue.textContent += text.charAt(i)
            i++
            setTimeout(typing, speed)
        }
    }

    typing()
}

typeWriter("チョコ欲しい？")

const choice1 = document.getElementById("choice1")
const choice2 = document.getElementById("choice2")

choice1.onclick = () => {

    typeWriter("え？本当に？")

    document.querySelector(".choices").innerHTML =
        `<button id="noAgain">いらない</button>`

    document.getElementById("noAgain").onclick = () => {

        typeWriter("え、、、？")

        document.body.className = "sad"

    }
}

choice2.onclick = () => {

    typeWriter("はあ？何その態度。")

    document.body.className = "bad"

    setTimeout(()=>{
        document.body.style.opacity="0"
    },2000)

    setTimeout(()=>{
        location.reload()
    },3500)

}

document.getElementById("quickYes").onclick = () => {

    typeWriter("まじ？✨")

    document.body.className = "happy"

}

const title = document.getElementById("title")
const secret = document.getElementById("secretYes")

title.onclick = () => {

    secret.style.display = "block"

}

secret.onclick = () => {

    typeWriter("本当？ありがとう！")

    document.body.className = "happy"

}