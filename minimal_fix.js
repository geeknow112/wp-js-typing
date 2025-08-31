// 1. replaceAll修正
document.getElementById("dict_output").innerHTML = dic[Q_No].replace(/;/g, '&emsp;&emsp;');

// 2. 初期表示追加
document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l);

// 3. 不要条件削除
// if (Q_l == Q_l-Q_i) { を削除
