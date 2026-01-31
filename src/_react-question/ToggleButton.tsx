import { useState } from "react"

//ボタンをクリックすると、テキストの表示・非表示を切り替えることができるコンポーネントを作成してください。

export default function ToggleButton() {

  return (
    <div className="max-w-sm mx-auto bg-white p-4 shadow-md rounded-lg text-center">
      <button
        
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
      >
        表示/非表示
      </button>
      { <p className="text-gray-700">テキストが表示されています。</p>}
    </div>
  );
}











/*export default function ToggleButton() {
  const [isVisible, setIsVisible] = useState(true);

  const handleSubmit = () => setIsVisible(!isVisible);

  return (
    <div className="max-w-sm mx-auto bg-white p-4 shadow-md rounded-lg text-center">
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
      >
        表示/非表示
      </button>
      {isVisible && <p className="text-gray-700">テキストが表示されています。</p>}
    </div>
  );
}*/