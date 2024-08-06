// 第三課 資料類型

// 執行這個檔案 => PS D:\Beth\测试\123\JavaScript-Tutor> node ./types2.js

// 1. null(空值) 與 undefined(未定義)
// 用途: 在無法確定變數值的時候, 我們就會用以下兩種宣告方式. 
let Undefined;          // 宣告不賦予值就是未定義
console.log(`未定義: ${Undefined}`);
let Null = null;        // 宣告並賦予空值 (推薦)
console.log(`空值: ${Null}`);


// 2. Array 陣列
// 用途: 在資料數目是多個(1或0或n)的情況下, 如果一個一個宣告會不好閱讀與管理
// 在這組資料的用途目的是一致的狀況下, 我們會用 陣列 來宣告他

// JavaScript的陣列也是一種用物件實作出來的

// 宣告一個班級的分數列表 第一位 10 分, 第二位 20 分 ...
let gradeList = [10, 20, 0, 40, 50];
console.log(`秀出第一位同學的分數 => ${gradeList[0]}`);
console.log(`秀出最後一位同學的分數 => ${gradeList[4]}`);
console.log(`秀出分數陣列的長度 => ${gradeList.length}`);  //後面加 .length => 對前面指定的部分算數量

console.log(`把第一位同學的分數換成 100 分 => ${gradeList[0] = 100}`);
console.log(`增加一位考90分的同學到陣列裡 ${gradeList.push(90)} => ${gradeList[5]}`);   
// 詳細陣列的操作方法可以參考 https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array

console.log();

// 3. Function 函數 (處理邏輯的資料型態)
// 用途: 用來封裝邏輯運算, 藉由規範好輸入與輸出, 把邏輯抽象化.
// Ex: 今天有一個函數 他可以把兩個字串的長度相加起來並返回出來.
function subTwoStringLength(str1, str2) {
    return str1.length - str2.length;
};
console.log(`計算 'SKT' 與 'T1' 的長度差: ${subTwoStringLength('SKT', 'T1')}`);

let sumTwoStringLength = function(str1, str2) {
    return str1.length + str2.length;
};
console.log(`計算 'SKT' 與 'T1' 的長度和: ${sumTwoStringLength('SKT', 'T1')}`);


console.log();

// 作業: 輸入兩個數字x, y, 回傳 x 乘上 y 再加上 x 除 y 的餘數.
function homework(x, y) {
    return x * y + x % y;
}
console.log(`計算3乘上2再加上3除2的餘數: ${homework(3, 2)}`);

// 4. 物件

