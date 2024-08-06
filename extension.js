// 這邊放一些補充的程式碼

// ++x vs x++
function plus_plus_x() {
    console.log(`這是一個 ++x 演示程式碼:`);
    let counter, a;
    // ++x
    counter = 1;
    a = ++counter; // (a => 2, counter => 2)
    console.log(`a => ${a}, counter => ${counter}`);
    // 等價於這個寫法:
    counter = 1;
    counter = counter + 1;
    a = counter;
    console.log(`a => ${a}, counter => ${counter}`);
}

function x_plus_plus() {
    console.log(`這是一個 x++ 演示程式碼:`);
    let counter, a;
    // x++
    counter = 1;
    a = counter++; // (a => 1, counter => 2)
    console.log(`a => ${a}, counter => ${counter}`);
    // 等價於這個寫法:
    counter = 1;
    a = counter;
    counter = counter + 1;
    console.log(`a => ${a}, counter => ${counter}`);
}

// 演示一下 ++x vs x++ 比較一下結果
plus_plus_x();
x_plus_plus();


// if 條件判斷式
// ex: 判斷輸入值 input 是 正數 負數 還是 0
function number_if_condition(input) {
    if(input > 0) {
        // 正數條件成立, 進行正數邏輯處理
        console.log(`input 是正數`);
    }
    else if(input < 0) {
        // 負數條件成立, 進行負數邏輯處理
        console.log(`input 是負數`);
    }
    else {
        // 非正數或負數, 進行 0 邏輯處理
        console.log(`input 是 0`);
    }
}


// 演示一下 判斷正負數的函數結果
number_if_condition(100);
number_if_condition(-55);
number_if_condition(0);