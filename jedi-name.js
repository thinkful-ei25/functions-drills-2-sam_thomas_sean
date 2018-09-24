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

function decode(word){
    let arr = word.split(" ");
    let arr2 = arr.map(function(a){
        return a.slice(0,1);
    });
    let answer ="";
   for(let i=0; i<arr.length;i++){
        switch(arr2[i]){
            case 'a':
                answer += arr[i][1];
                break;
            case 'b':
                answer += arr[i][2];
                break;
            case 'c':
                answer += arr[i][3];
                break;
            case 'd':
                answer += arr[i][4];
                break;
            default:
                answer += ' ';
        }
    }
    return answer;
    
}

let decode1  = decode('craft block argon meter bells brown croon droop');
console.log(decode1);


function daysInAMonth(month, leapYear = false) {
    switch(month) {
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            return `${month} has 31 days`;
            break;
        case 'April':
        case 'June':
        case 'September':
        case 'November':
            return `${month} has 30 days`;
            break;
        case 'February':
            if (leapYear === true) {
                return `${month} has 29 days`;
            } else {
                return `${month} has 28 days`;
            }
            break;
    }
}

let days = daysInAMonth('February', true);
console.log(days);


