const colorOne= document.getElementById("colorOne");
const colorTwo= document.getElementById("colorTwo");
const colorThree= document.getElementById("colorThree");
const colorFour= document.getElementById("colorFour");

let color= 0;

document.addEventListener('keydown', function (event) {
    if (event.key === "a") {
    color="blue";
    } else if (event.key === "s") {
    color="orange";
    } else if (event.key === "d"){
    color="black";
    }
    console.log(color);
    })

colorOne.addEventListener ("click", () =>{
    return colorOne.style.backgroundColor= color;

});

colorTwo.addEventListener ("click", () =>{
    return colorTwo.style.backgroundColor= color;

});

colorThree.addEventListener ("click", () =>{
    return colorThree.style.backgroundColor= color;

});

colorFour.addEventListener ("click", () =>{
    return colorFour.style.backgroundColor= color;

});