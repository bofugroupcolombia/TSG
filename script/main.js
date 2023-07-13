const menuDrop = document.querySelector(".menu-drop")
const navLinks = document.querySelector(".nav-links")

menuDrop.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
})

let slide = document.querySelectorAll('.slide');
var current = 0;

function cls(){
    for(let i = 0; i < slide.length; i++){
          slide[i].style.display = 'none';
    }
}

function next(){
    
    document.getElementById("img1").src="images/arrow1.svg";
    document.getElementById("img2").src="images/arrow2.svg";
    
    if(current == slide.length==0){
        document.getElementById("menu").style.color = "white";
        document.getElementById("menu2").style.color = "white";
        document.getElementById("menu3").style.color = "white";
        document.getElementById("img1").src="images/arrow3.svg";
        document.getElementById("img2").src="images/arrow4.svg";
    }

    if(current == slide.length-1){

        document.getElementById("menu").style.color = "#02143F";
        document.getElementById("menu2").style.color = "#02143F";
        document.getElementById("menu3").style.color = "#02143F";
        document.getElementById("img1").src="images/arrow1.svg";
        document.getElementById("img2").src="images/arrow2.svg";
    }

    cls();
    if(current === slide.length-1) current = -1;
    current++;

    slide[current].style.display = 'block';
    slide[current].style.opacity = 0.4;

    var x = 0.4;
    var intX = setInterval(function(){
        x+=0.1;
        slide[current].style.opacity = x;
        if(x >= 1) {
            clearInterval(intX);
            x = 0.4;
        }
    }, 100);


}

function prev(){

    document.getElementById("img1").src="images/arrow3.svg";
    document.getElementById("img2").src="images/arrow4.svg";
    document.getElementById("menu").style.color = "white";
    document.getElementById("menu2").style.color = "white";
    document.getElementById("menu3").style.color = "white";


    if(current == slide.length-1){
        document.getElementById("menu").style.color = "#02143F";
        document.getElementById("menu2").style.color = "#02143F";
        document.getElementById("menu3").style.color = "#02143F";

        document.getElementById("img1").src="images/arrow1.svg";
        document.getElementById("img2").src="images/arrow2.svg";
    }

    cls();
    if(current === 0) current = slide.length;
    current--;

    slide[current].style.display = 'block';
    slide[current].style.opacity = 0.4;

    var x = 0.4;
    var intX = setInterval(function(){
        x+=0.1;
        slide[current].style.opacity = x;
        if(x >= 1) {
            clearInterval(intX);
            x = 0.4;
        }
    }, 100);

}

function start(){
    cls();
    slide[current].style.display = 'block';
}
start();