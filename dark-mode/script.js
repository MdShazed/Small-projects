console.log('Hello World!');

function darkmode() {
    let dark = document.getElementById('dark'); //my button 
    let colorname = document.getElementById("colorname"); //the h1 tag
    // document.body.classList.toggle('drk');
    // document.body.classList.toggle('red');


    if (dark.click = true) {
        document.body.classList.toggle('drk');
    } else {
        document.body.classList.toggle('red');
    }
}

document.getElementById("dark").addEventListener(
    "click",
    function(event) {
    let colorname = document.getElementById("colorname"); //the h1 tag

      if (event.target.value === "RED MODE") {
        event.target.value = "DARK MODE";
        colorname.innerHTML = "Background Color : RED";
      } else {
        event.target.value = "RED MODE";
        colorname.innerHTML = "Background Color : Dark";
      }
    },
    false
  );



//   function textchanger(){
//     let dark = document.getElementById('dark'); //my button 
//     let colorname = document.getElementById("colorname"); //the h1 tag

//     if(colorname.innerHTML = 'RED')
//     {

//         console.log("BLACK");

//     }

//     else{

//         console.log("RED");

//     }


  


