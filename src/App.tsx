import { useState } from 'react'

import './App.css'

function App() {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const bothFilled = start.trim() !== '' && end.trim() !== '';
  let error = '';
  let days: number | null = null;

  if (bothFilled) {
    const s = new Date(start);
    const e = new Date(end);
    if (s > e) {
      error = '開始日より後に終了日を設定してください';
    } else {
      const msPerDay = 1000 * 60 * 60 * 24;
      days = Math.round((e.getTime() - s.getTime()) / msPerDay);
    }
  }

  return (
    <div className="max-w-md mx-auto p-5 border rounded-lg space-y-4 bg-white">
      <h2 className="text-lg font-semibold">日付レンジの差分</h2>

      <div className="space-y-2">
        <label htmlFor="start" className="block text-sm text-gray-700">開始日</label>
        <input
          id='start'
          type="date"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>

      <div className="space-y-2">
        <label htmlFor="end" className="block text-sm text-gray-700">終了日</label>
        <input
          id='end'
          type="date"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>

      <div>
        {!bothFilled && (
          <p>開始日と終了日を選択してください</p>
        )}
        {bothFilled && error && (
          <p>終了日は開始日以降にしてください</p>
        )}
        {bothFilled &&(
          <p>差分:{days}</p>
        )}
      </div>
    </div>
  )
}

export default App
