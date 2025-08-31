// 修正前（エラー）
if (typeof Q === 'undefined')
    let Q = [];

// 修正後（正しい）
if (typeof Q === 'undefined') {
    var Q = [];
    var ids = [];
    var dic = [];
}
