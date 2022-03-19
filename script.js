// let plus = document.querySelectorAll(".plus");
// console.log(plus);


// for (let i = 0; i < plus.length; i++) {
//     plus[i].addEventListener("click", function () {
//         plus[i].nextElementSibling.innerHTML++;
//         Total()
    
//     })
    
// }

// let minus = document.querySelectorAll(".minus");
// console.log(minus);

// for (let i = 0; i < minus.length; i++) {

//     minus[i].addEventListener("click", function () {
//         if (minus[i].previousElementSibling.innerHTML > 0){
//             minus[i].previousElementSibling.innerHTML--;
//             Total()
//         }
//     })
// }

//Delete btn
let deletebtn = document.querySelectorAll(".deletebtn")

for (let i = 0; i < deletebtn.length; i++) {
    deletebtn[i].addEventListener("click", function() {
        deletebtn[i].parentElement.parentElement.parentElement.parentElement.parentElement.remove();
        Total()
    });
}




// function Total (){

//     let price=document.getElementsByClassName('price')
//     let quaty=document.getElementsByClassName('span0')
//     let tot=document.querySelector('.tot')
//         let sum=0;
    
//     for (let i=0; i<quaty.length; i++){
//     sum[i].innerHTML=quaty[i].innerHTML*price[i].innerHTML;
//     }
    
//     tot.innerHTML=sum;
//     }  


 var btn_plus = document.getElementsByClassName("plus");
var btn_minus = document.getElementsByClassName("minus");
var btn_remove = document.getElementsByClassName('delete');
var product = document.querySelector('.product');
var sum = document.getElementById('sum');
var price = document.getElementById('price');
var span0 = document.getElementsByClassName('span0')

 //button plus 

for (let i = 0; i<btn_plus.length; i++) {

  btn_plus[i].addEventListener("click", function () {
    btn_plus[i].nextElementSibling.innerHTML++;
Total()

  });


  
}
   //button minus 

for (let i = 0; i<btn_minus.length; i++) {

    btn_minus[i].addEventListener("click", function () {
        if (btn_minus[i].previousElementSibling.innerHTML>0) {
            btn_minus[i].previousElementSibling.innerHTML--;
Total()

        } 
  })
}

// //remove product

// for (let i = 0; i < btn_remove.length; i++) {
//     btn_remove[i].addEventListener('click',function(){
//         btn_remove[i].parentElement.remove();
// Total()

//      })
    
// }

//total price 

 function Total (){
    
    let unitprice=document.getElementsByClassName('price')
    let quaty=document.getElementsByClassName('span0')
    let tot=document.querySelector('.sum')
        let sum=0;
    for (let i=0; i<quaty.length; i++){
    sum+=quaty[i].innerHTML*unitprice[i].innerHTML
    }
    
    tot.innerHTML=sum
    }  
 
// // like button

// var heart = document.getElementsByClassName('fas');

// for (let i = 0; i < heart.length; i++) {
//     heart[i].addEventListener('click',function(){
//         heart[i].classList.toggle('red');
//     })   
// }


