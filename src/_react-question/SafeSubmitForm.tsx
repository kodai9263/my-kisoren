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
