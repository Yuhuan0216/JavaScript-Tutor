// 第三課 資料類型

// 執行這個檔案 => PS D:\Beth\测试\123\JavaScript-Tutor> node ./types2.js

// 1. null(空值) 與 undefined(未定義)
// 用途: 在無法確定變數值的時候, 我們就會用以下兩種宣告方式. 
let Undefined;          // 宣告不賦予值就是未定義
console.log(`未定義: ${Undefined}`);
let Null = null;        // 宣告並賦予空值 (推薦)
console.log(`空值: ${Null}`);


console.log();


// 2. Array 陣列 隊列
// 用途: 在資料數目是多個(1或0或n)的情況下, 如果一個一個宣告會不好閱讀與管理
// 在這組資料的用途目的是一致的狀況下, 我們會用 陣列 來宣告他

// JavaScript的陣列也是一種用物件實作出來的

// 宣告一個班級的分數列表 第一位 10 分, 第二位 20 分 ...
// 使用中括號 [] 來宣告陣列
let gradeList = [10, 20, 0, 40, 50];
// 對陣列使用中括號 gradeList[i] 來訪問陣列裡的對象, i 是索引(index), 是有順序性的數字;
console.log(`秀出第一位同學的分數 => ${gradeList[0]}`);
console.log(`秀出第五位同學的分數 => ${gradeList[4]}`);
console.log(`秀出分數陣列的長度 => ${gradeList.length}`);  // 後面加 .length => 對前面指定的部分算數量
console.log(`秀出最後一位同學的分數 => ${gradeList[gradeList.length - 1]}`); // length 是長度, 長度 - 1 就是陣列尾巴的索引編號
console.log(`把第一位同學的分數換成 100 分 => ${gradeList[0] = 100}`);
console.log(`增加一位考90分的同學到陣列尾巴 ${gradeList.push(90)} => ${gradeList}`);   
// 詳細陣列物件的操作方法可以參考 https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array

// !!!!!!!!!! 作業 !!!!!!!!!!
let homeworkArray = ['SKT ', 'T1 '];

// 把 Array.push() 實作出來
function homework_ArrayPush(input) {
    // Array.push 在做的事情:
    // 把 input 放到 array 陣列的 最後面

    // 要怎麼放到最後面呢, 首先要知道陣列多長
    let currentLength = homeworkArray.length;   // 宣告 currentLength(當前長度) 為 homeworkArray.length
    homeworkArray[currentLength] = input;       // 把 homeworkArray 的第 currentLength 項 值宣告成 input
    currentLength = currentLength + 1;          // currentLength++
    return currentLength;
}

//米米鼠的筆記: 
//有點不懂 currentLength = currentLength + 1 放的位置

console.log(`Ans: ${homework_ArrayPush('FIGHTING!')}`);
console.log(`Ans: ${homeworkArray}`);
console.log();

// 3. Function 函數 (處理邏輯的資料型態)
// 用途: 用來封裝邏輯運算, 藉由規範好輸入與輸出, 把邏輯抽象化.
// Ex: 今天有一個函數 他可以把兩個字串的長度相加起來並返回出來.
// 第一種宣告方式
function subTwoStringLength(str1, str2) {
    return str1.length - str2.length;
};
console.log(`計算 'SKT' 與 'T1' 的長度差: ${subTwoStringLength('SKT', 'T1')}`);

// 第二種宣告方式
let sumTwoStringLength = function(str1, str2) {
    return str1.length + str2.length;
};
console.log(`計算 'SKT' 與 'T1' 的長度和: ${sumTwoStringLength('SKT', 'T1')}`);

// 使用箭頭函數的宣告方式
let multiTwoStringLength2 = (str1, str2) => {
    return str1.length * str2.length;
};
console.log(`計算 'SKT' 與 'T1' 的長度積: ${multiTwoStringLength2('SKT', 'T1')}`);


console.log();


// !!!!!!!!!! 作業 !!!!!!!!!!
// 輸入兩個數字x, y, 回傳 x 乘上 y 再加上 x 除 y 的餘數.
function homework(x, y) {
    return x * y + x % y;
}
console.log(`計算3乘上2再加上3除2的餘數: ${homework(3, 2)}`);


console.log();

console.log(`0807的作業!!!`);
// 輸入一個字串, 長度為奇數則回傳長度的平方, 長度為偶長度數則回傳的倒數, 0 就回傳 0.


function homework2(input1)  {
    let result = null;

    if(input1.length % 2 === 1) {
       
        result = `Ans: ${ input1.length **2 }`;
    }
    else if(input1.length  % 2 === 0) {
    
        result = `Ans: ${ 1/ input1.length}`;
    }
    else {
        result = `Ans: 0 `;
    }

    return result;
}
console.log(homework2(`SKT`))
console.log(homework2(`T1`))
console.log(homework2(0))

console.log();


// 4. 物件

