<?php
// WordPressの関数内またはプラグイン内で実行
function test_wpdb_connection() {
    global $wpdb;
    
    // 基本的な接続確認
    $result = $wpdb->get_var("SELECT 1");
    
    if ($result == 1) {
        echo "DB接続OK";
    } else {
        echo "DB接続エラー: " . $wpdb->last_error;
    }
    
    // テーブル存在確認（例：hack_duo）
    $table_exists = $wpdb->get_var("SHOW TABLES LIKE 'hack_duo'");
    echo $table_exists ? " / テーブル存在" : " / テーブル無し";
}

// ショートコードで実行
add_shortcode('dbtest', 'test_wpdb_connection');
?>
