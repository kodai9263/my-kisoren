import React, { useState, useEffect } from "react";

const Timer = () => {
  // ここにstateを定義してください

  // ここにuseEffectを作成してください

  return (
    <div className="">
      {/* カウントを表示するpタグを作成してください */}
      <p>カウント:</p>
    </div>
  );
};

export default Timer;

/*const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="">
      <p>カウント:{time}</p>
    </div>
  );
};*/
