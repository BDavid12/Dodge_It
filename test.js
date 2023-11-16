const character = document.querySelector('.character');
const topSpike = document.querySelector('.triangle.top');
const bottomSpike = document.querySelector('.triangle.bottom');

function checkCollision() {
    const characterRect = character.getBoundingClientRect();
    const topSpikeRect = topSpike.getBoundingClientRect();
    const bottomSpikeRect = bottomSpike.getBoundingClientRect();

    if (
        characterRect.right > topSpikeRect.left && 
        characterRect.left < topSpikeRect.right &&
        characterRect.bottom > topSpikeRect.top &&
        characterRect.top < topSpikeRect.bottom
    ) {
        // Collision with top spike
        handleCollision();
    } else if (
        characterRect.right > bottomSpikeRect.left && 
        characterRect.left < bottomSpikeRect.right &&
        characterRect.top < bottomSpikeRect.bottom &&
        characterRect.bottom > bottomSpikeRect.top
    ) {
        // Collision with bottom spike
        handleCollision();
    }
}

function handleCollision() {
    // Add your collision handling logic here
    alert('Collision detected! Game Over.');
}

// Check for collisions on an interval
setInterval(checkCollision, 10);
