const btn = document.getElementsByClassName("btn")[0];
const modal = document.getElementById("modal");
const addPerson = document.getElementsByClassName("addPersonForm")[0];
const cross = document.getElementsByClassName("cross")[0];
const add = document.getElementsByClassName("addPerson")[0];

btn.onclick = () =>{
    modal.classList.toggle("visible");
    addPerson.classList.toggle("visible");
    modal.style.opacity = 0.5;
    addPerson.style.opacity = 1;
};

cross.onclick = () =>{
    modal.style.opacity = 0;
    addPerson.style.opacity = 0;

    setTimeout(() => {
        modal.classList.toggle("visible");
        addPerson.classList.toggle("visible");
    }, 1100);
};

add.onclick = () =>{
    modal.style.opacity = 0;
    addPerson.style.opacity = 0;

    setTimeout(() => {
        modal.classList.toggle("visible");
        addPerson.classList.toggle("visible");
    }, 1100);
};