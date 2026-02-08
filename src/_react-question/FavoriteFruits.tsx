export default function FavoriteFruits() {
  const fruits = ["りんご", "みかん", "バナナ"];

  // 選択されたフルーツを管理するstateを定義してください

  const handleChange = (fruit: string) => {
    // 選択したフルーツをstateに追加または取り除く処理を記述してください
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">好きなフルーツを選んでください</h2>
      {/* フルーツを選択するチェックボックスを表示してください */}

      {/* 選択されたフルーツのリストを表示してください */}
    </div>
  );
}

/*import { useState } from "react";

export default function FavoriteFruits() {
  const fruits = ["りんご", "みかん", "バナナ"];

  const [selectedFruits, setSelectedFruits] = useState<string[]>([]);

  const handleChange = (fruit: string) => {
    setSelectedFruits((prev) =>
      prev.includes(fruit) ? prev.filter((f) => f !== fruit) : [...prev, fruit],
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">好きなフルーツを選んでください</h2>
      <div>
        {fruits.map((fruit) => (
          <label key={fruit}>
            <input
              type="checkbox"
              checked={selectedFruits.includes(fruit)}
              onChange={() => handleChange(fruit)}
            />
            {fruit}
          </label>
        ))}
      </div>
      <p>
        選んだフルーツ:{" "}
        {selectedFruits.length > 0 ? selectedFruits.join(", ") : "なし"}
      </p>
    </div>
  );
}*/
