'use strict';
let letter = 64;
function consoleGO () {
    letter+=1;
    if(letter<=70){
        console.log(String.fromCharCode(letter));
        window.setTimeout(consoleGO, 1000);
    }
}
consoleGO();