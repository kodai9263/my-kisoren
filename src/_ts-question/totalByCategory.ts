/*配列内のオブジェクトに含まれる値を使い、
categoryごとにpriceを集計したオブジェクトを作成する関数を実装してね✨。 
関数を実行した結果をconsole.logで表示してどんな感じになったのか確認しちゃお*/

// ① 引数となる定数の定義
const items = [
  { category: "服", price: 2000 },
  { category: "食べ物", price: 500 },
  { category: "服", price: 1500 },
];

// 引数を型定義

// 戻り値を型定義

// ② お題を満たす関数の定義
// ここに関数定義のコードを書いてください。

// ③ 関数の実行とconsole.logによる確認
// ここに関数を呼び出して実行結果を表示してください。
console.log(totalByCategory(items));

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/*interface Item {
  category: string;
  price: number;
}

interface TotalCategory {
  [category: string]: number;
}

const totalByCategory = (arr: Item[]): TotalCategory => {
  const result: TotalCategory = {};

  arr.forEach((i) => {
    if (result[i.category]) {
      result[i.category] = result[i.category] + i.price;
    } else {
      result[i.category] = i.price;
    }
  });

  return result;
};*/
