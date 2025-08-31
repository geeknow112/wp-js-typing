echo <<< EOD
<script>
	var test = document.getElementsByClassName("sentence");
	var dict = document.getElementsByClassName("dictionary");

	// 問題文
	let Q = [];
	let ids = [];
	let dic = [];
	
	// objectのforeach
	Object.keys(test).forEach(function (key) {
		Q.push(test[key].innerText);
		ids.push(test[key].id);
		dic.push(dict[key].innerText);
	});

	let Q_No = 0;
	let Q_i = 0;
	let Q_l = Q[Q_No].length;

	window.addEventListener("keydown", push_Keydown);

	function push_Keydown(event) {
		// 要素存在チェック
		const startEl = document.getElementById("start");
		const numberEl = document.getElementById("number");
		const dictEl = document.getElementById("dict_output");

		if (!startEl || !numberEl || !dictEl) {
			console.error("必要なHTML要素が見つかりません");
			return;
		}

		let keyCode = event.key;
		
		startEl.innerHTML = Q[Q_No].substring(Q_i, Q_l);
		numberEl.innerHTML = ids[Q_No];
		dictEl.innerHTML = dic[Q_No].replace(/;/g, '&emsp;&emsp;');
		document.getElementById("img").src = "https://hack-note.com/wp-content/uploads/duo_image/" + ids[Q_No] + ".png";

		// 押したキーが合っていたら
		if (Q[Q_No].charAt(Q_i) == keyCode) {
			Q_i++;
			startEl.innerHTML = Q[Q_No].substring(Q_i, Q_l);

			// 全部正解したら
			if (Q_l-Q_i === 0) {
				Q_No += 1;
				if (Q_No >= Q.length) Q_No = 0;
				Q_i = 0;
				Q_l = Q[Q_No].length;
				startEl.innerHTML = Q[Q_No].substring(Q_i, Q_l);
			}
		}
	}
</script>
EOD;
