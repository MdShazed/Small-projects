console.log('hello world ')


var a = Math.floor(Math.random() * 11);
console.log(a);

let change = () => {
    let text = document.getElementById('text');
    let input_num = document.getElementById('input_num').value;
    
    // text.innerHTML = 'hi'; 


    if (input_num == a) {
        // text.innerHTML = 'success';
        window.location.href = "success.html";
        
    } else {
        // text.innerHTML = 'Failed';
        window.location.href = "failed.html";
    }
}

//  function reload() {
//     window.location.reload()
// }

function goback(){
    let relaod = document.getElementById('reload');
        location.href = "index.html";
}





// change();