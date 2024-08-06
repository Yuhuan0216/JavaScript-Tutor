// 第二課 資料類型

// 執行這個檔案 => PS D:\Beth\测试\123\JavaScript-Tutor> node ./types1.js

// 1. Number 數字
let integer = 0;            // 整數 ex: 0
console.log(`整數: ${integer}`);
let float = 0.11111;        // 小數 ex: 0.11111
console.log(`小數: ${float}`);
let infinity = Infinity;    // Infinity (無限大) ex: 1 / 0
console.log(`無限大: ${Infinity}`);
let notANumber = NaN;       // NaN (Not a Number 不是數字) ex: "x" / 0
console.log(`不是數字: ${notANumber}`);

// !!!!!!!!!! 作業 !!!!!!!!!!
// 數字 <邏輯運算 / 邏輯判斷> 
console.log("\n數字運算:")
// 寫法規則 => 變數 運算符號 變數
// +   => 加法運算
console.log(`1 + 1 => ${1 + 1}`);
// -   => 減法運算
console.log(`3 - 1 => ${3 - 1}`);
// *   => 乘法運算
console.log(`2 * 4 => ${2 * 4}`);
// /   => 除法運算
console.log(`9 / 3 => ${9 / 3}`);
// >   => 大於
console.log(`1 > 1 => ${1 > 1}`);
// >=  => 大於等於
console.log(`2 >= 1 => ${2 >= 1}`);
// <   => 小於
console.log(`2 < 3 => ${2 < 3}`);
// <=  => 小於等於
console.log(`3 <= 1 => ${3 <= 1}`);
// === => 全等於
console.log(`3 = 1 => ${3 === 1}`);
// !== => 不等於
console.log(`3 !== 1 => ${3 !== 1}`);

console.log(`5 % 3 => ${5 % 3}`);

console.log();

// 2. String 字串
message = "這是一個字串";
console.log(message);
message = '這是一個字串';
console.log(message);
message = `這是一個字串: ${1 + 1}`; // 可以直接塞變數或邏輯進來
console.log(message);
console.log(`秀出 SKT T1 的長度 => ${"SKT T1".length}`);


// 字串 <邏輯運算 / 邏輯判斷> 
console.log("\n字串運算:")
// +   => 加法運算
console.log(`SKT + T1 => ${"SKT" + " " + "T1"}`);
// === => 全等於
console.log(`SKT = T1 => ${"SKT" === "T1"}`);
console.log(`T1 = T1 => ${"T1" === "T1"}`);
// !== => 不等於
console.log(`SKT !== T1 => ${"SKT" !== "T1"}`);
console.log(`T1 !== T1 => ${"T1" !== "T1"}`);
console.log();

// 3. Boolean 布林 判斷值 (對/錯)
message = true;     // 對
console.log(message);
message = false;    // 錯
console.log(message);

// 布林 <邏輯運算 / 邏輯判斷> 
console.log("\n布林運算:")
// === => 全等於
console.log(`true = true => ${true === true}`);
console.log(`false = true => ${false === true}`);
// !== => 不等於
console.log(`true !== true => ${true !== true}`);
console.log(`false !== true => ${false !== true}`);
// || => 或(or)
console.log(`true || true => ${true || true}`);     // true 
console.log(`false || true => ${false || true}`);   // true
console.log(`false || false => ${false || false}`); // false
// && => 且(and)
console.log(`true && true => ${true && true}`);     // true 
console.log(`false && true => ${false && true}`);   // false
console.log(`false && false => ${false && false}`); // false
