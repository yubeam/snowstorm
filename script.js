const snowContainer = document.querySelector('.snow-container');

function createSnowflakes() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snow');
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.opacity = Math.random();
    snowContainer.appendChild(snowflake);
    
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflakes, 300);
