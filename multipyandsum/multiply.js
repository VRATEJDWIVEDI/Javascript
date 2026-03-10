function mul(){
let a =Number(document.getElementById("num1").value);
let b =Number(document.getElementById("num2").value);
let product= a * b;
document.getElementById("result").innerText= product;
}
function sum(){
    let a = Number(document.getElementById("num1").value);
    let b= Number(document.getElementById("num2").value);
    let sum= a + b;
    document.getElementById("result").innerText= sum;
}