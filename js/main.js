
//
// 1

    // let enter = Number(window.prompt('enter number'))
    // console.log( "number is " + enter)

// end 1
///



//////
// 2
// let num = window.prompt('enter number')

//     if( num % 3==0 || num % 4==0){
//         console.log('yes')
//     }else(
//         console.log('no') 
//     )
// end2



// 3
// let num1= window.prompt('enter first number')
// let num2= window.prompt('enter scond number')

// if( num1 > num2){
//     console.log(num1)
// }
// else if ( num2 > num1){
//     console.log(num2)
// }
// end3





// 4

// let numb =Number(window.prompt('enter number'))

// if(numb < 0){
//     console.log( numb+ ' is negative')
// }else{
//     console.log( numb +' is positive')
// }
// end 4





// 5

// var number1 = Number(window.prompt('enter first number'))
//  var number2 =Number(window.prompt('enter scond number'))
//  var number3 =Number(window.prompt('enter third number'))


// let max = number1
// if( number1 > number2 && number1 > number3){
//     console.log('max element ' + max)
// }

// else if(number2 > number1 && number2 > number3){
//     console.log('max element ' +number2)
// }   
// else if( number3 > number2 && number3 > number1){
//     console.log('max element ' +number3)
// }

// let min = number1
// if( number1 < number2 && number1 < number3){
//     console.log('min element ' +min)
// }
// else if( number2 < number1 && number2 < number3){
//     console.log('min element ' +number2)
// }
// else if(number3 < number1 && number3 < number2){
//     console.log('min element ' +number3)
// }

// end 5






// 6

// var chek = Number(window.prompt('chek numbre'))

// if( chek % 2 ==0 ){
//     console.log('this number ' + chek + ' is even')
// }
// else if( chek % 1==0){
//     console.log('this number ' + chek + ' is odd')
// }
// end 6




/////
// 8
// var vowel = window.prompt('chek number vowel or consonant')
// if( vowel =='a' || vowel =='e' || vowel =='l' || vowel =='o' || vowel =='u'){
//     console.log( vowel + ' is vowel')
// }
// else{
//     console.log(vowel +' is consonant')
// }
// end 8




// 9

// var enter = Number(window.prompt('enter number'))

// for( let i = 1; i <= enter ; i++){
//     console.log(i)
// }

// end 9




// 10

// var numx = Number(window.prompt('enter numbre'))
// for( let x = 1; x <=12; x++){
//     console.log(numx * x)   
// }
// end 10





// 11

// var col = Number(window.prompt('enter number'))
//  for( let z =1 ; z<= col; z++){
//     if( z % 2==0){
//         console.log(z)
//     }
//  }   
//end 11
//




// 12

// var power = Number(window.prompt('enter number'));
// var power2 = Number(window.prompt('enter power'));

// var all = power**power2 ;
//  console.log(all);
// end 12







// 12 agin

// var subject1 = Number(window.prompt('arabic degree'))
// var subject2 = Number(window.prompt('math'))
// var subject3 = Number(window.prompt('physics'))
// var subject4 = Number(window.prompt('chemistry'))
// var subject5 = Number(window.prompt('english'))

// var total = subject1 + subject2 + subject3+ subject4 + subject5;
// var avarage = total/5;
// var percentage = (total / 500) * 100;

// console.log('total = '+ total) 
// console.log('avarage = ' + avarage)
// console.log('percentage = ' + percentage)
// end 12






// 13
  
// var month = Number(window.prompt('enter number month :'))

//     if( month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
//         console.log('month ' + month + ' = 31 DAY')
//     }else if(month === 4 || month === 6 || month == 9 || month === 11){
//         console.log('month ' + month + ' = 30 DAY')
//     }else if(month === 2){
//         console.log('month ' + month + ' = 28 DAY')
//     }else{
//         console.log('month is not found');
        
//     }

// end 13




// 14


// var physics = Number(window.prompt('enter degree in physics'))
// var chemistry = Number(window.prompt('enter degree in chemistry'))
// var biology = Number(window.prompt('enter degree in biology'))
// var math = Number(window.prompt('enter degree in math'))
// var computer = Number(window.prompt('enter degree in computer'))

// var total2 = physics + chemistry + biology + math +computer
// var percentage2 = (total2 / 500) * 100;
// var grad = '';

// if(percentage2 >=90){
//     grad = 'A'
// }else if(percentage2 >=80){
//     grad ='B'
// }
// else if(percentage2 >=70){
//     grad ='C'
// }
// else if(percentage2 >=60){
//     grad ='D'
// }
// else if(percentage2 >=40){
//     grad ='E'
// }
// else if(percentage2 >=40){
//     grad ='F'
// }
// console.log('percentage = ' + percentage2 + '%')
// console.log('grad = '+ grad)

// end 14








// 

// 15

// var month = Number(window.prompt('enter the month number (1-12) : '))
// var day;
// switch (month){
//     case 1 : 
//     case 3 :
//     case 5 :
//     case 7 : 
//     case 8 : 
//     case 10 :
//     case 12 : 
//     day = 31
//     break; 

//     case 4 : 
//     case 6 :  
//     case 9 :  
//     case 11 :
//         day = 30 
//     break;

//     case 2 : day = 28
//     break;
// }
// console.log(Number(day)+' DAY')

// end 15




// 16

// let letter = window.prompt('enter s letter : ')

// switch(letter){
//     case 'a' : 
//     case 'e' : 
//     case 'i' : 
//     case 'o' : 
//     case 'u' : 
//     console.log(letter + ' is a vowel')
//     break;

//     default: 
//     console.log(letter +' letter is consonant')
//     break;
// }

// end 16





// 17

// var numOne = Number(window.prompt(' enter first number'))
// var numTwo = Number(window.prompt(' enter second number'))

// switch(true){
//     case numOne > numTwo :
//         console.log(numOne)
//         break;
//         case numOne < numTwo :
//             console.log(numTwo)
//             break;

//             default :
//             console.log('number is equal')
// }
// end 17




// 18

// var test = Number(window.prompt(' check number even  or odd'))

// switch(true){
//     case test % 2==0 :
//         console.log(test + ' is even')
//         break;
//         case test % 1==0 :
//             console.log(test + ' is odd')
        
// }
// end 18





// 19

// var check = Number(window.prompt(' check number'));

// switch(true){
//     case (check > 0 ):
//         console .log(check + ' is positive');
//         break;
//         case (check < 0 ): 
//         console.log(check + ' is negative');
//         break;
//         case (check ===0 ): 
//         console.log('Zero');
//         break;
// }
// end 19





// 20

// var num1 = Number(window.prompt( 'enter number'))
// var num2 = Number(window.prompt( 'enter number'))

// var plus = '+' 
//  plus (+ , - , %  , * , ** , /) 
// switch(plus){
//     case '+': 
//     console.log(num1 + num2)
//     break;
//     case '-': 
//     console.log(num1 - num2)
//     break;
    
//     case '*': 
//     console.log(num1 * num2)
//     break;

//     case '/': 
//     console.log(num1 / num2)
//     break;

//     case '**': 
//     console.log(num1 ** num2)
//     break;

//     case '%': 
//     console.log(num1 % num2)
//     break;
//     default:
//         console.log('the operation is not true')
// }
// end 20





