// 第一課 宣告 & 賦予

// 執行這個檔案 => PS D:\Beth\测试\123\JavaScript-Tutor> node ./aannounce.js

console.log(`\n變數宣告: `);
// 宣告變數 message, 賦予它 "hello" 字串為值
let message = "hello let";
// let => 區域變數宣告
// message => 命名一個變數, 名字自己取, 盡量清楚
// = => 賦予, 接在變數後面 把數值設定給變數
// "hello" => 以 hello let 為內容的字串值, 賦予的值可以是任何 合法的 數值或邏輯
console.log(`message = ${message}`);
console.log("message = " + message);

console.log(`\n變數宣告不賦值: `);
let message2;
console.log(`message2 = ${message2}`);
// 重新賦值 把 1 + 1 的結果 賦與給 變數 message2
console.log(`把 1 + 1 的結果 賦與給 message2`);
message2 = 1 + 1;
console.log(`message2 = ${message2}`);

console.log(`\n常數宣告: `);
// 宣告常數 MESSAGE, 賦予它 "hello" 字串為值
// const => 區域常數宣告
// MESSAGE => 命名一個常數, 通常使用全大寫字母, 底線做分割
// "hello" => 以 hello const 為內容的字串值. 
// 特別注意 常數(constant) 只能在宣告的時候賦值, 且後續不能改變或重新賦值
const MESSAGE = "hello const";
console.log(`MESSAGE = ${MESSAGE}`);