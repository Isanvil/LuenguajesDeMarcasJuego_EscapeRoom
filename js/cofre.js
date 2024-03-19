//CREACIÓN OBJETO COFRE
const cofreImg = new Image();
cofreImg.src = 'assets/models/cofre.png'

const cofre ={
    x: 150,
    y: 150,
    width: 75,
    height: 75,
    speed: 0
}
//HASTA AQUÍ CREACIÓN OBJETO COFRE

function drawCofre(ctx){
    ctx.drawImage(cofreImg, cofre.x, cofre.y, cofre.width, cofre.height);
}
