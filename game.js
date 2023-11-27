const character = document.querySelector('.character');
const topSpike = document.querySelector('.top');
const bottomSpike = document.querySelector('.bot');
const obsticle = document.querySelector('.ob');
const object = document.querySelectorAll('.object');
const gameOver = document.querySelector('.gameover');
const score = document.getElementById("points");
const obsticle1 = document.getElementById('obsticle1');
const obsticle2 = document.getElementById('obsticle2');
const obsticle3 = document.getElementById('obsticle3');
const scoreDisp = document.getElementById('score');


let countdownValue = 3;
let countdownMilliseconds = countdownValue * 100;
let countdownInterval;
let isUp = false;
let isJumping = false;
let stop = false;
let points = 0;
let temp = 0;

document.addEventListener('keydown', (event) => {
    if (event.key === ' ' && !isJumping && !stop) {
        jump();
        restartTimer();
    }
});

function getRandomInt(max) {
    let rnd = 0;
    while(rnd == 0){
        rnd = Math.floor(Math.random() * max);
    }
    return rnd;
}

function getRandomBtwn(min, max){
    let rnd = 0;
    while(rnd == 0 || rnd < min){
        rnd = Math.floor(Math.random() * max);
    }
    return rnd;
}

class MovingObject {
    constructor(element, direction) {
      this.element = element;
      this.positionX = window.innerWidth - 50;
      this.positionY = getRandomBtwn(window.innerHeight - (window.innerHeight - 100), window.innerHeight - 100);
      this.speed = getRandomBtwn(2, 6);
      this.direction = direction;
    }

    moveObject() {
        this.positionX += this.speed * this.direction;
        this.element.style.left = this.positionX + 'px';
        this.element.style.top = this.positionY + 'px';
  
        if (this.positionX <= 0) {
            this.positionX = window.innerWidth - 50;
            this.positionY = getRandomBtwn(window.innerHeight - (window.innerHeight - 100), window.innerHeight - 100);
            this.speed = getRandomBtwn(2,6);
        }
  
        requestAnimationFrame(() => this.moveObject());
    }
    
}

class MovingSpike {
    constructor(element, direction) {
        this.element = element;
        this.positionX = window.innerWidth - 50;
        this.speed = getRandomBtwn(2000, 5000) / 1000;
        this.direction = direction;
    }


    moveSpike() {
        this.positionX += this.speed * this.direction;
        this.element.style.left = this.positionX + 'px';

        if (this.positionX <= 0) {
            this.positionX = window.innerWidth - 50;
            this.speed = getRandomBtwn(2000, 5000) / 1000;
        }

        requestAnimationFrame(() => this.moveSpike());
    }
}

const object1 = new MovingObject(obsticle1, -1);
const object2 = new MovingObject(obsticle2, -1);
const object3 = new MovingObject(obsticle3, -1);
const spike1 = new MovingSpike(document.getElementById('spike1'), -1);
const spike2 = new MovingSpike(document.getElementById('spike2'), -1);
const spike3 = new MovingSpike(document.getElementById('spike3'), -1);
const spike4 = new MovingSpike(document.getElementById('spike4'), -1);





function jump() {
    if (!stop) {
        isJumping = true;
        const jumpHeight = 95;
        const jumpDuration = 300;

        if (!isUp) {
            character.style.transition = `bottom ${jumpDuration}ms`;
            character.style.bottom = `calc(${jumpHeight}vh - 50px)`;
            setTimeout(() => {
                isJumping = false;
                isUp = true;
                points += 1;
                scoreDisp.innerHTML = points;
            }, jumpDuration);
        } else {
            character.style.transition = `bottom ${jumpDuration}ms`;
            character.style.bottom = `5vh`;
            setTimeout(() => {
                isJumping = false;
                isUp = false;
                points += 1;
                scoreDisp.innerHTML = points;
            }, jumpDuration);
        }
    }
}

function checkCollision() {
    
    const obsticles = [topSpike, bottomSpike, obsticle];

    for (const obsticleElement of obsticles) {
        const characterRect = character.getBoundingClientRect();
        const obsticleRect = obsticleElement.getBoundingClientRect();

        if (
            characterRect.right > obsticleRect.left &&
            characterRect.left < obsticleRect.right &&
            characterRect.bottom > obsticleRect.top &&
            characterRect.top < obsticleRect.bottom
        ) {
            if (!stop) {
                handleCollision();
                clearInterval(checkInterval);
                return;
            }
        }
    }

    
}

function restartTimer() {
    if(!stop){
        clearInterval(countdownInterval);
        countdownValue = 3;
        countdownMilliseconds = countdownValue * 100;
        document.getElementById('countdown').innerText = (countdownMilliseconds / 100).toFixed(2);
        timer();
    }
  }

function timer(){
    if(!stop){
        document.getElementById('countdown').innerText = "";
        document.getElementById('countdown').innerText = (countdownMilliseconds / 100).toFixed(2);
        countdownInterval = setInterval(function () {
            countdownMilliseconds--;
            document.getElementById('countdown').innerText = (countdownMilliseconds / 100).toFixed(2);
            if (countdownMilliseconds <= 0) {
            clearInterval(countdownInterval);
            handleCollision();
            }
        }, 10);
    }
}

function handleCollision() {
    clearInterval(countdownInterval);
    object.forEach((spike) => {
        spike.style.animationPlayState = 'paused';
    })
    gameOver.style.visibility = 'visible';
    character.style.visibility = 'hidden';
    topSpike.style.visibility = 'hidden';
    bottomSpike.style.visibility = 'hidden';
    stop = true;
    score.innerHTML = points;
    document.cookie = "points" + "=" + points + ";" + 1000 + ";path=/";
    points = 0;
}


checkInterval = setInterval(checkCollision, 10);

if(temp == 0 && !stop)
    {
        setTimeout(() => {
            setTimeout(() => {
                object1.moveObject();
                obsticle1.style.visibility = "visible";
            }, `${getRandomBtwn(1000, 1500)}`)
            object2.moveObject();
            obsticle2.style.visibility = "visible";
            setTimeout(() => {
                object3.moveObject();
                obsticle3.style.visibility = "visible";
            }, `${getRandomBtwn(500, 1000)}`)
        }, "3000")
        setTimeout(() => {
            spike1.moveSpike();
            document.getElementById("spike1").style.visibility = "visible"
        }, `${getRandomBtwn(0, 500)}`)
        setTimeout(() => {
            spike2.moveSpike();
            document.getElementById("spike2").style.visibility = "visible"
        }, `${getRandomBtwn(1000, 1500)}`)
        setTimeout(() => {
            spike3.moveSpike();
            document.getElementById("spike3").style.visibility = "visible"
        }, `${getRandomBtwn(2000, 2500)}`)
        setTimeout(() => {
            spike4.moveSpike();
            document.getElementById("spike4").style.visibility = "visible"
        }, `${getRandomBtwn(3000, 3500)}`)
        temp += 1;
    }
else if(!stop)
{
    object1.moveObject();
    object2.moveObject();
    object3.moveObject();
    spike1.moveSpike();
    spike2.moveSpike();
    spike3.moveSpike();
    spike4.moveSpike();
}
if(!stop){
    setInterval(checkCollision, 1);
}
