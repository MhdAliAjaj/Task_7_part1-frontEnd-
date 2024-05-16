
//*************************************part 1************************************* */
//-----------------------qustion 1-----------------------------------------------
const input_num1 = document.querySelector('.num1');
const input_num2 = document.querySelector('.num2');
const input_num3 = document.querySelector('.num3');

const btn_ope = document.querySelector('.btn_operation');
const max_val = document.querySelector('.max');
const min_val = document.querySelector('.min');

const arr_numbers = [];


btn_ope.addEventListener('click', (event) => {
    num1 = input_num1.value;
    num2 = input_num2.value;
    num3 = input_num3.value;
    arr_numbers.push(num1, num2, num3);
    let max_v = getMaxOfArray(arr_numbers);
    let min_v = getMinOfArray(arr_numbers);
    console.log('the max is :', max_v);
    console.log('the min is :', min_v);
    max_val.innerHTML = max_v;
    min_val.innerHTML = min_v;
});



//طريقة اولى لايجاب العدد الاكبر
function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}
function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
}



//طريقة ثانية لايجاد العدد الاكبر
// function maxNum(num1, num2, num3){
//     var tmp = 0;
//     if(num1 < num2 && num3 < num2) {
//         tmp = num2;
//     } else if(num3 < num1){
//         tmp = num1;
//     } else {
//         tmp = num3;    
//     }
//     return tmp;
// }
// var arr = [];
// // for(var i = 0; i < 3; i++) {
// //     arr[i] = prompt("Enter a number");
// // }
// console.log(maxNum.apply(this, arr));




//-----------------------qustion 2-----------------------------------------------
const vowelOrConsonant = (x) => {
    if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u') {
        console.log("Vowel");
    }

    else {
        console.log("Consonant");
    }
}
const check_input = document.querySelector('.checkText');
const res_tex_V_C = document.querySelector('.res_tex');
const btn_check_C_V = document.querySelector('.checkText_C_V');

btn_check_C_V.addEventListener('click', (event) => {
    const input_text = vowelOrConsonant(check_input.value);
    // console.log(input_text.value);

    // res_tex_V_C.value = input_text.value;
    res_tex_V_C.innerHTML = input_text.value;
})




//-----------------------qustion 3-----------------------------------------------
const input_multi_f = document.querySelector('.input_multi');
const par_res_multi = document.querySelector('.res_multi_form');
const arr_res_mult = [];
input_multi_f.addEventListener('input', (event) => {
    const num = parseInt(input_multi_f.value);
    for (let i = 1; i <= 12; i++) {
        // multiply i with number
        const result = i * num;
        arr_res_mult[i] = i * num;
        // display the result

        console.log(`${num} * ${i} = ${arr_res_mult[i]}`);
        //store result
        par_res_multi.innerHTML = arr_res_mult;
    }
})

// take input from the user
// const number = parseInt(prompt('Enter an integer: '));

// //creating a multiplication table
// for(let i = 1; i <= 12; i++) {

//     // multiply i with number
//     const result = i * number;

//     // display the result
//     console.log(`${number} * ${i} = ${result}`);
// }

//----------------------------------------------------------------------------------
//-----------------------------------qustion 4--------------------------------------
//4 – Write a program that allows to user to insert number then print all
//even numbers between 1 to this number

let arr_even = [];
const input_check_even = document.querySelector('.check_even');
input_check_even.addEventListener('input', () => {
    console.log(input_check_even.value);
    console.log("All even numbers from 1 to n")
    for (i = 1; i <= input_check_even.value; i++) {
        if (i % 2 == 0) {
            arr_even.push(i);
            // console.log(arr_even)
        }
    }
    const res_even_p = document.querySelector('.res_even');
    res_even_p.innerHTML = arr_even;
});

//-----------------------------------qustion 5--------------------------------------
//5- Write a program to enter marks of five subjects and calculate total,
// average and percentage.

let arr_mark = [];
const input_mark1 = document.querySelector('.mark1');
const input_mark2 = document.querySelector('.mark2');
const input_mark3 = document.querySelector('.mark3');
const input_mark4 = document.querySelector('.mark4');
const input_mark5 = document.querySelector('.mark5');

const btn_avg_form = document.querySelector('.btn_avg');
// create a variable for the sum and initialize it
let sum = 0;
btn_avg_form.addEventListener('click', (event) => {
    arr_mark.push(input_mark1.value);
    arr_mark.push(input_mark2.value);
    arr_mark.push(input_mark3.value);
    arr_mark.push(input_mark4.value);
    arr_mark.push(input_mark5.value);
    console.log('=======================');
    // calculate sum using forEach() method
    arr_mark.forEach(num => {
        sum += parseInt(num);
    });
    // calculate avg using forEach() method
    let avg = sum / arr_mark.length;
    console.log(`Total marks : ${sum}`);

    console.log(`avg : ${avg}`);
    //-------------------------
    // Percentage 

    //?????????
    //---------------------------
    console.log('=======================');


});

//-----------------------------------qustion 6--------------------------------------
//Write a program to input marks of five subjects Physics, Chemistry,
// Biology, Mathematics and Computer, Find percentage and grade

// Array of subjects with their names and grades
// var subjects = [['Physics,', 80], ['Chemistry,', 77], ['Biology,', 88], ['Mathematics', 95], ['Computer,', 68]];
const m1 = document.querySelector('.mark1_Physics');
const m2 = document.querySelector('.mark2_Chemistry');
const m3 = document.querySelector('.mark3_Biology');
const m4 = document.querySelector('.mark4_Mathematics');
const m5 = document.querySelector('.mark5_Computer');
const btn_perc_form = document.querySelector('.btn_perc');

var subjects = [['Physics,', m1.value], ['Chemistry,', m2.value], ['Biology,', m3.value], ['Mathematics', m4.value], ['Computer,', m5.value]];
var Percmarks = 0;
btn_perc_form.addEventListener('click',(event) => {

  
  
    // Loop through the students array to calculate the total marks
    for (var i = 0; i < subjects.length; i++) {
        Percmarks += subjects[i][1];
        // console.log((subjects));
       
        var avg = (Percmarks / subjects.length);
    }
    // Calculate and log the average grade
    console.log("Average grade: " + parseInt(avg));

    // Determine the grade based on the average
    // if (avg < 60) {
    //     console.log("Grade: F");
    // } else if (avg < 70) {
    //     console.log("Grade: D");
    // } else if (avg < 80) {
    //     console.log("Grade: C");
    // } else if (avg < 90) {
    //     console.log("Grade: B");
    // } else if (avg <= 100) {
    //     console.log("Grade: A");
    // }

});


