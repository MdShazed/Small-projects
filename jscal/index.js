console.log('check');

// function para() {
//     let para = document.getElementById('para');
//     para.innerHTML = 'this is written by javascript';
// }



// function para() {
//     let num1 = document.getElementById('num1');
//     let num2 = document.getElementById('num2');
//     let submit = document.getElementById('submit');
//     let para = document.getElementById('para');
//     para.innerHTML = 'this is written by javascript';
//      console.log(num1);
//      console.log(num2);
//      console.log(submit);
// }
// para();


//var num1 = prompt('Enter your first num');
//var num2 = prompt('Enter your second num');

function para() {
    let para = document.getElementById('para');
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    let numl = parseInt(num1);
    let numll = parseInt(num2);


    //let num1 = 20;
    //let num2 = 10;
    para.innerHTML = 'your answer is : ' + (numl + numll) ;
}



