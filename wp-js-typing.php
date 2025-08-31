<?php
/**
 * Plugin Name: WP JS Typing Game
 * Description: Chrome対応の英語タイピング練習ゲーム
 * Version: 1.0.0
 * Author: Your Name
 */

// セキュリティ: 直接アクセスを防ぐ
if (!defined('ABSPATH')) {
    exit;
}

// プラグインのメイン機能を読み込み
require_once plugin_dir_path(__FILE__) . 'includes/typing-game.php';
?>
