function sum(a,b){
    //借用数组的slice方法
//     let args=Array.prototype.slice.call(arguments);
//es6    let args=Array.from(arguments)
// 展开运算符
args=[...arguments]
     console.log(Array.prototype.toString.call(arguments,args));
     console.log(Array.prototype.toString.call(arguments));
     console.log(Array.prototype.toString.call(args));
}
sum(1,2)
