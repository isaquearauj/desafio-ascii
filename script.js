let shapeIndex = 0;
let lastColor = '';
const shapes = ['circle', 'square', 'triangle'];
const maxShapes = 20;

document.getElementById('btnCriativo').addEventListener('click', function() {
    const shapeType = shapes[shapeIndex];
    const shape = document.createElement('div');
    shape.classList.add('shape', shapeType);
    
    let newColor;
    do {
        newColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } while (newColor === lastColor);
    lastColor = newColor;
    
    if (shapeType !== 'triangle') {
        shape.style.backgroundColor = newColor;
    } else {
        shape.style.borderBottomColor = newColor;
    }
    
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const btnSize = 50;
    
    let posX, posY;
    do {
        posX = Math.random() * (screenWidth - 60);
        posY = Math.random() * (screenHeight - 60);
    } while (
        posX > screenWidth / 2 - btnSize && posX < screenWidth / 2 + btnSize &&
        posY > screenHeight / 2 - btnSize && posY < screenHeight / 2 + btnSize
    );
    
    shape.style.left = `${posX}px`;
    shape.style.top = `${posY}px`;
    shape.style.animation = 'moveShape 3s infinite ease-in-out, fadeOut 5s ease-in-out forwards';
    
    const area = document.getElementById('areaInteracao');
    area.appendChild(shape);
    
    setTimeout(() => {
        shape.remove();
    }, 5000);
    
    shapeIndex = (shapeIndex + 1) % shapes.length;
});