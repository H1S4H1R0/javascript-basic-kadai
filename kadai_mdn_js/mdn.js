// 現在の日付を取得
const now = new Date();

// 年・月・日を取得
const year = now.getFullYear();
const month = now.getMonth() + 1; // 月は0から始まるので+1
const day = now.getDate();

// フォーマットした日付を表示
const formattedDate = `${year}年${month}月${day}日`;
console.log(formattedDate);
