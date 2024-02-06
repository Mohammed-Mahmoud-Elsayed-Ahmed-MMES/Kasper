var currentBackground = 1;
var totalBackgrounds = 3;

function changeBackground(direction) {
    currentBackground += direction;

    // Wrap around to the first background if reaching the end
    if (currentBackground >= totalBackgrounds) {
        currentBackground = 0;
    }

    // Wrap around to the last background if reaching the beginning
    if (currentBackground < 0) {
        currentBackground = totalBackgrounds - 1;
    }

    var landingElement = document.querySelector('.landing');
    //landingElement.classList.remove('left');
    //landingElement.classList.remove('right');
    landingElement.style.backgroundImage = 'url("CSS 2/landing.jpg")';

    if (currentBackground === 0) {
        //landingElement.classList.add('left');
        landingElement.style.backgroundImage = 'url("CSS 2/wp1905104.jpg")';
    } else if (currentBackground === 2) {
        //landingElement.classList.add('right');
        landingElement.style.backgroundImage = 'url("CSS 2/wp1905095.png")';
    }

    var bullets = document.querySelectorAll('.bullets li');
    bullets.forEach((bullet, index) => {
        bullet.classList.remove('active');
        if (currentBackground === index) {
        bullet.classList.add('active');
        }
    });
}

const checkbox = document.querySelector('.theme-checkbox');
const body = document.querySelector('body');
const h2 = document.querySelectorAll('h2');
const landingHead = document.querySelectorAll('#landingHead');
const shuffle = document.querySelectorAll('.shuffle li');
const shuffleOneli = document.querySelector('.shuffle .active');

checkbox.addEventListener('click', function(){
    h2.forEach((h2)=>{
        landingHead.forEach((landingHead)=>{
            shuffle.forEach((li)=>{
                if(checkbox.checked){
                    body.style.backgroundColor = 'black';
                    h2.style.color = 'white';
                    landingHead.style.color = 'white';
                    li.style.backgroundColor = 'black';
                    li.style.color = 'white';
                    shuffleOneli.style.backgroundColor = 'var(--main-color)';
                    shuffleOneli.style.color = 'black';
                }else {
                    body.style.backgroundColor = 'white';
                    h2.style.color = 'black';
                    landingHead.style.color = 'white';
                    li.style.backgroundColor = 'white';
                    li.style.color = 'black';
                    shuffleOneli.style.backgroundColor = 'var(--main-color)';
                    shuffleOneli.style.color = 'white';
                }
            })
        })
    })
})