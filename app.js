
// get all elements by id

const body = document.querySelector('body');
const btnBlue = document.querySelector('#color-blue');
const btnBrown = document.querySelector('#color-brown');
const btnDark = document.querySelector('#color-dark');
const btnGrey = document.querySelector('#color-grey');
const btnNone = document.querySelector('#color-none');


// Applying logic

btnBlue.addEventListener('click', ()=>{
 
  body.classList.add('bg-blue', 'text-white');
  body.classList.remove('bg-brown', 'bg-dark', 'bg-grey');
 
});


btnBrown.addEventListener('click', ()=>{
  
  body.classList.add('bg-brown', 'text-white');
  body.classList.remove('bg-blue', 'bg-dark', 'bg-grey');
  
});
btnDark.addEventListener('click', ()=>{

  body.classList.add('bg-dark', 'text-white');
  body.classList.remove('bg-brown', 'bg-blue', 'bg-grey');
});

btnGrey.addEventListener('click', ()=>{
  
  body.classList.add('bg-grey', 'text-white');
  body.classList.remove('bg-blue', 'bg-dark', 'bg-brown');
  
});

btnNone.addEventListener('click', ()=>{
  
  body.classList.remove('bg-blue', 'bg-dark', 'bg-brown', 'bg-grey', 'text-white');
  
});



