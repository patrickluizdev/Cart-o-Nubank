const card = document.querySelector('.container');

card.addEventListener("mousemove", cardEffect);

function cardEffect(event){
    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;
    const centerX = card.offsetLeft + cardWidth/2; 
    const centerY = card.offsetTop + cardHeight/2;
    const positionX = event.clientX - centerX;
    const positionY = event.clientY - centerY;

    const rotateX = 25*positionY/(cardHeight/2);
    const rotateY = 25*positionX/(cardWidth/2);

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    console.log(rotateX, rotateY);
}
