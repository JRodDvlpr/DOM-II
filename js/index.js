// Your code goes here




// const dragIt = document.querySelector ();
// const focused = document.querySelector ();
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
const clicker = document.querySelector ('.content-destination');
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

// ### LOAD ### // 
window.addEventListener('load', () => {
	alert('Welcome to this test dummy of a page I created to be the dummy of the page.')
});


// ### wheelie ### //
const wheelie = document.querySelector ('.home');
wheelie.addEventListener('wheel', (event) => {
	const colors = ['purple', 'white'];
	const random = Math.floor(Math.random() * 2);
	event.target.style.backgroundColor = colors[random];
});


// ### Resize ### // 
window.addEventListener('resize', () => {
	alert('That Hurt! You have changed the size of the screen!');
});


// ### KEYDOWN ### // 
const downKey = document.querySelector ('.content-destination h2');
downKey.addEventListener('keydown', (event) => {
	event.target.style.color = 'red';
});
 
