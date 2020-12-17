const container = document.querySelector(".container");
const grid = document.querySelector(".grid");
const card = document.querySelectorAll(".card");
const text = document.querySelector('.text');
const shadow = document.querySelector('.shadow');
const music = document.querySelector('#back');



container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 15
    let yAxis = (window.innerHeight / 2 - e.pageY) / 15
    grid.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});

container.addEventListener("mouseenter", (e) => {
    grid.style.transition = "none";
    card[0].style.transform = `skewY(-30deg)`;
    card[4].style.transform = `skewY(-30deg)`;
    card[3].style.transform = `skewY(30deg)`;
    card[7].style.transform = `skewY(30deg)`;

    card[1].style.transform = `translateY(-40px) translateZ(500px)`;
    card[2].style.transform = `translateY(-40px) translateZ(500px)`;
    card[5].style.transform = `translateY(-40px) translateZ(500px)`;
    card[6].style.transform = `translateY(-40px) translateZ(500px)`;


    card[0].style.boxShadow = "20px 20px 20px #bebcbc";
    card[4].style.boxShadow = "20px 20px 20px #bebcbc";
    card[3].style.boxShadow = "-20px 20px 20px #bebcbc";
    card[7].style.boxShadow = "-20px 20px 20px #bebcbc";

    card[1].style.boxShadow = "20px 20px 20px #bebcbc";
    card[2].style.boxShadow = "20px 20px 20px #bebcbc";
    card[5].style.boxShadow = "-20px 20px 20px #bebcbc";
    card[6].style.boxShadow = "-20px 20px 20px #bebcbc";

    card[0].style.width = "75px";
    card[4].style.width = "75px";
    card[3].style.width = "75px";
    card[7].style.width = "75px";

    shadow.style.display = "flex";
    music.play();

})

container.addEventListener("mouseleave", (e) => {
    grid.style.transition = "all 0.5s ease";
    grid.style.transform = `rotateY(0deg) rotateX(0deg)`;

    card[0].style.transform = `skewY(0)`;
    card[4].style.transform = `skewY(0)`;
    card[3].style.transform = `skewY(0)`;
    card[7].style.transform = `skewY(0)`;

    card[1].style.transform = `translateY(0) translateZ(0)`;
    card[2].style.transform = `translateY(0) translateZ(0)`;
    card[5].style.transform = `translateY(0) translateZ(0)`;
    card[6].style.transform = `translateY(0) translateZ(0)`;

    card[0].style.width = "150px";
    card[4].style.width = "150px";
    card[3].style.width = "150px";
    card[7].style.width = "150px";

    card[0].style.boxShadow = "0px 0px 10px #bebcbc";
    card[4].style.boxShadow = "0px 0px 10px #bebcbc";
    card[3].style.boxShadow = "0px 0px 10px #bebcbc";
    card[7].style.boxShadow = "0px 0px 10px #bebcbc";

    card[1].style.boxShadow = "0px 0px 10px #bebcbc";
    card[2].style.boxShadow = "0px 0px 10px #bebcbc";
    card[5].style.boxShadow = "0px 0px 10px #bebcbc";
    card[6].style.boxShadow = "0px 0px 10px #bebcbc";

    shadow.style.display = "none";
    music.pause();
    music.currentTime = 0;

});

card[1].addEventListener('mouseenter', (e) => {
    card[1].style.transform = "translateY(-40px) rotateY(180deg) ";

})

card[1].addEventListener('mouseleave', (e) => {
    card[1].style.transform = "translateY(-40px) rotateY(0deg) ";

})

card[2].addEventListener('mouseenter', (e) => {
    card[2].style.transform = "translateY(-40px) rotateY(180deg) ";
})

card[2].addEventListener('mouseleave', (e) => {
    card[2].style.transform = "translateY(-40px) rotateY(0deg) ";
})

card[5].addEventListener('mouseenter', (e) => {
    card[5].style.transform = "translateY(-40px) rotateY(180deg) ";
})

card[5].addEventListener('mouseleave', (e) => {
    card[5].style.transform = "translateY(-40px) rotateY(0deg) ";
})

card[6].addEventListener('mouseenter', (e) => {
    card[6].style.transform = "translateY(-40px) rotateY(180deg) ";
})

card[6].addEventListener('mouseleave', (e) => {
    card[6].style.transform = "translateY(-40px) rotateY(0deg) ";
})




music.play().then(res => {
    console.log(res);
    music.pause();
}).catch(err => {
    music.play();
    console.log(err);
}).finally(() => {
    music.pause();
})