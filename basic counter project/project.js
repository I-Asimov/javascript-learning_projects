let x = 0;
document.getElementById("number").textContent = x;
document.getElementById("plus").onclick = function(){
    x++;
    document.getElementById("number").textContent = x;
    console.log(x);
}
document.getElementById("minus").onclick = function(){
    x--;
    document.getElementById("number").textContent = x;   
    console.log(x)
}