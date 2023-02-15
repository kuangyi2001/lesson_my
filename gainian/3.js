function sum(a,b){
    let args=Array.prototype.concat.apply([],arguments)
    // console.log(args);
    // const result=0;
    // for(let item of args){
    //     result+=item
    // }
    // return args.reduce()
    return args.reduce((sum,cur)=>sum+cur,0)
}
console.log(sum(2,4));