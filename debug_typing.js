// デバッグ用コードを関数の最初に追加
function push_Keydown(event) {
	console.log("Q配列:", Q);
	console.log("Q_No:", Q_No, "Q.length:", Q.length);
	console.log("start要素:", document.getElementById("start"));
	console.log("number要素:", document.getElementById("number"));
	console.log("dict_output要素:", document.getElementById("dict_output"));
	
	if (!Q[Q_No]) {
		console.error("Q[Q_No]が存在しません");
		return;
	}
	
	document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l);
	// 以下既存コード...
}
