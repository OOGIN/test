function createsnow(){
    const el= document.createElement("div");
    el.classList.add("snow");
    el.style.marginLeft = randomp()+'px';
    document.body.appendChild(el);
}
function randomp(){
    return Math.floor(Math.random() * window.innerWidth);
}
for(let i=0; i<300; i++ ){
createsnow();
}