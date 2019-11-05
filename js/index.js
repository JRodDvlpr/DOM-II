// Your code goes here


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
const nav = document.querySelector ('nav');
nav.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = 'white';
});

// ### drag  ### //

const dragIt = document.querySelectorAll('img');
dragIt.forEach(event => {
    event.addEventListener('drag', (event) => {
        event.target.style.opacity = '0.4';
    });
})

// ### Scroll ### //
// const scrolling = document.querySelector ('');
// scrolling.addEventListener('scroll', () => {
//     alert('Scroll Slowly!')
// });

const elements = document.querySelectorAll('body');
elements = Array.prototype.slice.call(elements);

// and then make each element do something on scroll
elements.forEach(function(element) {
  window.addEventListener("scroll", runOnScroll);
});

// ### Select ### //

// ### FOCUS ### //
const focused = document.querySelectorAll('nav a');
focused.forEach(event => {
    event.addEventListener('focus', (event) => {
        event.target.style.background = 'red';
    });
})


// ### LOAD ### // 
window.addEventListener('load', () => {
	alert('Welcome to this test dummy of a page I created to be the dummy of the page. Test the page out by clicking and scrolling through it to see all the cool ')
});


// ### wheelie ### //
const wheelie = document.querySelector('p');
wheelie.addEventListener('wheel', (event) => {
	const colors = ['purple', 'white', 'red', 'blue'];
	const random = Math.floor(Math.random() * 4);
	event.target.style.backgroundColor = colors[random];
});


// ### Resize ### // 
window.addEventListener('resize', () => {
	alert('That Hurt! You have changed the size of the screen!');
});


// ### KEYDOWN ### // 
const downKey = document.querySelector ('body');
downKey.addEventListener('keydown', (event) => {
	event.target.style.color = 'red';
});

downKey.addEventListener('keyup', (event) => {
    event.target.style.color = 'black';
   
});
