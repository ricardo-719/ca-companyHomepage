const btnElOne = document.querySelector(".btnOne");
const btnElTwo = document.querySelector(".btnTwo");

btnElOne.addEventListener("mouseover", (event) =>{
    //to collect the position from the console from pageX and pageY
    const x = (event.pageX - btnElOne.offsetLeft);
    const y = (event.pageY - btnElOne.offsetTop); 
    
    //manipulate the variales defined in style.css
    btnElOne.style.setProperty("--xPos", x + "px");
    btnElOne.style.setProperty("--yPos", y + "px");
})

btnElTwo.addEventListener("mouseover", (event) =>{
    //to collect the position from the console from pageX and pageY
    const x = (event.pageX - btnElTwo.offsetLeft);
    const y = (event.pageY - btnElTwo.offsetTop); 
    
    //manipulate the variales defined in style.css
    btnElTwo.style.setProperty("--xPos", x + "px");
    btnElTwo.style.setProperty("--yPos", y + "px");
})


function active() {
    let hBN = document.getElementById('headerButtonNav');
    let hMN = document.getElementById('headerMenuNav')
    if (hBN.ariaPressed === "false") {
        return [hBN.ariaPressed = "true", hMN.ariaPressed = "true"];
    } else {
        return [hBN.ariaPressed = "false", hMN.ariaPressed = "false"];
    }
}