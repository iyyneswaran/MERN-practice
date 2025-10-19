console.log('hello mf');

// globally available modules which belong to the window object
// setTimeout()
// clearTimeout()

// here if we dont use the window the Browser itself will set the prefix as window and turns the setTimeout() into window.setTimeout()
// window.setTimeout()

// setInterval()
// clearInterval()


// In node we dont have window instead we have global to access the global variables 

var msg = 'Hello world'
// showing undefined because of the node modular system. The variable which i declare in this app.js are available only in this file alone not globally.
console.log(global.msg); 
console.log(msg);

console.log(module);