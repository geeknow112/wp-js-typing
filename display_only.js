var test = document.getElementsByClassName("sentence");
var dict = document.getElementsByClassName("dictionary");

if (test.length > 0) {
    var startEl = document.getElementById("start");
    var numberEl = document.getElementById("number");
    var dictEl = document.getElementById("dict_output");
    
    if (startEl) startEl.innerHTML = test[0].innerText;
    if (numberEl) numberEl.innerHTML = test[0].id;
    if (dictEl) dictEl.innerHTML = dict[0] ? dict[0].innerText.replace(/;/g, '&emsp;&emsp;') : '';
}
