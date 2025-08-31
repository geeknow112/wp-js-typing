// 1. 変数宣言を条件付きに変更
if (typeof Q === 'undefined') {
    let Q = [];
    let ids = [];
    let dic = [];
}

// 2. 要素存在チェックを追加
function push_Keydown(event) {
    // 要素存在チェック
    const startEl = document.getElementById("start");
    const numberEl = document.getElementById("number");
    const dictEl = document.getElementById("dict_output");
    
    if (!startEl || !numberEl || !dictEl) {
        console.error("必要なHTML要素が見つかりません");
        return;
    }
    
    startEl.innerHTML = Q[Q_No].substring(Q_i, Q_l);
    let keyCode = event.key;
    
    numberEl.innerHTML = ids[Q_No];
    dictEl.innerHTML = dic[Q_No].replace(/;/g, '&emsp;&emsp;');
    
    // 以下既存のロジック...
}
