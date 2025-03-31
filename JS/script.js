function link(){
    let address = [
        "/skills/skills.html",
        "/projects/projects.html",
        "/hobby/hobby.html",
        "/contact/contact.html"
    ]
    let labels = document.querySelectorAll("label");

    labels.forEach((e,i)=>{
        e.addEventListener("click", ()=>{
            setInterval(() => {
                window.location.href=address[i];
            }, 1100);
        })
    })
}
function share(){
    let shareIcon = document.querySelector(".fa-share-alt"),
    clipBoard = document.querySelector("#clipBoard"),
    copyBtn = document.querySelector("#copy"),
    closeBtn = document.querySelector(".fa-remove");

    shareIcon.onclick = () => {
        clipBoard.style.display = "flex"
    }
    copyBtn.onclick = ()=>{
        navigator.clipboard.writeText("https://doniyorbek-islomov-official").then(() => {
            copyBtn.innerText = "Copied!";
        }).catch(err => {
            console.error("Nusxalashda xatolik:", err);
        });
    }
    closeBtn.onclick = () => {
        clipBoard.style.display = "none";
        copyBtn.innerText = "Nusxalash!";
    }

}
function like(){
    let like = document.querySelector(".fa-heart");
    like.onclick = ()=>{
        like.style.color="red";
    }
}
link()
share()
like()