// 名前空間で囲んで重複を回避
(function() {
	var test = document.getElementsByClassName("sentence");
	var dict = document.getElementsByClassName("dictionary");

	var Q = [];
	var ids = [];
	var dic = [];
	
	Object.keys(test).forEach(function (key) {
		Q.push(test[key].innerText);
		ids.push(test[key].id);
		dic.push(dict[key].innerText);
	});

	var Q_No = 0;
	var Q_i = 0;
	var Q_l = Q[Q_No].length;

	window.addEventListener("keydown", push_Keydown);

	function push_Keydown(event) {
		var startEl = document.getElementById("start");
		var numberEl = document.getElementById("number");
		var dictEl = document.getElementById("dict_output");

		if (!startEl || !numberEl || !dictEl) return;

		var keyCode = event.key;
		
		startEl.innerHTML = Q[Q_No].substring(Q_i, Q_l);
		numberEl.innerHTML = ids[Q_No];
		dictEl.innerHTML = dic[Q_No].replace(/;/g, '&emsp;&emsp;');

		if (Q[Q_No].charAt(Q_i) == keyCode) {
			Q_i++;
			startEl.innerHTML = Q[Q_No].substring(Q_i, Q_l);

			if (Q_l-Q_i === 0) {
				Q_No += 1;
				if (Q_No >= Q.length) Q_No = 0;
				Q_i = 0;
				Q_l = Q[Q_No].length;
				startEl.innerHTML = Q[Q_No].substring(Q_i, Q_l);
			}
		}
	}
})();
