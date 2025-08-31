function push_Keydown(event) {
	let keyCode = event.key;
	
	document.getElementById("number").innerHTML = ids[Q_No];
	document.getElementById("dict_output").innerHTML = dic[Q_No].replace(/;/g, '&emsp;&emsp;');
	document.getElementById("img").src = "http://hack-note.com/wp-content/uploads/duo_image/" + ids[Q_No] + ".png";
	
	if (Q_l == Q_l-Q_i) {
		document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l);
	}

	if (Q[Q_No].charAt(Q_i) == keyCode) {
		Q_i++;
		document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l);

		if (Q_l-Q_i === 0) {
			console.log("Q_No : " + Q_No);
			Q_No += 1;
			console.log("Q_No : " + Q_No);
			Q_i = 0;
			Q_l = Q[Q_No].length;
			document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l);
		}
	}
}
