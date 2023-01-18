let btn = document.querySelectorAll(".btn-angka");
let op = document.querySelectorAll(".btn-operator");
let output = document.querySelector("#output");
let math = null, x, y, hasil;

for (let index = 0; index < btn.length; index++) {
    btn[index].onclick = function () {
        if (output.value == "0") {
            output.value = btn[index].innerHTML;
        } else {
            output.value += btn[index].innerHTML;
        }
    }
}

op[0].onclick = function () {
    math = "+";
    x = output.value;
    output.value = "0";
}

op[1].onclick = function () {
    math = "-";
    x = output.value;
    output.value = "0";
}

op[2].onclick = function () {
    math = "*";
    x = output.value;
    output.value = "0";
}

op[3].onclick = function () {
    output.value = "0";
    math = null;
}

op[4].onclick = function () {
    y = output.value;
    output.value = Calculator(math);
}

op[5].onclick = function () {
    math = "/";
    x = output.value;
    output.value = "0";
}


function Calculator(math) {
    if (math != null) {
        switch (math) {
            case "+":
                hasil = parseFloat(x) + parseFloat(y);
                break;
            case "-":
                hasil = parseFloat(x) - parseFloat(y);
                break;
            case "*" :
                hasil = parseFloat(x) * parseFloat(y);
                break;
            case "/" :
                hasil = parseFloat(x) / parseFloat(y);
                break;
            default:
                hasil = "ERROR";
                break;
        }
        return hasil;
    }
}