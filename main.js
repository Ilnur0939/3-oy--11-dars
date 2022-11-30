// 1-masala

function func(a, b){
    if((a > b && a < 10) || (a > 10 && a < b)){
        return a
    }
    else if(a == b){
        return 0
    }
    else{
        return b
    }
     
    
    
}
console.log(func('15', '13'));






// 2-masala

// function func(str){
//     var n1 =  str[0].length;
//     var n2 =  str[1].length;
//     if(str[0][0] == str[1][0] || str[0][n1-1] == str[1][n2-1]){
//         return true
//     }
//     else{
//         return false
//     }
// }


// console.log(func(['hrhrol', 'fgdghaloml']));