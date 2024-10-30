//変数の宣言
let num = 2

let result_3 = num % 3

let result_5 = num % 5

if (result_3 == 0 & result_5 == 0){
    console.log("3と5の倍数です")
}
else if (result_3 == 0){
    console.log("3の倍数です")
}
else if (result_5 == 0){
    console.log("5の倍数です")
}
else {
    console.log(num)
}