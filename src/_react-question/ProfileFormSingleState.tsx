
export default function ProfileFormSingleState() {
  // useStateで1つのオブジェクトstateを作る（nameとage）
  // 例: const [profile, setProfile] = useState({ name: '', age: 20 })

  // name入力（text）のonChangeで、スプレッド構文で部分更新する
  // 例: setProfile(prev => ({ ...prev, name: e.target.value }))

  // age入力（number）のonChangeで、Number(...) にしてから部分更新する
  // 例: setProfile(prev => ({ ...prev, age: Number(e.target.value) }))

  return (
    <div className="max-w-sm mx-auto p-4 rounded-lg border bg-white">
      <h2 className="text-lg font-semibold mb-3">プロフィール編集</h2>

      <div className="space-y-3">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">名前</label>
          <input
            id="name"
            type="text"
            className="w-full border rounded px-3 py-2"
            // value と onChange を実装
          />
        </div>

        <div>
          <label htmlFor="age" className="block text-sm font-medium mb-1">年齢</label>
          <input
            id="age"
            type="number"
            min={0}
            className="w-full border rounded px-3 py-2"
            // value と onChange を実装（Number(...) に変換）
          />
        </div>

        <div className="pt-2 text-sm">
          {/* 下に「プロフィール: 名前（X歳）」を表示。未入力名は「（未入力）」 */}
          {/* 例: const displayName = profile.name.trim() ? profile.name : '（未入力）' */}
          <p className="text-gray-700">プロフィール: {/* displayName */}（{/* age */}歳）</p>
        </div>
      </div>
    </div>
  );
}




/*export default function ProfileFormSingleState() {
  // useStateで1つのオブジェクトstateを作る（nameとage）
  // 例: const [profile, setProfile] = useState({ name: '', age: 20 })
  const [profile, setProfile] = useState({ name: '', age: 20 });

  const displayName = profile.name.trim() ? profile.name : '(未入力)';

  // name入力（text）のonChangeで、スプレッド構文で部分更新する
  // 例: setProfile(prev => ({ ...prev, name: e.target.value }))

  // age入力（number）のonChangeで、Number(...) にしてから部分更新する
  // 例: setProfile(prev => ({ ...prev, age: Number(e.target.value) }))

  return (
    <div className="max-w-sm mx-auto p-4 rounded-lg border bg-white">
      <h2 className="text-lg font-semibold mb-3">プロフィール編集</h2>

      <div className="space-y-3">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">名前</label>
          <input
            id="name"
            type="text"
            className="w-full border rounded px-3 py-2"
            value={profile.name}
            onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
          />
        </div>

        <div>
          <label htmlFor="age" className="block text-sm font-medium mb-1">年齢</label>
          <input
            id="age"
            type="number"
            min={0}
            className="w-full border rounded px-3 py-2"
            value={profile.age}
            onChange={(e) => setProfile(prev => ({ ...prev, age: Number(e.target.value) }))}
          />
        </div>

        <div className="pt-2 text-sm">
          { 下に「プロフィール: 名前（X歳）」を表示。未入力名は「（未入力）」}
          { 例: const displayName = profile.name.trim() ? profile.name : '（未入力）' }
          <p className="text-gray-700">
            プロフィール: {displayName}（{profile.age}歳）</p>
        </div>
      </div>
    </div>
  );
}*/