const player = {
    x: 50,
    y: 50,
    width: 100,
    height: 100,
    speed: 5,
    //Siguientes lineas añaden movimiento más fluido y diagonales (2)
    dx: 0,
    dy: 0
};

function movePlayer(canvas) {
    player.x += player.dx;
    player.y += player.dy;

    //VERIFICAR LOS LIMITES DEL LIENZO
    //Lado izquierdo
    if(player.x < 0){
        player.x = 0;
    }
    //Parte superior
    if(player.y < 0){
        player.y = 0;
    }
    //Lado derecho
    if(player.x + player.width > canvas.width){
        player.x = canvas.width - player.width;
    }
    //Parte inferior
    if(player.y + player.height > canvas.height){
        player.y = canvas.height - player.height;
    }
}

function keyDownHandler(event) {
    const keyPressed = event.key;
    switch(keyPressed) {
        case 'ArrowUp':
            player.dy = -player.speed;
            break;
        case 'ArrowDown':
            player.dy = player.speed;
            break;
        case 'ArrowLeft':
            player.dx = -player.speed;
            break;
        case 'ArrowRight':
            player.dx = player.speed;
            break;
    }
}

//Ajusta el movimiento del jugador (2)
function keyUpHandler(event) {
    const keyReleased = event.key;
    switch(keyReleased) {
        case 'ArrowUp':
        case 'ArrowDown':
            player.dy = 0;
            break;
        case 'ArrowLeft':
        case 'ArrowRight':
            player.dx = 0;
            break;
    }
}

export{player, movePlayer, keyDownHandler, keyUpHandler};