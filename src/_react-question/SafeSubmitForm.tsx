/* 1. やりたいこと
フォームを「送信」してもページがリロードされないようにし、送信されたテキストを安全に画面へ表示する基本コンポーネントを作ります。Enter キーでの送信にも対応し、空文字や空白のみの送信はエラーメッセージを表示します。

2. 実装の条件
コンポーネント名は SafeSubmitForm としてください。
form 要素を使い、送信処理は onSubmit で行うこと。
onSubmit 内で event.preventDefault() を必ず呼び出し、ページリロードを防ぐこと。
入力欄は制御コンポーネントとして useState で値を管理すること。
送信時に入力値を trim() し、以下のいずれかを表示すること。
空または空白のみ: 入力が空です（エラー表示）
それ以外: 送信値: 入力内容（成功表示）
初期状態では結果表示は行わないこと（未送信時は非表示）。
ラベルと入力は関連付けること（例: label の htmlFor と input の id）。
3. 学べること
onSubmit と event.preventDefault() によるフォーム送信制御の基本（Enter 送信も一括で扱える）
useState を使った制御された入力欄の実装
送信時に値を正規化（trim()）し、結果を条件付きで描画するパターン
「急がば回れ」。まずは基本を丁寧に押さえることで、実務でも壊れにくいフォーム実装につながります。*/

// 入力値を保持する state を用意してください（初期値は空文字）
// 最後に「送信」した値を保持する state を用意してください（初期は null にして未送信を表現）
// onSubmit ハンドラを作成し、必ず event.preventDefault() を呼び出してください
// onSubmit 内で、入力値を trim() してから、送信値 state に保存してください
// JSX: form 要素（label + input + 送信ボタン）と、送信結果の条件付き表示を実装してください
export default function SafeSubmitForm() {
  return (
    <>
      <form>
        <label htmlFor="message">入力欄</label>
        <input />
        <button type="submit">送信</button>
      </form>
    </>
  );
}
