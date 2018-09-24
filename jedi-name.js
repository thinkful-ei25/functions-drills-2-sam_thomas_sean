'use strict'; 
function jediName(firstName, lastName) {
  return lastName.slice(0, 3) + firstName.slice(0, 2);
}

let jedi = jediName('Beyonce', 'Knowles');
console.log(jedi);

function beyond(num){
    if (num === Number.POSITIVE_INFINITY || num === Number.NEGATIVE_INFINITY){ 
        console.log('And beyond'); 
    }
    else if (num === Number.isFinite && num> 0){ 
        console.log('To Infinity'); 
    }
    else if (num === Number.isFinite && num < 0){ 
        console.log('To negative Infinity'); 
    }
    else if (num === 0){ 
        console.log('Staying home'); 
    }    
    else { 
        console.log('oops!'); 
    }

}

beyond(Number.POSITIVE_INFINITY); 

//console.log(checkBeyond); 