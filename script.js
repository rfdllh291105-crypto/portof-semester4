document.querySelectorAll('.card').forEach(card=>{

card.addEventListener('touchstart',()=>{

card.classList.add('active')

})

card.addEventListener('touchend',()=>{

setTimeout(()=>{
card.classList.remove('active')
},200)

})

})