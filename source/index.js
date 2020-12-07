import hello_word from "./hello.js";
import world_word from "./world.js";
import style from './style.css'; // bundling할 것이기 때문에 source로 옮긴 뒤 import
document.querySelector('#root').innerHTML = 
    hello_word + ' ' + world_word;
console.log('css', style);