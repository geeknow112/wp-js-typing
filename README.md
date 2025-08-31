# WordPress Typing Game

Chrome対応の英語タイピング練習ゲーム

## 機能
- 英語文章のタイピング練習
- リアルタイム文字照合
- 日本語訳表示
- Chrome互換性対応

## 修正履歴
- Chrome `replaceAll()` 互換性修正
- 変数重複エラー解決
- Space キーのスクロール防止
- Vimium拡張機能対応

## 使用方法
WordPressのfunctions.phpに追加後、ショートコード `[jstype]` で使用

## データベース
- `hack_duo`: 英語文章データ
- `hack_duo_dict`: 英日辞書データ
