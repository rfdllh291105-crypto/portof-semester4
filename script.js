function updateClock(){

const now = new Date();

const time = now.toLocaleTimeString('id-ID');

document.getElementById("clock").innerHTML = time;

}

setInterval(updateClock,1000);

updateClock();

function scrollToAbout(){

document.getElementById("about")
.scrollIntoView({
behavior:"smooth"
});

}

ScrollReveal().reveal('.hero-content',{
distance:'50px',
duration:1500,
origin:'bottom'
});

ScrollReveal().reveal('.card,.activity-card,.gallery-card,.timeline-item,.stat-card',{
distance:'30px',
duration:1200,
interval:200
});

document.querySelectorAll('button,.activity-card,.gallery-card,.stat-card')
.forEach(item=>{

item.addEventListener('click',()=>{

item.animate([
{transform:'scale(1)'},
{transform:'scale(0.95)'},
{transform:'scale(1)'}
],{
duration:250
});

});

});