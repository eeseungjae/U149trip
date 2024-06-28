//blind
let bg1 = document.querySelector(".bg_1");
let bg2 = document.querySelector(".bg_2");
let bg3 = document.querySelector(".bg_3");
let blind = document.getElementById("blind");

document.addEventListener("DOMContentLoaded",function(){

    setTimeout(function(){
        bg1.style.transform = "translateX(-100%)";
    },100);
    setTimeout(function(){
        bg2.style.transform = "translateX(-100%)";
    },200);
    setTimeout(function(){
        bg3.style.transform = "translateX(-100%)";
    },300);
    setTimeout(function(){
        blind.style.display = "none";
    },2000);
});

//appear
/*let appear = document.querySelector(".appear");

document.addEventListener("DOMContentLoaded",function(){
    setTimeout(function(){
        appear.style.transform = "opacity:1";
    },2000);
});*/

//backgrounds change
const backgrounds = [
                    "../IMAGE/wallpaper/wallpaper1.jpg",
                    "../IMAGE/wallpaper/wallpaper2.jpg",
                    "../IMAGE/wallpaper/wallpaper3.jpg",
                    "../IMAGE/wallpaper/wallpaper4.jpg",
                    "../IMAGE/wallpaper/wallpaper5.jpg",
                    "../IMAGE/wallpaper/wallpaper6.jpg"                
                    ]
let backgroundsIndex = 0;
const header_content = document.querySelector(".header_content");

function backgroundsChange(){
    header_content.style.backgroundImage = `url('${backgrounds[backgroundsIndex]}')`;
    //image:url("../IMAGE/wallpaper/wallpaper1.jpg")の形を作るため、”代わり${}, ""が重複にならないため ` 使う。
    
    backgroundsIndex = (backgroundsIndex+1) % backgrounds.length;

    setTimeout(backgroundsChange,5000);
}
setTimeout(backgroundsChange,3000);

//sidemenu hover
const header_menu_img = document.querySelector(".header_menu_img");
header_menu_img.addEventListener('mouseover',function(){
    header_menu_img.src = "../IMAGE/icon/menu_miria_hover.jpg";
});
header_menu_img.addEventListener('mouseout',function(){
    header_menu_img.src = "../IMAGE/icon/menu_miria.jpg";
});

//sidemenu summon
const side_nav = document.querySelector(".side_nav");
const header_menu = document.querySelector(".header_menu");
const side_nav_ul = document.querySelector(".side_nav_ul");
header_menu_img.addEventListener('click',function(){
    side_nav.classList.toggle("toggle");

    if(side_nav.classList.contains("toggle")){
        header_menu.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        side_nav_ul.style.backgroundColor = "rgba(0, 0, 0, 0.6)"

    }else{
        header_menu.style.backgroundColor = "transparent";
        side_nav_ul.style.backgroundColor = "transparent";
    }
});

//menu_Let's go
const go_news = document.querySelector('.go_news');
const go_character = document.querySelector('.go_character');

go_news.addEventListener('click',function(){
    window.scrollTo({
        top:729.6,
        behavior:'smooth'
    })
});
go_character.addEventListener('click',function(){
    window.scrollTo({
        top:1459.2,
        behavior:'smooth'
    })
});

const side_go_news = document.querySelector('.side_nav_ul .go_news');
const side_go_character = document.querySelector('.side_nav_ul .go_character');

side_go_news.addEventListener('click',function(){
    window.scrollTo({
        top:729.6,
        behavior:'smooth'
    })
});
side_go_character.addEventListener('click',function(){
    window.scrollTo({
        top:1459.2,
        behavior:'smooth'
    })
});

/* go-top */
const go_top = document.querySelector('.go_top');
go_top.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
});