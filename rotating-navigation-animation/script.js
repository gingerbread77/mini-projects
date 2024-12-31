const container = document.querySelector('.container');
const expand = document.getElementById('expand');
const close = document.getElementById('close');

expand.addEventListener('click',()=>{
  container.classList.add('show-nav'); 
})

close.addEventListener('click',()=>{
  container.classList.remove('show-nav');
})




