function insert(num) {
  document.form.textarea.value = document.form.textarea.value + num;
}

function equal() {
  var hasil = document.form.textarea.value;
  document.form.textarea.value = eval(hasil);
}

function clean() {
  document.form.textarea.value = "";
}

function back() {
  var hasil = document.form.textarea.value;
  document.form.textarea.value = hasil.substring(0, hasil.length - 1);
}

function removeZero() {
  var value = document.getElementById("output").innerHTML;
  if (value == "0") {
    value = "";
    document.getElementById("output").innerHTML = value;
  }
}
function perc() {
  document.form.textarea.value = document.form.textarea.value / 100;
}

function fordisplay(myvalue) {
  removeZero();
  document.getElementById("output").innerHTML += myvalue;
}

function solve() {
  removeZero();
  var equation = document.getElementById("output").innerHTML;
  var solved = eval(equation);
  document.getElementById("output").innerHTML = solved;
}
