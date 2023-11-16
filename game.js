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
        this.speed = getRandomInt(3);
        this.direction = direction;
    }


    moveSpike() {
        this.positionX += this.speed * this.direction;
        this.element.style.left = this.positionX + 'px';

        if (this.positionX <= 0) {
            this.positionX = window.innerWidth - 50;
            this.speed = getRandomInt(3);
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

let temp = 0;

if(temp == 0){
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
    temp += 1;
}
else{
    object1.moveObject();
    object2.moveObject();
    object3.moveObject();
}


spike1.moveSpike();
spike2.moveSpike();
spike3.moveSpike();
spike4.moveSpike();

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
    const characterRect = character.getBoundingClientRect();
    const topSpikeRect = topSpike.getBoundingClientRect();
    const bottomSpikeRect = bottomSpike.getBoundingClientRect();
    const obRect = obsticle .getBoundingClientRect();

    if (
        characterRect.right > topSpikeRect.left && 
        characterRect.left < topSpikeRect.right &&
        characterRect.bottom > topSpikeRect.top &&
        characterRect.top < topSpikeRect.bottom
    ) {
        if(!stop)
        handleCollision();
    } 
    else if (
        characterRect.right > bottomSpikeRect.left && 
        characterRect.left < bottomSpikeRect.right &&
        characterRect.top < bottomSpikeRect.bottom &&
        characterRect.bottom > bottomSpikeRect.top
    ) {
        if(!stop)
        handleCollision();
    }
    else if(
        characterRect.right > obRect.left && 
        characterRect.left < obRect.right &&
        characterRect.top < obRect.bottom &&
        characterRect.bottom > obRect.top
    ){
        if(!stop)
        handleCollision();
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
    gameOver.style.visibility = `visible`;
    character.style.visibility = 'hidden';
    topSpike.style.visibility = 'hidden';
    bottomSpike.style.visibility = 'hidden';
    stop = true;
    score.innerHTML = points;
    document.cookie = "points" + "=" + points + ";" + 1000 + ";path=/";
    points = 0;
}

if(!stop){
    setInterval(checkCollision, 1);
}



