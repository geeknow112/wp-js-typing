// 初期表示を追加
window.addEventListener("load", function() {
    if (Q.length > 0) {
        document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l);
        document.getElementById("number").innerHTML = ids[Q_No];
        document.getElementById("dict_output").innerHTML = dic[Q_No].replace(/;/g, '&emsp;&emsp;');
    }
});

function push_Keydown(event) {
    let keyCode = event.key;
    
    // 配列範囲チェック
    if (Q_No >= Q.length) Q_No = 0;
    
    document.getElementById("number").innerHTML = ids[Q_No];
    document.getElementById("dict_output").innerHTML = dic[Q_No].replace(/;/g, '&emsp;&emsp;');
    document.getElementById("img").src = "http://hack-note.com/wp-content/uploads/duo_image/" + ids[Q_No] + ".png";
    
    // 初期表示条件を削除
    document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l);

    if (Q[Q_No].charAt(Q_i) == keyCode) {
        Q_i++;
        document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l);

        if (Q_l-Q_i === 0) {
            Q_No += 1;
            if (Q_No >= Q.length) Q_No = 0;  // 配列範囲チェック
            Q_i = 0;
            Q_l = Q[Q_No].length;
            document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l);
        }
    }
}
