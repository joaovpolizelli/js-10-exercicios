function soma () {
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    var res = document.getElementById("res");
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    res.innerHTML = "Resultado é: " +(num1+num2);

}