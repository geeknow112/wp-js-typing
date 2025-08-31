# WP JS Typing Game

Chrome対応の英語タイピング練習ゲーム（WordPressプラグイン）

## インストール方法

1. このリポジトリをWordPressの`wp-content/plugins/`ディレクトリにクローン
```bash
cd wp-content/plugins/
git clone https://github.com/geeknow112/wp-js-typing.git
```

2. WordPress管理画面でプラグインを有効化

3. ページや投稿でショートコード `[jstype]` を使用

## 機能
- 英語文章のタイピング練習
- リアルタイム文字照合
- 日本語訳表示
- Chrome互換性対応
- Space キーのスクロール防止
- Vimium拡張機能対応

## 必要なデータベーステーブル
- `typing_sentences`: 英語文章データ
- `typing_dictionary`: 英日辞書データ

## 修正履歴
- Chrome `replaceAll()` 互換性修正
- 変数重複エラー解決
- Space キーのスクロール防止
- Vimium拡張機能対応
- プラグイン化対応

## 使用方法
ショートコード: `[jstype]`
URL例: `https://your-site.com/tools/js-typing/?section=02`
