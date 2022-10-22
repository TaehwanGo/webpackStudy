import hello_word from "./hello.js";
import world_word from "./world.js";
import _ from "lodash";
import style from './style.css'; // bundling할 것이기 때문에 source로 옮긴 뒤 import
document.querySelector('#root').innerHTML = _.join([hello_word, world_word], ' ');
console.log('css', style);