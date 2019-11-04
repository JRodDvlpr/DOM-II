// Your code goes here



// const wheelie = document.querySelector ();
// const dragIt = document.querySelector ();
// const pageLoad = document.querySelector ();
// const focused = document.querySelector ();
// const resizing = document.querySelector ();
// const scrolling = document.querySelector ();
// const selector = document.querySelector ();



// ### MouseOver Images ### //
const overMouse = document.querySelectorAll('img');
overMouse.forEach(event => {
event.addEventListener('mouseover', () => {
    event.style.transform = 'scale(1.3)';
    event.style.transition ='all 0.3s';
})
}) 

overMouse.forEach(event => {
event.addEventListener('mouseleave', () => {
    event.style.transform = 'scale(1)';
    event.style.transition ='all 3.0s';
})
}) 

// ### Click Body ### //
const clicker = document.querySelector ('body');
clicker.addEventListener('click', (event) => {
	event.target.style.backgroundColor = 'skyblue';
});

// ### Dbl Click Nav ### //
const nav = document.querySelector ('.nav');
nav.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = 'red';
});

// ### drag  ### //

// const changeText = document.querySelectorAll('.destination')
//   changeText.addEventListener('click', () => {
//     changeText.textContent.alert = 'Ouch!';
      
// });



// ### wheelie ### //



// ### Resize ### // 
const resizing = document.querySelector ();
resizing.addEventListener('resize', () => {
	alert('You have changed the size of the screen!');
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
