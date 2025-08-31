<?php
/**
 * タイピングゲーム機能
 */

// セキュリティ: 直接アクセスを防ぐ
if (!defined('ABSPATH')) {
    exit;
}

function js_typing_new($atts){
    $section = $_GET["section"];
    global $wpdb;
    $no = $section;
    $sql = "select * from typing_sentences where section = ". $no. ";";
    $rows = $wpdb->get_results($sql);

    foreach ($rows as $i => $row) {
        $str = str_replace("'", "_", $row->sentence);
        $str = str_replace("'", "_", $str);
        $str = str_replace("/", "_", $str);
        echo '<p class="sentence" id="'. $row->id. '" style="display : none;">'. $str. '</p>';
    }

    $sql_dict = "select word, japanese from typing_dictionary;";
    $dict = $wpdb->get_results($sql_dict);
    foreach ($dict as $i => $d) {
        $dc[$d->word] = $d->japanese;
    }

    foreach ($rows as $i => $row) {
        $sens = explode(' ', $row->sentence);
        foreach ($sens as $j => $word) {
            if (empty($dc[$word])) { continue; }
            $ex[$row->id][] = $word. ':'. $dc[$word];
        }
        $dic = implode(';', $ex[$row->id]);
        echo '<p class="dictionary" id="'. $row->id. '" style="display : none;">'. $dic. '</p>';
    }

    echo '<div id="start"></div>';
    echo '<div id="number"></div>';
    echo '<div id="dict_output"></div>';
    echo '<div id="img" style="font-size: 18px; font-weight: bold; margin: 10px 0;">スコア: 0</div>';

echo <<< EOD
<script>
if (typeof window.typingGameInitialized === 'undefined') {
    window.typingGameInitialized = true;

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

    console.log("Q配列:", Q);
    console.log("Q_No:", Q_No, "Q_i:", Q_i, "Q_l:", Q_l);

    document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l);
    document.getElementById("number").innerHTML = ids[Q_No];
    document.getElementById("dict_output").innerHTML = dic[Q_No].replace(/;/g, '&emsp;&emsp;');

    window.addEventListener("keydown", function(event) {
        var keyCode = event.key;
        console.log("キー押下:", keyCode, "期待値:", Q[Q_No].charAt(Q_i));

        if (keyCode === ' ') {
            event.preventDefault(); // Space キーのスクロールを防ぐ
        }

        if (Q[Q_No].charAt(Q_i) == keyCode) {
            console.log("正解!");
            Q_i++;
            document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l);

            if (Q_l-Q_i === 0) {
                console.log("問題完了、次へ");
                Q_No += 1;
                if (Q_No >= Q.length) Q_No = 0;
                Q_i = 0;
                Q_l = Q[Q_No].length;

                document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l);
                document.getElementById("number").innerHTML = ids[Q_No];
                document.getElementById("dict_output").innerHTML = dic[Q_No].replace(/;/g, '&emsp;&emsp;');
            }
        }
    });
}
</script>
EOD;

    return "";
}

// ショートコードを登録
add_shortcode('jstype', 'js_typing_new');
?>
