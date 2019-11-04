// Your code goes here

// const overMouse = document.querySelector('.home .intro img');
const clicker = document.querySelector ('body');
// const wheelie = document.querySelector ();
// const dragIt = document.querySelector ();
// const pageLoad = document.querySelector ();
// const focused = document.querySelector ();
// const resizing = document.querySelector ();
// const scrolling = document.querySelector ();
// const selector = document.querySelector ();
const nav = document.querySelector ('.nav');


/// ###### (1) ##### ///
const overMouse = document.querySelectorAll('img');
overMouse.forEach(event => {
event.addEventListener('mouseover', () => {
    event.style.transform = 'scale(1.3)';
    event.style.transition ='all 0.3s';
})
}) 

clicker.addEventListener('click', (event) => {
	event.target.style.backgroundColor = 'skyblue';
});


nav.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = 'red';
});

// const bigImg = document.querySelectorAll('img');
// bigImg.forEach(image =>{
// image.addEventListener('mouseover', () => {
//   image.style.transform='scale(1.2)';
//   image.style.transition='all 0.3s';
// })
// })
// bigImg.forEach(image =>{
//  image.addEventListener('mouseleave', () =>{
//  image.style.transform='scale(1)';
//    image.style.transition='all 0.3s';
//  })
// })
