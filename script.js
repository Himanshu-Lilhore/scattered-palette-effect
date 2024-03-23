let cardContainer = document.querySelector('#cardContainer')

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
console.log('Window width:', windowWidth, 'Window height:', windowHeight);

let xcovered = 0
let ycovered = 0
let mouseX = 0
let mouseY = 0
let lastMouseX = 99
let latsMouseY = 99

window.addEventListener('resize', function() {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
});


document.addEventListener('mousemove', function(event) {
    let mouseX = event.clientX;
    let mouseY = event.clientY;

    if(Math.abs(lastMouseX-mouseX) < 50 && Math.abs(latsMouseY-mouseY) < 50)
        return
    else{
        lastMouseX = mouseX
        latsMouseY = mouseY
    }

    xcovered = mouseX / windowWidth 
    ycovered = mouseY / windowHeight

    let translateStr = `translate(${xcovered*-50}%, ${ycovered*-50}%)`
    cardContainer.style.transform = translateStr
    
    animateTranslate(translateStr)
});

function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function animateTranslate(translateStr){
    cardContainer.animate({
        transform : translateStr
    }, {duration:4000, fill:'forwards'})
}

function init(){
    let cards = cardContainer.querySelectorAll("div")

    cards.forEach((card,index) => {
        let tempImg = document.createElement('img')
        card.style.width = getRandomValue(200, 300) + 'px';
        card.style.height = getRandomValue(250, 350) + 'px';
        card.style.marginLeft = getRandomValue(50, 150) + 'px';
        card.style.marginRight = getRandomValue(50, 150) + 'px';
        card.style.marginTop = getRandomValue(25, 150) + 'px';
        card.style.marginBottom = getRandomValue(25, 150) + 'px';
        card.style.backgroundColor = card.getAttribute("coat")
        tempImg.setAttribute('src', `./images/fruit (${index+1}).jpg`)
        card.appendChild(tempImg)
    });
}

init();
