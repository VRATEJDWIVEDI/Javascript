function check(){
    let n =document.getElementById("num").value;
    if(n%2==0){
        document.getElementById("result").innerText="its even number";
    }
    else{
        document.getElementById("result").innerText="its odd number";
    }
}